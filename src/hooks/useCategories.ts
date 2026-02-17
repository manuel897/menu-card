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
        setError('Opps, something went wrong. Please try again later.');
        setIsLoading(false);
        return;
      }

      const resource =
        process.env.NEXT_PUBLIC_IS_GITHUB_PAGE === 'true'
          ? 'dummy-categories'
          : 'categories';

      fetch(`${BACKEND_URL}/${resource}.json`)
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
            element.name = capitalizeFirstLetter(element.name);
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

// Regular expression to match words and numbers
const regexp = /[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g;

function convertToImagePath(name: string) {
  if (!name) return '';

  // convert name to lower_kebab-case
  const matches = name.match(regexp);
  const lowerKebabCaseName = matches ? matches.join('-').toLowerCase() : '';

  return process.env.NEXT_PUBLIC_IS_GITHUB_PAGE === 'true'
    ? `/menu-card/${lowerKebabCaseName}.jpeg`
    : `/${lowerKebabCaseName}.jpeg`;
}

function capitalizeFirstLetter(string: string) {
  const words = string.match(regexp) || [];
  const pascalCase = [] as string[];

  words.forEach((element, i) => {
    pascalCase[i] = element.charAt(0).toUpperCase() + element.slice(1);
  });

  return pascalCase?.join(' ') || string;
}
