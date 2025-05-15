// components/RoomShowcase.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function RoomShowcase({id,
  title,
  description,
  href,
  buttonText ,
  images = [],
  imagesOnRight, 
}) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Eğer imagesOnRight = false ise önce resimler */}
          {!imagesOnRight && (
            <>
              {images.map((img, i) => (
                <div key={i} className="relative w-full h-80 lg:h-[500px] overflow-hidden shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </>
          )}

          {/* Ortadaki içerik */}
          <div className="flex flex-col items-center text-center justify-center space-y-6">
            <h3 className="text-[26px] lg:text-[32px] font-serif text-gray-900">{title}</h3>
            <p className="text-base text-gray-700">{description}</p>
            <hr className="w-16 border-gray-300" />
            <Link href={href} className="relative overflow-hidden
    bg-white text-black border
    px-5 py-2 uppercase text-sm font-medium
    transition-colors duration-500 ease-in-out
    before:content-[''] before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100 hover:text-white">
              <span className="relative z-10">
                {buttonText}
              </span>
            </Link>
          </div>

          {/* Eğer imagesOnRight = true ise içerikten sonra resimler */}
          {imagesOnRight && (
            <>
              {images.map((img, i) => (
                <div key={i} className="relative w-full h-80 lg:h-[500px] overflow-hidden shadow-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
