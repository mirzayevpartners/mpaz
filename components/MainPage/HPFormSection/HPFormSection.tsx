import HPFormSectionBG from '@/assets/HPFormSectionBG.png';
import partnerIcon from '@/assets/partner.svg';
import businessPartnerIcon from '@/assets/businessPartner.svg';
import justiceIcon from '@/assets/justice.svg';
import auctionIcon from '@/assets/auction.svg';
import ContainerWrapper from '@/components/ContainerWrapper';
import ApplyForm from '@/components/MainPage/HPFormSection/ApplyForm';
import { ICompanyCounts } from '@/types';
import dbConnect from '@/lib/db';
import companycounts from '@/models/companycounts';
import NumberAnimation from '@/components/NumberAnimation';

async function HPFormSectionCases() {
  let companyCounts: ICompanyCounts[] = [];
  try {
    await dbConnect();
    companyCounts = await companycounts.find({});
  } catch (e) {
    return <div>Server Error</div>;
  }
  return (
    <div className={'grid grid-cols-4 items-center gap-x-16 gap-y-8 1000:grid-cols-2'}>
      {companyCounts.map((item) => {
        const hasPlus = item.number.includes('+');
        const num = item.number.includes('+') ? +item.number.replace('+', '') : +item.number;
        return (
          <div className={'flex flex-col items-center gap-y-2'} key={item._id}>
            <img src={item.icon.src} alt={item.title} />
            <div className={'flex flex-col items-center gap-y-[0.375rem]'}>
              {/*<h2 className={'font-playfair text-[2.5rem] leading-[3.333rem] text-white'}>{item.number}</h2>*/}
              <div>
                <NumberAnimation className={'font-playfair text-[2.5rem] leading-[3.333rem] text-white'} number={num} />
                {hasPlus && <span className={'font-playfair text-white text-[2.5rem] leading-[3.333rem]'}>+</span>}
              </div>
              <p className={'text-center text-base uppercase leading-[1.21rem] text-secondGold'}>{item.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function HPFormSection() {
  return (
    <section className={'relative flex min-h-full w-full py-8'}>
      <div className={'absolute inset-0 -z-10 flex flex-[1] flex-col'}>
        <div
          className={'flex-[1] border-b-[3px] border-b-secondGold'}
          style={{ backgroundImage: `url(${HPFormSectionBG.src})` }}
        ></div>
        <div className={'flex-[1] bg-white'}></div>
      </div>
      <ContainerWrapper className={'flex h-full w-full flex-col items-center gap-y-8 pt-6'}>
        <HPFormSectionCases />
        <ApplyForm />
      </ContainerWrapper>
    </section>
  );
}
