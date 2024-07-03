import ContainerWrapper from '@/components/ContainerWrapper';
import HPCustomersImg from '@/assets/HPCustomersImg.png';
import React from 'react';
import HPCustomersSlider from '@/components/MainPage/HPCustomerSection/HPCustomersSlider';
export default function HPCustomersSection(): React.JSX.Element {
  return (
    <section className={'bg-white py-12'}>
      <ContainerWrapper className={'flex h-full items-center justify-center'}>
        <div className={'flex 800:flex-col gap-y-8 size-full justify-center items-center'}>
          <div className={'hidden flex-col gap-y-1 800:flex items-center'}>
            <h5 className={'text-base uppercase leading-[19.36px] text-secondGold'}>müştərİ məmnunİyyətİ</h5>
            <h2
              className={
                'text-[32px] text-center font-semibold leading-[42.66px] text-textBlue max-w-[20ch] 800:max-w-full'
              }
            >
              Bizim haqqımızdakı düşüncələr
            </h2>
          </div>
          <div className={''}>
            <img src={HPCustomersImg.src} alt="HPCustomersImg" className={'w-full'} />
          </div>
          <div className={'flex w-1/2 800:w-[90%] flex-col gap-y-4 justify-center items-center 800:items-start'}>
            <div className={'flex flex-col gap-y-1 ml-[15px] 800:hidden items-center'}>
              <h5 className={'text-base uppercase leading-[19.36px] text-secondGold'}>müştərİ məmnunİyyətİ</h5>
              <h2
                className={
                  'text-[32px] text-center font-semibold leading-[42.66px] text-textBlue max-w-[20ch] 800:max-w-full'
                }
              >
                Bizim haqqımızdakı düşüncələr
              </h2>
            </div>
            <HPCustomersSlider />
          </div>
        </div>
      </ContainerWrapper>
    </section>
  );
}
