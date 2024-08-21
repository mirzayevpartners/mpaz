'use client';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/assets/Logo.svg';
import ButtonArrowRight from '@/components/custom-ui/ButtonArrowRight';
import { Locale } from '@/i18config';
import { Turn as Hamburger } from 'hamburger-react';
import { useHamburgerSidebarStore } from '@/store/HamburgerSidebarStore';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
interface Props {
  locale: Locale;
}

function BottomNavbarLinksNav({ locale }: Props) {
  const t = useTranslations('Navbar');
  const links = [
    { href: '/', key: 'home' },
    { href: '/#ServicesSection', key: 'services' },
    { href: '/#AboutSection', key: 'about' },
    { href: '/#TeamSection', key: 'team' },
    { href: '/#NewsSection', key: 'news' },
    { href: '/#MediaSection', key: 'media' },
    { href: '/#FaqSection', key: 'faq' },
    { href: '/#CommunicateSection', key: 'contact' },
  ];
  return (
    <nav className={'flex items-center 900:hidden'}>
      {links.map((link, index) => {
        return (
          // <div className={''} key={index}>
          <Link
            key={index}
            className={
              'border-b-2 border-transparent px-2 py-[1.875rem] text-base 1000:text-[14px] leading-[1.21rem] text-black hover:border-b-secondGold'
            }
            href={link.href}
          >
            {t(link.key)}
          </Link>
          // </div>
        );
      })}
    </nav>
  );
}

export default function BottomNavbar({ locale }: Props) {
  const t = useTranslations('Navbar');
  const { isOpen, open, close } = useHamburgerSidebarStore();

  return (
    <header
      // style={{ top: scrolled ? 0 : 'unset', position: scrolled ? 'fixed' : 'unset' }}
      className={
        'BottomNavbar sticky top-0 z-[9001] flex h-[5.25rem] w-full items-center border-b border-b-myGray bg-white'
      }
    >
      <ContainerWrapper>
        <div className={'flex items-center justify-between'}>
          <Link href={'/'}>
            <img src={Logo.src} alt={'logo'} />
          </Link>
          <BottomNavbarLinksNav locale={locale} />
          <Link href={'#HPFormSection'} className={'w-fit'}>
            <ButtonArrowRight className={'1240:hidden'} text={t('consultation')} />
          </Link>
          <div className={'hidden 900:inline-block'}>
            <Hamburger toggled={isOpen} onToggle={(toggled) => (toggled ? open() : close())} size={24} />
          </div>
        </div>
      </ContainerWrapper>
    </header>
  );
}
