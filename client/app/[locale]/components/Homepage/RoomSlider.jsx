// components/RoomSlider.jsx
"use client";

import Link from 'next/link';
import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import standard from "../../../../public/images/rooms/standardroom/NI-STANDART.webp";
import junior from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp";
import veranda from "../../../../public/images/rooms/veranda/NI-VERANDA.webp";
import corner from "../../../../public/images/rooms/cornerroom/NI-CORNER3.webp";
import { useTranslations } from 'next-intl';

export default function RoomSlider() {
  const t = useTranslations('RoomsSlider');
  const slides = [
    {
      id: 1,
      image: standard,
      title: t("title"),
      description: t("description"),
      details: { adults: t("adults"), area: t("area") },
    },
    {
      id: 2,
      image: junior,
      title: t("title2"),
      description: t("description2"),
      details: { adults: t("adults2"), area: t("area2") },
    },
    {
      id: 3,
      image: veranda,
      title: t("title3"),
      description: t("description3"),
      details: { adults: t("adults3"), area: t("area3") },
    },
    {
      id: 4,
      image: corner,
      title: t("title4"),
      description: t("description4"),
      details: { adults: t("adults4"), area: t("area4") },
    },
  ];
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const prev = () => setIndex(i => (i - 1 + count) % count);
  const next = () => setIndex(i => (i + 1) % count);

  return (
    <div className="relative max-w-screen mx-auto px-4 py-10">
      <div className="flex flex-col lg:grid lg:grid-cols-14 gap-4 items-center relative z-10">
        {/* Soldaki Sabit */}
        <div className="hidden lg:flex relative h-[420px] lg:h-[500px] overflow-hidden shadow-md col-span-8">
          <Image src={junior} alt="Static Left" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
          <div className="absolute top-36 left-40 z-20 max-w-lg">
            <h2 className="text-[24px] lg:text-4xl font-marcellus uppercase text-black mb-6 font-serif">
              {t("header")}
            </h2>
            <p className="mt-2 text-[12px] lg:text-[14px] font-jost leading-[130%] text-black w-[60%]">
              {t("text")}
            </p>
            <Link
              href="/rooms"
              className="inline-block mt-6 border-2 border-black px-4 py-2 uppercase text-sm font-semibold hover:bg-black hover:text-white transition"
            >
              {t("buttonText")}
            </Link>
          </div>
        </div>

        {/* Ortadaki Slider */}
        <div className="relative col-span-5 overflow-hidden shadow-md w-[97%] sm:w-[80%] lg:w-full h-[440px] lg:h-[500px]">
          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-30 bg-white p-1 shadow-lg"
          >
            <AiOutlineLeft className="w-5 h-5" />
          </button>

          {/* Slides */}
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${index * (100 / count)}%)`,
            }}
          >
            {slides.map(slide => (
              <div key={slide.id} className="w-full flex flex-col h-full">
                <div className="relative w-full h-full">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                </div>
                <div className="w-full p-4 flex flex-row lg:flex-col xl:flex-row justify-around items-start lg:justify-between">
                  <div className="flex flex-col w-[62%] gap-2">
                    <h3 className="text-lg font-semibold">{slide.title}</h3>
                    <p className="text-sm text-gray-600 flex-1">{slide.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row xl:flex-col gap-2 items-center justify-center space-x-4 mt-2 lg:w-[50%] xl:w-[34%]">
                    <div className="flex items-center space-x-1">
                      <FaUserAlt />
                      <span>{slide.details.adults}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <HiOutlineCalendar />
                      <span>{slide.details.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-30 bg-white p-1 shadow-lg"
          >
            <AiOutlineRight className="w-5 h-5" />
          </button>
        </div>

        {/* Sağdaki Sabit */}
        <div className="hidden lg:flex relative h-[400px] lg:h-[500px] overflow-hidden shadow-md col-span-1">
          <Image src={standard} alt="Static Right" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
