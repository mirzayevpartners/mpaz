import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import SingleNewsFullCard from '@/components/xeberler/SingleNewsFullCard';
import NewsDetailsRightPart from '@/components/xeberler/NewsDetailsRightPart';

interface IPage {
  params: {
    slug: string;
  };
}

export default function Home({ params: { slug } }: IPage) {
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
      text: 'Xeber Title',
      href: `/xeberler/${slug}`,
    },
  ];
  return (
    <div className={''}>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'flex flex-col xl:flex-row gap-x-10 gap-y-10 py-8'}>
        <SingleNewsFullCard />
        <NewsDetailsRightPart />
      </ContainerWrapper>
    </div>
  );
}
