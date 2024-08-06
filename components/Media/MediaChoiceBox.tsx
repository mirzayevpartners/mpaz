'use client';
import { SlMagnifier } from 'react-icons/sl';
import CustomInput from '@/components/custom-ui/CustomInput';
import { cn } from '@/lib/utils';
import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
interface MediaChoiceBoxProps {
  activeChoice: number;
  setActiveChoice: (index: number) => void;
}

export default function MediaChoiceBox({ activeChoice, setActiveChoice }: MediaChoiceBoxProps) {
  const choices = [
    {
      id: 0,
      text: 'Videolar',
      icon: <PiPlayBold size={24} className={'text-secondGold'} />,
    },
    {
      id: 1,
      text: 'Şəkillər',
      icon: <LuGalleryVerticalEnd size={24} className={'text-secondGold'} />,
    },
  ];
  return (
    <div className={'w-full bg-bgGray flex flex-col px-6 gap-y-14'}>
      <div className={'flex flex-col gap-y-6 md:flex-row justify-between md:items-center'}>
        <div className={'flex flex-col gap-y-1'}>
          <h4 className={'font-bold text-[40px] leading-[60px] sm:text-[48px] sm:leading-[72px] text-mainGreen'}>
            Media
          </h4>
          <p className={'text-base leading-[19.36px] text-newsText'}>Şəkillər və videolardan ibarət galereyamız</p>
        </div>
        <div className={'relative w-[350px] max-w-[90%]'}>
          <SlMagnifier className={'absolute size-6 left-2 top-[27%] text-secondText'} />
          <CustomInput
            className={'w-full pl-10 text-base leading-6 text-secondText rounded-[4px] py-3 pr-4 border border-myGray'}
            placeholder={'Şəkil axtar'}
            type={'text'}
          />
        </div>
      </div>
      <div className={'flex'}>
        {choices.map((choice) => {
          return (
            <div
              onClick={() => setActiveChoice(choice.id)}
              key={choice.id}
              className={cn(
                'w-[190px] max-w-[50%] flex justify-center p-3 cursor-pointer items-center gap-x-1',
                activeChoice === choice.id && 'border-b-2 border-mainGreen'
              )}
            >
              {choice.icon}
              <span
                className={cn(
                  'text-base leading-6 text-newsText',
                  activeChoice === choice.id && 'font-bold text-mainGreen'
                )}
              >
                {choice.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
