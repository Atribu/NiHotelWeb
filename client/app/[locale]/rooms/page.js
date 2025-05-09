import React from 'react'
import RoomsBanner from '../components/rooms/RoomsBanner'
import RoomShowcase from '../components/rooms/RoomShowcase'

const page = () => {
  return (
  <div>
    <RoomsBanner/>
    <RoomShowcase
       id="cornerroom"
        title="CORNER ROOM WITH BALCONY"
        description="Each of our 30 m² rooms with a balcony and garden view has been tastefully designed..."
        href="/rooms/subroom"
        buttonText="Explore"
        imagesOnRight={false}
        images={[
          { src: "/images/room1.jpg", alt: "Room Interior" },
          { src: "/images/room2.jpg", alt: "Room Balcony View" },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
        title="CORNER SUITE"
        description="Panoramic views, spacious layout and premium amenities for an unforgettable stay..."
        href="/rooms/corner-suite"
        buttonText="Learn More"
        imagesOnRight={true}
        images={[
          { src: "/images/corner1.jpg", alt: "Corner Suite Interior" },
          { src: "/images/corner2.jpg", alt: "Corner Suite Balcony" },
        ]}
      />

<RoomShowcase
        title="DELUXE ROOM WITH BALCONY"
        description="Each of our 30 m² rooms with a balcony and garden view has been tastefully designed..."
        href="/rooms/deluxe-room-with-balcony"
        buttonText="Explore"
        imagesOnRight={false}
        images={[
          { src: "/images/room1.jpg", alt: "Room Interior" },
          { src: "/images/room2.jpg", alt: "Room Balcony View" },
        ]}
      />
       {/* Aynı component, bu kez resimler sağda */}
       <RoomShowcase
        title="CORNER SUITE"
        description="Panoramic views, spacious layout and premium amenities for an unforgettable stay..."
        href="/rooms/corner-suite"
        buttonText="Learn More"
        imagesOnRight={true}
        images={[
          { src: "/images/corner1.jpg", alt: "Corner Suite Interior" },
          { src: "/images/corner2.jpg", alt: "Corner Suite Balcony" },
        ]}
      />
  </div>
  )
}

export default page
