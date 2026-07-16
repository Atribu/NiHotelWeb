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
  standardRoom: {
    tr: "/tr/odalar/standart-oda",
    en: "/en/rooms/standard-room",
    de: "/de/zimmer/standardzimmer",
    ru: "/ru/nomera/standartnyy-nomer",
  },
  suiteRoom: {
    tr: "/tr/odalar/suit-oda",
    en: "/en/rooms/suite-room",
    de: "/de/zimmer/suite",
    ru: "/ru/nomera/lyuks",
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
