'use server';
import { cookies } from 'next/headers';

import { NextResponse } from 'next/server';
import { DeleteObjectsCommand, S3Client } from '@aws-sdk/client-s3';
import dbConnect from '@/lib/db';
import { IFormDetails, IGallery, INews, IVideo } from '@/types';
import Form from '@/models/form';
import News from '@/models/news';
import Video from '@/models/video';
import Gallery from '@/models/gallery';
import { Locale } from '@/i18config';

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

export async function dataSearchAction(
  query: string,
  locale: Locale
): Promise<{ news: INews[]; video: IVideo[]; gallery: IGallery[] }> {
  const _cookies = cookies();
  try {
    await dbConnect();
    const path = locale === 'az' ? 'title.az' : locale === 'en' ? 'title.en' : 'title.ru';
    // Run the queries in parallel using Promise.all
    const [newsResults, videoResults, galleryResults] = await Promise.all([
      News.aggregate([
        {
          $search: {
            index: 'search',
            autocomplete: {
              query: query,
              path: path,
              tokenOrder: 'any',
            },
          },
        },
        {
          $match: { active: true },
        },
        {
          $sort: { customDate: -1 },
        },
        {
          $skip: 0,
        },
        {
          $limit: 10,
        },
        {
          $project: {
            _id: 1,
            title: 1,
            createdAt: 1,
            image: 1,
            slug: 1,
            mainImage: 1,
          },
        },
      ]),
      Video.aggregate([
        {
          $search: {
            index: 'searchvideo',
            autocomplete: {
              query: query,
              path: path,
              tokenOrder: 'any',
            },
          },
        },
        {
          $match: { active: true },
        },
        {
          $sort: { customDate: -1 },
        },
        {
          $skip: 0,
        },
        {
          $limit: 10,
        },
      ]),
      Gallery.aggregate([
        {
          $search: {
            index: 'gallerysearch',
            autocomplete: {
              query: query,
              path: path,
              tokenOrder: 'any',
            },
          },
        },
        {
          $match: { active: true },
        },
        {
          $sort: { customDate: -1 },
        },
        {
          $skip: 0,
        },
        {
          $limit: 10,
        },
      ]),
    ]);

    return {
      news: JSON.parse(JSON.stringify(newsResults)),
      video: JSON.parse(JSON.stringify(videoResults)),
      gallery: JSON.parse(JSON.stringify(galleryResults)),
    };
  } catch (e) {
    return { news: [], video: [], gallery: [] };
  }
}

export async function gallerySearchAction(title: 'video' | 'photo', query: string, locale: Locale) {
  const _cookies = cookies();
  try {
    await dbConnect();
    let data: IVideo[] | IGallery[];
    if (title === 'video') {
      const path = locale === 'az' ? 'title.az' : locale === 'en' ? 'title.en' : 'title.ru';
      data = await Video.aggregate([
        {
          $search: {
            index: 'searchvideo',
            autocomplete: {
              query: query,
              path: path,
              tokenOrder: 'any',
            },
          },
        },
        {
          $match: { active: true },
        },
        {
          $sort: { customDate: -1 },
        },
      ]);
    } else if (title === 'photo') {
      data = await Gallery.aggregate([
        {
          $search: {
            index: 'gallerysearch',
            autocomplete: {
              query: query,
              path: path,
              tokenOrder: 'any',
            },
          },
        },
        {
          $match: { active: true },
        },
        {
          $sort: { customDate: -1 },
        },
      ]);
    }
    return JSON.parse(JSON.stringify(data));
  } catch (e) {
    return [];
  }
}
