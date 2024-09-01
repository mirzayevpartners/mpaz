import WhatsappSvg from '@/assets/Whatsapp.svg';
import { ISocials } from '@/types';
import dbConnect from '@/lib/db';
import Socials from '@/models/socials';
import Link from 'next/link';

export default async function PageWhatsappBox() {
  let wpSocial: ISocials | null = null;
  try {
    await dbConnect();
    wpSocial = await Socials.findOne({ title: 'whatsapp' });
  } catch (e) {
    console.error('PageWhatsappBox error', e);
    return <div>Server Error</div>;
  }
  return (
    <Link
      href={wpSocial?.link || '#'}
      className={
        'fixed right-[23px] top-[57%] z-[100] flex justify-center items-center cursor-pointer size-[60px] rounded-full bg-[#05A884]'
      }
    >
      <img src={WhatsappSvg.src} />
    </Link>
  );
}
