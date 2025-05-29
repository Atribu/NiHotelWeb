import React from 'react'
import GalleryComponent from '../components/offers/GalleryComponent'
import ContactSection from '../components/generalComponents/ContactSection'
import InfoComponent from '../components/offers/InfoSection'
import RoomSlider from '../components/offers/RoomSlider'
import ReservationSec from '../components/offers/ReservationSec'
import Instagram from '../components/offers/Instagram'
import TicketSection from '../components/offers/TicketSection'
import TransferSection from '../components/offers/TransferSection'

const page = () => {
  return (
    <div className='mt-24 overflow-hidden'>
      <GalleryComponent/>
      <InfoComponent/>
      <RoomSlider/>
      <ReservationSec/>
      <TicketSection/>
      <TransferSection/>
      <ContactSection/>
      <Instagram/>
    </div>
  )
}

export default page
