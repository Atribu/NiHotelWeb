import "../globals.css";
import { Cormorant_Garamond, Jost } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`(function(w,d,s,l,i){
w[l]=w[l]||[];
w.gtag=w.gtag||function(){w[l].push(arguments);};
var preferences={analytics:false,marketing:false,liveSupport:false};
try{
  var prefix='teona_cookie_consent=';
  var cookies=d.cookie.split('; ');
  for(var c=0;c<cookies.length;c++){
    if(cookies[c].indexOf(prefix)===0){
      var stored=JSON.parse(decodeURIComponent(cookies[c].slice(prefix.length)));
      if(stored.version===3&&stored.preferences){
        preferences.analytics=stored.preferences.analytics===true;
        preferences.marketing=stored.preferences.marketing===true;
        preferences.liveSupport=stored.preferences.liveSupport===true;
      }
      break;
    }
  }
}catch(e){}
var analyticsState=preferences.analytics?'granted':'denied';
var marketingState=preferences.marketing?'granted':'denied';
w.gtag('consent','default',{
  analytics_storage:analyticsState,
  ad_storage:marketingState,
  ad_user_data:marketingState,
  ad_personalization:marketingState,
  wait_for_update:500
});
w[l].push({
  event:'teona_consent_default',
  analytics_consent:analyticsState,
  marketing_consent:marketingState,
  live_support_consent:preferences.liveSupport?'granted':'denied'
});
w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5SCH6RWM');`}
        </Script>
      </head>
      <body
        className="overflow-x-hidden bg-[#f7f4ee] text-[#19334F] antialiased"
        style={{ fontFamily: "var(--font-jost)" }}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5SCH6RWM"
            height="0"
            width="0"
            title="Google Tag Manager"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
