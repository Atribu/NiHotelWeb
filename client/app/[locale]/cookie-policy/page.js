import {
  BarChart3,
  Cookie,
  ExternalLink,
  Mail,
  MapPinned,
  Megaphone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";
import SeoStructuredData from "../components/teona/SeoStructuredData";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "cookiePolicy", image: site.images.hero });
}

export default async function CookiePolicyPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookiePolicy" });

  const categories = [
    {
      Icon: ShieldCheck,
      title: t("necessaryTitle"),
      body: t("necessaryBody"),
      detail: t("necessaryDetail"),
      status: t("alwaysActive"),
    },
    {
      Icon: MessageCircle,
      title: t("liveSupportTitle"),
      body: t("liveSupportBody"),
      detail: t("liveSupportDetail"),
      status: t("optional"),
    },
    {
      Icon: MapPinned,
      title: t("mapsTitle"),
      body: t("mapsBody"),
      detail: t("mapsDetail"),
      status: t("externalService"),
    },
    {
      Icon: BarChart3,
      title: t("analyticsTitle"),
      body: t("analyticsBody"),
      detail: t("analyticsDetail"),
      status: t("optional"),
    },
    {
      Icon: Megaphone,
      title: t("marketingTitle"),
      body: t("marketingBody"),
      detail: t("marketingDetail"),
      status: t("optional"),
    },
  ];

  const services = [
    {
      name: "teona_cookie_consent",
      provider: site.name,
      purpose: t("consentPurpose"),
      duration: t("duration180"),
      type: t("firstParty"),
    },
    {
      name: "Google Tag Manager",
      provider: "Google",
      purpose: t("tagManagerPurpose"),
      duration: t("providerControlled"),
      type: t("consentManaged"),
    },
    {
      name: "Connexease LiveChat",
      provider: "Connexease",
      purpose: t("liveSupportPurpose"),
      duration: t("providerControlled"),
      type: t("thirdParty"),
    },
    {
      name: "Google Maps",
      provider: "Google",
      purpose: t("mapsPurpose"),
      duration: t("providerControlled"),
      type: t("thirdParty"),
    },
  ];

  return (
    <main id="main-content" className="bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t("title"), page: "cookiePolicy" }]} />
      <section className="bg-[#19334F] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-10 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#dec7a6]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
            {t("lead")}
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.16em] text-white/50">
            {t("updated")}: {t("updatedDate")}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="h-fit border border-[#19334F]/10 bg-[#F7F5F1] p-7 lg:sticky lg:top-28">
            <Cookie aria-hidden="true" className="h-7 w-7 text-[#19334F]" strokeWidth={1.5} />
            <h2 className="mt-5 font-display text-3xl font-semibold text-[#19334F]">
              {t("managementTitle")}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#59616C]">
              {t("managementBody")}
            </p>
          </aside>

          <div className="space-y-12">
            <article>
              <h2 className="font-display text-3xl font-semibold text-[#19334F] sm:text-4xl">
                {t("introTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">
                {t("introBody")}
              </p>
            </article>

            <article className="border-t border-[#19334F]/10 pt-10">
              <h2 className="font-display text-3xl font-semibold text-[#19334F]">
                {t("controllerTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">
                {t("controllerBody")}
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 border-b border-[#19334F]/35 pb-1 text-sm text-[#19334F]"
                href={`mailto:${site.email}`}
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                {site.email}
              </a>
            </article>

            <article className="border-t border-[#19334F]/10 pt-10">
              <h2 className="font-display text-3xl font-semibold text-[#19334F]">
                {t("categoriesTitle")}
              </h2>
              <div className="mt-7 border-y border-[#19334F]/10">
                {categories.map(({ Icon, body, detail, status, title }) => (
                  <div
                    className="grid gap-4 border-t border-[#19334F]/10 py-7 first:border-t-0 sm:grid-cols-[auto_1fr_auto]"
                    key={title}
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center bg-[#F3EFE7] text-[#19334F]">
                      <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h3 className="text-sm font-semibold text-[#19334F]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[#59616C]">{body}</p>
                      <p className="mt-2 text-xs leading-5 text-[#7A828C]">{detail}</p>
                    </div>
                    <span className="h-fit w-fit border border-[#19334F]/15 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </article>

            <article className="border-t border-[#19334F]/10 pt-10">
              <h2 className="font-display text-3xl font-semibold text-[#19334F]">
                {t("servicesTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">
                {t("servicesBody")}
              </p>
              <div className="mt-7 space-y-4">
                {services.map((service) => (
                  <div
                    className="border border-[#19334F]/10 bg-[#F7F5F1] p-6"
                    key={service.name}
                  >
                    <h3 className="font-display text-2xl font-semibold text-[#19334F]">
                      {service.name}
                    </h3>
                    <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                          {t("providerLabel")}
                        </dt>
                        <dd className="mt-1 text-[#59616C]">{service.provider}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                          {t("typeLabel")}
                        </dt>
                        <dd className="mt-1 text-[#59616C]">{service.type}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                          {t("purposeLabel")}
                        </dt>
                        <dd className="mt-1 text-[#59616C]">{service.purpose}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                          {t("durationLabel")}
                        </dt>
                        <dd className="mt-1 text-[#59616C]">{service.duration}</dd>
                      </div>
                    </dl>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs leading-5 text-[#7A828C]">
                {t("providerNote")}
              </p>
            </article>

            <article className="border-t border-[#19334F]/10 pt-10">
              <h2 className="font-display text-3xl font-semibold text-[#19334F]">
                {t("rightsTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">
                {t("rightsBody")}
              </p>
            </article>

            <article className="border-t border-[#19334F]/10 pt-10">
              <h2 className="font-display text-3xl font-semibold text-[#19334F]">
                {t("officialGuideTitle")}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">
                {t("officialGuideBody")}
              </p>
              <a
                className="mt-5 inline-flex items-center gap-2 border-b border-[#19334F]/35 pb-1 text-sm font-medium text-[#19334F] transition-colors hover:border-[#19334F]"
                href="https://www.kvkk.gov.tr/Icerik/7353/Cerez-Uygulamalari-Hakkinda-Rehber"
                rel="noreferrer"
                target="_blank"
              >
                {t("officialGuideLink")}
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
