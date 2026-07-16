import Image from "next/image";
import {
  BedDouble,
  CarFront,
  Dumbbell,
  Flame,
  Maximize2,
  Satellite,
  Wifi,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { pageAlternates } from "@/lib/routes";

const roomConfig = {
  standard: {
    pageKey: "standardRoom",
    heroImage: site.images.roomTwin,
    secondaryImage: site.images.bathroomShower,
    galleryImage: site.images.roomMultiple,
  },
  suite: {
    pageKey: "suiteRoom",
    heroImage: site.images.roomDouble,
    secondaryImage: site.images.terrace,
    galleryImage: site.images.roomMultiple,
  },
};

export async function generateRoomMetadata({ params, roomKey }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "roomDetails" });
  const room = roomConfig[roomKey];

  return {
    title: `${t(`${roomKey}.title`)} | ${site.name}`,
    description: t(`${roomKey}.intro`),
    alternates: pageAlternates(room.pageKey, locale),
  };
}

export default async function RoomDetailPage({ params, roomKey }) {
  const { locale } = await params;
  const [t, amenities] = await Promise.all([
    getTranslations({ locale, namespace: "roomDetails" }),
    getTranslations({ locale, namespace: "amenities" }),
  ]);
  const room = roomConfig[roomKey];

  const highlights = [
    { Icon: Maximize2, label: t("shared.size"), value: t(`${roomKey}.size`) },
    { Icon: BedDouble, label: t("shared.capacity"), value: t(`${roomKey}.capacity`) },
    { Icon: Wifi, label: amenities("wifi"), value: t("shared.wifiValue") },
    { Icon: Satellite, label: amenities("satellite"), value: t("shared.satelliteValue") },
  ];

  const sharedAmenities = [
    { Icon: Wifi, label: amenities("wifi") },
    { Icon: CarFront, label: amenities("parking") },
    { Icon: Dumbbell, label: amenities("fitness") },
    { Icon: Flame, label: amenities("sauna") },
    { Icon: Satellite, label: amenities("satellite") },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:px-12">
        <Image
          src={room.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/42" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="relative mx-auto w-full min-w-0 max-w-6xl text-white">
          <Link
            href="/rooms"
            className="inline-flex border-b border-white/70 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors hover:text-white"
          >
            {t("shared.backToRooms")}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
            {t("shared.eyebrow")}
          </p>
          <h1 className="mt-4 max-w-[19rem] break-words font-display text-[2.35rem] font-semibold leading-tight sm:max-w-4xl sm:text-6xl sm:leading-none lg:text-7xl">
            {t(`${roomKey}.title`)}
          </h1>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">
            {t(`${roomKey}.meta`)}
          </p>
          <p className="mt-6 max-w-[18rem] break-words text-sm leading-7 text-white/85 sm:max-w-2xl sm:text-base">
            {t(`${roomKey}.intro`)}
          </p>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative min-h-[360px] overflow-hidden bg-[#e8e2d8] sm:min-h-[460px]">
            <Image
              src={room.secondaryImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <article className="flex flex-col justify-center bg-white px-7 py-10 sm:px-10 lg:px-14">
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
            <p className="mt-6 text-xs leading-6 text-[#7A828C]">
              {t("shared.photoNote")}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-white px-5 py-14 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px bg-[#19334F]/15 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ Icon, label, value }) => (
              <div key={label} className="min-h-44 bg-white p-7">
                <Icon className="h-6 w-6 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
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
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {t("shared.facilitiesEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              {t("shared.facilitiesTitle")}
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-white/78 sm:text-base">
              {t("shared.facilitiesBody")}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {sharedAmenities.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex min-h-10 items-center gap-3 border border-white/25 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-white/85"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[320px] overflow-hidden border border-white/20 sm:min-h-[420px]">
            <Image
              src={room.galleryImage}
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 text-center sm:px-8 lg:px-10 lg:py-20">
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
