"use client";
// GalleryComponent.js
import { useTranslations } from "next-intl";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import clsx from "clsx";
import { Link } from '@/i18n/navigation';
import DialogComponent from "./DialogComponent";
import LocationPinIcon from "./icons/LocationPinIcon";
import { Jost } from "next/font/google";
import { FaTripadvisor } from "react-icons/fa";
import FeedBackBar from "./FeedBackBar";
import BookingIcon from "./icons/BookingIcon";
import PhotoIcon from "./icons/PhotoIcon";
import RoomsIcons from "./icons/RoomsIcons";

import general1 from "../../gallery/images/lobi/1.webp";
import general2 from "../../gallery/images/lobi/2.webp";
import general3 from "../../gallery/images/lobi/3.webp";

import restaurant1 from "../../../../public/images/breakfast/DSCF8599.webp";
import restaurant2 from "../../../../public/images/breakfast/DSCF8600.webp"
import restaurant3 from "../../../../public/images/breakfast/DSCF8601.webp"
import restaurant4 from "../../../../public/images/breakfast/DSCF8602.webp"
import restaurant5 from "../../../../public/images/breakfast/DSCF8631.webp"
import restaurant6 from "../../../../public/images/breakfast/DSCF8606.webp"
import restaurant7 from "../../../../public/images/breakfast/DSCF8613.webp"
import restaurant8 from "../../../../public/images/breakfast/DSCF8615.webp"
import restaurant9 from "../../../../public/images/breakfast/DSCF8617.webp"
import restaurant10 from "../../../../public/images/breakfast/DSCF8619.webp"
import restaurant11 from "../../../../public/images/breakfast/DSCF8620.webp"
import restaurant12 from "../../../../public/images/breakfast/DSCF8627.webp"

import experiencesthumb from "../../gallery/images/lobi/DSCF8651.webp";
import banneren from "../../gallery/images/lobi/DSCF8656 .webp";
import bannerru from "../../gallery/images/lobi/DSCF8656 .webp";
import bannertr from "../../gallery/images/lobi/DSCF8656 .webp";
import bannerde from "../../gallery/images/lobi/DSCF8656 .webp";
import banner2tr from "../../gallery/images/lobi/DSCF8658.webp";
import banner2en from "../../gallery/images/lobi/DSCF8658.webp";
import banner2ru from "../../gallery/images/lobi/DSCF8658.webp";
import banner2de from "../../gallery/images/lobi/DSCF8658.webp";
import banner3tr from "../../gallery/images/lobi/DSCF8661 .webp";
import banner3en from "../../gallery/images/lobi/DSCF8661 .webp";
import banner3ru from "../../gallery/images/lobi/DSCF8661 .webp";
import banner3de from "../../gallery/images/lobi/DSCF8661 .webp";

import room1 from "../../../../public/images/rooms/standardroom/NI-STANDART.webp"
import room2 from "../../../../public/images/rooms/standardroom/NI-STANDART2.webp"
import room3 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp"
import room4 from "../../../../public/images/rooms/juniorroom/NI-JUNIOR2.webp"
import room5 from "../../../../public/images/rooms/veranda/NI-VERANDA.webp"
import room6 from "../../../../public/images/rooms/veranda/NI-VERANDA2.webp"
import room7 from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp"
import room8 from "../../../../public/images/rooms/cornerroom/NI-CORNER2.webp"

const fontJost = Jost({
  weights: [300, 400, 500, 600, 700],
  subsets: ["latin"],
  display: "swap",
});

