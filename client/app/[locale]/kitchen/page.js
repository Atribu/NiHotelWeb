// app/food/page.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import banner from "../../../public/images/breakfast/DSCF8600.webp"

// Menu kategorileri
const sections = [
  { id: "kahvalti",       label: "Kahvaltı" },
  { id: "gunun-menu",     label: "Günün Çorbası ve Günün Yemek Menüsü" },
  { id: "ana-yemek",      label: "Ana Yemek" },
  { id: "atistirmalik",   label: "Atıştırmalık" },
  { id: "salatalar",      label: "Salatalar" },
  { id: "alkollu-icecek", label: "Alkollü İçecekler" },
  { id: "kokteyller",     label: "Alkollü ve Alkolsüz Kokteyller" },
  { id: "kahve-cay",      label: "Kahveler ve Çaylar (Sıcak & Soğuk)" },
  { id: "soft-icecek",    label: "Soft İçecekler" },
];

// Menü verileri
const kahvaltiMenu = [
  { title: "Kahvaltı Tabağı", text: "Bal, Reçel, Çikolata, 2 Çeşit Peynir, Haşlanmış Yumurta, Tereyağı, Domates, Zeytin ve Yeşillik", image: "/images/menu/kahvalti/kahvalti-tabagi.jpg" },
  { title: "Serpme Türk Kahvaltısı", text: "Bal, Reçel, Çikolata, Tahin, Pekmez, 3 Çeşit Peynir, Salam, Patates Kızartması, Sosis, Göz Yumurta, Tereyağı, Domates, Salatalık, Zeytin ve Yeşillik", image: "/images/menu/kahvalti/serpme-turk-kahvaltisi.jpg" },
  { title: "Kaşarlı Tost", text: "Tost Ekmeği ve Kaşar Peyniri", image: "/images/menu/kahvalti/kasarli-tost.jpg" },
  { title: "Salçalı Tost", text: "Salçalı ekmek ve beyaz peynir", image: "/images/menu/kahvalti/salcali-tost.jpg" },
  { title: "Otlu ve Peynirli Tost", text: "Dil peyniri ve taze otlar", image: "/images/menu/kahvalti/otlu-peynirli-tost.jpg" },
  { title: "Sucuklu Tost", text: "Sucuk ve kaşar peynirli tost", image: "/images/menu/kahvalti/sucuklu-tost.jpg" },
  { title: "Pancarlı Ekmek Üstü", text: "Pancarlı labne üzerine ızgara sebzeler, dilimlenmiş avokado, 1 adet göz yumurta, badem ve çeri domates", image: "/images/menu/kahvalti/pancarli-ekmek-ustu.jpg" },
  { title: "Mantarlı Ekmek Üstü", text: "El yapımı guacamole, fırınlanmış mantar, 1 adet göz yumurta, ceviz, susam ve çeri domates", image: "/images/menu/kahvalti/mantarli-ekmek-ustu.jpg" },
  { title: "Otlu Ekmek Üstü", text: "Otlu labne, dilimlenmiş avokado, 1 adet göz yumurta, susam ve çeri domates", image: "/images/menu/kahvalti/otlu-ekmek-ustu.jpg" },
  { title: "Omlet", text: "Çeri domates, avokado ve zeytin", image: "/images/menu/kahvalti/omlet.jpg" },
  { title: "Otlu Peynirli Omlet", text: "Dil peyniri, taze otlar, dilimlenmiş avokado ve çeri domates", image: "/images/menu/kahvalti/otlu-peynirli-omlet.jpg" },
  { title: "Mantarlı Omlet", text: "Fırınlanmış mantar, taze baharatlar, dilimlenmiş avokado ve çeri domates", image: "/images/menu/kahvalti/mantarli-omlet.jpg" },
  { title: "Kaşar Peynirli Omlet", text: "Dil peyniri ve kaşar peyniri", image: "/images/menu/kahvalti/kasar-peynirli-omlet.jpg" },
  { title: "Jambonlu Omlet", text: "Dana jambon, kaşar peyniri ve taze otlar", image: "/images/menu/kahvalti/jambonlu-omlet.jpg" },
  { title: "Meyveli Yulaf Lapası", text: "Süt ile kaynatılmış yulaf ve meyve", image: "/images/menu/kahvalti/meyveli-yulaf-lapasi.jpg" },
  { title: "Karıştırılmış Yumurta", text: "Scrambled egg, guacamole, dana cotto, parmesan, kurutulmuş domates, çeri domates", image: "/images/menu/kahvalti/karistirilmis-yumurta.jpg" },
];

