import HamburgerSidebarPopupClient from '@/components/HamburgerSidebarPopupClient';
import { ISocials } from '@/types';
import dbConnect from '@/lib/db';
import Socials from '@/models/socials';
import { Locale } from '@/i18config';

export default async function HamburgerSidebarPopup({ locale }: { locale: Locale }) {
  let socials: ISocials[] = [];
  try {
    await dbConnect();
    socials = await Socials.find({});
  } catch (e) {
    return <div>Server Error</div>;
  }
  return <HamburgerSidebarPopupClient locale={locale} socials={JSON.parse(JSON.stringify(socials))} />;
}
