"use client"
import Image from "next/image";
import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { BsFillSunriseFill } from "react-icons/bs";

export default function ReservationSec() {
  const [adults, setAdults] = useState(2);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* soldaki iki resim */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              src: "/images/room1.jpg",
              title: "NI HOTEL",
              text: " HOTEL",
            },
            {
              src: "/images/room2.jpg",
              title: "NI HOTEL",
              text: "lorem lore lorem lorem",
            },
          ].map(({ src, title, text }, i) => (
            <div
              key={i}
              className="relative group overflow-hidden shadow-lg h-80 lg:h-[550px]"
            >
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                priority={i === 0}
              />
              {/* opak örtü */}
              <div className="absolute inset-0 bg-black/30" />
              {/* kayan başlık + açıklama */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent 
                              transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white">{title}</h3>
                <p className="mt-2 text-sm text-white">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* sağdaki reservation bölümü */}
        <div className="w-[240px] mx-auto bg-white h-[320px]">
      <h2 className="text-xl font-serif text-center mb-6">BOOK YOUR TRIP</h2>
<div className="flex flex-col border border-gray-200 px-8 py-4 shadow-sm">

      {/* CHECK IN */}
      <div className="relative mb-4">
        <label className="block text-xs font-medium mb-1">CHECK IN</label>
        <input
          type="date"
          className="w-full border-b border-gray-300 pb-1 text-sm appearance-none bg-transparent focus:outline-none"
        />
        <HiOutlineCalendar className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* CHECK OUT */}
      <div className="relative mb-4">
        <label className="block text-xs font-medium mb-1">CHECK OUT</label>
        <input
          type="date"
          className="w-full border-b border-gray-300 pb-1 text-sm appearance-none bg-transparent focus:outline-none"
        />
        <HiOutlineCalendar className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      {/* ADULT */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-medium">ADULT</span>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setAdults(a => Math.max(1, a - 1))}
            className="p-1 border border-gray-300 rounded text-gray-600 hover:text-black"
          >
            <AiOutlineMinus size={14} />
          </button>
          <span className="text-sm">{adults}</span>
          <button
            type="button"
            onClick={() => setAdults(a => a + 1)}
            className="p-1 border border-gray-300 rounded text-gray-600 hover:text-black"
          >
            <AiOutlinePlus size={14} />
          </button>
        </div>
      </div>

      {/* BOOK NOW */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 py-2 border border-gray-800 uppercase text-sm font-medium hover:bg-gray-100 transition"
      >
        <span>Book Now</span>
        <BsFillSunriseFill />
      </button>
</div>
    </div>
      </div>
    </main>
  );
}
