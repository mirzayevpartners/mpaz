'use client';

import YoutubeVideoIframe from '@/components/YoutubeVideoIframe';
import { useYoutubeModalStore } from '@/store/YoutubeModalStore';
import { X } from 'lucide-react';

export default function YoutubeVideoPopup() {
  const { isModalOpen, videoId, closeModal } = useYoutubeModalStore();
  if (!isModalOpen) return null;
  return (
    <div
      className={
        'flex justify-center items-center fixed top-0 left-0 w-full h-full z-[9000] opacity-100 bg-[#00000080]'
      }
    >
      <YoutubeVideoIframe videoId={videoId} />

      <button
        className={'absolute top-2 right-2 p-2 text-white'}
        onClick={() => {
          closeModal();
        }}
      >
        <X size={32} />
      </button>
    </div>
  );
}
