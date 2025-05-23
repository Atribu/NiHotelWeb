import React from 'react'
import RoomsBanner from '../components/rooms/RoomsBanner'
import RoomShowcase from '../components/rooms/RoomShowcase'
import { useTranslations } from 'next-intl';
import cornerImage from "../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import cornerImage2 from "../../../public/images/rooms/cornerroom/NI-CORNER2.webp"
import cornerImage3 from "../../../public/images/rooms/cornerroom/NI-CORNER3.jpg"
import cornerImage4 from "../../../public/images/rooms/cornerroom/NI-CORNER4.webp"

import standardImage from "../../../public/images/rooms/standardroom/NI-STANDART.webp"
import standardImage2 from "../../../public/images/rooms/standardroom/NI-STANDART2.webp"
import standardImage3 from "../../../public/images/rooms/standardroom/NI-STANDART3.webp"
import standardImage4 from "../../../public/images/rooms/standardroom/NI-STANDART4.webp"

import juniorImage from "../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import juniorImage2 from "../../../public/images/rooms/juniorroom/NI-JUNIOR2.webp"
import juniorImage3 from "../../../public/images/rooms/juniorroom/NI-JUNIOR3.webp"
import juniorImage4 from "../../../public/images/rooms/juniorroom/NI-JUNIOR4.webp"

import verandaImage from "../../../public/images/rooms/veranda/NI-VERANDA.webp"
import verandaImage2 from "../../../public/images/rooms/veranda/NI-VERANDA2.webp"
import verandaImage3 from "../../../public/images/rooms/veranda/NI-VERANDA3.webp"
import verandaImage4 from "../../../public/images/rooms/veranda/NI-VERANDA4.webp"
import Image from 'next/image';
import img from "../../../public/svg/PORTRESON.svg"

const Page = () => {
  const t = useTranslations('Rooms');

  return (
  <div className='max-w-screen overflow-x-hidden relative'>
    <RoomsBanner/>
   <div className='flex flex-col z-[990]'>
   <RoomShowcase
      id="standardroom"
        title={t("title")}
        description={t("description")}
        href="/rooms/standardroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
        m2="25 m²"
        person={t("person1")}
        images={[
          { src: standardImage, alt: "standard " },
          { src: standardImage2, alt: "standard " },
          { src: standardImage3, alt: "standard " },
          { src: standardImage4, alt: "standard " }
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
    <div className='hidden lg:flex'>
    <RoomShowcase
      id="juniorroom"
        title={t("title2")}
        description={t("description2")}
        href="/rooms/juniorroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
       
        images={[
          { src: juniorImage, alt: " junior room " },
          { src: juniorImage2, alt: " junior room " },
          { src: juniorImage3, alt: " junior room " },
          { src: juniorImage4, alt: " junior room " },
        ]}
      />
    </div>

      <div className='flex lg:hidden'>
      <RoomShowcase
      id="juniorroom"
        title={t("title2")}
        description={t("description2")}
        href="/rooms/juniorroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
         m2="20 m²"
         person={t("person2")}
        images={[
          { src: juniorImage, alt: " junior room " },
          { src: juniorImage2, alt: " junior room " },
          { src: juniorImage3, alt: " junior room " },
          { src: juniorImage4, alt: " junior room " },
        ]}
      />
      </div>

<RoomShowcase
 id="verandaroom"
        title={t("title3")}
        description={t("description3")}
        href="/rooms/verandaroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
         m2="25 m²"
         person={t("person3")}
        images={[
          { src: verandaImage, alt: "veranda " },
          { src: verandaImage2, alt: "veranda  " },
          { src: verandaImage3, alt: "veranda " },
          { src: verandaImage4, alt: "veranda  " },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
    <div className='hidden lg:flex'>
    <RoomShowcase
        id="cornerroom"
        title={t("title4")}
        description={t("description4")}
        href="/rooms/cornerroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
        images={[
          { src: cornerImage, alt: " corner " },
          { src: cornerImage2, alt: "corner  " },
          { src: cornerImage3, alt: " corner " },
          { src: cornerImage4, alt: "corner  " },
        ]}
      />
    </div>

    <div className='flex lg:hidden'>
    <RoomShowcase
        id="cornerroom"
        title={t("title4")}
        description={t("description4")}
        href="/rooms/cornerroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
         m2="25 m²"
         person={t("person4")}
        images={[
          { src: cornerImage, alt: " corner " },
          { src: cornerImage2, alt: "corner  " },
          { src: cornerImage3, alt: " corner " },
          { src: cornerImage4, alt: "corner  " },
        ]}
      />
    </div>
   </div>
    <Image src={img} alt='portre' width={1000} height={1600} className='absolute top-[1800px] right-0 z-[1] hidden xl:flex'/>
    <Image src={img} alt='portre' width={700} height={1100} className='absolute top-[1800px] left-[1%] z-[1] hidden md:flex xl:hidden transform -rotate-[10deg]'/>
  </div>
  )
}

export default Page
