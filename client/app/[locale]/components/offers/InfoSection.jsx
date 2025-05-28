import React from "react";
import Image from "next/image";
import adresmark from "./adressmark.svg";
import inoneinfopic from "../../gallery/images/lobi/2.webp"
import logo from "../../../../public/NiHotel.svg";
import { Jost } from "next/font/google";
import clsx from "clsx";
const fontJost = Jost({
  weights: [400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

const InfoComponent = () => {
  
  return (
    <div className="wrapper mx-10 hidden flex-col  lg:flex ">
      <div className="flex flex-row items-center  gap-5 uppercase">
        <p className="whitespace-nowrap text-[25px] font-semibold text-[#24292C] 3xl:text-[35px]">
          NI HOTEL
        </p>
        <div className="h-[1px] w-full bg-[#D9D9D9]"></div>
      </div>
      <div className="mt-2">
        <a className="flex items-center gap-2" target="_blank" rel="noopenner norefferrer" href="https://maps.app.goo.gl/sHN7271qz4wNRYyd9">
        <Image src={adresmark} width={10} height={10} alt="mail" />
        <p className={clsx("text-[18px] text-black xl:text-2xl font-jost",fontJost.className)}>
           Antalya / Türkiye
        </p>
        <p className={clsx("text-[14px] text-gray-500 xl:text-xl",fontJost.className)}>View on the map </p>
        </a>
       
      </div>
      <div className="mt-10 grid grid-cols-12 content-between items-start ">
        <div className="relative col-span-5 flex h-full w-full  items-center justify-center ">
          <Image
            src={inoneinfopic}
            width={inoneinfopic.width}
            height={inoneinfopic.height}
            className="h-full w-full object-cover"
            alt="plane mobile"
          />
        </div>
        <div className="col-span-1"></div>
        <div className="col-span-6 flex w-full flex-col items-start gap-5 ">
          <div className="flex  justify-center gap-10 lg:ml-[-10px] lg:justify-start">
        <Image src={logo} alt="logo" width={150} height={150} className="hidden lg:flex"/>
        <Image src={logo} alt="logo" width={100} height={100} className="flex lg:hidden"/>
          </div>
          <div className="flex flex-col w-full lg:max-w-[500px] 2xl:max-w-[550px] ">
            <p
              className={clsx(
                "text-justify text-[13px] font-normal lg:text-[12px] 2xl:text-[15px]",
                fontJost.className,
              )}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam cum fugiat ipsam! Quas quis deleniti adipisci numquam nam voluptatum expedita sint, dolorum eius repellat animi necessitatibus ab odit corrupti soluta?
            </p>
            <br />
            <p
              className={clsx(
                "text-justify text-[13px] font-normal lg:text-[12px] 2xl:text-[15px]",
                fontJost.className,
              )}
            >
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odio reiciendis expedita beatae! Nobis voluptate, esse neque sapiente accusantium nostrum fugit eveniet adipisci obcaecati temporibus incidunt mollitia rerum praesentium in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
//https://maps.app.goo.gl/sHN7271qz4wNRYyd9