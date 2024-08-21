import HPFirstSection from '@/components/MainPage/HPFirstSection';
import HPFormSection from '@/components/MainPage/HPFormSection/HPFormSection';
import HPServicesSection from '@/components/MainPage/HPServicesSection';
import HPAboutSection from '@/components/MainPage/HPAboutSection';
import HPTeamSection from '@/components/MainPage/HPTeamSection';
import HPNewsSection from '@/components/MainPage/HPNewsSection';
import HPMediaSection from '@/components/MainPage/HPMediaSection';
import HPCustomersSection from '@/components/MainPage/HPCustomerSection/HPCustomersSection';
import HPCompaniesSection from '@/components/MainPage/HPCompaniesSection';
import HPFaqSection from '@/components/MainPage/HPFaqSection';
import HPCommunicateSection from '@/components/MainPage/HPCommunicateSection';
import LocationMap from '@/components/LocationMap';
import { Locale } from '@/i18config';
import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: {
    locale: Locale;
  };
}

export default async function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HPFirstSection locale={locale} />
      <HPFormSection locale={locale} />
      <HPServicesSection locale={locale} />
      <HPAboutSection locale={locale} />
      <HPTeamSection locale={locale} />
      <HPNewsSection locale={locale} />
      <HPMediaSection locale={locale} />
      <HPCustomersSection locale={locale} />
      <HPCompaniesSection locale={locale} />
      <HPFaqSection locale={locale} />
      <HPCommunicateSection locale={locale} />
      <LocationMap />
    </>
  );
}
