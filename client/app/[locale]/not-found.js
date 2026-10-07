import Image from "next/image";
import { ArrowRight, BedDouble, Home } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");

  return (
    <main
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#10273D] px-5 pb-20 pt-36 text-white sm:px-8 sm:pt-40 lg:px-14"
      id="main-content"
    >
      <Image
        alt=""
        aria-hidden="true"
        className="object-cover object-[58%_center]"
        fill
        priority
        sizes="100vw"
        src={site.images.exteriorCity}
      />
      <div className="absolute inset-0 bg-[#10273D]/78" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#10273D] via-[#10273D]/76 to-[#10273D]/30" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#10273D] to-transparent" />

      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/2 hidden -translate-y-1/2 font-display text-[30rem] font-semibold leading-none text-white/[0.055] lg:block"
      >
        404
      </div>
      <div
        aria-hidden="true"
        className="absolute -left-24 top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]"
      />
      <div
        aria-hidden="true"
        className="absolute -left-8 top-40 h-52 w-52 rounded-full border border-white/10 sm:h-72 sm:w-72"
      />

      <section className="relative z-10 mx-auto w-full max-w-[1180px] lg:-translate-y-14">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#DEC7A6]">
            {t("eyebrow")}
          </p>
          <p
            aria-hidden="true"
            className="mt-5 font-display text-8xl font-semibold leading-none text-white/95 sm:text-9xl"
          >
            404
          </p>
          <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
            {t("description")}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 bg-white px-6 text-xs font-semibold uppercase tracking-[0.15em] text-[#19334F] transition-colors hover:bg-[#DEC7A6]"
              href="/"
            >
              <Home aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
              {t("home")}
            </Link>
            <Link
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/45 bg-white/5 px-6 text-xs font-semibold uppercase tracking-[0.15em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white hover:text-[#19334F]"
              href="/rooms"
            >
              <BedDouble aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
              {t("rooms")}
            </Link>
          </div>

          <p className="mt-7 text-sm text-white/62">
            {t("contactPrompt")}{" "}
            <Link
              className="group inline-flex items-center gap-1.5 border-b border-white/45 pb-0.5 font-medium text-white transition-colors hover:border-[#DEC7A6] hover:text-[#DEC7A6]"
              href="/contact"
            >
              {t("contact")}
              <ArrowRight
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
