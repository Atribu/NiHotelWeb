import { defineRouting } from 'next-intl/routing';

export const config = {
  locales: ['tr', 'en', 'de', 'ru'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
  pathnames : {
  '/': {
    tr: '/',
    en: '/homepage',
    de: '/startseite',
    ru: '/glavnaya',
  },
  '/rooms': {
    tr: '/odalar',
    en: '/rooms',
    de: '/zimmer',
    ru: '/nomera',
  },
  '/contact': {
    tr: '/iletisim',
    en: '/contact',
    de: '/kontakt',
    ru: '/kontakty',
  },
  '/about': {
    tr: '/hakkimizda',
    en: '/about',
    de: '/uber-uns',
    ru: '/o-nas',
  },
  '/offers': {
    tr: '/teklifler',
    en: '/offers',
    de: '/angebote',
    ru: '/predlozheniya',
  },
  '/gallery': {
    tr: '/galeri',
    en: '/gallery',
    de: '/galerie',
    ru: '/galereya',
  },
  '/kitchen': {
    tr: '/mutfak',
    en: '/kitchen',
    de: '/kueche',
    ru: '/kuhnya',
  },
  '/rooms/cornerroom': {
    tr: '/odalar/koseoda',
    en: '/rooms/cornerroom',
    de: '/zimmer/eckenzimmer',
    ru: '/nomera/uglovaya-komnata',
  },
  '/rooms/standardroom': {
    tr: '/odalar/standartoda',
    en: '/rooms/standardroom',
    de: '/zimmer/standardzimmer',
    ru: '/nomera/standartnaya-komnata',
  },
  '/rooms/juniorroom': {
    tr: '/odalar/junioroda',
    en: '/rooms/juniorroom',
    de: '/zimmer/juniorzimmer',
    ru: '/nomera/juniornaya-komnata',
  },
  '/rooms/verandaroom': {
    tr: '/odalar/verandaoda',
    en: '/rooms/verandaroom',
    de: '/zimmer/verandazimmer',
    ru: '/nomera/veranda-komnata',
  },
}

};

export const routing = defineRouting(config);