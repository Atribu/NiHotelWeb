// app/components/ContactSection.jsx
"use client";

import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export default function ContactSection() {
    const t = useTranslations('Contact');

  return (
    <section className="bg-white py-8 lg:py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col gap-12 items-center justify-center text-center">
        {/* LEFT: İletişim Bilgileri */}
        <div className="flex flex-col justify-center gap-2 md:gap-4 lg:gap-10 max-w-[1200px] items-center text-center  text-[14px] lg:text-[16px]">
          <h2 className="text-[28px] lg:text-[32px] font-semibold text-gray-800">
            {t("getintouch")}
          </h2>
          <p className="text-gray-600 w-[88%] lg:w-[70%]"> {t("text")}   
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 space-y-4 lg:w-[50%] items-center justify-center text-center">
            <li className="flex items-center gap-3 justify-center text-center">
              <FiPhone className="h-6 w-6 text-irenicBlack2" />
              <span className="text-gray-700">+90 123 456 78 90</span>
            </li>
            <li className="flex items-center gap-3 justify-center text-center">
              <FiMail className="h-6 w-6 text-irenicBlack2" />
              <span className="text-gray-700">info@nihotel.com</span>
            </li>
            <li className="flex items-center gap-3 justify-center text-center">
              <FiMail className="h-6 w-6 text-irenicBlack2" />
              <span className="text-gray-700">callcenter@nihotel.com</span>
            </li>
            <li className="flex items-center gap-3 justify-center text-center">
              <FiMapPin className="h-6 w-6 text-irenicBlack2" />
              <span className="text-gray-700">
                Çağlayan Mah. 1005 Sk. No:30 Muratpaşa/Antalya
              </span>
            </li>
          </ul>

          <div className="flex space-x-4 mt-4  ">
            <a href="https://www.facebook.com/" aria-label="Facebook">
              <FaFacebookF className="h-5 w-5 text-gray-500 hover:text-irenicBlack" />
            </a>
            <a href="https://x.com/" aria-label="Twitter">
              <FaTwitter className="h-5 w-5 text-gray-500 hover:text-irenicBlack" />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram">
              <FaInstagram className="h-5 w-5 text-gray-500 hover:text-irenicBlack" />
            </a>
            <a href="https://www.youtube.com/" aria-label="YouTube">
              <FaYoutube className="h-5 w-5 text-gray-500 hover:text-irenicBlack" />
            </a>
          </div>
        </div>

        {/* RIGHT: Harita */}
        <div className="w-full h-[300px] lg:h-[480px] overflow-hidden shadow-lg">
          <iframe
            title="NiHotel Location"
            src="https://www.google.com/maps?q=Ni%20Hotel%2C%20Antalya%2C%20Turkey&output=embed"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>
    </section>
);
}
