import NewsImgSlider from '@/components/xeberler/NewsImgSlider';
import { INews } from '@/types';
import { dateConverterWithTime } from '@/lib/dateConverter';
import DynamicText from '@/components/DynamicText';
import { Locale } from '@/i18config';
import ShareNewsPlugin from '@/components/xeberler/ShareNewsPlugin';
export default function SingleNewsFullCard({ news, locale }: { news: INews; locale: Locale }) {
  return (
    <div className={'flex flex-[2] flex-col gap-y-[44px]'}>
      <div className={'flex flex-col gap-y-[44px]'}>
        <div className={'flex flex-col gap-y-[34px]'}>
          <div className={'BASLIQ flex flex-col gap-y-[26px]'}>
            <div className={'flex flex-col gap-y-2'}>
              <div
                className={
                  'h-7 px-2 inline-flex w-fit items-center justify-center bg-secondGold text-white text-center text-sm leading-[14px]'
                }
              >
                {dateConverterWithTime(news.createdAt)}
              </div>
              <h1
                className={
                  'font-playfair font-bold text-[28px] leading-[44.99px] sm:text-[40px] sm:leading-[53.07px] text-mainGreen'
                }
              >
                {news.title[locale]}
              </h1>
            </div>
          </div>
          <NewsImgSlider imgs={news.images} />
        </div>
        <DynamicText className={'font-roboto text-base leading-7 text-newsText'} htmlString={news.content[locale]} />
      </div>
      <div className={'h-16 border-t border-t-myGray flex items-center justify-center pt-5 sm:pt-0 sm:justify-start'}>
        <div className={'flex items-center gap-x-8 flex-col gap-y-4 sm:flex-row'}>
          <p className={'font-roboto text-sm leading-[21.63px] text-newsText'}>Sosial şəbəkələrdə paylaş</p>
          <ShareNewsPlugin media={news.mainImage.src} title={news.title[locale]}/>
        </div>
      </div>
    </div>
  );
}
