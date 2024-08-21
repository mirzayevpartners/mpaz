import createMiddleware from 'next-intl/middleware';
import { locales } from '@/i18config';

export default createMiddleware({
  // A list of all locales that are supported
  locales: locales,

  // Used when no locale matches
  defaultLocale: 'az',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(az|en|ru)/:path*'],
};
