'use client';
import ApplyFormBG from '@/assets/ApplyFormBG.png';
import { Checkbox } from '@/components/ui/checkbox';
import { sendMail } from '@/app/action';
import { useFormState } from 'react-dom';
import { toast } from 'sonner';
const initialState = {
  success: 'none',
};

function ApplyFormRight() {
  // @ts-expect-error no type for action
  const [state, formAction] = useFormState(sendMail, initialState);
  const inputClassname = 'border border-inputBorder py-3 px-4 bg-white';
  if (state.success === 'success') {
    toast.success('Müraciətiniz uğurla göndərildi');
  } else if (state.success === 'error') {
    toast.error('Müraciətiniz göndərilmədi, xahiş edirik yenidən cəhd edin');
  }
  return (
    <div
      className={
        'drop-shadow-myGray flex min-w-[500px] justify-center border border-myGray bg-white py-8 drop-shadow-lg 1080:min-w-[unset] 1080:flex-1'
      }
    >
      <form action={formAction} className={'flex w-[85%] flex-col gap-y-[2.125rem]'}>
        <h2 className={'font-playfair text-left text-[1.75rem] font-semibold leading-[1.925rem]'}>Müraciət forması</h2>
        <div className={'flex flex-col gap-y-[1.875rem]'}>
          <div className={'flex flex-col gap-y-7'}>
            <div className={'flex flex-col gap-y-4'}>
              <input
                name={'fullName'}
                required={true}
                className={inputClassname}
                type={'text'}
                placeholder={'Ad və Soyadınız'}
              />
              <input
                name={'phoneNumber'}
                required={true}
                className={inputClassname}
                type={'tel'}
                placeholder={'Telefon nömrəniz'}
              />
              <input
                name={'emailAddress'}
                required={true}
                className={inputClassname}
                type={'email'}
                placeholder={'Email adresiniz'}
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
                İlk dəfə konsultasiyada olacam
              </label>
            </div>
          </div>
          <button type={'submit'} className={'bg-mainGreen p-4 text-center text-base leading-[1.21rem] text-white'}>
            Göndər
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ApplyForm() {
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
              Konsultasiya üçün müraciət edin
            </h1>
            <p className={'text-center text-sm text-white'}>
              Lorem ipsum dolor sit amet consectetur. Morbi eget at dui ornare sit laoreet et nisl morbi. Neque in
              nascetur id{' '}
            </p>
          </div>
        </div>
      </div>
      <ApplyFormRight />
    </div>
  );
}
