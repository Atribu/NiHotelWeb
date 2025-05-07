"use client";

import { Menu, Sun } from "lucide-react";
import { useTranslations } from 'next-intl';
import LangSwitcher from '@/LangSwitcher';
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import { useState } from "react";
import { routing } from "@/i18n/routing";
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

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
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Sol */}
        <div className="flex items-center gap-4">
          <Menu className="w-6 h-6 cursor-pointer" onClick={() => setIsMenuOpen(true)} />
          <span className="uppercase text-sm tracking-widest">Menu</span>

          {/* Dil Menüsü */}
          <div className="relative">
          <LangSwitcher className="uppercase" />

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
            )}
          </div>
        </div>

        <div className="flex-1 text-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
        <Link href="/">
            <Image src={NiHotelLogo} className="w-[120px] h-auto mx-auto"/>
        </Link>
        </div>

        {/* Sağ */}
        <div className="hidden md:flex items-center gap-2 uppercase text-sm tracking-widest">
        <span>{t("booknow")}</span>
        <Sun className="w-5 h-5" />
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
  className={`fixed top-0 left-0 h-screen w-4/5 sm:w-2/3 md:w-1/3 min-w-[250px] max-w-sm bg-black text-white z-50 transform transition-transform duration-300 ease-in-out ${
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

  {/* Menü linkleri */}
  <nav className="flex flex-col items-start gap-6 p-8 mt-20 text-lg uppercase tracking-widest">
    <Link href="/" onClick={() => setIsMenuOpen(false)}>{t("home")}</Link>
    <Link href="/rooms" onClick={() => setIsMenuOpen(false)}>{t("rooms")}</Link>
    <Link href="/beachpools" onClick={() => setIsMenuOpen(false)}>{t("nihotel")}</Link>
    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>{t("kitchen")}</Link>
  </nav>

  {/* Sosyal ikonlar */}
  <div className="absolute bottom-6 left-8 flex gap-5 text-white text-2xl">
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