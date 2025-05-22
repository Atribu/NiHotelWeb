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

const page = () => {
  return (
    <div className='flex flex-col  max-w-screen overflow-x-hidden relative'>
     <MainBanner/>
    <ReservationSection/>
    <SplitImageSection/>
    <AmenitiesSection/>
    <RoomSlider/>
    <NibeautySection/>
    <ContactSection/>
    <BackgroundImage/>
   
    </div>
  )
}

export default page