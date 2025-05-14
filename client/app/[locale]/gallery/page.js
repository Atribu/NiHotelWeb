// app/galeri/page.jsx
"use client";
import img1 from "./images/lobi/DSCF8651.webp"
import img2 from "./images/lobi/DSCF8658.webp"
import img3 from "./images/lobi/DSCF8663.webp"
import img4 from "./images/lobi/DSCF8673.webp"
import img5 from "./images/lobi/DSCF8675.webp"
import img6 from "./images/lobi/DSCF8676.webp"
import img7 from "./images/lobi/DSCF8677.webp"
import img8 from "./images/lobi/DSCF8651yakın.webp"
import img9 from "./images/lobi/DSCF8656.webp"
import img10 from "./images/lobi/DSCF8661.webp"
import img11 from "./images/lobi/DSCF8695.webp"
import img12 from "./images/lobi/DSCF8700.webp"
import img13 from "./images/lobi/DSCF8702.webp"
import img14 from "./images/lobi/DSCF8704.webp"

import { useState } from "react";
import Image from "next/image";



// Galeri görüntülerini public/images/galeri klasörüne yerleştirin
const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14
];

export default function GalleryPage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Banner */}
      <section className="relative h-64 lg:h-[50vh]">
        <Image
          src={img2}
          alt="Galerimiz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            Galeri
          </h1>
        </div>
      </section>

      {/* Galeri Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => setSelectedImg(src)}
            >
              <Image
                src={src}
                alt={`Galeri ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Lightbox */}
      {selectedImg && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-2 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <Image
              src={selectedImg}
              alt="Büyütülmüş Görsel"
              width={800}
              height={600}
              className="object-contain max-h-[90vh] w-full"
            />
          </div>
        </div>
      )}
    </main>
  );
}
