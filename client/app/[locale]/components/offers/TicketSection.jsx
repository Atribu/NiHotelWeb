import React from "react";
import OffersPlane from "./icons/OffersPlane";
import aviasales from "../../../../public/images/offers/aviasales.png";
import corendon from "../../../../public/images/offers/corendon.png";
import pegasus from "../../../../public/images/offers/pegasus.png";
import skyscanner from "../../../../public/images/offers/skyscanner.png";
import thy from "../../../../public/images/offers/thy.png";
import CustomImage from "./CustomImage";
import Image from "next/image";
import { Jost } from "next/font/google";
import clsx from "clsx";
import { Link } from '@/i18n/navigation';;
import "../../../globals.css"
import { useTranslations } from "next-intl";
const fontJost = Jost({
  weights: [400, 125, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

const CommercialImage = ({ image, alt }) => {
  return (
    <div className="relative flex h-[70px] w-[125px] items-center justify-center">
      <Image
        className="h-full w-full object-contain"
        src={image}
        fill
        alt={alt}
      />
    </div>
  );
};

const TicketSection = () => {
  return (
    <div className="relative ">
      <div className="relative mt-16 mb-0 hidden h-[300px] flex-col overflow-hidden lg:grid lg:grid-cols-2">
        <div className="flex flex-row items-start justify-center lg:pt-[100px] xl:pt-[150px] ">
          <div className="flex absolute top-[50px] flex-col items-start justify-center">
            <p className="text-[20px] font-medium uppercase">book Your Flight</p>
            <div className="grid grid-cols-3  items-center justify-center gap-10 ">
            <a target="_blank" rel="noreferrer noopener" href="https://www.flypgs.com/en/cities/flights-to-antalya">
              <CommercialImage image={pegasus} alt="Pegasus" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.turkishairlines.com/en-int/flights/flights-to-antalya/">
              <CommercialImage image={thy} alt="Turkish Airlines" />
              </a>
              <a target="_blank" rel="noreferrer noopener" href="https://www.corendonairlines.com/turkey/flights-to-antalya">
              <CommercialImage image={corendon} alt="Corendon" />
              </a>
            </div>
            <div className="mr-[60px] grid grid-cols-2 items-center justify-center gap-10">
            <a target="_blank" rel="noreferrer noopener" href="https://www.skyscanner.com.tr/ucak-bileti">
              <CommercialImage image={skyscanner} alt="Skyscanner" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.aviasales.ru/cities/antaliya-ayt">
              <CommercialImage image={aviasales} alt="Aviasales" />
            </a>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block ">
        <div className="absolute -top-32 right-0 overflow-x-hidden lg:-top-20">
          <OffersPlane className=" z-[999] mb-44 text-[#D9D9D9] lg:text-[12rem] xl:text-[14rem] 2xl:text-[16rem]" />
        </div>
        <div className="absolute top-0 z-[998] h-[2px] bg-[#D9D9D9] lg:w-[calc(100vw-315px)] xl:w-[calc(100vw-365px)] 2xl:w-[calc(100vw-400px)]"></div>
        <div className="absolute right-0 top-0 z-[998] h-[2px] bg-[#D9D9D9] lg:w-[190px] xl:w-[220px] 2xl:w-[260px] "></div>
      </div>
      <div className="hidden items-center  justify-center lg:flex">
        <p
          className={clsx(
            "mb-16 w-4/6 text-center text-[11px] font-light leading-[13px] text-[#B2B2B2]",
            fontJost.className,
          )}
        >
         lorem
        </p>
      </div>
    </div>
  );
};

export default TicketSection;