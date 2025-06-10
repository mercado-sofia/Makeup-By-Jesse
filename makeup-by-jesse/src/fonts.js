import { Oswald, Roboto, Ephesis, Arapey } from 'next/font/google';

export const oswald = Oswald({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const ephesis = Ephesis({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const arapey = Arapey({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'], 
});