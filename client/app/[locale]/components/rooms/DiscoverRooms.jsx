// components/DiscoverRooms.jsx

import Link from 'next/link';
import Image from 'next/image';
import corner from '../../../../public/images/rooms/cornerroom/NI-CORNER1.webp';
import standard from '../../../../public/images/rooms/standardroom/NI-STANDART.webp';
import junior from '../../../../public/images/rooms/juniorroom/NI-JUNIOR1.webp';
import veranda from '../../../../public/images/rooms/veranda/NI-VERANDA.webp';

// İçerik Ni_Hotel_Tanıtım_ENG.pdf dosyasına dayanır citeturn13file0
const rooms = [
  {
    name: 'Standard Room',
    description: '25 m², 1 French bed + 1 Twin bed, toilet & bathroom',
    image: standard,
    href: '/rooms/standard-unit',
  },
  {
    name: 'Junior Room',
    description: '20 m², 1 French bed, toilet & bathroom',
    image: junior,
    href: '/rooms/junior-unit',
  },
  {
    name: 'Veranda Room',
    description: '25 m², 1 French bed + 1 Twin bed, toilet & bathroom',
    image: veranda,
    href: '/rooms/veranda-unit',
  },
  {
    name: 'Corner Room',
    description: '25 m², 1 French bed, toilet & bathroom',
    image: corner,
    href: '/rooms/corner-unit',
  },
];

export default function DiscoverRooms() {
  // Corner Room hariç diğer odalar
  const otherRooms = rooms.filter(room => room.name !== 'Corner Room');

  return (
    <section className="flex flex-col py-16 bg-white w-screen items-center justify-center">
      <div className="flex flex-col w-[92%] md:w-[75%] lg:w-[65%] lg:min-w-[900px]">
        <h2 className="text-3xl md:text-4xl font-marcellus text-center mb-12">
          Discover Other Rooms
        </h2>
        {/* 3 sütunlu grid: mobilde 1, sm:2, lg ve üstü 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-7">
          {otherRooms.map(({ name, description, image, href }) => (
            <Link
              key={name}
              href={href}
              className="relative block h-[300px] sm:h-[350px] lg:h-[450px] overflow-hidden shadow-lg group"
              aria-label={name}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-6 w-full text-center px-4">
                <h3 className="text-white text-lg font-serif uppercase">
                  {name}
                </h3>
                <div className="h-px w-12 bg-white mx-auto mt-2" />
              </div>
              <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-2 uppercase text-sm font-medium">
                Explore
              </button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}