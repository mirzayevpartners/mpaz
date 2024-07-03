import { FaRegEnvelope } from 'react-icons/fa';
import { cn } from '@/lib/utils';

interface ITeamMemberCard {
  photoUrl: string;
  name: string;
  position: string;
  email: string;
  cardClassName?: string;
  imgClassName?: string;
}

export default function TeamMemberCard({
  photoUrl,
  name,
  position,
  email,
  cardClassName,
  imgClassName,
}: ITeamMemberCard) {
  return (
    <div className={cn('flex max-w-[253px] flex-col duration-300 hover:shadow-lg', cardClassName)}>
      <div className={'flex items-center justify-center'}>
        <img className={cn(imgClassName)} src={photoUrl} alt={name} />
      </div>
      <div className={'flex w-full flex-col gap-y-1 bg-white p-4 '}>
        <p className={'text-xs font-semibold leading-[14.52px] text-secondGold'}>{position}</p>
        <h4 className={'text-lg font-semibold leading-6 text-mainGreen 800:text-sm'}>{name}</h4>
        <div className={'flex items-center gap-x-1'}>
          <FaRegEnvelope className={'text-secondText'} />
          <p className={'text-[14px] leading-[16.94px] text-secondText'}>{email}</p>
        </div>
      </div>
    </div>
  );
}
