import React from 'react'
import RoomsBanner from '../components/rooms/RoomsBanner'
import RoomShowcase from '../components/rooms/RoomShowcase'
import { useTranslations } from 'next-intl';
import cornerImage from "../../../public/images/rooms/cornerroom/NI-CORNER2.webp"
import cornerImage2 from "../../../public/images/rooms/cornerroom/NI-CORNER5.webp"

import standardImage from "../../../public/images/rooms/standardroom/NI-STANDART2.webp"
import standardImage2 from "../../../public/images/rooms/standardroom/NI-STANDART4.webp"

const page = () => {
  const t = useTranslations('Rooms');

  return (
  <div className='max-w-screen overflow-x-hidden'>
    <RoomsBanner/>
    <RoomShowcase
      id="standardroom"
        title={t("title")}
        description={t("description")}
        href="/rooms/standardroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
        images={[
          { src: standardImage, alt: "Corner " },
          { src: standardImage2, alt: "Corner " },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
      id="juniorroom"
        title={t("title2")}
        description={t("description2")}
        href="/rooms/juniorroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
        images={[
          { src: "/images/corner1.jpg", alt: "  " },
          { src: "/images/corner2.jpg", alt: "  " },
        ]}
      />

<RoomShowcase
 id="verandaroom"
        title={t("title3")}
        description={t("description3")}
        href="/rooms/verandaroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
        images={[
          { src: "/images/room1.jpg", alt: "Room " },
          { src: "/images/room2.jpg", alt: "Room  " },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
        id="cornerorom"
        title={t("title4")}
        description={t("description4")}
        href="/rooms/cornerroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
        images={[
          { src: cornerImage, alt: "  " },
          { src: cornerImage2, alt: "  " },
        ]}
      />
  </div>
  )
}

export default page
