// app/food/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";

const sections = [
  { id: "kahvalti",     label: "Kahvaltı" },
  { id: "ana-yemek",    label: "Ana Yemek" },
  { id: "tavuk-eti",    label: "Tavuk Eti" },
  // diğer bölümleri benzer şekilde ekleyebilirsiniz
];

const kahvaltiMenu = [
  {
    title: "Kahvaltı Tabağı",
    text: "Bal, Reçel, Çikolata, 2 Çeşit Peynir, Haşlanmış Yumurta, Tereyağı, Domates, Zeytin ve Yeşillik",
    image: "/images/menu/kahvalti/kahvalti-tabagi.jpg",
  },
  {
    title: "Serpme Türk Kahvaltısı",
    text: "Bal, Reçel, Çikolata, Tahin, Pekmez, 3 Çeşit Peynir, Salam, Patates Kızartması, Sosis, Göz Yumurta, Tereyağı, Domates, Salatalık, Zeytin ve Yeşillik",
    image: "/images/menu/kahvalti/serpme-turk-kahvaltisi.jpg",
  },
  {
    title: "Kaşarlı Tost",
    text: "Tost Ekmeği ve Kaşar Peyniri",
    image: "/images/menu/kahvalti/kasarli-tost.jpg",
  },
];

const anaYemekMenu = [
  {
    title: "Günün Çorbası",
    text: "Kıtır Ekmek ile",
    image: "/images/menu/ana-yemek/gunun-corbasi.jpg",
  },
  {
    title: "Türk Mantısı",
    text: "Yoğurt ve Tereyağı",
    image: "/images/menu/ana-yemek/turk-mantisi.jpg",
  },
  {
    title: "İtalyan Köfte",
    text: "Patates Püresi, Fesleğenli Domates Sos, Mini Italian Köfteler",
    image: "/images/menu/ana-yemek/italyan-kofte.jpg",
  },
];

const tavukEtiMenu = [
  {
    title: "Tavuk Bonfile Izgara",
    text: "200 gr Bonfile, Vinegretlenmiş Yeşillik ile",
    image: "/images/menu/tavuk/tavuk-bonfile-izgara.jpg",
  },
  {
    title: "Tavuk Fajita",
    text: "Salsa Sos, Guacamole Sos, Krema Sos",
    image: "/images/menu/tavuk/tavuk-fajita.jpg",
  },
  {
    title: "Şinitzel",
    text: "220 gr Şinitzel, Patates Püresi, Vinegretlenmiş Semizotu ile",
    image: "/images/menu/tavuk/sinitzel.jpg",
  },
  {
    title: "Tavuk Turn",
    text: "Humus, Kırmızı Kino, Semizotu, Izgara Tavuk Göğsü, Çeri Domates",
    image: "/images/menu/tavuk/tavuk-turn.jpg",
  },
];

export default function FoodPage() {
  return (
    <main className="scroll-smooth">
      {/* HEADER */}
      <section className="relative h-64 lg:h-96 overflow-hidden">
        <Image
          src="/images/food-banner.jpg"
          alt="Food & Beverage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-marcellus text-white">
            Food & Beverage
          </h1>
          <p className="mt-2 text-sm md:text-base text-white">
            Kafe — Bar — Restaurant
          </p>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white">
            Özenle seçilmiş kahve çekirdeklerinin muhteşem kokusu günün her saati
            enerjinizi yenilerken, farklı damak tadlarına özel seçkin alkollü-
            alkolsüz içecekler barımızda keyifli sohbetler için hazır bekliyor.
          </p>
          <p className="mt-2 max-w-2xl text-xs md:text-sm text-white">
            Şefimizin ülke ve dünya mutfağını harmanladığı eşsiz lezzetler ise Ni
            Hotel Lara’da konaklama deneyiminizi üst seviyeye taşıyor.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* LEFT NAV */}
        <nav className="hidden lg:block sticky top-32 space-y-4">
          {sections.map((sec) => (
            <Link
              key={sec.id}
              href={`#${sec.id}`}
              className="block px-4 py-2 text-gray-700 hover:text-black hover:underline"
            >
              {sec.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTIONS */}
        <div className="lg:col-span-3 space-y-24">
          {/* Kahvaltı */}
          <section id="kahvalti" className="scroll-mt-24">
            <h2 className="text-2xl font-['Cormorant_Garamond'] font-bold mb-6">Kahvaltı</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {kahvaltiMenu.map(({ title, text, image }) => (
                <div
                  key={title}
                  className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Ana Yemek */}
          <section id="ana-yemek" className="scroll-mt-24">
            <h2 className="text-2xl font-marcellus mb-6">Ana Yemek</h2>
            <div className="space-y-8">
              {/* Çorbalar */}
              <div>
                <h3 className="bg-gray-100 px-4 py-2 font-semibold">Çorbalar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {anaYemekMenu.slice(0, 1).map(({ title, text, image }) => (
                    <div
                      key={title}
                      className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={title}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{title}</h4>
                        <p className="text-sm text-gray-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Ana Yemek */}
              <div>
                <h3 className="bg-gray-100 px-4 py-2 font-semibold">Ana Yemek</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  {anaYemekMenu.slice(1).map(({ title, text, image }) => (
                    <div
                      key={title}
                      className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
                    >
                      <Image
                        src={image}
                        alt={title}
                        width={80}
                        height={80}
                        className="rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{title}</h4>
                        <p className="text-sm text-gray-600">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Tavuk Eti */}
          <section id="tavuk-eti" className="scroll-mt-24">
            <h2 className="text-2xl font-marcellus mb-6">Tavuk Eti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tavukEtiMenu.map(({ title, text, image }) => (
                <div
                  key={title}
                  className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}



  // const sections = [
//   { id: "kahvalti",      label: "Kahvaltı" },
//   { id: "gunun-menu",    label: "Günün Çorbası ve Günün Yemek Menüsü" },
//   { id: "ana-yemek",     label: "Ana Yemek" },
//   { id: "atistirmalik",  label: "Atıştırmalık" },
//   { id: "salatalar",     label: "Salatalar" },
//   { id: "alkollu-icecek",label: "Alkollü İçecekler" },
//   { id: "kokteyller",    label: "Alkollü ve Alkolsüz Kokteyller" },
//   { id: "kahve-cay",     label: "Kahveler ve Çaylar (Sıcak & Soğuk)" },
//   { id: "soft-icecek",   label: "Soft İçecekler" },
// ];