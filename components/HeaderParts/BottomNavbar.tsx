'use client';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/assets/Logo.svg';
import Link from 'next/link';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { useEffect, useState } from 'react';

function BottomNavbarLinksNav() {
  const links = [
    { href: '/', text: 'Ana Səhifə' },
    { href: '/#ServicesSection', text: 'Xidmətlərimiz' },
    { href: '/#AboutSection', text: 'Haqqımızda' },
    { href: '/#TeamSection', text: 'Komandamız' },
    { href: '/#NewsSection', text: 'Xəbərlər' },
    { href: '/#MediaSection', text: 'Media' },
    { href: '/#FaqSection', text: 'FAQ' },
    { href: '/#CommunicateSection', text: 'Əlaqə' },
  ];
  return (
    <nav className={'flex items-center 1000:hidden'}>
      {links.map((link, index) => {
        return (
          // <div className={''} key={index}>
          <Link
            key={index}
            className={
              'border-b-2 border-transparent px-2 py-[1.875rem] text-base leading-[1.21rem] text-black hover:border-b-secondGold'
            }
            href={link.href}
          >
            {link.text}
          </Link>
          // </div>
        );
      })}
    </nav>
  );
}

export default function BottomNavbar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset >= 47) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      style={{ top: scrolled ? 0 : 'unset', position: scrolled ? 'fixed' : 'unset' }}
      className={'BottomNavbar z-[100] flex h-[5.25rem] w-full items-center border-b border-b-myGray bg-white'}
    >
      <ContainerWrapper>
        <div className={'flex items-center justify-between'}>
          <Link href={'/'}>
            <img src={Logo.src} alt={'logo'} />
          </Link>
          <BottomNavbarLinksNav />
          <ButtonArrowRight className={'1240:hidden'} text={'Konsultasiya'} />
        </div>
      </ContainerWrapper>
    </header>
  );
}
