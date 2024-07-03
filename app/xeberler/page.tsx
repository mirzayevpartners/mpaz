import ContainerWrapper from '@/components/ContainerWrapper';
import Link from 'next/link';
import NewsImg from '@/assets/NewsImg.png';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import TopShowLinks from '@/components/TopShowLinks';

function SingleNewsCard() {
  return (
    <div className={'flex cursor-pointer group flex-col gap-y-6'}>
      <div className={'overflow-hidden'}>
        <img
          className={'size-full transition duration-300 ease-in-out group-hover:scale-110'}
          src={NewsImg.src}
          alt="Small News"
        />
      </div>
      <div className={'flex flex-col gap-y-4'}>
        <div className={'flex flex-col gap-y-4'}>
          <SmallGoldBtn className={'w-fit'} />
          <h2 className={'text-base font-semibold text-mainGreen'}>
            &quot;Mirzəyev və Partnyorları&quot; Vəkil Bürosunda Müstəqilliyin Bərpas...
          </h2>
        </div>
        <p className={'text-xs leading-[14.52px] text-secondText'}>19.03.2023</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <TopShowLinks
        links={[
          { text: 'Əsas səhifə', href: '/' },
          { text: 'Xəbərlər', href: '/xeberler' },
        ]}
      />
      <ContainerWrapper className={'grid md:!grid-cols-3 min500:grid-cols-2  gap-x-6 gap-y-10 py-8'}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
          return <SingleNewsCard key={item} />;
        })}
      </ContainerWrapper>
    </div>
  );
}
