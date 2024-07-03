//@ts-nocheck
'use client';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SingleNewsIMG from '@/assets/singleNewsIMG.png';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import React from 'react';
import { cn } from '@/lib/utils';
const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className={'size-10 z-[50] absolute right-[4%]'} onClick={() => onClick()}>
      <MdOutlineArrowForwardIos className={'size-full text-white'} />
    </button>
  );
};
const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button className={'size-10 z-[50] absolute left-[4%]'} onClick={() => onClick()}>
      <MdOutlineArrowBackIos className={'size-full text-white'} />
    </button>
  );
};

const CustomDot = ({ onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <button className={cn('size-2.5 bg-[#D9D9D9] ml-2', active && 'bg-secondGold')} onClick={() => onClick()}></button>
  );
};

export default function NewsImgSlider() {
  return (
    <div className={'relative w-full'}>
      <div className={'absolute w-full pb-[30px]'}>
        <Carousel
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          customDot={<CustomDot />}
          additionalTransfrom={0}
          arrows
          autoPlay={false}
          autoPlaySpeed={3000}
          deviceType={'desktop'}
          centerMode={false}
          className={'grid'}
          containerClass="container"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite={true}
          itemClass={'w-full'}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 1,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 1,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <img className={'block w-full h-full m-auto'} src={SingleNewsIMG.src} />
          <img className={'block w-full h-full m-auto'} src={SingleNewsIMG.src} />
          <img className={'block w-full h-full m-auto'} src={SingleNewsIMG.src} />
        </Carousel>
      </div>
    </div>
  );
}
