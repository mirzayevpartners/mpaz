import ContainerWrapper from '@/components/ContainerWrapper';
import { IContact } from '@/types';
import dbConnect from '@/lib/db';
import Contact from '@/models/contact';
import { Locale } from '@/i18config';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  locale: Locale;
}
export default async function HPCommunicateSection({ locale }: Props) {
  unstable_setRequestLocale(locale);
  let info: IContact[] = [];
  try {
    await dbConnect();
    info = await Contact.find({});
  } catch (e) {
    console.log(e);
    return <div>Server Error</div>;
  }
  const translation: {
    [key: string]: string;
  } = {
    address: 'Ünvan',
    phone: 'Telefon',
    email: 'Elektron əlaqə',
  };
  return (
    <section id={'CommunicateSection'}>
      <ContainerWrapper className={'h-full grid justify-center items-center grid-cols-1 pt-8 md:grid-cols-3'}>
        {info.map((item) => {
          return (
            <div className={'bg-white h-[300px] border border-myGray flex items-center justify-center'} key={item._id}>
              <div className={'flex flex-col gap-y-[18px] items-center'}>
                <img className={'size-10'} src={item.icon.src} />
                <div className={'flex flex-col items-center gap-y-3'}>
                  <h4 className={'font-playfair text-mainGreen font-semibold text-2xl'}>{translation[item.key]}</h4>
                  <p className={'text-center max-w-[24ch] text-base leading-[19.01px] text-newsText'}>{item.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ContainerWrapper>
    </section>
  );
}
