import { apiBase } from '@/helpers/apiBase';
import { CreateParams, UpdateParams } from '@/components/Admin/dataProvider';

const apiUrl = `${apiBase}/api/admin`;

async function deleteFromCldClient(public_id_arr: string[]) {
  try {
    await fetch(`${apiUrl}/deleteFromCld`, {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ public_id_arr }),
    });
  } catch (e: any) {
    // console.log('Error in deleteFromCldClient', e);
    throw new Error(e);
  }
}

const uploadStagedFile = async (stagedFile: File | Blob) => {
  const form = new FormData();
  form.set('file', stagedFile);

  // here /api/upload is the route of my handler
  const res = await fetch(`${apiUrl}/uploadToCld`, {
    cache: 'no-cache',
    method: 'POST',
    body: form,
  });

  const data = await res.json();
  // console.log('Data from uploadStagedFile', data);
  return {
    url: data.imgUrl,
    public_id: data.public_id,
  };
};

const uploadAllImages = async (images: any) => {
  const uploadPromises = images.map(async (image: any) => {
    if (!image.rawFile) return image;
    const { url, public_id } = await uploadStagedFile(image.rawFile);
    image.src = url;
    image.public_id = public_id;
    return image;
  });

  // Use Promise.all to wait for all uploads to complete
  return await Promise.all(uploadPromises);
};

export async function UploadToCldNewsCreate(params: CreateParams) {
  const mainImageRaw = params.data.mainImage.rawFile;
  if (mainImageRaw) {
    const { url, public_id } = await uploadStagedFile(mainImageRaw);
    params.data.mainImage.src = url;
    params.data.mainImage.public_id = public_id;
  }
  await uploadAllImages(params.data.images).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldNewsUpdate(params: UpdateParams) {
  //delete old images
  const prev_public_id_arr: string[] = [];
  const current_public_id_arr: string[] = [];
  params.previousData.images.forEach((image: any) => {
    prev_public_id_arr.push(image.public_id);
  });
  prev_public_id_arr.push(params.previousData.mainImage.public_id);
  params.data.images.forEach((image: any) => {
    current_public_id_arr.push(image.public_id);
  });
  current_public_id_arr.push(params.data.mainImage.public_id);
  const public_id_arr = prev_public_id_arr.filter((x) => !current_public_id_arr.includes(x));
  if (public_id_arr.length !== 0) {
    await deleteFromCldClient(public_id_arr);
  }
  //upload new images
  await UploadToCldNewsCreate(params);
}

export async function UploadToCldTeamCreate(params: CreateParams) {
  const photoRaw = params.data.photo.rawFile;
  if (!photoRaw) return;
  const { url, public_id } = await uploadStagedFile(photoRaw);
  params.data.photo.src = url;
  params.data.photo.public_id = public_id;
}

export async function UploadToCldTeamUpdate(params: UpdateParams) {
  //delete old photo
  const photoRaw = params.data.photo.rawFile;
  if (!photoRaw) return;
  const public_id_arr = [params.previousData.photo.public_id];
  await deleteFromCldClient(public_id_arr);
  //upload new photo
  await UploadToCldTeamCreate(params);
}

export async function UploadToCldServiceCreate(params: CreateParams) {
  // console.log('Before create ', params);
  const iconRaw = params.data.icon.rawFile;
  if (!iconRaw) return;
  const { url, public_id } = await uploadStagedFile(iconRaw);
  params.data.icon.src = url;
  params.data.icon.public_id = public_id;
  // console.log('After create ', params);
}
export async function UploadToCldServiceUpdate(params: UpdateParams) {
  // console.log('Inside Update ', params);
  //delete old icon
  const iconRaw = params.data.icon.rawFile;
  // console.log('iconRaw in update', iconRaw);
  if (!iconRaw) return;
  console.log('passed return in update');
  const public_id_arr = [params.previousData.icon.public_id];
  await deleteFromCldClient(public_id_arr);
  // upload new icon
  await UploadToCldServiceCreate(params);
}

export async function UploadToCldGalleryCreate(params: CreateParams) {
  await uploadAllImages(params.data.images).catch((e) => {
    throw new Error(e);
  });
}

export async function UploadToCldGalleryUpdate(params: UpdateParams) {
  //delete old images
  console.log('gallery update params', params);
  const prev_public_id_arr: string[] = [];
  const current_public_id_arr: string[] = [];
  params.previousData.images.forEach((image: any) => {
    prev_public_id_arr.push(image.public_id);
  });
  params.data.images.forEach((image: any) => {
    current_public_id_arr.push(image.public_id);
  });
  const public_id_arr = prev_public_id_arr.filter((x) => !current_public_id_arr.includes(x));
  if (public_id_arr.length !== 0) {
    await deleteFromCldClient(public_id_arr);
  }
  //upload new images
  await UploadToCldGalleryCreate(params);
}

export async function UploadToCldCompanyCreate(params: CreateParams) {
  const imageRaw = params.data.image.rawFile;
  if (!imageRaw) return;
  const { url, public_id } = await uploadStagedFile(imageRaw);
  params.data.image.src = url;
  params.data.image.public_id = public_id;
}

export async function UploadToCldCompanyUpdate(params: UpdateParams) {
  //delete old image
  const imageRaw = params.data.image.rawFile;
  if (!imageRaw) return;
  const public_id_arr = [params.previousData.image.public_id];
  await deleteFromCldClient(public_id_arr);
  //upload new image
  await UploadToCldCompanyCreate(params);
}
