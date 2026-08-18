import { localizedPaths } from "@/lib/routes";
import { site } from "@/lib/site";

const localeNames = {
  tr: "Türkçe",
  en: "English",
  de: "Deutsch",
  ru: "Русский",
};

const amenityFeature = [
  "Free Wi-Fi",
  "Free parking",
  "Satellite television",
].map((name) => ({
  "@type": "LocationFeatureSpecification",
  name,
  value: true,
}));

export function hotelStructuredData(locale) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        url: site.url,
        logo: new URL(site.images.logo, site.url).toString(),
        email: site.email,
        telephone: site.phone.display,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: site.callCenterEmail,
          telephone: site.phone.display,
          availableLanguage: Object.values(localeNames),
        },
      },
      {
        "@type": "Hotel",
        "@id": `${site.url}/#hotel`,
        name: site.name,
        url: `${site.url}${localizedPaths.home[locale]}`,
        image: new URL(site.images.exteriorFront, site.url).toString(),
        email: site.email,
        telephone: site.phone.display,
        numberOfRooms: 44,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Mehmet Ali Paşa Mah. Bağdat Cad. Erkan Sok. No:3",
          addressLocality: "İzmit",
          addressRegion: "Kocaeli",
          addressCountry: "TR",
        },
        amenityFeature,
        parentOrganization: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: localeNames[locale] ?? localeNames.tr,
        publisher: { "@id": `${site.url}/#organization` },
      },
    ],
  };
}

export function breadcrumbStructuredData({ locale, items }) {
  const home = {
    name: locale === "tr" ? "Ana Sayfa" : locale === "de" ? "Startseite" : locale === "ru" ? "Главная" : "Home",
    url: `${site.url}${localizedPaths.home[locale]}`,
  };

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [home, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.page ? `${site.url}${localizedPaths[item.page][locale]}` : item.url,
    })),
  };
}

export function hotelRoomStructuredData({ locale, page, name, description, images, roomKey }) {
  const isSuite = roomKey === "suite";

  return {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    "@id": `${site.url}${localizedPaths[page][locale]}#room`,
    name,
    description,
    url: `${site.url}${localizedPaths[page][locale]}`,
    image: images.map((image) => new URL(image, site.url).toString()),
    floorSize: {
      "@type": "QuantitativeValue",
      minValue: isSuite ? 25 : 15,
      maxValue: isSuite ? 25 : 20,
      unitCode: "MTK",
    },
    amenityFeature,
    containedInPlace: { "@id": `${site.url}/#hotel` },
    offers: {
      "@type": "Offer",
      url: `${site.bookingUrl}?language=${locale}`,
    },
  };
}

export function faqStructuredData({ items }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ answer, question }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

export function cityGuideStructuredData({ locale, name, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    inLanguage: localeNames[locale] ?? localeNames.tr,
    itemListElement: items.map(({ title, value, body, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Place",
        name: title,
        description: `${value}. ${body}`,
        url,
      },
    })),
  };
}