const imageData = [
 

  {
    src: general3,
    alt: "Pool side",
    category: "beach-pool",
  },
  {
    src: general1,
    alt: "Pool side",
    category: "beach-pool",
  },
  

  // Restaurant & Bar images
  {
    src: restaurant1,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },
  {
    src: restaurant2,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant3,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant4,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant5,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant6,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant7,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant8,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant9,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant10,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant11,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },

  {
    src: restaurant12,
    alt: "Bar drinks",
    category: "restaurant-bar",
  },


  {
    src: room1,
    alt: "room",
    category: "rooms",
  },
  {
    src: room2,
    alt: "room",
    category: "rooms",
  },
  {
    src: room3,
    alt: "room",
    category: "rooms",
  },
  {
    src: room4,
    alt: "room",
    category: "rooms",
  },
  {
    src: room5,
    alt: "room",
    category: "rooms",
  },
  {
    src: room6,
    alt: "room",
    category: "rooms",
  },
  {
    src: room7,
    alt: "room",
    category: "rooms",
  },
  {
    src: room8,
    alt: "room",
    category: "rooms",
  },

  // Entertainment images
  {
    src: experiencesthumb,
    alt: "Live show",
    category: "experiences",
  },

  // Rooms images
  
];

// re order imageData to have all images of the same category together
imageData.sort((a, b) => a.category.localeCompare(b.category));

