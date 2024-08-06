import ContainerWrapper from '@/components/ContainerWrapper';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import UKFlagSvg from '@/assets/UKFlagSvg.svg';
import Link from 'next/link';
import { ISocials } from '@/types';
import dbConnect from '@/lib/db';
import Socials from '@/models/socials';
import { ReactElement } from 'react';

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
            <Link
              className={'flex size-6 items-center justify-center rounded-full border-2 border-secondText'}
              href={link.link}
              key={link._id}
            >
              {socialLinkObj[link.title]}
            </Link>
          );
        }
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
    <header className={'TopNavbar flex h-12 w-full items-center bg-mainGreen 800:hidden'}>
      <ContainerWrapper>
        <div className={'flex items-center justify-between'}>
          <HeaderIcons />
          <HeaderSearchAndLanguage />
        </div>
      </ContainerWrapper>
    </header>
  );
}
