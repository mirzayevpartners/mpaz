import { Locale } from '@/i18config';

export const dynamic = 'force-dynamic';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 0;
// false | 0 | number
import React, { Suspense } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';

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
