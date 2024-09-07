import ContainerWrapper from '@/components/ContainerWrapper';
import HPAboutImg from '@/assets/HPAboutImg.png';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
import { IAboutUs } from '@/types';
import dbConnect from '@/lib/db';
import Aboutus from '@/models/aboutus';
import DynamicText from '@/components/DynamicText';

interface Props {
  locale: Locale;
}
export default async function HPAboutSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  let aboutUs: IAboutUs | null = null;
  try {
    await dbConnect();
    aboutUs = await Aboutus.findOne();
  } catch (e) {
    console.error(e);
  }
  const t = await getTranslations('Homepage_AboutSection');
  let truncatedText;
  if (aboutUs) {
    truncatedText =
      aboutUs.text[locale].length > 350 ? aboutUs.text[locale].slice(0, 350) + '...' : aboutUs.text[locale];
  }
  return (
    <section id={'AboutSection'} className={'bg-white py-28'}>
      <ContainerWrapper
        className={'flex h-full items-center justify-center gap-x-6 1000:flex-col-reverse 1000:gap-y-14'}
      >
        <div className={'relative max-w-[50%] 1000:max-w-full'}>
          <div className={'absolute left-[-20px] top-[-20px] size-[80%] bg-secondGold'}></div>
          <img className={'relative z-[2]'} src={HPAboutImg.src} alt="HPAboutImg" />
        </div>
        <div className={'flex max-w-[50%] flex-col gap-y-[14px] 1000:max-w-full'}>
          <div className={'flex flex-col gap-y-[23px]'}>
            <div className={'flex flex-col gap-y-1'}>
              <h5 className={'text-base leading-[1.21rem] text-secondGold'}>{t('title')}</h5>
              <h1
                className={
                  'font-playfair max-w-[20ch] text-[2rem] font-semibold leading-[2.666rem] text-mainGreen 500:text-[28px] 500:leading-[37.32px]'
                }
              >
                {t('subtitle')}
              </h1>
            </div>
            <DynamicText
              className={'max-w-[50ch] text-base leading-7 text-newsText'}
              htmlString={truncatedText || ''}
            />
          </div>
          <Link className={'w-fit'} href={'/haqqimizda'}>
            <ButtonArrowRight className={'w-fit 500:w-full 500:justify-center'} text={t('button')} />
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
}
