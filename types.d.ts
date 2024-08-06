interface ImageType {
  src: string;
  title: string;
  _id: string;
  public_id: string;
}

export interface INews {
  _id: string;
  title: string;
  slug: string;
  slugTitle: string;
  content: string;
  images: ImageType[];
  mainImage: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface ITeam {
  _id: string;
  fullName: string;
  email: string;
  profession: string;
  photo: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IService {
  _id: string;
  title: string;
  description: string;
  icon: ImageType;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface IGallery {
  _id: string;
  title: string;
  customDate: string;
  images: ImageType[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

interface VideoType {
  src: string;
  title: string;
  _id: string;
}

export interface IVideo {
  _id: string;
  title: string;
  customDate: string;
  videos: VideoType[];
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ITestimonial {
  _id: string;
  fullName: string;
  title: string;
  text: string;
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
  question: string;
  answer: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface IActiveWorks {
  _id: string;
  title: string;
  number: string;
  icon: ImageType;
  createdAt: string;
  updatedAt: string;
}

export interface ICompanyCounts {
  _id: string;
  title: string;
  number: string;
  icon: ImageType;
  createdAt: string;
  updatedAt: string;
}

export interface IAboutUs {
  _id: string;
  image: ImageType;
  text: string;
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
