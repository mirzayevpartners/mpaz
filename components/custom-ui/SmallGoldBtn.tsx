import Link from 'next/link';
import PhotoIcon from '@/assets/photo.svg';
import { cn } from '@/utils/cn';
interface SmallGoldBtnProps {
  text?: string;
  className?: string;
}

export default function SmallGoldBtn({ text = 'Fotolar', className }: SmallGoldBtnProps) {
  return (
    <Link className={cn('flex items-center gap-x-1 bg-secondGold px-2 py-0.5 text-white', className)} href={'/'}>
      <img className={'size-4'} src={PhotoIcon.src} alt="Photo Icon" />
      <span>{text}</span>
    </Link>
  );
}
