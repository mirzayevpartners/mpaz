import HPMediaBG from '@/assets/HPMediaBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { Locale } from '@/i18config';
import { Link } from '@/navigation';
import HPMediaSectionGallery from '@/components/MediaSection/MediaSectionGallery';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { IGallery, IVideo } from '@/types';
import dbConnect from '@/lib/db';
import Video from '@/models/video';
import Gallery from '@/models/gallery';

export default async function HPMediaSection({ locale }: { locale: Locale }) {
  unstable_setRequestLocale(locale);
  let sample_videos: IVideo[] = [];
  let sample_gallery: IGallery[] = [];
  try {
    await dbConnect();
    sample_videos = await Video.find({ active: true }).sort({ customDate: -1 }).limit(1).select('videos customDate');
    sample_gallery = await Gallery.find({ active: true }).sort({ customDate: -1 }).limit(1).select('images customDate');
  } catch (e) {
    console.log(e);
    return <div>Server error</div>;
  }
  // console.log(sample_videos);
  // console.log(sample_gallery);
  const t = await getTranslations('Homepage_MediaSection');
  return (
    <section
      id={'MediaSection'}
      style={{ backgroundImage: `url(${HPMediaBG.src})` }}
      className={'bg-bgGray bg-no-repeat py-28 bg-blend-luminosity'}
    >
      <ContainerWrapper className={'flex h-full  justify-center !max-w-[90%] ml-auto mr-0'}>
        <div className={'flex 1400:!flex-col gap-y-6 gap-x-6 max-w-full'}>
          <div className={'flex flex-1'}>
            <div className={'flex flex-col gap-y-8 1750:!w-[50%]'}>
              <div className={'flex flex-col gap-y-1'}>
                <h4 className={'text-base leading-[19.36px] text-secondGold'}>{t('title')}</h4>
                <h2 className={'text-[32px] font-semibold leading-[42.66px] text-textBlue'}>{t('subtitle')}</h2>
              </div>
              <p className={'text-base leading-[29.82px] text-newsText'}>{t('description')}</p>
              <Link href={'/media'} className={'w-fit'}>
                <ButtonArrowRight className={'w-fit'} text={t('button')} />
              </Link>
            </div>
          </div>
          <HPMediaSectionGallery
            locale={locale}
            video={JSON.parse(JSON.stringify(sample_videos))}
            gallery={JSON.parse(JSON.stringify(sample_gallery))}
          />
        </div>
      </ContainerWrapper>
    </section>
  );
}
