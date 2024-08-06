import { NextResponse, NextRequest } from 'next/server';
import { uploadToCloudinary } from '@/helpers/CldUploader';

export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'GET request is not supported' });
}

export async function POST(req: NextRequest) {
  // your auth check here if required

  const formData = await req.formData();
  const file = formData.get('file') as File;

  const fileBuffer = await file.arrayBuffer();

  const mimeType = file.type;
  const encoding = 'base64';
  const base64Data = Buffer.from(fileBuffer).toString('base64');

  // this will be used to upload the file
  const fileUri = 'data:' + mimeType + ';' + encoding + ',' + base64Data;

  const res = await uploadToCloudinary(fileUri, file.name);

  if (res.success && res.result) {
    return NextResponse.json({
      message: 'success',
      imgUrl: res.result.secure_url,
      public_id: res.result.public_id,
    });
  } else return NextResponse.json({ message: 'failure' });
}
