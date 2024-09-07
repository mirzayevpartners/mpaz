'use client';
import MediaPhoto from '@/assets/MediaPhoto.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CarouselItem } from '@/components/ui/carousel';
import getVideoId from 'get-video-id';
import VideoCard from '@/components/Media/VideoCard';
import { cn } from '@/lib/utils';
import ImageZoom from '@/components/ImageZoom';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';
interface MediaDataCarouselItemProps {
  type: 'video' | 'gallery';
  videoSrc?: string;
  videoTitle?: string;
  gallerySrc?: string;
  imgClassname?: string;
  itemClassName?: string;
  imageClick?: (imgSrc: string) => void;
}
// basis-full min400:basis-[85%] min500:basis-[75%] min600:basis-[65%] min700:basis-[55%] min800:basis-[45%] min900:basis-[40%] min1080:basis-1/3
export default function MediaDataCarouselItem({
  type,
  videoSrc,
  videoTitle,
  gallerySrc,
  imgClassname,
  itemClassName,
  imageClick,
}: MediaDataCarouselItemProps) {
  return (
    <CarouselItem className={'flex flex-col gap-y-2 basis-[320px]'}>
      <div className={cn('w-[305px] h-[172px]', imgClassname)}>
        {type === 'gallery' ? (
          // <ImageZoom>
          <img
            onClick={() => imageClick && gallerySrc && imageClick(gallerySrc)}
            className={'size-full cursor-zoom-in object-cover'}
            src={gallerySrc}
            alt={'photo'}
          />
        ) : (
          // </ImageZoom>
          <VideoCard videoId={videoSrc && getVideoId(videoSrc).id} />
        )}
      </div>
      <div className={'flex flex-col gap-y-1'}>
        <h5 className={'text-[#1B3C74] text-[18px] leading-6 font-semibold'}>{videoTitle}</h5>
        {/*<p className={'text-sm flex items-center gap-x-1 leading-[18px] text-[#77829D]'}>*/}
        {/*  <AiOutlineClockCircle size={16} />*/}
        {/*  12.04.2023*/}
        {/*</p>*/}
      </div>
    </CarouselItem>
  );
}
