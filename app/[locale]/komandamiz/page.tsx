import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import TeamMemberCard from '@/components/TeamMemberCard';
import PageTitleCard from '@/components/PageTitleCard';
import dbConnect from '@/lib/db';
import { ITeam } from '@/types';
import Team from '@/models/team';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

export default async function Home({ params: { locale } }: { params: { locale: Locale } }) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('TeamPage');
  const t1 = await getTranslations('Common');
  let data: ITeam[] = [];
  try {
    await dbConnect();
    data = await Team.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  const links = [
    {
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('team'),
      href: '/komandamiz',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex gap-y-12 flex-col items-center py-8'}>
        <PageTitleCard title={t('title')} semiTitle={t('subtitle')} description={t('description')} />
        <div className={'grid gap-x-6 gap-y-6  grid-cols-1 min550:grid-cols-2 min850:grid-cols-3 min1200:grid-cols-4'}>
          {data.map((item) => {
            return (
              <TeamMemberCard
                cardClassName={''}
                imgClassName={''}
                key={item._id}
                photoUrl={item.photo.src}
                name={item.fullName[locale]}
                position={item.profession[locale]}
                email={item.email}
              />
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
