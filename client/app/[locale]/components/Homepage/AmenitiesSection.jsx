// components/AmenitiesSection.jsx
"use client";

import { FaWifi, FaGift, FaCoffee } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { MdCleaningServices, MdPool } from "react-icons/md";

export default function AmenitiesSection() {
  const amenities = [
    { Icon: MdPool,           label: "Outdoor Pool" },
    { Icon: FaWifi,           label: "Strong Wi-Fi" },
    { Icon: FaGift,           label: "Welcome Treat" },
    { Icon: FaCoffee,         label: "Buffet Breakfast" },
    { Icon: GiPalmTree,       label: "Next to Sea Shore" },
    { Icon: MdCleaningServices, label: "Daily Cleaning" },
  ];

  return (
    <section className="slats-section py-56">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center  items-center justify-center">
        <h2 className="text-3xl font-['Cormorant_Garamond'] font-bold mb-2">AMENITIES</h2>
        <p className="text-gray-600 mb-12">
          High-quality service and bohemian-style interlane with care in Ni Hotel
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {amenities.map(({ Icon, label }) => (
            <div
              key={label}
              className="w-24 h-24 bg-white border border-gray-200 flex flex-col items-center justify-center space-y-2 shadow-sm font-jost"
            >
              <Icon className="text-gray-400 w-6 h-6" />
              <span className="text-xs text-gray-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
