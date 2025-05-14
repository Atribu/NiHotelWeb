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
import { useTranslations } from 'next-intl';
import RoomTour from '../../components/rooms/RoomTour'

const Page = () => {
  const t = useTranslations('CornerRoom');
  
  return (
    <div className='max-w-screen overflow-x-hidden items-center justify-center flex flex-col'>
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
       img9
      ]}
      buttonText={t("carouselButtonText")}
     
    />

    <ReservationSection/>
    <RoomFeatures/>
    <RoomTour link="https://kuula.co/share/n1/collection/71qm4"/>
    </div>
  )
}

export default Page
