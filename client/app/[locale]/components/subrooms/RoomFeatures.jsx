// components/RoomFeatures.jsx
"use client";

import wifi from "../../../../public/images/rooms/wifi.png"
import toilet from "../../../../public/images/rooms/toilet.png"
import showerphone from "../../../../public/images/rooms/showerphone.png"
import towel from "../../../../public/images/rooms/towel.png"
import conditioner from "../../../../public/images/rooms/conditioner.png"
import minibar from "../../../../public/images/rooms/minibar.png"
import tv from "../../../../public/images/rooms/tv2.png"
import phone from "../../../../public/images/rooms/phone.png"
import safe from "../../../../public/images/rooms/safe2.png"
import coffee from "../../../../public/images/rooms/coffee2.png"
import makeuptable from "../../../../public/images/rooms/table.png"
import hairdryer from "../../../../public/images/rooms/hairdryer2.png"
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function RoomFeatures() {
  const t = useTranslations('RoomFeatures');
 
  const features = [
    { src: conditioner,       label: t("conditioner") },
    { src: tv,            label: t("tv") },
    { src: toilet,      label: t("toilet")},
    { src: wifi,         label: t("wifi") },
    { src: phone,          label: t("phone") },
    { src: minibar,       label: t("minibar") },
    { src: showerphone,         label: t("showerphone") },
    { src: safe,          label: t("safe") },
    { src: towel,          label: t("towel") },
    { src: makeuptable,   label:t("makeuptable")},
    { src: coffee,        label: t("coffee") },
    { src: hairdryer,     label: t("hairdryer") },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[24px] lg:text-3xl font-serif mb-8">{t("header")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 lg:gap-x-20 items-center md:items-center justify-center lg:justify-start ml-[9%]">
          {features.map(({ src, label }, idx) => (
            <div key={idx} className="flex items-center justify-center md:justify-start space-x-3">
              <Image
                src={src}
                alt={label}
                width={26}
                height={26}
                className="object-contain"
              />
              <span className="text-[12px] lg:text-sm text-gray-700">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-gray-600">
          <strong>{t("rulesHeader")}</strong> {t("rulesDetails")}
        </p>
      </div>
    </section>
  );
}
