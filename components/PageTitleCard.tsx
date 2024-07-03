interface IPageTitleCard {
  title: string;
  semiTitle: string;
  description: string;
}
export default function PageTitleCard({ title, semiTitle, description }: IPageTitleCard) {
  return (
    <div className={'flex flex-col items-center gap-y-3'}>
      <div className={'flex flex-col items-center gap-y-1'}>
        <h4 className={'text-base leading-[19.36px] text-secondGold'}>{title}</h4>
        <h1 className={'font-semibold text-center text-[32px] leading-[41.6px] text-mainGreen'}>{semiTitle}</h1>
      </div>
      <p className={'text-center max-w-[75ch] text-base leading-[29.82px] text-secondText'}>{description}</p>
    </div>
  );
}
