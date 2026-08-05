import Image from "next/image";
import { getTranslations } from "next-intl/server";
import GalleryGrid from "./GalleryGrid";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "gallery", image: site.images.exteriorFront });
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
      id: "exterior-front",
      category: "hotel",
      image: site.images.exteriorFront,
      label: t("items.exterior"),
      height: "h-[310px] sm:h-[390px]",
      position: "object-[60%_center]",
    },
    {
      id: "exterior-city",
      category: "location",
      image: site.images.exteriorCity,
      label: t("items.city"),
      height: "h-[300px] sm:h-[350px]",
      position: "object-[34%_center] sm:object-[42%_center] lg:object-center",
    },
    {
      id: "exterior-angle",
      category: "hotel",
      image: site.images.exteriorAngle,
      label: t("items.exterior"),
      height: "h-[340px] sm:h-[430px]",
      position: "object-[60%_center]",
    },
    {
      id: "corridor",
      category: "service",
      image: site.images.corridor,
      label: t("items.corridor"),
      height: "h-[460px] sm:h-[590px]",
    },
    {
      id: "terrace",
      category: "service",
      image: site.images.terrace,
      label: t("items.terrace"),
      height: "h-[290px] sm:h-[340px]",
      position: "object-[52%_center]",
    },
    {
      id: "bathroom-detail",
      category: "service",
      image: site.images.bathroomDetail,
      label: t("items.bathroom"),
      height: "h-[310px] sm:h-[370px]",
    },
    {
      id: "bathroom-shower",
      category: "service",
      image: site.images.bathroomShower,
      label: t("items.shower"),
      height: "h-[330px] sm:h-[390px]",
    },
    {
      id: "room-double",
      category: "comfort",
      image: site.images.roomDouble,
      label: t("items.roomDouble"),
      height: "h-[380px] sm:h-[460px]",
    },
    {
      id: "room-twin",
      category: "comfort",
      image: site.images.roomTwin,
      label: t("items.roomTwin"),
      height: "h-[310px] sm:h-[370px]",
    },
    {
      id: "room-multiple",
      category: "comfort",
      image: site.images.roomMultiple,
      label: t("items.roomMultiple"),
      height: "h-[350px] sm:h-[420px]",
    },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t("title"), page: "gallery" }]} />
      <section className="relative isolate flex min-h-[55vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:min-h-[60vh] sm:px-8 lg:min-h-[66vh] lg:px-12">
        <Image
          src={site.images.exteriorCity}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[34%_center] sm:object-[42%_center] lg:object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto w-full min-w-0 max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/80">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mt-5 max-w-[18rem] break-words font-display text-[2rem] font-semibold leading-tight sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-[17rem] break-words text-sm leading-7 text-white/85 sm:max-w-2xl sm:text-base">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-[19rem] break-words border-l border-[#19334F]/30 pl-5 text-sm leading-7 text-[#59616C] sm:max-w-3xl sm:pl-7 sm:text-base">
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
