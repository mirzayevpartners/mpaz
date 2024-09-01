import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import { INews } from '@/types';
import News from '@/models/news';
import dbConnect from '@/lib/db';
import { dateConverter } from '@/lib/dateConverter';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
import BigNewsDemo from '@/components/HpNewsSection/BigNewsDemo';
import SmallNewsDemo from '@/components/HpNewsSection/SmallNewsDemo';
interface SmallNewsProps {
  mainImage: string;
  title: string;
  createdAt: string;
}

interface Props {
  locale: Locale;
}

async function HPNewsSectionDemoNews({ locale }: Props) {
  unstable_setRequestLocale(locale);
  let news: INews[] = [];
  try {
    await dbConnect();
    news = await News.find({ active: true }).sort({ createdAt: -1 }).limit(5);
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }

  return (
    <div className={'flex justify-center gap-x-6 gap-y-8 1080:flex-col 1080:items-center'}>
      {news && news[0] && (
        <BigNewsDemo
          mainImage={news[0]?.mainImage?.src}
          title={news[0]?.title[locale]}
          createdAt={news[0]?.createdAt}
          slug={news[0].slug || '/'}
        />
      )}
      <Slider
        autoPlay={false}
        wrapperClassName={'max-w-fit'}
        contentClassName={'grid grid-cols-2 gap-x-6 gap-y-4 1080:flex'}
      >
        {/*<div className={'grid grid-cols-2 gap-x-6 gap-y-4 900:grid-cols-4'}>*/}
        {news.map((item, index) => {
          if (index !== 0) {
            return (
              <SmallNewsDemo
                key={item._id}
                slug={item.slug || '/'}
                mainImage={item.mainImage.src}
                title={item.title[locale]}
                createdAt={item.createdAt}
              />
            );
          }
        })}
        {/*</div>*/}
      </Slider>
    </div>
  );
}

export default function HPNewsSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Homepage_NewsSection');
  return (
    <section id={'NewsSection'} className={'bg-white py-12'}>
      <ContainerWrapper className={'flex h-full items-center justify-center'}>
        <div className={'flex w-full flex-col gap-y-12'}>
          <div className={'flex flex-col items-center gap-y-5'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <h5 className={'text-base leading-[19.36px] text-secondGold'}>{t('title')}</h5>
              <h2
                className={
                  'font-playfair text-center text-[32px] font-semibold leading-[42.66px] text-textBlue 500:text-[28px] 500:leading-[37.32px]'
                }
              >
                {t('subtitle')}
              </h2>
            </div>
            <Link href={'/xeberler'}>
              <ButtonArrowRight className={'w-fit'} text={t('button')} />
            </Link>
          </div>
          <HPNewsSectionDemoNews locale={locale} />
        </div>
      </ContainerWrapper>
    </section>
  );
}
