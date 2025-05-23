import React from 'react'
import ReservationSection from './components/generalComponents/ReservationSection'
import ContactSection from './components/generalComponents/ContactSection'
import SplitImageSection from './components/Homepage/SplitImageSection'
import AmenitiesSection from './components/Homepage/AmenitiesSection'
import RoomSlider from './components/Homepage/RoomSlider'
import MainBanner from './components/Homepage/MainBanner'
import NibeautySection from './components/Homepage/NibeautySection'
import BackgroundImage from './components/Homepage/BackgroundImage'
import img from "../../public/images/nihotelLeaf.png"
import Image from 'next/image'
import fil from "../../public/images/fil.png"
import heykel from "../../public/images/heykel.png"

const page = () => {
  return (
    <div className='flex flex-col  max-w-screen overflow-hidden relative'>
     <MainBanner/>
    <ReservationSection/>
    <SplitImageSection/>
    <AmenitiesSection/>
    <RoomSlider/>
    <NibeautySection/>
    <ContactSection/>
    <BackgroundImage/>
    <Image src={fil} alt='portre' width={300} height={800} className='hidden lg:flex xl:hidden absolute top-[35.5%] -right-[1%] z-[1] transform -rotate-[10deg] opacity-20'/>
    <Image src={fil} alt='portre' width={400} height={1000} className='hidden xl:flex absolute top-[28.3%] -right-[2%] z-[1] transform -rotate-[10deg] opacity-20'/>
    <Image src={heykel} alt='portre' width={600} height={600} className='hidden lg:flex xl:hidden absolute top-[82%] left-[19%] z-[1] transform  opacity-20'/>
    <Image src={heykel} alt='portre' width={900} height={900} className='hidden xl:flex absolute top-[73%] left-[35%] z-[1] transform  opacity-20'/>
    </div>
  )
}

export default page