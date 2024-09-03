'use client';
import { Navigation, Pagination, Scrollbar, A11y, Zoom, EffectCreative } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useOutsideClick from '@/hooks/useOutsideClick';
import { useEffect, useRef } from 'react';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';

interface SwiperCarouselProps {
  photos: string[];
  currentPhotoIndex: number;
}

export default function SwiperCarousel({ photos, currentPhotoIndex }: SwiperCarouselProps) {
  console.log('photos', photos);
  const { closeModal } = usePhotoSlideModalStore();
  const imgRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  // useOutsideClick(imgRef, closeModal);
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Zoom, EffectCreative]}
      className={'size-full'}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      // onSlideChange={(swiper) => console.log(swiper.activeIndex)}
      // onSwiper={(swiper) => console.log(swiper)}
      initialSlide={currentPhotoIndex}
      onInit={(swiper) => {
        swiper.zoom.in();
      }}
      zoom={true}
      // effect={'creative'}
    >
      {photos.map((ph, key) => {
        return (
          <SwiperSlide key={key} className={'size-full !flex justify-center items-center'}>
            <img ref={imgRef} className={'min800:w-[800px] min800:h-[550px] max-w-full object-cover'} src={ph} alt="" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
