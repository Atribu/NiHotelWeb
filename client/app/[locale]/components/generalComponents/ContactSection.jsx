// components/ContactSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MailSvg from "./MailSvg";
import PhoneSvg from "./PhoneSvg";
import { useTranslations } from 'next-intl';

export default function ContactSection() {
  const t = useTranslations('Contact');
  
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section className="bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* LEFT */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold font-cormorant">{t("header")}</h2>
          <p className="mt-4 text-gray-600">
          {t("description")}
          </p>

          <div className="mt-8 space-y-6">
            {/* Phone */}
            <div>
              <p className="text-sm text-gray-800"> {t("callCenterLabel")}</p>
              <div className="mt-2 flex items-center bg-white border border-gray-200  px-4 py-3 shadow-sm">
              <PhoneSvg width={28} height={20} className="flex" color="#00a1af"/>
                <input
                  type="tel"
                  placeholder="+90 555 123 45 67"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="ml-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <p className="text-sm text-gray-800">  {t("emailLabel")}</p>
              <div className="mt-2 flex items-center bg-white border border-gray-200  px-4 py-3 shadow-sm">
                <MailSvg width={28} height={20} className="flex" color="#00a1af"/>
                <input
                  type="email"
                  placeholder="callcenter@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full md:w-auto mt-4 bg-[#00a1af] hover:bg-[#00a1af] text-white font-medium py-3 px-6 ">
            {t("buttonText")}
            </button>
          </div>
        </div>

        {/* RIGHT (Illustration) */}
        <div className="hidden md:block w-full md:w-1/2">
          <Image
            src="/contact-illustration.svg"
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
