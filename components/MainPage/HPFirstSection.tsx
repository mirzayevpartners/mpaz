import EllipsForLeft from '@/assets/EllipseForLeft.svg';
import EllipsForBottom from '@/assets/EllipseForBottom.svg';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import JusticeStatue from '@/assets/JusticeStatue.png';
import HammerIcon from '@/assets/HammerIcon.svg';
export default function HPFirstSection() {
  return (
    <section className={'relative'}>
      <div className={'absolute left-[-4.563rem] top-[-7.938rem] -z-10'}>
        <img src={EllipsForLeft.src} alt={'ellips'} />
      </div>
      <div className={'absolute bottom-[-200px] left-[30%] -z-10'}>
        <img src={EllipsForBottom.src} alt={'ellips'} />
      </div>
      <div className={'h-full w-full'}>
        <ContainerWrapper>
          <div
            className={
              '800:items-[unset] flex items-center justify-between 800:flex-col 800:gap-y-6'
            }
          >
            <div className={'flex flex-col gap-y-6 800:gap-y-3'}>
              <h1
                className={
                  'text-[2.25rem] font-bold leading-[2.78rem] tracking-[-0.4px] text-mainGreen lg:text-[3.5rem] lg:leading-[4.943rem] xl:text-[4rem]'
                }
              >
                Peşəkarlara <br /> etibar etmək vaxtıdır!
              </h1>
              <p
                className={
                  'font-base w-[90%] max-w-[60ch] leading-7 tracking-[-2.5%] text-mainGreen 800:!w-full'
                }
              >
                Figma ipsum component variant main layer. Project content scale fill asset auto
                ipsum pencil style. Reesizing vertical pixel vector horizontal. Figma ipsum
                component variant main layer. Project content scale fill asset auto ipsum pencil
                style. Reesizing vertical pixel vector horizontal.{' '}
              </p>
              <ButtonArrowRight
                className={'w-fit 450:!w-full 450:justify-center'}
                text={'Rezervasiya'}
              />
            </div>
            <div className={'max-w-[100%]'}>
              <div className={'h-full bg-paleGold'}>
                {/*<div className={'relative top-[100px] w-[150px] h-[200px] bg-mainGreen'}>*/}

                {/*</div>*/}
                <div className={'relative bottom-0 left-[-30px]'}>
                  <img src={JusticeStatue.src} />
                </div>
                <div
                  className={
                    'relative bottom-[70px] left-[-50px] flex h-[100px] w-[240px] items-center justify-center gap-x-4 bg-mainGreen'
                  }
                >
                  <div
                    className={
                      'flex size-[4.25rem] items-center justify-center rounded-full bg-paleGold'
                    }
                  >
                    <img src={HammerIcon.src} alt={'Hammer Icon'} className={'HAMMER size-7'} />
                  </div>
                  <div className={'flex flex-col items-center text-white'}>
                    <h6 className={'text-sm'}>AkTİV İŞLƏR</h6>
                    <h2 className={'text-[3rem]'}>324</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContainerWrapper>
      </div>
    </section>
  );
}
