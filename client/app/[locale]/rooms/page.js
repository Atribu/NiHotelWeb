import Image from "next/image";
import {
  CarFront,
  Dumbbell,
  Flame,
  Satellite,
  Wifi,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "rooms", image: site.images.roomMultiple });
}

export default async function RoomsPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });

  const rooms = [
    {
      id: "economy-room",
      title: t("economyTitle"),
      meta: t("economyMeta"),
      body: t("economyBody"),
      image: site.images.economyRoom4,
      imagePosition: "center 60%",
      href: "/rooms/economy-room",
    },
    {
      id: "french-room",
      title: t("frenchTitle"),
      meta: t("frenchMeta"),
      body: t("frenchBody"),
      image: site.images.frenchRoom3,
      imagePosition: "center 58%",
      href: "/rooms/french-room",
    },
    {
      id: "suite-room",
      title: t("suiteTitle"),
      meta: t("suiteMeta"),
      body: t("suiteBody"),
      image: site.images.suiteRoom3,
      imagePosition: "center 58%",
      href: "/rooms/suite-room",
    },
    {
      id: "triple-room",
      title: t("tripleTitle"),
      meta: t("tripleMeta"),
      body: t("tripleBody"),
      image: site.images.tripleRoom4,
      imagePosition: "center 58%",
      href: "/rooms/triple-room",
    },
    {
      id: "twin-room",
      title: t("twinTitle"),
      meta: t("twinMeta"),
      body: t("twinBody"),
      image: site.images.twinRoom3,
      imagePosition: "center 58%",
      href: "/rooms/twin-room",
    },
  ];

  const amenities = [
    { Icon: Wifi, key: "wifi" },
    { Icon: CarFront, key: "parking" },
    { Icon: Dumbbell, key: "fitness" },
    { Icon: Flame, key: "sauna" },
    { Icon: Satellite, key: "satellite" },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t("title"), page: "rooms" }]} />
      <section className="relative isolate flex min-h-[62vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:min-h-[68vh] sm:px-8 lg:min-h-[72vh] lg:px-12">
        <Image
          src={site.images.roomMultiple}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto w-full min-w-0 max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-white/80">
            {t("eyebrow")}
          </p>
          <h1 className="mx-auto mt-5 max-w-[19rem] break-words font-display text-[2.35rem] font-semibold leading-tight sm:max-w-none sm:text-6xl sm:leading-none lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-[18rem] break-words text-sm leading-7 text-white/85 sm:max-w-2xl sm:text-base">
            {t("intro")}
          </p>
          <p className="mx-auto mt-3 max-w-[18rem] break-words text-xs leading-6 text-white/70 sm:max-w-2xl">
            {t("photoNote")}
          </p>
          <div className="mt-9 flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row">
            {rooms.map((room) => (
              <Link
                key={room.id}
                href={room.href}
                className="inline-flex min-h-11 min-w-56 items-center justify-center border border-white/80 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-[2px] transition-colors hover:bg-white hover:text-[#19334F]"
              >
                {room.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl space-y-14 px-5 sm:px-8 lg:space-y-20 lg:px-10">
          {rooms.map((room, index) => (
            <article
              id={room.id}
              key={room.id}
              className="scroll-mt-28 bg-white lg:grid lg:grid-cols-2 lg:items-stretch"
            >
              <div
                className={`relative min-h-[340px] overflow-hidden sm:min-h-[430px] lg:min-h-[510px] ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={room.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: room.imagePosition ?? "center" }}
                />
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/25 to-transparent lg:hidden" />
                <h2 className="absolute inset-x-5 top-7 text-center font-display text-3xl font-semibold text-white drop-shadow lg:hidden">
                  {room.title}
                </h2>
              </div>

              <div className="flex flex-col items-center justify-center px-7 py-12 text-center sm:px-12 lg:min-h-[510px] lg:px-16">
                <h2 className="hidden font-display text-4xl font-semibold text-[#19334F] sm:text-5xl lg:block">
                  {room.title}
                </h2>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#72809A]">
                  {room.meta}
                </p>
                <span className="my-7 block h-px w-20 bg-[#19334F]/20" aria-hidden="true" />
                <p className="max-w-lg text-sm leading-8 text-[#59616C] sm:text-base">
                  {room.body}
                </p>
                <Link
                  href={room.href}
                  className="mt-8 inline-flex min-h-11 items-center justify-center border border-[#19334F] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white"
                >
                  {t("detailsCta")}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
            {t("sharedTitle")}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-[#59616C] sm:text-base">
            {t("sharedBody")}
          </p>
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 border-l border-t border-[#19334F]/15 sm:grid-cols-5">
            {amenities.map(({ Icon, key }) => (
              <div
                key={key}
                className="flex min-h-28 items-center justify-center border-b border-r border-[#19334F]/15"
              >
                <Icon className="h-6 w-6 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
