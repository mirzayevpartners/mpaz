'use client';

import { FaMagnifyingGlass } from 'react-icons/fa6';
import InputComponent from '@/components/InputComponent';
import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from '@/navigation';
import { useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { cn } from '@/lib/utils';
import useOutsideClick from '@/hooks/useOutsideClick';
export default function TopNavbarSearch() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [inputValue, setInputValue] = useState('');
  const [openInput, setOpenInput] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    // console.log('searchParams', searchParams.get('nq'));
    setInputValue((searchParams.get('nq') as string) || '');
  }, [searchParams, pathname]);
  const debouncedSearch = useDebouncedCallback(
    (search: string) => {
      // console.log('search', search);
      if (search) {
        router.replace(`/axtar?nq=${search}`);
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
  useOutsideClick(inputRef, () => {
    setOpenInput(false);
  });
  return (
    <div className={cn('bg-bgGray relative max-w-[250px] duration-300', !openInput && 'bg-transparent')}>
      <FaMagnifyingGlass
        onClick={() => setOpenInput((prevState) => !prevState)}
        className={cn('absolute right-3 top-1 text-secondText duration-300 cursor-pointer', !openInput && 'text-white')}
        size={20}
      />
      <InputComponent
        ref={inputRef}
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className={cn('!px-2 !py-1 !bg-transparent duration-300 w-full', !openInput && 'w-0')}
      />
    </div>
  );
}
