import HPFaqBG from '@/assets/HPFaqBG.png';
import ContainerWrapper from '@/components/ContainerWrapper';
import CustomAccordion from '@/components/custom-ui/CustomAccordion';
import { IQuestion } from '@/types';
import dbConnect from '@/lib/db';
import Question from '@/models/question';

export default async function HPFaqSection() {
  let data: IQuestion[] = [];
  try {
    await dbConnect();
    data = await Question.find({ active: true });
  } catch (e) {
    return <div>Server error</div>;
  }
  return (
    <section id={'FaqSection'} className={' bg-mainGreen py-12'} style={{ backgroundImage: `url(${HPFaqBG.src})` }}>
      <ContainerWrapper className={'h-full flex flex-col items-center justify-center gap-y-8'}>
        <div className={'flex flex-col items-center gap-y-1'}>
          <h4 className={'text-paleGold2 text-[20px] leading-[24.2px]'}>FAQ</h4>
          <h2 className={'font-playfair text-white font-semibold text-[32px] leading-[42.66px]'}>Ən çox verilən suallar</h2>
        </div>
        <div className={'xl:w-1/2 lg:w-2/3 md:w-[80%] sm:w-full'}>
          <CustomAccordion
            data={data}
            contentClassName={'text-myGray text-sm w-full'}
            triggerClassName={'text-[20px] leading-[26.66px] text-secondGold !no-underline text-left'}
          />
        </div>
      </ContainerWrapper>
    </section>
  );
}
