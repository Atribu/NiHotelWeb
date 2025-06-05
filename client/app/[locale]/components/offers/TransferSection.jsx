import React from "react";
import Image from "next/image";
import clsx from "clsx";
import { Link } from '@/i18n/navigation';;
import { Jost } from "next/font/google";
import "../../../globals.css";
import CustomImage from "./CustomImage";
import transfer from "../../../../public/images/offers/transfer.jpg";
import { useTranslations } from "next-intl";
const fontJost = Jost({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

const TransferSection = () => {
  return (
    <div className="wrapper mb-32 hidden items-center justify-center lg:flex">
      <Image
        className="relative"
        src={transfer}
        width={1500}
        height={1500}
        alt="callendar"
      />
      <div className="absolute flex w-[400px]  flex-col items-start gap-5 text-[#24292C] lg:right-[-20px] xl:right-[10%]">
        <p className="text-[20px] uppercase">lorem title</p>
        <p className={clsx("text-[13px] font-normal", fontJost.className)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quidem nulla, ipsam nemo possimus sunt hic quibusdam culpa itaque magnam veniam iusto praesentium optio sapiente ducimus obcaecati? A, animi libero.
        </p>
        <a target="_blank" href="https://nihotellara.rezervasyonal.com/en/?language=en">
           <button className="before:ease relative z-[99] hidden overflow-hidden border border-black px-[20px] py-[8px] text-black shadow-2xl transition-all duration-700 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-black before:transition-all before:duration-700 hover:text-white hover:before:-rotate-180 lg:flex xl:px-[27px]  xl:py-[12px]">
          <span
            className={clsx(
              "relative z-10 text-[13px] font-medium uppercase  leading-[0.75em]",
              fontJost.className,
            )}
          >
           lorem
          </span>
        </button>
        </a>
       
      </div>
    </div>
  );
};

export default TransferSection;