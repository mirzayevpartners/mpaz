import { fetchUtils } from 'react-admin';
import { apiBase } from '@/helpers/apiBase';
import queryString from 'query-string';
import {
  UploadToCldCompanyCreate,
  UploadToCldCompanyUpdate,
  UploadToCldGalleryCreate,
  UploadToCldGalleryUpdate,
  UploadToCldNewsCreate,
  UploadToCldNewsUpdate,
  UploadToCldServiceCreate,
  UploadToCldServiceUpdate,
  UploadToCldTeamCreate,
  UploadToCldTeamUpdate,
} from '@/components/Admin/dataProviderFunctions';

const httpClient = fetchUtils.fetchJson;

const apiUrl = `${apiBase}/api/admin`;

const apiObj = {
  News: ['getAllNews', 'getOneNews'],
  Team: ['getAllTeam', 'getOneTeam'],
  Service: ['getAllService', 'getOneService'],
  Gallery: ['getAllGallery', 'getOneGallery'],
  Video: ['getAllVideo', 'getOneVideo'],
  Testimonial: ['getAllTestimonial', 'getOneTestimonial'],
  Company: ['getAllCompany', 'getOneCompany'],
  Question: ['getAllQuestion', 'getOneQuestion'],
  ActiveWorks: ['getAllActiveWorks', 'getOneActiveWorks'],
  CompanyCounts: ['getAllCompanyCounts', 'getOneCompanyCounts'],
  AboutUs: ['getAllAboutUs', 'getOneAboutUs'],
  Contact: ['getAllContact', 'getOneContact'],
  Socials: ['getAllSocials', 'getOneSocials'],
};

type Resource =
  | 'News'
  | 'Team'
  | 'Service'
  | 'Gallery'
  | 'Video'
  | 'Testimonial'
  | 'Company'
  | 'Question'
  | 'ActiveWorks'
  | 'CompanyCounts'
  | 'AboutUs'
  | 'Contact'
  | 'Socials';

interface GetListParams {
  pagination: { page: number; perPage: number };
  sort: { field: string; order: 'ASC' | 'DESC' };
  filter: any;
  meta?: any;
}
interface GetOneParams {
  id: number;
  meta?: any;
}
export interface UpdateParams {
  id: number;
  data: any;
  previousData: any;
  meta?: any;
}
export interface CreateParams {
  data: any;
  meta?: any;
}
interface DeleteParams {
  id: number;
  previousData?: any;
  meta?: any;
}

export const dataProvider = {
  getList: (resource: Resource, params: GetListParams) => {
    const query = {
      page: params.pagination.page,
      perPage: params.pagination.perPage,
      sort: params.sort.field,
      order: params.sort.order,
    };
    const url = `${apiUrl}/${apiObj[resource][0]}?${queryString.stringify(query)}`;
    return httpClient(url).then(({ headers, json }) => {
      if (headers.get('Content-Type') !== 'application/json') return;
      return {
        data: json.map((obj: any) => {
          const { _id, ...rest } = obj;
          return { ...rest, id: _id };
        }),
        total: json.length,
      };
    });
  },
  getOne: (resource: Resource, params: GetOneParams) => {
    const query = {
      id: params.id,
    };
    const url = `${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`;
    return httpClient(url).then(({ json }) => {
      const { _id, ...rest } = json;
      return { data: { ...rest, id: _id } };
    });
  },
  update: async (resource: Resource, params: UpdateParams) => {
    const query = {
      id: params.id,
    };
    if (resource === 'News') {
      await UploadToCldNewsUpdate(params);
    } else if (resource === 'Team' || resource === 'Testimonial') {
      await UploadToCldTeamUpdate(params);
    } else if (
      resource === 'Service' ||
      resource === 'ActiveWorks' ||
      resource === 'CompanyCounts' ||
      resource === 'Contact'
    ) {
      await UploadToCldServiceUpdate(params);
    } else if (resource === 'Gallery') {
      await UploadToCldGalleryUpdate(params);
    } else if (resource === 'Company' || resource === 'AboutUs') {
      await UploadToCldCompanyUpdate(params);
    }
    const url = `${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`;
    return httpClient(url, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      const { _id, ...rest } = json;
      return { data: { ...rest, id: _id } };
    });
  },
  create: async (resource: Resource, params: CreateParams) => {
    const url = `${apiUrl}/${apiObj[resource][1]}`;
    if (resource === 'News') {
      await UploadToCldNewsCreate(params);
    } else if (resource === 'Team' || resource === 'Testimonial') {
      await UploadToCldTeamCreate(params);
    } else if (
      resource === 'Service' ||
      resource === 'ActiveWorks' ||
      resource === 'CompanyCounts' ||
      resource === 'Contact'
    ) {
      await UploadToCldServiceCreate(params);
    } else if (resource === 'Gallery') {
      await UploadToCldGalleryCreate(params);
    } else if (resource === 'Company' || resource === 'AboutUs') {
      await UploadToCldCompanyCreate(params);
    }
    return httpClient(url, {
      method: 'POST',
      body: JSON.stringify(params.data),
    }).then(({ json }) => {
      const { _id, ...rest } = json;
      return { data: { ...rest, id: _id } };
    });
  },
  delete: (resource: Resource, params: DeleteParams) => {
    const query = {
      id: params.id,
    };
    const url = `${apiUrl}/${apiObj[resource][1]}?${queryString.stringify(query)}`;
    return httpClient(url, {
      method: 'DELETE',
    }).then(({ json }) => ({
      data: json,
    }));
  },
};
