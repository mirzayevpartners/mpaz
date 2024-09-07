import React from 'react';
import dbConnect from '@/lib/db';
import { IService } from '@/types';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18config';
import Service from '@/models/service';

export async function generateStaticParams() {
  await dbConnect();
  const services: IService[] = await Service.find({ active: true }).limit(20).select('slug');
  return services.map((item) => ({
    slug: item.slug,
  }));
}

export default function SingleServicesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(params.locale);
  return <>{children}</>;
}
