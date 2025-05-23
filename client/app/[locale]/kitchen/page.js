// app/food/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/breakfast/DSCF8600.webp"
import { useTranslations } from 'next-intl';
import img1 from "../../../public/images/menu/breakfast/kahvaltiTabak.webp"
import img2 from "../../../public/images/menu/breakfast/serpme.webp"
import img3 from "../../../public/images/menu/breakfast/tost.webp"
import img4 from "../../../public/images/menu/breakfast/salcaTost.webp"
import img5 from "../../../public/images/menu/breakfast/otlutost.webp"
import img6 from "../../../public/images/menu/breakfast/sucuklutost.webp"
import img7 from "../../../public/images/menu/breakfast/pancarli.webp"
import img8 from "../../../public/images/menu/breakfast/mantarli.webp"
import img9 from "../../../public/images/menu/breakfast/otlu.webp"
import img10 from "../../../public/images/menu/breakfast/omlet.webp"
import img11 from "../../../public/images/menu/breakfast/otluomlet.webp"
import img12 from "../../../public/images/menu/breakfast/mantarliomlet.webp"
import img13 from "../../../public/images/menu/breakfast/kasarliomlet.webp"
import img14 from "../../../public/images/menu/breakfast/jambonlu.webp"
import img15 from "../../../public/images/menu/breakfast/lapa.webp"
import img16 from "../../../public/images/menu/breakfast/yumurta.webp"

import main1 from "../../../public/images/menu/maincourse/pizza.webp"
import main2 from "../../../public/images/menu/maincourse/pizza2.webp"
import main3 from "../../../public/images/menu/maincourse/pizza3.webp"
import main4 from "../../../public/images/menu/maincourse/burger1.webp"
import main5 from "../../../public/images/menu/maincourse/kidsburger.webp"
import main6 from "../../../public/images/menu/maincourse/burger2.webp"
import main7 from "../../../public/images/menu/maincourse/veganwrap.webp"
import main8 from "../../../public/images/menu/maincourse/veganwrap2.webp"
import main9 from "../../../public/images/menu/maincourse/makarna1.webp"
import main10 from "../../../public/images/menu/maincourse/makarna2.webp"
import main11 from "../../../public/images/menu/maincourse/makarna3.webp"
import main12 from "../../../public/images/menu/maincourse/makarna4.webp"
import main13 from "../../../public/images/menu/maincourse/fittavuk.webp"
import main14 from "../../../public/images/menu/maincourse/fitet.webp"
import main15 from "../../../public/images/menu/maincourse/manti.webp"
import main16 from "../../../public/images/menu/maincourse/italymeatball.webp"
import main17 from "../../../public/images/menu/maincourse/tavukbonfile.webp"
import main18 from "../../../public/images/menu/maincourse/tavukfajita.webp"
import main19 from "../../../public/images/menu/maincourse/sinitzel.webp"
import main20 from "../../../public/images/menu/maincourse/tavukturn.webp"

import snack1 from "../../../public/images/menu/snacks/biratabak.webp"
import snack2 from "../../../public/images/menu/snacks/citirtavuk.webp"
import snack3 from "../../../public/images/menu/snacks/patates.webp"
import snack4 from "../../../public/images/menu/snacks/kuruyemis.webp"
import snack5 from "../../../public/images/menu/snacks/cheese.webp"
import snack6 from "../../../public/images/menu/snacks/cips.webp"

