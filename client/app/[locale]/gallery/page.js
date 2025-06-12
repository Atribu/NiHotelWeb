"use client"
import React, { useState, useEffect } from "react"
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useTranslations } from 'next-intl';
import Image from "next/image";
import GalleryBanner from "./components/GalleryBanner";

// Lobby images
import img1 from "./images/lobi/LOBI1.webp";
import img2 from "./images/lobi/LOBI2.webp";
import img3 from "./images/lobi/LOBI3.webp";
import img4 from "./images/lobi/LOBI4.webp";
import img5 from "./images/lobi/LOBI5.webp";
import img6 from "./images/lobi/LOBI6.webp";
import img7 from "./images/lobi/LOBI7.webp";

// Kitchen images
import kitchen1 from "../../../public/images/breakfast/DSCF8599.webp";
import kitchen2 from "../../../public/images/breakfast/DSCF8600.webp";
import kitchen3 from "../../../public/images/breakfast/DSCF8601.webp";
import kitchen4 from "../../../public/images/breakfast/DSCF8602.webp";
import kitchen5 from "../../../public/images/breakfast/DSCF8631.webp";
import kitchen6 from "../../../public/images/breakfast/DSCF8606.webp";
import kitchen7 from "../../../public/images/breakfast/DSCF8613.webp";
import kitchen8 from "../../../public/images/breakfast/DSCF8615.webp";
import kitchen9 from "../../../public/images/breakfast/DSCF8617.webp";
import kitchen10 from "../../../public/images/breakfast/DSCF8619.webp";
import kitchen11 from "../../../public/images/breakfast/DSCF8620.webp";
import kitchen13 from "../../../public/images/breakfast/DSCF8627.webp";

// Room images groups
import room1 from "../../../public/images/rooms/standardroom/ODA1.webp";
import room2 from "../../../public/images/rooms/standardroom/ODA2.webp";
import room11 from "../../../public/images/rooms/standardroom/ODA3.webp";
import room12 from "../../../public/images/rooms/standardroom/ODA4.webp";
import room19 from "../../../public/images/rooms/standardroom/ODA5.webp";
import room20 from "../../../public/images/rooms/standardroom/ODA6.webp";
import room21 from "../../../public/images/rooms/standardroom/ODA7.webp";
import room22 from "../../../public/images/rooms/standardroom/ODA8.webp";

import room3 from "../../../public/images/rooms/juniorroom/ODA1.webp";
import room4 from "../../../public/images/rooms/juniorroom/ODA2.webp";
import room13 from "../../../public/images/rooms/juniorroom/ODA3.webp";
import room14 from "../../../public/images/rooms/juniorroom/ODA4.webp";
import room23 from "../../../public/images/rooms/juniorroom/ODA5.webp";

import room5 from "../../../public/images/rooms/veranda/ODA1.webp";
import room6 from "../../../public/images/rooms/veranda/ODA2.webp";
import room15 from "../../../public/images/rooms/veranda/ODA3.webp";
import room16 from "../../../public/images/rooms/veranda/ODA4.webp";
import room17 from "../../../public/images/rooms/veranda/ODA5.webp";
import room18 from "../../../public/images/rooms/veranda/ODA6.webp";

import room7 from "../../../public/images/rooms/cornerroom/oda1.webp";
import room8 from "../../../public/images/rooms/cornerroom/ODA2.webp";
import room9 from "../../../public/images/rooms/cornerroom/ODA4.webp";
import room10 from "../../../public/images/rooms/cornerroom/ODA5.webp";
import room24 from "../../../public/images/rooms/cornerroom/ODA6.webp";
import room25 from "../../../public/images/rooms/cornerroom/ODA7.webp";

