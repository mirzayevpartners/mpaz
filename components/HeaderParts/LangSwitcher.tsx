'use client';
import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from '@/components/ui/select';
import UKFlagSvg from '@/assets/UKFlagSvg.svg';
import AZFlagSvg from '@/assets/AZFlag.svg';
import RUFlagSvg from '@/assets/RUFlag.svg';
import { Locale } from '@/i18config';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
interface Props {
  locale: Locale;
}
export function LangSwitcher({ locale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const slugWithoutLocale = pathname.replace(`/${locale}`, '');
  const langs = [
    {
      flag: AZFlagSvg.src,
      locale: 'az',
    },
    {
      flag: UKFlagSvg.src,
      locale: 'en',
    },
    {
      flag: RUFlagSvg.src,
      locale: 'ru',
    },
  ];
  useEffect(() => {
    router.prefetch(`/${locale}${slugWithoutLocale}`);
  }, [locale, router]);
  return (
    <Select onValueChange={(value) => router.replace(`/${value}${slugWithoutLocale}`)}>
      <SelectTrigger className="!w-fit bg-transparent !border-none !p-0 !ring-transparent !outline-transparent !ring-offset-0 justify-normal">
        {langs.map((lang) => {
          if (lang.locale === locale) {
            return (
              <div key={lang.locale} className={'flex items-center gap-x-[0.563rem]'}>
                <img className={'w-5'} src={lang.flag} alt={'Flag'} />
                <p className={'text-sm font-medium leading-[1.059rem] text-white'}>{locale.toUpperCase()}</p>
              </div>
            );
          }
        })}
      </SelectTrigger>
      <SelectContent className={'z-[9001] !p-0'}>
        <SelectGroup>
          {langs.map((lang) => {
            if (lang.locale !== locale) {
              return (
                <SelectItem key={lang.locale} value={lang.locale}>
                  <div className={'flex items-center gap-x-[0.563rem]'}>
                    <img className={'w-5'} src={lang.flag} alt={'Flag'} />
                    <p className={'text-sm font-medium leading-[1.059rem] text-black'}>{lang.locale.toUpperCase()}</p>
                  </div>
                </SelectItem>
              );
            }
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
