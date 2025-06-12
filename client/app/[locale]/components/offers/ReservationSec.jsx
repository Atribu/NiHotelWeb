"use client"
import Image from "next/image";
import { useState } from "react";
import { HiOutlineCalendar } from "react-icons/hi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import DatePicker from "react-datepicker";
import { useLocale } from "next-intl";
import "react-datepicker/dist/react-datepicker.css";
import BellSvg from "../generalComponents/BellSvg";
import img1 from "../../gallery/images/lobi/LOBI1.webp";
import img2 from "../../gallery/images/lobi/LOBI5.webp";

export default function ReservationSec() {
  const locale = useLocale();
  const [adults, setAdults] = useState(2);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const today = new Date();
  const minCheckOutDate = checkInDate
    ? new Date(checkInDate.getTime() + 24 * 60 * 60 * 1000)
    : today;

  function formatDate(d) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${dd}`;
  }

  const handleBookNow = () => {
    // Eğer tarih seçilmemişse, bugünden itibaren 4 gün seçiliymiş gibi hesapla
    const ciDate = checkInDate || today;
    const coDate =
      checkOutDate || new Date(ciDate.getTime() + 4 * 24 * 60 * 60 * 1000);

    const ci = formatDate(ciDate);
    const co = formatDate(coDate);
    const base = "https://nihotellara.rezervasyonal.com";

    let url = "";

    if (locale === "en" || locale === "de") {
      // İngilizce ve Almanca: en branch’i kullan (URL’de en prefix)
      url = `${base}/en/?language=en` +
        `&Checkin=${ci}` +
        `&Checkout=${co}` +
        `&Adult=${adults}` +
        `&child=0` +
        `&ChildAges=`;
    } else {
      // Diğer diller: prefix tr yok, prefix diğer diller var
      const prefix = locale === "tr" ? "" : `/${locale}`;
      url = `${base}${prefix}/?` +
        `Checkin=${ci}` +
        `&Checkout=${co}` +
        `&Adult=${adults}` +
        `&child=0` +
        `&ChildAges=` +
        `&language=${locale}`;
    }

    window.location.href = url;
  };

  return (
    <main className="flex flex-col items-center justify-center pt-6 xl:pt-0 xl:min-h-[85vh]">
      <div className="container mx-auto lg:px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 items-center justify-center max-w-[1400px] w-[96%] lg:w-[90%]">
        {/* soldaki iki resim */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4 lg:gap-6">
          {[
            { src: img1, title: "NI HOTEL", text: " HOTEL" },
            { src: img2, title: "NI HOTEL", text: "lorem lore lorem lorem" },
          ].map(({ src, title, text }, i) => (
            <div
              key={i}
              className="relative group overflow-hidden shadow-lg min-h-[195px] md:min-h-[270px] md:h-60 lg:h-[48vh] xl:h-[56vh] lg:min-h-[400px]"
            >
              <Image src={src} alt={title} fill className="object-cover" priority={i === 0} />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-serif text-white">{title}</h3>
                <p className="mt-2 text-sm text-white">{text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* sağdaki reservation bölümü */}
        <div className="w-[96%] lg:w-[250px] mx-auto lg:h-[320px]">
          <h2 className="text-[18px] lg:text-xl font-serif text-center mb-3 lg:mb-6">BOOK YOUR TRIP</h2>
          <div className="flex flex-col border border-gray-200 px-7 py-4 shadow-sm gap-5 md:gap-8 font-jost text-[#24292C]">

            {/* CHECK IN */}
            <div className="flex items-center relative justify-between">
              <label className="block text-[13px] font-normal mb-1 whitespace-nowrap">CHECK IN</label>
              <div className="relative">
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => {
                    setCheckInDate(date);
                    if (checkOutDate && date && checkOutDate <= date) setCheckOutDate(null);
                  }}
                  minDate={today}
                  dateFormat="dd/MM/yyyy"
                  className="pb-1 text-sm bg-transparent focus:outline-none w-20 cursor-pointer"
                  showPopperArrow={false}
                  popperPlacement="bottom-end"
                />
                {!checkInDate && (
                  <HiOutlineCalendar className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                )}
              </div>
            </div>

            {/* CHECK OUT */}
            <div className="flex items-center relative justify-between">
              <label className="block text-[13px] font-normal mb-1 whitespace-nowrap">CHECK OUT</label>
              <div className="relative">
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={minCheckOutDate}
                  dateFormat="dd/MM/yyyy"
                  className="pb-1 text-sm bg-transparent focus:outline-none w-20 cursor-pointer"
                  showPopperArrow={false}
                  popperPlacement="bottom-end"
                  disabled={!checkInDate}
                />
                {!checkOutDate && (
                  <HiOutlineCalendar className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                )}
              </div>
            </div>

            {/* ADULT */}
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-normal">ADULT</span>
              <div className="flex items-center space-x-2">
                <button type="button" onClick={() => setAdults(a => Math.max(1, a - 1))} className="p-[2px] border border-gray-300 rounded text-gray-600 hover:text-black">
                  <AiOutlineMinus size={14} />
                </button>
                <span className="text-sm">{adults}</span>
                <button type="button" onClick={() => setAdults(a => a + 1)} className="p-[2px] border border-gray-300 rounded text-gray-600 hover:text-black">
                  <AiOutlinePlus size={14} />
                </button>
              </div>
            </div>

            {/* BOOK NOW */}
            <button type="button" onClick={handleBookNow} className="w-full flex items-center justify-center gap-2 py-2 border border-gray-300 uppercase text-[13px] font-jost font-medium hover:bg-gray-100 transition">
              <span>Book Now</span>
              <BellSvg width={26} height={16} color="#000" />
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}