const GalleryComponent = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [open, setOpen] = useState(true);
  const [indexLightBox, setIndexLightBox] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [currentBanner, setCurrentBanner] = useState(banneren);
  const [currentBanner2, setCurrentBanner2] = useState(banner2en);
  const [currentBanner3, setCurrentBanner3] = useState(banner3en);

  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith('/firsatlar')) {
      setCurrentBanner(bannertr);
    } else if (path.startsWith('/aktsiyi')) {
      setCurrentBanner(bannerru);
    } else if (path.startsWith('/angebote')) {
      setCurrentBanner(bannerde);
    }
  }, []);

  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith('/firsatlar')) {
      setCurrentBanner2(banner2tr); // Turkish
    } else if (path.startsWith('/aktsiyi')) {
      setCurrentBanner2(banner2ru); // Russian
    } else if (path.startsWith('/angebote')) {
      setCurrentBanner2(banner2de); // German
    }
  }
  , []);

  useEffect(() => {
    const path = window.location.pathname;

    if (path.startsWith('/firsatlar')) {
      setCurrentBanner3(banner3tr); // Turkish
    } else if (path.startsWith('/aktsiyi')) {
      setCurrentBanner3(banner3ru); // Russian
    } else if (path.startsWith('/angebote')) {
      setCurrentBanner3(banner3de); // German
    }
  }
  , []);

  const openModal = (category = "all") => {
    const imagesToShow =
      category === "all"
        ? imageData
        : imageData.filter((image) => image.category === category);
    setSelectedImages(imagesToShow);
    setModalOpen(true);
  };

  const categories = [
    "rooms",
    "beach-pool",
    "restaurant-bar",
    "entertainment",
    "experiences",
  ];



  const offers = [
    {
      name: "",
      image: currentBanner,
      link: "/offers/honeymoon-package",
      textColor: "text-white",
    },
    {
      name: "",
      image: currentBanner2,
      link: "/offers/honeymoon-package",
      textColor: "text-black",
    },
    {
      name: "",
      image: currentBanner3,
      link: "/offers/honeymoon-package",
      textColor: "text-white",
    },
  ];

  const openWithselectedCategory = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    // look that index in view of emblaApi2
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Add the select event listener
    emblaApi.on("select", onSelect);
    // Remove event listeners on cleanup
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="wrapper mx-auto grid  grid-cols-3 justify-between gap-4 lg:overflow-hidden lg:h-[calc(100vh-85px)] pb-12 lg:pb-8 w-[96%]">
      <div className="relative col-span-3 flex h-full flex-col lg:col-span-2">
        <div
          className="relative overflow-hidden lg:h-full h-[360px] sm:h-[500px]"
          onClick={() => openModal("all")}
          ref={emblaRef}
        >
          <div className="embla__container lg:h-full h-[360px] sm:h-[500px]">
            {imageData.map((image, index) => (
              <div className="embla__slide w-full rounded-md lg:rounded-none overflow-hidden" key={index}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="h-[360px] w-full object-cover  sm:h-[500px]  lg:h-full"
                  priority={index === 0 ? true : false}
                />
              </div>
            ))}
          </div>
          <div className="absolute bottom-2 left-0 right-0 hidden w-full items-center justify-between px-4 lg:flex">
            <div
              className={clsx(
                "flex items-center gap-2 text-2xl font-medium text-white",
                fontJost.className,
              )}
            >
              <PhotoIcon className="text-sm" />
              <span className="text-[12px]">offerssss</span>
            </div>
            <div
              className={clsx(
                " bg-black px-4 py-1 text-[10px] font-light text-white",
                fontJost.className,
              )}
            >
              {selectedIndex + 1} / {imageData.length}
            </div>
          </div>

          <div className="absolute bottom-8 left-4 flex flex-col gap-2 text-white lg:hidden">
            <div className="flex flex-col text-xl uppercase sm:text-3xl">
              <span>NIHOTEL </span>
              <span>NIHOTEL HOTEL</span>
            </div>
            <div
              className={clsx(
                "flex items-center justify-start text-2xs font-normal sm:text-base",
                fontJost.className,
              )}
            >
              <LocationPinIcon className={"mr-1 text-white"} />
              <span>infooo</span>&nbsp;-&nbsp;
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://maps.app.goo.gl/o68dvArdeXgLQQQh8"
              >
                <span className="text-[#F5F5F5]">
                 infooo
                </span>
              </a>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            "left-center -bottom-6 flex gap-4 text-iblack md:hidden",
            fontJost.className,
          )}
        >
          <FeedBackBar bg="#00E19F" rating={5} outOf={5}>
            <FaTripadvisor className="text-xl" />
          </FeedBackBar>
          <FeedBackBar rating={"9,9"} outOf={10}>
            <BookingIcon className={"text-xs"} />
          </FeedBackBar>
        </div>
        <div className="mt-4  hidden justify-between gap-4   lg:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {categories.map((category, catindex) => {
            return (
              <div
                key={category}
                onClick={() => {
                  openWithselectedCategory(category);
                }}
                className={clsx(
                  "relative flex w-full flex-col overflow-hidden",
                  catindex == 3 ? "lg:hidden xl:flex" : "",
                  catindex >= 4 ? "lg:hidden xl:hidden 2xl:flex" : "",
                )}
              >
                 <div className="category-thumbnail cursor-pointer relative h-40 w-full grow ">
     {(() => {
       const thumb = imageData.find((img) => img.category === category);
       return thumb ? (
        // alt kısımdaki resimler grid
         <Image
           src={thumb.src}
           alt={thumb.alt}
           fill
           className="object-cover"
         />
       ) : (
         <div className="absolute inset-0 bg-black/50" />
       );
     })()}
   </div>
                <div
                  className={clsx(
                    "left-center text-nowrap top-[50%] pointer-events-none z-[999] flex w-full  -translate-y-[50%]  flex-col items-center justify-center text-center text-sm font-light text-white",
                    fontJost.className,
                  )}
                >
                  {category === "rooms" ? (
                    <RoomsIcons className="text-sm" />
                  ) : (
                    <PhotoIcon className="text-sm" />
                  )}

                  {/* {category.replace("-", " & ").toUpperCase()} */}

                category
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="hidden h-full w-full flex-col gap-4 lg:col-span-1 lg:flex">
  {offers.map((offer, index) => (
    <div key={index} className="relative flex h-1/3 flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex w-full flex-col items-center justify-between">
        <a target="_blank" rel="noopener noreferrer" href="/">
          {/* yan kısımdaki 3 resim */}
            <div className="z-[-1] w-full">
              <Image
                src={offer.image}
                alt={offer.name}
                fill={true}
                className="cursor-pointer object-cover object-left-top"
              />
            </div>
          
        </a>
        <div className={clsx("text-4xl font-bold uppercase", offer.textColor)}>
          {offer.name}
        </div>
      </div>
    </div>
  ))}
</div>

      <DialogComponent
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        slides={imageData}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default GalleryComponent;