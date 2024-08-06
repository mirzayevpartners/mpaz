import MediaCategories from '@/components/Media/MediaCategories';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import MediaPhoto from '@/assets/MediaPhoto.png';
import { AiOutlineClockCircle } from 'react-icons/ai';

interface MediaCategory {
  videoCategories: { name: string; index: string }[];
  galleryCategories: { name: string; index: string }[];
}

export default function CategoryAndData({ videoCategories, galleryCategories }: MediaCategory) {
  return (
    <>
      <MediaCategories videoCategories={videoCategories} galleryCategories={galleryCategories} />
      <Slider contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
        {Array.from({ length: 9 }).map((_, index) => {
          return (
            <CarouselItem key={index} className={'basis-2/3 sm:basis-1/3 min1080:basis-full flex flex-col gap-y-4'}>
              <div>
                <img src={MediaPhoto.src} alt={'photo'} />
              </div>
              <div className={'flex flex-col gap-y-1'}>
                <h5 className={'text-[#1B3C74] text-[18px] leading-6 font-semibold'}>
                  olkəmizdə Beynəlxalq Hüquq sərgisi keçirildi
                </h5>
                <p className={'text-sm flex items-center gap-x-1 leading-[18px] text-[#77829D]'}>
                  <AiOutlineClockCircle size={16} />
                  12.04.2023
                </p>
              </div>
            </CarouselItem>
          );
        })}
      </Slider>
    </>
  );
}
