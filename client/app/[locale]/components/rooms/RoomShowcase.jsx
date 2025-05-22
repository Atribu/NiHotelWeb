"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MdStraighten } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import AreaSvg from "../subrooms/AreaSvg";
import PersonSvg from "../subrooms/PersonSvg";
import { GoPerson } from "react-icons/go";
import {  GiSofa } from "react-icons/gi";
import { useTranslations } from 'next-intl';

export default function RoomShowcase({
  id,
  title,
  description,
  href,
  buttonText,
  images = [],
  imagesOnRight,
  m2,person
}) {
  // Embla carousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  // First image for static display, rest for carousel
  const [firstImage, ...carouselImages] = images;

  const t = useTranslations('Rooms');

  return (
    <section id={id} className="py-8 lg:py-20 bg-white flex items-center justify-center w-full ">
      <div className="max-w-7xl mx-auto w-[93%] items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 lg:gap-6 items-start ">

          {/* Left: static + carousel when imagesOnRight=false */}
          {!imagesOnRight ? (
            <>
              {/* Static image hidden on mobile */}
              {firstImage && (
                <div className="relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg hidden lg:block z-50">
                  <Image
                    src={firstImage.src}
                    alt={firstImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}

              {/* Carousel full width on mobile */}
              {carouselImages.length > 0 && (
                <>
                  <div ref={emblaRef} className="overflow-hidden w-full relative z-50">
                    <div className="flex">
                      {carouselImages.map((img, i) => (
                        <div
                          key={i}
                          className="relative flex-shrink-0 basis-full w-full h-72 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex lg:hidden absolute top-0 left-1/2 -translate-x-1/2 items-center justify-center text-center bg-[linear-gradient(180deg,#FFF_23.88%,rgba(255,255,255,0)_100%)]
  w-full
  h-[178px]
  flex-shrink-0">
                    <h3 className="text-[26px] lg:text-[32px] font-['Cormorant_Garamond'] text-gray-700 font-bold">
              {title}
            </h3>
                    </div>
                  </div>
                  {/* Mobile arrows */}
                  <div className="flex justify-center items-center gap-6 mt-0 lg:hidden">
                  <hr className=" w-16 border-gray-300" />
                    <button
                      onClick={() => emblaApi && emblaApi.scrollPrev()}
                      className="p-2"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={() => emblaApi && emblaApi.scrollNext()}
                      className="p-2"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                    <hr className=" w-16 border-gray-300" />
                  </div>
                </>
              )}

                {/* Mobile features row */}
                <div className="flex lg:hidden justify-center items-center space-x-6 py-1">
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                <AreaSvg className="flex" width={15} height={15} />
                  <span>{m2}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                <GoPerson className="w-5 h-5" />
                  <span>{person}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                  <FaShower className="w-5 h-5" />
                  <span>{t("bathroom")}</span>
                </div>
                <div className="flex items-center gap-1 text-[12px] text-gray-700">
                  <GiSofa className="w-5 h-5" />
                  <span>{t("puff")}</span>
                </div>
              </div>

                {/* Center text on desktop, below carousel on mobile */}
          <div className="flex flex-col items-center text-center justify-center space-y-2 lg:space-y-6 lg:h-full shadow-xl lg:shadow-none px-5 pb-5 lg:px-0 lg:pb-0">
            <h3 className="hidden lg:flex text-[26px] lg:text-[32px] font-['Cormorant_Garamond'] text-gray-700 font-bold">
              {title}
            </h3>
            <p className="text-[12px] lg:text-base text-gray-700">{description}</p>
            <hr className="hidden lg:flex w-16 border-gray-300" />
            <Link
              href={href}
              className="relative w-[95%] lg:w-auto overflow-hidden bg-white text-black border px-5 py-2 uppercase text-sm font-medium transition-colors duration-500 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 hover:text-white"
            >
              <span className="relative z-10">{buttonText}</span>
            </Link>
          </div>
            </>
          ) : (
            /* imagesOnRight: carousel then static */
            <>

              {/* Center text on desktop, below carousel on mobile */}
          <div className="flex flex-col items-center text-center justify-center space-y-6 lg:h-full">
            <h3 className="text-[26px] lg:text-[32px] font-['Cormorant_Garamond'] text-gray-700 font-bold">
              {title}
            </h3>
            <p className="text-base text-gray-700">{description}</p>
            <hr className="w-16 border-gray-300" />
            <Link
              href={href}
              className="relative w-[95%] lg:w-auto overflow-hidden bg-white text-black border px-5 py-2 uppercase text-sm font-medium transition-colors duration-500 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 hover:text-white"
            >
              <span className="relative z-10">{buttonText}</span>
            </Link>
          </div>
              {/* Carousel full width on mobile */}
              {carouselImages.length > 0 && (
                <>
                  <div ref={emblaRef} className="overflow-hidden w-full z-50">
                    <div className="flex">
                      {carouselImages.map((img, i) => (
                        <div
                          key={i}
                          className="relative flex-shrink-0 basis-full w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg"
                        >
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Mobile arrows */}
                  <div className="flex justify-center items-center gap-6 mt-2 lg:hidden">
                    <button
                      onClick={() => emblaApi && emblaApi.scrollPrev()}
                      className="p-2"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-700" />
                    </button>
                    <button
                      onClick={() => emblaApi && emblaApi.scrollNext()}
                      className="p-2"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-700" />
                    </button>
                  </div>
                </>
              )}

              {/* Static image hidden on mobile */}
              {firstImage && (
                <div className="relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg hidden lg:block z-50">
                  <Image
                    src={firstImage.src}
                    alt={firstImage.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </>
          )}

        

        </div>
      </div>
    </section>
  );
}
