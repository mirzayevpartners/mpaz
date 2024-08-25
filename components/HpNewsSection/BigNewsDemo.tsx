'use client';

import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import { dateConverter } from '@/lib/dateConverter';
import { Link } from '@/navigation';
import { useEffect, useState } from 'react';

interface BigNewsProps {
  mainImage: string;
  title: string;
  createdAt: string;
  slug: string;
}
export default function BigNewsDemo({ slug, mainImage, title, createdAt }: BigNewsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient) {
    return (
      <Link className={'h-fit max-w-[75%] 700:max-w-full'} href={`/xeberler/xeber/${slug}`}>
        <div className={'group/big size-full flex cursor-pointer flex-col gap-y-4 '}>
          <div
            className={'flex w-[526px] h-[362px] 800:h-[250px] max-w-full items-center justify-center overflow-hidden'}
          >
            <img
              className={'size-full transition duration-300 ease-in-out group-hover/big:scale-110'}
              src={mainImage}
              alt="Big News"
            />
          </div>
          <div className={'flex flex-col gap-y-4'}>
            <div className={'flex flex-col gap-y-1'}>
              {/*<div className={'w-fit'}>*/}
              <SmallGoldBtn className={'w-fit'} />
              {/*</div>*/}
              <h2 className={'font-playfair text-lg font-semibold text-mainGreen'}>{title}</h2>
            </div>
            <p className={'text-xs leading-[14.52px] text-secondText'}>{dateConverter(createdAt)}</p>
          </div>
        </div>
      </Link>
    );
  }
  return null;
}
