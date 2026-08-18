import {
  BedDouble,
  CarFront,
  Maximize2,
  Satellite,
  Wifi,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { createRoomAnalyticsItem } from "@/lib/analytics";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import { faqStructuredData, hotelRoomStructuredData } from "@/lib/structuredData";
import BookingBar from "../components/teona/BookingBar";
import FaqSection from "../components/teona/FaqSection";
import JsonLd from "../components/teona/JsonLd";
import { RoomDetailAnalytics } from "../components/teona/RoomAnalytics";
import SeoStructuredData from "../components/teona/SeoStructuredData";
import RoomGallery from "./RoomGallery";

const roomConfig = {
  economy: {
    id: "economy-room",
    pageKey: "economyRoom",
    images: [
      site.images.economyRoom4,
      site.images.economyRoom1,
      site.images.economyRoom3,
      site.images.economyRoom2,
      site.images.roomBathroom1,
    ],
  },
  french: {
    id: "french-room",
    pageKey: "frenchRoom",
    images: [
      site.images.frenchRoom3,
      site.images.frenchRoom2,
      site.images.frenchRoom1,
      site.images.frenchRoom6,
      site.images.frenchRoom5,
      site.images.frenchRoom7,
      site.images.frenchRoom4,
      site.images.frenchRoom8,
      site.images.roomBathroom2,
    ],
  },
  suite: {
    id: "suite-room",
    pageKey: "suiteRoom",
    images: [
      site.images.suiteRoom3,
      site.images.suiteRoom6,
      site.images.suiteRoom1,
      site.images.suiteRoom5,
      site.images.suiteRoom2,
      site.images.suiteRoom4,
      site.images.roomBathroom4,
    ],
  },
  triple: {
    id: "triple-room",
    pageKey: "tripleRoom",
    images: [
      site.images.tripleRoom4,
      site.images.tripleRoom2,
      site.images.tripleRoom1,
      site.images.tripleRoom3,
      site.images.tripleRoom5,
      site.images.roomBathroom1,
    ],
  },
  twin: {
    id: "twin-room",
    pageKey: "twinRoom",
    images: [
      site.images.twinRoom3,
      site.images.twinRoom2,
      site.images.twinRoom1,
      site.images.twinRoom4,
      site.images.roomBathroom3,
    ],
  },
};

export async function generateRoomMetadata({ params, roomKey }) {
  const { locale } = await params;
  const room = roomConfig[roomKey];
  return buildPageMetadata({
    locale,
    page: room.pageKey,
    image: room.images[0],
  });
}

export default async function RoomDetailPage({ params, roomKey }) {
  const { locale } = await params;
  const [t, amenities, navigation, faq] = await Promise.all([
    getTranslations({ locale, namespace: "roomDetails" }),
    getTranslations({ locale, namespace: "amenities" }),
    getTranslations({ locale, namespace: "navigation" }),
    getTranslations({ locale, namespace: "faq" }),
  ]);
  const room = roomConfig[roomKey];
  const analyticsItem = createRoomAnalyticsItem({
    id: room.id,
    name: t(`${roomKey}.title`),
  });
  const faqItems = [
    ...faq.raw(`roomDetails.${roomKey}.items`),
    ...faq.raw("roomDetails.sharedItems"),
  ];

  const highlights = [
    { Icon: Maximize2, label: t("shared.size"), value: t(`${roomKey}.size`) },
    { Icon: BedDouble, label: t("shared.capacity"), value: t(`${roomKey}.capacity`) },
    { Icon: Wifi, label: amenities("wifi"), value: t("shared.wifiValue") },
    { Icon: Satellite, label: amenities("satellite"), value: t("shared.satelliteValue") },
  ];

  const sharedAmenities = [
    { Icon: Wifi, label: amenities("wifi") },
    { Icon: CarFront, label: amenities("parking") },
    { Icon: Satellite, label: amenities("satellite") },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData
        locale={locale}
        items={[
          { name: navigation("rooms"), page: "rooms" },
          { name: t(`${roomKey}.title`), page: room.pageKey },
        ]}
      />
      <JsonLd
        data={hotelRoomStructuredData({
          locale,
          page: room.pageKey,
          name: t(`${roomKey}.title`),
          description: t(`${roomKey}.intro`),
          images: room.images,
          roomKey,
        })}
      />
      <JsonLd data={faqStructuredData({ items: faqItems })} />
      <RoomDetailAnalytics item={analyticsItem} locale={locale} />
      <section className="bg-[#F7F5F1] px-5 pb-10 pt-32 sm:px-8 sm:pb-12 lg:px-10 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/rooms"
            className="inline-flex border-b border-[#19334F]/40 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F]/70 transition-colors hover:text-[#19334F]"
          >
            {t("shared.backToRooms")}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-[#a78b63]">
            {t("shared.eyebrow")}
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h1 className="max-w-[19rem] break-words font-display text-[2.7rem] font-semibold leading-tight text-[#19334F] sm:max-w-4xl sm:text-6xl sm:leading-none lg:text-7xl">
              {t(`${roomKey}.title`)}
            </h1>
            <div className="lg:pb-1">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#72809A]">
                {t(`${roomKey}.meta`)}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#59616C] sm:text-base">
                {t(`${roomKey}.intro`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-4 flex items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
              {t("shared.galleryEyebrow")}
            </p>
            <p className="text-xs text-[#7A828C]">{t("shared.photoNote")}</p>
          </div>

          <RoomGallery
            analyticsItem={analyticsItem}
            images={room.images}
            labels={{
              close: t("shared.galleryClose"),
              next: t("shared.galleryNext"),
              open: t("shared.galleryOpen"),
              previous: t("shared.galleryPrevious"),
            }}
            locale={locale}
            title={t(`${roomKey}.title`)}
          />
        </div>
      </section>

      <section className="relative z-20 bg-white px-5 pb-14 sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto -mt-8 max-w-7xl">
          <div className="mb-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
              {t("shared.bookingEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-[#19334F] sm:text-4xl">
              {t("shared.bookingTitle")}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#59616C]">
              {t("shared.bookingBody")}
            </p>
          </div>
          <BookingBar
            analyticsItem={analyticsItem}
            embedded
            source="room_detail"
          />
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <article className="bg-white px-7 py-10 sm:px-10 lg:px-14 lg:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
              {t("shared.detailsEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t(`${roomKey}.detailTitle`)}
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">
              {t(`${roomKey}.body1`)}
            </p>
            <p className="mt-4 text-sm leading-8 text-[#59616C] sm:text-base">
              {t(`${roomKey}.body2`)}
            </p>
          </article>

          <div className="grid gap-px bg-[#19334F]/15 sm:grid-cols-2">
            {highlights.map(({ Icon, label, value }) => (
              <div key={label} className="min-h-44 bg-white p-7">
                <Icon
                  className="h-6 w-6 text-[#19334F]"
                  strokeWidth={1.35}
                  aria-hidden="true"
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#72809A]">
                  {label}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#3F4650]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#19334F] px-5 py-14 text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
            {t("shared.facilitiesEyebrow")}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            {t("shared.facilitiesTitle")}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
            {t("shared.facilitiesBody")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {sharedAmenities.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex min-h-11 items-center gap-3 border border-white/25 px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white/85"
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow={faq("eyebrow")}
        items={faqItems}
        title={faq(`roomDetails.${roomKey}.title`)}
      />

      <section className="bg-white px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
            {site.name}
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
            {t("shared.ctaTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#59616C] sm:text-base">
            {t("shared.ctaBody")}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#19334F] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white"
          >
            {t("shared.contactCta")}
          </Link>
        </div>
      </section>
    </main>
  );
}
