import { site } from "@/lib/site";
import { localizedPaths } from "@/lib/routes";
import { izmitLandingPageSlugs } from "@/lib/izmitLandingPages";

const sitemapPages = [
  "home",
  "rooms",
  "economyRoom",
  "frenchRoom",
  "suiteRoom",
  "tripleRoom",
  "twinRoom",
  "about",
  "meeting",
  "cityGuide",
  "restaurant",
  "gallery",
  "contact",
  "cookiePolicy",
  "certificates",
];

export default function sitemap() {
  const localizedEntries = sitemapPages.flatMap((page, index) => {
    const languages = Object.fromEntries(
      Object.entries(localizedPaths[page]).map(([locale, path]) => [
        locale,
        `${site.url}${path}`,
      ]),
    );
    languages["x-default"] = languages.tr;

    return Object.values(localizedPaths[page]).map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : page.endsWith("Room") ? 0.75 : 0.7,
      alternates: { languages },
    }));
  });

  const izmitLandingEntries = izmitLandingPageSlugs.map((slug) => ({
    url: `${site.url}/tr/${slug}`,
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  return [...localizedEntries, ...izmitLandingEntries];
}
