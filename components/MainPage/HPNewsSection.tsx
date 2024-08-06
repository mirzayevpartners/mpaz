import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import BigNewsImg from '@/assets/HPNewsBigNews.png';
import SmallNewsImg from '@/assets/HpNewsSmallNews.png';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';
import { INews } from '@/types';
import News from '@/models/news';
import dbConnect from '@/lib/db';
import { dateConverter } from '@/lib/dateConverter';
interface SmallNewsProps {
  mainImage: string;
  title: string;
  createdAt: string;
}
function SmallNews({ mainImage, title, createdAt }: SmallNewsProps) {
  return (
    <CarouselItem className={'group/small flex cursor-pointer flex-col gap-y-2 700:!basis-2/3 1080:basis-1/2'}>
      <div className={'overflow-hidden'}>
        <img
          className={'size-full transition duration-300 ease-in-out group-hover/small:scale-110'}
          src={mainImage}
          alt="Small News"
        />
      </div>
      <div className={'flex flex-col gap-y-2'}>
        <div className={'flex flex-col gap-y-1'}>
          <SmallGoldBtn className={'w-fit'} />
          <h2 className={'font-playfair text-base font-semibold text-mainGreen'}>
            {title.length > 60 ? title.slice(0, 60) + '...' : title}
          </h2>
        </div>
        <p className={'text-xs leading-[14.52px] text-secondText'}>{dateConverter(createdAt)}</p>
      </div>
    </CarouselItem>
  );
}

async function HPNewsSectionDemoNews() {
  let news: INews[] = [];
  try {
    await dbConnect();
    news = await News.find({ active: true }).sort({ createdAt: -1 }).limit(5);
  } catch (e) {
    return <div>Server Error</div>;
  }

  return (
    <div className={'flex gap-x-6 gap-y-8 1080:flex-col 1080:items-center'}>
      <Link legacyBehavior href={`/xeberler/${news[0].slug}`}>
        <div className={'group/big flex max-w-[75%] cursor-pointer flex-col gap-y-4 700:max-w-full'}>
          <div className={'flex items-center justify-center overflow-hidden'}>
            <img
              className={'size-full transition duration-300 ease-in-out group-hover/big:scale-110'}
              src={news[0].mainImage.src}
              alt="Big News"
            />
          </div>
          <div className={'flex flex-col gap-y-4'}>
            <div className={'flex flex-col gap-y-1'}>
              <SmallGoldBtn className={'w-fit'} />
              <h2 className={'font-playfair text-lg font-semibold text-mainGreen'}>{news[0].title}</h2>
            </div>
            <p className={'text-xs leading-[14.52px] text-secondText'}>{dateConverter(news[0].createdAt)}</p>
          </div>
        </div>
      </Link>
      <Slider
        autoPlay={false}
        wrapperClassName={'max-w-[50%] 1080:max-w-[75%] 700:!max-w-full'}
        contentClassName={'grid grid-cols-2 gap-x-6 gap-y-4 1080:flex'}
      >
        {/*<div className={'grid grid-cols-2 gap-x-6 gap-y-4 900:grid-cols-4'}>*/}
        {news.map((item, index) => {
          if (index !== 0) {
            return (
              <SmallNews key={item._id} mainImage={item.mainImage.src} title={item.title} createdAt={item.createdAt} />
            );
          }
        })}
        {/*</div>*/}
      </Slider>
    </div>
  );
}

export default function HPNewsSection() {
  return (
    <section id={'NewsSection'} className={'bg-white py-12'}>
      <ContainerWrapper className={'flex h-full items-center justify-center'}>
        <div className={'flex w-full flex-col gap-y-12'}>
          <div className={'flex flex-col items-center gap-y-5'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <h5 className={'text-base leading-[19.36px] text-secondGold'}>BİZİMLƏ ƏLAQƏLİ</h5>
              <h2
                className={
                  'font-playfair text-center text-[32px] font-semibold leading-[42.66px] text-textBlue 500:text-[28px] 500:leading-[37.32px]'
                }
              >
                Xəbərlər və ya yenilikləri izləmək üçün
              </h2>
            </div>
            <Link href={'/xeberler'}>
              <ButtonArrowRight className={'w-fit'} text={'Bütün xəbərlərə bax'} />
            </Link>
          </div>
          <HPNewsSectionDemoNews />
        </div>
      </ContainerWrapper>
    </section>
  );
}
