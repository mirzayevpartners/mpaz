'use client';
export const dynamic = 'force-dynamic';

import { newsSearchAction } from '@/app/action';
import { useEffect, useState } from 'react';
import { INews } from '@/types';
import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import SingleNewsCard from '@/components/SingleNewsCard';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';

interface Props {
  params: {
    locale: Locale;
  };
  searchParams: { [key: string]: string | undefined };
}
// divClassName={'flex-row gap-x-6 1000:flex-col'} imgClassName={'w-[416px] h-[235px] 1000:w-[358px] 1000:h-[235px]'}
export default function Home({ params, searchParams }: Props) {
  const t1 = useTranslations('Common');
  const [news, setNews] = useState<INews[]>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await newsSearchAction(searchParams['nq'] as string);
      setNews(data as INews[]);
    }
    if (searchParams['nq'] as string) {
      fetchData();
    }
  }, [searchParams]);
  return (
    <div>
      <TopShowLinks
        links={[
          { text: t1('mainPage'), href: '/' },
          { text: t1('searchPage'), href: '/xeberaxtar' },
        ]}
      />
      <ContainerWrapper className={'grid md:!grid-cols-3 min500:grid-cols-2 gap-x-6 gap-y-10 py-8'}>
        {news.length === 0 && <h1>Hec bir netice tapilmadi</h1>}
        {news &&
          news.length > 0 &&
          news.map((item) => {
            return <SingleNewsCard imgClassName={''} locale={params.locale} key={item._id} news={item} />;
          })}
      </ContainerWrapper>
    </div>
  );
}
