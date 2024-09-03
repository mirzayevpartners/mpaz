import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import SingleNewsFullCard from '@/components/xeberler/SingleNewsFullCard';
import NewsDetailsRightPart from '@/components/xeberler/NewsDetailsRightPart';
import { INews } from '@/types';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

interface IPage {
  params: {
    slug: string;
    locale: Locale;
  };
}

export default async function Home({ params: { locale, slug } }: IPage) {
  unstable_setRequestLocale(locale);
  const t1 = await getTranslations('Common');
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
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('news'),
      href: '/xeberler',
    },
    {
      text: news.title[locale].slice(0, 42),
      href: `/xeberler/xeber/${slug}`,
    },
  ];
  return (
    <div className={''}>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col xl:flex-row gap-x-10 gap-y-10 py-8'}>
        <SingleNewsFullCard locale={locale} news={news} />
        <NewsDetailsRightPart slug={slug} locale={locale} />
      </ContainerWrapper>
    </div>
  );
}
