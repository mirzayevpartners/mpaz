import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/assets/logo.svg';
import MarkIcon from '@/assets/adress.svg';
import PhoneIcon from '@/assets/phone.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
export default function Footer() {
  const iconStyleObj = {
    size: 20,
    className: 'text-mainGreen',
  };
  const socialLinks = [
    { href: '/', icon: <FaFacebookF {...iconStyleObj} /> },
    { href: '/', icon: <FaTwitter {...iconStyleObj} /> },
    { href: '/', icon: <FaInstagram {...iconStyleObj} /> },
    { href: '/', icon: <FaYoutube {...iconStyleObj} /> },
    { href: '/', icon: <FaLinkedinIn {...iconStyleObj} /> },
  ];
  return (
    <footer className={'flex flex-col py-12 gap-y-6'}>
      <ContainerWrapper className={'flex justify-between flex-col md:flex-row gap-y-10'}>
        <div className={'flex flex-col gap-y-4'}>
          <div>
            <img src={Logo.src} alt={'logo'} />
          </div>
          <div className={'flex items-center gap-x-[6px]'}>
            <img className={'size-4'} src={MarkIcon.src} />
            <p className={'text-newsText text-base leading-[19.36px]'}>Azerbaijan, baku Hesen Aliyev kucesi 45</p>
          </div>
          <div className={'flex items-center gap-x-[6px]'}>
            <img className={'size-4'} src={PhoneIcon.src} />
            <p className={'text-newsText text-base leading-[19.36px]'}>+994 12 310 09 88</p>
          </div>
        </div>
        <div className={'flex gap-x-3'}>
          {socialLinks.map((link, index) => {
            return (
              <Link
                className={'size-10 border-2 border-mainGreen flex items-center justify-center rounded-full'}
                key={index}
                href={link.href}
              >
                {link.icon}
              </Link>
            );
          })}
        </div>
      </ContainerWrapper>
      <Separator className={'h-0.5 bg-secondGold'} />
      <ContainerWrapper>
        <p className={'text-secondText text-base leading-[19.36px]'}>Copyright © - 2023. Mirzayev & Partners. Bütün hüquqları qorunur</p>
      </ContainerWrapper>
    </footer>
  );
}
