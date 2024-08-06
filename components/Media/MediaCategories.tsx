'use client';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CategoryType } from '@/components/Media/MediaPage';

interface MediaCategory {
  activeChoice: number;
  videoCategories: CategoryType[];
  galleryCategories: CategoryType[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}
export default function MediaCategories({
  activeCategory,
  setActiveCategory,
  activeChoice,
  videoCategories,
  galleryCategories,
}: MediaCategory) {
  const categories = activeChoice === 0 ? videoCategories : galleryCategories;
  return (
    <div className={'flex flex-col gap-y-3 w-[400px] max-w-full'}>
      {categories.map((category) => {
        return (
          <button
            onClick={() => {
              setActiveCategory(category.id);
            }}
            type={'button'}
            key={category.name}
            className={cn(
              'flex items-center bg-white py-4 px-10 border border-myGray text-base text-mainGreen',
              activeCategory === category.id && 'bg-myGray',
              activeCategory === '0' && category.name === 'Bütün Videolar' && 'bg-myGray',
              activeCategory === '0' && category.name === 'Bütün şəkillər' && 'bg-myGray'
            )}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
