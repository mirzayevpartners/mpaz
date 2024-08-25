'use client';

import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { useState } from 'react';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import { GalleryImageType, IGallery, ImageType, IVideo, VideoType } from '@/types';
import { Locale } from '@/i18config';
import { cn } from '@/lib/utils';
import VideoCard from '@/components/Media/VideoCard';
import getVideoId from 'get-video-id';
import ImageZoom from '@/components/ImageZoom';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';

interface Props {
  video: IVideo[];
  gallery: IGallery[];
  locale: Locale;
}
// basis-[85%] min400:basis-[75%] min600:basis-[50%] min800:basis-[40%] min1080:basis-1/3

function HPMediaCarouselItem({
  media,
  index,
  type,
  locale,
  customDate,
  mediaTitle,
  activeIdx,
  imageClick,
}: {
  media: VideoType | ImageType;
  index: number;
  type: 'photo' | 'video';
  locale: Locale;
  customDate: string;
  mediaTitle?: string;
  activeIdx?: number;
  imageClick?: (imgSrc: string) => void;
}) {
  return (
    <CarouselItem key={media._id} className={cn('flex basis-[315px]', activeIdx === 0 && 'basis-[510px]')}>
      <div className={'flex flex-col gap-y-2 max-w-[305px]'}>
        {type === 'photo' && (
          <div
            onClick={() => imageClick && imageClick(media.src)}
            className={cn(
              'w-[305px] h-[275px] 1080:w-[250px] 1080:h-[200px] cursor-zoom-in',
              index === 0 && 'h-[360px] 1080:h-[300px]'
            )}
          >
            <img className={'size-full'} src={media.src} alt={'photo'} />
          </div>
        )}
        {type === 'video' && (
          <div className={cn('w-[500px] h-[280px] 1080:w-[450px] 1080:h-[230px]')}>
            <VideoCard imageClassname={'rounded-[16px]'} videoId={media.src && getVideoId(media.src).id} />
          </div>
        )}
        <div className={'flex flex-col gap-y-1'}>
          <h4 className={'text-mainGreen font-playfair font-semibold text-base'}>{mediaTitle}</h4>
          <p className={'text-xs leading-[14.52px] text-secondText'}>{customDate}</p>
        </div>
      </div>
    </CarouselItem>
  );
}

export default function HPMediaSectionGallery({ video, gallery, locale }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);
  const btns = ['Videolar', 'Şəkillər'];
  const { openModal } = usePhotoSlideModalStore();
  const images: string[] = [];
  function imageClick(imgSrc: string) {
    const idx = images.indexOf(imgSrc);
    openModal(images, idx);
  }
  return (
    <div className={cn('flex flex-1 max-w-full flex-col gap-y-[58px]', activeIdx === 0 && 'flex-[2]')}>
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
                    mediaTitle={vd.title[locale]}
                    activeIdx={activeIdx}
                  />
                );
              })}
          </Slider>
        )}
        {activeIdx === 1 && (
          <Slider autoPlay={false} wrapperClassName={'max-w-full'} contentClassName={'size-full'}>
            {gallery &&
              gallery.length > 0 &&
              gallery.map((g, index) => {
                images.push(g.images[0].src);
                return (
                  <HPMediaCarouselItem
                    customDate={g.customDate}
                    locale={locale}
                    type={'photo'}
                    key={index}
                    media={g.images[0]}
                    index={index}
                    mediaTitle={g.title[locale]}
                    activeIdx={activeIdx}
                    imageClick={imageClick}
                  />
                );
              })}
          </Slider>
        )}
      </div>
    </div>
  );
}
