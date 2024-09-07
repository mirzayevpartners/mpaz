import { Slider } from '@/components/custom-ui/Slider';
import { CarouselItem } from '@/components/ui/carousel';
import { ICompany } from '@/types';
import dbConnect from '@/lib/db';
import Company from '@/models/company';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  locale: Locale;
}
export default async function HPCompaniesSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Homepage_CompaniesSection');
  let companies: ICompany[] = [];
  try {
    await dbConnect();
    companies = await Company.find({ active: true });
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  return (
    <section className={'bg-bgGray flex flex-col items-center py-12 gap-y-16'}>
      <div className={'flex flex-col gap-y-1 items-center'}>
        <h4 className={'text-secondGold text-[20px] leading-[24.2px]'}>{t('title')}</h4>
        <h2 className={'font-playfair text-mainGreen font-semibold text-[32px] leading-[42.66px]'}>{t('subtitle')}</h2>
      </div>
      <div className={'w-full flex flex-col gap-y-8'}>
        <Slider autoScrollDirection={'backward'} loop={true} autoPlay={false} autoScroll={true}>
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company._id}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img className={'object-cover'} src={company.image.src} />
                </div>
              </CarouselItem>
            );
          })}
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company._id}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img className={'object-cover'} src={company.image.src} />
                </div>
              </CarouselItem>
            );
          })}
        </Slider>
        <Slider autoScrollDirection={'forward'} loop={true} autoPlay={false} autoScroll={true}>
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company._id}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img className={'object-cover'} src={company.image.src} />
                </div>
              </CarouselItem>
            );
          })}
          {companies.map((company) => {
            return (
              <CarouselItem className={'w-[250px] basis-[unset]'} key={company._id}>
                <div className={'bg-white flex items-center w-[200px] h-[130px] justify-center'}>
                  <img className={'object-cover'} src={company.image.src} />
                </div>
              </CarouselItem>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
