// components/RoomFeatures.jsx
"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

import wifi from "../../../../public/images/rooms/wifi.png";
import toilet from "../../../../public/images/rooms/toilet.png";
import showerphone from "../../../../public/images/rooms/showerphone.png";
import towel from "../../../../public/images/rooms/towel.png";
import conditioner from "../../../../public/images/rooms/conditioner.png";
import minibar from "../../../../public/images/rooms/minibar.png";
import tv from "../../../../public/images/rooms/tv2.png";
import phone from "../../../../public/images/rooms/phone.png";
import safe from "../../../../public/images/rooms/safe2.png";
import coffee from "../../../../public/images/rooms/coffee2.png";
import makeuptable from "../../../../public/images/rooms/table.png";
import hairdryer from "../../../../public/images/rooms/hairdryer2.png";
import img from "../../../../public/svg/PORTRESON.svg"

export default function RoomFeatures() {
  const t = useTranslations('RoomFeatures');
  const features = [
    { src: conditioner, label: t("conditioner") },
    { src: tv, label: t("tv") },
    { src: toilet, label: t("toilet") },
    { src: wifi, label: t("wifi") },
    { src: phone, label: t("phone") },
    { src: minibar, label: t("minibar") },
    { src: showerphone, label: t("showerphone") },
    { src: safe, label: t("safe") },
    { src: towel, label: t("towel") },
    { src: makeuptable, label: t("makeuptable") },
    { src: coffee, label: t("coffee") },
    { src: hairdryer, label: t("hairdryer") },
  ];

  // prepare Embla carousel for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', containScroll: 'trimSnaps' });
  const pageCount = Math.ceil(features.length / 6);
  const pages = Array.from({ length: pageCount }, (_, i) => features.slice(i * 6, i * 6 + 6));

  return (
    <section className="py-10 lg:py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-[24px] lg:text-3xl font-['Cormorant_Garamond'] font-bold mb-2 lg:mb-8">
          {t("header")}
        </h2>

        {/* desktop grid */}
        <div className="hidden lg:grid grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-10 lg:gap-x-20 items-center justify-start ml-[9%]">
          {features.map(({ src, label }, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <Image src={src} alt={label} width={26} height={26} className="object-contain" />
              <span className="text-[12px] lg:text-sm text-gray-700">{label}</span>
            </div>
          ))}
        </div>

        {/* mobile carousel */}
       <div className="lg:hidden">
   {/* dıştaki border container */}
   <div className="border-l border-r border-t border-gray-200 rounded-lg overflow-hidden">
     {/* slider */}
     <div className="overflow-hidden py-5" ref={emblaRef}>
       <div className="flex">
         {pages.map((slide, idx) => (
           <div key={idx} className="min-w-full px-4">
             {/* iki sütun arası divide-x */}
             <div className="grid grid-cols-2 gap-y-6">
               {slide.map(({ src, label }, j) => (
                 <div
                   key={j}
                   className="flex flex-col items-center justify-center gap-2"
                 >
                   <Image
                     src={src}
                     alt={label}
                     width={24}
                     height={24}
                     className="object-contain"
                   />
                  <span className="text-xs text-gray-700 whitespace-nowrap">
                     {label}
                   </span>
                 </div>
               ))}
             </div>
           </div>
         ))}
       </div>
     </div>

     {/* oklar, border-top eklendi */}
     <div className="flex justify-center items-center space-x-6 py-1">
      <div className='h-[1px] w-[20%] bg-gray-200'></div>
       <button onClick={() => emblaApi && emblaApi.scrollPrev()} className="p-2">
         <AiOutlineLeft className="w-6 h-6 text-gray-700" />
       </button>
      <button onClick={() => emblaApi && emblaApi.scrollNext()} className="p-2">
         <AiOutlineRight className="w-6 h-6 text-gray-700" />
       </button>
       <div className='h-[1px] w-[20%] bg-gray-200'></div>
     </div>
   </div>
 </div>

        <p className="hidden lg:flex mt-12 text-sm text-gray-600 text-cenyter justify-center items-center w-full">
          <strong>{t("rulesHeader")}</strong> {t("rulesDetails")}
        </p>
      </div>
      <Image src={img} alt='portre' width={800} height={1400} className='hidden lg:flex absolute -top-[250px] -left-[65%] z-[1]'/>
    </section>
  );
}
