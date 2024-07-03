import HPServicesBG from '@/assets/HPServicesBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import LawIcon from '@/assets/law.svg';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';
import ServiceCard from '@/components/ServiceCard';

function HPServicesCases() {
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
  ];
  return (
    <div className={'grid w-full grid-cols-4 500:!grid-cols-1 1080:grid-cols-2'}>
      {data.map((item, index) => {
        return <ServiceCard key={index} index={index} iconUrl={item.icon.src} title={item.title} text={item.text} />;
      })}
    </div>
  );
}

export default function HPServicesSection() {
  return (
    <section
      id={'ServicesSection'}
      className={'bg-bgGray bg-no-repeat py-12'}
      style={{ backgroundImage: `url(${HPServicesBG.src})`, backgroundPositionX: 'right' }}
    >
      <ContainerWrapper className={'flex h-full flex-col items-center justify-center gap-y-14'}>
        <div className={'flex flex-col items-center gap-y-5'}>
          <div className={'flex flex-col items-center gap-y-4'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <h4 className={'text-base leading-[1.21rem] text-secondGold'}>MÖVCUD</h4>
              <h2 className={'text-[32px] font-semibold leading-[42.66px] text-mainGreen'}>Xidmətlərimiz</h2>
            </div>
            <p className={'max-w-[50ch] text-center text-sm leading-[21.77px] text-secondText'}>
              Lorem ipsum dolor sit amet consectetur. Morbi eget at dui ornare sit laoreet et nisl morbi. Neque in
              nascetur id{' '}
            </p>
          </div>
          <Link href={'/xidmetlerimiz'}>
            <ButtonArrowRight text={'Bütün xidmətlər'} />
          </Link>
        </div>
        <HPServicesCases />
      </ContainerWrapper>
    </section>
  );
}
