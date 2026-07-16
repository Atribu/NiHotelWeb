"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

export default function RoomSlider() {
  const t = useTranslations("home");
  const [index, setIndex] = useState(0);
  const rooms = [
    {
      image: site.images.comfort,
      title: t("standardTitle"),
      meta: t("standardMeta"),
      body: t("standardBody"),
    },
    {
      image: site.images.welcome,
      title: t("suiteTitle"),
      meta: t("suiteMeta"),
      body: t("suiteBody"),
    },
  ];
  const room = rooms[index];

  function previous() {
    setIndex((current) => (current - 1 + rooms.length) % rooms.length);
  }

  function next() {
    setIndex((current) => (current + 1) % rooms.length);
  }

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-0">
        <div className="mb-8 lg:hidden">
          <h2 className="font-display text-3xl font-semibold uppercase text-[#24292c]">
            {t("roomsTitle")}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#646a6e]">{t("roomsBody")}</p>
        </div>

        <div className="grid items-stretch gap-4 lg:grid-cols-[minmax(0,8fr)_minmax(330px,5fr)_minmax(72px,1fr)]">
          <div className="relative hidden min-h-[520px] overflow-hidden shadow-sm lg:block">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="58vw"
              src={site.images.hospitality}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="absolute left-[10%] top-1/2 z-10 max-w-md -translate-y-1/2 xl:left-[16%]">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#a78b63]">
                {t("roomsEyebrow")}
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-[#24292c] xl:text-5xl">
                {t("roomsTitle")}
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#53595d]">{t("roomsBody")}</p>
              <Link
                className="mt-7 inline-flex min-h-11 items-center border-2 border-black px-5 text-xs font-semibold uppercase tracking-[0.13em] transition-colors hover:bg-black hover:text-white"
                href="/rooms"
              >
                {t("primaryCta")}
              </Link>
            </div>
          </div>

          <article className="flex min-h-[430px] flex-col bg-white shadow-sm lg:min-h-[520px]">
            <div className="relative flex-1 overflow-hidden bg-[#eeeae3]">
              <Image
                alt={room.title}
                className="object-cover transition-opacity duration-500"
                fill
                key={room.image}
                sizes="(max-width: 1024px) 100vw, 35vw"
                src={room.image}
              />
            </div>
            <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] lg:p-6">
              <div>
                <h3 className="font-display text-2xl font-semibold text-[#24292c]">{room.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#696f73]">{room.body}</p>
              </div>
              <p className="flex items-center gap-2 self-start whitespace-nowrap text-xs uppercase tracking-[0.08em] text-[#50565a]">
                <Maximize2 aria-hidden="true" className="h-4 w-4" />
                {room.meta}
              </p>
            </div>
          </article>

          <div className="relative hidden min-h-[520px] overflow-hidden shadow-sm lg:block">
            <Image
              alt=""
              className="object-cover"
              fill
              sizes="8vw"
              src={rooms[(index + 1) % rooms.length].image}
            />
          </div>
        </div>

        <div className="mt-7 flex items-center justify-center gap-5 text-[#c5a879]">
          <span aria-hidden="true" className="h-px w-[28%] bg-[#dec7a6]" />
          <button
            aria-label={t("suiteTitle")}
            className="p-2 transition-colors hover:text-black"
            onClick={previous}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="h-6 w-6" />
          </button>
          <span aria-hidden="true" className="h-5 w-px bg-[#dec7a6]" />
          <button
            aria-label={t("standardTitle")}
            className="p-2 transition-colors hover:text-black"
            onClick={next}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="h-6 w-6" />
          </button>
          <span aria-hidden="true" className="h-px w-[28%] bg-[#dec7a6]" />
        </div>
      </div>
    </section>
  );
}
