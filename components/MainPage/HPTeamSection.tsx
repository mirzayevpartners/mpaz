import HPTeamLeftBg from '@/assets/HPTeamLeftBg.png';
import HPTeamRightBg from '@/assets/HPTeamRightBg.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import HBTeamPartnerTwo from '@/assets/HBTeamPartnerTwo.png';
import HBTeamPartnerOne from '@/assets/HBTeamPartnerOne.png';
import HBTeamPartnerThree from '@/assets/HBTeamPartnerThree.png';
import HBTeamPartnerFour from '@/assets/HBTeamPartnerFour.png';
import { FaRegEnvelope } from 'react-icons/fa';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import Link from 'next/link';
import TeamMemberCard from '@/components/TeamMemberCard';
import { ITeam } from '@/types';
import dbConnect from '@/lib/db';
import Team from '@/models/team';
async function TeamPartners() {
  let team: ITeam[] = [];
  try {
    await dbConnect();
    team = await Team.find({}).limit(4);
  } catch (e) {
    return <div>Server Error</div>;
  }
  return (
    <Slider wrapperClassName={'min1080:max-w-[45%] md:max-w-[65%] 800:max-w-full'}>
      {team.map((item, index) => (
        <CarouselItem key={item._id} className={'flex basis-1/2 items-center justify-center 500:basis-2/3'}>
          <TeamMemberCard
            photoUrl={item.photo.src}
            name={item.fullName}
            position={item.profession}
            email={item.email}
          />
        </CarouselItem>
      ))}
    </Slider>
  );
}

export default function HPTeamSection() {
  return (
    <section id={'TeamSection'} className={'relative py-28'}>
      <div className={'absolute inset-0 -z-10 flex h-full w-full 900:flex-col'}>
        <div
          className={'w-1/2 bg-bgGray bg-no-repeat 900:h-1/2 900:w-full'}
          style={{ backgroundImage: `url(${HPTeamLeftBg.src})`, backgroundPositionY: 'bottom' }}
        ></div>
        <div className={'flex w-1/2 900:h-1/2 900:w-full'}>
          <div className={'w-1/2 bg-bgGray'}></div>
          <div
            className={'w-1/2 bg-mainGreen bg-no-repeat'}
            style={{ backgroundImage: `url(${HPTeamRightBg.src})`, backgroundPosition: 'center' }}
          ></div>
        </div>
      </div>
      <ContainerWrapper className={'flex h-full items-center justify-center gap-x-10 900:flex-col 900:gap-y-14'}>
        <div className={'flex max-w-[30%] flex-col gap-y-14 900:max-w-full'}>
          <div className={'flex flex-col gap-y-7'}>
            <h3 className={'font-playfair text-[32px] font-semibold leading-[41.6px] text-mainGreen'}>
              Peşəkar partnyorlarımızla tanış olun!
            </h3>
            <p className={'text-base leading-[29.82px] text-newsText'}>
              Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam.
              Arcu a quisque amet facilisis orci egestas{' '}
            </p>
          </div>
          <Link className={'w-fit'} href={'/komandamiz'}>
            <ButtonArrowRight className={'w-fit'} text={'Bütün komandamiz'} />
          </Link>
        </div>
        {/*<div className={'overflow-x-scroll'}>*/}
        <TeamPartners />
        {/*</div>*/}
      </ContainerWrapper>
    </section>
  );
}
