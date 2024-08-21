import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/i18config';
import { notFound } from 'next/navigation';
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  return {
    messages: (await import(`./translations/messages/${locale}.json`)).default,
  };
});
