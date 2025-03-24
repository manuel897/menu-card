'use client';

import React, { useState, useEffect, useCallback } from 'react';
import '@/styles/app.css';
import { BACKEND_URL } from '@/urls';
import Category from '@/components/category';

const Card = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const loadData = useCallback((retryCount = 0) => {
    if (retryCount >= 4) {
      setError('Failed to fetch categories.');
      return;
    }
    console.log('BACKEND URL :', BACKEND_URL);

    fetch(`${BACKEND_URL}/categories.json`)
      .then((response) => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then((text) => {
        console.log('Raw response:', text); // check what you got
        const json = JSON.parse(text); // manually parse (to catch JSON issues)

        setCategories(json);
        setIsLoaded(true);
        setError(null);
      })
      .catch((err) => {
        console.error(`Retry #${retryCount}: ${err}`);
        setTimeout(
          () => {
            loadData(retryCount + 1);
          },
          Math.pow(2, retryCount) * 500,
        );
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <section class="app-container">
      <div className="app">
        <div>
          <div className="title-box">
            <div className="secondary-title">
              <span>MENU</span>
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          {!isLoaded && !error && <div>Loading...</div>}

          {isLoaded && (
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
