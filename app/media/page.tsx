import MediaPage from '@/components/Media/MediaPage';
import { IGallery, IVideo } from '@/types';
import Video from '@/models/video';
import Gallery from '@/models/gallery';
import dbConnect from '@/lib/db';

export default async function Home() {
  let videos: IVideo[] = [];
  let gallery: IGallery[] = [];
  try {
    await dbConnect();
    videos = await Video.find({ active: true });
    gallery = await Gallery.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  return <MediaPage videos={JSON.parse(JSON.stringify(videos))} gallery={JSON.parse(JSON.stringify(gallery))} />;
}
