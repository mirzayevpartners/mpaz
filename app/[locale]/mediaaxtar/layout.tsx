export const dynamic = 'force-dynamic';
// 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 0;
// false | 0 | number
import React, { Suspense } from 'react';

export default function MediaSearchLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
}
