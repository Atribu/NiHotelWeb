import React from 'react'
// 
import Link from "next/link";
import { useTranslations } from 'next-intl';
import imgbanner from "../.././../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import Image from 'next/image';

const RoomsBanner = () => {
  const t = useTranslations('Rooms');
  return (
    <div className='flex h-[90vh] w-screen lg:h-screen lg:items-end md:items-center lg:justify-end bg-center bg-cover justify-center items-center relative' >
       <Image
        src={imgbanner}
        alt="rooms"
        fill
        className="object-cover object-center"
        priority
      />
       <div className='absolute inset-0 bg-black/20 z-[1]'></div>
    <div className='flex h-full w-full lg:w-[52%] justify-center items-end md:justify-end md:items-end lg:items-center lg:bg-[linear-gradient(268deg,rgba(255,255,255,0.9)_31.52%,rgba(255,255,255,0)_93.61%)] z-[100]'>
    <div className="flex flex-col gap-3 md:gap-[20px] lg:gap-2 w-full lg:w-[80%] h-auto text-[#11131d] text-center justify-center items-center lg:mt-[16%] mb-[20%] md:mb-10">
      <h2 className="font-['Cormorant_Garamond'] text-[48px]  lg:text-[36px] uppercase lg:capitalize leading-[20px] -tracking-[0.88px] mb-[250px] md:mb-[0px] 2xl:mb-4 font-bold">{t("rooms")}</h2>
      <Link href="/rooms#standardroom" className="relative flex w-60 py-[4px] border-transparent bg-stone-50/80 rounded shadow-[0px_0px_50px_0px_rgba(20,12,41,0.07)] backdrop-blur-[2px] lg:rounded-none lg:backdrop-blur-none lg:shadow-none lg:py-[2px] lg:px-[34px] lg:border-[2px] lg:border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-['Jost'] capitalize text-[15px] font-medium leading-[30px] text-center lg:bg-transparent md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100"><span className='z-10'>{t("title")}</span></Link>
      <Link href="/rooms#juniorroom" className='relative flex w-60 py-[4px] border-transparent bg-stone-50/80 rounded shadow-[0px_0px_50px_0px_rgba(20,12,41,0.07)] backdrop-blur-[2px] lg:rounded-none lg:backdrop-blur-none lg:shadow-none lg:py-[2px] lg:px-[34px] lg:border-[2px] lg:border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost capitalize text-[15px] font-medium leading-[30px] text-center lg:bg-transparent md:w-[50%] xl:w-[45%] lg:min-w-[300px]  transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title2")}</span></Link>
      <Link href="/rooms#verandaroom" className='relative flex w-60 py-[4px] border-transparent bg-stone-50/80 rounded shadow-[0px_0px_50px_0px_rgba(20,12,41,0.07)] backdrop-blur-[2px] lg:rounded-none lg:backdrop-blur-none lg:shadow-none lg:py-[2px] lg:px-[34px] lg:border-[2px] lg:border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost capitalize text-[15px] font-medium leading-[30px] text-center lg:bg-transparent md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
    before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100'><span className='z-10'>{t("title3")}</span></Link>
      <Link href="/rooms#cornerroom" className='relative flex w-60 py-[4px] border-transparent bg-stone-50/80 rounded shadow-[0px_0px_50px_0px_rgba(20,12,41,0.07)] backdrop-blur-[2px] lg:rounded-none lg:backdrop-blur-none lg:shadow-none lg:py-[2px] lg:px-[34px] lg:border-[2px] lg:border-[#11131d] justify-center items-center shadow-buttonCustom gap-[65px] font-jost capitalize text-[15px] font-medium leading-[30px] text-center lg:bg-transparent md:w-[50%] xl:w-[45%] lg:min-w-[300px] transition-colors duration-500 ease-in-out hover:text-white
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
