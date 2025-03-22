import React from 'react';
import Image from 'next/image';
import { pacifico } from '@/app/ui/fonts';

interface ImageCategoryTitleProps {
  title: string;
  imagePath: string;
}

const ImageCategoryTitle: React.FC<ImageCategoryTitleProps> = ({ title, imagePath }) => {
return (
    <div className={`${pacifico.className} relative w-full h-90 overflow-hidden rounded-2xl shadow-lg group`}>
            <Image
                src={imagePath}
                alt={title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
        </div>
    </div>
    );
};

export default ImageCategoryTitle;