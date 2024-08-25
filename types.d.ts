export interface ILanguage {
  az: string;
  en: string;
  ru: string;
}

interface ImageType {
  rawFile: any;
  src: string;
  title: string;
  _id: string;
  public_id: string;
}

export interface INews {
  _id: string;
  title: ILanguage;
  slug: string;
  slugTitle: ILanguage;
  content: ILanguage;
  images: ImageType[];
  mainImage: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ITeam {
  _id: string;
  fullName: ILanguage;
  profession: ILanguage;
  email: string;
  photo: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IService {
  _id: string;
  title: ILanguage;
  description: ILanguage;
  // icon: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImageType {
  _id: string;
  imageTitle: ILanguage;
  src: Omit<ImageType, '_id'>; //not have _id
}

export interface IGallery {
  _id: string;
  title: ILanguage;
  customDate: string;
  images: ImageType[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface VideoType {
  _id: string;
  title: ILanguage;
  src: string;
}

export interface IVideo {
  _id: string;
  title: ILanguage;
  customDate: string;
  videos: VideoType[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonial {
  _id: string;
  fullName: ILanguage;
  title: ILanguage;
  text: ILanguage;
  rating: number;
  photo: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ICompany {
  _id: string;
  image: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IQuestion {
  _id: string;
  question: ILanguage;
  answer: ILanguage;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IActiveWorks {
  _id: string;
  title: ILanguage;
  number: string;
  icon: ImageType;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyCounts {
  _id: string;
  title: ILanguage;
  number: string;
  icon: ImageType;
  createdAt: string;
  updatedAt: string;
}

export interface IAboutUs {
  _id: string;
  text: ILanguage;
  image: ImageType;
}

export interface IContact {
  _id: string;
  key: string;
  value: string;
  icon: ImageType;
  createdAt: string;
  updatedAt: string;
}
export interface ISocials {
  _id: string;
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface IFormDetails {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  customDate: Date;
  firstTime: boolean;
}
