// components/BookSection.jsx
"use client";
import React, { useState, useEffect, useRef } from 'react';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import ChatWidget from './ChatWidget';

export default function BookSection() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [canShowChat, setCanShowChat] = useState(true);
  const launcherRef = useRef(null);

  // // Dil veya rota değişince sohbeti kapat
  // useEffect(() => {
  //   setIsChatOpen(false);
  // }, [locale, pathname]);

  const readPrefs = () => {
    try {
      const prefs = JSON.parse(localStorage.getItem("cookiePreferences") || "{}");
      setCanShowChat(Boolean(prefs.targeting ?? true));
    } catch {
      setCanShowChat(true);
    }
  };

  // Mount olurken ve "cookiePrefsChanged" event’inde oku
  useEffect(() => {
    readPrefs();
    const handler = () => readPrefs();
    window.addEventListener("cookiePrefsChanged", handler);
    return () => window.removeEventListener("cookiePrefsChanged", handler);
  }, []);


  const launcher = (
    <div
          ref={launcherRef}
          className={`
            fixed bottom-6 right-6
            bg-[#dec7a6] text-white
            px-4 py-2 rounded-full shadow-lg cursor-pointer
            transition-opacity duration-[3000ms]
            ${isChatOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          `}
          onClick={() => setIsChatOpen((o) => !o)}
           
          >
           {t("chat")}
          </div>
  )

  return (
    <div className='fixed flex bottom-6 left-0 lg:left-1 z-[980] w-full'>
      <div className='flex justify-between items-center w-full'>
        {/* Telefon butonu */}
        <Link href="tel:+02422121264" className='flex w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] relative rounded-full border-white border ml-6 lg:ml-7 text-white bg-black/70 hover:bg-white hover:border-black hover:text-[#dec7a6] items-center justify-center animate-zoom cursor-pointer'>
            <LiaPhoneVolumeSolid className="z-[9999] wiggle-phone" size={36} />
          <div className="absolute w-[51px] h-[51px] lg:w-[61px] lg:h-[61px] bg-transparent border border-white rounded-full pulse-ring"></div>
        </Link>

        {/* Sohbet butonu: sadece sohbet kapalıyken göster */}

        {canShowChat && launcher}
        {/* ChatWidget yalnızca açıkken */}
        {isChatOpen && <ChatWidget />}
      </div>
    </div>
  );
}
