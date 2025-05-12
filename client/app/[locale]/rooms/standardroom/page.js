import React from 'react'
import RoomCarouselSection from '../../components/subrooms/RoomCarouselSection'
import SubRoomBannner from "../../components/subrooms/SubRoomBanner"
import RoomFeatures from '../../components/subrooms/RoomFeatures'
import img1 from "../../../../public/images/rooms/standardroom/NI-STANDART.webp"
import img2 from "../../../../public/images/rooms/standardroom/NI-STANDART2.webp"
import img3 from "../../../../public/images/rooms/standardroom/NI-STANDART3.webp"
import img4 from "../../../../public/images/rooms/standardroom/NI-STANDART4.webp"
import img5 from "../../../../public/images/rooms/standardroom/NI-STANDART6.webp"
import img6 from "../../../../public/images/rooms/standardroom/NI-STANDART7.webp"
import img7 from "../../../../public/images/rooms/standardroom/NI-STANDART8.webp"
import img8 from "../../../../public/images/rooms/standardroom/NI-STANDART9.webp"
import img9 from "../../../../public/images/rooms/standardroom/NI-STANDART10.webp"
import img10 from "../../../../public/images/rooms/standardroom/NI-STANDART11.webp"
import ReservationSection from '../../components/generalComponents/ReservationSection'
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('StandardRoom');
  
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
       img10
      ]}
      buttonText={t("carouselButtonText")}
     
    />

    <ReservationSection/>

    <RoomFeatures/>
    </div>
  )
}

export default page
