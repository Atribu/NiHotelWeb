// components/DiscoverRooms.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import corner from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp";
import standard from "../../../../public/images/rooms/standardroom/NI-STANDART.webp";
import junior from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp";
import veranda from "../../../../public/images/rooms/veranda/NI-VERANDA.webp";
import { useTranslations } from "next-intl";

export default function DiscoverRooms({
  header,
  buttonText,
  name1,
  description1,
  name2,
  description2,
  name3,
  description3,
  link1,
  link2,
  link3,
}) {
  const t = useTranslations();
  const otherRooms = [
    { name: name1, description: description1, image: standard, href: link1 },
    { name: name2, description: description2, image: junior, href: link2 },
    { name: name3, description: description3, image: veranda, href: link3 },
  ];

  // Embla for mobile carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    containScroll: 'trimSnaps',
  });

  return (
    <section className="flex flex-col py-8 lg:py-16 bg-white w-screen items-center justify-center">
      <div className="flex flex-col w-[100%] md:w-[75%] lg:w-[85%] xl:w-[80%] lg:min-w-[900px] max-w-[1200px]">
        <h2 className="text-[24px] md:text-4xl font-serif text-center mb-12">
          {header}
        </h2>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-7 z-50">
          {otherRooms.map(({ name, description, image, href }) => (
            <Link
              key={name}
              href={href}
              className="relative h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] overflow-hidden shadow-lg group flex items-end justify-center py-10"
              aria-label={name}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-6 w-full text-center px-4">
                <h3 className="text-white text-lg font-['Cormorant_Garamond'] leading-tight uppercase font-bold">
                  {name}
                </h3>
                <div className="absolute w-48 h-px opacity-50 outline outline-offset-[-1.5px] outline-white left-1/2 -translate-x-1/2 mt-1" />
              </div>
              <button
                className="relative overflow-hidden bg-white text-black px-5 py-2 uppercase text-sm font-medium transition-colors duration-500 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 hover:text-white"
              >
                <span className="relative z-10 cursor-pointer">{buttonText}</span>
              </button>
            </Link>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="sm:hidden">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex space-x-4 px-4">
              {otherRooms.map(({ name, description, image, href }, idx) => (
                <Link
                  key={idx}
                  href={href}
                  className="flex-shrink-0 w-[85%] relative h-[400px] overflow-hidden shadow-lg group flex items-end justify-center py-10"
                  aria-label={name}
                >
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute top-6 w-full text-center px-4">
                    <h3 className="text-white text-lg font-['Cormorant_Garamond'] leading-tight uppercase font-bold">
                      {name}
                    </h3>
                    <div className="absolute w-48 h-px opacity-50 outline outline-offset-[-1.5px] outline-white left-1/2 -translate-x-1/2 mt-1" />
                  </div>
                  <button
                    className="relative overflow-hidden bg-white text-black w-[80%] py-2 rounded uppercase text-sm font-medium transition-colors duration-500 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 hover:text-white"
                  >
                    <span className="relative z-10 text-[12px] cursor-pointer">{buttonText}</span>
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center space-x-6 mt-6">
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className="p-2"
            >
              <AiOutlineLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className="p-2"
            >
              <AiOutlineRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
