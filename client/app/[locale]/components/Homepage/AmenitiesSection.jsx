// components/AmenitiesSection.jsx
"use client";

import { FaUserAlt, FaWifi, FaGift, FaPaw } from "react-icons/fa";
import { GiPalmTree } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";

export default function AmenitiesSection() {
  const amenities = [
    { Icon: FaUserAlt, label: "Adult Only" },
    { Icon: FaWifi, label: "Strong Wi-Fi" },
    { Icon: FaGift, label: "Welcome Treat" },
    { Icon: FaPaw, label: "Pet Friendly" },
    { Icon: GiPalmTree, label: "Next to Sea Shore" },
    { Icon: MdCleaningServices, label: "Daily Cleaning" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-2">AMENITIES</h2>
        <p className="text-gray-600 mb-12">
          High-quality service and bohemian-style interlane with care in Ni Hotel
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {amenities.map(({ Icon, label }) => (
            <div
              key={label}
              className="w-24 h-24 bg-white border border-gray-200 rounded-lg flex flex-col items-center justify-center space-y-2 shadow-sm"
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
