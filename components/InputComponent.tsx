import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Props {
  onChange?: (e: any) => void;
  ref?: any;
  className?: string;
  placeholder?: string;
  value?: string;
}

export default function InputComponent({ value, onChange, className, placeholder = 'Axtar' }: Props) {
  return (
    <Input
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
