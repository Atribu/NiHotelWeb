// app/galeri/page.jsx
"use client";
import React, { useState, useEffect } from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import img1 from "./images/lobi/DSCF8651.webp"
import img2 from "./images/lobi/DSCF8658.webp"
import img3 from "./images/lobi/DSCF8663.webp"
import img4 from "./images/lobi/DSCF8673.webp"
import img5 from "./images/lobi/DSCF8675.webp"
import img6 from "./images/lobi/DSCF8676.webp"
import img7 from "./images/lobi/DSCF8677.webp"
import img8 from "./images/lobi/1.webp"
import img9 from "./images/lobi/2.webp"
import img10 from "./images/lobi/3.webp"
import img11 from "./images/lobi/DSCF8695.webp"
import img12 from "./images/lobi/DSCF8700.webp"
import img13 from "./images/lobi/DSCF8754.webp"
import img14 from "./images/lobi/DSCF8745.webp"

import kitchen1 from "../../../public/images/breakfast/DSCF8599.webp"
import kitchen2 from "../../../public/images/breakfast/DSCF8600.webp"
import kitchen3 from "../../../public/images/breakfast/DSCF8601.webp"
import kitchen4 from "../../../public/images/breakfast/DSCF8602.webp"
import kitchen5 from "../../../public/images/breakfast/DSCF8631.webp"
import kitchen6 from "../../../public/images/breakfast/DSCF8606.webp"
import kitchen7 from "../../../public/images/breakfast/DSCF8613.webp"
import kitchen8 from "../../../public/images/breakfast/DSCF8615.webp"
import kitchen9 from "../../../public/images/breakfast/DSCF8617.webp"
import kitchen10 from "../../../public/images/breakfast/DSCF8619.webp"
import kitchen11 from "../../../public/images/breakfast/DSCF8620.webp"
import kitchen13 from "../../../public/images/breakfast/DSCF8627.webp"

import room1 from "../../../public/images/rooms/standardroom/NI-STANDART.webp"
import room2 from "../../../public/images/rooms/standardroom/NI-STANDART2.webp"
import room3 from "../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import room4 from "../../../public/images/rooms/juniorroom/NI-JUNIOR2.webp"
import room5 from "../../../public/images/rooms/veranda/NI-VERANDA.webp"
import room6 from "../../../public/images/rooms/veranda/NI-VERANDA2.webp"
import room7 from "../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import room8 from "../../../public/images/rooms/cornerroom/NI-CORNER2.webp"

import room9 from "../../../public/images/rooms/cornerroom/NI-CORNER4.webp"
import room10 from "../../../public/images/rooms/cornerroom/NI-CORNER5.webp"

import room11 from "../../../public/images/rooms/standardroom/NI-STANDART3.webp"
import room12 from "../../../public/images/rooms/standardroom/NI-STANDART4.webp"

import room13 from "../../../public/images/rooms/juniorroom/NI-JUNIOR3.webp"
import room14 from "../../../public/images/rooms/juniorroom/NI-JUNIOR4.webp"

import room15 from "../../../public/images/rooms/veranda/NI-VERANDA3.webp"
import room16 from "../../../public/images/rooms/veranda/NI-VERANDA4.webp"

import room17 from "../../../public/images/rooms/veranda/NI-VERANDA5.webp"
import room18 from "../../../public/images/rooms/veranda/NI-VERANDA6.webp"

import { useTranslations } from 'next-intl';

import Image from "next/image";
import GalleryBanner from "./components/GalleryBanner";

// Galeri görüntülerini public/images/galeri klasörüne yerleştirin
const images = [
    img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14
];

