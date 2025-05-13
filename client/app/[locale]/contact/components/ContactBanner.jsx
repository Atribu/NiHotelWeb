import React from 'react'
import img from "../../../../public/images/lobi/DSCF8651.webp"
import { useTranslations } from 'next-intl';

const page = ({image,header}) => {
    const t = useTranslations('Contact');

  return (
    <div className='flex max-w-screen h-[70vh] md:items-center md:justify-center bg-center bg-cover justify-center items-center relative' style={{ backgroundImage: `url(${img.src})` }}>
       <div className='absolute inset-0 bg-black/10 z-[1]'></div>
   
    <div className="flex flex-col gap-[34px] 2xl:gap-[24px] md:gap-10 w-[80%] h-auto text-[#fff] text-center justify-center items-center mt-[16%] mb-[20px] lg:mb-0">
      <h2 className='font-marcellus text-[36px] md:text-[40px] lg:text-[56px] leading-[20px] -tracking-[0.88px] font-normal 2xl:mb-4 font-jost uppercase'>{t("header")}</h2>
     
    </div>
  
  </div>
  )
}

export default page
