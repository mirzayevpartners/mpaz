import { FaArrowRight } from 'react-icons/fa6';

interface IServiceCard {
  index: number;
  iconUrl: string;
  title: string;
  text: string;
}

export default function ServiceCard({ index, iconUrl, title, text }: IServiceCard) {
  return (
    <div
      style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8' }}
      className={
        'group flex h-[276px] flex-col items-center justify-center gap-y-4 border border-borderGray duration-300 hover:shadow-xl'
      }
    >
      <div className={'flex size-16 items-center justify-center rounded-full bg-mainGreen'}>
        <img src={iconUrl} alt={title} />
      </div>
      <div className={'flex flex-col items-center gap-y-2'}>
        <h3 className={'text-[1.5rem] uppercase leading-[1.875rem] text-mainGreen'}>{title}</h3>
        <p className={'max-w-[25ch] text-center text-sm text-secondText'}>{text}</p>
      </div>
      <FaArrowRight size={24} className={'mt-2 text-secondGold duration-300 group-hover:translate-x-[10px]'} />
    </div>
  );
}
