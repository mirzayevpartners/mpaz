import { cloudinary } from '@/helpers/cloudinary';

type UploadResponse = { success: true; result?: any } | { success: false; error: any };

export const uploadToCloudinary = (fileUri: string, fileName: string): Promise<UploadResponse> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(fileUri, {
        invalidate: true,
        resource_type: 'auto',
        filename_override: fileName,
        use_filename: true,
      })
      .then((result: any) => {
        resolve({ success: true, result });
      })
      .catch((error: any) => {
        reject({ success: false, error });
      });
  });
};
