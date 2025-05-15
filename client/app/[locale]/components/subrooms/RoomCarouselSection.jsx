// components/RoomCarouselSection.jsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        {/* Sol: Metin + Kontroller */}
        <div className="space-y-2 md:space-y-4 lg:space-y-6 text-center items-center justify-center flex flex-col lg:items-start lg:justify-start lg:text-start">
          <h3 className="text-[24px] lg:text-3xl font-serif">{title}</h3>
          {descriptions.map((p, i) => (
            <p key={i} className="text-gray-700 text-[12px] lg:text-sm">
              {p}
            </p>
          ))}

          <div className="flex items-center space-x-4 mt-4">
            <button onClick={prev} className="p-2 bg-white shadow hover:bg-gray-100">
              <AiOutlineLeft className="w-5 h-5 text-gray-800" />
            </button>
            <span className="text-sm font-medium">
              {toRoman(currentPage)} / {toRoman(totalPages)}
            </span>
            <button onClick={next} className="p-2 bg-white shadow hover:bg-gray-100">
              <AiOutlineRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          <button
            onClick={onButtonClick}
            className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm uppercase font-medium hover:bg-gray-900 hover:text-white transition"
          >
            {buttonText}π
          </button>
        </div>

        {/* Sağ: Mobilde tek, md ve üstü için ikişer resim */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
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
