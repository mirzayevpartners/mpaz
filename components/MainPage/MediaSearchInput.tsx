// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
'use client';

import { SlMagnifier } from 'react-icons/sl';
import CustomInput from '@/components/custom-ui/CustomInput';
import { useRouter } from '@/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
interface MediaChoiceBoxProps {
  text: string;
}

export default function MediaSearchInput({ text }: MediaChoiceBoxProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState(searchParams.get('mq') || '');
  const debouncedSearch = useDebouncedCallback(
    (search: string) => {
      // console.log('search', search);
      if (search) {
        router.replace(`/mediaaxtar?title=video&mq=${search}`);
      } else {
        router.replace(`/media`);
      }
    },
    800,
    { maxWait: 2000 }
  );
  const handleInputChange = (value: string) => {
    setInputValue(value);
    debouncedSearch(value);
  };
  return (
    <div className={'relative w-[350px] max-w-[90%]'}>
      <SlMagnifier className={'absolute size-6 left-2 top-[27%] text-secondText'} />
      <CustomInput
        value={inputValue}
        setValue={handleInputChange}
        className={'w-full pl-10 text-base leading-6 text-secondText rounded-[4px] py-3 pr-4 border border-myGray'}
        placeholder={text}
        type={'text'}
      />
    </div>
  );
}
