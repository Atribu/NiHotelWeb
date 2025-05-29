import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Jost, Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookiePopup from "./components/generalComponents/CookiePopup";
import BookSection from './components/generalComponents/BookSection'
import ChatManager from "./components/generalComponents/ChatManager";
import Script from 'next/script';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ["400", "500","600", "700"],
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ["400", "500","600", "700"],
  variable: "--font-jost",
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Ni Hotel",
  description: "Ni Hotel",

  icons: {
    icon: '/NiHotel.svg',      
    shortcut: '/NiHotel.svg',  
    apple: '/NiHotel.svg'     
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID

  if (!routing.locales.includes(locale)) {
    notFound();
  }

     // 1) Gelen locale bilgisini Next Intl’in store’una yazıyoruz
     setRequestLocale(locale)

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${jost.variable} antialiased`}>
      <head>
          {/* 1) gtag.js kütüphanesini yükleyin */}
          <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        {/* 2) Google Tag yapılandırmasını yapın */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{
              page_path: window.location.pathname
            });
          `}
        </Script>

        <Script id="gtm-head" strategy="beforeInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'? '&l='+l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>

        {/* Chat script'i sabit olarak layout'ta bırakıyoruz */}
        <script 
          src="https://cdn.livechat.connexease.com/embed.js" 
          async 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Chat'i ilk yüklemede başlat
              document.addEventListener('DOMContentLoaded', function() {
                function initChat() {
                  if (window.ConnexeaseWebMessenger && window.ConnexeaseWebMessenger.Init) {
                    try {
                      window.ConnexeaseWebMessenger.Init('5f90e4a6-6481-4263-b814-ec81ca1d4cde', {
                        position: 'bottom-right'
                      });
                      console.log('Initial chat loaded');
                    } catch (error) {
                      console.error('Initial chat load error:', error);
                    }
                  } else {
                    setTimeout(initChat, 500);
                  }
                }
                
                setTimeout(initChat, 1000);
              });
            `
          }}
        />
      </head>
      <body className="overflow-x-hidden">
         {/* ② Body açıldıktan hemen sonra noscript iframe */}
         <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <BookSection/>
          {children}
          <CookiePopup />
          <Footer />
          {/* <ChatManager/> */}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}