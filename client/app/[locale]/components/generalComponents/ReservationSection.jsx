// components/ReservationSection.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import BellSvg from "./BellSvg";
import { useTranslations, useLocale } from "next-intl";

export default function ReservationSection() {
  const t = useTranslations("Reservation");
  const locale = useLocale();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childrenAges, setChildrenAges] = useState([]);

  useEffect(() => {
    setChildrenAges((ages) => {
      if (ages.length < children) {
        return [...ages, ...Array(children - ages.length).fill("")];
      }
      return ages.slice(0, children);
    });
  }, [children]);

//${locale}/?currency=EUR&language=${locale}&hideLayout=1&Checkin=${checkIn}&Checkout=${checkOut}&Adult=${adults}&child=${children}&ChildAges=${childrenAges.join(",")}
  const bookingUrl = `https://nihotellara.rezervasyonal.com/`;

  return (
    <div className="relative max-w-screen bg-[#fafafa] items-center justify-center hidden lg:flex">
      <section className="p-4 w-[95%] items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center md:space-x-6 space-y-4 md:space-y-0">
          
          {/* Check-in */}
          <div className="flex items-center -space-x-10">
            <label htmlFor="checkin" className="text-sm font-medium whitespace-nowrap cursor-pointer uppercase">
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
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Check-out */}
          <div className="flex items-center -space-x-10">
            <label htmlFor="checkout" className="text-sm font-medium whitespace-nowrap cursor-pointer uppercase">
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
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Adults */}
          <div className="flex items-center space-x-3">
            <span className="text-sm font-medium">{t("adult")}</span>
            <button
              onClick={() => setAdults((a) => Math.max(1, a - 1))}
              disabled={adults <= 1}
              className="p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AiOutlineMinus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="w-6 text-center font-medium">{adults}</span>
            <button onClick={() => setAdults((a) => a + 1)} className="p-1">
              <AiOutlinePlus className="w-4 h-4 text-gray-600" />
            </button>
          </div>
          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Children */}
          <div className="relative flex items-center space-x-3">
            <span className="text-sm font-medium">{t("children")}</span>
            <button
              onClick={() => setChildren((c) => Math.max(0, c - 1))}
              disabled={children <= 0}
              className="p-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <AiOutlineMinus className="w-4 h-4 text-gray-600" />
            </button>
            <span className="w-6 text-center font-medium">{children}</span>
            <button onClick={() => setChildren((c) => c + 1)} className="p-1">
              <AiOutlinePlus className="w-4 h-4 text-gray-600" />
            </button>
                            {/* Children Ages Inputs */}
      {children > 0 && (
        <section className="p-4 max-w-4xl mx-auto space-y-4">
          {childrenAges.map((age, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <label htmlFor={`child-age-${idx}`} className="text-sm font-medium whitespace-nowrap uppercase">
                {t("childAge", { number: idx + 1 })}
              </label>
              <input
                id={`child-age-${idx}`}
                type="number"
                min="0"
                value={age}
                onChange={(e) =>
                  setChildrenAges((ages) =>
                    ages.map((a, i) => (i === idx ? e.target.value : a))
                  )
                }
                className="w-16 text-sm text-gray-700 border border-gray-300 rounded px-2 py-1 focus:outline-none"
              />
            </div>
          ))}
        </section>
      )}
          </div>

          <div className="hidden md:block h-6 border-l border-gray-300" />

          {/* Book Now */}
          <a
            href={bookingUrl}
            className="mt-2 md:mt-0 text-[#00a1af] hover:text-white px-6 py-2 flex items-center space-x-2 hover:bg-gray-800 border border-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="font-medium whitespace-nowrap">{t("booknow")}</span>
            <BellSvg className="flex" width={30} height={18} color="#00a1af" />
          </a>
        </div>
      </section>


    </div>
  );
}
