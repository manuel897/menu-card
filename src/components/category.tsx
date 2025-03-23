import React from 'react';
import ImageCategoryTitle from '@/components/image-category-title';
import '@/styles/app.css';
import '@/styles/category.css';

interface Item {
  id?: string | number;
  name: string;
  price: string;
}

interface CategoryProps {
  category: {
    id?: string | number;
    name: string;
    items: Item[];
  };
}

const Category = ({ category }: CategoryProps) => (
  <div className="pb-2 category rounded-2xl shadow-md inset-shadow-sm mb-7">
    <ImageCategoryTitle
      title={category.name}
      imagePath={`/${category.name}.png`}
    />

    <ol>
      {category.items.map((item) => (
        <li key={item.id || item.name}>
          <div className="item-box flex justify-between items-center shadow-sm ml-4 mr-4">
            <span className="font-medium">{item.name}</span>
            <span>{item.price}</span>
          </div>
        </li>
      ))}
    </ol>
  </div>
);

export default Category;
