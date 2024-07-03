import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface InputProps {
  className?: string;
  placeholder?: string;
  type?: 'text';
  value?: string;
  setValue?: (value: string) => void;
}

export default function CustomInput({ className, placeholder, type, setValue, value }: InputProps) {
  return (
    <Input
      onChange={(e) => setValue && setValue(e.target.value)}
      value={value}
      className={cn('!outline-transparent !ring-transparent !outline-offset-0 !ring-offset-0 h-auto', className)}
      placeholder={placeholder}
      type={type}
    />
  );
}
