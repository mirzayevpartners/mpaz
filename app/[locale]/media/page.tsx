import MediaPage from '@/components/Media/MediaPage';
import { IGallery, IVideo } from '@/types';
import Video from '@/models/video';
import Gallery from '@/models/gallery';
import dbConnect from '@/lib/db';
import { Locale } from '@/i18config';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Home({ params }: Props) {
  unstable_setRequestLocale(params.locale);
  let videos: IVideo[] = [];
  let gallery: IGallery[] = [];
  try {
    await dbConnect();
    videos = await Video.find({ active: true });
    gallery = await Gallery.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  return (
    <MediaPage
      locale={params.locale}
      videos={JSON.parse(JSON.stringify(videos))}
      gallery={JSON.parse(JSON.stringify(gallery))}
    />
  );
}
