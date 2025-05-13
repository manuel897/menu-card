import {
  Abril_Fatface,
  Alfa_Slab_One,
  DM_Serif_Text,
  Inter,
} from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const abrilFatface = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
});

export const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: '400',
});

export const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
});
