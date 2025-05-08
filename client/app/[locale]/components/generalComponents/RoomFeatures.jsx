// components/RoomFeatures.jsx
"use client";

import { MdBalcony, MdTv, MdSmokeFree } from "react-icons/md";
import { FaShower, FaSoap, FaCoffee, FaWind } from "react-icons/fa";
import { RiKey2Line } from "react-icons/ri";
import { WiRaindrop } from "react-icons/wi";
import { GiSafe, GiFootStool, GiDressingTable } from "react-icons/gi";
import Image from "next/image";

export default function RoomFeatures() {
  const features = [
    { Icon: MdBalcony, label: "Balcony" },
    { Icon: MdTv, label: "Smart TV" },
    { Icon: FaShower, label: "Bathroom" },
    { Icon: MdSmokeFree, label: "Smoke Detector" },
    { Icon: FaSoap, label: "Hygienic Products" },
    { Icon: RiKey2Line, label: "Key Card" },
    { Icon: WiRaindrop, label: "Water" },
    { Icon: GiSafe, label: "Safe" },
    { Icon: GiFootStool, label: "Puff" },
    { Icon: GiDressingTable, label: "Makeup Table" },
    { Icon: FaCoffee, label: "Coffee Machine" },
    { Icon: FaWind, label: "Hair Dryer" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-8">ROOM FEATURES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-12">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex items-center space-x-3 justify-center">
              <Image className="w-6 h-6 text-gray-800" />
              <span className="text-sm text-gray-700">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-gray-600">
          <span className="font-semibold">Room Rules:</span>{" "}
          Check-In: 02:00 PM Check-Out: 12:00 PM No Smoking Pets Allowed (Up to 10 kg)
        </p>
      </div>
    </section>
  );
}
