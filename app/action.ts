'use server';
import { cloudinary } from '@/helpers/cloudinary';
import { NextResponse } from 'next/server';
import { mailTransporter } from '@/lib/mailConfig';

export async function deleteFromCld(public_id_arr: string[]) {
  try {
    await cloudinary.api.delete_resources(public_id_arr, function (error, result) {
      if (error) {
        return NextResponse.json({ message: 'Error deleting images' }, { status: 400 });
      } else {
        return NextResponse.json({ message: 'Images deleted successfully' }, { status: 200 });
      }
    });
  } catch (e) {
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
const SITE_MAIL_RECIEVER = process.env.SITE_MAIL_RECIEVER;

export async function sendMail(formData: FormData): Promise<{ success: 'error' | 'success' }> {
  const info = await mailTransporter.sendMail({
    from: formData.get('emailAddress') as string,
    to: SITE_MAIL_RECIEVER,
    subject: 'Müraciət',
    text: `Ad və Soyad: ${formData.get('fullName')}\nTelefon: ${formData.get('phoneNumber')}\nEmail: ${formData.get('emailAddress')}\nTarix: ${formData.get('date')}\nİlk dəfə müraciət: ${formData.get('firstTime')}`,
  });
  if (info.messageId) {
    return {
      success: 'success',
    };
  }
  return {
    success: 'error',
  };
}
