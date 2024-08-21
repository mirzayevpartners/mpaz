import { apiBase } from '@/helpers/apiBase';
import { CreateParams, UpdateParams } from '@/components/Admin/dataProvider';
import { nanoid } from 'nanoid';
import { deleteFromR2 } from '@/app/action';
import { GalleryImageType, ImageType } from '@/types';
const apiUrl = `${apiBase}/api/admin`;

interface Data {
  rawFile: File;
  title: string;
  src: string;
  public_id: string;
}
const handleUploadR2 = async (datas: Data | Data[]) => {
  if (!datas) return;

  const datasArr = Array.isArray(datas) ? datas : [datas];

  const fileNames: {
    name: string;
  }[] = [];
  const filesObj: {
    [key: string]: Data;
  } = {};

  // Create an object with metadata and the actual file for each file
  datasArr.forEach((data) => {
    const name = `${nanoid()}-${data.rawFile.name}`;
    fileNames.push({ name });
    filesObj[name] = data;
  });

  // Request presigned URLs from your server
  const response = await fetch(`${apiUrl}/uploadToR2`, {
    method: 'POST',
    body: JSON.stringify({ files: fileNames }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { presignedUrls } = await response.json();
  // Map presigned URLs to files and upload each file
  await Promise.all(
    // @ts-expect-error strings
    presignedUrls.map(async ({ signedUrl, fileName }) => {
      const data = filesObj[fileName];
      if (data) {
        const file = data.rawFile; // Retrieve the actual File object
        await fetch(signedUrl, {
          method: 'PUT',
          body: file, // Send the actual file data
          headers: {
            'Content-Type': file.type, // Set the appropriate content type
          },
        });
        const src = `https://pub-9407b4afaaed413bb89c20fb8d68d638.r2.dev/${fileName}`;
        const public_id = fileName;
        data.src = src;
        data.public_id = public_id;
      }
    })
  );
};

export async function UploadToCldNewsCreate(params: CreateParams) {
  const dataArr: Data[] = [];
  if (params.data.mainImage.rawFile) {
    dataArr.push(params.data.mainImage);
  }
  params.data.images.forEach((image: ImageType) => {
    if (image.rawFile) {
      dataArr.push(image);
    }
  });
  if (dataArr.length === 0) return;
  await handleUploadR2(dataArr).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldNewsUpdate(params: UpdateParams) {
  //delete old images
  const prev_public_id_arr: string[] = [];
  const current_public_id_arr: string[] = [];
  params.previousData.images.forEach((image: ImageType) => {
    prev_public_id_arr.push(image.public_id);
  });
  prev_public_id_arr.push(params.previousData.mainImage.public_id);
  params.data.images.forEach((image: ImageType) => {
    current_public_id_arr.push(image.public_id);
  });
  current_public_id_arr.push(params.data.mainImage.public_id);
  const shouldDelete = prev_public_id_arr.filter((x) => !current_public_id_arr.includes(x));
  // console.log(prev_public_id_arr);
  // console.log(current_public_id_arr);
  // console.log(shouldDelete);
  if (shouldDelete.length !== 0) {
    await deleteFromR2(shouldDelete);
  }
  //upload new images
  await UploadToCldNewsCreate(params);
}

export async function UploadToCldTeamCreate(params: CreateParams) {
  const dataArr: Data[] = [];
  if (params.data.photo.rawFile) {
    dataArr.push(params.data.photo);
  }
  if (dataArr.length === 0) return;
  await handleUploadR2(dataArr).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldTeamUpdate(params: UpdateParams) {
  //delete old photo
  const photoRaw = params.data.photo.rawFile;
  if (!photoRaw) return;
  const public_id_arr = [params.previousData.photo.public_id];
  await deleteFromR2(public_id_arr);
  //upload new photo
  await UploadToCldTeamCreate(params);
}

export async function UploadToCldServiceCreate(params: CreateParams) {
  const dataArr: Data[] = [];
  if (params.data.icon.rawFile) {
    dataArr.push(params.data.icon);
  }
  if (dataArr.length === 0) return;
  await handleUploadR2(dataArr).catch((e) => {
    throw new Error(e);
  });
}
export async function UploadToCldServiceUpdate(params: UpdateParams) {
  const iconRaw = params.data.icon.rawFile;
  if (!iconRaw) return;
  const public_id_arr = [params.previousData.icon.public_id];
  await deleteFromR2(public_id_arr);
  await UploadToCldServiceCreate(params);
}

export async function UploadToCldGalleryCreate(params: CreateParams) {
  // console.log(params);
  const arr: Omit<ImageType, '_id'>[] = [];
  params.data.images.forEach((pI: GalleryImageType) => {
    if (pI.src.rawFile) {
      arr.push(pI.src);
    }
  });
  if (arr.length === 0) return;
  await handleUploadR2(arr).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldGalleryUpdate(params: UpdateParams) {
  const prev_public_id_arr: string[] = [];
  const current_public_id_arr: string[] = [];
  params.previousData.images.forEach((image: GalleryImageType) => {
    prev_public_id_arr.push(image.src.public_id);
  });
  params.data.images.forEach((image: GalleryImageType) => {
    current_public_id_arr.push(image.src.public_id);
  });
  const shouldDelete = prev_public_id_arr.filter((x) => !current_public_id_arr.includes(x));
  if (shouldDelete.length !== 0) {
    await deleteFromR2(shouldDelete);
  }
  await UploadToCldGalleryCreate(params);
}

export async function UploadToCldCompanyCreate(params: CreateParams) {
  const imageRaw = params.data.image.rawFile;
  if (!imageRaw) return;
  const dataArr = [params.data.image];
  await handleUploadR2(dataArr).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldCompanyUpdate(params: UpdateParams) {
  const imageRaw = params.data.image.rawFile;
  if (!imageRaw) return;
  const public_id_arr = [params.previousData.image.public_id];
  await deleteFromR2(public_id_arr);
  await UploadToCldCompanyCreate(params);
}
