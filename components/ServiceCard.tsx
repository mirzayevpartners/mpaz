'use client';
import { FaArrowRight } from 'react-icons/fa6';
import LawIcon from '@/assets/law.svg';
import { Link } from '@/navigation';
import { useEffect, useState } from 'react';
interface IServiceCard {
  index: number;
  iconUrl?: string;
  title: string;
  text: string;
  slug: string;
}

export default function ServiceCard({ index, iconUrl, title, text, slug }: IServiceCard) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;
  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + '...' : title;
  return (
    <Link href={`/xidmetlerimiz/${slug}`}>
      <div
        style={{ backgroundColor: index % 2 === 0 ? 'white' : '#F8F8F8' }}
        className={
          'group flex h-[276px] flex-col items-center justify-center gap-y-4 border border-borderGray border-t-0 duration-300 hover:shadow-xl'
        }
      >
        <div className={'flex size-16 items-center justify-center rounded-full bg-mainGreen'}>
          <img src={LawIcon.src} alt={title} />
        </div>
        <div className={'flex flex-col items-center gap-y-2 px-4'}>
          <h3 className={'text-center font-playfair text-[1.5rem] uppercase leading-[1.875rem] text-mainGreen'}>
            {truncatedTitle}
          </h3>
          {/*<p className={'max-w-[25ch] text-center text-sm text-secondText'}>{text}</p>*/}
        </div>
        <FaArrowRight size={24} className={'mt-2 text-secondGold duration-300 group-hover:translate-x-[10px]'} />
      </div>
    </Link>
  );
}
