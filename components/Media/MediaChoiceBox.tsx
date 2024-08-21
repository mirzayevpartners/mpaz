'use client';
import { SlMagnifier } from 'react-icons/sl';
import CustomInput from '@/components/custom-ui/CustomInput';
import { cn } from '@/lib/utils';
import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { Suspense, useState } from 'react';
import MediaSearchInput from '@/components/MainPage/MediaSearchInput';
interface MediaChoiceBoxProps {
  activeChoice: number;
  setActiveChoice: (index: number) => void;
  t: any;
  t1: any;
}

export default function MediaChoiceBox({ activeChoice, setActiveChoice, t, t1 }: MediaChoiceBoxProps) {
  const choices = [
    {
      id: 0,
      text: t('videos'),
      icon: <PiPlayBold size={24} className={'text-secondGold'} />,
    },
    {
      id: 1,
      text: t('photos'),
      icon: <LuGalleryVerticalEnd size={24} className={'text-secondGold'} />,
    },
  ];
  return (
    <div className={'w-full bg-bgGray flex flex-col px-6 gap-y-14'}>
      <div className={'flex flex-col gap-y-6 md:flex-row justify-between md:items-center'}>
        <div className={'flex flex-col gap-y-1'}>
          <h4 className={'font-bold text-[40px] leading-[60px] sm:text-[48px] sm:leading-[72px] text-mainGreen'}>
            {t1('media')}
          </h4>
          <p className={'text-base leading-[19.36px] text-newsText'}>{t('mediaTitle')}</p>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <MediaSearchInput text={t('search')} />
        </Suspense>
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
