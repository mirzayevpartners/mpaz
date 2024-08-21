import { Separator } from '@/components/ui/separator';
import { SlMagnifier } from 'react-icons/sl';
import SmallShownNewsIMG from '@/assets/SmallShownNewsPNG.png';
import { IoStar } from 'react-icons/io5';
import { Suspense } from 'react';
import NewsSearchInput from '@/components/xeberler/NewsSearchInput';
function SmallShownNewsCard() {
  return (
    <div className={'flex gap-x-4'}>
      {/*<div className={'size-36'}>*/}
      <img className={'size-36'} src={SmallShownNewsIMG.src} alt={'Small Shown News'} />
      {/*</div>*/}
      <div className={'flex flex-col gap-y-2'}>
        <div className={'flex flex-col gap-y-1'}>
          <div
            className={
              'bg-secondGold flex p-2 gap-x-1 items-center justify-center h-[17px] w-fit text-white text-xs leading-[14.52px]'
            }
          >
            <IoStar size={13} />
            <span>Fotolar</span>
          </div>
          <h5 className={'font-playfair font-semibold text-mainGreen text-[20px] leading-[30px]'}>
            "Mirzəyev və Partnyorları" Vəkil Bürosunda Müstəqilliyin Bərpas...
          </h5>
        </div>
        <p className={'text-secondText text-sm leading-[16.94px]'}>19.03.2023</p>
      </div>
    </div>
  );
}

export default function NewsDetailsRightPart() {
  return (
    <div className={'flex flex-1 flex-col'}>
      <div className={'flex flex-col gap-y-[50px]'}>
        <div className={'flex flex-col gap-y-6'}>
          <h3 className={'font-playfair font-semibold text-xl text-mainGreen'}>Saytda axtar</h3>
          <Suspense fallback={<div>Loading...</div>}>
            <NewsSearchInput />
          </Suspense>
        </div>
        <Separator className={'h-[1px] bg-myGray'} />
      </div>
      <div className={'flex flex-col gap-y-6'}>
        <h4 className={'font-playfair text-mainGreen font-semibold text-xl'}>Digər bənzər məqalələr</h4>
        <div className={'flex flex-col gap-y-[32px]'}>
          {[1, 2, 3, 4].map((item, index) => {
            return <SmallShownNewsCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
