import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface MediaCategory {
  activeChoice: number;
}
export default function MediaCategories({ activeChoice }: MediaCategory) {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const videoCategories = [
    {
      name: 'Bütün videolar',
    },
    {
      name: 'Sual-cavab videolar',
    },
    {
      name: 'Flan konfransdan qısa görüntülər',
    },
    {
      name: 'İmic videomuz',
    },
  ];
  const galleryCategories = [
    {
      name: 'Bütün şəkillər',
    },
    {
      name: 'Tədbirlərdən kadrlar',
    },
    {
      name: 'Müştərilərimizlə',
    },
    {
      name: '25.06.2024 tarixli tədbirimiz',
    },
    {
      name: 'İş şəraitimizdən kadrlar',
    },
  ];
  useEffect(() => {
    setActiveCategory(0);
  }, [activeChoice]);
  const categories = activeChoice === 0 ? videoCategories : galleryCategories;
  return (
    <div className={'flex flex-col gap-y-3 w-[330px] max-w-full'}>
      {categories.map((category, index) => {
        return (
          <button
            onClick={() => setActiveCategory(index)}
            type={'button'}
            key={category.name}
            className={cn(
              'flex items-center bg-white py-4 px-10 border border-myGray text-base text-mainGreen',
              activeCategory === index && 'bg-myGray'
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
