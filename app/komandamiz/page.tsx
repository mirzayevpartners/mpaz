import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import TeamMemberCard from '@/components/TeamMemberCard';
import PageTitleCard from '@/components/PageTitleCard';
import dbConnect from '@/lib/db';
import { ITeam } from '@/types';
import Team from '@/models/team';

export default async function Home() {
  let data: ITeam[] = [];
  try {
    await dbConnect();
    data = await Team.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  const links = [
    {
      text: 'Əsas səhifə',
      href: '/',
    },
    {
      text: 'Komandamız',
      href: '/komandamiz',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex gap-y-12 flex-col items-center py-8'}>
        <PageTitleCard
          title={'KOMANDAMIZ'}
          semiTitle={'Peşəkar partnyorlarımızla tanış olun!'}
          description={
            'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas'
          }
        />
        <div
          className={'grid 400:w-full gap-x-4 gap-y-6 xl:w-[85%] xl:!grid-cols-4 md:!grid-cols-3 min500:grid-cols-2'}
        >
          {data.map((item) => {
            return (
              <TeamMemberCard
                cardClassName={'400:max-w-[360px]'}
                imgClassName={'400:w-full'}
                key={item._id}
                photoUrl={item.photo.src}
                name={item.fullName}
                position={item.profession}
                email={item.email}
              />
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
