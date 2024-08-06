import ContainerWrapper from '@/components/ContainerWrapper';
import HPAboutImg from '@/assets/HPAboutImg.png';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import Link from 'next/link';
export default function HPAboutSection() {
  return (
    <section id={'AboutSection'} className={'bg-white py-28'}>
      <ContainerWrapper
        className={'flex h-full items-center justify-center gap-x-6 1000:flex-col-reverse 1000:gap-y-14'}
      >
        <div className={'relative max-w-[50%] 1000:max-w-full'}>
          <div className={'absolute left-[-20px] top-[-20px] size-[80%] bg-secondGold'}></div>
          <img className={'relative z-[2]'} src={HPAboutImg.src} alt="HPAboutImg" />
        </div>
        <div className={'flex max-w-[50%] flex-col gap-y-[14px] 1000:max-w-full'}>
          <div className={'flex flex-col gap-y-[23px]'}>
            <div className={'flex flex-col gap-y-1'}>
              <h5 className={'text-base leading-[1.21rem] text-secondGold'}>HAQQIMIZDA</h5>
              <h1
                className={
                  'font-playfair max-w-[20ch] text-[2rem] font-semibold leading-[2.666rem] text-mainGreen 500:text-[28px] 500:leading-[37.32px]'
                }
              >
                “Mirzəyev və partnyorları şirkəti kimdir
              </h1>
            </div>
            <p className={'max-w-[50ch] text-base leading-7 text-newsText'}>
              Lorem ipsum dolor sit amet consectetur. Adipiscing mollis facilisis adipiscing facilisis auctor id quam.
              Arcu a quisque amet facilisis orci egestas sed sed volutpat. Lorem ipsum dolor sit amet consectetur.
              Adipiscing mollis facilisis adipiscing facilisis auctor id quam. Arcu a quisque amet facilisis orci
              egestas sed sed volutpat.Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <Link className={'w-fit'} href={'/haqqimizda'}>
            <ButtonArrowRight className={'w-fit 500:w-full 500:justify-center'} text={'Daha ətraflı'} />
          </Link>
        </div>
      </ContainerWrapper>
    </section>
  );
}
