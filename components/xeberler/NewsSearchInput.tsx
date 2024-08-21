// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
'use client';

import { SlMagnifier } from 'react-icons/sl';
import { useRouter, usePathname } from '@/navigation';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function NewsSearchInput() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState();
  useEffect(() => {
    // console.log('searchParams', searchParams.get('nq'));
    setInputValue(searchParams.get('nq') || '');
  }, [searchParams, pathname]);
  const debouncedSearch = useDebouncedCallback(
    (search: string) => {
      // console.log('search', search);
      if (search) {
        router.replace(`/xeberaxtar?nq=${search}`);
      } else {
        router.replace(`/`);
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
    <div className={'flex w-[90%] h-[60px] border border-myGray'}>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className={
          'text-base flex-1 pl-2 leading-7 text-[#77829D] !outline-transparent !outline-offset-0 !ring-offset-0 !ring-transparent'
        }
        placeholder={'Saytda axtar'}
        type={'text'}
      />
      <div className={'w-[60px] flex justify-center items-center bg-secondGold'}>
        <SlMagnifier color={'white'} size={24} fontWeight={600} />
      </div>
    </div>
  );
}
