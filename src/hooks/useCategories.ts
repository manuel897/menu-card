import { CategoryType } from '@/components/types';

import { useCallback, useEffect, useState } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const loadData = useCallback(
    (retryCount = 0) => {
      if (retryCount >= 4) {
        setError('Failed to fetch categories.');
        setIsLoading(false);
        return;
      }

      fetch(`${BACKEND_URL}/categories.json`)
        .then((res) => {
          if (!res.ok) throw new Error('Network error');
          return res.text();
        })
        .then((text) => {
          const json = JSON.parse(text);
          if (!Array.isArray(json)) {
            throw new Error('Invalid data format');
          }
          json.forEach((element: CategoryType) => {
            element.imagePath = convertToImagePath(element.name);
          });
          setCategories(json);
          setError(null);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(`Retry #${retryCount}: ${err}`);
          setTimeout(() => loadData(retryCount + 1), 2 ** retryCount * 500);
        });
    },
    [BACKEND_URL],
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { categories, error, isLoading };
};

function convertToImagePath(name: string) {
  if (!name) return '';

  // convert name to lower_kebab-case
  const matches = name.match(/[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
  return matches ? `/${matches.join('-').toLowerCase()}.png` : '';
}
