import HPFaqBG from '@/assets/HPFaqBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import CustomAccordion from '@/components/custom-ui/CustomAccordion';
import { IQuestion } from '@/types';
import dbConnect from '@/lib/db';
import Question from '@/models/question';
import { Locale } from '@/i18config';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  locale: Locale;
}

export default async function HPFaqSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('Homepage_FaqSection');
  let data: IQuestion[] = [];
  try {
    await dbConnect();
    data = await Question.find({ active: true });
  } catch (e) {
    console.log(e);
    return <div>Server error</div>;
  }
  return (
    <section id={'FaqSection'} className={' bg-mainGreen py-12'} style={{ backgroundImage: `url(${HPFaqBG.src})` }}>
      <ContainerWrapper className={'h-full flex flex-col items-center justify-center gap-y-8'}>
        <div className={'flex flex-col items-center gap-y-1'}>
          <h4 className={'text-paleGold2 text-[20px] leading-[24.2px]'}>{t('title')}</h4>
          <h2 className={'font-playfair text-center text-white font-semibold text-[32px] leading-[42.66px]'}>
            {t('subtitle')}
          </h2>
        </div>
        <div className={'xl:w-1/2 lg:w-2/3 md:w-[80%] sm:w-full'}>
          <CustomAccordion
            locale={locale}
            data={data}
            contentClassName={'text-myGray text-sm w-full'}
            triggerClassName={'text-[20px] leading-[26.66px] text-secondGold !no-underline text-left'}
          />
        </div>
      </ContainerWrapper>
    </section>
  );
}
