import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

    // Add Prettier config (disables conflicting ESLint rules)
    ...compat.extends('prettier'),

      // Add Prettier plugin as an ESLint rule
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error', {
        semi: true,
        singleQuote: true,
        printWidth: 80,
      }],
    },
  },
];


export default eslintConfig;
