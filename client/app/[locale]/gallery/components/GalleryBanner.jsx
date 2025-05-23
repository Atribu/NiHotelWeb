import React from 'react'
import img2 from "../images/lobi/DSCF8658.webp"
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const GalleryBanner = () => {
    const t = useTranslations('Header');

  return (
  
       <section className="relative h-64 lg:h-[55vh]">
        <Image
          src={img2}
          alt="Galerimiz"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            {t("gallery")}
          </h1>
        </div>
      </section>

  )
}

export default GalleryBanner
