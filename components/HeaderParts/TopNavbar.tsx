import ContainerWrapper from '@/components/ContainerWrapper';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { ISocials } from '@/types';
import dbConnect from '@/lib/db';
import Socials from '@/models/socials';
import { ReactElement, Suspense } from 'react';
import { Locale } from '@/i18config';
import { LangSwitcher } from '@/components/HeaderParts/LangSwitcher';
import InputComponent from '@/components/InputComponent';
import TopNavbarSearch from '@/components/HeaderParts/TopNavbarSearch';

interface Props {
  locale: Locale;
}

async function HeaderIcons() {
  let socials: ISocials[] = [];
  try {
    await dbConnect();
    socials = await Socials.find({});
  } catch (e) {
    return <div>Server Error</div>;
  }
  const iconStylesObj = {
    size: 12,
    className: 'text-secondText',
  };
  const socialLinkObj: {
    [key: string]: ReactElement;
  } = {
    facebook: <FaFacebookF {...iconStylesObj} />,
    twitter: <FaTwitter {...iconStylesObj} />,
    instagram: <FaInstagram {...iconStylesObj} />,
    youtube: <FaYoutube {...iconStylesObj} />,
    linkedin: <FaLinkedinIn {...iconStylesObj} />,
  };
  return (
    <div className={'flex items-center gap-x-[0.688rem]'}>
      {socials.map((link) => {
        if (link.title in socialLinkObj) {
          return (
            <a
              className={'flex size-6 items-center justify-center rounded-full border-2 border-secondText'}
              href={link.link}
              key={link._id}
            >
              {socialLinkObj[link.title]}
            </a>
          );
        }
      })}
    </div>
  );
}

function HeaderSearchAndLanguage({ locale }: Props) {
  return (
    <div className={'flex items-center gap-x-8'}>
      <Suspense fallback={<div>Loading...</div>}>
        <TopNavbarSearch />
      </Suspense>
      <LangSwitcher locale={locale} />
    </div>
  );
}

export default function TopNavbar({ locale }: Props) {
  return (
    <header className={'TopNavbar flex h-12 w-full items-center bg-mainGreen 900:hidden'}>
      <ContainerWrapper>
        <div className={'flex items-center justify-between'}>
          <HeaderIcons />
          <HeaderSearchAndLanguage locale={locale} />
        </div>
      </ContainerWrapper>
    </header>
  );
}
