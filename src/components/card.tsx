'use client';

import { abrilFatface, alfaSlabOne } from '@/app/ui/fonts';
import { useCategories } from '@/hooks/useCategories';
import '@/styles/app.css';
import Category from './category';

const Card = () => {
  const { categories, error, isLoading } = useCategories();

  return (
    <section className="app-container">
      <div className="app">
        <div>
          <div className="title-box">
            <div className={`${abrilFatface.className} secondary-title`}>
              <span>MENU</span>
            </div>
          </div>

          {error && (
            <div
              className={`error-message flex flex-1 flex-col w-full justify-center min-h-screen pt-10 pb-10  ${alfaSlabOne.className} text-caramel text-4xl text-center`}
            >
              {error}{' '}
            </div>
          )}

          {isLoading && !error && (
            <div
              className={`flex flex-1 flex-col w-full justify-center min-h-screen pt-10 pb-10  ${alfaSlabOne.className} text-caramel text-4xl text-center`}
            >
              LOADING...
            </div>
          )}

          {!isLoading && !error && (
            <div className="space-y-4">
              {categories.map((category) => (
                <Category
                  key={category.id || category.name}
                  category={category}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Card;
