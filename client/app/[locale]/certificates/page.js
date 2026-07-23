import Image from "next/image";
import { Download, ExternalLink, FileCheck2 } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { pageAlternates } from "@/lib/routes";
import { site } from "@/lib/site";

const certificateFiles = [
  {
    key: "sustainableTourism",
    file: "/teona/certificates/sustainable-tourism-certificate.pdf",
    preview:
      "/teona/certificates/previews/sustainable-tourism-certificate.png",
  },
  {
    key: "zeroWaste",
    file: "/teona/certificates/zero-waste-certificate.pdf",
    preview: "/teona/certificates/previews/zero-waste-certificate.png",
  },
  {
    key: "kvkk",
    file: "/teona/certificates/kvkk-compliance-certificate.pdf",
    preview:
      "/teona/certificates/previews/kvkk-compliance-certificate.png",
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificates" });

  return {
    title: `${t("title")} | ${site.name}`,
    description: t("lead"),
    alternates: pageAlternates("certificates", locale),
  };
}

export default async function CertificatesPage({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "certificates" });

  return (
    <main id="main-content" className="bg-white text-[#30343A]">
      <section className="relative isolate overflow-hidden bg-[#19334F] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-10 lg:pb-20 lg:pt-40">
        <div
          aria-hidden="true"
          className="absolute -right-40 -top-56 h-[38rem] w-[38rem] rounded-full border border-white/10"
        />
        <div
          aria-hidden="true"
          className="absolute -right-14 -top-28 h-[24rem] w-[24rem] rounded-full border border-white/10"
        />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex h-12 w-12 items-center justify-center border border-white/20 text-[#dec7a6]">
            <FileCheck2
              aria-hidden="true"
              className="h-6 w-6"
              strokeWidth={1.5}
            />
          </span>
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#dec7a6]">
            {t("eyebrow")}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="mt-7 max-w-3xl text-sm leading-7 text-white/78 sm:text-base">
            {t("lead")}
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
              {t("documentsEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
              {t("documentsTitle")}
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#59616C]">
              {t("documentsBody")}
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {certificateFiles.map(({ file, key, preview }) => (
              <article
                className="flex min-w-0 flex-col border border-[#19334F]/12 bg-[#F7F5F1]"
                key={key}
              >
                <a
                  aria-label={`${t(`${key}.title`)} — ${t("viewPdf")}`}
                  className="group relative flex aspect-[4/5] items-center justify-center overflow-hidden border-b border-[#19334F]/10 bg-white p-5"
                  href={file}
                  rel="noreferrer"
                  target="_blank"
                >
                  <Image
                    alt={t(`${key}.previewAlt`)}
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    fill
                    sizes="(min-width: 1024px) 31vw, 100vw"
                    src={preview}
                  />
                  <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center bg-[#19334F] text-white shadow-lg">
                    <ExternalLink
                      aria-hidden="true"
                      className="h-4 w-4"
                      strokeWidth={1.7}
                    />
                  </span>
                </a>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#a78b63]">
                    {t("pdfDocument")}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#19334F]">
                    {t(`${key}.title`)}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-[#59616C]">
                    {t(`${key}.description`)}
                  </p>

                  <dl className="mt-6 space-y-4 border-t border-[#19334F]/10 pt-5 text-sm">
                    <div>
                      <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#72809A]">
                        {t("issuer")}
                      </dt>
                      <dd className="mt-1.5 leading-6 text-[#19334F]/75">
                        {t(`${key}.issuer`)}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#72809A]">
                        {t("validity")}
                      </dt>
                      <dd className="mt-1.5 leading-6 text-[#19334F]/75">
                        {t(`${key}.validity`)}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-auto grid gap-2 pt-7 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <a
                      className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#19334F] bg-[#19334F] px-4 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-[#19334F]"
                      href={file}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t("viewPdf")}
                      <ExternalLink
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </a>
                    <a
                      className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#19334F]/25 px-4 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-[#19334F] transition-colors hover:border-[#19334F] hover:bg-white"
                      download
                      href={file}
                    >
                      {t("downloadPdf")}
                      <Download
                        aria-hidden="true"
                        className="h-3.5 w-3.5"
                      />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 border-l-2 border-[#dec7a6] pl-5 text-xs leading-6 text-[#7A828C]">
            {t("verificationNote")}
          </p>
        </div>
      </section>
    </main>
  );
}
