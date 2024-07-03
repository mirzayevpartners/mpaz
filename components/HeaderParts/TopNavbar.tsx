import ContainerWrapper from '@/components/ContainerWrapper';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import UKFlagSvg from '@/assets/UKFlagSvg.svg';
import Link from 'next/link';

function HeaderIcons() {
  const iconStylesObj = {
    size: 12,
    className: 'text-secondText',
  };
  const links = [
    { href: '/', icon: <FaFacebookF {...iconStylesObj} /> },
    { href: '/', icon: <FaTwitter {...iconStylesObj} /> },
    { href: '/', icon: <FaInstagram {...iconStylesObj} /> },
    { href: '/', icon: <FaYoutube {...iconStylesObj} /> },
    { href: '/', icon: <FaLinkedinIn {...iconStylesObj} /> },
  ];
  return (
    <div className={'flex items-center gap-x-[0.688rem]'}>
      {links.map((link, index) => {
        return (
          <Link
            className={'flex size-6 items-center justify-center rounded-full border-2 border-secondText'}
            href={link.href}
            key={index}
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
}

function HeaderSearchAndLanguage() {
  return (
    <div className={'flex items-center gap-x-8'}>
      <FaMagnifyingGlass size={20} color={'white'} />
      <div className={'flex items-center gap-x-[0.563rem]'}>
        <img src={UKFlagSvg.src} alt={'UK Flag'} />
        <p className={'text-sm font-medium leading-[1.059rem] text-white'}>ENG</p>
      </div>
    </div>
  );
}

export default function TopNavbar() {
  return (
    <header className={'flex h-12 w-full items-center bg-mainGreen 800:hidden'}>
      <ContainerWrapper>
        <div className={'flex items-center justify-between'}>
          <HeaderIcons />
          <HeaderSearchAndLanguage />
        </div>
      </ContainerWrapper>
    </header>
  );
}
