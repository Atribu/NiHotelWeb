"use client"
import React, {useState, useEffect} from 'react';
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import Link from 'next/link';
import Script from 'next/script';
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl';

const BookSection = () => {
  const t = useTranslations('Header');

  const locale = useLocale()
  const [showChat, setShowChat] = useState(true)

  // locale değiştiğinde chat’i önce kaldırıp sonra yeniden ekle
  useEffect(() => {
    setShowChat(false)
    const t = setTimeout(() => setShowChat(true), 0)
    return () => clearTimeout(t)
  }, [locale])

  return (
    <div className='fixed flex bottom-10 left-0 lg:left-4 md:bottom-6 lg:bottom-7 z-[980] w-full'>
      <div className='flex justify-between items-center '>
        <Link href="tel:+02422121264" className='flex w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] relative rounded-full border-white border ml-6 lg:ml-7 text-white bg-black/70 hover:bg-white hover:border-black hover:text-[#dec7a6] items-center justify-center animate-zoom cursor-pointer'>
            <LiaPhoneVolumeSolid className="z-[9999] wiggle-phone" size={36} />
          <div className="absolute w-[51px] h-[51px] lg:w-[61px] lg:h-[61px] bg-transparent border border-white rounded-full pulse-ring"></div>
        </Link>

        <a
          href="https://nihotellara.rezervasyonal.com/en/?currency=EUR&language=en&hideLayout=1&Checkin=2025-05-14&Checkout=2025-05-15&Adult=3&child=0&ChildAges="
          target="_blank"
          rel="noopener noreferrer"
          className='flex md:hidden whitespace-nowrap text-white bg-black py-[8px] px-[24px] absolute left-1/2 -translate-x-1/2 cursor-pointer'
        >
          {t("booknow")}
        </a>
        <div className="fixed bottom-5 right-10 z-[9999]">
        {showChat && (
          <Script
            src="https://cdn.livechat.connexease.com/embed.js"
            strategy="afterInteractive"
            onLoad={() => {
              window.ConnexeaseWebMessenger?.Init('5f90e4a6-6481-4263-b814-ec81ca1d4cde', {
                  position: 'bottom-right'
              })
              
            }}
            // key locale değiğiğinde Script’i unmount ↔ mount etmek için
            key={locale + String(showChat)}
          />
        )}
      </div>
      </div>
    </div>
  );
};

export default BookSection;


//5f90e4a6-6481-4263-b814-ec81ca1d4cde
// href="https://nihotellara.rezervasyonal.com/en/?currency=EUR&language=en&hideLayout=1&Checkin=2025-05-14&Checkout=2025-05-15&Adult=3&child=0&ChildAges="