export default function FoodPage() {
  const t = useTranslations('Kitchen');
  const t2 = useTranslations('Kitchen.Breakfast');
  const t3 = useTranslations('Kitchen.MainCourse');
  const t4 = useTranslations('Kitchen.DailyMenu');
  const t5 = useTranslations('Kitchen.Snack');
  const t6 = useTranslations('Kitchen.Salads');
  const t7 = useTranslations('Kitchen.CoffeeTea');
  const t8 = useTranslations('Kitchen.MainCourse');

  // Menu kategorileri
const sections = [
  { id: "kahvalti",       label: t("breakfast") },
  { id: "gunun-menu",     label: t("dailySoupAndMealMenu") },
  { id: "ana-yemek",      label: t("mainCourse") },
  { id: "atistirmalik",   label: t("snack") },
  { id: "salatalar",      label: t("salads") },
  { id: "alkollu-icecek", label: t("alcoholicDrinks") },
  { id: "kokteyller",     label: t("cocktails") },
  { id: "kahve-cay",      label: t("coffeeTea") },
  { id: "soft-icecek",    label: t("softDrinks") },
];

// Menü verileri
const kahvaltiMenu = [
  { title: t2("title1"), text: t2("text1"), image: img1 },
  { title: t2("title2"), text: t2("text2"), image: img2 },
  { title: t2("title3"), text: t2("text3"), image: img3 },
  { title: t2("title4"), text: t2("text4"), image: img4 },
  { title: t2("title5"), text: t2("text5"), image: img5 },
  { title: t2("title6"), text: t2("text6"), image: img6},
  { title: t2("title7"), text: t2("text7"), image: img7 },
  { title: t2("title8"), text: t2("text8"), image: img8 },
  { title: t2("title9"), text: t2("text9"), image: img9 },
  { title: t2("title10"), text: t2("text10"), image: img10 },
  { title: t2("title11"), text: t2("text11"), image: img11 },
  { title: t2("title12"), text: t2("text12"), image: img12 },
  { title: t2("title13"), text: t2("text13"), image: img13 },
  { title: t2("title14"), text: t2("text14"), image: img14 },
  { title: t2("title15"), text: t2("text15"), image: img15 },
  { title: t2("title16"), text: t2("text16"), image: img16 },
];

const gununMenu = [
  { title: t4("title1"), text: t4("text1"), image: "/images/menu/gunun-menu/gunun-corbasi.jpg" },
  { title: t4("title2"), text: t4("text2"), image: "/images/menu/gunun-menu/gunun-yemek-menusu.jpg" },
];

// Ana Yemek altındaki tüm alt kategoriler tek bir dizide toplanıyor
const anaYemekMenu = [
  { title: t3("title15"), text: t3("text15"), image: main15 },
  { title: t3("title16"), text: t3("text16"), image: main16},
  { title: t3("title17"), text: t3("text17"), image: main17 },
  // Tavuk
  { title: t3("title18"), text: t3("text18"), image: main18 },
  { title: t3("title19"), text: t3("text19"), image: main19},
  { title: t3("title20"), text: t3("text20"), image: main20},

  // Pizzalar
  { title: t3("title1"), text: t3("text1"), image: main1 },
  { title: t3("title2"), text: t3("text2"), image: main2},
  { title: t3("title3"), text: t3("text3"), image: main3 },
  // Hamburgerler
  { title: t3("title4"), text: t3("text4"), image: main4 },
  { title: t3("title5"), text: t3("text5"), image: main5},
  { title: t3("title6"), text: t3("text6"), image: main6 },
  // Vejeteryan
  { title: t3("title7"), text: t3("text7"), image: main7 },
  { title: t3("title8"), text: t3("text8"), image: main8 },
  // Makarnalar
  { title: t3("title9"), text: t3("text9"), image: main9},
  { title: t3("title10"), text: t3("text10"), image: main10 },
  { title: t3("title11"), text: t3("text11"), image: main11 },
  { title: t3("title12"), text: t3("text12"), image: main12},
  // Ni Fit
  { title: t3("title13"), text: t3("text13"), image: main13 },
  { title: t3("title14"), text: t3("text14"), image: main14 },
];

const atistirmalikMenu = [
  { title: t5("title1"), text: t5("text1"), image: snack1 },
  { title: t5("title2"), text: t5("text2"), image: snack2 },
  { title: t5("title3"), text: t5("text3"), image: snack3 },
  { title: t5("title4"), text: t5("text4"), image: snack4 },
  { title: t5("title5"), text: t5("text5"), image: snack5 },
  { title: t5("title6"), text: t5("text6"), image: snack6 },
];

const salatalarMenu = [
  { title:t6("title1"), text: t6("text1"), image: "/images/menu/salatalar/izgara-tavuk-salata.jpg" },
  { title: t6("title2"), text: t6("text2"), image: "/images/menu/salatalar/tahil-salata.jpg" },
  { title: t6("title3"), text: t6("text3"), image: "/images/menu/salatalar/lor-pancar-salata.jpg" },
  { title: t6("title4"), text: t6("text4"), image: "/images/menu/salatalar/sezar-salata.jpg" },
];

const kahveCayMenu = [
  { title: t7("title1"), text: t7("text1"), image: "/images/menu/kahve/espresso.jpg" },
  { title:  t7("title2"), text: t7("text1"), image: "/images/menu/kahve/espresso-doppio.jpg" },
  { title:  t7("title3"), text: t7("text1"), image: "/images/menu/kahve/ristretto-doppio.jpg" },
  { title:  t7("title4"), text: t7("text1"), image: "/images/menu/kahve/kaffee-creme.jpg" },
  { title:  t7("title5"), text: t7("text1"), image: "/images/menu/kahve/long-black.jpg" },
  { title:  t7("title6"), text: t7("text1"), image: "/images/menu/kahve/americano.jpg" },
  { title:  t7("title7"), text: t7("text1"), image: "/images/menu/kahve/cappuccino.jpg" },
  { title:  t7("title8"), text: t7("text1"), image: "/images/menu/kahve/latte-macchiato.jpg" },
  { title:  t7("title9"), text: t7("text1"), image: "/images/menu/kahve/espresso-macchiato.jpg" },
  { title:  t7("title10"), text: t7("text1"), image: "/images/menu/kahve/kaffee-latte.jpg" },
  { title:  t7("title11"), text: t7("text1"), text: "", image: "/images/menu/kahve/white-chocolate-mocha.jpg" },
  { title:  t7("title12"), text: t7("text1"), image: "/images/menu/kahve/flat-white.jpg" },
  { title:  t7("title13"), text: t7("text1"), image: "/images/menu/kahve/kaffee-mocha.jpg" },
  { title:  t7("title14"), text: t7("text1"), image: "/images/menu/kahve/turk-kahvesi.jpg" },
  { title:  t7("title15"), text: t7("text1"), image: "/images/menu/kahve/elma-cayi.jpg" },
  { title:  t7("title16"), text: t7("text1"), image: "/images/menu/kahve/yesil-cay.jpg" },
  { title:  t7("title17"), text: t7("text1"), image: "/images/menu/kahve/cay.jpg" },
];

const softIcecekMenu = []; // eklenecek

const menuData = {
  kahvalti:       kahvaltiMenu,
  "gunun-menu":   gununMenu,
  "ana-yemek":    anaYemekMenu,
  atistirmalik:   atistirmalikMenu,
  salatalar:      salatalarMenu,
  "alkollu-icecek": [],
  kokteyller:     [],
  "kahve-cay":    kahveCayMenu,
  "soft-icecek":  softIcecekMenu,
};

  return (
    <main className="scroll-smooth">
      {/* HEADER */}
      <section className="relative h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src={banner}
          alt="Food & Beverage"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 mt-8 lg:mt-16">
          <h2 className="text-3xl md:text-5xl font-['Cormorant_Garamond'] font-bold text-white">Food & Beverage</h2>
          <p className="mt-2 text-sm md:text-[15px] text-white">Kafe — Bar — Restaurant</p>
          <p className="mt-4 max-w-2xl text-xs md:text-sm text-white">
            Özenle seçilmiş kahve çekirdeklerinin muhteşem kokusu günün her saati enerjinizi yenilerken,
            farklı damak tadlarına özel seçkin alkollü-alkolsüz içecekler barımızda keyifli sohbetler için hazır bekliyor.
          </p>
          <p className="mt-2 max-w-2xl text-xs md:text-sm text-white">
            Şefimizin ülke ve dünya mutfağını harmanladığı eşsiz lezzetler ise Ni Hotel Lara’da konaklama deneyiminizi üst seviyeye taşıyor.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="container mx-auto px-4 lg:px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <nav className="hidden lg:block sticky top-32 space-y-4">
          {sections.map(sec => (
            <Link key={sec.id} href={`#${sec.id}`} className="block px-4 py-2 text-gray-700 hover:text-black text-[14px] lg:text-[18px] font-jost font-semibold golge ">{sec.label}</Link>
          ))}
        </nav>
        <div className="absolute left-[28%] w-[1px] h-[600px] bg-gray-400"></div>
        <div className="lg:col-span-3 space-y-24">
          {sections.map(sec => {
            const items = menuData[sec.id] || [];
            return (
              <section key={sec.id} id={sec.id} className="scroll-mt-24">
                <h2 className="text-2xl font-jost font-bold mb-6">{sec.label}</h2>
                {items.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map(item => (
                      <div key={item.title} className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg">
                        <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-full object-cover w-[80px] h-[80px]" />
                        <div className="flex flex-col">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
      
    </main>
  );
}
