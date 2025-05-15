import React from 'react'
// 
import Link from "next/link";
import { useTranslations } from 'next-intl';
import imgbanner from "../.././../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import Image from 'next/image';

const RoomsBanner = () => {
  const t = useTranslations('Rooms');
  return (
    <div className='flex w-screen h-screen lg:items-end md:items-center md:justify-center lg:justify-end bg-center bg-cover justify-center items-center relative' >
       <Image
        src={imgbanner}
        alt="rooms"
        fill
        className="object-cover object-center"
        priority
      />
       <div className='absolute inset-0 bg-black/20 z-[1]'></div>
    <div className='flex h-full w-full lg:w-[52%] justify-center items-end md:items-center bg-[linear-gradient(268deg,rgba(255,255,255,0.9)_31.52%,rgba(255,255,255,0)_93.61%)] z-[100]'>
    <div className="flex flex-col gap-[34px] 2xl:gap-[24px] md:gap-10 w-[80%] h-auto text-[#11131d] text-center justify-center items-center mt-[16%] mb-[20px] lg:mb-0">
      <h2 className='font-marcellus text-[30px] md:text-[30px] lg:text-[36px] leading-[20px] -tracking-[0.88px] font-normal 2xl:mb-4 font-serif'>{t("rooms")}</h2>
      <Link href="/rooms#standardroom" className='relative flex py-[4px] px-[34px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title")}</span></Link>
      <Link href="/rooms#juniorroom" className='flex relative py-[4px] px-[34px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[300px]  transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title2")}</span></Link>
      <Link href="/rooms#verandaroom" className='relative flex py-[4px] px-[34px] border-2 border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title3")}</span></Link>
      <Link href="/rooms#cornerroom" className='relative flex py-[4px] px-[34px] border-[2px] border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost uppercase text-[14px] lg:text-[16px] font-medium leading-[30px] text-center bg-transparent w-[90%] md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title4")}</span></Link>
    </div>
    </div>
  </div>
  )
}

export default RoomsBanner
