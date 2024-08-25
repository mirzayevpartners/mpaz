'use client';
import { Slider } from '@/components/custom-ui/Slider';

export const dynamic = 'force-dynamic';

import { dataSearchAction } from '@/app/action';
import { useEffect, useState } from 'react';
import { IGallery, INews, IVideo } from '@/types';
import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import SingleNewsCard from '@/components/SingleNewsCard';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import MediaDataCarouselItem from '@/components/Media/MediaDataCarouselItem';
import { usePhotoSlideModalStore } from '@/store/PhotoSlideModalStore';

interface SearchData {
  news: INews[];
  video: IVideo[];
  gallery: IGallery[];
}

interface Props {
  params: {
    locale: Locale;
  };
  searchParams: { [key: string]: string | undefined };
}
// divClassName={'flex-row gap-x-6 1000:flex-col'} imgClassName={'w-[416px] h-[235px] 1000:w-[358px] 1000:h-[235px]'}
export default function Home({ params, searchParams }: Props) {
  const t1 = useTranslations('Common');
  const [data, setData] = useState<SearchData>({
    news: [],
    video: [],
    gallery: [],
  });
  console.log(data.news);
  const { openModal } = usePhotoSlideModalStore();
  const images: string[] = [];
  function imageClick(imgSrc: string) {
    const idx = images.indexOf(imgSrc);
    openModal(images, idx);
  }
  // console.log(data);
  useEffect(() => {
    async function fetchData() {
      const data = await dataSearchAction(searchParams['nq'] as string, params.locale);
      setData(data);
    }
    if (searchParams['nq'] as string) {
      fetchData();
    }
  }, [searchParams]);
  return (
    <div>
      <TopShowLinks
        links={[
          { text: t1('mainPage'), href: '/' },
          { text: t1('searchPage'), href: '/axtar' },
        ]}
      />
      <ContainerWrapper className={'flex flex-col gap-y-6 pt-8'}>
        {data.news.length === 0 && data.video.length === 0 && data.gallery.length === 0 && (
          <h1 className={'font-semibold text-2xl text-mainGreen'}>No results found</h1>
        )}
        {data.news.length > 0 && (
          <div className={'flex flex-col gap-y-2'}>
            <h1 className={'text-2xl text-mainGreen font-playfair font-semibold'}>News:</h1>
            <div className={'grid md:!grid-cols-3 min500:grid-cols-2 gap-x-6 gap-y-10 py-8'}>
              {data.news.map((item) => {
                return <SingleNewsCard imgClassName={''} locale={params.locale} key={item._id} news={item} />;
              })}
            </div>
          </div>
        )}
        {data.video.length > 0 && (
          <div className={'flex flex-col gap-y-2'}>
            <h1 className={'text-2xl text-mainGreen font-playfair font-semibold'}>Videos:</h1>
            <div className={'flex flex-col gap-y-2'}>
              {data.video.map((vd) => {
                return (
                  <div key={vd._id} className={'flex flex-col gap-y-1'}>
                    <h3>{vd.title.az}</h3>
                    <Slider autoPlay={false} contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
                      {vd.videos.map((vD) => {
                        return (
                          <MediaDataCarouselItem
                            type={'video'}
                            videoSrc={vD.src}
                            videoTitle={vD.title.az}
                            key={vD._id}
                          />
                        );
                      })}
                    </Slider>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {data.gallery.length > 0 && (
          <div className={'flex flex-col gap-y-2'}>
            <h1 className={'text-2xl text-mainGreen font-playfair font-semibold'}>Gallery:</h1>
            <div className={'flex flex-col gap-y-2'}>
              {data.gallery.map((im) => {
                return (
                  <div key={im._id} className={'flex flex-col gap-y-1'}>
                    <h3>{im.title.az}</h3>
                    <Slider autoPlay={false} contentClassName={'grid grid-cols-3 flex-1 gap-6 1080:flex'}>
                      {im.images.map((iM) => {
                        images.push(iM.src);
                        return (
                          <MediaDataCarouselItem
                            imageClick={imageClick}
                            gallerySrc={iM.src}
                            type={'gallery'}
                            key={iM._id}
                          />
                        );
                      })}
                    </Slider>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </ContainerWrapper>
    </div>
  );
}
