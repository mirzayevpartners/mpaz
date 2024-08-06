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

export default async function Home() {
  return (
    <>
      <HPFirstSection />
      <HPFormSection />
      <HPServicesSection />
      <HPAboutSection />
      <HPTeamSection />
      <HPNewsSection />
      {/*<HPMediaSection />*/}
      <HPCustomersSection />
      <HPCompaniesSection />
      <HPFaqSection />
      <HPCommunicateSection />
      <LocationMap />
    </>
  );
}