const gununMenu = [
  { title: "Günün Çorbası", text: "Kıtır ekmek ile", image: "/images/menu/gunun-menu/gunun-corbasi.jpg" },
  { title: "Günün Yemek Menüsü", text: "", image: "/images/menu/gunun-menu/gunun-yemek-menusu.jpg" },
];

// Ana Yemek altındaki tüm alt kategoriler tek bir dizide toplanıyor
const anaYemekMenu = [
  // Pizzalar
  { title: "Margarita Pizza", text: "Mozzarella Peyniri, Domates, Fesleğen", image: "/images/menu/ana-yemek/margarita-pizza.jpg" },
  { title: "4 Peynirli Pizza", text: "Mozzarella, Kaşar, Peyniri Cheddar, Parmesan", image: "/images/menu/ana-yemek/4-peynirli-pizza.jpg" },
  { title: "Karışık Pizza", text: "Mozzarella, Sucuk, Sosis, Biber, Mantar, Zeytin", image: "/images/menu/ana-yemek/karisik-pizza.jpg" },
  // Hamburgerler
  { title: "Special Burger", text: "240 gr Burger Köftesi, Karamelize Soğan, Dana Cotto Dilimi, Cheddar, Mantar, Guacamole, Trüflü Mayonez, Parmesanlı Fries", image: "/images/menu/ana-yemek/special-burger.jpg" },
  { title: "Çocuk Burger Menüsü", text: "120 gr Burger Köftesi, Marul, Domates, Turşu, Sos ve Patates Kızartması", image: "/images/menu/ana-yemek/cocuk-burger-menu.jpg" },
  { title: "Cheese Burger", text: "120 gr Burger Köftesi, Çift Cheddar, Guacamole, Trüflü Mayonez, Parmesanlı Fries", image: "/images/menu/ana-yemek/cheese-burger.jpg" },
  // Vejeteryan
  { title: "Vegan Tofulu Wrap", text: "Tofu Köfte, Avokado, Havuç, Salatalık, Humus, Zeytinyağı", image: "/images/menu/ana-yemek/vegan-tofulu-wrap.jpg" },
  { title: "Vegan Wrap", text: "Avokado, Salatalık, Havuç, Yeşil Soğan, Humus", image: "/images/menu/ana-yemek/vegan-wrap.jpg" },
  // Makarnalar
  { title: "Füme Kaburga Spaghetti", text: "Füme Kaburga, Parmesan, Krema, Maydanoz", image: "/images/menu/ana-yemek/fume-kaburga-spaghetti.jpg" },
  { title: "Mantarlı Alfredo", text: "Fırınlanmış Mantar, Parmesanlı Sos", image: "/images/menu/ana-yemek/mantarli-alfredo.jpg" },
  { title: "Penne Arrabbiata", text: "Acı Domates Sos, Fesleğen, Parmesan", image: "/images/menu/ana-yemek/penne-arrabbiata.jpg" },
  { title: "Spaghetti Bolonez", text: "Dana Kıyma Sos, Parmesan", image: "/images/menu/ana-yemek/spaghetti-bolonez.jpg" },
  // Ni Fit
  { title: "Ni Fit Tavuk", text: "200 gr Tavuk Göğsü, Lapa Pirinç, Haşlanmış Sebze", image: "/images/menu/ana-yemek/ni-fit-tavuk.jpg" },
  { title: "Ni Fit Et", text: "200 gr Dana Bonfile, Lapa Pirinç, Haşlanmış Sebze", image: "/images/menu/ana-yemek/ni-fit-et.jpg" },
];

const atistirmalikMenu = [
  { title: "Bira Tabağı", text: "4 adet soğan halkası, 1 mozzarella stick, 2 kızarmış sosis ve ev yapımı patates cips", image: "/images/menu/atistirmalik/bira-tabagi.jpg" },
  { title: "Çıtır Tavuk", text: "6 adet çıtır tavuk ve dip sos ile", image: "/images/menu/atistirmalik/citir-tavuk.jpg" },
  { title: "Parmak Patates", text: "Ev yapımı parmaktan patates kızartması", image: "/images/menu/atistirmalik/parmak-patates.jpg" },
  { title: "Karışık Kuruyemiş", text: "Karışık kuruyemiş çeşitleri", image: "/images/menu/atistirmalik/karisik-kuruyemis.jpg" },
  { title: "Peynir Tabağı", text: "Gouda peyniri, rokfor peyniri, kaş graviyeri, parmesan peyniri, kuru üzüm, kuru kayısı, ceviz, badem, pastırma, siyah zeytin ve grissini ile", image: "/images/menu/atistirmalik/peynir-tabagi.jpg" },
  { title: "Cips", text: "Doritos, Lay's, Ruffles", image: "/images/menu/atistirmalik/cips.jpg" },
];

