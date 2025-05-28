import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Jost, Geist, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CookiePopup from "./components/generalComponents/CookiePopup";
import BookSection from './components/generalComponents/BookSection'
import ChatManager from "./components/generalComponents/ChatManager";

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

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} ${cormorant.variable} ${jost.variable} antialiased`}>
      <head>
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
      <body className="overflow-x-hidden h-screen w-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <BookSection/>
          {children}
          <CookiePopup />
          <Footer />
          <ChatManager/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}