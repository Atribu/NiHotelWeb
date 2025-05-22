// components/DiscoverRooms.jsx

import Link from "next/link";
import Image from "next/image";
import corner from "../../../../public/images/rooms/cornerroom/NI-CORNER1.webp";
import standard from "../../../../public/images/rooms/standardroom/NI-STANDART.webp";
import junior from "../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp";
import veranda from "../../../../public/images/rooms/veranda/NI-VERANDA.webp";
import { useTranslations } from "next-intl";

export default function DiscoverRooms({
  header,
  buttonText,
  name1,
  description1,
  name2,
  description2,
  name3,
  description3,
  link1,
  link2,
  link3,
}) {
  const otherRooms = [
    {
      name: name1,
      description: description1,
      image: standard,
      href: link1,
    },
    {
      name: name2,
      description: description2,
      image: junior,
      href: link2,
    },
    {
      name: name3,
      description: description3,
      image: veranda,
      href: link3,
    },
  ];

  return (
    <section className="flex flex-col py-16 bg-white w-screen items-center justify-center">
      <div className="flex flex-col w-[92%] md:w-[75%] lg:w-[85%] xl:w-[80%] lg:min-w-[900px] max-w-[1200px]">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          {header}
        </h2>
        {/* 3 sütunlu grid: mobilde 1, sm:2, lg ve üstü 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-7 z-50">
          {otherRooms.map(({ name, description, image, href }) => (
            <Link
              key={name}
              href={href}
              className="relative h-[300px] sm:h-[350px] lg:h-[450px] xl:h-[500px] overflow-hidden shadow-lg group items-end justify-center flex py-10"
              aria-label={name}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-6 w-full text-center px-4 ">
              <div className="absolute w-[688px] h-[493.32px] origin-top-left -rotate-90 opacity-80 bg-gradient-to-r from-black/0 to-black/50 " />
                <h3 className="text-white text-lg font-['Cormorant_Garamond'] leading-tight uppercase font-bold">
                  {name}
                </h3>
                <div className="absolute w-48 h-px opacity-50 outline  outline-offset-[-1.50px] outline-white left-1/2 -translate-x-1/2 mt-1" />
              </div>
              <button
                className="
    relative overflow-hidden
    bg-white text-black
    px-5 py-2 uppercase text-sm font-medium
    transition-colors duration-500 ease-in-out
    before:content-[''] before:absolute before:inset-0
    before:bg-black before:origin-left before:scale-x-0
    before:transition-transform before:duration-500 before:ease-in-out
    hover:before:scale-x-100 hover:text-white"
              >
                <span className="relative z-10">{buttonText}</span>
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
