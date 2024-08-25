import React from 'react';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { INews } from '@/types';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18config';

export async function generateStaticParams() {
  await dbConnect();
  const news: INews[] = await News.find({ active: true }).sort({ createdAt: -1 }).limit(20).select('slug');
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export default function SingleNewsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(params.locale);
  return <>{children}</>;
}
