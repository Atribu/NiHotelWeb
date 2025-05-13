import React from 'react'
import RoomCarouselSection from '../../components/subrooms/RoomCarouselSection'
import SubRoomBannner from "../../components/subrooms/SubRoomBanner"
import RoomFeatures from '../../components/subrooms/RoomFeatures'
import img1 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import img2 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR2.webp"
import img3 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR3.webp"
import img4 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR4.webp"
import img5 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR6.webp"
import img6 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR7.webp"
import img7 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR8.webp"
import img8 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR9.webp"
import img9 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR10.webp"
import img10 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR11.webp"
import img11 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR12.webp"
import img12 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR13.webp"
import ReservationSection from '../../components/generalComponents/ReservationSection'
import { useTranslations } from 'next-intl';

const Page = () => {
  const t = useTranslations('JuniorRoom');
  
  return (
    <div className='max-w-screen overflow-x-hidden'>
        <SubRoomBannner header={t("bannerHeader")} m2={t("bannerM2")} person={t("bannerPerson")} view={t("bannerView")} image={img2}/>
       <RoomCarouselSection
      title={t("carouselTitle")}
      descriptions={[
       t("carouselDesc1"),
       t("carouselDesc2")
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
       img9,
       img10,
       img11,
       img12
      ]}
      buttonText={t("carouselButtonText")}
     
    />

    <ReservationSection/>

    <RoomFeatures/>
    </div>
  )
}

export default Page
