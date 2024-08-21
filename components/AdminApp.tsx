// in src/components/AdminApp.tsx
'use client'; // remove this line if you choose Pages Router
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { useLayoutEffect } from 'react';
import { NewsCreate, NewsEdit, NewsList } from '@/components/Admin/News';
import { dataProvider } from '@/components/Admin/dataProvider';
import { TeamCreate, TeamEdit, TeamList } from '@/components/Admin/Team';
import { ServiceCreate, ServiceEdit, ServiceList } from '@/components/Admin/Service';
import { GalleryCreate, GalleryEdit, GalleryList } from '@/components/Admin/Gallery';
import { VideoCreate, VideoEdit, VideoList } from '@/components/Admin/Video';
import { TestimonialCreate, TestimonialEdit, TestimonialList } from '@/components/Admin/Testimonial';
import { CompanyCreate, CompanyEdit, CompanyList } from '@/components/Admin/Company';
import { QuestionCreate, QuestionEdit, QuestionList } from '@/components/Admin/Question';
import { ActiveWorksCreate, ActiveWorksEdit, ActiveWorksList } from '@/components/Admin/ActiveWorks';
import { CompanyCountsCreate, CompanyCountsEdit, CompanyCountsList } from '@/components/Admin/CompanyCounts';
import { AboutUsCreate, AboutUsEdit, AboutUsList } from '@/components/Admin/AboutUs';
import { ContactCreate, ContactEdit, ContactList } from '@/components/Admin/Contact';
import { SocialsCreate, SocialsEdit, SocialsList } from '@/components/Admin/Socials';
import authProvider from '@/components/Admin/authProvider';
import { FormDatasEdit, FormDatasList } from '@/components/Admin/FormDatas';

// BottomNavbar TopNavbar Footer
const AdminApp = () => {
  useLayoutEffect(() => {
    const bottomNavbar = document.querySelector('.BottomNavbar') as HTMLElement;
    const topNavbar = document.querySelector('.TopNavbar') as HTMLElement;
    const footer = document.querySelector('.Footer') as HTMLElement;
    if (bottomNavbar) {
      bottomNavbar.style.display = 'none';
    }
    if (topNavbar) {
      topNavbar.style.display = 'none';
    }
    if (footer) {
      footer.style.display = 'none';
    }
    return () => {
      if (bottomNavbar) {
        bottomNavbar.style.display = 'flex';
      }
      if (topNavbar) {
        topNavbar.style.display = 'flex';
      }
      if (footer) {
        footer.style.display = 'flex';
      }
    };
  }, []);
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name={'News'} list={NewsList} edit={NewsEdit} create={NewsCreate} />
      <Resource name={'Team'} list={TeamList} edit={TeamEdit} create={TeamCreate} />
      <Resource name={'Service'} list={ServiceList} edit={ServiceEdit} create={ServiceCreate} />
      <Resource name={'Gallery'} list={GalleryList} edit={GalleryEdit} create={GalleryCreate} />
      <Resource name={'Video'} list={VideoList} edit={VideoEdit} create={VideoCreate} />
      <Resource name={'Testimonial'} list={TestimonialList} edit={TestimonialEdit} create={TestimonialCreate} />
      <Resource name={'Company'} list={CompanyList} edit={CompanyEdit} create={CompanyCreate} />
      <Resource name={'Question'} list={QuestionList} edit={QuestionEdit} create={QuestionCreate} />
      <Resource name={'ActiveWorks'} list={ActiveWorksList} edit={ActiveWorksEdit} create={ActiveWorksCreate} />
      <Resource name={'CompanyCounts'} list={CompanyCountsList} edit={CompanyCountsEdit} create={CompanyCountsCreate} />
      {/*<Resource name={'AboutUs'} list={AboutUsList} edit={AboutUsEdit} create={AboutUsCreate} />*/}
      <Resource name={'Contact'} list={ContactList} edit={ContactEdit} create={ContactCreate} />
      <Resource name={'Socials'} list={SocialsList} edit={SocialsEdit} create={SocialsCreate} />
      <Resource name={'FormDatas'} list={FormDatasList} edit={FormDatasEdit} />
    </Admin>
  );
};

export default AdminApp;
