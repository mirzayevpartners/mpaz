'use client';
import HPMediaBG from '@/assets/HPMediaBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { PiPlayBold } from 'react-icons/pi';
import { LuGalleryVerticalEnd } from 'react-icons/lu';
import { useState } from 'react';
import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
function HPMediaSectionGallery() {
  const [activeIdx, setActiveIdx] = useState(0);
  const btns = ['Videolar', 'Şəkillər'];
  return (
    <div className={'flex flex-1 flex-col gap-y-[58px]'}>
      <div className={'flex gap-x-5'}>
        {btns.map((item, index) => (
          <button
            onClick={() => setActiveIdx(index)}
            key={index}
            className={`${activeIdx === index ? 'bg-mainGreen text-white' : 'bg-white text-mainGreen'} flex items-center gap-x-2 border-2 border-myGray px-4 py-2`}
          >
            {item === 'Videolar' ? (
              <PiPlayBold size={24} className={''} />
            ) : (
              <LuGalleryVerticalEnd size={24} className={''} />
            )}
            <p className={'text-base font-semibold'}>{item}</p>
          </button>
        ))}
      </div>
      <Slider wrapperClassName={'w-full'} contentClassName={'gap-x-6'}>
        {/*<div className={'flex gap-x-6 h-full'}>*/}
        {[1, 2, 3].map((item, index) => (
          <CarouselItem key={index} className={'basis-1/2 bg-white'}>
            {activeIdx === 0 ? 'Video' : 'Şəkil'}
          </CarouselItem>
        ))}
        {/*</div>*/}
      </Slider>
    </div>
  );
}

export default function HPMediaSection() {
  return (
    <section
      id={'MediaSection'}
      style={{ backgroundImage: `url(${HPMediaBG.src})` }}
      className={'bg-bgGray bg-no-repeat py-12 bg-blend-luminosity'}
    >
      <ContainerWrapper className={'flex h-full justify-center'}>
        <div className={'flex max-w-[40%] flex-1 flex-col gap-y-8'}>
          <div className={'flex flex-col gap-y-1'}>
            <h4 className={'text-base leading-[19.36px] text-secondGold'}>MEDIA</h4>
            <h2 className={'text-[32px] font-semibold leading-[42.66px] text-textBlue'}>
              Şəkillər və videolardan ibarət galereyamız
            </h2>
          </div>
          <p className={'text-base leading-[29.82px] text-newsText'}>
            Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis
            auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat.
          </p>
          <ButtonArrowRight className={'w-fit'} text={'Bütün galereyaya bax'} />
        </div>
        <HPMediaSectionGallery />
      </ContainerWrapper>
    </section>
  );
}
