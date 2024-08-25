import React from 'react';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { INews } from '@/types';

export async function generateStaticParams() {
  await dbConnect();
  const news: INews[] = await News.find({ active: true }).sort({ createdAt: -1 }).limit(20).select('slug');
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default function SingleNewsLayout({ children }: { children: React.ReactNode }) {
  return { children };
}
