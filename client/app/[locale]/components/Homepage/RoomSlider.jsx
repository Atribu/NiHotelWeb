// components/RoomSlider.jsx
"use client";

import { Link } from '@/i18n/navigation';
import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import standard from "../../../../public/images/rooms/standardroom/ODA1.webp";
import junior from "../../../../public/images/rooms/juniorroom/ODA1.webp";
import veranda from "../../../../public/images/rooms/veranda/ODA1.webp";
import corner from "../../../../public/images/rooms/cornerroom/oda1.webp";
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
      link:"/rooms/standardroom"
    },
    {
      id: 2,
      image: junior,
      title: t("title2"),
      description: t("description2"),
      details: { adults: t("adults2"), area: t("area2") },
          link:"/rooms/juniorroom"
    },
    {
      id: 3,
      image: veranda,
      title: t("title3"),
      description: t("description3"),
      details: { adults: t("adults3"), area: t("area3") },
          link:"/rooms/verandaroom"
    },
    {
      id: 4,
      image: corner,
      title: t("title4"),
      description: t("description4"),
      details: { adults: t("adults4"), area: t("area4") },
          link:"/rooms/cornerroom"
    },
  ];
  const [index, setIndex] = useState(0);
  const count = slides.length;

  const prev = () => setIndex(i => (i - 1 + count) % count);
  const next = () => setIndex(i => (i + 1) % count);

  const slideWidth = 80; // mobilde her slide %80 genişlik

  return (
    <div className="relative max-w-screen py-12 flex items-center justify-center">
      <div className="flex flex-col lg:grid lg:grid-cols-14 gap-4 items-center relative z-10 max-w-screen">
        {/* Soldaki Sabit */}
        <div className="flex flex-col lg:hidden w-full ml-[10%]">
            <h2 className="text-[18px] font-semibold font-['Cormorant_Garamond'] uppercase text-black">
              {t("header")}
            </h2>
            <p className="mt-1 text-[13px] font-jost leading-tight text-black w-[90%]">
              {t("text")}
            </p>
          </div> 

        <div className="hidden lg:flex relative h-[420px] lg:h-[500px] overflow-hidden shadow-md col-span-8">
          <Image src={junior} alt="Static Left" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
          <div className="absolute top-36 left-20 xl:left-40 z-20 max-w-lg">
            <h2 className="text-[24px] lg:text-[32px] xl:text-4xl font-['Cormorant_Garamond'] uppercase text-black mb-6 font-semibold">
              {t("header")}
            </h2>
            <p className="mt-2 text-[12px] lg:text-[14px] font-jost leading-[130%] text-black w-[70%]">
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
        <div className="relative col-span-5 overflow-hidden lg:shadow-md w-[97%] sm:w-[80%] lg:w-full h-[300px] md:h-[400px] lg:h-[500px]">

          {/* Slides */}
          <div
            className="flex lg:hidden h-full transition-transform duration-500 ease-in-out gap-3"
            style={{
              width: `${count * 92}%`,
              transform: `translateX(-${index * (100 / count)}%)`,
            }}
          >
            {slides.map(slide => (
              <div key={slide.id} className="w-full flex flex-col h-full">
                <div className="relative w-full h-full">
                  <Image src={slide.image} alt={slide.title} fill className="object-cover" />
                </div>
                <div className="w-full p-2 flex flex-row lg:flex-col xl:flex-row justify-center items-center lg:justify-between">
                  <div className="flex flex-row w-[62%] gap-3">
                    <h3 className="text-lg uppercase lg:text-[22px] font-semibold font-['Cormorant_Garamond']">{slide.title}</h3>
                    <Link href={slide.link} className='flex items-center justify-center px-[6px] py-[1px] border border-[#000000] rounded-sm '>
                    <AiOutlineRight className="w-4 h-4 text-[#000000]" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

            {/* Slides desktop */}
            <div
            className="hidden lg:flex h-full transition-transform duration-500 ease-in-out gap-3"
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
                    <h3 className="text-lg lg:text-[22px] font-bold font-['Cormorant_Garamond']">{slide.title}</h3>
                    <p className="text-xs lg:text-sm font-jost text-gray-600 flex-1">{slide.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row xl:flex-col text-[12px] lg:text-[14px] gap-2 items-center justify-center space-x-4 mt-2 lg:w-[50%] xl:w-[34%]">
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

        {/* Sağdaki Sabit */}
        <div className="hidden lg:flex relative h-[400px] lg:h-[500px] overflow-hidden shadow-md col-span-1">
          <Image src={standard} alt="Static Right" fill className="object-cover" />
        </div>
      </div>


      <div className='flex lg:hidden absolute w-[94%] items-center justify-around bottom-1 mx-auto'>
        <div className='flex w-[25%] h-[2px] bg-[#dec7a6]'></div>
      <button
            onClick={prev}
            className=" transform z-30  p-1">
            <AiOutlineLeft className="w-6 h-6 text-[#dec7a6]" />
          </button>
          <div className='flex h-[16px] w-[1px] bg-[#dec7a6]'></div>
      <button
            onClick={next}
            className=" transform  z-30  p-1">
            <AiOutlineRight className="w-6 h-6 text-[#dec7a6]" />
          </button>
          <div className='flex w-[25%] h-[2px] bg-[#dec7a6]'></div>
      </div>

      {/* desktop button */}
      <div className='hidden lg:flex absolute w-[99%] items-center justify-around -bottom-1 mx-auto'>
        <div className='flex w-[30%] h-[2px] bg-[#dec7a6]'></div>
      <button
            onClick={prev}
            className=" transform z-30  p-1"
          >
            <AiOutlineLeft className="w-6 h-6 text-[#dec7a6]" />
          </button>

          <div className='flex h-[16px] w-[1px] bg-[#dec7a6]'></div>

      <button
            onClick={next}
            className=" transform  z-30  p-1"
          >
            <AiOutlineRight className="w-6 h-6 text-[#dec7a6]" />
          </button>
          <div className='flex w-[30%] h-[2px] bg-[#dec7a6]'></div>
      </div>

    </div>
  );
}
