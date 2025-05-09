import React from 'react'
// style={{ backgroundImage: `url(${roomsBanner.src})` }}
import Link from "next/link";
import { useTranslations } from 'next-intl';

const RoomsBanner = () => {
  const t = useTranslations('Rooms');
  return (
    <div className='flex w-screen h-screen lg:items-end md:items-center md:justify-center lg:justify-end bg-center bg-cover '>
    <div className='flex h-full w-full lg:w-[42%] justify-center items-end md:items-center'>
    <div className="flex flex-col gap-[34px] 2xl:gap-[24px] md:gap-10 w-[80%] h-auto text-[#11131d] text-center justify-center items-center mt-[16%] mb-[20px] lg:mb-0">
      <h2 className='font-marcellus text-[36px] lg:text-[44px] leading-[20px] -tracking-[0.88px] font-normal 2xl:mb-4 font-cormorant'>{t("rooms")}</h2>
      <Link href="/rooms#room4" className='flex py-[5px] px-[40px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[337px]'>{t("title")}</Link>
      <Link href="/rooms#standardroom" className='flex py-[5px] px-[40px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[337px]'>{t("title2")}</Link>
      <Link href="/rooms#room3" className='flex py-[5px] px-[40px] border-2 border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[337px]'>{t("title3")}</Link>
      <Link href="/rooms#cornerroom" className='flex py-[5px] px-[40px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[337px]'>{t("title4")}</Link>
    </div>
    </div>
  </div>
  )
}

export default RoomsBanner
