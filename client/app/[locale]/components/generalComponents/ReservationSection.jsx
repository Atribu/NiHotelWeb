// components/ReservationSection.jsx
"use client";

import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import BellSvg from "./BellSvg";
import { useTranslations } from 'next-intl';

export default function ReservationSection() {
    const t = useTranslations('Reservation');

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);

  return (
    <div className="w-screen bg-[#fafafa]">
      <section className="p-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0">
          
          {/* Check-in */}
          <div className="flex items-center -space-x-10">
            <label
              htmlFor="checkin"
              className="text-sm font-medium whitespace-nowrap cursor-pointer uppercase"
            >
             {t("checkin")}
            </label>
            <input
              id="checkin"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="text-sm text-gray-700 placeholder-transparent focus:outline-none cursor-pointer"
            />
          </div>

          {/* divider */}
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Check-out */}
          <div className="flex items-center -space-x-10">
            <label
              htmlFor="checkout"
              className="text-sm font-medium whitespace-nowrap cursor-pointer uppercase"
            >
             {t("checkout")}
            </label>
            <input
              id="checkout"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="text-sm text-gray-700 placeholder-transparent focus:outline-none cursor-pointer"
            />
          </div>

          {/* divider */}
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Adults */}
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium"> {t("adult")}</span>
            <button
              onClick={() => setAdults((a) => Math.max(1, a - 1))}
              className="p-1 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={adults <= 1}
            >
              <AiOutlineMinus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="w-6 text-center font-medium">{adults}</span>
            <button onClick={() => setAdults((a) => a + 1)} className="p-1">
              <AiOutlinePlus className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* divider */}
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Book Now */}
          <button className="mt-2 md:mt-0 text-black hover:text-white px-6 py-2 flex items-center space-x-2 hover:bg-gray-800 border border-gray-300">
            <span className="font-medium whitespace-nowrap"> {t("booknow")}</span>
            <BellSvg className="flex" width={30} height={18} color="#11131d"/>
          </button>
        </div>
      </section>
    </div>
  );
}
