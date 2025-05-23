// components/SplitImageSection.jsx
"use client";
import img1 from "../../gallery/images/lobi/1.webp";
import imgup from "./images/imgup.png";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import img11 from "../../../../public/images/breakfast/DSCF8600.webp"
import img12 from "../../gallery/images/lobi/DSCF8725.webp"
import sag from "../../../../public/images/sag.png"
import ust from "../../../../public/images/ust.png"
import { useTranslations } from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import clock from "../../../../public/svg/SAATSON.svg"
import CardwLogo from "./CardwLogo";

export default function SplitImageSection() {
  const t = useTranslations('About');

  return (
    <section className="mb-[70px] md:mb-[85px] flex justify-center lg:mb-[50px] lg:mt-[30px] lg:px-4 xl:mb-[65px] xl:mt-[40px] 2xl:mb-[80px] 2xl:mt-[45px] 3xl:mb-[100px] 3xl:mt-[60px] 4xl:mb-[130px] 4xl:mt-[75px] 5xl:mb-[200px] 5xl:mt-[120px]">
      <div className=" relative mt-[75px] md:mt-[85px] w-[390px] md:w-[410px] lg:mt-10 lg:w-[540px] xl:w-[620px] 2xl:w-[820px] 3xl:w-[920px] 4xl:w-[1250px] 5xl:w-[1850px]">
        <div className=" absolute -top-20 -left-20 md:-top-24 md:-left-28 xl:top-20 2xl:-top-36 lg:-left-36 2xl:-left-44">
          <Image src={clock} alt="hotel" className="text-[210px] lg:text-[305px] xl:text-[700px] hidden 2xl:flex 2xl:text-[800px]" width={900} height={900} />
          <Image src={clock} alt="hotel" className="text-[210px] lg:text-[305px] xl:text-[700px] hidden lg:flex 2xl:hidden" width={600} height={600} />
          <Image src={clock} alt="hotel" className="text-[210px] hidden md:flex lg:hidden" width={400} height={400} />
          <Image src={clock} alt="hotel" className="text-[280px] flex md:hidden" width={400} height={400} />
        </div>

        <div className=" flex w-full justify-end px-4 lg:mt-[30px] lg:px-0 xl:mt-[45px] 2xl:mt-[55px] 3xl:mt-[60px] 4xl:mt-[95px] 5xl:mt-[135px]">
          <div className="cardClip h-[250px] w-[230px]  lg:h-[300px] lg:w-[295px] xl:h-[400px] xl:w-[340px] 2xl:h-[495px] 2xl:w-[445px] 3xl:h-[570px] 3xl:w-[485px] 4xl:h-[760px] 4xl:w-[675px] 5xl:h-[1140px] 5xl:w-[1015px] ">

            <CardwLogo
              width={230}
              height={250}
              img={img1}
              text= {t("text1")}
              classNames={"cardClip rounded-sm md:rounded-none"}
              btnText= {t("explore")}
              filter={"bg-black/30"}
              href={"/rooms"}
              cliped={true}
            >
              
                {/* <InoneCardLogo className="text-xl sm:text-3xl md:text-3xl  lg:ml-[-9px] lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl" /> */}
            </CardwLogo>
         
          </div>
        </div>
        <div className="mx-4 -mt-[95px]  bg-orange-500  md:-mt-[97.5px] h-[150px] w-[190px] md:h-[150px] md:w-[210px] lg:mx-0 lg:-mt-[118px] lg:h-[200px] lg:w-[310px] xl:-mt-[155px] xl:h-[190px] xl:w-[362.5px] 2xl:-mt-[200px] 2xl:h-[265px] 2xl:w-[485px] 3xl:-mt-[235px] 3xl:h-[300px] 3xl:w-[555px] 4xl:-mt-[315px] 4xl:h-[405px] 4xl:w-[747.5px] 5xl:-mt-[462.5px] 5xl:h-[610px] 5xl:w-[1090px]">
      
        <CardwLogo
            width={300}
            href={"/rooms"}
            height={200}
            img={img12}
            text=  {t("text2")}
            filter={"bg-black/30"}
            btnText={t("explore")}
            
            cliped={false}
          >
                {/* <IconicCardLogo className="text-xl sm:text-3xl md:text-3xl  lg:ml-[-9px] lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl" /> */}
          </CardwLogo>
        
        </div>
      </div>
   
    </section>
  );
}
