// components/SplitImageSection.jsx
"use client";
import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import imgup from "./images/imgup.png"

import Image from "next/image";
import Link from "next/link";

export default function SplitImageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-[40px]">
          
          {/* Sol Kart */}
          <div className="relative w-full md:w-1/2 h-[400px]  overflow-hidden shadow-lg">
            <Image
              src={img1}
              alt="Muco Hotel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-sm uppercase">MUCHO SELECTION HOTEL</h3>
              <p className="mt-2 text-base leading-relaxed">
                Mucho Selection Hotel is a hotel located in the Asarlık area,
                in Bodrum, Turkey. This hotel offers a comfortable stay for
                travelers who want to enjoy the beauty of Bodrum.
              </p>
              <Link
                href="#"
                className="mt-4 w-[150px] items-center justify-center text-center text-sm uppercase border border-white py-2 px-4 hover:bg-white hover:text-black transition"
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Sağ Kart (sol alt köşe 40px kırpıldı) */}
          <div
            className="relative w-full md:w-1/2 h-[400px]  overflow-hidden shadow-lg"
          >
            <Image
            src={img2}
              alt="Beach Bar & Restaurant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-sm uppercase">BEACH BAR & RESTAURANT</h3>
              <p className="mt-2 text-base leading-relaxed">
                Iconic Beach and Restaurant is an ideal paradise to relax and
                cool off on hot summer days! Discover the exclusive cocktails,
                refreshing drinks, and delicious snacks right by the sea.
              </p>
              <Link
                href="#"
                className="mt-4 w-[150px] items-center justify-center text-center text-sm uppercase border border-white py-2 px-4 hover:bg-white hover:text-black transition"
              >
                EXPLORE
              </Link>
            </div>
          </div>

        </div>



        <div className="flex flex-col md:flex-row items-stretch justify-center gap-[40px]">
          
          {/* Sol Kart */}
          <div className="relative w-full md:w-1/2 h-[400px]  overflow-hidden shadow-lg">
            <Image
              src={img1}
              alt="Muco Hotel"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-sm uppercase">MUCHO SELECTION HOTEL</h3>
              <p className="mt-2 text-base leading-relaxed">
                Mucho Selection Hotel is a hotel located in the Asarlık area,
                in Bodrum, Turkey. This hotel offers a comfortable stay for
                travelers who want to enjoy the beauty of Bodrum.
              </p>
              <Link
                href="#"
                className="mt-4 w-[150px] items-center justify-center text-center text-sm uppercase border border-white py-2 px-4 hover:bg-white hover:text-black transition"
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Sağ Kart (sol alt köşe 40px kırpıldı) */}
          <div
            className="relative w-full md:w-1/2 h-[400px]  overflow-hidden shadow-lg"
          >
            <Image
            src={img2}
              alt="Beach Bar & Restaurant"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <h3 className="text-sm uppercase">BEACH BAR & RESTAURANT</h3>
              <p className="mt-2 text-base leading-relaxed">
                Iconic Beach and Restaurant is an ideal paradise to relax and
                cool off on hot summer days! Discover the exclusive cocktails,
                refreshing drinks, and delicious snacks right by the sea.
              </p>
              <Link
                href="#"
                className="mt-4 w-[150px] items-center justify-center text-center text-sm uppercase border border-white py-2 px-4 hover:bg-white hover:text-black transition"
              >
                EXPLORE
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
