import React from 'react'
import GalleryComponent from '../components/offers/GalleryComponent'
import ContactSection from '../components/generalComponents/ContactSection'
import InfoComponent from '../components/offers/InfoSection'
import RoomSlider from '../components/offers/RoomSlider'
import ReservationSec from '../components/offers/ReservationSec'

const page = () => {
  return (
    <div className='mt-24'>
      <GalleryComponent/>
      <InfoComponent/>
      <RoomSlider/>
      <ReservationSec/>
      <ContactSection/>
    </div>
  )
}

export default page
