// components/SplitImageSection.jsx
"use client";
import img1 from "../../gallery/images/lobi/1.webp";
import imgup from "./images/imgup.png";
import NiHotelLogo from "../../../../public/Header/NiHotel.svg"
import img11 from "../../../../public/images/breakfast/DSCF8600.webp"
// import img12 from "../../../../public/images/breakfast/DSCF86022.webp"
// import img12 from "../../gallery/images/lobi/DSCF8705.webp"
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
    <section className="mb-[100px] flex justify-center lg:mb-[50px] lg:mt-[30px] lg:px-4 xl:mb-[65px] xl:mt-[40px] 2xl:mb-[80px] 2xl:mt-[45px] 3xl:mb-[100px] 3xl:mt-[60px] 4xl:mb-[130px] 4xl:mt-[75px] 5xl:mb-[200px] 5xl:mt-[120px]">
      <div className=" relative mt-[35px] w-[300px] xs:w-[390px] lg:mt-0 lg:w-[500px] xl:w-[620px] 2xl:w-[750px] 3xl:w-[920px] 4xl:w-[1250px] 5xl:w-[1850px]">
        <div className=" absolute -top-36 -left-32">
          <Image src={clock} alt="hotel" className="text-[210px] lg:text-[305px] xl:text-[800px] 2xl:text-[800px]" width={800} height={800} />
        </div>

        <div className=" flex w-full justify-end px-4 lg:mt-[30px] lg:px-0 xl:mt-[45px] 2xl:mt-[55px] 3xl:mt-[60px] 4xl:mt-[95px] 5xl:mt-[135px]">
          <div className="cardClip h-[200px] w-[200px]  xs:h-[250px] xs:w-[230px] lg:h-[300px] lg:w-[275px] xl:h-[380px] xl:w-[340px] 2xl:h-[455px] 2xl:w-[405px] 3xl:h-[570px] 3xl:w-[485px] 4xl:h-[760px] 4xl:w-[675px] 5xl:h-[1140px] 5xl:w-[1015px]">

            <CardwLogo
              width={230}
              height={250}
              img={img1}
              text={" Hotel"}
              classNames={"cardClip rounded-4 sm:rounded-none"}
              btnText={"Explore"}
              href={"/rooms"}
              cliped={true}
            >
                {/* <InoneCardLogo className="text-xl xs:text-3xl md:text-3xl  lg:ml-[-9px] lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl" /> */}
            </CardwLogo>
         
          </div>
        </div>
        <div className="mx-4 -mt-[75px] h-[110px] w-[180px] bg-orange-500  xs:-mt-[97.5px] xs:h-[150px] xs:w-[190px] lg:mx-0 lg:-mt-[120px] lg:h-[180px] lg:w-[290px] xl:-mt-[155px] xl:h-[190px] xl:w-[362.5px] 2xl:-mt-[185px] 2xl:h-[245px] 2xl:w-[445px] 3xl:-mt-[235px] 3xl:h-[300px] 3xl:w-[555px] 4xl:-mt-[315px] 4xl:h-[405px] 4xl:w-[747.5px] 5xl:-mt-[462.5px] 5xl:h-[610px] 5xl:w-[1090px]">
      
          <CardwLogo
            width={300}
            href={"/beachandpool"}
            height={200}
            img={img12}
            text={ " Beach"}
            filter={"bg-orange-100/30"}
            btnText={ "Explore"}
            
            cliped={false}
          >
                {/* <IconicCardLogo className="text-xl xs:text-3xl md:text-3xl  lg:ml-[-9px] lg:text-4xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl" /> */}
          </CardwLogo>
        
        </div>
      </div>
   
    </section>
  );
}
