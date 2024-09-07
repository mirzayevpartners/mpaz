import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import TopShowLinks from '@/components/TopShowLinks';
import AboutPageBg from '@/assets/AboutPageBG.png';
import AboutPageBgSmall from '@/assets/AboutPageBgSmall.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import { IService } from '@/types';
import dbConnect from '@/lib/db';
import Service from '@/models/service';
import DynamicText from '@/components/DynamicText';

interface Props {
  params: {
    locale: Locale;
    slug: string;
  };
}

export default async function Home({ params: { locale, slug } }: Props) {
  let service: IService | null = null;
  try {
    await dbConnect();
    service = await Service.findOne({ slug, active: true });
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  unstable_setRequestLocale(locale);
  const t1 = await getTranslations('Common');
  const t = await getTranslations('ServicesPage');
  const links = [
    {
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('services'),
      href: '/xidmetlerimiz',
    },
    {
      text: service?.title[locale] || '',
      href: `/xidmetlerimiz/${slug}`,
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col gap-y-8 py-8'}>
        <div>
          <img src={AboutPageBg.src} className={'hidden sm:block w-full'} />
          <img src={AboutPageBgSmall.src} className={'block sm:hidden w-full'} />
        </div>
        <div className={'flex flex-col items-center gap-y-6'}>
          <div className={'flex flex-col gap-y-1 items-center'}>
            <h2 className={'uppercase text-secondGold text-[20px] leading-[24.2px]'}>{t('subtitle')}</h2>
            <h1 className={'font-playfair text-center font-semibold text-mainGreen text-[32px] leading-[42.66px]'}>
              {service?.title[locale]}
            </h1>
          </div>
          <DynamicText
            className={
              'font-roboto text-base leading-[28px] text-center text-newsText xl:max-w-[70%] md:max-w-[85%] max-w-full'
            }
            htmlString={service?.description[locale] || ''}
          />
        </div>
      </ContainerWrapper>
    </div>
  );
}
