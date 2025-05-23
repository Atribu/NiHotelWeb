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
import RoomTour from '../../components/rooms/RoomTour'
import DiscoverRooms from '../../components/rooms/DiscoverRooms'
import img from "../../../../public/svg/PORTRESON.svg"
import Image from 'next/image'

const Page = () => {
  const t3 = useTranslations('Rooms');
  const t = useTranslations('StandardRoom');
  const t2 = useTranslations('StandardRoom.DiscoverRoom');
  
  return (
    <div className='max-w-screen overflow-x-hidden items-center justify-center flex flex-col relative'>
        <SubRoomBannner header={t("bannerHeader")} m2={t("bannerM2")} person={t("bannerPerson")} view={t("bannerView")} image={img1}/>
       <RoomCarouselSection
       m2="25 m²"
       person={t3("person1")}
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
    <RoomTour link="https://kuula.co/share/n1/collection/71c7G"/>
    <DiscoverRooms header={t2("header")} buttonText={t2("buttonText")} name1={t2("name1")} description1={t2("description1")} name2={t2("name2")} description2={t2("description2")} name3={t2("name3")} description3={t2("description3")} link1="/rooms/cornerroom" link2="/rooms/juniorroom" link3="/rooms/verandaroom"/>
    <Image src={img} alt='portre' width={800} height={1400} className='hidden lg:flex absolute top-[1200px] left-0 z-[1]  '/>
    </div>
  )
}

export default Page
