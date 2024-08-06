import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopNavbar from '@/components/HeaderParts/TopNavbar';
import BottomNavbar from '@/components/HeaderParts/BottomNavbar';
import Footer from '@/components/FooterParts/Footer';
import YoutubeVideoPopup from '@/components/YoutubeVideoPopup';
import { Toaster } from 'sonner';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster richColors />
        <YoutubeVideoPopup />
        <div className={'flex flex-col'}>
          <TopNavbar />
          <BottomNavbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
