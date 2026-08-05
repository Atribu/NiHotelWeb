import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import ContactForm from "../components/teona/ContactForm";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "contact", image: site.images.exteriorCity });
}

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  const contactItems = [
    {
      label: t("phone"),
      value: site.phone.display,
      href: site.phone.href,
      action: t("call"),
      Icon: Phone,
    },
    {
      label: t("email"),
      value: site.email,
      href: `mailto:${site.email}`,
      action: t("write"),
      Icon: Mail,
    },
    {
      label: t("callCenterEmail"),
      value: site.callCenterEmail,
      href: `mailto:${site.callCenterEmail}`,
      action: t("write"),
      Icon: Mail,
    },
  ];

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t("title"), page: "contact" }]} />
      <section className="relative isolate flex min-h-[55vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:min-h-[60vh] sm:px-8 lg:min-h-[68vh] lg:px-12">
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

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
            {t("title")}
          </h2>
          <span className="mx-auto mt-6 block h-px w-20 bg-[#19334F]/20" aria-hidden="true" />

          <div className="mt-12 grid border-l border-t border-[#19334F]/15 md:grid-cols-2 lg:grid-cols-4">
            {contactItems.map(({ label, value, href, action, Icon }) => (
              <a
                key={label}
                href={href}
                className="group flex min-h-52 flex-col items-center justify-center border-b border-r border-[#19334F]/15 px-6 py-9 text-center transition-colors hover:bg-[#F7F5F1]"
              >
                <Icon className="h-7 w-7 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
                <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#72809A]">
                  {label}
                </span>
                <span className="mt-3 break-words font-display text-2xl font-semibold text-[#30343A]">
                  {value}
                </span>
                <span className="mt-4 border-b border-[#19334F]/35 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#19334F]">
                  {action}
                </span>
              </a>
            ))}

            <div className="flex min-h-52 flex-col items-center justify-center border-b border-r border-[#19334F]/15 px-6 py-9 text-center">
              <MapPin className="h-7 w-7 text-[#19334F]" strokeWidth={1.35} aria-hidden="true" />
              <span className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#72809A]">
                {t("address")}
              </span>
              <address className="mt-3 max-w-sm font-display text-xl font-semibold not-italic leading-snug text-[#30343A] sm:text-2xl">
                {site.address.full}
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#72809A]">
              {t("eyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t("formTitle")}
            </h2>
          </div>
          <div className="mt-10 border-y border-[#19334F]/15 bg-white px-6 py-8 sm:px-10 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <h2 className="font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t("mapTitle")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#59616C]">
              {site.address.full}
            </p>
          </div>
          <div className="h-[380px] overflow-hidden border border-black/10 shadow-[0_14px_35px_rgba(0,0,0,0.10)] sm:h-[480px]">
            <iframe
              src={site.mapEmbed}
              title={t("mapTitle")}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-scripts allow-same-origin allow-popups"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
