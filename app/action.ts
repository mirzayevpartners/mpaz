'use server';
import { cookies } from 'next/headers';

import { NextResponse } from 'next/server';
import { DeleteObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import dbConnect from '@/lib/db';
import { IFormDetails, IGallery, IVideo } from '@/types';
import Form from '@/models/form';
import News from '@/models/news';
import Video from '@/models/video';
import Gallery from '@/models/gallery';

export async function deleteFromR2(fileNames: string | string[]) {
  const _cookies = cookies();
  const objectsToDelete = Array.isArray(fileNames) ? fileNames : [fileNames];
  const r2 = new S3Client({
    region: 'auto',
    endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId: process.env.R2_ACCESS_KEY_ID || '',
      secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || '',
    },
  });
  const deleteParams = {
    Bucket: process.env.R2_BUCKET_NAME,
    Delete: {
      Objects: objectsToDelete.map((fileName) => ({ Key: fileName })),
      Quiet: true, // Set to false if you want to receive a list of deleted files
    },
  };
  const deleteCommand = new DeleteObjectsCommand(deleteParams);
  try {
    await r2.send(deleteCommand);
    return NextResponse.json({ message: 'success' });
  } catch (err) {
    return NextResponse.json({ message: 'error' });
  }
}

export async function saveFormData(formData: FormData): Promise<{ success: 'error' | 'success' }> {
  const _cookies = cookies();
  try {
    const data: IFormDetails = {
      fullName: formData.get('fullName') as string,
      phoneNumber: formData.get('phoneNumber') as string,
      emailAddress: formData.get('emailAddress') as string,
      customDate: new Date(formData.get('date') as string),
      firstTime: formData.get('firstTime') === 'on',
    };
    await dbConnect();
    await new Form(data).save();
    return { success: 'success' };
  } catch (e) {
    return { success: 'error' };
  }
}

export async function newsSearchAction(query: string) {
  const _cookies = cookies();
  try {
    await dbConnect();
    const regexQuery = new RegExp(query, 'i');
    const newsResults = await News.find({
      $or: [
        { 'title.az': { $regex: regexQuery } },
        { 'title.en': { $regex: regexQuery } },
        { 'title.ru': { $regex: regexQuery } },
      ],
    })
      .sort({ createdAt: -1 })
      .select('-content -images');
    // console.log(newsResults);
    return JSON.parse(JSON.stringify(newsResults));
  } catch (e) {
    return [];
  }
}
export async function gallerySearchAction(title: 'video' | 'photo', query: string) {
  const _cookies = cookies();
  try {
    await dbConnect();
    const regexQuery = new RegExp(query, 'i');
    let data: IVideo[] | IGallery[];
    if (title === 'video') {
      data = await Video.find({
        $or: [
          { 'title.az': { $regex: regexQuery } },
          { 'title.en': { $regex: regexQuery } },
          { 'title.ru': { $regex: regexQuery } },
        ],
      });
    } else if (title === 'photo') {
      data = await Gallery.find({
        $or: [
          { 'title.az': { $regex: regexQuery } },
          { 'title.en': { $regex: regexQuery } },
          { 'title.ru': { $regex: regexQuery } },
        ],
      });
    }
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    return [];
  }
}
