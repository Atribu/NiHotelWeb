export const localizedPaths = {
  home: {
    tr: "/tr",
    en: "/en/home",
    de: "/de/startseite",
    ru: "/ru/glavnaya",
  },
  rooms: {
    tr: "/tr/odalar",
    en: "/en/rooms",
    de: "/de/zimmer",
    ru: "/ru/nomera",
  },
  economyRoom: {
    tr: "/tr/odalar/eko-oda",
    en: "/en/rooms/economy-room",
    de: "/de/zimmer/eco-zimmer",
    ru: "/ru/nomera/eko-nomer",
  },
  frenchRoom: {
    tr: "/tr/odalar/french-oda",
    en: "/en/rooms/french-room",
    de: "/de/zimmer/french-zimmer",
    ru: "/ru/nomera/french-nomer",
  },
  suiteRoom: {
    tr: "/tr/odalar/suit-oda",
    en: "/en/rooms/suite-room",
    de: "/de/zimmer/suite",
    ru: "/ru/nomera/lyuks",
  },
  tripleRoom: {
    tr: "/tr/odalar/triple-oda",
    en: "/en/rooms/triple-room",
    de: "/de/zimmer/dreibettzimmer",
    ru: "/ru/nomera/trekhmestnyy-nomer",
  },
  twinRoom: {
    tr: "/tr/odalar/twin-oda",
    en: "/en/rooms/twin-room",
    de: "/de/zimmer/zweibettzimmer",
    ru: "/ru/nomera/twin-nomer",
  },
  about: {
    tr: "/tr/hakkimizda",
    en: "/en/about",
    de: "/de/uber-uns",
    ru: "/ru/o-nas",
  },
  restaurant: {
    tr: "/tr/restoran",
    en: "/en/restaurant",
    de: "/de/restaurant",
    ru: "/ru/restoran",
  },
  gallery: {
    tr: "/tr/galeri",
    en: "/en/gallery",
    de: "/de/galerie",
    ru: "/ru/galereya",
  },
  contact: {
    tr: "/tr/iletisim",
    en: "/en/contact",
    de: "/de/kontakt",
    ru: "/ru/kontakty",
  },
  // Cookie policy paths are prepared but temporarily disabled.
  // cookiePolicy: {
  //   tr: "/tr/cerez-politikasi",
  //   en: "/en/cookie-policy",
  //   de: "/de/cookie-richtlinie",
  //   ru: "/ru/politika-faylov-cookie",
  // },
};

export function pageAlternates(page, locale) {
  const paths = localizedPaths[page];

  return {
    canonical: paths[locale],
    languages: {
      tr: paths.tr,
      en: paths.en,
      de: paths.de,
      ru: paths.ru,
      "x-default": paths.tr,
    },
  };
}
