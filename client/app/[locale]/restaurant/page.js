import Image from "next/image";
import { Instagram, Music2, Phone, UsersRound } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import { pageAlternates } from "@/lib/routes";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "restaurant" });

  return {
    title: `${t("title")} | ${site.name}`,
    description: t("lead"),
    alternates: pageAlternates("restaurant", locale),
  };
}

export default async function RestaurantPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "restaurant" });

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <section className="relative isolate flex min-h-[60vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:min-h-[66vh] sm:px-8 lg:min-h-[72vh] lg:px-12">
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
            {t("lead")}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#72809A]">
            {t("eyebrow")}
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#19334F] sm:text-5xl lg:text-6xl">
            {site.restaurant.name}
          </h2>
          <span className="mx-auto my-8 block h-px w-20 bg-[#19334F]/20 lg:mx-0" aria-hidden="true" />

          <div className="space-y-7">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-start">
              <Music2 className="mt-1 h-6 w-6 shrink-0 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
              <p className="text-sm leading-8 text-[#59616C] sm:text-base">{t("body1")}</p>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start lg:items-start">
              <UsersRound className="mt-1 h-6 w-6 shrink-0 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
              <p className="text-sm leading-8 text-[#59616C] sm:text-base">{t("body2")}</p>
            </div>
          </div>
        </div>

        <div className="relative min-h-[520px] overflow-hidden bg-[#ECEBE8] shadow-[0_16px_42px_rgba(0,0,0,0.12)] sm:min-h-[640px]">
          <Image
            src={site.images.hospitality}
            alt=""
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-6 pb-7 pt-20 text-center text-white">
            <p className="font-display text-3xl font-semibold">{site.restaurant.name}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.28em] text-[#72809A]">
            {t("cta")}
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
            {site.restaurant.name}
          </h2>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={site.restaurant.phoneHref}
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#19334F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>{t("phoneLabel")}: {site.restaurant.phone}</span>
            </a>

            <a
              href={site.restaurant.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-3 border border-[#19334F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white sm:w-auto"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>{t("instagramLabel")}: {site.restaurant.instagram}</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
