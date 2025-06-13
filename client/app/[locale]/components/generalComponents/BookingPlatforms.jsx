"use client"
import React from "react";
import { useTranslations } from "next-intl";
import tripadvisor from "../../../../public/images/logos/tripadvisor-logo.png";
import booking from "../../../../public/images/logos/booking-logo.png";
import airbnb from "../../../../public/images/logos/airbnb.png";
import expedia from "../../../../public/images/logos/expedia.png";
import hotelscom from "../../../../public/images/logos/hotelscom.png";
import skyscanner from "../../../../public/images/logos/skyscanner.svg";
import ostrovok from "../../../../public/images/logos/ostrovok.png";
import Image from "next/image";

function BookingPlatforms() {
    const t = useTranslations("Reservation");

    const logos = [
        {
    name: "airbnb",
    src: airbnb,
    href: "https://www.airbnb.co.uk/muratpasa-turkiye/stays/boutique-hotels",
    alt: "airbnb"
  },
  {
    name: "hotelscom",
    src: hotelscom,
    href: "https://tr.hotels.com/ho2204304672/nox-plus-hotel-antalya-turkiye?chkin=2025-06-27&chkout=2025-06-28&x_pwa=1&rfrr=HSR&pwa_ts=1749828081305&referrerUrl=aHR0cHM6Ly90ci5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=false&rm1=a2&regionId=481&destination=Antalya%2C%20Antalya%20(b%C3%B6lge)%2C%20T%C3%BCrkiye&destType=MARKET&neighborhoodId=553248633981724563&selected=68853271&latLong=41.0145%2C28.9533&sort=RECOMMENDED&top_dp=2857&top_cur=TRY&gclid=Cj0KCQjwmK_CBhCEARIsAMKwcD4x7VgyGkh8uS1nDg6WXOe0tnCdRHI79YiRokWzeK97ghxOv-sEjiMaAj3DEALw_wcB&semcid=HCOM-TR.UB.GOOGLE.PT-c-TR.HOTEL&semdtl=a115302642550.b1140912440009.g1aud-2141179518447%3Akwd-1644293559265.e1c.m1Cj0KCQjwmK_CBhCEARIsAMKwcD4x7VgyGkh8uS1nDg6WXOe0tnCdRHI79YiRokWzeK97ghxOv-sEjiMaAj3DEALw_wcB.r15c58b194c7a46350f8b8395db40cfddb619e986c1f8653c4ef98fadfc18dddd5.c1.j19197799.k19197799.d1722170203358.h1p.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=314355969&selectedRatePlan=383171766&expediaPropertyId=68853271&searchId=8aebebbe-32c6-442c-bf61-6e558ac6533c",
    alt: "Hotels.com"
  },
  {
    name: "tripadvisor",
    src: tripadvisor,
    href: "https://www.tripadvisor.com.tr/Hotel_Review-g15300585-d23826697-Reviews-Ni_Boutique_Hotel_Lara-Muratpasa_Antalya_Turkish_Mediterranean_Coast.html",
    alt: "Tripadvisor"
  },
  {
    name: "ostrovok",
    src: ostrovok,
    href: "https://ostrovok.ru/hotel/turkey/antalya/mid10669478/ni_boutique/",
    alt: "Ostrovok"
  },
  {
    name: "booking",
    src: booking,
    href: "https://www.booking.com/index.tr.html?aid=356980&label=gog235jc-1BCAso5AFCEm5pLWJ1dGlrLW90ZWwtbGFyYUgzWANo5AGIAQGYASi4AQfIAQzYAQHoAQGIAgGoAgO4AteFscIGwAIB0gIkMmFlNzU0N2MtMWRjYi00ZDQwLThhNDItNGFjZTdiNTgxNzZh2AIF4AIB&tr_redirected=1&",
    alt: "Booking.com"
  },
  {
    name: "skyscanner",
    src:skyscanner,
    href: "https://www.skyscanner.qa/hotels/turkiye-turkey/antalya-hotels/ni-hotel-lara/ht-212352912",
    alt: "Skyscanner"
  },
  {
    name: "expedia",
    src: expedia,
    href: "https://www.expedia.com/Antalya-Hotels-NOX-PLUS-HOTEL.h68853271.Hotel-Information",
    alt: "Expedia"
  }
];
    
  return (
    <div className="flex lg:flex flex-col mt-4 pb-2 lg:mb-16 xl:mb-28 lg:pb-10 xl:pb-12 xl:mt-24 lg:mt-24 px-5 l bg-white h-auto lg:h-[60px]  items-center justify-center gap-8 xl:gap-7 z-[900]">
    
    <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[120%] tracking-[0.3px]">{t("bookingPlatforms")}</h3>

      {/* Logo listesi, satırları ortalar */}
      <div className="flex flex-wrap justify-center items-center gap-9 md:gap-20 lg:gap-10 xl:gap-16 mt-6">
        {logos.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex justify-center"
          >
            {/* Büyük ekran için */}
            <Image
              src={logo.src}
              width={130}
              height={130}
              alt={logo.alt}
              className="hidden md:block transform transition-transform duration-300 ease-in-out hover:scale-125"
            
            />
            {/* Küçük ekran için */}
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="block md:hidden transform transition-transform duration-300 ease-in-out hover:scale-125"
             
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default BookingPlatforms;