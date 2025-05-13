import React from 'react';
import Image from 'next/image';

interface ImageCardProps {
  imagePath: string;
  text: string;
}

const ImageCard = ({ imagePath, text }: ImageCardProps) => {
  return (
    <div>
      <div
        className={`relative w-full h-50 overflow-hidden rounded-t-2xl shadow-lg group`}
      >
        <Image
          src={imagePath}
          alt="Image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <span>{text}</span>
    </div>
  );
};

export default ImageCard;
