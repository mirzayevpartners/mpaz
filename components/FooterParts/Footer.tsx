import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/assets/Logo.svg';
import MarkIcon from '@/assets/adress.svg';
import PhoneIcon from '@/assets/phone.svg';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { IContact, ISocials } from '@/types';
import dbConnect from '@/lib/db';
import Contact from '@/models/contact';
import Socials from '@/models/socials';
import { ReactElement } from 'react';
export default async function Footer() {
  let contactData: IContact[] = [];
  let socials: ISocials[] = [];
  try {
    await dbConnect();
    contactData = await Contact.find({});
    socials = await Socials.find({});
  } catch (e) {
    return <div>Server Error</div>;
  }
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

  return (
    <footer className={'Footer flex flex-col py-12 gap-y-6'}>
      <ContainerWrapper className={'flex justify-between flex-col md:flex-row gap-y-10'}>
        <div className={'flex flex-col gap-y-4'}>
          <div>
            <img src={Logo.src} alt={'logo'} />
          </div>
          {contactData.map((cD) => {
            if (cD.key !== 'email') {
              return (
                <div key={cD._id} className={'flex items-center gap-x-[6px]'}>
                  <img className={'size-4'} src={cD.icon.src} />
                  <p className={'text-newsText text-base leading-[19.36px]'}>{cD.value}</p>
                </div>
              );
            }
          })}
        </div>
        <div className={'flex gap-x-3'}>
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
      <Separator className={'h-0.5 bg-secondGold'} />
      <ContainerWrapper>
        <p className={'text-secondText text-base leading-[19.36px]'}>
          Copyright © - 2023. Mirzayev & Partners. Bütün hüquqları qorunur
        </p>
      </ContainerWrapper>
    </footer>
  );
}
