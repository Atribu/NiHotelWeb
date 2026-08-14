import Image from "next/image";
import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import {
  ArrowUpRight,
  BedDouble,
  Building2,
  CarFront,
  Check,
  MapPin,
  Phone,
  Wifi,
} from "lucide-react";
import { localizedPaths } from "@/lib/routes";
import {
  getIzmitLandingPage,
  izmitLandingPageSlugs,
} from "@/lib/izmitLandingPages";
import { site } from "@/lib/site";
import { faqStructuredData } from "@/lib/structuredData";
import BookingBar from "../components/teona/BookingBar";
import FaqSection from "../components/teona/FaqSection";
import JsonLd from "../components/teona/JsonLd";

const roomLinks = [
  {
    name: "Eko Oda",
    href: "/tr/odalar/eko-oda",
    image: site.images.economyRoom3,
    note: "Pratik şehir konaklaması",
  },
  {
    name: "French Oda",
    href: "/tr/odalar/french-oda",
    image: site.images.frenchRoom3,
    note: "French yatak düzeni",
  },
  {
    name: "Süit Oda",
    href: "/tr/odalar/suit-oda",
    image: site.images.suiteRoom3,
    note: "Geniş alan ve teras",
  },
  {
    name: "Triple Oda",
    href: "/tr/odalar/triple-oda",
    image: site.images.tripleRoom4,
    note: "Üç kişilik yerleşim",
  },
  {
    name: "Twin Oda",
    href: "/tr/odalar/twin-oda",
    image: site.images.twinRoom3,
    note: "Ayrı yatak düzeni",
  },
];

const benefits = [
  { icon: Building2, value: "44", label: "Oda" },
  { icon: Wifi, value: "Ücretsiz", label: "Wi-Fi" },
  { icon: CarFront, value: "Ücretsiz", label: "Otopark" },
  { icon: MapPin, value: "İzmit", label: "Merkezi konum" },
];

export function generateStaticParams() {
  return izmitLandingPageSlugs.map((landing) => ({ landing }));
}

