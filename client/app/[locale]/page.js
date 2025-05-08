import React from 'react'
import ReservationSection from './components/generalComponents/ReservationSection'
import ContactSection from './components/generalComponents/ContactSection'
import SplitImageSection from './components/Homepage/SplitImageSection'
import AmenitiesSection from './components/Homepage/AmenitiesSection'
import RoomSlider from './components/Homepage/RoomSlider'

const page = () => {
  return (
    <div className='flex flex-col w-screen'>
      <div className='h-screen bg-gray-300 '>
        
      </div>
    <ReservationSection/>
    <SplitImageSection/>
    <AmenitiesSection/>
    <RoomSlider/>
    <ContactSection/>
    </div>
  )
}

export default page