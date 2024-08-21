import EllipsForLeft from '@/assets/EllipseForLeft.svg';
import EllipsForBottom from '@/assets/EllipseForBottom.svg';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import JusticeStatue from '@/assets/JusticeStatue.png';
import HammerIcon from '@/assets/HammerIcon.svg';
import StarIcon from '@/assets/Star.svg';
import { IActiveWorks } from '@/types';
import dbConnect from '@/lib/db';
import Activeworks from '@/models/activeworks';
import NumberAnimation from '@/components/NumberAnimation';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Link } from '@/navigation';
interface Props {
  locale: Locale;
}

export default async function HPFirstSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Homepage_Section1');
  let activeWorks: IActiveWorks[] = [];
  try {
    await dbConnect();
    activeWorks = await Activeworks.find({});
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  return (
    <section className={'relative'}>
      <div className={'absolute left-[-4.563rem] top-[-7.938rem] -z-10'}>
        <img src={EllipsForLeft.src} alt={'ellips'} />
      </div>
      <div className={'absolute bottom-[-200px] left-[30%] -z-10'}>
        <img src={EllipsForBottom.src} alt={'ellips'} />
      </div>
      <div className={'h-full w-full'}>
        <ContainerWrapper>
          <div className={'800:items-[unset] flex items-center justify-between 800:flex-col 800:gap-y-6'}>
            <div className={'flex flex-col gap-y-6 800:gap-y-3 flex-[1.8]'}>
              <h1
                className={
                  'font-playfair text-[2.25rem] font-bold leading-[2.78rem] tracking-[-0.4px] text-mainGreen lg:text-[3.5rem] lg:leading-[4.943rem] xl:text-[4rem]'
                }
              >
                {t('title')}
              </h1>
              <p className={' font-base w-[90%] max-w-[60ch] leading-7 tracking-[-2.5%] text-mainGreen 800:!w-full'}>
                {t('description')}
              </p>
              <Link href={'#HPFormSection'} className={'w-fit'}>
                <ButtonArrowRight className={'w-fit 450:!w-full 450:justify-center'} text={t('reservation')} />
              </Link>
            </div>
            <div className={'flex-1'}>
              <div className={'relative 800:max-w-full max-w-[90%] h-full bg-paleGold'}>
                <div className={'inline-block relative bottom-[-100px] left-[-35px]'}>
                  <img className={'size-full'} src={JusticeStatue.src} />
                </div>
                <div
                  className={
                    'inline-block absolute 800:right-0 star-radius top-0 right-[-50px] 1240:w-[100px] 1240:h-[130px] w-[150px] h-[200px] bg-mainGreen'
                  }
                >
                  <div className={'relative size-full'}>
                    <div className={'inline-flex size-3/4 absolute right-0'}>
                      <img className={' size-full'} src={StarIcon.src} />
                    </div>
                    <div className={'absolute bottom-3 px-2'}>
                      <h3 className={'800:text-xs text-white text-sm leading-[16.94px] text-left tracking-[-0.025em]'}>
                        {t('star')}
                      </h3>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    'relative bottom-[70px] left-[-50px] flex h-[100px] w-[240px] items-center justify-center gap-x-4 bg-mainGreen'
                  }
                >
                  <div className={'flex size-[4.25rem] items-center justify-center rounded-full bg-paleGold'}>
                    <img
                      src={activeWorks[0]?.icon?.src || HammerIcon.src}
                      alt={'Hammer Icon'}
                      className={'HAMMER size-7'}
                    />
                  </div>
                  <div className={'flex flex-col items-center text-white'}>
                    <h6 className={'text-sm uppercase'}>{activeWorks[0]?.title[locale] || 'Aktiv işlər'}</h6>
                    <NumberAnimation
                      className={'w-[100px] font-bold text-[3rem]'}
                      number={+activeWorks[0]?.number || 324}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </section>
  );
}
