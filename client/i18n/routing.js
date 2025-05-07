import { defineRouting } from 'next-intl/routing';

export const config = {
  locales: ['tr', 'en', 'de', 'ru'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
  pathnames: {
    '/': {
      tr: '/',
      en: '/',
      de: '/',
      ru: '/',
    },
    '/contact': {
      tr: '/iletisim',
      en: '/contact',
      de: '/kontakt',
      ru: '/kontakti',
    },
    '/beachpools': {
      tr: '/plaj-havuz',
      en: '/beach-pool',
      de: '/strand-pool',
      ru: '/plaj-basseyn',
    },
    '/rooms': {
      tr: '/odalar',
      en: '/rooms',
      de: '/zimmer',
      ru: '/nomera',
    }
  }
};

export const routing = defineRouting(config);