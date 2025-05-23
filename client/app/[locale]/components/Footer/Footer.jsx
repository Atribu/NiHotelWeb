// components/Footer.jsx
"use client";
import React, { useState } from "react";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTripadvisor,
  FaFacebook
} from 'react-icons/fa';
import { IoIosArrowDown } from "react-icons/io";
import DgtlfaceSvg from "../generalComponents/DgtlfaceSvg";
import { useTranslations } from 'next-intl';
import img from "../../../../public/images/nihotelLeaf.png"
import Link from "next/link";

export default function Footer() {
    const t = useTranslations('Footer');
    const [isRoomsOpen, setIsRoomsOpen] = useState(false);

  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-10 lg:pt-20">
        {/* columns */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start lg:space-x-8 space-y-8 lg:space-y-0">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start">
            <Image
              src={NiHotelLogo}
              alt="Logo"
              width={100}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Mobile İletişim Bilgileri */}
          <div className="grid grid-cols-2 lg:hidden gap-3 flex-col items-center lg:items-start space-y-2 lg:space-y-3 lg:border-l lg:border-gray-200 lg:pl-8 text-center text-[11px]">
            <div className="flex gap-1 items-center justify-start">
              <div className="flex items-center justify-center text-center h-[36px] w-[36px] rounded golge">
              <FaPhone className="transform scale-x-[-1]" />
              </div>
            <div className="flex flex-col gap-1 items-start justify-start">
              <p> {t("hotelline")}</p>
            <a href="tel:+902422121264" className="flex items-center text-gray-600 hover:text-gray-800">
            +90 242 212 12 64
            </a>
            </div>
            </div>

            <div className="flex gap-1 items-center justify-start">
              <div className="flex items-center justify-center text-center h-[36px] w-[36px] rounded golge">
              <FaPhone className="transform scale-x-[-1]" />
              </div>
            <div className="flex flex-col gap-1 items-start justify-start">
              <p> {t("callcenterline")}</p>
            <a href="tel:+905317148252 " className="flex items-center text-gray-600 hover:text-gray-800">
            +90 531 714 82 52 
            </a>
            </div>
            </div>


            <div className="flex gap-1 items-center justify-start">
              <div className="flex items-center justify-center text-center h-[36px] w-[36px] rounded golge">
              <FaEnvelope className="transform scale-x-[-1]" />
              </div>
            <div className="flex flex-col gap-1 items-start justify-start">
              <p> {t("callcenteremail")}</p>
            <a href="mailto:callcenter@nihotellara.com"className="flex items-center text-gray-600 hover:text-gray-800 leading-[110%] text-[11px]">
            callcenter@nihotellara.com
            </a>
            </div>
            </div>


            <div className="flex gap-1 items-center justify-start">
              <div className="flex items-center justify-center text-center h-[36px] w-[36px] rounded golge">
              <FaMapMarkerAlt className="transform scale-x-[-1]" />
              </div>
            <div className="flex flex-col gap-1 items-start justify-start">
              <p> {t("address")}</p>
            <a href="mailto:callcenter@nihotellara.com"className="flex items-center text-gray-600 hover:text-gray-800">
          Muratpaşa/Antalya
            </a>
            </div>
            </div>
    
          </div>
          
          <div className="flex golge md:hidden flex-col w-full items-center justify-center font-jost font-medium text-[16px]">
            <div
              onClick={() => setIsRoomsOpen(!isRoomsOpen)}
              className="flex w-[98%] p-[10px] md:max-w-[306px] items-center justify-between border border-white leading-[26.667px] uppercase"
            >
              {t("accommodation")} <IoIosArrowDown className="flex" width={25} height={25} />
            </div>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isRoomsOpen ? "max-h-[200px] opacity-100 w-[90%]" : "max-h-0 opacity-0 w-[90%]"
              }`}
            >
              <div className="mt-2 space-y-2 pl-4 border-l border-white/30 font-jost">
              <Link
                  href="/rooms/"
                  className="block text-[14px]  leading-[29.639px] uppercase"
                >
                 {t("rooms")}
                </Link>
                <Link
                  href="/rooms/standardroom"
                  className="block text-[14px]  leading-[29.639px] uppercase"
                >
                  {t("standardRoom")}
                </Link>
                <Link
                  href="/rooms/juniorroom"
                  className="block text-[14px]  leading-[29.639px] uppercase"
                >
                   {t("juniorRoom")}
                </Link>
                <Link
                  href="/rooms/verandaroom"
                  className="block text-[14px]  leading-[29.639px] uppercase"
                >
                  {t("verandaRoom")}
                </Link>
                <Link
                  href="/rooms/cornerroom"
                  className="block text-[14px]  leading-[29.639px] uppercase"
                >
                  {t("cornerRoom")}
                </Link>

              </div>
            </div>

            <Link
              href="/connect"
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px] uppercase"
            >
              {t("contactus")}{" "}
            </Link>

            <Link
              href="/gallery"
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px] uppercase"
            >
              {t("gallery")}{" "}
            </Link>

            <Link
              href="/cerezpolıtıkası"
              className="flex w-[98%] p-[10px] md:max-w-[306px] mt-[15px] items-center justify-between border border-white leading-[26.667px] uppercase"
            >
             {t("cookiePolicy")}
            </Link>
           
          </div>

          <div className="flex md:hidden w-full items-center justify-center gap-[10px] z-[990]">
            <Link href="https://www.tripadvisor.com.tr/" className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center z-50"><FaTripadvisor className="w-6 h-6" color="#A7ABAD"/></Link>
            <Link rel="norefferer nofollower"
                  target="_blank" href="https://www.facebook.com/" className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center z-[999]"> <FaFacebook className="w-6 h-6" color='#A7ABAD'/></Link>
            <Link rel="norefferer nofollower"
                  target="_blank" href="https://www.youtube.com/" className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center z-50"> <FaYoutube className="w-6 h-6" color='#A7ABAD'/></Link>
            <Link rel="norefferer nofollower"
                  target="_blank" href="https://www.instagram.com/" className="flex bg-white rounded-[4px] shadow-divCustom w-[42.412px] h-[42.412px] items-center justify-center z-50"><FaInstagram className="w-6 h-6" color='#A7ABAD'/></Link>
          </div>

      <div className="md:flex flex-row items-center justify-center gap-10">
            {/* Hızlı Linkler */}
            <div className="flex flex-col items-center lg:items-start space-y-1 lg:space-y-2">
            <a href="/about" className="text-gray-600 hover:text-gray-800">{t("aboutus")}</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-800">{t("contactus")}</a>
            <a href="/gallery" className="text-gray-600 hover:text-gray-800">{t("gallery")}</a>
          </div>
          
          {/* Politikalar */}
          <div className="flex flex-col items-center lg:items-start space-y-1 lg:space-y-2 lg:border-l lg:border-gray-200 lg:pl-8">
            <a href="/cookie-policy" className="text-gray-600 hover:text-gray-800">{t("cookiePolicy")}</a>
            <a href="/privacy-policy" className="text-gray-600 hover:text-gray-800">{t("privacyPolicy")}</a>
            <a href="/fact-sheet" className="text-gray-600 hover:text-gray-800">{t("factsheet")}</a>
          </div>
      </div>
          
          {/* İletişim Bilgileri */}
          <div className="hidden lg:flex flex-col items-center lg:items-start space-y-2 lg:space-y-3 lg:border-l lg:border-gray-200 lg:pl-8 text-center">
            <a href="tel:+902422121264" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaPhone className="mr-2" />+90 242 212 12 64
            </a>
            <a href="tel:+905317148252 " className="flex items-center text-gray-600 hover:text-gray-800">
              <FaPhone className="mr-2" />+90 531 714 82 52 
            </a>
            <a href="mailto:callcenter@nihotellara.com" className="flex items-center text-gray-600 hover:text-gray-800">
              <FaEnvelope className="mr-2" />callcenter@nihotellara.com
            </a>
            <div className="flex items-start text-gray-600">
              <FaMapMarkerAlt className="mt-1 mr-2" />
              Çağlayan Mah. 2005 Sk. No: 30 PK - 7230 Muratpaşa/Antalya
            </div>
          </div>
          
          {/* Sosyal Medya */}
          <div className="hidden md:flex justify-center lg:justify-start items-center space-x-4 lg:border-l lg:border-gray-200 lg:pl-8">
            <a href="https://www.facebook.com/p/Ni-Hotel-Lara-100075601707373/" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/nihotellara/" rel="norefferer nofollower"
                  target="_blank" className="p-2 bg-gray-100 rounded hover:bg-gray-200">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Alt Powered By */}
        <div className="flex items-center justify-center my-5 lg:my-10  border-t border-gray-200 lg:pt-4 text-center text-gray-500 text-sm">
         <span className="flex mt-5 lg:mt-10 items-center justify-center"> Powered by © <DgtlfaceSvg className="flex" width={104} height={27}/></span>
        </div>
      </div>
      <Image src={img} alt='leaf' width={700} height={1300} className='absolute bottom-48 lg:-bottom-[50px] -right-[120px]  lg:-right-[220px] z-[99] transform rotate-[35deg] lg:rotate-[20deg] opacity-60'/>
    </footer>
  );
}
