import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "about", image: site.images.exteriorAngle });
}

export default async function AboutPage({ params }) {
  const { locale } = await params;
  const [t, common] = await Promise.all([
    getTranslations({ locale, namespace: "about" }),
    getTranslations({ locale, namespace: "common" }),
  ]);

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t("title"), page: "about" }]} />
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
        <div className="relative mx-auto w-full min-w-0 max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/80">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mt-5 max-w-[19rem] break-words font-display text-[2.35rem] font-semibold leading-tight sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-[18rem] break-words text-sm leading-7 text-white/85 sm:max-w-2xl sm:text-base">
            {t("lead")}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10 lg:py-24">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <p className="font-display text-2xl font-semibold leading-relaxed text-[#3F4650] sm:text-3xl">
            {t("body1")}
          </p>
          <span className="mx-auto my-8 block h-px w-20 bg-[#19334F]/20 lg:mx-0" aria-hidden="true" />
          <p className="text-sm leading-8 text-[#59616C] sm:text-base">
            {t("body2")}
          </p>
        </div>

        <div className="relative order-1 aspect-[4/3] min-h-[320px] w-full overflow-hidden bg-[#ECEBE8] shadow-[0_16px_42px_rgba(0,0,0,0.12)] lg:order-2">
          <Image
            src={site.images.exteriorAngle}
            alt=""
            fill
            sizes="(min-width: 1024px) 48vw, 100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F7F5F1]">
        <div className="mx-auto grid max-w-6xl px-5 sm:px-8 lg:grid-cols-2 lg:px-10">
          <article className="border-b border-black/10 py-16 text-center lg:border-b-0 lg:border-r lg:py-20 lg:pr-16 lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#72809A]">
              {site.facts.since}
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t("principleTitle")}
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">
              {t("principleBody")}
            </p>
          </article>

          <article className="py-16 text-center lg:py-20 lg:pl-16 lg:text-left">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#72809A]">
              {site.address.short}
            </p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t("cityTitle")}
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">
              {t("cityBody")}
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#19334F] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white"
            >
              {common("learnMore")}
            </Link>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="relative aspect-[16/7] min-h-[280px] overflow-hidden border border-black/10 bg-[#ECEBE8]">
          <Image
            src={site.images.map}
            alt={site.address.short}
            fill
            sizes="(min-width: 1024px) 1100px, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </main>
  );
}
