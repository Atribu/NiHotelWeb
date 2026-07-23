import {
  BarChart3,
  Cookie,
  Mail,
  MapPinned,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
// Prepared for later activation. This private folder keeps the route disabled.
import { getTranslations } from "next-intl/server";
import { site } from "@/lib/site";
import { pageAlternates } from "@/lib/routes";
import CookieSettingsButton from "../components/teona/CookieSettingsButton";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "cookiePolicy" });

  return {
    title: `${t("title")} | ${site.name}`,
    description: t("lead"),
    alternates: pageAlternates("cookiePolicy", locale),
  };
}

export default async function CookiePolicyPage() {
  const t = await getTranslations("cookiePolicy");

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
      status: t("optional"),
    },
    {
      Icon: BarChart3,
      title: t("unusedTitle"),
      body: t("unusedBody"),
      detail: t("unusedDetail"),
      status: t("notUsed"),
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
            <CookieSettingsButton className="mt-6 inline-flex min-h-11 w-full items-center justify-center border border-[#19334F] bg-[#19334F] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-[#19334F]" />
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
          </div>
        </div>
      </section>
    </main>
  );
}
