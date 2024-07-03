import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import QuotesIcon from '@/assets/QuotesIcon.svg';
export default function HPCustomersSlider(): React.JSX.Element {
  const data = [
    {
      name: 'John Doe',
      who: 'Zərərçəkmiş',
      text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat. Arcu a quisque amet facilisis orci egestas sed.',
      rating: 5,
    },
    {
      name: 'John Doe',
      who: 'Zərərçəkmiş',
      text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat. Arcu a quisque amet facilisis orci egestas sed.',
      rating: 5,
    },
    {
      name: 'John Doe',
      who: 'Zərərçəkmiş',
      text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat. Arcu a quisque amet facilisis orci egestas sed.',
      rating: 5,
    },
    {
      name: 'John Doe',
      who: 'Zərərçəkmiş',
      text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat. Arcu a quisque amet facilisis orci egestas sed.',
      rating: 5,
    },
    {
      name: 'John Doe',
      who: 'Zərərçəkmiş',
      text: 'Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci egestas sed sed volutpat. Arcu a quisque amet facilisis orci egestas sed.',
      rating: 5,
    },
  ];

  return (
    <Slider wrapperClassName={'ml-[-70px] 800:ml-0 800:mt-[-200px]'}>
      {data.map((item, index) => {
        return (
          <CarouselItem className={'800:basis-[80%] 500:!basis-full'} key={index}>
            <div
              style={{ boxShadow: '0px 8px 30px 0px #0000000F' }}
              className={'flex flex-col rounded-lg gap-y-6 bg-grayishBg p-6 border border-myGray'}
            >
              <div className={'flex gap-x-3'}>
                <div className={'size-16 bg-mainGreen rounded-full'}></div>
                <div className={'flex flex-col gap-y-1'}>
                  <h4 className={'font-bold text-lg leading-[21.78px] text-mainGreen'}>{item.name}</h4>
                  <p className={'text-secondText text-sm leading-[16.94px]'}>{item.who}</p>
                </div>
              </div>
              <p className={'text-base leading-[29.82px] text-newsText max-w-[90%]'}>{item.text}</p>
              <div className={'flex justify-between items-center'}>
                <div className={'flex gap-x-1'}>
                  {[1, 2, 3, 4, 5].map((_, idx) => {
                    return <FaStar key={idx} className={'size-6 text-secondGold'} />;
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
