import React from 'react'
import { useTranslations } from 'next-intl';

const RoomTour = ({link}) => {
    const t = useTranslations('RoomTour');

  return (
    <div className='flex w-screen h-auto items-center justify-center max-w-[1400px] my-[10px] lg:my-[25px]'>
      <div className='flex flex-col w-[94%] md:w-[92%] lg:w-[78%] items-center justify-center gap-[10px] lg:gap-[20px] max-w-[1106px] font-jost'>
       <div className='flex flex-col items-center lg:items-start justify-center gap-[10px] md:gap-[15px] lg:gap-[20px] text-black text-center lg:text-start w-full pl-[20px]'>
       <span className='text-[12px]  font-medium leading-[14px] uppercase tracking-[0.48px]'>{t("span")}</span>
       <h2 className='text-[26px] md:text-[28px] lg:text-[36px] font-serif font-normal leading-[120%]'>{t("header")}</h2>
       <p className='text-[14px] lg:text-[16px] leading-[130%] lg:leading-[24px] font-normal w-full lg:w-[70%]'>{t("text")}</p>
       </div>
       <div className='flex w-full items-center justify-center py-[20px] lg:px-[20px]'>
       <iframe width="100%" height="640" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src={link}></iframe>
       </div>
      </div>
    </div>
  )
}

export default RoomTour
