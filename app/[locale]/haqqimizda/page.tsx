import NewAboutImage from '@/assets/photorealistic-lawyer-environment.jpg'
import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18config';
import { IAboutUs } from '@/types';
import dbConnect from '@/lib/db';
import Aboutus from '@/models/aboutus';
import DynamicText from '@/components/DynamicText';
export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  let aboutUs: IAboutUs | null = null;
  try {
    await dbConnect();
    aboutUs = await Aboutus.findOne();
  } catch (e) {
    console.error(e);
  }
  const t1 = await getTranslations('Common');
  const t = await getTranslations('AboutPage');
  const links = [
    {
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('about'),
      href: '/haqqimizda',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col gap-y-8 py-8'}>
        <div>
          <img src={NewAboutImage.src} className={'w-full'} />
          {/*<img src={AboutPageBg.src} className={'hidden sm:block w-full'} />*/}
          {/*<img src={AboutPageBgSmall.src} className={'block sm:hidden w-full'} />*/}
        </div>
        <div className={'flex flex-col items-center gap-y-6'}>
          <div className={'flex flex-col gap-y-1 items-center'}>
            <h2 className={'text-secondGold text-[20px] leading-[24.2px]'}>{t('title')}</h2>
            <h1 className={'font-playfair text-center font-semibold text-mainGreen text-[32px] leading-[42.66px]'}>
              {t('subtitle')}
            </h1>
          </div>
          <DynamicText
            className={
              'font-roboto text-base leading-[28px] text-center text-newsText xl:max-w-[70%] md:max-w-[85%] max-w-full'
            }
            htmlString={aboutUs?.text[locale] || ''}
          />
          <div className={'flex flex-col gap-y-1 items-center'}>
            <h1 className={'font-playfair text-mainGreen font-semibold text-[32px] leading-[42.66px]'}>
              {t('mission')}
            </h1>
            <p className={'font-roboto text-base leading-7 text-center text-newsText'}>{t('missionDescription')}</p>
          </div>
        </div>
        {/*<Separator className={'bg-secondGold h-0.5'} />*/}
      </ContainerWrapper>
    </div>
  );
}
