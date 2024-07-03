import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import PageTitleCard from '@/components/PageTitleCard';
import LawIcon from '@/assets/law.svg';
import ServiceCard from '@/components/ServiceCard';

export default function Home() {
  const data = [
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      icon: LawIcon,
      title: 'Cinayət İşləri',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];
  const links = [
    {
      text: 'Əsas səhifə',
      href: '/',
    },
    {
      text: 'Xidmətlərimiz',
      href: '/xidmetlerimiz',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col items-center gap-y-12 py-8'}>
        <PageTitleCard
          title={'MÖVCUD'}
          semiTitle={'Xidmətlərimiz'}
          description={
            'Lorem ipsum dolor sit amet consectetur. Morbi eget at dui ornare sit laoreet et nisl morbi. Neque in nascetur id'
          }
        />
        <div className={'grid w-full xl:w-[85%] lg:!grid-cols-4 md:!grid-cols-3 min500:grid-cols-2 s'}>
          {data.map((item, index) => {
            return (
              <ServiceCard key={index} index={index} iconUrl={item.icon.src} title={item.title} text={item.text} />
            );
          })}
        </div>
      </ContainerWrapper>
    </div>
  );
}
