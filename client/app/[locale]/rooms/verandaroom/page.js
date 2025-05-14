import React from 'react'
import RoomCarouselSection from '../../components/subrooms/RoomCarouselSection'
import SubRoomBannner from "../../components/subrooms/SubRoomBanner"
import RoomFeatures from '../../components/subrooms/RoomFeatures'
import img1 from "../../../../public/images/rooms/veranda/NI-VERANDA.webp"
import img2 from "../../../../public/images/rooms/veranda/NI-VERANDA2.webp"
import img3 from "../../../../public/images/rooms/veranda/NI-VERANDA3.webp"
import img4 from "../../../../public/images/rooms/veranda/NI-VERANDA4.webp"
import img5 from "../../../../public/images/rooms/veranda/NI-VERANDA5.webp"
import img6 from "../../../../public/images/rooms/veranda/NI-VERANDA6.webp"
import img7 from "../../../../public/images/rooms/veranda/NI-VERANDA7.webp"
import img8 from "../../../../public/images/rooms/veranda/NI-VERANDA8.webp"
import ReservationSection from '../../components/generalComponents/ReservationSection'
import { useTranslations } from 'next-intl';
import RoomTour from '../../components/rooms/RoomTour'

const Page = () => {
  const t = useTranslations('VerandaRoom');
  
  return (
    <div className='max-w-screen overflow-x-hidden items-center justify-center flex flex-col'>
        <SubRoomBannner header={t("bannerHeader")} m2={t("bannerM2")} person={t("bannerPerson")} view={t("bannerView")} image={img1}/>
       <RoomCarouselSection
      title={t("carouselTitle")}
      descriptions={[
       t("carouselDesc1"),
       t("carouselDesc2")
      ]}
      images={[
       img3,
       img2,
       img1,
       img4,
       img5,
       img6,
       img7,
       img8
      ]}
      buttonText={t("carouselButtonText")}
    />
    <ReservationSection/>
    <RoomFeatures/>
    <RoomTour link="https://kuula.co/share/n1/collection/71qXs"/>
    </div>
  )
}

export default Page
