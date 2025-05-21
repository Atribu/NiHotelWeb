"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RoomShowcase({
  id,
  title,
  description,
  href,
  buttonText,
  images = [],
  imagesOnRight,
}) {
  // Embla carousel hook
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  // First image for static display, rest for carousel
  const [firstImage, ...carouselImages] = images;

  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

          {/* Left: static + carousel when imagesOnRight=false */}
          {!imagesOnRight ? (
            <>
              {/* Static image hidden on mobile */}
              {firstImage && (
                <div className="relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg hidden sm:block">
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
                  <div ref={emblaRef} className="overflow-hidden w-full">
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
                  <div className="flex justify-center items-center gap-6 mt-2 sm:hidden">
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
            </>
          ) : (
            /* imagesOnRight: carousel then static */
            <>
              {/* Carousel full width on mobile */}
              {carouselImages.length > 0 && (
                <>
                  <div ref={emblaRef} className="overflow-hidden w-full">
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
                  <div className="flex justify-center items-center gap-6 mt-2 sm:hidden">
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
                <div className="relative w-full h-64 sm:h-80 lg:h-[500px] overflow-hidden shadow-lg hidden sm:block">
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

          {/* Center text on desktop, below carousel on mobile */}
          <div className="flex flex-col items-center text-center justify-center space-y-6 lg:h-full">
            <h3 className="text-[26px] lg:text-[32px] font-['Cormorant_Garamond'] text-gray-700 font-bold">
              {title}
            </h3>
            <p className="text-base text-gray-700">{description}</p>
            <hr className="w-16 border-gray-300" />
            <Link
              href={href}
              className="relative overflow-hidden bg-white text-black border px-5 py-2 uppercase text-sm font-medium transition-colors duration-500 ease-in-out before:content-[''] before:absolute before:inset-0 before:bg-black before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-in-out hover:before:scale-x-100 hover:text-white"
            >
              <span className="relative z-10">{buttonText}</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
