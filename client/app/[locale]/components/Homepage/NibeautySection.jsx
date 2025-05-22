import React from 'react'
import img from "../../../../public/images/nibeauty.png"
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl';

const NibeautySection = () => {
    const t = useTranslations('Nibeauty');

  return (
    <div className='flex bg-center bg-cover bg-[#588a62] w-screen py-10 lg:py-16 items-center justify-center'>
      <div className='flex flex-col-reverse lg:flex-row items-center justify-around w-[90%] xl:w-[70%] max-w-[1400px] gap-4 lg:gap-[8%]'>
        <div className='flex flex-col items-center text-center lg:items-start justify-center lg:text-start text-white gap-1 lg:gap-4 w-[80%] lg:w-[70%]'>
            <h4 className="text-[20px] lg:text-[28px] font-['Cormorant_Garamond'] font-bold">{t("title")}</h4>
            <p className='text-[12px] lg:text-[14px] font-jost w-[100%] lg:w-[80%]'>{t("text")}</p>
            <Link className='py-1 px-4 flex items-center justify-center text-center text-[14px] lg:text-[16px] border-white border mt-2 hover:bg-white hover:text-[#588a62] font-medium' href="https://www.nibeautylab.com.tr/" rel="norefferer nofollower"
                  target="_blank">{t("buttonText")}</Link>
        </div>
        <Image src={img} alt='nibeauty' width={img.width} height={img.height} className='max-w-[280px]'/>
      </div>
    </div>
  )
}

export default NibeautySection