export async function generateMetadata({ params }) {
  const { landing, locale } = await params;
  const page = getIzmitLandingPage(landing);

  if (!page || locale !== "tr") return {};

  const canonical = `${site.url}/tr/${landing}`;
  const imageUrl = new URL(site.images[page.image], site.url).toString();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url: canonical,
      siteName: site.name,
      locale: "tr_TR",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: imageUrl, alt: page.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function IzmitLandingPage({ params }) {
  const { landing, locale } = await params;
  const page = getIzmitLandingPage(landing);

  if (!page) notFound();
  if (locale !== "tr") redirect(localizedPaths.home[locale] ?? localizedPaths.home.tr);

  const canonical = `${site.url}/tr/${landing}`;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;
  const bookingHref = `${site.bookingUrl}?language=tr`;
  const heroImage = site.images[page.image];

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: `${site.url}${localizedPaths.home.tr}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.keyword,
        item: canonical,
      },
    ],
  };

  const webPageData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: page.metaTitle,
    description: page.metaDescription,
    inLanguage: "tr-TR",
    about: { "@id": `${site.url}/#hotel` },
    primaryImageOfPage: new URL(heroImage, site.url).toString(),
  };

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <JsonLd data={breadcrumbData} />
      <JsonLd data={webPageData} />
      <JsonLd data={faqStructuredData({ items: page.faqItems })} />

      <section className="relative isolate flex min-h-[68vh] items-center justify-center overflow-hidden px-5 pb-16 pt-36 text-center sm:px-8 lg:min-h-[76vh] lg:px-12">
        <Image
          alt={`${page.keyword} için Teona Hotel`}
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,12,20,0.68),rgba(4,12,20,0.47)_48%,rgba(4,12,20,0.72))]" />
        <div className="relative mx-auto max-w-5xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E6D3B4]">
            {page.eyebrow}
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl font-display text-[2.75rem] font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            {page.title}
          </h1>
          <p className="mx-auto mt-7 max-w-3xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
            {page.lead}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F] transition-colors hover:bg-[#E6D3B4]"
              href="#rezervasyon"
            >
              Tarihleri seç
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center border border-white/70 bg-black/10 px-7 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-[#19334F]"
              href={site.phone.href}
            >
              <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
              {site.phone.local}
            </a>
          </div>
        </div>
      </section>

      <div id="rezervasyon" className="scroll-mt-24 border-b border-black/8 bg-[#F7F5F1] px-4 py-5 sm:px-7 lg:px-10">
        <BookingBar embedded source={`seo_landing_${landing}`} />
      </div>

      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[#19334F]/12 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, label, value }) => (
            <div className="flex min-h-36 flex-col items-center justify-center bg-white px-4 py-7 text-center" key={label}>
              <Icon aria-hidden="true" className="h-5 w-5 text-[#A78B63]" strokeWidth={1.5} />
              <strong className="mt-4 font-display text-2xl font-semibold text-[#19334F]">{value}</strong>
              <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.17em] text-[#68717B]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A78B63]">{page.keyword}</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#19334F] sm:text-5xl">
              {page.introTitle}
            </h2>
            <div className="mt-7 space-y-5 text-sm leading-8 text-[#59616C] sm:text-base">
              {page.introParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Merkezi konum", "Beş oda tipi", "Doğrudan rezervasyon"].map((item) => (
                <span className="inline-flex items-center gap-2 border border-[#19334F]/12 bg-[#F7F5F1] px-4 py-2 text-xs font-medium text-[#19334F]" key={item}>
                  <Check aria-hidden="true" className="h-3.5 w-3.5 text-[#A78B63]" />
                  {item}
                </span>
              ))}
            </div>
          </article>

          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden bg-[#ECEBE8]">
              <Image alt="Teona Hotel dış görünümü" className="object-cover" fill sizes="(min-width: 1024px) 46vw, 100vw" src={site.images.exteriorAngle} />
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#ECEBE8]">
              <Image alt="Teona Hotel oda görünümü" className="object-cover" fill sizes="(min-width: 1024px) 23vw, 50vw" src={site.images.roomDouble} />
            </div>
            <div className="relative aspect-square overflow-hidden bg-[#ECEBE8]">
              <Image alt="Teona Hotel ortak alanı" className="object-cover" fill sizes="(min-width: 1024px) 23vw, 50vw" src={site.images.corridor} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A78B63]">Karar rehberi</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">{page.focusTitle}</h2>
          </div>
          <div className="mt-12 grid gap-px bg-[#19334F]/15 lg:grid-cols-3">
            {page.focusCards.map(({ body, title }, index) => (
              <article className="min-h-64 bg-white p-7 sm:p-9" key={title}>
                <span className="text-xs font-semibold tracking-[0.16em] text-[#A78B63]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-[#19334F] sm:text-3xl">{title}</h3>
                <p className="mt-5 text-sm leading-8 text-[#59616C]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {page.editorialSections.map((section, sectionIndex) => {
        const imagePanel = (
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden bg-[#ECEBE8]">
              <Image
                alt={section.imageAlts[0]}
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                fill
                loading={sectionIndex === 0 ? "eager" : "lazy"}
                sizes="(min-width: 1024px) 46vw, 100vw"
                src={site.images[section.images[0]]}
              />
            </div>
            {section.images.slice(1).map((image, imageIndex) => (
              <div className="relative aspect-[4/3] overflow-hidden bg-[#ECEBE8]" key={image}>
                <Image
                  alt={section.imageAlts[imageIndex + 1]}
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  fill
                  loading={sectionIndex === 0 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 23vw, 50vw"
                  src={site.images[image]}
                />
              </div>
            ))}
          </div>
        );

        return (
          <section
            className={`${sectionIndex % 2 === 0 ? "bg-white" : "bg-[#F7F5F1]"} px-5 py-16 sm:px-8 lg:px-10 lg:py-24`}
            key={section.title}
          >
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <article className={sectionIndex % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A78B63]">
                  {section.eyebrow}
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-[#19334F] sm:text-5xl">
                  {section.title}
                </h2>
                <div className="mt-7 space-y-5 text-sm leading-8 text-[#59616C] sm:text-base">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                  {section.points.map((point) => (
                    <li className="flex min-h-14 items-center gap-3 border border-[#19334F]/12 bg-white/75 px-4 py-3 text-xs font-medium leading-5 text-[#19334F]" key={point}>
                      <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-[#A78B63]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
              <div className={sectionIndex % 2 === 1 ? "lg:order-1" : undefined}>
                {imagePanel}
              </div>
            </div>
          </section>
        );
      })}

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#A78B63]">Oda seçenekleri</p>
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">Konaklamanıza uygun odayı inceleyin</h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">Beş oda tipinin fotoğraflarını ve özelliklerini karşılaştırın; ardından tarihlerinize göre güncel uygunluğu kontrol edin.</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {roomLinks.map((room) => (
              <Link className="group border border-black/10 bg-white" href={room.href} key={room.name}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#ECEBE8]">
                  <Image alt={`${room.name} - Teona Hotel`} className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" src={room.image} />
                </div>
                <div className="p-5">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#A78B63]">{room.note}</p>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#19334F]">{room.name}</h3>
                  <span className="mt-4 inline-flex items-center text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-[#19334F]">Odayı incele <ArrowUpRight aria-hidden="true" className="ml-2 h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#19334F] px-5 py-16 text-white sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.23em] text-[#E6D3B4]">Konaklama planı</p>
            <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">{page.planningTitle}</h2>
            <p className="mt-6 max-w-3xl text-sm leading-8 text-white/75 sm:text-base">{page.planningBody}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="inline-flex min-h-12 items-center justify-center bg-white px-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#19334F] transition-colors hover:bg-[#E6D3B4]" href="/tr/sehir-rehberi">Şehir rehberini aç</Link>
            <a className="inline-flex min-h-12 items-center justify-center border border-white/55 px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white hover:text-[#19334F]" href={mapHref} rel="noreferrer" target="_blank">Haritada görüntüle <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <FaqSection eyebrow="Sık sorulan sorular" items={page.faqItems} title={`${page.keyword} hakkında`} />

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-5xl border border-[#19334F]/12 bg-[#F7F5F1] px-6 py-12 text-center sm:px-10">
          <BedDouble aria-hidden="true" className="mx-auto h-7 w-7 text-[#A78B63]" strokeWidth={1.4} />
          <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">İzmit konaklamanız için tarihleri seçin</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#59616C] sm:text-base">Güncel oda seçeneklerini ve rezervasyon koşullarını kendi giriş-çıkış tarihlerinizle görüntüleyin.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a className="inline-flex min-h-12 items-center justify-center bg-[#19334F] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#10273D]" href={bookingHref}>Rezervasyona geç <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" /></a>
            <Link className="inline-flex min-h-12 items-center justify-center border border-[#19334F] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white" href="/tr/iletisim">İletişim bilgileri</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
