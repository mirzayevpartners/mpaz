export type Locale = (typeof locales)[number];

export const locales = ['az', 'en', 'ru'] as const;
export const defaultLocale: Locale = 'az';
