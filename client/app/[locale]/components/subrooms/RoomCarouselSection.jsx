// components/RoomCarouselSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Küçük bir roman rakamı çevirici (1–10 arası)
const toRoman = (n) => {
  const romans = ["I","II","III","IV","V"];
  return romans[n-1] || n;
};

export default function RoomCarouselSection({
  title = "DELUXE ROOM WITH BALCONY",
  descriptions = [
    "Our rooms, each 30 m², with a balcony and garden view, have been designed in a tasteful way, with your comfort in mind, featuring a large bed or two single beds, a desk and chairs.",
    "Inone hotel makes your holiday amazing with bohemian style. This room was designed with care. Light and color will upgrade your mood for your dream holiday. Nature and beauty are mixing with bohemian style."
  ],
  images = [
    "/images/room1.jpg",
    "/images/room2.jpg",
    "/images/room3.jpg",
    "/images/room4.jpg"
  ],
  buttonText = "EXPLORE",
  onButtonClick = () => {}
}) {
  const [idx, setIdx] = useState(0);
  const count = images.length;
  const totalPages = Math.ceil(count / 2);
  const currentPage = idx / 2 + 1;

  const prev = () => setIdx(i => (i - 2 + count) % count);
  const next = () => setIdx(i => (i + 2) % count);

  const firstImg = images[idx];
  const secondImg = images[(idx + 1) % count];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Sol: Metin + Kontroller */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif">{title}</h3>
          {descriptions.map((p,i) => (
            <p key={i} className="text-gray-700 text-sm">{p}</p>
          ))}

          <div className="flex items-center space-x-4 mt-4">
            <button
              onClick={prev}
              className="p-2 bg-white  shadow hover:bg-gray-100"
            >
              <AiOutlineLeft className="w-5 h-5 text-gray-800" />
            </button>
            <span className="text-sm font-medium">
              {toRoman(currentPage)} / {toRoman(totalPages)}
            </span>
            <button
              onClick={next}
              className="p-2 bg-white shadow hover:bg-gray-100"
            >
              <AiOutlineRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          <button
            onClick={onButtonClick}
            className="mt-4 inline-block border border-gray-800 px-6 py-2 text-sm uppercase font-medium hover:bg-gray-900 hover:text-white transition"
          >
            {buttonText}
          </button>
        </div>

        {/* Sağ: İki’şer Resim */}
        <div className="grid grid-cols-2 gap-4 md:col-span-2">
          {[firstImg, secondImg].map((src, i) => (
            <div key={i} className="relative lg:h-80 xl:h-96  overflow-hidden shadow-lg">
              <Image
                src={src}
                alt={`slide-${idx + i}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