export default function GalleryPage() {
  const t = useTranslations('Header');

  // Top-level categories
  const imageCategories = {
    [t("lobby")]: [img1, img2, img3, img4, img5, img6, img7],
    [t("rooms")]: [
      // all room images concatenated
      room1, room2, room11, room12,room19,room20,room21,room22,
      room3, room4, room13, room14,room23,
      room5, room6, room15, room16, room17, room18,
      room7, room8, room9, room10, room24, room25
    ],
    [t("kitchen")]: [kitchen1, kitchen2, kitchen3, kitchen4, kitchen5, kitchen6, kitchen7, kitchen8, kitchen9, kitchen10, kitchen11, kitchen13]
  };

  const categories = Object.keys(imageCategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Sub-categories for rooms only
  const subRoomCategories = {
    Standard: [room1, room2, room11, room12, room19, room20, room21, room22],
    Veranda: [room5, room6, room15, room16, room17, room18],
    Corner: [room7, room8, room9, room10, room24, room25],
    Junior: [room3, room4, room13, room14, room23]
  };
  const subCategoryKeys = ['All', ...Object.keys(subRoomCategories)];
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');

  const [modalImage, setModalImage] = useState(null);
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (img, index) => {
    setModalImage(img);
    setModalIndex(index);
  };

  const scrollPrev = () => {
    const images = getCurrentImages();
    const newIndex = modalIndex === 0 ? images.length - 1 : modalIndex - 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  const scrollNext = () => {
    const images = getCurrentImages();
    const newIndex = modalIndex === images.length - 1 ? 0 : modalIndex + 1;
    setModalIndex(newIndex);
    setModalImage(images[newIndex]);
  };

  useEffect(() => {
    if (!modalImage) return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      else if (e.key === "ArrowRight") scrollNext();
      else if (e.key === "Escape") setModalImage(null);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [modalImage]);

  // Determine which images to show
  function getCurrentImages() {
    if (selectedCategory === t("rooms")) {
      if (selectedSubCategory !== 'All') {
        return subRoomCategories[selectedSubCategory];
      }
      return imageCategories[selectedCategory];
    }
    return imageCategories[selectedCategory];
  }

  // When category changes, reset sub-category
  useEffect(() => {
    if (selectedCategory !== t("rooms")) {
      setSelectedSubCategory('All');
    }
  }, [selectedCategory]);

  return (
    <div className="flex flex-col">
      <GalleryBanner />
      <div className="flex w-screen items-center justify-center mt-[50px] max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center justify-around w-[87.79%] md:w-[91.4%] lg:w-[76.8%] gap-[40px]">
          {/* Top-level buttons */}
          <div className="flex flex-wrap items-center justify-center gap-[10px] lg:gap-[35px]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`border border-gray-800 whitespace-nowrap py-3 px-4 lg:py-4 lg:px-5 text-sm lg:text-base font-medium uppercase ${
                  selectedCategory === category ? 'bg-gray-800 text-white' : 'text-gray-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Sub-buttons for rooms only */}
          {selectedCategory === t("rooms") && (
            <div className="flex flex-wrap items-center justify-center gap-3">
              {subCategoryKeys.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setSelectedSubCategory(sub)}
                  className={`border border-gray-600 whitespace-nowrap py-2 px-3 text-xs lg:text-sm font-medium uppercase ${
                    selectedSubCategory === sub ? 'bg-gray-600 text-white' : 'text-gray-600'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Images grid */}
          <div className="flex lg:w-[1006px] h-auto md:h-[1000px] lg:h-[1200px] overflow-auto hover:overflow-scroll custom-scroll">
            <div className="columns-2 lg:columns-3 gap-4">
              {getCurrentImages().map((imgSrc, idx) => (
                <div key={idx} className="mb-4 cursor-pointer" onClick={() => openModal(imgSrc, idx)}>
                  <Image src={imgSrc} alt="gallery" className="w-full h-auto object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Modal */}
          {modalImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70" onClick={() => setModalImage(null)}>
              <div className="relative w-[70%]" onClick={(e) => e.stopPropagation()}>
                <Image src={modalImage} alt="Enlarged" className="w-full h-auto object-cover max-h-[730px]" />
                <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white" onClick={scrollPrev}>
                  <MdArrowBackIosNew size={32} />
                </button>
                <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-75 text-white" onClick={scrollNext}>
                  <MdArrowForwardIos size={32} />
                </button>
              </div>
              <button className="absolute top-4 right-4 text-white text-3xl" onClick={() => setModalImage(null)}>&times;</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
