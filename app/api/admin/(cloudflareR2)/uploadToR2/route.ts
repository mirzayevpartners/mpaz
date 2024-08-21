import { NextRequest, NextResponse } from 'next/server';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
export async function POST(request: NextRequest) {
  // const { name, size, type } = await request.json();
  type FileObj = {
    name: string;
  };
  const { files } = await request.json();
  const objectsToUpload: FileObj[] = Array.isArray(files) ? files : [files];
  const r2 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    },
  });
  try {
    const presignedUrls = await Promise.all(
      objectsToUpload.map(async (fileObj) => {
        const command = new PutObjectCommand({
          Bucket: process.env.R2_BUCKET_NAME,
          Key: fileObj.name,
        });
        const signedUrl = await getSignedUrl(r2, command, { expiresIn: 300 });
        // const imgUrl = `https://pub-9407b4afaaed413bb89c20fb8d68d638.r2.dev/${fileObj.name}`;
        return { signedUrl, fileName: fileObj.name };
      })
    );
    return NextResponse.json({ presignedUrls });
  } catch (err) {
    return NextResponse.json({ message: 'error' });
  }
}
