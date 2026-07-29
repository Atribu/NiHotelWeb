import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";
import CookieSettingsButton from "./CookieSettingsButton";

const footerLinks = [
  { key: "home", href: "/" },
  { key: "rooms", href: "/rooms" },
  { key: "about", href: "/about" },
  { key: "restaurant", href: "/restaurant" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

export default function SiteFooter() {
  const t = useTranslations("footer");
  const navigation = useTranslations("navigation");
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address.full,
  )}`;

  return (
    <footer className="relative overflow-hidden border-t border-[#19334F]/10 bg-white text-[#19334F]">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full border border-[#72809A]/10"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full border border-[#72809A]/10"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 pb-12 pt-14 sm:px-8 lg:px-10 lg:pb-16 lg:pt-20">
        <div className="grid gap-10 text-center md:grid-cols-2 md:text-left lg:grid-cols-[0.8fr_0.85fr_1.3fr_1fr] lg:gap-12">
          <div className="flex flex-col items-center md:items-start">
            <Link
              aria-label={`${site.name} — ${navigation("home")}`}
              className="inline-flex"
              href="/"
            >
              <Image
                alt={site.name}
                className="h-28 w-auto object-contain"
                height={130}
                src={site.images.logo}
                width={85}
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#19334F]/60">
              {t("tagline")}
            </p>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#72809A]">
              {t("quickLinks")}
            </h2>
            <nav
              aria-label={t("quickLinks")}
              className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm md:grid-cols-1"
            >
              {footerLinks.map((item) => (
                <Link
                  className="w-fit justify-self-center text-[#19334F]/68 transition-colors hover:text-[#19334F] md:justify-self-start"
                  href={item.href}
                  key={item.key}
                >
                  {navigation(item.key)}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#72809A]">
              {t("contact")}
            </h2>
            <address className="mt-5 space-y-4 text-sm not-italic text-[#19334F]/68">
              <a
                className="flex items-start justify-center gap-3 text-left transition-colors hover:text-[#19334F] md:justify-start"
                href={mapHref}
                rel="noreferrer"
                target="_blank"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#19334F]/10 bg-[#F7F5F0]">
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                </span>
                <span className="max-w-xs pt-1.5 leading-5">{site.address.full}</span>
              </a>
              <a
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#19334F] md:justify-start"
                href={site.phone.href}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#19334F]/10 bg-[#F7F5F0]">
                  <Phone aria-hidden="true" className="h-4 w-4" />
                </span>
                {site.phone.display}
              </a>
              <a
                className="flex items-center justify-center gap-3 transition-colors hover:text-[#19334F] md:justify-start"
                href={`mailto:${site.email}`}
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center border border-[#19334F]/10 bg-[#F7F5F0]">
                  <Mail aria-hidden="true" className="h-4 w-4" />
                </span>
                {site.email}
              </a>
            </address>
          </div>

          <div>
            <h2 className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#72809A]">
              {navigation("restaurant")}
            </h2>
            <p
              className="mt-5 text-2xl font-medium leading-tight text-[#19334F]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              {site.restaurant.name}
            </p>
            <div className="mt-5 flex flex-col items-center gap-3 text-sm text-[#19334F]/68 md:items-start">
              <a className="transition-colors hover:text-[#19334F]" href={site.restaurant.phoneHref}>
                {site.restaurant.phone}
              </a>
              <a
                className="inline-flex items-center gap-2 transition-colors hover:text-[#19334F]"
                href={site.restaurant.instagramHref}
                rel="noreferrer"
                target="_blank"
              >
                <Instagram aria-hidden="true" className="h-4 w-4" />
                {site.restaurant.instagram}
              </a>
              <Link
                className="mt-2 inline-flex min-h-10 items-center border border-[#19334F]/20 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-[#19334F] hover:text-white"
                href="/restaurant"
              >
                {navigation("restaurant")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid items-center gap-4 border-t border-[#19334F]/10 pt-6 text-center text-xs text-[#19334F]/45 md:grid-cols-[1fr_auto_1fr] md:text-left">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("rights")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[#19334F]/65">
            <Link
              className="transition-colors hover:text-[#19334F]"
              href="/certificates"
            >
              {t("certificates")}
            </Link>
            <Link
              className="transition-colors hover:text-[#19334F]"
              href="/cookie-policy"
            >
              {t("cookiePolicy")}
            </Link>
            <CookieSettingsButton>
              {t("cookieSettings")}
            </CookieSettingsButton>
          </div>
          <p className="md:text-right">{t("materialNote")}</p>
        </div>
      </div>
    </footer>
  );
}
