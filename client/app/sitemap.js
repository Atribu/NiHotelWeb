import { site } from "@/lib/site";
import { localizedPaths } from "@/lib/routes";

const sitemapPages = [
  "home",
  "rooms",
  "standardRoom",
  "suiteRoom",
  "about",
  "restaurant",
  "gallery",
  "contact",
];

export default function sitemap() {
  return sitemapPages.flatMap((page, index) =>
    Object.values(localizedPaths[page]).map((path) => ({
      url: `${site.url}${path}`,
      changeFrequency: index === 0 ? "weekly" : "monthly",
      priority: index === 0 ? 1 : page === "standardRoom" || page === "suiteRoom" ? 0.75 : 0.7,
    })),
  );
}
