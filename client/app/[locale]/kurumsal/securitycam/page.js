"use client";

import React from "react";
import Image from "next/image";
import aboutBanner from "../../gallery/images/lobi/LOBI1.webp";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const Page = () => {
  const t = useTranslations("CameraPage");
  const locale = useLocale(); // aktif dil prefix'i

  const section2List = t.raw("section2List");
  const section6List = t.raw("section6List");
  const section7List = t.raw("section7List");

  return (
    <main>
      {/* BANNER */}
      <section className="relative h-[50vh] lg:h-[60vh] ">
        <Image
          src={aboutBanner}
          alt="Camera Info Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-['Cormorant_Garamond'] text-white font-bold">
            {t("bannerTitle")}
          </h1>
        </div>
      </section>

      {/* İÇERİK */}
      <section className="container mx-auto px-4 py-10 lg:py-12 md:px-8 font-['Cormorant_Garamond'] font-bold">
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("responsibleTitle")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70">
          {t("responsibleText")}
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70">
          <span className="font-bold">{t("address")}</span> {t("addressText")}
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 font-normal">
          <span className="font-bold">{t("phone")}</span> {t("phoneText")}
        </p>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mb-4 lg:mb-8">
          <Link href={`/${locale}`} className="font-bold">
            {t("email")}
          </Link>{" "}
          {t("emailText")}
        </p>

        {/* 1 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section1Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mb-4 lg:mb-8">
          {t("section1Text")}
        </p>

        {/* 2 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section2Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70">
          {t("section2Intro")}
        </p>
        {section2List.map((item, i) => (
          <p
            key={i}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70"
          >
            - {item}
          </p>
        ))}

        {/* 3 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section3Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mb-4 lg:mb-8">
          {t("section3Text")}
        </p>

        {/* 4 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section4Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mb-4 lg:mb-8">
          {t("section4Text")}
        </p>

        {/* 5 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section5Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mb-4 lg:mb-8">
          {t("section5Text")}
        </p>

        {/* 6 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section6Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 font-bold">
          {t("section6Intro")}
        </p>
        {section6List.map((item, i) => (
          <p
            key={i}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70"
          >
            - {item}
          </p>
        ))}

        {/* 7 */}
        <h3 className="text-[24px] lg:text-[30px] font-black">
          {t("section7Title")}
        </h3>
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70">
          {t("section7Intro")}
        </p>
        {section7List.map((item, i) => (
          <p
            key={i}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70"
          >
            - {item}
          </p>
        ))}
        <p className="text-[14px] md:text-[16px] lg:text-[18px] text-black/70 mt-5 lg:mt-10">
          {t("section7Footer")}
        </p>
      </section>
    </main>
  );
};

export default Page;
