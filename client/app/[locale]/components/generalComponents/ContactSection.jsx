// components/ContactSection.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MailSvg from "./MailSvg";
import PhoneSvg from "./PhoneSvg";
import { useTranslations } from 'next-intl';
import callcenter from "../../../../public/images/callcenter2.png";
import ContactFormModal from "./ContactFormModal"; // İsimlendirmeye dikkat!
import { Link } from '@/i18n/navigation';;

export default function ContactSection() {
  const t = useTranslations('Contact');
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="bg-[#fefdfc] py-8 lg:py-16 px-4">
      <div className="md:max-w-[800px] lg:max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* LEFT KISIM */}
        <div className="w-[90%] sm:w-[80%] md:w-[60%] text-start">
          <h2 className="text-[24px] lg:text-3xl font-['Cormorant_Garamond'] font-semibold lg:font-bold">
            {t("header")}
          </h2>
          <p className="mt-2 lg:mt-4 text-gray-600 text-[12px] md:text-[14px] w-[60%] md:w-[90%]">
            {t("description")}
          </p>

          <div className="mt-6 lg:mt-8 space-y-4 lg:space-y-6">
            {/* Phone */}
            <div>
              <p className="text-sm text-gray-800">{t("callCenterLabel")}</p>
              <Link
                href="tel:+902422121264"
                className="mt-2 flex items-center bg-white border border-gray-200 px-4 py-2 lg:py-3 shadow-sm"
              >
                <PhoneSvg width={28} height={20} className="flex" color="#dec7a6" />
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
              <p className="text-sm text-gray-800">{t("emailLabel")}</p>
              <Link
                href="mailto:callcenter@nihotellara.com"
                className="mt-2 flex items-center bg-white border border-gray-200 px-4 py-2 lg:py-3 shadow-sm"
              >
                <MailSvg width={28} height={20} className="flex" color="#dec7a6" />
                <input
                  type="email"
                  placeholder="callcenter@nihotellara.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="ml-3 w-full text-gray-700 placeholder-gray-400 focus:outline-none placeholder:text-[14px] lg:placeholder:text-[16px]  cursor-pointer"
                />
              </Link>
            </div>

            {/* Buton */}
            <button
              onClick={() => setModalOpen(true)}
              className="w-full lg:w-1/2 md:w-auto mt-2 lg:mt-4 bg-[#dec7a6] hover:bg-white text-white hover:text-[#dec7a6] border-[#dec7a6] border font-medium py-2 px-6 text-[14px] lg:text-[16px] whitespace-nowrap"
            >
              {t("buttonText")}
            </button>
          </div>
        </div>

        {/* Modal */}
        <ContactFormModal modalOpen={modalOpen} setModalOpen={setModalOpen} />

        {/* Sağ (İllustration) */}
        <div className="hidden md:flex w-full md:w-[50%] lg:w-[50%] items-center justify-center">
          <Image
            src={callcenter}
            alt="Contact Illustration"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
        <div className="absolute md:hidden -right-20 top-0">
          <Image
            src={callcenter}
            alt="Contact Illustration"
            width={300}
            height={300}
            className="object-cover w-[60%]"
          />
        </div>
      </div>
    </section>
  );
}
