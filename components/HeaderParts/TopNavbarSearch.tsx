'use client';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import InputComponent from '@/components/InputComponent';
import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
export default function TopNavbarSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  useEffect(() => {
    // console.log('searchParams', searchParams.get('nq'));
    setInputValue((searchParams.get('nq') as string) || '');
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
    <div className={'bg-bgGray relative max-w-[250px]'}>
      <FaMagnifyingGlass className={'absolute right-3 top-1 text-secondText'} size={20} />
      <InputComponent
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className={'!px-2 !py-1'}
      />
    </div>
  );
}
