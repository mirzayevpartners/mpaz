import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from '@/i18config';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });
