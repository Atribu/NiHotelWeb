import React from "react";

import Image from "next/image";
import { Jost } from "next/font/google";
import clsx from "clsx";
import "../../../globals.css";
import CustomImage from "./CustomImage";
import Link from 'next/link';

const fontJost = Jost({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});


function CardwLogo({
  img,
  logo,
  width,
  height,
  classNames,
  filter,
  text,
  children,
  btnText,
  href,
  cliped,
}) {

  return (
    <div
      className={`relative h-full w-full  overflow-hidden  ${
        classNames ? classNames : ""
      }`}
    >
      <CustomImage src={img} fill={true} alt={"hotel beach deck"} />
      <Link href={href} className={`absolute inset-0 z-40 ${filter} `}></Link>
      <div className=" absolute inset-0 flex flex-col items-center justify-between lg:items-start">
        <div
          className={clsx(
            "flex w-full items-center justify-between p-4  text-white  lg:flex-col lg:items-start lg:gap-2 xl:gap-3 3xl:gap-4 3xl:p-8 ",
            cliped ? "" : "lg:h-full",
          )}
        >
          {children}

          <p
            className={clsx(
              "hidden text-[8px] font-light lg:flex 2xl:text-xs  3xl:text-sm 4xl:text-lg",
              fontJost.className,
              cliped ? "" : "xl:w-[250px] 2xl:w-[300px] 3xl:w-full 4xl:w-[450px]",
            )}
          >
            {text}
          </p>
          <Link
            href={href}
            className="before:ease cursor-pointer relative z-[99] hidden overflow-hidden border border-white px-[20px] py-[8px] shadow-2xl transition-all duration-700 before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:transition-all before:duration-700 hover:text-[#368292] hover:before:-rotate-180  lg:flex"
          >
            <span
              className={clsx(
                "relative z-10 text-[13px] font-medium uppercase leading-[0.75em] 3xl:text-xl",
                fontJost.className,
              )}
            >
              {btnText}
            </span>

          </Link>
          <div className="rounded-4 border-2 border-white p-1 lg:hidden">
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardwLogo;
