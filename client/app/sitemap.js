import { site } from "@/lib/site";

const routes = {
  tr: ["", "/odalar", "/hakkimizda", "/restoran", "/galeri", "/iletisim"],
  en: ["/home", "/rooms", "/about", "/restaurant", "/gallery", "/contact"],
  de: ["/startseite", "/zimmer", "/uber-uns", "/restaurant", "/galerie", "/kontakt"],
  ru: ["/glavnaya", "/nomera", "/o-nas", "/restoran", "/galereya", "/kontakty"],
};

export default function sitemap() {
  return Object.entries(routes).flatMap(([locale, paths]) =>
    paths.map((path, index) => ({
      url: `${site.url}/${locale}${path}`,
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : 0.7,
    })),
  );
}
