// app/galeri/page.jsx
import Image from "next/image";
import img1 from "../../../public/images/lobi/DSCF8651.webp"
import img2 from "../../../public/images/lobi/DSCF8658.webp"
import img3 from "../../../public/images/lobi/DSCF8663.webp"
import img4 from "../../../public/images/lobi/DSCF8673.webp"
import img5 from "../../../public/images/lobi/DSCF8675.webp"
import img6 from "../../../public/images/lobi/DSCF8676.webp"
import img7 from "../../../public/images/lobi/DSCF8677.webp"
import img8 from "../../../public/images/lobi/DSCF8651yakın.webp"
import img9 from "../../../public/images/lobi/DSCF8656.webp"
import img10 from "../../../public/images/lobi/DSCF8661.webp"
import img11 from "../../../public/images/lobi/DSCF8695.webp"
import img12 from "../../../public/images/lobi/DSCF8700.webp"
import img13 from "../../../public/images/lobi/DSCF8702.webp"
import img14 from "../../../public/images/lobi/DSCF8704.webp"
import ContactBanner from "../contact/components/ContactBanner"

export const metadata = {
  title: "Galeri – NiHotel",
  description: "NiHotel Galeri Sayfası"
};

// Galeri görüntülerini public/images/galeri klasörüne yerleştirin
const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
  img6,
  img7,
  img8,img9,img10,img11,img12,img13,img14
];

export default function GalleryPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <ContactBanner header="Galeri" image={img2}/>
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="overflow-hidden shadow-lg group">
              <Image
                src={src}
                alt={`Galeri ${idx + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-60 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
