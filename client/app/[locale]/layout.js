import "../globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { site } from "@/lib/site";
import SiteFooter from "./components/teona/SiteFooter";
import SiteHeader from "./components/teona/SiteHeader";
import FloatingActions from "./components/teona/FloatingActions";
import ConnexeaseLiveChat from "./components/teona/ConnexeaseLiveChat";
import CookieConsentProvider from "./components/teona/CookieConsentProvider";

const jost = Jost({
  subsets: ["latin", "latin-ext", "cyrillic"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const skipLabels = {
  tr: "İçeriğe geç",
  en: "Skip to content",
  de: "Zum Inhalt springen",
  ru: "Перейти к содержанию",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    return {};
  }

  const t = await getTranslations({ locale, namespace: "meta" });

  return {
    metadataBase: new URL(site.url),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/teona/apple-touch-icon.png",
    },
    openGraph: {
      type: "website",
      locale,
      siteName: site.name,
      title: t("title"),
      description: t("description"),
      images: [
        {
          url: site.images.hero,
          width: 2048,
          height: 1363,
          alt: site.name,
        },
      ],
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${jost.variable} ${cormorant.variable}`}
    >
      <body
        className="overflow-x-hidden bg-[#f7f4ee] text-[#19334F] antialiased"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CookieConsentProvider>
            <a
              href="#main-content"
              className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-sm bg-white px-4 py-3 text-sm font-semibold text-[#19334F] shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#72809A]"
            >
              {skipLabels[locale]}
            </a>
            <ConnexeaseLiveChat />
            <SiteHeader />
            <FloatingActions />
            {children}
            <SiteFooter />
          </CookieConsentProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
