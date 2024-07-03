import { Slider } from '@/components/custom-ui/Slider';
import GhLogo from '@/assets/companyLogos/gh.png';
import IdLogo from '@/assets/companyLogos/id.png';
import AmchamLogo from '@/assets/companyLogos/amcham.png';
import AzerqazLogo from '@/assets/companyLogos/azerqaz.png';
import RabiteLogo from '@/assets/companyLogos/rabite.png';
import YelobankLogo from '@/assets/companyLogos/yelobank.png';
import { CarouselItem } from '@/components/ui/carousel';

export default function HPCompaniesSection() {
  const companies = [
    {
      title: 'gh',
      logo: GhLogo.src,
    },
    {
      title: 'id',
      logo: IdLogo.src,
    },
    {
      title: 'amcham',
      logo: AmchamLogo.src,
    },
    {
      title: 'azerqaz',
      logo: AzerqazLogo.src,
    },
    {
      title: 'rabite',
      logo: RabiteLogo.src,
    },
    {
      title: 'yelobank',
      logo: YelobankLogo.src,
    },
    {
      title: 'gh',
      logo: GhLogo.src,
    },
    {
      title: 'id',
      logo: IdLogo.src,
    },
    {
      title: 'amcham',
      logo: AmchamLogo.src,
    },
  ];
  return (
    <section className={'bg-bgGray flex flex-col items-center py-12 gap-y-16'}>
      <div className={'flex flex-col gap-y-1 items-center'}>
        <h4 className={'text-secondGold text-[20px] leading-[24.2px]'}>BİZİ SEÇƏN</h4>
        <h2 className={'text-mainGreen font-semibold text-[32px] leading-[42.66px]'}>Tərəfdaş şirkətlər</h2>
      </div>
      <div className={'w-full flex flex-col gap-y-8'}>
        <Slider loop={true} autoPlay={false} autoScroll={true}>
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company.title}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img src={company.logo} />
                </div>
              </CarouselItem>
            );
          })}
        </Slider>
        <Slider autoScrollDirection={'backward'} loop={true} autoPlay={false} autoScroll={true}>
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company.title}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img src={company.logo} />
                </div>
              </CarouselItem>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
