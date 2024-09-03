import { Separator } from '@/components/ui/separator';
import { SlMagnifier } from 'react-icons/sl';
import SmallShownNewsIMG from '@/assets/SmallShownNewsPNG.png';
import { IoStar } from 'react-icons/io5';
import { Suspense } from 'react';
import NewsSearchInput from '@/components/xeberler/NewsSearchInput';
import { INews } from '@/types';
import News from '@/models/news';
import dbConnect from '@/lib/db';
import { dateConverter } from '@/lib/dateConverter';
import { Locale } from '@/i18config';
import image from 'react-multi-carousel/dev/components/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import SmallShownNewsCard from '@/components/xeberler/SmallShownNewsCard';


export default async function NewsDetailsRightPart({ slug, locale }: { slug: string; locale: Locale }) {
  unstable_setRequestLocale(locale);
  let news: INews[] | null = null;
  try {
    await dbConnect();
    news = await News.find({ active: true, slug: { $ne: slug } })
      .sort({ createdAt: -1 })
      .limit(4)
      .select('slug mainImage title createdAt');
  } catch (e) {
    console.log(e);
    return <div>Server error</div>;
  }
  // console.log(news);
  return (
    <div className={'flex flex-1 flex-col'}>
      <div className={'flex flex-col gap-y-[50px]'}>
        <div className={'flex flex-col gap-y-6'}>
          <h3 className={'font-playfair font-semibold text-xl text-mainGreen'}>Saytda axtar</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <NewsSearchInput />
          </Suspense>
        </div>
        <Separator className={'h-[1px] bg-myGray'} />
      </div>
      <div className={'flex flex-col gap-y-6'}>
        <h4 className={'font-playfair text-mainGreen font-semibold text-xl'}>Digər bənzər məqalələr</h4>
        <div className={'flex flex-col gap-y-[32px]'}>
          {news.map((item) => {
            return (
              <SmallShownNewsCard
                title={item.title[locale]}
                img={item.mainImage.src}
                slug={item.slug}
                date={item.createdAt}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
