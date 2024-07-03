import AddressIcon from '@/assets/adress.svg';
import PhoneIcon from '@/assets/phone.svg';
import ContainerWrapper from '@/components/ContainerWrapper';

export default function HPCommunicateSection() {
  const info = [
    {
      icon: AddressIcon.src,
      title: 'Ünvan',
      text: 'Bakı şəhəri, Nəsimi rayonu,307-ci məhəllə, Füzuli küçəsi 47',
    },
    {
      icon: PhoneIcon.src,
      title: 'Telefon',
      text: '(+99412) 310 09 88',
    },
    {
      icon: PhoneIcon.src,
      title: 'Elektron əlaqə',
      text: 'office@m-p.az',
    },
  ];
  return (
    <section id={'CommunicateSection'}>
      <ContainerWrapper className={'h-full grid justify-center items-center grid-cols-1 pt-8 md:grid-cols-3'}>
        {info.map((item, index) => {
          return (
            <div
              className={'bg-white h-[300px] border border-myGray flex items-center justify-center'}
              key={item.title}
            >
              <div className={'flex flex-col gap-y-[18px] items-center'}>
                <img className={'size-10'} src={item.icon} />
                <div className={'flex flex-col items-center gap-y-3'}>
                  <h4 className={'text-mainGreen font-semibold text-2xl'}>{item.title}</h4>
                  <p className={'text-center max-w-[24ch] text-base leading-[19.01px] text-newsText'}>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </ContainerWrapper>
    </section>
  );
}
