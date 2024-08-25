'use client';

import SwiperCarousel from '@/components/Swiper';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';
import { X } from 'lucide-react';
// bg-[#00000080]
export default function PhotoSwiperModal() {
  const { isModalOpen, photos, closeModal, currentPhotoIndex } = usePhotoSlideModalStore();
  if (!isModalOpen) return null;
  return (
    <div
      className={
        '!size-full flex justify-center items-center fixed top-0 left-0 w-full h-full z-[9002] opacity-100 bg-white/60'
      }
    >
      <SwiperCarousel currentPhotoIndex={currentPhotoIndex} photos={photos} />
      <button
        className={'absolute top-2 right-2 p-2 text-black z-[9003]'}
        onClick={() => {
          closeModal();
        }}
      >
        <X size={32} />
      </button>
    </div>
  );
}
