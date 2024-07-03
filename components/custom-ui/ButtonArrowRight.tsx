import { GoArrowRight } from 'react-icons/go';
import { cn } from '@/utils/cn';

interface ButtonArrowRightProps {
  text: string;
  className?: string;
}

export default function ButtonArrowRight({ text, className }: ButtonArrowRightProps) {
  return (
    <button className={cn('flex items-center gap-x-2.5 bg-secondGold p-4 text-white hover:opacity-60', className)}>
      <span className={'text-base leading-[1.21rem]'}>{text}</span>
      <GoArrowRight size={16} />
    </button>
  );
}
