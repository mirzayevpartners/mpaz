'use client';
import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import { SlMagnifier } from 'react-icons/sl';
import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import CustomInput from '@/components/custom-ui/CustomInput';
import MediaChoiceBox from '@/components/Media/MediaChoiceBox';
import MediaCategories from '@/components/Media/MediaCategories';
import MediaPhoto from '@/assets/MediaPhoto.png';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
export default function Home() {
  const [activeChoice, setActiveChoice] = useState<number>(0);
  const links = [
    {
      text: 'Əsas səhifə',
      href: '/',
    },
    {
      text: 'Media',
      href: '/media',
    },
  ];
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'py-4 flex flex-col gap-y-8'}>
        <MediaChoiceBox activeChoice={activeChoice} setActiveChoice={setActiveChoice} />
        <div className={'flex w-full gap-x-8 flex-col min1080:flex-row gap-y-8'}>
          <MediaCategories activeChoice={activeChoice} />
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
        </div>
      </ContainerWrapper>
    </div>
  );
}
