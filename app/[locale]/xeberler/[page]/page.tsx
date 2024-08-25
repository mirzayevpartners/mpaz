import ContainerWrapper from '@/components/ContainerWrapper';
import TopShowLinks from '@/components/TopShowLinks';
import dbConnect from '@/lib/db';
import News from '@/models/news';
import { INews } from '@/types';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import SingleNewsCard from '@/components/SingleNewsCard';

export default async function Home({ params: { page, locale } }: { params: { page: string; locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Homepage_NewsSection');
  const t1 = await getTranslations('Common');
  let news: INews[] = [];
  const currPage = parseInt(page);
  try {
    await dbConnect();
    news = await News.find({ active: true })
      .skip((currPage - 1) * 12)
      .limit(12)
      .sort({ createdAt: -1 })
      .select('-content -images');
  } catch (e) {
    return <div>Server error</div>;
  }
  return (
    <div>
      <TopShowLinks
        links={[
          { text: t1('mainPage'), href: '/' },
          { text: t1('news'), href: '/xeberler' },
        ]}
      />
      <ContainerWrapper className={'grid md:!grid-cols-3 min500:grid-cols-2 gap-x-6 gap-y-10 py-8'}>
        {news &&
          news.length &&
          news.map((item) => {
            return <SingleNewsCard locale={locale} key={item._id} news={item} />;
          })}
      </ContainerWrapper>
    </div>
  );
}
