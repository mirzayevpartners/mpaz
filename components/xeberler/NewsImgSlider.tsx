import SingleNewsIMG from '@/assets/SingleNewsIMG.png';
import React, { memo } from 'react';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import { ImageType } from '@/types';

interface INewsImgSliderProps {
  imgs: ImageType[];
}

function NewsImgSlider({ imgs }: INewsImgSliderProps) {
  return (
    <Slider showDots={true} showArrows={true} autoPlay={false}>
      {imgs.map((item, index) => {
        return (
          <CarouselItem key={item._id} className={'max-h-[490px]'}>
            <img className={'block w-full h-full m-auto object-cover'} src={item.src} />
          </CarouselItem>
        );
      })}
    </Slider>
  );
}
export default memo(NewsImgSlider);
