import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import QuotesIcon from '@/assets/QuotesIcon.svg';
import { ITestimonial } from '@/types';
import dbConnect from '@/lib/db';
import Testimonial from '@/models/testimonial';
import { cn } from '@/lib/utils';

export default async function HPCustomersSlider() {
  let testimonials: ITestimonial[] = [];
  try {
    await dbConnect();
    testimonials = await Testimonial.find({ active: true });
  } catch (e) {
    return <div>Server Error</div>;
  }
  return (
    <Slider wrapperClassName={'ml-[-70px] 800:ml-0 800:mt-[-200px]'}>
      {testimonials.map((item, index) => {
        return (
          <CarouselItem className={'800:basis-[80%] 500:!basis-full'} key={item._id}>
            <div
              style={{ boxShadow: '0px 8px 30px 0px #0000000F' }}
              className={'flex flex-col rounded-lg gap-y-6 bg-grayishBg p-6 border border-myGray'}
            >
              <div className={'flex gap-x-3'}>
                <img className={'size-16 rounded-full'} src={item.photo.src} />
                <div className={'flex flex-col gap-y-1'}>
                  <h4 className={'font-bold text-lg leading-[21.78px] text-mainGreen'}>{item.fullName}</h4>
                  <p className={'text-secondText text-sm leading-[16.94px]'}>{item.title}</p>
                </div>
              </div>
              <p className={'text-base leading-[29.82px] text-newsText max-w-[90%]'}>{item.text}</p>
              <div className={'flex justify-between items-center'}>
                <div className={'flex gap-x-1'}>
                  {[1, 2, 3, 4, 5].map((_, idx) => {
                    return (
                      <FaStar
                        key={idx}
                        className={cn('size-6', idx <= item.rating - 1 ? 'text-secondGold' : 'text-secondText')}
                      />
                    );
                  })}
                </div>
                <img src={QuotesIcon.src} />
              </div>
            </div>
          </CarouselItem>
        );
      })}
    </Slider>
  );
}
