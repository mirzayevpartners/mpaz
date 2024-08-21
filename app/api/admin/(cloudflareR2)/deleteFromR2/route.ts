import { NextRequest, NextResponse } from 'next/server';
import { DeleteObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import { deleteFromR2 } from '@/app/action';

export async function POST(req: NextRequest) {
  const { fileNames } = await req.json();
  try {
    await deleteFromR2(fileNames);
    return NextResponse.json({ message: 'success' });
  } catch (err) {
    return NextResponse.json({ message: 'error' });
  }
}
