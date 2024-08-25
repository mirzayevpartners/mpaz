import { unstable_setRequestLocale } from 'next-intl/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
// false | 0 | number
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
import React, { Suspense } from 'react';
import { Locale } from '@/i18config';

export default function MediaSearchLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(params.locale);
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
