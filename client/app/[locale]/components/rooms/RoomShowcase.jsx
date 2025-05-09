// components/RoomShowcase.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function RoomShowcase({id,
  title,
  description,
  href,
  buttonText = "Explore",
  images = [
    { src: "/images/room-left.jpg", alt: "Room Interior" },
    { src: "/images/room-middle.jpg", alt: "Room Balcony View" },
  ],
  imagesOnRight = false, // false → solda, true → sağda
}) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Eğer imagesOnRight = false ise önce resimler */}
          {!imagesOnRight && (
            <>
              {images.map((img, i) => (
                <div key={i} className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
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
            <h3 className="text-3xl font-serif text-gray-900">{title}</h3>
            <p className="text-base text-gray-700">{description}</p>
            <hr className="w-16 border-gray-300" />
            <Link href={href} className="inline-block">
              <span className="border border-gray-800 px-6 py-2 text-sm font-semibold uppercase hover:bg-gray-900 hover:text-white transition">
                {buttonText}
              </span>
            </Link>
          </div>

          {/* Eğer imagesOnRight = true ise içerikten sonra resimler */}
          {imagesOnRight && (
            <>
              {images.map((img, i) => (
                <div key={i} className="relative w-full h-80 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
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
