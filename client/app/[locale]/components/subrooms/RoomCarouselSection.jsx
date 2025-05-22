// components/RoomCarouselSection.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaShower } from "react-icons/fa";
import AreaSvg from "../subrooms/AreaSvg";
import { GoPerson } from "react-icons/go";
import {  GiSofa } from "react-icons/gi";
import { useTranslations } from 'next-intl';

// Küçük bir roman rakamı çevirici (1–10 arası)
const toRoman = (n) => {
  const romans = ["I","II","III","IV","V"];
  return romans[n-1] || n;
};

export default function RoomCarouselSection({
  title,
  descriptions,
  images = [],
  buttonText,
  person, m2,
  onButtonClick = () => {}
}) {
  const [idx, setIdx] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const count = images.length;
  const totalPages = Math.ceil(count / 2);
  const currentPage = idx / 2 + 1;

  const prev = () => setIdx(i => (i - 2 + count) % count);
  const next = () => setIdx(i => (i + 2) % count);
  const slideIndices = [idx, (idx + 1) % count];

  // Modal prev/next
  const prevInModal = () => setSelectedIndex(i => (i - 1 + count) % count);
  const nextInModal = () => setSelectedIndex(i => (i + 1) % count);

  const t = useTranslations('Rooms');

  return (
    <section className="py-4 lg:py-20 bg-white z-50">
      <div className="max-w-[1440px] mx-auto px-4 grid-cols-1 lg:grid lg:grid-cols-3 gap-6 items-center shadow-lg w-[96%] pb-5 lg:w-[100%]">
        {/* Sol: Metin + Kontroller */}
        {descriptions.map((p, i) => (
            <p key={i} className="flex lg:hidden  text-gray-700 text-[12px] lg:text-sm mb-6 line-clamp-3">
              {p}
            </p>
          ))}

               {/* Mobile features row */}
               <div className="flex lg:hidden justify-between items-center space-x-none lg:space-x-6 py-1 mb-4 w-full">
                <div className="flex items-center gap-1 text-[12px] text-gray-700 whitespace-nowrap">
                <AreaSvg className="hidden lg:flex" width={15} height={15} />
                <AreaSvg className="flex lg:hidden" width={13} height={13} />
                  <span>{m2}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                <GoPerson className="hidden lg:flex w-5 h-5" />
                <GoPerson className="flex lg:hidden w-4 h-4" />
                  <span>{person}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                  <FaShower className="hidden lg:flex w-5 h-5" />
                  <FaShower className="flex lg:hidden w-4 h-4" />
                  <span>{t("bathroom")}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                  <GiSofa className="hidden lg:flex w-5 h-5" />
                  <GiSofa className="flex lg:hidden w-4 h-4" />
                  <span>{t("puff")}</span>
                </div>
              </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2 lg:hidden ">
          {slideIndices.map((i, imageIdx) => (
            <div
              key={i}
              className={`relative h-72 lg:h-80 xl:h-96 overflow-hidden shadow-lg cursor-pointer ${imageIdx === 1 ? 'hidden md:block' : ''}`}
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={images[i]}
                alt={`slide-${i}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          ))}
        </div> 

        <div className="space-y-2 md:space-y-4 lg:space-y-6 text-center items-center justify-center flex flex-col lg:items-start lg:justify-start lg:text-start">
          <h3 className="hidden lg:flex text-[24px] lg:text-3xl font-['Cormorant_Garamond'] font-semibold">{title}</h3>
          {descriptions.map((p, i) => (
            <p key={i} className="hidden lg:flex text-gray-700 text-[12px] lg:text-sm">
              {p}
            </p>
          ))}

          <div className="flex items-center space-x-4 mt-4">
            <button onClick={prev} className="p-2 bg-white shadow hover:bg-gray-100 cursor-pointer">
              <AiOutlineLeft className="w-5 h-5 text-gray-800" />
            </button>
            <span className="text-sm font-medium">
              {toRoman(currentPage)} / {toRoman(totalPages)}
            </span>
            <button onClick={next} className="p-2 bg-white shadow hover:bg-gray-100 cursor-pointer">
              <AiOutlineRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>
        </div>

        {/* Sağ: Mobilde tek, md ve üstü için ikişer resim */}
        <div className="grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2 hidden lg:grid">
          {slideIndices.map((i, imageIdx) => (
            <div
              key={i}
              className={`relative h-72 lg:h-80 xl:h-96 overflow-hidden shadow-lg cursor-pointer ${imageIdx === 1 ? 'hidden md:block' : ''}`}
              onClick={() => setSelectedIndex(i)}
            >
              <Image
                src={images[i]}
                alt={`slide-${i}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-[9999]">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 text-white text-3xl"
          >
            &times;
          </button>
          <button
            onClick={prevInModal}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black/30 rounded-full hover:bg-black/50 cursor-pointer"
          >
            <AiOutlineLeft />
          </button>
          <button
            onClick={nextInModal}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl p-2 bg-black/30 rounded-full hover:bg-black/50 cursor-pointer"
          >
            <AiOutlineRight />
          </button>
          <div className="relative max-w-3xl w-full">
            <Image
              src={images[selectedIndex]}
              alt="Büyütülmüş Görsel"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] w-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
