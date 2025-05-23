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
    <Image src={fil} alt='portre' width={400} height={1000} className='hidden lg:flex absolute top-[1275px] -right-16 z-[1] transform -rotate-[10deg] opacity-20'/>
    <Image src={heykel} alt='portre' width={1000} height={1000} className='hidden lg:flex absolute top-[3200px] left-[35%] z-[1] transform  opacity-20'/>
    </div>
  )
}

export default page