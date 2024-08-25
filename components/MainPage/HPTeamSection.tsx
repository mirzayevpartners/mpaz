import HPTeamLeftBg from '@/assets/HPTeamLeftBg.png';
import HPTeamRightBg from '@/assets/HPTeamRightBg.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import TeamMemberCard from '@/components/TeamMemberCard';
import { ITeam } from '@/types';
import dbConnect from '@/lib/db';
import Team from '@/models/team';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  locale: Locale;
}

async function TeamPartners({ locale }: Props) {
  unstable_setRequestLocale(locale);
  let team: ITeam[] = [];
  try {
    await dbConnect();
    team = await Team.find({}).limit(4);
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  return (
    <Slider wrapperClassName={'max-w-full md:max-w-[75%] min1080:max-w-[55%] min1250:max-w-[45%] min1500:max-w-[40%]'}>
      {team.map((item) => (
        <CarouselItem
          key={item._id}
          className={'flex items-center justify-center min300:basis-full min500:basis-[60%] min650:basis-[50%]'}
        >
          <TeamMemberCard
            photoUrl={item.photo.src}
            name={item.fullName[locale]}
            position={item.profession[locale]}
            email={item.email}
          />
        </CarouselItem>
      ))}
    </Slider>
  );
}

export default function HPTeamSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Homepage_TeamSection');
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
            <h3 className={'font-playfair text-[32px] font-semibold leading-[41.6px] text-mainGreen'}>{t('title')}</h3>
            <p className={'text-base leading-[29.82px] text-newsText'}>{t('description')}</p>
          </div>
          <Link className={'w-fit'} href={'/komandamiz'}>
            <ButtonArrowRight className={'w-fit'} text={t('button')} />
          </Link>
        </div>
        {/*<div className={'overflow-x-scroll'}>*/}
        <TeamPartners locale={locale} />
        {/*</div>*/}
      </ContainerWrapper>
    </section>
  );
}
