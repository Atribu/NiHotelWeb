// components/RoomSlider.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import imgslider from "./images/imgslider.png"

const slides = [
    {
      id: 1,
      image: imgslider,
      title: "Deluxe Sea Side View Room",
      description:
        "Our rooms, each of which is 30 m2 with a balcony and partial sea view, are tastefully designed with a king-sized bed, tables, and chairs.",
      details: { adults: 2, area: "30 m²" },
    },
    {
      id: 2,
      image: imgslider,
      title: "Corner Suite",
      description:
        "Experience luxury in our Corner Suite with panoramic views and all premium amenities to make your stay unforgettable.",
      details: { adults: 2, area: "45 m²" },
    },
    {
      id: 3,
      image: imgslider,
      title: "Jacuzzi Suite",
      description:
        "Relax in style in our Jacuzzi Suite featuring a private hot tub on the balcony and bespoke furnishings.",
      details: { adults: 2, area: "50 m²" },
    },
  ];

export default function RoomSlider() {
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

      <div className="grid grid-cols-5 gap-4 items-center relative z-10">
        {/* Soldaki Sabit Resim */}
        <div className="relative h-[400px] lg:h-[500px] overflow-hidden shadow-md col-span-2">
          <Image src={leftStatic} alt="Static Left" fill className="object-cover" />
        </div>

        {/* Ortadaki Dönen Slider */}
        <div className="overflow-hidden shadow-md h-[400px] lg:h-[500px] col-span-2">
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
                <div className="w-[100%] p-4 flex flex-col lg:flex-row justify-between">
                <div className="flex flex-col w-[62%] gap-2">
                <h3 className="text-lg font-semibold">{slide.title}</h3>
                <p className="text-sm text-gray-600 flex-1">{slide.description}</p>
                </div>
                  <div className="flex items-center justify-center space-x-4 mt-2 w-[34%]">
                    <div className="flex items-center space-x-1">
                      <FaUserAlt />
                      <span>{slide.details.adults} Adults</span>
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
        <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-md">
          <Image src={rightStatic} alt="Static Right" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
