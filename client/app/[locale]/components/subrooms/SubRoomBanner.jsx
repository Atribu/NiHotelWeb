import React from 'react'
// 
import Link from "next/link";
import { GoPerson } from "react-icons/go";
import { LuTreePine } from "react-icons/lu";
import { FiSquare } from "react-icons/fi";
import AreaSvg from './AreaSvg';

const RoomsBanner = ({header,m2,person,view, image}) => {
  return (
    <div className='flex w-screen h-screen lg:items-end md:items-center md:justify-center lg:justify-end bg-center bg-cover relative' style={{ backgroundImage: `url(${image.src})` }}>
        <div className='absolute inset-0 bg-black/20 z-[1]'></div>
    <div className='flex h-full w-full lg:w-[42%] justify-center items-end md:items-center bg-[linear-gradient(276deg,#FFF_10.54%,rgba(255,255,255,0)_85.74%)] z-[100]'>
    <div className="flex flex-col gap-[34px] 2xl:gap-[24px] md:gap-10 xl:w-[80%] h-auto text-[#11131d] text-center justify-center items-center mt-[16%] mb-[20px] lg:mb-0 ">
      <h2 className='font-marcellus text-[36px] lg:text-[44px] leading-[20px] -tracking-[0.88px] font-normal 2xl:mb-4 font-cormorant uppercase'>{header}</h2>
      <div className='flex min-w-[220px] w-[70%] h-[1px] bg-[#11131d]'></div>
      <div className='flex gap-[18px] items-center justify-center'>
        <div className='flex items-center gap-2'>
        <AreaSvg width={14} height={15} className="flex"/>
            <p>{m2} m2</p>
        </div>
        <div className='flex gap-1 items-center'>
            <GoPerson size={20}/>
            <p>{person}</p>
        </div>
        <div className='flex gap-1 items-center'>
            <LuTreePine  size={20}/>
            <p>{view}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default RoomsBanner
