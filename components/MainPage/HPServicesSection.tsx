import HPServicesBG from '@/assets/HPServicesBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import ServiceCard from '@/components/ServiceCard';
import { IService } from '@/types';
import dbConnect from '@/lib/db';
import Service from '@/models/service';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { unstable_setRequestLocale } from 'next-intl/server';
interface Props {
  locale: Locale;
}
async function HPServicesCases({ locale }: Props) {
  unstable_setRequestLocale(locale);
  let services: IService[] = [];
  try {
    await dbConnect();
    services = await Service.find({ active: true }).limit(4);
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  return (
    <div className={'grid w-full grid-cols-4 500:!grid-cols-1 1080:grid-cols-2'}>
      {services.map((item, index) => {
        // console.log(item.slug);
        return (
          <ServiceCard
            key={item._id}
            slug={item.slug}
            index={index}
            title={item.title[locale]}
            text={item.description[locale]}
          />
        );
      })}
    </div>
  );
}

export default function HPServicesSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Homepage_ServicesSection');
  return (
    <section
      id={'ServicesSection'}
      className={'bg-bgGray bg-no-repeat py-12'}
      style={{ backgroundImage: `url(${HPServicesBG.src})`, backgroundPositionX: 'right' }}
    >
      <ContainerWrapper className={'flex h-full flex-col items-center justify-center gap-y-14'}>
        <div className={'flex flex-col items-center gap-y-5'}>
          <div className={'flex flex-col items-center gap-y-4'}>
            <div className={'flex flex-col items-center gap-y-1'}>
              <h4 className={'text-base leading-[1.21rem] text-secondGold'}>{t('title')}</h4>
              <h2 className={'font-playfair text-[32px] font-semibold leading-[42.66px] text-mainGreen'}>
                {t('subtitle')}
              </h2>
            </div>
            <p className={'max-w-[50ch] text-center text-sm leading-[21.77px] text-secondText'}>{t('description')}</p>
          </div>
          <Link href={'/xidmetlerimiz'}>
            <ButtonArrowRight text={t('button')} />
          </Link>
        </div>
        <HPServicesCases locale={locale} />
      </ContainerWrapper>
    </section>
  );
}
