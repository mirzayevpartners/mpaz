'use client';
import { dateConverter } from '@/lib/dateConverter';
import { Link } from '@/navigation';
import SmallGoldBtn from '@/components/custom-ui/SmallGoldBtn';
import { INews } from '@/types';
import { Locale } from '@/i18config';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
interface SingleNewsCardProps {
  news: INews;
  locale: Locale;
  imgClassName?: string;
  divClassName?: string;
}

export default function SingleNewsCard({ divClassName, imgClassName, news, locale }: SingleNewsCardProps) {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const { slug, title, createdAt } = news;
  const truncatedTitle = title[locale].length > 50 ? `${title[locale].slice(0, 50)}...` : title[locale];
  const formattedDate = dateConverter(createdAt);

  if (isClient) {
    return (
      <Link href={`/xeberler/xeber/${slug}`}>
        <div className={cn('flex cursor-pointer group flex-col gap-y-6', divClassName)}>
          <div className="overflow-hidden max-h-[235px]">
            <img
              className={cn('size-full transition duration-300 ease-in-out group-hover:scale-110', imgClassName)}
              src={news.mainImage.src}
              alt="Small News"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-4">
              <SmallGoldBtn className="w-fit" />
              <h2 className="font-playfair text-base font-semibold text-mainGreen">{truncatedTitle}</h2>
            </div>
            <p className="text-xs leading-[14.52px] text-secondText">{formattedDate}</p>
          </div>
        </div>
      </Link>
    );
  }
  return null;
}
