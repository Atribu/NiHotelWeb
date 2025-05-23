import React from 'react'
import RoomCarouselSection from '../../components/subrooms/RoomCarouselSection'
import SubRoomBannner from "../../components/subrooms/SubRoomBanner"
import RoomFeatures from '../../components/subrooms/RoomFeatures'
import img1 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import img2 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR2.webp"
import img3 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR3.webp"
import img4 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR4.webp"
import img5 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR5.webp"
import img6 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR6.webp"
import img7 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR7.webp"
import ReservationSection from '../../components/generalComponents/ReservationSection'
import { useTranslations } from 'next-intl';
import RoomTour from '../../components/rooms/RoomTour'
import DiscoverRooms from '../../components/rooms/DiscoverRooms'
import img from "../../../../public/svg/PORTRESON.svg"
import Image from 'next/image'

const Page = () => {
  const t = useTranslations('JuniorRoom');
  const t2 = useTranslations('JuniorRoom.DiscoverRoom');
  const t3 = useTranslations('Rooms');
  
  return (
    <div className='max-w-screen overflow-x-hidden items-center justify-center flex flex-col relative'>
        <SubRoomBannner header={t("bannerHeader")} m2={t("bannerM2")} person={t("bannerPerson")} view={t("bannerView")} image={img2}/>
       <RoomCarouselSection
        m2="20 m²"
        person={t3("person2")}
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
       img7
      ]}
      buttonText={t("carouselButtonText")}
     
    />

    <ReservationSection/>
    <RoomFeatures/>
    <RoomTour link="https://kuula.co/share/n1/collection/71cN8"/>
    <DiscoverRooms header={t2("header")} buttonText={t2("buttonText")} name1={t2("name1")} description1={t2("description1")} name2={t2("name2")} description2={t2("description2")} name3={t2("name3")} description3={t2("description3")} link1="/rooms/standardroom" link2="/rooms/cornerroom" link3="/rooms/verandaroom"/>
    <Image src={img} alt='portre' width={800} height={1400} className='hidden lg:flex absolute top-[1180px] left-0 z-[1]'/>
    </div>
  )
}

export default Page
