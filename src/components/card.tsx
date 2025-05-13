'use client';

import { abrilFatface, dmSerifText } from '@/app/ui/fonts';
import Category from '@/components/category';
import { useCategories } from '@/hooks/useCategories';
import '@/styles/app.css';

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

          {error && <div className="error-message">{error}</div>}

          {isLoading && !error && (
            <div className={`${dmSerifText.className}`}> Loading...</div>
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
