'use client';
import TopShowLinks from '@/components/TopShowLinks';
import ContainerWrapper from '@/components/ContainerWrapper';
import { useEffect, useState } from 'react';
import MediaChoiceBox from '@/components/Media/MediaChoiceBox';
import MediaCategories from '@/components/Media/MediaCategories';
import { IGallery, IVideo } from '@/types';
import MediaData from '@/components/Media/MediaData';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';

interface MediaPageProps {
  videos: IVideo[];
  gallery: IGallery[];
  locale: Locale;
}

export interface dataMapType<T> {
  [key: string]: T;
}

export interface CategoryType {
  name: string;
  id: string;
}

export default function MediaPage({ videos, gallery, locale }: MediaPageProps) {
  const t = useTranslations('MediaPage');
  const t1 = useTranslations('Common');
  const [activeChoice, setActiveChoice] = useState<number>(0);
  const [activeCategory, setActiveCategory] = useState<string>('0');
  useEffect(() => {
    setActiveCategory('0');
  }, [activeChoice]);
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

  const videoMap: dataMapType<IVideo> = {};
  const galleryMap: dataMapType<IGallery> = {};

  const videoCategories: CategoryType[] = [{ name: t('allVideos'), id: '0' }];
  const galleryCategories: CategoryType[] = [{ name: t('allPhotos'), id: '0' }];
  gallery?.forEach((gd) => {
    galleryCategories.push({
      name: gd.title[locale],
      id: gd._id,
    });
    galleryMap[gd._id] = gd;
  });
  videos?.forEach((vd) => {
    videoCategories.push({
      name: vd.title[locale],
      id: vd._id,
    });
    videoMap[vd._id] = vd;
  });
  return (
    <div>
      <TopShowLinks links={links} />
      <ContainerWrapper className={'py-4 flex flex-col gap-y-8'}>
        <MediaChoiceBox t={t} t1={t1} activeChoice={activeChoice} setActiveChoice={setActiveChoice} />
        <div className={'flex w-full gap-x-8 flex-col min1400:flex-row gap-y-8'}>
          <MediaCategories
            t={t}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeChoice={activeChoice}
            videoCategories={videoCategories}
            galleryCategories={galleryCategories}
          />
          <MediaData
            locale={locale}
            activeChoice={activeChoice}
            activeCategory={activeCategory}
            videoMap={videoMap}
            galleryMap={galleryMap}
          />
        </div>
      </ContainerWrapper>
    </div>
  );
}
