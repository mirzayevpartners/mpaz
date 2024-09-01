'use client';

import { useHamburgerSidebarStore } from '@/store/HamburgerSidebarStore';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import ContainerWrapper from '@/components/ContainerWrapper';
import { ReactElement, useEffect, useLayoutEffect } from 'react';
import { Search } from 'lucide-react';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { Locale } from '@/i18config';
import { ISocials } from '@/types';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link as NewLink } from '@/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
function ChangeLanguage({ locale }: { locale: Locale }) {
  const { close } = useHamburgerSidebarStore();
  const pathname = usePathname();
  const slugWithoutLocale = pathname.replace(`/${locale}`, '');
  const langs = [
    {
      title: 'Azərbaycan dili',
      locale: 'az',
    },
    {
      title: 'English',
      locale: 'en',
    },
    {
      title: 'Русский',
      locale: 'ru',
    },
  ];
  return (
    <div
      className={
        '400:flex-col gap-y-3 w-full max-w-[400px] border-t-[1px] border-b-[1px] border-t-[#D8DEEC] border-b-[#D8DEEC] py-[15px] px-[40px] flex items-center justify-between'
      }
    >
      {langs.map((lang) => {
        return (
          <Link
            key={lang.locale}
            className={cn(
              'text-base leading-[18.75px] text-secondText',
              locale === lang.locale && 'text-mainGreen font-semibold'
            )}
            href={`/${lang.locale}${slugWithoutLocale}`}
            onClick={close}
          >
            {lang.title}
          </Link>
        );
      })}
    </div>
  );
}

function BottomNavbarLinksNav({ locale }: { locale: Locale }) {
  const { close } = useHamburgerSidebarStore();
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
    <nav className={'max-w-[400px] w-[100%] flex flex-col items-center '}>
      {links.map((link, index) => {
        return (
          // <div className={''} key={index}>
          <NewLink
            key={index}
            className={
              'w-full text-center border-b-2 border-transparent px-4 py-[15px] text-base leading-[19.36px] text-black hover:border-b-secondGold'
            }
            href={link.href}
            onClick={close}
          >
            {link.text}
          </NewLink>
          // </div>
        );
      })}
    </nav>
  );
}

export default function HamburgerSidebarPopupClient({ socials, locale }: { socials: ISocials[]; locale: Locale }) {
  const { isOpen } = useHamburgerSidebarStore();
  const iconStyleObj = {
    size: 20,
    className: 'text-mainGreen',
  };
  const socialLinkObj: {
    [key: string]: ReactElement;
  } = {
    facebook: <FaFacebookF {...iconStyleObj} />,
    twitter: <FaTwitter {...iconStyleObj} />,
    instagram: <FaInstagram {...iconStyleObj} />,
    youtube: <FaYoutube {...iconStyleObj} />,
    linkedin: <FaLinkedinIn {...iconStyleObj} />,
  };
  useLayoutEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);
  return (
    <div
      className={cn(
        'flex justify-center overflow-hidden items-center fixed transition-all duration-500 left-0 w-0 h-full z-[9000] opacity-100 bg-white',
        isOpen ? 'w-full' : 'w-0'
      )}
    >
      <div className={'size-full py-4 overflow-auto'}>
        <ContainerWrapper className={'h-[770px] max-w-[400px]'}>
          <div className={'bg-bgGray max-w-[400px] w-[100%] relative'}>
            <Input
              placeholder={'Axtar'}
              className={
                'w-[90%] !ring-transparent !ring-offset-0 !outline-transparent !h-auto p-0 border-none bg-bgGray border-1 border-borderGray py-3 text-base leading-[19.36px] text-secondText px-3'
              }
            />
            <Search size={20} className={'absolute right-3 top-2.5 text-secondText'} />
          </div>
          <ButtonArrowRight className={'mt-6 max-w-[400px] w-[100%] justify-center'} text={'Konsultasiya'} />
          <BottomNavbarLinksNav locale={locale} />
          <ChangeLanguage locale={locale} />
          <div className={'max-w-[400px] w-full flex gap-x-3 justify-center items-center py-[20px]'}>
            {socials.map((link) => {
              if (link.title in socialLinkObj) {
                return (
                  <Link
                    className={'size-10 border-2 border-mainGreen flex items-center justify-center rounded-full'}
                    key={link._id}
                    href={link.link}
                  >
                    {socialLinkObj[link.title]}
                  </Link>
                );
              }
            })}
          </div>
        </ContainerWrapper>
      </div>
    </div>
  );
}
