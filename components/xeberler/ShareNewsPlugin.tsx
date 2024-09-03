'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'next-share';
import { usePathname } from '@/navigation';
export default function ShareNewsPlugin({ media, title }: { media: string; title: string }) {
  const pathname = usePathname();
  const socialIcons = [
    { href: '/', icon: <FaFacebookF className={'text-white'} size={15} />, share: FacebookShareButton },
    { href: '/', icon: <FaTwitter className={'text-white'} size={15} />, share: TwitterShareButton },
    // { href: '/', icon: <FaInstagram className={'text-white'} size={15} />, share: FacebookShareButton },
    // { href: '/', icon: <FaYoutube className={'text-white'} size={15} />, share: FacebookShareButton },
    { href: '/', icon: <FaLinkedinIn className={'text-white'} size={15} />, share: LinkedinShareButton },
  ];
  return (
    <div className={'flex items-center gap-x-[15px]'}>
      {socialIcons.map((item, index) => {
        return (
          <item.share blankTarget={true} title={title} url={pathname} key={index}>
            <div className={'bg-newsText rounded-full size-6 flex items-center justify-center'}>{item.icon}</div>
          </item.share>
        );
      })}
    </div>
  );
}
