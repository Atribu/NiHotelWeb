// components/RoomSlider.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import imgslider from "./images/imgslider.png"
import { useTranslations } from 'next-intl';
import corner from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import standard from "../../../../public/images/rooms/standardroom/NI-STANDART.webp"
import junior from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import veranda from "../../../../public/images/rooms/veranda/NI-VERANDA.webp"

export default function RoomSlider() {
  const t = useTranslations('RoomsSlider');

  const slides = [
    {
      id: 1,
      image: standard,
      title: t("title"),
      description:
      t("description"),
      details: { adults: t("adults"), area:  t("area"),},
    },
    {
      id: 2,
      image: junior,
      title: t("title2"),
      description:
      t("description2"),
      details: { adults: t("adults2"), area:  t("area2"),},
    },
    {
      id: 3,
      image: veranda,
      title: t("title3"),
      description:
      t("description3"),
      details: { adults: t("adults3"), area:  t("area3"),},
    },

    {
      id: 4,
      image: corner,
      title: t("title4"),
      description:
      t("description4"),
      details: { adults: t("adults4"), area:  t("area4"),},
    },
  ];

  const [index, setIndex] = useState(0);
  const count = slides.length;

  // Döngüsel prev/next
  const prev = () => setIndex(i => (i - 1 + count) % count);
  const next = () => setIndex(i => (i + 1) % count);

  // Sabit yan resimler
  const leftStatic  = "/images/static-left.jpg";
  const rightStatic = "/images/static-right.jpg";

  return (
    <div className="relative max-w-screen mx-auto px-4 py-10">
      {/* Prev / Next Butonları */}
      <button
        onClick={prev}
        className="absolute z-30 left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg"
      >
        <AiOutlineLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute z-30 right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-lg"
      >
        <AiOutlineRight className="w-6 h-6" />
      </button>

      <div className="flex flex-col lg:grid lg:grid-cols-5 gap-4 items-center relative z-10">
        {/* Soldaki Sabit Resim */}
        <div className="hidden lg:flex relative h-[420px] lg:h-[500px] overflow-hidden shadow-md col-span-2">
          <Image src={corner} alt="Static Left" fill className="object-cover" />
        </div>

        {/* Ortadaki Dönen Slider */}
        <div className="overflow-hidden shadow-md w-[97%] sm:w-[80%] lg:w-[100%] h-[440px] lg:h-[500px] col-span-2">
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{
              width: `${count * 100}%`,
              transform: `translateX(-${index * (100 / count)}%)`
            }}
          >
            {slides.map(slide => (
              <div
                key={slide.id}
                className="w-full flex flex-col h-full"
              >
                {/* Resim */}
                <div className="relative w-[100%] h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* İçerik */}
                <div className="w-[100%] p-4 flex flex-row lg:flex-col xl:flex-row justify-around items-start lg:justify-between">
                <div className="flex flex-col w-[62%] gap-2">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{slide.description}</p>
                </div>
                  <div className="flex flex-col md:flex-row xl:flex-col gap-2 items-center justify-center space-x-4 mt-2 lg:w-[50%] xl:w-[34%] ">
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
        </div>

        {/* Sağdaki Sabit Resim */}
        <div className="hidden lg:flex relative h-[400px] lg:h-[500px] overflow-hidden shadow-md">
          <Image src={standard} alt="Static Right" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
