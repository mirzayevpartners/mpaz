import { Separator } from '@/components/ui/separator';
import { SlMagnifier } from 'react-icons/sl';
import SmallShownNewsIMG from '@/assets/SmallShownNewsPNG.png';
import { IoStar } from 'react-icons/io5';
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
          <h5 className={'font-semibold text-mainGreen text-[20px] leading-[30px]'}>
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
          <h3 className={'font-semibold text-xl text-mainGreen'}>Saytda axtar</h3>
          <div className={'flex w-[90%] h-[60px] border border-myGray'}>
            <input
              className={
                'text-base flex-1 pl-2 leading-7 text-[#77829D] !outline-transparent !outline-offset-0 !ring-offset-0 !ring-transparent'
              }
              placeholder={'Saytda axtar'}
              type={'text'}
            />
            <div className={'w-[60px] flex justify-center items-center bg-secondGold'}>
              <SlMagnifier color={'white'} size={24} fontWeight={600} />
            </div>
          </div>
        </div>
        <Separator className={'h-[1px] bg-myGray'} />
      </div>
      <div className={'flex flex-col gap-y-6'}>
        <h4 className={'text-mainGreen font-semibold text-xl'}>Digər bənzər məqalələr</h4>
        <div className={'flex flex-col gap-y-[32px]'}>
          {[1, 2, 3, 4].map((item, index) => {
            return <SmallShownNewsCard key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}
