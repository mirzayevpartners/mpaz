'use client';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';

export const dynamic = 'force-dynamic';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { useEffect, useState, useCallback } from 'react';
import { IGallery, IVideo } from '@/types';
import { gallerySearchAction } from '@/app/action';
import MediaChoiceBox from '@/components/Media/MediaChoiceBox';
import { useSearchParams } from 'next/navigation';
import ContainerWrapper from '@/components/ContainerWrapper';
import { useRouter, usePathname } from '@/navigation';
import TopShowLinks from '@/components/TopShowLinks';
import MediaDataCarouselItem from '@/components/Media/MediaDataCarouselItem';
import { Slider } from '@/components/custom-ui/Slider';
import { ShowTitleDate } from '@/components/Media/MediaData';

interface Props {
  params: {
    locale: Locale;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({ params, searchParams }: Props) {
  const { openModal } = usePhotoSlideModalStore();
  const t = useTranslations('MediaPage');
  const t1 = useTranslations('Common');
  const [data, setData] = useState<IVideo[] | IGallery[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const images: string[] = [];
  const setActiveChoice = useCallback(
    (index: number) => {
      const spParams = new URLSearchParams();
      spParams.set('title', index === 0 ? 'video' : 'photo');
      spParams.set('mq', searchParams['mq'] as string);
      router.replace(`/mediaaxtar?${spParams.toString()}`);
    },
    [searchParams, router, pathname]
  );
  function imageClick(imgSrc: string) {
    const idx = images.indexOf(imgSrc);
    openModal(images, idx);
  }
  useEffect(() => {
    const query = searchParams['mq'] as string;
    const title = searchParams['title'] as 'video' | 'photo';
    async function fetchData() {
      if (query) {
        const data = await gallerySearchAction(title, query, params.locale);
        setData(data);
      }
    }

    fetchData();
  }, [searchParams]);
  const links = [
    {
      text: t1('mainPage'),
      href: '/',
    },
    {
      text: t1('media'),
      href: '/media',
    },
  ];
  const activeChoice = (searchParams['title'] as 'video' | 'photo') === 'video' ? 0 : 1;
  return (
    <div className={''}>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'py-4 flex flex-col gap-y-8'}>
        <MediaChoiceBox activeChoice={activeChoice} setActiveChoice={setActiveChoice} t={t} t1={t1} />
        {data.length === 0 && <h1>Hec bir netice tapilmadi</h1>}
        <div className={'flex flex-col gap-y-8'}>
          {data &&
            data.length > 0 &&
            data.map((item) => {
              return (
                <div key={item._id} className={'flex flex-col gap-y-4'}>
                  <ShowTitleDate title={item.title[params.locale]} date={item.customDate} />
                  <Slider contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
                    {'videos' in item &&
                      item.videos.map((vd) => {
                        return (
                          <MediaDataCarouselItem
                            type={'video'}
                            videoSrc={vd.src}
                            videoTitle={vd.title[params.locale]}
                            key={vd._id}
                          />
                        );
                      })}
                    {'images' in item &&
                      item.images.map((ph) => {
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
      </ContainerWrapper>
    </div>
  );
}
