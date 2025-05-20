// components/Footer.jsx
"use client";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram
} from 'react-icons/fa';
import DgtlfaceSvg from "../generalComponents/DgtlfaceSvg";
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('Footer');

  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <Image
              src={NiHotelLogo}
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>
          
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
            {/* Hızlı Linkler */}
            <div className="flex flex-col items-center lg:items-start space-y-2">
            <a href="/about" className="text-gray-600 hover:text-gray-800">{t("aboutus")}</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">{t("contactus")}</a>
            <a href="/gallery" className="text-gray-600 hover:text-gray-800">{t("gallery")}</a>
          </div>
          
          {/* Politikalar */}
          <div className="flex flex-col items-center lg:items-start space-y-2 lg:border-l lg:border-gray-200 lg:pl-8">
            <a href="/cookie-policy" className="text-gray-600 hover:text-gray-800">{t("cookiePolicy")}</a>
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800">{t("privacyPolicy")}</a>
            <a href="/fact-sheet" className="text-gray-600 hover:text-gray-800">{t("factsheet")}</a>
          </div>
      </div>
          
          {/* İletişim Bilgileri */}
          <div className="flex flex-col items-center lg:items-start space-y-3 lg:border-l lg:border-gray-200 lg:pl-8 text-center">
            <a href="tel:++902422121264" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaPhone className="mr-2" />+90 242 212 12 64
            </a>
            <a href="tel:+902423243742" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaPhone className="mr-2" />+90 242 324 37 42
            </a>
            <a href="mailto:callcenter@nihotellara.com" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaEnvelope className="mr-2" />callcenter@nihotellara.com
            </a>
            <div className="flex items-start text-gray-600">
              <FaMapMarkerAlt className="mt-1 mr-2" />
              Çağlayan Mah. 2005 Sk. No: 30 PK - 7230 Muratpaşa/Antalya
            </div>
          </div>
          
          {/* Sosyal Medya */}
          <div className="flex justify-center lg:justify-start items-center space-x-4 lg:border-l lg:border-gray-200 lg:pl-8">
            <a href="https://www.facebook.com/p/Ni-Hotel-Lara-100075601707373/" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/nihotellara/" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Alt Powered By */}
        <div className="flex items-center justify-center mt-10 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          Powered by © <DgtlfaceSvg className="flex" width={104} height={27}/>
        </div>
      </div>
    </footer>
  );
}
