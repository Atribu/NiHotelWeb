import React from 'react'
import RoomCarouselSection from '../../components/subrooms/RoomCarouselSection'
import SubRoomBannner from "../../components/subrooms/SubRoomBanner"
import RoomFeatures from '../../components/subrooms/RoomFeatures'
import img1 from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import img2 from "../../../../public/images/rooms/cornerroom/NI-CORNER2.webp"
import img3 from "../../../../public/images/rooms/cornerroom/NI-CORNER3.webp"
import img4 from "../../../../public/images/rooms/cornerroom/NI-CORNER4.webp"
import img5 from "../../../../public/images/rooms/cornerroom/NI-CORNER5.webp"
import img6 from "../../../../public/images/rooms/cornerroom/NI-CORNER6.webp"
import img7 from "../../../../public/images/rooms/cornerroom/NI-CORNER7.webp"
import img8 from "../../../../public/images/rooms/cornerroom/NI-CORNER8.webp"
import img9 from "../../../../public/images/rooms/cornerroom/NI-CORNER9.webp"
import ReservationSection from '../../components/generalComponents/ReservationSection'

const page = () => {
  return (
    <div>
        <SubRoomBannner header="sub room" m2={30} person="2 Adults" view="Garden View" image={img2}/>
       <RoomCarouselSection
      title="DELUXE ROOM WITH BALCONY"
      descriptions={[
        "Our rooms, each 30 m², with a balcony and garden view, have been designed in a tasteful way, with your comfort in mind, featuring a large bed or two single beds, a desk and chairs.",
        "Inone hotel makes your holiday amazing with bohemian style. This room was designed with care. Light and color will upgrade your mood for your dream holiday."
      ]}
      images={[
       img1,
       img2,
       img3,
       img4,
       img5,
       img6,
       img7,
       img8,
       img9
      ]}
      buttonText="EXPLORE"
     
    />

    <ReservationSection/>

    <RoomFeatures/>
    </div>
  )
}

export default page
