// components/RoomSlider.jsx
"use client";

import { Link } from '@/i18n/navigation';
import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineCalendar } from "react-icons/hi";
import standard from "../../../../public/images/rooms/standardroom/NI-STANDART.webp";
import junior from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp";
import veranda from "../../../../public/images/rooms/veranda/NI-VERANDA.webp";
import corner from "../../../../public/images/rooms/cornerroom/NI-CORNER3.jpg";
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

export default function RoomSlider() {
  const t = useTranslations('RoomsSlider');
  const t2 = useTranslations('RoomFeatures');
  
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

  const features = [
    { src: conditioner, label: t2("conditioner") },
    { src: tv, label: t2("tv") },
    { src: toilet, label: t2("toilet") },
    { src: wifi, label: t2("wifi") },
    { src: phone, label: t2("phone") },
    { src: minibar, label: t2("minibar") },
    { src: showerphone, label: t2("showerphone") },
    { src: safe, label: t2("safe") },
    { src: towel, label: t2("towel") },
    { src: makeuptable, label: t2("makeuptable") },
    { src: coffee, label: t2("coffee") },
    { src: hairdryer, label: t2("hairdryer") },
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

          <div className="hidden lg:flex relative h-[420px] lg:h-[500px] overflow-hidden shadow-md col-span-7">
          <Image src={junior} alt="Static Left" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none" />
          <div className="absolute top-36 left-20 xl:left-40 z-20 max-w-lg hidden lg:grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 lg:gap-x-3 items-center justify-start ml-[1%] xl:ml-[9%]">
          {features.map(({ src, label }, idx) => (
            <div key={idx} className="flex items-center space-x-1">
              <Image src={src} alt={label} width={23} height={23} className="object-contain" />
              <span className="text-[12px] xl:text-sm text-gray-700">{label}</span>
            </div>
          ))}
          </div>
        </div>

        {/* Ortadaki Slider */}
        <div className="relative col-span-5 overflow-hidden w-[97%] sm:w-[80%] lg:w-full h-[300px] md:h-[400px] lg:h-[500px]">

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
                <div className="w-full px-4 py-2 flex flex-row lg:flex-col xl:flex-row justify-around items-start lg:justify-between">
                  <div className="flex flex-col w-[62%] gap-2">
                    <h3 className="text-lg lg:text-[25px] font-jost">{slide.title}</h3>
                  </div>
            
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağdaki Sabit */}
        <div className="hidden lg:flex relative h-[400px] lg:h-[500px] overflow-hidden shadow-md col-span-2">
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
      <div className='hidden lg:flex absolute w-[99%] items-center justify-around -bottom-1 mx-auto '>
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
