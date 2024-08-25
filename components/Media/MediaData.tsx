'use client';
import { Slider } from '@/components/custom-ui/Slider';
import { IGallery, IVideo } from '@/types';
import { dataMapType } from '@/components/Media/MediaPage';
import { Clock } from 'lucide-react';
import MediaDataCarouselItem from '@/components/Media/MediaDataCarouselItem';
import { Locale } from '@/i18config';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';

interface MediaDataProps {
  activeChoice: number;
  activeCategory: string;
  videoMap: dataMapType<IVideo>;
  galleryMap: dataMapType<IGallery>;
  locale: Locale;
}

export function ShowTitleDate({ title, date }: { title: string; date: string }) {
  return (
    <div className={'flex flex-col gap-y-1'}>
      <h3 className={'font-bold text-lg text-mainGreen'}>{title}</h3>
      <div className={'flex items-center gap-x-1 text-sm text-[#77829D]'}>
        <Clock size={14} />
        <p className={''}>{date}</p>
      </div>
    </div>
  );
}

function MediaData({ activeChoice, activeCategory, videoMap, galleryMap, locale }: MediaDataProps) {
  const { openModal } = usePhotoSlideModalStore();
  const data = activeChoice === 0 ? videoMap : galleryMap;
  const images: string[] = [];
  function imageClick(imgSrc: string) {
    const idx = images.indexOf(imgSrc);
    openModal(images, idx);
  }
  if (activeCategory === '0') {
    return (
      <div className={'flex flex-col gap-y-8'}>
        {Object.keys(data).map((key) => {
          return (
            <div key={key} className={'flex flex-col gap-y-4'}>
              <ShowTitleDate title={data[key].title[locale]} date={data[key].customDate} />
              {/**/}
              <Slider autoPlay={false} contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
                {'videos' in data[key] &&
                  data[key].videos.map((vd) => {
                    return (
                      <MediaDataCarouselItem
                        type={'video'}
                        videoSrc={vd.src}
                        videoTitle={vd.title[locale]}
                        key={vd._id}
                      />
                    );
                  })}
                {'images' in data[key] &&
                  data[key].images.map((ph) => {
                    images.push(ph.src);
                    return (
                      <MediaDataCarouselItem
                        type={'gallery'}
                        imageClick={imageClick}
                        gallerySrc={ph.src}
                        key={ph._id}
                      />
                    );
                  })}
              </Slider>
            </div>
          );
        })}
      </div>
    );
  }
  if (activeCategory in data) {
    return (
      <div className={'flex flex-col gap-y-4'}>
        <ShowTitleDate title={data[activeCategory].title[locale]} date={data[activeCategory].customDate} />
        <Slider autoPlay={false} contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
          {'videos' in data[activeCategory] &&
            data[activeCategory].videos.map((vd) => {
              return (
                <MediaDataCarouselItem type={'video'} videoSrc={vd.src} videoTitle={vd.title[locale]} key={vd._id} />
              );
            })}
          {'images' in data[activeCategory] &&
            data[activeCategory].images.map((ph) => {
              images.push(ph.src);
              return (
                <MediaDataCarouselItem type={'gallery'} imageClick={imageClick} gallerySrc={ph.src} key={ph._id} />
              );
            })}
        </Slider>
      </div>
    );
  }
}
export default MediaData;
