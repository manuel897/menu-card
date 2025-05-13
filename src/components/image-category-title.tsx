import React from 'react';
import Image from 'next/image';
import { alfaSlabOne } from '@/app/ui/fonts';

interface ImageCategoryTitleProps {
  title: string;
  imagePath: string;
}

const ImageCategoryTitle = ({ title, imagePath }: ImageCategoryTitleProps) => {
  return (
    <div className={`relative w-full h-50 overflow-hidden rounded-t-2xl group`}>
      <Image
        src={imagePath}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute inset-0 bg-black/10 flex items-center justify-center">
        <span
          className={`${alfaSlabOne.className} category-title text-white text-2xl font-bold`}
        >
          {title}
        </span>
      </div>
    </div>
  );
};

export default ImageCategoryTitle;
