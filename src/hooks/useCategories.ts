import { CategoryType } from '@/components/types';
import { useCallback, useEffect, useState } from 'react';

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const loadData = useCallback((retryCount = 0) => {
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
        setCategories(json);
        setError(null);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(`Retry #${retryCount}: ${err}`);
        setTimeout(() => loadData(retryCount + 1), 2 ** retryCount * 500);
      });
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { categories, error, isLoading };
};
