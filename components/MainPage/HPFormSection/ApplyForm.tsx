'use client';
import ApplyFormBG from '@/assets/ApplyFormBG.png';
import { Checkbox } from '@/components/ui/checkbox';
import { saveFormData } from '@/app/action';
import { toast } from 'sonner';
import { Locale } from '@/i18config';
import { useTranslations } from 'next-intl';
import { useRef, useState } from 'react';
import SimpleLoader from '@/components/SimpleLoader';

interface Props {
  locale: Locale;
}

function ApplyFormRight({ locale }: Props) {
  const t = useTranslations('Homepage_FormSection');
  const formRef = useRef<HTMLFormElement>(null);
  const inputClassname = 'border border-inputBorder py-3 px-4 bg-white';
  const [disabled, setDisabled] = useState(false);
  async function handleSubmit(e: any) {
    e.preventDefault();
    setDisabled(true);
    try {
      const formData = new FormData(e.target);
      const response = await saveFormData(formData);
      if (response.success === 'success') {
        toast.success(t('successMessage'));
      } else {
        toast.error(t('errorMessage'));
      }
    } catch (e) {
      toast.error(t('errorMessage'));
    }
    setDisabled(false);
    formRef.current?.reset();
  }

  return (
    <div
      className={
        'drop-shadow-myGray flex min-w-[500px] justify-center border border-myGray bg-white py-8 drop-shadow-lg 1080:min-w-[unset] 1080:flex-1'
      }
    >
      <form ref={formRef} onSubmit={handleSubmit} className={'flex w-[85%] flex-col gap-y-[2.125rem]'}>
        <h2 className={'font-playfair text-left text-[1.75rem] font-semibold leading-[1.925rem]'}>{t('title')}</h2>
        <div className={'flex flex-col gap-y-[1.875rem]'}>
          <div className={'flex flex-col gap-y-7'}>
            <div className={'flex flex-col gap-y-4'}>
              <input
                name={'fullName'}
                required={true}
                className={inputClassname}
                type={'text'}
                placeholder={t('fullName')}
              />
              <input
                name={'phoneNumber'}
                required={true}
                className={inputClassname}
                type={'tel'}
                placeholder={t('phone')}
              />
              <input
                name={'emailAddress'}
                required={true}
                className={inputClassname}
                type={'email'}
                placeholder={t('email')}
              />
              <input
                name={'date'}
                required={true}
                className={inputClassname}
                type={'date'}
                placeholder={'Tarix seçin'}
              />
            </div>
            <div className={'flex items-center gap-x-2'}>
              <Checkbox
                name={'firstTime'}
                className={'size-6 !ring-transparent !ring-offset-transparent !border-transparent !bg-secondGold'}
                id={'applyform'}
              />
              <label htmlFor={'applyform'} className={'text-base leading-[1.21rem] text-paleBlue'}>
                {t('firstTime')}
              </label>
            </div>
          </div>
          <button
            disabled={disabled}
            type={'submit'}
            className={
              'bg-mainGreen p-4 flex justify-center items-center text-center text-base leading-[1.21rem] text-white'
            }
          >
            {disabled ? <SimpleLoader /> : t('send')}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyForm({ locale }: Props) {
  const t = useTranslations('Homepage_FormSection');
  return (
    <div className={'flex border-t-[6px] border-t-secondGold 900:flex-col'}>
      <div className={'relative 1080:flex-1'}>
        <img className={'h-full w-full'} src={ApplyFormBG.src} />
        <div className={'absolute inset-0 mx-auto flex h-full w-[90%] flex-col items-center justify-end pb-3'}>
          <h6 className={'text-base leading-[1.21rem] text-secondGold'}>BİZƏ</h6>
          <div className={'flex flex-col items-center gap-y-3'}>
            <h1
              className={
                'font-playfair text-center text-[2.5rem] font-semibold leading-[2.75rem] text-white 900:text-[1.5rem]'
              }
            >
              {t('imageTitle')}
            </h1>
            <p className={'text-center text-sm text-white'}>{t('imageDescription')}</p>
          </div>
        </div>
      </div>
      <ApplyFormRight locale={locale} />
    </div>
  );
}
