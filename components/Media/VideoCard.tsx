'use client';

import { FaPlay } from 'react-icons/fa6';
import { useYoutubeModalStore } from '@/store/YoutubeModalStore';
import { cn } from '@/lib/utils';

export default function VideoCard({
  videoId,
  boxClassname,
  imageClassname,
}: {
  videoId: string | undefined;
  boxClassname?: string;
  imageClassname?: string;
}) {
  const { openModal } = useYoutubeModalStore();
  return (
    <div className={cn('size-full relative', boxClassname)}>
      <img
        className={cn('size-full object-cover', imageClassname)}
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      />
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
