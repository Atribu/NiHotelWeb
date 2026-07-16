import Image from "next/image";
import { getTranslations } from "next-intl/server";
import GalleryGrid from "./GalleryGrid";
import { site } from "@/lib/site";
import { pageAlternates } from "@/lib/routes";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });

  return {
    title: `${t("title")} | ${site.name}`,
    description: t("intro"),
    alternates: pageAlternates("gallery", locale),
  };
}

const galleryControls = {
  tr: { all: "Tümü", close: "Kapat", previous: "Önceki", next: "Sonraki" },
  en: { all: "All", close: "Close", previous: "Previous", next: "Next" },
  de: { all: "Alle", close: "Schließen", previous: "Zurück", next: "Weiter" },
  ru: { all: "Все", close: "Закрыть", previous: "Назад", next: "Далее" },
};

export default async function GalleryPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "gallery" });
  const controls = galleryControls[locale] ?? galleryControls.en;

  const categories = [
    { id: "all", label: controls.all },
    { id: "hotel", label: t("items.hero") },
    { id: "comfort", label: t("items.comfort") },
    { id: "service", label: t("items.service") },
    { id: "location", label: t("items.location") },
  ];

  const galleryItems = [
    {
      id: "hero-wide",
      category: "hotel",
      image: site.images.hero,
      label: t("items.hero"),
      height: "h-[310px] sm:h-[390px]",
    },
    {
      id: "welcome",
      category: "hotel",
      image: site.images.welcome,
      label: t("items.welcome"),
      height: "h-[270px] sm:h-[320px]",
    },
    {
      id: "comfort-tall",
      category: "comfort",
      image: site.images.comfort,
      label: t("items.comfort"),
      height: "h-[380px] sm:h-[470px]",
    },
    {
      id: "service-tall",
      category: "service",
      image: site.images.hospitality,
      label: t("items.service"),
      height: "h-[460px] sm:h-[590px]",
    },
    {
      id: "location",
      category: "location",
      image: site.images.map,
      label: t("items.location"),
      height: "h-[290px] sm:h-[350px]",
    },
    {
      id: "welcome-detail",
      category: "service",
      image: site.images.welcome,
      label: t("items.welcome"),
      height: "h-[350px] sm:h-[430px]",
      position: "object-right",
    },
    {
      id: "comfort-detail",
      category: "comfort",
      image: site.images.comfort,
      label: t("items.comfort"),
      height: "h-[280px] sm:h-[340px]",
      position: "object-center",
    },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <section className="relative isolate flex min-h-[55vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:min-h-[60vh] sm:px-8 lg:min-h-[66vh] lg:px-12">
        <Image
          src={site.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/80">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-3xl border-l border-[#19334F]/30 pl-5 text-sm leading-7 text-[#59616C] sm:pl-7 sm:text-base">
            {t("note")}
          </div>
          <GalleryGrid
            categories={categories}
            items={galleryItems}
            modalLabels={{
              close: controls.close,
              previous: controls.previous,
              next: controls.next,
            }}
          />
        </div>
      </section>
    </main>
  );
}
