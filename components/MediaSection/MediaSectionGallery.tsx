'use client';

import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { useState } from 'react';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import { GalleryImageType, IGallery, IVideo, VideoType } from '@/types';
import { Locale } from '@/i18config';
import { cn } from '@/lib/utils';
import VideoCard from '@/components/Media/VideoCard';
import getVideoId from 'get-video-id';

interface Props {
  video: IVideo[];
  gallery: IGallery[];
  locale: Locale;
}
function HPMediaCarouselItem({
  media,
  index,
  type,
  locale,
  customDate,
}: {
  media: VideoType | GalleryImageType;
  index: number;
  type: 'photo' | 'video';
  locale: Locale;
  customDate: string;
}) {
  return (
    <CarouselItem
      key={media._id}
      className={'flex basis-[85%] min400:basis-[75%] min600:basis-[50%] min800:basis-[40%] min1080:basis-1/3'}
    >
      <div className={'flex flex-col gap-y-2 max-w-[305px]'}>
        <div
          className={cn('w-[305px] h-[275px] 1080:w-[250px] 1080:h-[200px]', index === 0 && 'h-[360px] 1080:h-[300px]')}
        >
          {'imageTitle' in media ? (
            <img className={'size-full'} src={media.src.src} alt={'photo'} />
          ) : (
            <VideoCard videoId={media.src && getVideoId(media.src).id} />
          )}
        </div>
        <div className={'flex flex-col gap-y-1'}>
          <h4 className={'text-mainGreen font-playfair font-semibold text-base'}>
            {'imageTitle' in media ? media.imageTitle[locale] : media.title[locale]}
          </h4>
          <p className={'text-xs leading-[14.52px] text-secondText'}>{customDate}</p>
        </div>
      </div>
    </CarouselItem>
  );
}

export default function HPMediaSectionGallery({ video, gallery, locale }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const btns = ['Videolar', 'Şəkillər'];
  return (
    <div className={'flex flex-1 max-w-full flex-col gap-y-[58px]'}>
      <div className={'flex gap-x-5'}>
        {btns.map((item, index) => (
          <button
            onClick={() => setActiveIdx(index)}
            key={index}
            className={`${activeIdx === index ? 'bg-mainGreen text-white' : 'bg-white text-mainGreen'} flex items-center gap-x-2 border-2 border-myGray px-4 py-2`}
          >
            {item === 'Videolar' ? (
              <PiPlayBold size={24} className={''} />
            ) : (
              <LuGalleryVerticalEnd size={24} className={''} />
            )}
            <p className={'text-base font-semibold'}>{item}</p>
          </button>
        ))}
      </div>
      <div className={'flex-1'}>
        {activeIdx === 0 && (
          <Slider autoPlay={false} contentClassName={'flex flex-1 gap-6'}>
            {video &&
              video[0] &&
              video[0].videos &&
              video[0].videos.length > 0 &&
              video[0].videos.map((vd, index) => {
                return (
                  <HPMediaCarouselItem
                    customDate={video[0].customDate}
                    locale={locale}
                    type={'video'}
                    key={index}
                    media={vd}
                    index={index}
                  />
                );
              })}
          </Slider>
        )}
        {activeIdx === 1 && (
          <Slider autoPlay={false} wrapperClassName={'max-w-full'} contentClassName={'size-full'}>
            {gallery &&
              gallery[0] &&
              gallery[0].images &&
              gallery[0].images.length > 0 &&
              gallery[0].images.map((ph, index) => {
                return (
                  <HPMediaCarouselItem
                    customDate={gallery[0].customDate}
                    locale={locale}
                    type={'photo'}
                    key={index}
                    media={ph}
                    index={index}
                  />
                );
              })}
          </Slider>
        )}
      </div>
    </div>
  );
}
