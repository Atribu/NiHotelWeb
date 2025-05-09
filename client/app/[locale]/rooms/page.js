import React from 'react'
import RoomsBanner from '../components/rooms/RoomsBanner'
import RoomShowcase from '../components/rooms/RoomShowcase'
import { useTranslations } from 'next-intl';

const page = () => {
  const t = useTranslations('Rooms');

  return (
  <div>
    <RoomsBanner/>
    <RoomShowcase
       id="room4"
        title={t("title")}
        description={t("description")}
        href="/rooms/cornerroom"
        buttonText={t("buttonText")}
        imagesOnRight={false}
        images={[
          { src: "/images/room1.jpg", alt: "Corner " },
          { src: "/images/room2.jpg", alt: "Corner " },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
       id="standardroom"
        title={t("title2")}
        description={t("description2")}
        href="/rooms/standardroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
        images={[
          { src: "/images/corner1.jpg", alt: "  " },
          { src: "/images/corner2.jpg", alt: "  " },
        ]}
      />

<RoomShowcase
        title={t("title3")}
        description={t("description3")}
        href="/rooms/room3"
        buttonText={t("buttonText")}
        imagesOnRight={false}
        images={[
          { src: "/images/room1.jpg", alt: "Room " },
          { src: "/images/room2.jpg", alt: "Room  " },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
        title={t("title4")}
        description={t("description4")}
        href="/rooms/cornerroom"
        buttonText={t("buttonText")}
        imagesOnRight={true}
        images={[
          { src: "/images/corner1.jpg", alt: "  " },
          { src: "/images/corner2.jpg", alt: "  " },
        ]}
      />
  </div>
  )
}

export default page
