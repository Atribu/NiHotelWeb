// components/BackgroundImage.jsx
"use client";

import React from 'react';
import Image from 'next/image';
import img2 from '../../../../public/images//antalyakaleici.png';
import img from '../../../../public/images/antalyaview2.jpg';
import { useTranslations } from 'next-intl';

export default function BackgroundImage() {
  const t = useTranslations('Footer');

  return (
    <div className="flex flex-col lg:max-h-[90vh] w-screen bg-center bg-cover justify-center items-center relative gap-8 mt-5 ">
      {/* Text overlay */}
      <div className="z-10 flex flex-col w-[65%] lg:w-[40%] max-w-[400px] gap-2 lg:gap-4 items-center justify-center text-center">
        <h2 className="text-[26px] lg:text-[32px] font-['Cormorant_Garamond'] font-bold">
          LARA / ANTALYA
        </h2>
        <p className="text-[14px] lg:text-[16px] font-jost">
         {t("text")}
        </p>
      </div>

      {/* Image with top gradient overlay */}
      <div className="relative w-screen max-h-[68vh] overflow-hidden">
        <Image
          src={img2}
          alt="waterfall"
          width={img2.width}
          height={img2.height}
          className="object-cover object-center w-screen"
          priority
        />
        {/* Top white-to-transparent gradient */}
        <div
          className="absolute top-0 left-0 w-full h-[15%] 
                     bg-[linear-gradient(180deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0)_100%)] 
                     pointer-events-none"
        />
      </div>
    </div>
  );
}
