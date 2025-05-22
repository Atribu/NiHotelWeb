"use client";

import { Menu,ChevronDown } from "lucide-react";
import { useTranslations } from 'next-intl';
import LangSwitcher from '@/LangSwitcher';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import { useState } from "react";
import { routing } from "@/i18n/routing";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import PhoneSvg from "../generalComponents/PhoneSvg";
import BellSvg from "../generalComponents/BellSvg";

export default function Header() {

  const t = useTranslations('Header');
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]?.toUpperCase(); // 🔹 dil kodu 'EN' gibi
  const [selectedLang, setSelectedLang] = useState(currentLocale || "EN"); // 🔹 state'e çek
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoomsOpen, setIsRoomsOpen] = useState(false);

  const router = useRouter();

  const handleLangChange = (lang) => {
    const currentLocale = pathname.split("/")[1];
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    const newPath = routing.getPathname(pathWithoutLocale, lang.toLowerCase());

    setSelectedLang(lang);
    setIsLangOpen(false);
    router.replace(`/${lang.toLowerCase()}${newPath}`);
  };

    // Link hover underline animasyonu
    const linkClasses = `
    relative
    before:content-['']
    before:absolute before:left-0 before:bottom-0
    before:h-[2px] before:w-0 before:bg-current
    before:transition-all before:duration-300
    hover:before:w-full py-[6px]
    hidden lg:flex items-center gap-2 uppercase text-sm -tracking-[0.55px] font-medium lg:text-[16px] leading-[20px] font-jost 
  `;

  return (
    <header className="fixed top-0 left-0 w-full max-w-screen z-[9999] bg-black/10 backdrop-blur-md text-white py-2">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">

        {/* Sol */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2  cursor-pointer" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6"  />
          <span className="uppercase text-sm lg:text-[16px] tracking-widest font-medium mr-2">{t("menu")}</span>
          </div>

          {/* Dil Menüsü */}
          <div className="relative hidden lg:flex">
          <LangSwitcher className="uppercase" />
          </div>
        </div>

        <div className="flex-1 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/">
            <Image src={NiHotelLogo} alt="logo" className="w-auto h-[65px] lg:h-[90px] mx-auto"/>
        </Link>
        </div>

        {/* Sağ */}
        <div className={linkClasses}>
        <Link href="https://nihotellara.rezervasyonal.com/en/?language=en"  target="_blank"
          rel="noopener noreferrer">{t("booknow")}
          </Link>
        <BellSvg className="flex" width={30} height={16} color="#fff"/>
        </div>

        <div className="flex lg:hidden">
          <LangSwitcher/>
        </div>
      </div>
      {/* Arka plan karartması */}
{isMenuOpen && (
  <div
    onClick={() => setIsMenuOpen(false)}
    className="fixed inset-0 bg-black/50 z-40"
  ></div>
)}

{/* Arka plan karartması */}
{isMenuOpen && (
  <div
    onClick={() => setIsMenuOpen(false)}
    className="fixed inset-0 bg-black/50 z-40"
  ></div>
)}

{/* Sidebar: Soldan gelen ve ekranın 1/3'ünü kaplayan */}
<div
  className={`fixed top-0 left-0 h-screen w-4/5 sm:w-2/3 md:w-1/3 min-w-[250px] max-w-sm bg-white text-black z-50 transform transition-transform duration-300 ease-in-out items-center justify-center ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  {/* Sağ üst kapatma butonu */}
  <button
    className="absolute top-5 right-5 text-3xl"
    onClick={() => setIsMenuOpen(false)}
  >
    ×
  </button>

  <div className="absolute top-5 left-5 "><LangSwitcher className="uppercase text-black" />  </div>

  <div className="w-full h-full items-center justify-between py-5 flex flex-col gap-4">
  <Link href="/">
            <Image src={NiHotelLogo} alt="logo" className="w-auto h-[70px] mx-auto"/>
        </Link>

  {/* Menü linkleri */}
  <nav className="flex flex-col items-start gap-6 mt-0 text-[16px] uppercase tracking-widest w-[70%] justify-start min-h-[300px]">
    {/* <Link href="/" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
    <Link href="/rooms" onClick={() => setIsMenuOpen(false)}>{t("rooms")}</Link> */}
    <Link href="/" onClick={() => setIsMenuOpen(false)}>
            {t("home")}
          </Link>

          {/* --- Rooms akordeon başlığı */}
          <div className="w-full ">
         <div className="w-full flex items-center justify-between">
         <Link href="/rooms" onClick={() => setIsMenuOpen(false)} >
            {t("rooms")}
          </Link>
         <button
              type="button"
              onClick={() => setIsRoomsOpen(prev => !prev)}
              className="flex w-auto justify-between items-center uppercase cursor-pointer"
            >
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isRoomsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
         </div>

            <div
  className={`
    mt-2
    overflow-hidden
    transition-all duration-700 ease-out
    ${isRoomsOpen
      ? "max-h-[200px]"
      : "max-h-0"
    }
  `}
>
  <div className="flex flex-col pl-4 space-y-3 text-[15px]">
    <Link href="/rooms/standardroom" onClick={() => {
        setIsMenuOpen(false);
        setIsRoomsOpen(false);
      }}
    >
      {t("standardRoom")}
    </Link>
    <Link href="/rooms/juniorroom" onClick={() => {
        setIsMenuOpen(false);
        setIsRoomsOpen(false);
      }}
    >
      {t("juniorRoom")}
    </Link>
    <Link href="/rooms/verandaroom" onClick={() => {
        setIsMenuOpen(false);
        setIsRoomsOpen(false);
      }}
    >
      {t("verandaRoom")}
    </Link>
    <Link href="/rooms/cornerroom" onClick={() => {
        setIsMenuOpen(false);
        setIsRoomsOpen(false);
      }}
    >
      {t("cornerRoom")}
    </Link>
  </div>
</div>
          </div>
    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t("contact")}</Link>
    <Link href="/about" onClick={() => setIsMenuOpen(false)}>{t("about")}</Link>
    <Link href="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
    <Link href="/kitchen" onClick={() => setIsMenuOpen(false)}>Kıtchen</Link>
  </nav>

<div className="flex flex-col w-full items-center justify-center mb-4 gap-4">
<div className="flex flex-col w-[80%] items-center justify-center">
<div className="flex items-center justify-center gap-[10px] text-center mb-[16px]">
  <PhoneSvg className="flex" width={22} height={22} color="#D9D9D9"/>
<Link className="text-[15px] text-black font-normal " href="tel:+902422121264">+90 242 212 12 64</Link>
</div>
<Link href="tel:+902422121264" className="flex items-center justify-center text-center py-[10px] px-[10px] lg:min-w-[274px] bg-[#00a1af] text-white text-[12px] md:text-[15px] font-semibold uppercase whitespace-nowrap">{t("letuscallyou")}</Link>
</div>
 {/* Sosyal ikonlar */}
 <div className="flex gap-5 text-black text-2xl">
    <a
      href="https://www.facebook.com/p/Ni-Hotel-Lara-100075601707373/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-lagoPink transition-transform hover:scale-110"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://www.instagram.com/nihotellara/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-lagoPink transition-transform hover:scale-110"
    >
      <FaInstagram />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-lagoPink transition-transform hover:scale-110"
    >
      <FaXTwitter />
    </a>
  </div>
</div>

 
  </div>
</div>
    </header>
  );
}