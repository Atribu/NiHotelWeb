import { defineRouting } from 'next-intl/routing';

export const config = {
  locales: ['tr', 'en', 'de', 'ru'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
  pathnames: {
    '/': {
      tr: '/',
      en: '/home',
      de: '/startseite',
      ru: '/glavnaya',
    },
    '/rooms': {
      tr: '/odalar',
      en: '/rooms',
      de: '/zimmer',
      ru: '/nomera',
    },
    '/about': {
      tr: '/hakkimizda',
      en: '/about',
      de: '/uber-uns',
      ru: '/o-nas',
    },
    '/restaurant': {
      tr: '/restoran',
      en: '/restaurant',
      de: '/restaurant',
      ru: '/restoran',
    },
    '/gallery': {
      tr: '/galeri',
      en: '/gallery',
      de: '/galerie',
      ru: '/galereya',
    },
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
      de: '/kontakt',
      ru: '/kontakty',
    },
  },
};

export const routing = defineRouting(config);
