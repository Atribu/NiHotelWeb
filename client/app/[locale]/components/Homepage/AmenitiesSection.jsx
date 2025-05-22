// components/AmenitiesSection.jsx
"use client";

import { FaWifi, FaGift, FaCoffee } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { MdCleaningServices, MdPool } from "react-icons/md";
import { useTranslations } from 'next-intl';

export default function AmenitiesSection() {
  const t = useTranslations('Amenities');

  const amenities = [
    { Icon: FaWifi,           label: t("label1") },
    { Icon: FaGift,           label: t("label2") },
    { Icon: FaCoffee,         label: t("label3") },
    { Icon: GiPalmTree,       label: t("label4") },
    { Icon: MdCleaningServices, label: t("label5") },
  ];

  return (
    <section className="slats-section py-20 lg:py-56">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center  items-center justify-center">
        <h2 className="text-[24px] md:text-[27px] lg:text-3xl font-['Cormorant_Garamond'] font-bold mb-6">{t("amenities")}</h2>
        <p className="hidden lg:flex text-gray-600 mb-12 w-full items-center justify-center">
        {t("text")}
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {amenities.map(({ Icon, label }) => (
            <div
              key={label}
              className="w-20 h-20 lg:w-24 lg:h-24 bg-white border border-gray-200 flex flex-col items-center justify-center space-y-2 shadow-sm font-jost"
            >
              <Icon className="text-gray-400 w-5 h-5 lg:w-6 lg:h-6" />
              <span className="text-xs text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
