import News from '@/models/news';
import { Locale } from '@/i18config';
import { NewsPagination } from '@/components/xeberler/NewsPagination';
import React from 'react';
import dbConnect from '@/lib/db';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateStaticParams() {
  await dbConnect();
  const count = await News.countDocuments({ active: true });
  const pages = Math.ceil(count / 12);
  return Array.from({ length: pages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

export default async function NewsPageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale; page: string };
}) {
  await dbConnect();
  const count = await News.countDocuments({ active: true });
  const currPage = parseInt(params.page);
  unstable_setRequestLocale(params.locale);
  // console.log(currPage, count);
  return (
    <>
      {children}
      <NewsPagination currPage={currPage} count={count} />
    </>
  );
}
