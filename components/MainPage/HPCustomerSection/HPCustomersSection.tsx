import ContainerWrapper from '@/components/ContainerWrapper';
import HPCustomersImg from '@/assets/HPCustomersImg.png';
import React from 'react';
import HPCustomersSlider from '@/components/MainPage/HPCustomerSection/HPCustomersSlider';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  locale: Locale;
}
export default function HPCustomersSection({ locale }: Props): React.JSX.Element {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Homepage_TestimonialsSection');
  return (
    <section className={'bg-white py-12'}>
      <ContainerWrapper className={'flex h-full items-center justify-center'}>
        <div className={'flex 800:flex-col gap-y-8 size-full justify-center items-center'}>
          <div className={'hidden flex-col gap-y-1 800:flex items-center'}>
            <h5 className={'text-base uppercase leading-[19.36px] text-secondGold'}>{t('title')}</h5>
            <h2
              className={
                'font-playfair text-[32px] text-center font-semibold leading-[42.66px] text-textBlue max-w-[20ch] 800:max-w-full'
              }
            >
              {t('subtitle')}
            </h2>
          </div>
          <div className={''}>
            <img src={HPCustomersImg.src} alt="HPCustomersImg" className={'w-full'} />
          </div>
          <div className={'flex w-1/2 800:w-[90%] flex-col gap-y-4 justify-center items-center 800:items-start'}>
            <div className={'flex flex-col gap-y-1 ml-[15px] 800:hidden items-center'}>
              <h5 className={'text-base uppercase leading-[19.36px] text-secondGold'}>{t('title')}</h5>
              <h2
                className={
                  'text-[32px] text-center font-semibold leading-[42.66px] text-textBlue max-w-[20ch] 800:max-w-full'
                }
              >
                {t('subtitle')}
              </h2>
            </div>
            <HPCustomersSlider locale={locale} />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
