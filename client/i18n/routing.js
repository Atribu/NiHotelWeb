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
    '/rooms/economy-room': {
      tr: '/odalar/eko-oda',
      en: '/rooms/economy-room',
      de: '/zimmer/eco-zimmer',
      ru: '/nomera/eko-nomer',
    },
    '/rooms/french-room': {
      tr: '/odalar/french-oda',
      en: '/rooms/french-room',
      de: '/zimmer/french-zimmer',
      ru: '/nomera/french-nomer',
    },
    '/rooms/suite-room': {
      tr: '/odalar/suit-oda',
      en: '/rooms/suite-room',
      de: '/zimmer/suite',
      ru: '/nomera/lyuks',
    },
    '/rooms/triple-room': {
      tr: '/odalar/triple-oda',
      en: '/rooms/triple-room',
      de: '/zimmer/dreibettzimmer',
      ru: '/nomera/trekhmestnyy-nomer',
    },
    '/rooms/twin-room': {
      tr: '/odalar/twin-oda',
      en: '/rooms/twin-room',
      de: '/zimmer/zweibettzimmer',
      ru: '/nomera/twin-nomer',
    },
    '/about': {
      tr: '/hakkimizda',
      en: '/about',
      de: '/uber-uns',
      ru: '/o-nas',
    },
    '/meeting': {
      tr: '/toplanti',
      en: '/meeting',
      de: '/tagungen',
      ru: '/konferents-zal',
    },
    '/city-guide': {
      tr: '/sehir-rehberi',
      en: '/city-guide',
      de: '/stadtfuehrer',
      ru: '/putevoditel-po-gorodu',
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
    '/cookie-policy': {
      tr: '/cerez-politikasi',
      en: '/cookie-policy',
      de: '/cookie-richtlinie',
      ru: '/politika-faylov-cookie',
    },
    '/certificates': {
      tr: '/sertifikalar',
      en: '/certificates',
      de: '/zertifikate',
      ru: '/sertifikaty',
    },
  },
};

export const routing = defineRouting(config);
