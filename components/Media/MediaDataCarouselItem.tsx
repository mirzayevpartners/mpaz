import MediaPhoto from '@/assets/MediaPhoto.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { CarouselItem } from '@/components/ui/carousel';
import getVideoId from 'get-video-id';
import VideoCard from '@/components/Media/VideoCard';
interface MediaDataCarouselItemProps {
  type: 'video' | 'gallery';
  videoSrc?: string;
  videoTitle?: string;
  gallerySrc?: string;
}

export default function MediaDataCarouselItem({ type, videoSrc, videoTitle, gallerySrc }: MediaDataCarouselItemProps) {
  return (
    <CarouselItem className={'basis-2/3 sm:basis-1/3 min1080:basis-full flex flex-col gap-y-4'}>
      <div className={'w-[305px] h-[172px]'}>
        {type === 'gallery' ? (
          <img className={'size-full'} src={gallerySrc} alt={'photo'} />
        ) : (
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
