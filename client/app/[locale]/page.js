import Image from "next/image";
import {
  ArrowRight,
  CarFront,
  Mail,
  MapPin,
  Phone,
  Presentation,
  Tv,
  Wifi,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { faqStructuredData } from "@/lib/structuredData";
import BookingBar from "./components/teona/BookingBar";
import FaqSection from "./components/teona/FaqSection";
import JsonLd from "./components/teona/JsonLd";
import RoomSlider from "./components/teona/RoomSlider";
import SeoStructuredData from "./components/teona/SeoStructuredData";

const introCardEyebrowClassName =
  "text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/75";
const introCardBodyClassName =
  "mt-3 max-w-md font-display text-xl font-medium leading-snug sm:text-2xl lg:text-[1.4rem]";
const introCardLinkClassName =
  "mt-5 inline-flex items-center gap-2 border-b border-white pb-1 text-xs font-semibold uppercase tracking-[0.14em]";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "home", image: site.images.hero });
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const [t, amenities, navigation, footer, faq] = await Promise.all([
    getTranslations("home"),
    getTranslations("amenities"),
    getTranslations("navigation"),
    getTranslations("footer"),
    getTranslations("faq"),
  ]);
  const faqItems = faq.raw("home.items");

  const amenityItems = [
    { key: "wifi", icon: Wifi },
    { key: "parking", icon: CarFront },
    { key: "satellite", icon: Tv },
    { key: "meeting", icon: Presentation },
  ];

  const facts = [
    [t("stats.sinceValue"), t("stats.sinceLabel")],
    [t("stats.roomsValue"), t("stats.roomsLabel")],
    [t("stats.guestsValue"), t("stats.guestsLabel")],
    [t("stats.meetingValue"), t("stats.meetingLabel")],
  ];

  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address.full,
  )}`;

  return (
    <main className="overflow-hidden bg-white" id="main-content">
      <SeoStructuredData locale={locale} items={[]} />
      <JsonLd data={faqStructuredData({ items: faqItems })} />
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#24292c] lg:min-h-[calc(100svh-6rem)]">
        <Image
          alt=""
          className="hero-pan object-cover object-[60%_center]"
          fill
          priority
          sizes="100vw"
          src={site.images.hero}
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black/35 to-transparent" />
        <h1 className="sr-only">{t("title")}</h1>
      </section>

      <BookingBar />

      <section className="relative bg-white px-5 py-20 sm:px-8 md:py-28 lg:px-14 lg:py-32">
        <div className="pointer-events-none absolute -left-28 top-4 h-[30rem] w-[30rem] rounded-full border border-[#dec7a6]/35" />
        <div className="pointer-events-none absolute -left-8 top-24 h-[18rem] w-[18rem] rounded-full border border-[#dec7a6]/25" />
        <Image
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 bottom-8 hidden h-[34rem] w-auto opacity-[0.055] lg:block"
          height={720}
          src={site.images.logo}
          width={470}
        />

        <div className="relative mx-auto min-h-[35rem] max-w-[960px] sm:min-h-[42rem] lg:min-h-[47rem]">
          <article className="cardClip absolute right-0 top-0 h-[25rem] w-[78%] overflow-hidden bg-[#ddd7ce] shadow-[0_24px_60px_rgba(36,41,44,0.12)] sm:h-[34rem] sm:w-[68%] lg:h-[43rem] lg:w-[58%]">
            <Image
              alt=""
              className="object-cover object-top"
              fill
              sizes="(max-width: 1024px) 75vw, 46vw"
              src={site.images.corridor}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 hidden p-6 text-white sm:block sm:p-9 lg:py-11 lg:pl-52 lg:pr-8">
              <p className={introCardEyebrowClassName}>
                {t("introEyebrow")}
              </p>
              <p className={introCardBodyClassName}>
                {t("introBody")}
              </p>
              <Link
                className={introCardLinkClassName}
                href="/about"
              >
                {navigation("about")}
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>

          <article className="absolute bottom-0 left-0 z-10 h-[17rem] w-[64%] overflow-hidden bg-[#e7e1d7] shadow-[0_24px_60px_rgba(36,41,44,0.14)] sm:h-[22rem] sm:w-[54%] lg:-bottom-24 lg:h-[27rem] lg:w-[56%]">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="(max-width: 1024px) 65vw, 45vw"
              src={site.images.roomDouble}
            />
            <div className="absolute inset-0 bg-black/38" />
            <div className="absolute inset-x-0 bottom-0 z-10 p-5 text-white sm:p-8 lg:p-10">
              <p className={introCardEyebrowClassName}>{t("roomsEyebrow")}</p>
              <h2 className={introCardBodyClassName}>
                {t("introTitle")}
              </h2>
              <Link
                className={introCardLinkClassName}
                href="/rooms"
              >
                {t("primaryCta")}
                <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="slats-section px-5 py-20 sm:px-8 lg:px-14 lg:py-32">
        <div className="relative z-10 mx-auto max-w-6xl text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#a78b63]">
            {t("amenitiesEyebrow")}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-[#24292c] sm:text-4xl">
            {t("amenitiesTitle")}
          </h2>
          <p className="mx-auto mt-5 hidden max-w-2xl text-sm leading-7 text-[#656b6f] md:block">
            {t("amenitiesBody")}
          </p>
          <ul className="mt-10 flex flex-wrap justify-center gap-4 sm:gap-6">
            {amenityItems.map(({ key, icon: Icon }) => (
              <li
                className="flex h-24 w-24 flex-col items-center justify-center gap-3 border border-black/10 bg-white text-center shadow-sm sm:h-28 sm:w-28"
                key={key}
              >
                <Icon aria-hidden="true" className="h-6 w-6 text-[#a8abad]" strokeWidth={1.45} />
                <span className="px-2 text-[0.68rem] leading-4 text-[#555b5f]">{amenities(key)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RoomSlider />

      <section className="bg-[#19334F] px-5 py-14 text-white sm:px-8 lg:px-14 lg:py-20">
        <div className="mx-auto grid max-w-[1120px] items-center gap-10 md:grid-cols-[1fr_0.58fr] lg:gap-20">
          <div className="max-w-2xl text-center md:text-left">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              {t("restaurantEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              {t("restaurantTitle")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/82 sm:text-base">{t("restaurantBody")}</p>
            <Link
              className="mt-7 inline-flex min-h-10 items-center border border-white px-5 text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-white hover:text-[#19334F]"
              href="/restaurant"
            >
              {t("restaurantCta")}
            </Link>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[300px] overflow-hidden border border-white/25">
            <Image
              alt=""
              className="object-cover object-bottom"
              fill
              sizes="300px"
              src={site.images.restaurant}
            />
            <div className="absolute inset-0 bg-[#19334F]/38" />
            <div className="absolute inset-5 flex items-center justify-center border border-white/55 text-center">
              <div>
                <p className="font-display text-4xl font-semibold">Masa</p>
                <p className="mt-2 text-[0.62rem] uppercase tracking-[0.22em]">Kocaeli</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fefdfc] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="relative mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
              {navigation("contact")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#24292c]">
              {t("locationTitle")}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#666c70]">{t("locationBody")}</p>

            <div className="mt-8 space-y-5">
              <a
                className="flex min-h-14 items-center gap-4 border border-black/10 bg-white px-5 shadow-sm transition-colors hover:border-[#dec7a6]"
                href={site.phone.href}
              >
                <Phone aria-hidden="true" className="h-5 w-5 text-[#c0a271]" />
                <span className="text-sm text-[#4d5357]">{site.phone.display}</span>
              </a>
              <a
                className="flex min-h-14 items-center gap-4 border border-black/10 bg-white px-5 shadow-sm transition-colors hover:border-[#dec7a6]"
                href={`mailto:${site.email}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5 text-[#c0a271]" />
                <span className="text-sm text-[#4d5357]">{site.email}</span>
              </a>
              <a
                className="flex min-h-14 items-center gap-4 border border-black/10 bg-white px-5 shadow-sm transition-colors hover:border-[#dec7a6]"
                href={`mailto:${site.callCenterEmail}`}
              >
                <Mail aria-hidden="true" className="h-5 w-5 shrink-0 text-[#c0a271]" />
                <span className="min-w-0">
                  <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#8a8f93]">
                    {footer("callCenterEmail")}
                  </span>
                  <span className="mt-1 block break-all text-sm text-[#4d5357]">
                    {site.callCenterEmail}
                  </span>
                </span>
              </a>
              <Link
                className="inline-flex min-h-11 items-center border border-[#dec7a6] bg-[#dec7a6] px-6 text-xs font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-[#b99b6c]"
                href="/contact"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-[360px] items-center justify-center overflow-hidden border border-black/5 bg-[#f7f4ee]">
            <div className="absolute h-[82%] w-[82%] rounded-full border border-[#dec7a6]/35" />
            <div className="absolute h-[62%] w-[62%] rounded-full border border-[#dec7a6]/25" />
            <Image
              alt={site.name}
              className="relative z-10 h-[70%] w-auto object-contain opacity-80"
              height={720}
              src={site.images.logo}
              width={470}
            />
          </div>
        </div>
      </section>

      <section aria-label={site.name} className="border-y border-black/5 bg-white px-5 py-16 sm:px-8 lg:px-14 lg:py-20">
        <h2 className="text-center font-display text-3xl font-medium text-[#24292c]">{site.name}</h2>
        <dl className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-px bg-black/10 md:grid-cols-4">
          {facts.map(([value, label]) => (
            <div className="flex min-h-32 flex-col items-center justify-center bg-white px-4 text-center" key={label}>
              <dt className="order-2 mt-2 text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.15em] text-[#8a8f92]">
                {label}
              </dt>
              <dd className="order-1 font-display text-4xl font-semibold text-[#24292c]">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <FaqSection
        eyebrow={faq("eyebrow")}
        items={faqItems}
        title={faq("home.title")}
      />

      <section className="relative overflow-hidden bg-[#f4f1eb] px-5 py-20 sm:px-8 lg:px-14 lg:py-28">
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full border border-[#dec7a6]/30" />
        <div className="pointer-events-none absolute -bottom-44 -right-32 h-[30rem] w-[30rem] rounded-full border border-[#19334F]/10" />

        <div className="relative mx-auto grid max-w-7xl overflow-hidden border border-[#19334F]/10 bg-white shadow-[0_28px_80px_rgba(25,51,79,0.14)] lg:grid-cols-[minmax(320px,0.78fr)_minmax(0,1.5fr)]">
          <div className="flex flex-col justify-between bg-[#19334F] px-7 py-10 text-left text-white sm:p-12 lg:min-h-[34rem] lg:p-14">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#dec7a6]">
                {t("locationEyebrow")}
              </p>
              <h2 className="mt-5 font-display text-4xl font-semibold leading-none sm:text-5xl">
                İZMİT
                <span className="mt-2 block text-white/65">KOCAELİ</span>
              </h2>
              <p className="mt-7 max-w-md text-sm leading-7 text-white/72">
                {t("locationBody")}
              </p>
            </div>

            <div className="mt-12">
              <div className="flex items-start gap-4 border-t border-white/18 pt-6">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#dec7a6]"
                  strokeWidth={1.6}
                />
                <p className="max-w-sm text-sm leading-6 text-white/85">
                  {site.address.full}
                </p>
              </div>
              <a
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-3 bg-[#dec7a6] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#19334F] transition-colors hover:bg-white"
                href={mapHref}
                rel="noreferrer"
                target="_blank"
              >
                {t("locationCta")}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[25rem] overflow-hidden bg-[#e9e7e2] sm:min-h-[30rem] lg:min-h-[34rem]">
            <iframe
              className="absolute inset-0 h-full w-full border-0 grayscale-[0.12]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={site.mapEmbed}
              title={`${site.name} — ${site.address.short}`}
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#19334F]/12 to-transparent" />
            <div className="pointer-events-none absolute bottom-5 left-5 border border-[#19334F]/10 bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm sm:bottom-7 sm:left-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#a78b63]">
                {site.name}
              </p>
              <p className="mt-1 text-sm font-medium text-[#19334F]">
                {site.address.short}
              </p>
            </div>
          </div>
        </div>
        <p className="sr-only">{footer("materialNote")}</p>
      </section>
    </main>
  );
}
