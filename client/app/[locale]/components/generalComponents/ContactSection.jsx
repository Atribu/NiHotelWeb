// components/ContactSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MailSvg from "./MailSvg";
import PhoneSvg from "./PhoneSvg";
import { useTranslations } from 'next-intl';
import img from "../../../../public/images/callcenter.webp"
import Link from "next/link";

export default function ContactSection() {
  const t = useTranslations('Contact');
  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="w-[90%] sm:w-[80%] md:w-1/2 items-center justify-center text-center md:items-start md:justify-start md:text-start">
          <h2 className="text-[24px] lg:text-3xl font-medium font-cormorant">{t("header")}</h2>
          <p className="mt-4 text-gray-600 text-[12px] md:text-[14px] lg:text-[14px]">
          {t("description")}
          </p>

          <div className="mt-8 space-y-6">
            {/* Phone */}
            <div>
              <p className="text-sm text-gray-800"> {t("callCenterLabel")}</p>
              <Link href="tel:+902422121264" className="mt-2 flex items-center bg-white border border-gray-200  px-4 py-3 shadow-sm">
              <PhoneSvg width={28} height={20} className="flex" color="#00a1af"/>
                <input
                  type="tel"
                  placeholder="+90 242 212 12 64"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="ml-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px] cursor-pointer"
                />
              </Link>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-gray-800">  {t("emailLabel")}</p>
              <Link href="mailto:callcenter@nihotellara.com" className="mt-2 flex items-center bg-white border border-gray-200  px-4 py-3 shadow-sm">
                <MailSvg width={28} height={20} className="flex" color="#00a1af"/>
                <input
                  type="email"
                  placeholder="callcenter@nihotellara.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px]  cursor-pointer"
                />
              </Link>
            </div>

            {/* Button */}
            <button className="w-1/2 md:w-auto mt-1 lg:mt-4 bg-[#00a1af] hover:bg-white text-white hover:text-[#00a1af] border-[#00a1af] border font-medium py-2 px-6 text-[14px] lg:text-[16px] whitespace-nowrap">
            {t("buttonText")}
            </button>
          </div>
        </div>

        {/* RIGHT (Illustration) */}
        <div className="hidden md:block w-full md:w-1/2">
          <Image
            src={img}
            alt="Contact Illustration"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
