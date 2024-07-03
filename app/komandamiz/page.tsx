import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import HBTeamPartnerOne from '@/assets/HBTeamPartnerOne.png';
import HBTeamPartnerTwo from '@/assets/HBTeamPartnerTwo.png';
import HBTeamPartnerThree from '@/assets/HBTeamPartnerThree.png';
import HBTeamPartnerFour from '@/assets/HBTeamPartnerFour.png';
import TeamMemberCard from '@/components/TeamMemberCard';
import PageTitleCard from '@/components/PageTitleCard';

export default function Home() {
  const data = [
    {
      photo: HBTeamPartnerOne,
      name: 'FIDAN IBRAHIMOVA',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerTwo,
      name: 'SƏNAN ŞAMİL',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerThree,
      name: 'CƏMİLƏ AĞAYEVA',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerFour,
      name: 'QULAM ISMAYILZADE',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerOne,
      name: 'FIDAN IBRAHIMOVA',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerTwo,
      name: 'SƏNAN ŞAMİL',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerThree,
      name: 'CƏMİLƏ AĞAYEVA',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
    {
      photo: HBTeamPartnerFour,
      name: 'QULAM ISMAYILZADE',
      position: 'HÜQUQŞUNAS',
      email: 'Fidani@m-p.az',
    },
  ];
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
                key={item.name}
                photoUrl={item.photo.src}
                name={item.name}
                position={item.position}
                email={item.email}
              />
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
