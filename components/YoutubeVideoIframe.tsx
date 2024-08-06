interface YoutubeVideoIframeProps {
  videoId: string | null;
  title?: string;
}
export default function YoutubeVideoIframe({ videoId, title = 'YouTube video player' }: YoutubeVideoIframeProps) {
  return (
    <iframe
      // width="560"
      // height="315"
      className={'w-[940px] h-[530px] 1000:w-[700px] 1000:h-[400px] 600:!w-[450px] 600:!h-[250px]'}
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
