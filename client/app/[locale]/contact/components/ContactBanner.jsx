import Image from 'next/image'
import React from 'react'

const ContactBanner = ({image,header}) => {

  return (
    <div className='flex max-w-screen h-[50vh] lg:h-[70vh] md:items-center md:justify-center bg-center bg-cover justify-center items-center relative' >
       <Image
        src={image}
        alt={header}
        fill
        className="object-cover object-center"
        priority
      />
       <div className='absolute inset-0 bg-black/20 z-[1]'></div>
   
    <div className="flex absolute flex-col gap-[34px] 2xl:gap-[24px] md:gap-10 w-[80%] h-auto text-[#fff] text-center justify-center items-center mt-[16%] mb-[20px] lg:mb-0">
      <h2 className="font-['Cormorant_Garamond'] text-[36px] md:text-[40px] lg:text-[56px] leading-[110%] font-bold 2xl:mb-4 uppercase z-50">{header}</h2>
     
    </div>
  
  </div>
  )
}

export default ContactBanner
