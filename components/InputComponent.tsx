'use client';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
interface Props {
  onChange?: (e: any) => void;
  ref?: any;
  className?: string;
  placeholder?: string;
  value?: string;
}

// eslint-disable-next-line react/display-name
const InputComponent = forwardRef<HTMLInputElement, Props>(
  ({ value, onChange, className, placeholder = 'Axtar' }, ref) => {
    return (
      <Input
        ref={ref} // Forwarding the ref to the Input component
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'w-[90%] !ring-transparent !ring-offset-0 !outline-transparent !h-auto p-0 border-none bg-bgGray border-1 border-borderGray py-3 text-base leading-[19.36px] text-secondText px-3',
          className
        )}
      />
    );
  }
);

export default InputComponent;
