// components/SplitImageSection.jsx
"use client";
import img1 from "./images/img1.jpg";
import img2 from "./images/img22.png";
import imgup from "./images/imgup.png";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import img11 from "../../../../public/images/breakfast/DSCF8600.webp"
import img12 from "../../../../public/images/breakfast/DSCF86022.webp"
import sag from "../../../../public/images/sag.png"
import right from "../../../../public/images/right.png"
import ust from "../../../../public/images/ust.png"

import Image from "next/image";
import Link from "next/link";

export default function SplitImageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="flex flex-col max-w-[1200px] mx-auto px-4 gap-[35px] ">
        <div className="flex flex-col md:flex-row items-end justify-end relative md:mr-[6%] lg:mr-[6%]">
          <div className="relative w-full md:w-[68%]  overflow-hidden shadow-lg items-start justify-start flex">
          <div className="absolute inset-0 bg-black/30 z-[50]"></div>
          <Image
              src={ust}
              alt="Beach Bar & Restaurant"
              width={ust.width}
              height={ust.height}
              className="object-cover z-40"
            />
            <div className="absolute inset-0 px-8 flex flex-col justify-center text-white z-[60]">
            <Image src={NiHotelLogo} alt="logo" className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] flex z-[100]"/>
              <p className="mt-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed w-[80%] z-[100]">
                Iconic Beach and Restaurant is an ideal paradise to relax and
                cool off on hot summer days! Discover the exclusive cocktails,
                refreshing drinks, and delicious snacks right by the sea.
              </p>
              <Link
                href="#"
                className="z-[100] mt-4 w-[110px] lg:w-[150px] font-jost font-medium items-center justify-center text-center text-sm md:text-[16px] lg:text-[18px] uppercase border-[2px] border-white py-2 px-4 hover:bg-white hover:text-[#8cbfc5] transition leading-[125%]"
              >
                EXPLORE
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-[20px] md:max-w-[34.7%] lg:max-w-[34.6%]  overflow-hidden hidden md:flex">
            <Image
              src={sag}
              alt="Beach Bar & Restaurant"
              width={sag.width}
              height={sag.height}
              className="object-cover  z-[10] "
            />
             <div className="absolute inset-0 bg-black/30  z-[10]"></div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-start md:ml-[10%] lg:ml-[6%]">
          {/* Sol Kart */}
          <div className="relative w-full md:w-[52%] lg:w-[55%] overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-black/25 z-[1]"></div>
            <Image src={img12} alt="Muco Hotel" width={img12.width} height={img12.height} className="object-cover " />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white z-[100]">
            <Image src={NiHotelLogo} alt="logo" className="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] flex z-[100]"/>
              <h3 className="text-sm lg:text-[16px] uppercase font-medium">MUCHO SELECTION HOTEL</h3>
              <p className="mt-2 text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] leading-relaxed w-[80%] font-medium">
                Mucho Selection Hotel is a hotel located in the Asarlık area, in
                Bodrum, Turkey. This hotel offers a comfortable stay for
                travelers who want to enjoy the beauty of Bodrum.
              </p>
              <Link
                href="#"
                className="mt-4 w-[110px] lg:w-[150px] font-jost font-medium items-center justify-center text-center text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] uppercase border-[2px] border-white py-2 px-4 hover:bg-white hover:text-[#8cbfc5] transition leading-[125%]"
              >
                EXPLORE
              </Link>
            </div>
          </div>

          {/* Sağ Kart (sol alt köşe 40px kırpıldı) */}
        </div>
      </div>
    </section>
  );
}