const salatalarMenu = [
  { title: "Izgara Tavuk Salata", text: "Maskolin, ızgara Yedikule marul, 130 gr ızgara tavuk göğsü, Çanakkale çeri, baby turp dilimleri, naneli yoğurtlu sos ile", image: "/images/menu/salatalar/izgara-tavuk-salata.jpg" },
  { title: "Tahıl Salata", text: "Karabuğday, siyez bulguru, maş fasulyesi, maskolin, çeri, susam, fesleğenli fit salata sosu", image: "/images/menu/salatalar/tahil-salata.jpg" },
  { title: "Lor ve Pancar Salata", text: "Maskolin, roast edilmiş pancar, lor peyniri, avokado, çörek otu ile", image: "/images/menu/salatalar/lor-pancar-salata.jpg" },
  { title: "Sezar Salata", text: "Romaine marul, tavuk göğsü, parmesan, kruton, Caesar sos ile", image: "/images/menu/salatalar/sezar-salata.jpg" },
];

const kahveCayMenu = [
  { title: "Espresso", text: "", image: "/images/menu/kahve/espresso.jpg" },
  { title: "Espresso Doppio", text: "", image: "/images/menu/kahve/espresso-doppio.jpg" },
  { title: "Ristretto Doppio", text: "", image: "/images/menu/kahve/ristretto-doppio.jpg" },
  { title: "Kaffee Creme", text: "", image: "/images/menu/kahve/kaffee-creme.jpg" },
  { title: "Long Black", text: "", image: "/images/menu/kahve/long-black.jpg" },
  { title: "Americano", text: "", image: "/images/menu/kahve/americano.jpg" },
  { title: "Cappuccino", text: "", image: "/images/menu/kahve/cappuccino.jpg" },
  { title: "Latte Macchiato", text: "", image: "/images/menu/kahve/latte-macchiato.jpg" },
  { title: "Espresso Macchiato", text: "", image: "/images/menu/kahve/espresso-macchiato.jpg" },
  { title: "Kaffee Latte", text: "", image: "/images/menu/kahve/kaffee-latte.jpg" },
  { title: "White Chocolate Mocha", text: "", image: "/images/menu/kahve/white-chocolate-mocha.jpg" },
  { title: "Flat White", text: "", image: "/images/menu/kahve/flat-white.jpg" },
  { title: "Kaffee Mocha", text: "", image: "/images/menu/kahve/kaffee-mocha.jpg" },
  { title: "Türk Kahvesi", text: "", image: "/images/menu/kahve/turk-kahvesi.jpg" },
  { title: "Elma Çayı", text: "", image: "/images/menu/kahve/elma-cayi.jpg" },
  { title: "Yeşil Çay", text: "", image: "/images/menu/kahve/yesil-cay.jpg" },
  { title: "Çay", text: "", image: "/images/menu/kahve/cay.jpg" },
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

export default function FoodPage() {
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
          <h1 className="text-3xl md:text-5xl font-marcellus text-white">Food & Beverage</h1>
          <p className="mt-2 text-sm md:text-base text-white">Kafe — Bar — Restaurant</p>
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
      <div className="container mx-auto px-4 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        <nav className="hidden lg:block sticky top-32 space-y-4">
          {sections.map(sec => (
            <Link key={sec.id} href={`#${sec.id}`} className="block px-4 py-2 text-gray-700 hover:text-black hover:underline">{sec.label}</Link>
          ))}
        </nav>
        <div className="lg:col-span-3 space-y-24">
          {sections.map(sec => {
            const items = menuData[sec.id] || [];
            return (
              <section key={sec.id} id={sec.id} className="scroll-mt-24">
                <h2 className="text-2xl font-marcellus font-bold mb-6">{sec.label}</h2>
                {items.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map(item => (
                      <div key={item.title} className="flex items-start space-x-4 transform transition-transform duration-200 hover:scale-105 hover:shadow-lg p-2 rounded-lg">
                        <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-full object-cover" />
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
