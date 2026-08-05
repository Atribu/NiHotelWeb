import Image from "next/image";
import { BusFront, MapPin, MountainSnow, Route, ShoppingBag } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import SeoStructuredData from "../components/teona/SeoStructuredData";

const content = {
  tr: {
    eyebrow: "Konum ve çevre",
    title: "İzmit'i merkezi bir noktadan keşfedin",
    lead: "Teona Hotel; şehir merkezi, otogar, alışveriş merkezleri ve çevre ulaşım akslarına yakın konumuyla iş ve şehir seyahatleri için pratik bir başlangıç noktasıdır.",
    sectionTitle: "Şehir planınızı kolaylaştıran konum",
    sectionBody: "Otelimiz İstanbul ve Ankara otoyollarına yakınlığıyla şehir dışından gelen misafirler için ulaşılabilir bir konumdadır. Günlük planınızı oluşturmadan önce yol ve çalışma saatlerini güncel kaynaklardan kontrol etmenizi öneririz.",
    cards: [
      ["İzmit merkezi", "Şehir içi iş, kültür ve yeme-içme noktalarına merkezi erişim."],
      ["Otogar ve ulaşım", "Kocaeli Otogarı ve ana ulaşım bağlantılarına yakın konum."],
      ["Alışveriş", "Symbol ve 41 Burda gibi alışveriş merkezlerine erişim."],
      ["Kartepe", "Kartepe Kayak Merkezi otele yaklaşık 35 km mesafededir."],
    ],
    distanceTitle: "Çevre rotaları",
    distanceBody: "Tanıtım bilgilerimize göre Sapanca yaklaşık 30 km, Sabiha Gökçen Havalimanı 60 km ve Bursa 100 km mesafededir. Süreler trafik ve yol koşullarına göre değişebilir.",
    cta: "Konumu haritada aç",
  },
  en: {
    eyebrow: "Location and surroundings",
    title: "Explore Izmit from a central base",
    lead: "Teona Hotel is a practical base for business and city travel, close to central Izmit, the coach station, shopping centres and major road connections.",
    sectionTitle: "A location that simplifies your plans",
    sectionBody: "Our proximity to the Istanbul and Ankara motorways makes the hotel accessible for guests arriving from outside the city. Please check current traffic and opening hours before travelling.",
    cards: [
      ["Central Izmit", "Central access to business, culture and dining around the city."],
      ["Coach station and transport", "Conveniently located for Kocaeli Coach Station and main connections."],
      ["Shopping", "Access to shopping centres including Symbol and 41 Burda."],
      ["Kartepe", "Kartepe Ski Centre is approximately 35 km from the hotel."],
    ],
    distanceTitle: "Routes around the region",
    distanceBody: "Our hotel information lists Sapanca at approximately 30 km, Sabiha Gökçen Airport at 60 km and Bursa at 100 km. Travel times vary with traffic and road conditions.",
    cta: "Open location in Maps",
  },
  de: {
    eyebrow: "Lage und Umgebung",
    title: "İzmit von zentraler Lage aus entdecken",
    lead: "Das Teona Hotel ist ein praktischer Ausgangspunkt für Geschäfts- und Städtereisen, nahe Zentrum, Busbahnhof, Einkaufszentren und wichtigen Verkehrswegen.",
    sectionTitle: "Eine Lage, die Ihre Planung erleichtert",
    sectionBody: "Durch die Nähe zu den Autobahnen Richtung Istanbul und Ankara ist das Hotel auch von außerhalb gut erreichbar. Bitte prüfen Sie aktuelle Verkehrs- und Öffnungszeiten vor der Fahrt.",
    cards: [
      ["Zentrum von İzmit", "Zentraler Zugang zu Geschäfts-, Kultur- und Gastronomieangeboten."],
      ["Busbahnhof und Verkehr", "Günstige Lage zum Busbahnhof Kocaeli und wichtigen Verbindungen."],
      ["Einkaufen", "Erreichbarkeit der Einkaufszentren Symbol und 41 Burda."],
      ["Kartepe", "Das Skigebiet Kartepe liegt ungefähr 35 km vom Hotel entfernt."],
    ],
    distanceTitle: "Ziele in der Umgebung",
    distanceBody: "Laut unseren Hotelinformationen sind es ungefähr 30 km nach Sapanca, 60 km zum Flughafen Sabiha Gökçen und 100 km nach Bursa. Fahrzeiten können variieren.",
    cta: "Standort in Maps öffnen",
  },
  ru: {
    eyebrow: "Расположение и окрестности",
    title: "Исследуйте Измит из центра города",
    lead: "Teona Hotel — удобная отправная точка для деловых и городских поездок рядом с центром Измита, автовокзалом, торговыми центрами и основными дорогами.",
    sectionTitle: "Расположение для удобного маршрута",
    sectionBody: "Близость к автомагистралям Стамбул–Анкара упрощает приезд из других городов. Перед поездкой рекомендуем проверить актуальную дорожную обстановку и часы работы мест.",
    cards: [
      ["Центр Измита", "Удобный доступ к деловым, культурным и гастрономическим местам."],
      ["Автовокзал и транспорт", "Расположение рядом с автовокзалом Коджаэли и основными маршрутами."],
      ["Торговые центры", "Доступ к торговым центрам Symbol и 41 Burda."],
      ["Картепе", "Горнолыжный центр Картепе находится примерно в 35 км от отеля."],
    ],
    distanceTitle: "Маршруты по региону",
    distanceBody: "По информации отеля, до Сапанджи около 30 км, до аэропорта Сабиха Гёкчен — 60 км, до Бурсы — 100 км. Время в пути зависит от дорожных условий.",
    cta: "Открыть место на карте",
  },
};

const icons = [MapPin, BusFront, ShoppingBag, MountainSnow];

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "cityGuide", image: site.images.exteriorCity });
}

export default async function CityGuidePage({ params }) {
  const { locale } = await params;
  const t = content[locale] ?? content.tr;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t.eyebrow, page: "cityGuide" }]} />

      <section className="relative isolate flex min-h-[62vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:px-8 lg:min-h-[70vh] lg:px-12">
        <Image alt="" className="object-cover object-center" fill priority sizes="100vw" src={site.images.exteriorCity} />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/75">{t.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">{t.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">{t.lead}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">{t.sectionTitle}</h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">{t.sectionBody}</p>
          </div>

          <div className="mt-12 grid gap-px bg-[#19334F]/15 sm:grid-cols-2 lg:grid-cols-4">
            {t.cards.map(([title, body], index) => {
              const Icon = icons[index];
              return (
                <article className="min-h-64 bg-[#F7F5F1] p-7" key={title}>
                  <Icon className="h-6 w-6 text-[#19334F]" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-8 font-display text-2xl font-semibold text-[#19334F]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#59616C]">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden bg-white shadow-[0_16px_42px_rgba(0,0,0,0.12)]">
            <Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 45vw, 100vw" src={site.images.map} />
          </div>
          <div>
            <Route className="h-7 w-7 text-[#19334F]" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">{t.distanceTitle}</h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">{t.distanceBody}</p>
            <a className="mt-8 inline-flex min-h-11 items-center border border-[#19334F] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white" href={mapHref} rel="noreferrer" target="_blank">{t.cta}</a>
          </div>
        </div>
      </section>
    </main>
  );
}
