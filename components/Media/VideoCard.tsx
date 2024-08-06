'use client';

import { FaPlay } from 'react-icons/fa6';
import { useYoutubeModalStore } from '@/store/YoutubeModalStore';

export default function VideoCard({ videoId }: { videoId: string | undefined }) {
  const { openModal } = useYoutubeModalStore();
  return (
    <div className={'size-full relative'}>
      <img className={'size-full'} src={`https://img.youtube.com/vi/${videoId}/0.jpg`} />
      <div className={'absolute inset-0 size-full'}>
        <div className={'size-full flex items-center justify-center'}>
          <div
            onClick={() => openModal(videoId)}
            className={
              'flex cursor-pointer items-center justify-center rounded-full size-16 border-2 border-white bg-white/40'
            }
          >
            <FaPlay size={32} className={'fill-white'} />
          </div>
        </div>
      </div>
    </div>
  );
}
