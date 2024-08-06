import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import SingleNewsFullCard from '@/components/xeberler/SingleNewsFullCard';
import NewsDetailsRightPart from '@/components/xeberler/NewsDetailsRightPart';
import { INews } from '@/types';
import dbConnect from '@/lib/db';
import News from '@/models/news';

interface IPage {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  await dbConnect();
  const news = await News.find({});
  return news.map((ns) => ({
    slug: ns.slug,
  }));
}

export default async function Home({ params: { slug } }: IPage) {
  let news: INews | null = null;
  try {
    await dbConnect();
    news = await News.findOne({ slug: slug });
  } catch (e) {
    return <div>Server error</div>;
  }
  if (!news) {
    return <div>Not found</div>;
  }
  const links = [
    {
      text: 'Əsas səhifə',
      href: '/',
    },
    {
      text: 'Xəbərlər',
      href: '/xeberler',
    },
    {
      text: news.title.slice(0, 42),
      href: `/xeberler/${slug}`,
    },
  ];
  return (
    <div className={''}>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col xl:flex-row gap-x-10 gap-y-10 py-8'}>
        <SingleNewsFullCard news={news} />
        <NewsDetailsRightPart />
      </ContainerWrapper>
    </div>
  );
}
