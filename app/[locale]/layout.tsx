// export const dynamic = 'force-dynamic';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNavbar from '@/components/HeaderParts/TopNavbar';
import BottomNavbar from '@/components/HeaderParts/BottomNavbar';
import Footer from '@/components/FooterParts/Footer';
import YoutubeVideoPopup from '@/components/YoutubeVideoPopup';
import { Toaster } from 'sonner';
import { GoogleAnalytics } from '@next/third-parties/google';
const inter = Inter({ subsets: ['latin'] });
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Locale, locales } from '@/i18config';
import HamburgerSidebarPopup from '@/components/HamburgerSidebarPopup';
import SwiperCarousel from '@/components/Swiper';
import PhotoSwiperModal from '@/components/PhotoSwiperModal';
import ChatBot from '@/components/ChatBot';
import PageWhatsappBox from '@/components/PageWhatsappBox';
import CookieConsent from '@/components/CookieConsent';

export const metadata: Metadata = {
  title: 'mp.az',
  description: 'mp.az',
  icons: [{ url: '/Logo.svg', rel: 'icon', type: 'image/x-icon' }],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();
  const gaId = process.env.GOOGLE_GA_ID!;
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <GoogleAnalytics gaId={gaId} />
          <PageWhatsappBox />
          <ChatBot />
          <Toaster richColors />
          <YoutubeVideoPopup />
          <PhotoSwiperModal />
          <TopNavbar locale={locale} />
          <BottomNavbar locale={locale} />
          <HamburgerSidebarPopup locale={locale} />
          {children}
          <CookieConsent />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
