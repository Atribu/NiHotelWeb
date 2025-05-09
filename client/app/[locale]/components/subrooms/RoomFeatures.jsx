// components/RoomFeatures.jsx
"use client";

import balcony from "../../../../public/images/rooms/balcony.png"
import smoke from "../../../../public/images/rooms/smoke.png"
import water from "../../../../public/images/rooms/water.png"
import puff from "../../../../public/images/rooms/puff.png"
import bathroom from "../../../../public/images/rooms/bathroom.png"
import keycard from "../../../../public/images/rooms/keycard.png"
import tv from "../../../../public/images/rooms/tv.png"
import soap from "../../../../public/images/rooms/soap.png"
import safe from "../../../../public/images/rooms/safe.png"
import coffee from "../../../../public/images/rooms/coffee.png"
import makeuptable from "../../../../public/images/rooms/makeuptable.png"
import hairdryer from "../../../../public/images/rooms/hairdryer.png"
import Image from "next/image";

export default function RoomFeatures() {
  // public/images/rooms altında tuttuğun resimlere string ile eriş
  const features = [
    { src: balcony,       label: "Balcony" },
    { src: tv,            label: "Smart TV" },
    { src: bathroom,      label: "Bathroom" },
    { src: smoke,         label: "Smoke Detector" },
    { src: soap,          label: "Hygienic Products" },
    { src: keycard,       label: "Key Card" },
    { src: water,         label: "Water" },
    { src: safe,          label: "Safe" },
    { src: puff,          label: "Puff" },
    { src: makeuptable,   label: "Makeup Table" },
    { src: coffee,        label: "Coffee Machine" },
    { src: hairdryer,     label: "Hair Dryer" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-8">ROOM FEATURES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 lg:gap-x-16 items-center justify-start ml-[9%]">
          {features.map(({ src, label }, idx) => (
            <div key={idx} className="flex items-center justify-start space-x-3">
              <Image
                src={src}
                alt={label}
                width={52}
                height={52}
                className="object-contain"
              />
              <span className="text-sm text-gray-700">{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-gray-600">
          <strong>Room Rules:</strong> Check-In: 02:00 PM Check-Out: 12:00 PM No Smoking Pets Allowed (Up to 10 kg)
        </p>
      </div>
    </section>
  );
}
