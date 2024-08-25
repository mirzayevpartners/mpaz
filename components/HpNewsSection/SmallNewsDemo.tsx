'use client';

import { useEffect, useState } from 'react';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import { dateConverter } from '@/lib/dateConverter';
import { CarouselItem } from '@/components/ui/carousel';
import { Link } from '@/navigation';
interface SmallNewsProps {
  mainImage: string;
  title: string;
  createdAt: string;
  slug: string;
}

export default function SmallNewsDemo({ slug, mainImage, title, createdAt }: SmallNewsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (isClient) {
    return (
      <CarouselItem className={'group/small cursor-pointer 700:!basis-2/3 1080:basis-1/2'}>
        <Link className={'size-full'} href={`/xeberler/xeber/${slug}`}>
          <div className={'flex flex-col gap-y-2'}>
            <div className={'overflow-hidden'}>
              <img
                className={'size-full transition duration-300 ease-in-out group-hover/small:scale-110'}
                src={mainImage}
                alt="Small News"
              />
            </div>
            <div className={'flex flex-col gap-y-2'}>
              <div className={'flex flex-col gap-y-1'}>
                {/*<div className={'w-fit'}>*/}
                <SmallGoldBtn className={'w-fit'} />
                {/*</div>*/}
                <h2 className={'font-playfair text-base font-semibold text-mainGreen'}>
                  {title.length > 60 ? title.slice(0, 60) + '...' : title}
                </h2>
              </div>
              <p className={'text-xs leading-[14.52px] text-secondText'}>{dateConverter(createdAt)}</p>
            </div>
          </div>
        </Link>
      </CarouselItem>
    );
  }
  return null;
}
