"use client";

import { Menu } from "lucide-react";
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

  const router = useRouter();

  const handleLangChange = (lang) => {
    const currentLocale = pathname.split("/")[1];
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";
    const newPath = routing.getPathname(pathWithoutLocale, lang.toLowerCase());

    setSelectedLang(lang);
    setIsLangOpen(false);
    router.replace(`/${lang.toLowerCase()}${newPath}`);
  };

  return (
    <header className="fixed top-0 left-0 w-full max-w-screen z-[9999] bg-black/10 backdrop-blur-md text-white py-2">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Sol */}
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
          <span className="uppercase text-sm lg:text-[16px] tracking-widest font-medium mr-2">{t("menu")}</span>

          {/* Dil Menüsü */}
          <div className="relative hidden lg:flex">
          <LangSwitcher className="uppercase" />
{/* 
            {isLangOpen && (
              <ul className="absolute left-0 mt-2 w-24 bg-black/80 backdrop-blur-md text-white rounded-md shadow-lg text-center z-50">
                {["EN", "TR", "DE", "RU"]
                .filter((lang) => lang !== selectedLang) // şu anki dili çıkar
                .map((lang) => (
                    <li
                    key={lang}
                    onClick={() => handleLangChange(lang)}
                    className="px-2 py-2 hover:bg-white hover:text-black cursor-pointer"
                    >
                    {lang}
                    </li>
                ))}
              </ul>
            )} */}
          </div>
        </div>

        <div className="flex-1 text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link href="/">
            <Image src={NiHotelLogo} alt="logo" className="w-auto h-[65px] lg:h-[90px] mx-auto"/>
        </Link>
        </div>

        {/* Sağ */}
        <div className="hidden lg:flex items-center gap-2 uppercase text-sm -tracking-[0.55px] font-medium lg:text-[16px] leading-[20px] font-jost">
        <span>{t("booknow")}</span>
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

  <Link href="/">
            <Image src={NiHotelLogo} alt="logo" className="w-auto h-[90px] mx-auto"/>
        </Link>

  {/* Menü linkleri */}
  <nav className="flex flex-col items-start gap-6 p-8 mt-0 text-lg uppercase tracking-widest">
    <Link href="/" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
    <Link href="/rooms" onClick={() => setIsMenuOpen(false)}>{t("rooms")}</Link>
    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t("contact")}</Link>
    <Link href="/about" onClick={() => setIsMenuOpen(false)}>{t("about")}</Link>
  </nav>

<div className="flex w-full items-center justify-center mt-20 lg:mt-72">
<div className="flex flex-col w-[80%] items-center justify-center">
<div className="flex items-center justify-center gap-[10px] text-center  mb-[16px]">
  <PhoneSvg className="flex" width={22} height={22} color="#D9D9D9"/>
<Link className="text-[15px] text-black font-normal " href="tel:+902423243742">+90 242 324 37 42</Link>
</div>
<button className="flex items-center justify-center text-center py-[10px] px-[10px] md:w-[274px] bg-gray-600 text-white text-[12px] md:text-[15px] font-semibold uppercase">{t("letuscallyou")}</button>
</div>
</div>

  {/* Sosyal ikonlar */}
  <div className="absolute bottom-6 left-8 flex gap-5 text-black text-2xl">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-lagoPink transition-transform hover:scale-110"
    >
      <FaFacebookF />
    </a>
    <a
      href="https://instagram.com"
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
    </header>
  );
}