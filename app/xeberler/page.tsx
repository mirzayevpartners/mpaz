import ContainerWrapper from '@/components/ContainerWrapper';
import Link from 'next/link';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import TopShowLinks from '@/components/TopShowLinks';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { INews } from '@/types';
import { dateConverter } from '@/lib/dateConverter';

interface SingleNewsCardProps {
  news: INews;
}
// href={`/news/${news.slug}`}
function SingleNewsCard({ news }: SingleNewsCardProps) {
  const { slug, title, createdAt } = news;
  const truncatedTitle = title.length > 50 ? `${title.slice(0, 50)}...` : title;
  const formattedDate = dateConverter(createdAt);

  return (
    <Link href={`/xeberler/${slug}`} legacyBehavior>
      <div className="flex cursor-pointer group flex-col gap-y-6">
        <div className="overflow-hidden max-h-[235px]">
          <img
            className="size-full transition duration-300 ease-in-out group-hover:scale-110"
            src={news.mainImage.src}
            alt="Small News"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-col gap-y-4">
            <SmallGoldBtn className="w-fit" />
            <h2 className="font-playfair text-base font-semibold text-mainGreen">{truncatedTitle}</h2>
          </div>
          <p className="text-xs leading-[14.52px] text-secondText">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function Home() {
  let news: INews[] = [];
  try {
    await dbConnect();
    news = await News.find({ active: true }).select('-content -images');
  } catch (e) {
    return <div>Server error</div>;
  }
  return (
    <div>
      <TopShowLinks
        links={[
          { text: 'Əsas səhifə', href: '/' },
          { text: 'Xəbərlər', href: '/xeberler' },
        ]}
      />
      <ContainerWrapper className={'grid md:!grid-cols-3 min500:grid-cols-2  gap-x-6 gap-y-10 py-8'}>
        {news &&
          news.length &&
          news.map((item) => {
            return <SingleNewsCard key={item._id} news={item} />;
          })}
      </ContainerWrapper>
    </div>
  );
}