export default function GalleryPage() {
  const [modalIndex, setModalIndex] = useState(null);
  const t = useTranslations('Header');
  const [selectedImg, setSelectedImg] = useState(null);

  const imageCategories = {
    [t("lobby")]: [img1,img2, img3,img4,img5,img6, img7, img8, img9, img10, img11, img12, img13,img14],
    [t("rooms")]: [room1, room2, room3, room4, room5,room6,room7,room8,room9,room10,room11,room12,room13,room14,room15,room16,room17,room18],
    [t("kitchen")]: [kitchen1,kitchen2,kitchen3,kitchen4,kitchen5,kitchen6,kitchen7,kitchen8,kitchen9,kitchen10,kitchen11,kitchen13]

  }


const categories = Object.keys(imageCategories)
// Seçili kategori (başlangıçta "GENERAL VIEW")
const [selectedCategory, setSelectedCategory] = useState(categories[0])
const [modalImage, setModalImage] = useState(null) 

const openModal = (img, index) => {
  setModalImage(img);
  setModalIndex(index);
};

const scrollPrev = () => {
  const images = imageCategories[selectedCategory];
  const newIndex = modalIndex === 0 ? images.length - 1 : modalIndex - 1;
  setModalIndex(newIndex);
  setModalImage(images[newIndex]);
};

// Sağ ok: index'i artır, wrap-around uygulayarak ilk elemana geçsin
const scrollNext = () => {
  const images = imageCategories[selectedCategory];
  const newIndex = modalIndex === images.length - 1 ? 0 : modalIndex + 1;
  setModalIndex(newIndex);
  setModalImage(images[newIndex]);
};

useEffect(() => {
  if (!modalImage) return; // Modal kapalıysa listener ekleme
  
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      scrollPrev();
    } else if (e.key === "ArrowRight") {
      scrollNext();
    } else if (e.key === "Escape") {
      setModalImage(null);
    }
  };

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, [modalImage, scrollPrev, scrollNext]);

  return (
    <div className="flex flex-col">
      {/* Banner */}
     <GalleryBanner/>

      <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1400px] mx-auto">
      <div className="flex flex-col items-center justify-around w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[40px]">
        {/* Butonlar */}
        <div className="grid grid-cols-3 xl:flex items-center justify-center xl:justify-center gap-[10px] lg:gap-[35px] w-full max-w-[1400px]">
          {Object.keys(imageCategories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex cursor-pointer border border-lagoGray items-center justify-center whitespace-nowrap py-[12px] px-[16px] lg:py-[16px] lg:px-[20px] lg:w-[140px] text-[12px] lg:text-[14px] font-medium uppercase leading-[125%] -tracking-[0.33px] font-jost ${
                selectedCategory === category ? "bg-gray-800 text-white" : "text-gray-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Resimler */}
        <div className="flex lg:w-[1006px] h-[500px] md:h-[1000px] lg:h-[1200px]">
          <div className="flex flex-col w-full overflow-auto hover:overflow-scroll custom-scroll h-auto">
            <div className="columns-2 lg:columns-3 gap-[16px] lg:gap-[0px] transition-all duration-[350ms] ease-in-out cursor-pointer">
              {imageCategories[selectedCategory].map((imgSrc, index) => (
                <div
                  className="mb-[19.16px] transition-all duration-[350ms] ease-in-out cursor-pointer"
                  key={index}
                  onClick={() => openModal(imgSrc,index)} // Resme tıklandığında modal açılır
                >
                  <Image src={imgSrc} alt="gallery" className="lg:w-[322px] h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal (Lightbox) */}
        {modalImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={() => setModalImage(null)} // Modal dışına tıklandığında kapanır
          >
            <div className="relative w-[70%] " onClick={(e) => e.stopPropagation()}>
              <Image src={modalImage} alt="Enlarged gallery" className="w-full h-auto object-cover max-h-[730px]" />
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollPrev}
                aria-label="Previous"
              >
                <MdArrowBackIosNew size={32} />
              </button>
              {/* Sağ Ok */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white"
                onClick={scrollNext}
                aria-label="Next"
              >
                <MdArrowForwardIos size={32} />
              </button>
            </div>
            <button
                className="absolute top-20 right-10 text-white  px-3 py-1 text-4xl z-[9999] cursor-pointer"
                onClick={() => setModalImage(null)}
              >
                &times;
              </button>
          </div>
        )}

      </div>
    </div>
      
    </div>
  );
}
