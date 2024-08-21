import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import PageTitleCard from '@/components/PageTitleCard';
import ServiceCard from '@/components/ServiceCard';
import dbConnect from '@/lib/db';
import { IService } from '@/types';
import Service from '@/models/service';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Locale } from '@/i18config';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('ServicesPage');
  const t1 = await getTranslations('Common');
  let data: IService[] = [];
  try {
    await dbConnect();
    data = await Service.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  const links = [
    {
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('services'),
      href: '/xidmetlerimiz',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col items-center gap-y-12 py-8'}>
        <PageTitleCard title={t('title')} semiTitle={t('subtitle')} description={t('description')} />
        <div className={'grid w-full xl:w-[85%] lg:!grid-cols-4 md:!grid-cols-3 min500:grid-cols-2 s'}>
          {data.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                index={index}
                iconUrl={item.icon.src}
                title={item.title[locale]}
                text={item.description[locale]}
              />
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
