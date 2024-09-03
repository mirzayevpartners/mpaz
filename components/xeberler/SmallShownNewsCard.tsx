'use client';

import { IoStar } from 'react-icons/io5';
import { dateConverter } from '@/lib/dateConverter';
import { Link } from '@/navigation';
import { useEffect, useState } from 'react';

export default function SmallShownNewsCard({
  img,
  title,
  date,
  slug,
}: {
  img: string;
  title: string;
  date: string;
  slug: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const truncatedTitle = title.length > 50 ? title.slice(0, 50) + '...' : title;
  if (isClient) {
    return (
      <Link className={'h-fit'} href={`/xeberler/xeber/${slug}`}>
        <div className={'size-full flex gap-x-4'}>
          <div className={'basis-36'}>
            <img className={'size-36 object-cover'} src={img} alt={'Small Shown News'} />
          </div>
          <div className={'flex-1 flex flex-col gap-y-2'}>
            <div className={'flex flex-col gap-y-1'}>
              <div
                className={
                  'bg-secondGold flex p-2 gap-x-1 items-center justify-center h-[17px] w-fit text-white text-xs leading-[14.52px]'
                }
              >
                <IoStar size={13} />
                <span>Fotolar</span>
              </div>
              <h5 className={'font-playfair font-semibold text-mainGreen text-[20px] leading-[30px]'}>
                {truncatedTitle}
              </h5>
            </div>
            <p className={'text-secondText text-sm leading-[16.94px]'}>{dateConverter(date)}</p>
          </div>
        </div>
      </Link>
    );
  }
}
