import Image from "next/image";
import Link from "next/link";
import {
  BusFront,
  ExternalLink,
  MapPin,
  MountainSnow,
  Plane,
  Route,
  ShoppingBag,
  TrainFront,
} from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { cityGuideStructuredData } from "@/lib/structuredData";
import JsonLd from "../components/teona/JsonLd";
import SeoStructuredData from "../components/teona/SeoStructuredData";

const content = {
  tr: {
    eyebrow: "Konum ve çevre",
    title: "İzmit'i merkezi bir noktadan keşfedin",
    lead: "Teona Hotel; Kocaeli Otogarı, İzmit Tren Garı, alışveriş merkezleri ve bölgesel rotalara erişimi kolaylaştıran merkezi konumuyla iş ve şehir seyahatleri için pratik bir başlangıç noktasıdır.",
    sectionTitle: "Şehir planınızı kolaylaştıran konum",
    sectionBody: "İzmit merkezindeki konumumuz; şehir içi görüşmelerden çevre gezilerine kadar farklı planları tek noktadan kurmanıza yardımcı olur. Aşağıdaki süreler otelden araçla yaklaşık ulaşım değerleridir.",
    cards: [
      {
        title: "İzmit merkezi",
        value: "Merkezi konum",
        body: "Şehir içi iş, yeme-içme ve günlük ihtiyaç noktalarına pratik erişim.",
      },
      {
        title: "Kocaeli Otogarı",
        value: "Yaklaşık 10 dk",
        body: "Şehirlerarası otobüs yolculukları için kısa araç bağlantısı.",
      },
      {
        title: "İzmit Tren Garı",
        value: "Yaklaşık 15 dk",
        body: "Bölgesel ve şehirlerarası tren bağlantılarına araçla erişim.",
      },
      {
        title: "Alışveriş merkezleri",
        value: "Yaklaşık 10 dk",
        body: "Symbol ve 41 Burda dahil başlıca alışveriş noktalarına erişim.",
      },
    ],
    distanceTitle: "Yakın çevre ve bölgesel rotalar",
    distanceLead: "Otel çıkışlı seyahatinizi Sapanca, Kartepe ve Sabiha Gökçen bağlantıları için önceden planlayın. Her rota için doğrudan yol tarifini açabilirsiniz.",
    distanceNote: "Mesafeler ve araçla ulaşım süreleri yaklaşık değerlerdir. Trafik, hava, mevsim ve seçilen güzergâh süreyi değiştirebilir.",
    routes: [
      {
        title: "Sapanca",
        value: "Yaklaşık 30 km",
        body: "Göl çevresi ve günübirlik gezi planları için bölgesel rota.",
        destination: "Sapanca, Sakarya",
      },
      {
        title: "Kartepe Kayak Merkezi",
        value: "Yaklaşık 35 km",
        body: "Kış sporları ve doğa gezileri için mevsimsel rota.",
        destination: "Kartepe Kayak Merkezi, Kocaeli",
      },
      {
        title: "Sabiha Gökçen Havalimanı",
        value: "Yaklaşık 75 dk",
        body: "İstanbul Anadolu Yakası uçuşları için araç bağlantısı.",
        destination: "Sabiha Gökçen Uluslararası Havalimanı",
      },
      {
        title: "Kocaeli Otogarı",
        value: "Yaklaşık 10 dk",
        body: "Şehirlerarası otobüs seferlerine hızlı araç erişimi.",
        destination: "Kocaeli Şehirlerarası Otobüs Terminali",
      },
    ],
    routeLinkLabel: "Yol tarifini aç",
    cta: "Otel konumunu haritada aç",
  },
  en: {
    eyebrow: "Location and surroundings",
    title: "Explore Izmit from a central base",
    lead: "With convenient access to Kocaeli Coach Station, Izmit Railway Station, shopping centres and regional routes, Teona Hotel is a practical base for business and city travel.",
    sectionTitle: "A location that simplifies your plans",
    sectionBody: "Our central Izmit location helps you organise everything from business appointments to regional day trips. The times below are approximate driving times from the hotel.",
    cards: [
      {
        title: "Central Izmit",
        value: "Central location",
        body: "Practical access to business, dining and everyday services across the city.",
      },
      {
        title: "Kocaeli Coach Station",
        value: "Approx. 10 min",
        body: "A short drive for intercity coach connections.",
      },
      {
        title: "Izmit Railway Station",
        value: "Approx. 15 min",
        body: "Driving access to regional and intercity train services.",
      },
      {
        title: "Shopping centres",
        value: "Approx. 10 min",
        body: "Access to major shopping destinations including Symbol and 41 Burda.",
      },
    ],
    distanceTitle: "Nearby destinations and regional routes",
    distanceLead: "Plan journeys from the hotel to Sapanca, Kartepe and Sabiha Gökçen Airport in advance. You can open turn-by-turn directions for every route.",
    distanceNote: "Distances and driving times are approximate. Traffic, weather, season and the selected route may affect journey times.",
    routes: [
      {
        title: "Sapanca",
        value: "Approx. 30 km",
        body: "A regional route for lakeside visits and day trips.",
        destination: "Sapanca, Sakarya",
      },
      {
        title: "Kartepe Ski Centre",
        value: "Approx. 35 km",
        body: "A seasonal route for winter sports and nature trips.",
        destination: "Kartepe Kayak Merkezi, Kocaeli",
      },
      {
        title: "Sabiha Gökçen Airport",
        value: "Approx. 75 min",
        body: "A driving connection for flights from Istanbul's Anatolian side.",
        destination: "Sabiha Gökçen International Airport",
      },
      {
        title: "Kocaeli Coach Station",
        value: "Approx. 10 min",
        body: "Quick driving access to intercity coach services.",
        destination: "Kocaeli Şehirlerarası Otobüs Terminali",
      },
    ],
    routeLinkLabel: "Open directions",
    cta: "Open hotel location in Maps",
  },
  de: {
    eyebrow: "Lage und Umgebung",
    title: "İzmit von zentraler Lage aus entdecken",
    lead: "Das Teona Hotel bietet eine praktische Ausgangslage für Geschäfts- und Städtereisen mit guter Anbindung an den Busbahnhof Kocaeli, den Bahnhof İzmit, Einkaufszentren und regionale Ziele.",
    sectionTitle: "Eine Lage, die Ihre Planung erleichtert",
    sectionBody: "Von unserer zentralen Lage in İzmit lassen sich Geschäftstermine und Ausflüge in die Umgebung bequem planen. Die folgenden Angaben sind ungefähre Fahrzeiten mit dem Auto ab Hotel.",
    cards: [
      {
        title: "Zentrum von İzmit",
        value: "Zentrale Lage",
        body: "Praktischer Zugang zu Geschäftszielen, Gastronomie und Angeboten des täglichen Bedarfs.",
      },
      {
        title: "Busbahnhof Kocaeli",
        value: "Ca. 10 Min.",
        body: "Kurze Autofahrt zu überregionalen Busverbindungen.",
      },
      {
        title: "Bahnhof İzmit",
        value: "Ca. 15 Min.",
        body: "Anbindung an regionale und überregionale Zugverbindungen.",
      },
      {
        title: "Einkaufszentren",
        value: "Ca. 10 Min.",
        body: "Erreichbarkeit wichtiger Einkaufsziele wie Symbol und 41 Burda.",
      },
    ],
    distanceTitle: "Ziele und Routen in der Umgebung",
    distanceLead: "Planen Sie Ihre Fahrt vom Hotel nach Sapanca, Kartepe oder zum Flughafen Sabiha Gökçen im Voraus. Für jedes Ziel können Sie direkt die Routenführung öffnen.",
    distanceNote: "Entfernungen und Fahrzeiten sind ungefähre Angaben. Verkehr, Wetter, Jahreszeit und gewählte Route können die Fahrtdauer beeinflussen.",
    routes: [
      {
        title: "Sapanca",
        value: "Ca. 30 km",
        body: "Regionales Ziel für Ausflüge an den See und Tagestouren.",
        destination: "Sapanca, Sakarya",
      },
      {
        title: "Skigebiet Kartepe",
        value: "Ca. 35 km",
        body: "Saisonales Ziel für Wintersport und Naturausflüge.",
        destination: "Kartepe Kayak Merkezi, Kocaeli",
      },
      {
        title: "Flughafen Sabiha Gökçen",
        value: "Ca. 75 Min.",
        body: "Straßenverbindung zu Flügen auf der anatolischen Seite Istanbuls.",
        destination: "Sabiha Gökçen International Airport",
      },
      {
        title: "Busbahnhof Kocaeli",
        value: "Ca. 10 Min.",
        body: "Schnelle Anfahrt zu überregionalen Busverbindungen.",
        destination: "Kocaeli Şehirlerarası Otobüs Terminali",
      },
    ],
    routeLinkLabel: "Route öffnen",
    cta: "Hotelstandort in Maps öffnen",
  },
  ru: {
    eyebrow: "Расположение и окрестности",
    title: "Исследуйте Измит из центра города",
    lead: "Teona Hotel — удобная отправная точка для деловых и городских поездок с доступом к автовокзалу Коджаэли, железнодорожному вокзалу Измита, торговым центрам и региональным маршрутам.",
    sectionTitle: "Расположение для удобного маршрута",
    sectionBody: "Центральное расположение в Измите помогает планировать как деловые встречи, так и поездки по окрестностям. Ниже указано примерное время в пути на автомобиле от отеля.",
    cards: [
      {
        title: "Центр Измита",
        value: "Центральное расположение",
        body: "Удобный доступ к деловым районам, ресторанам и повседневным услугам.",
      },
      {
        title: "Автовокзал Коджаэли",
        value: "Около 10 мин.",
        body: "Короткая поездка на автомобиле до междугородних автобусных маршрутов.",
      },
      {
        title: "Вокзал Измита",
        value: "Около 15 мин.",
        body: "Доступ на автомобиле к региональным и междугородним поездам.",
      },
      {
        title: "Торговые центры",
        value: "Около 10 мин.",
        body: "Удобный доступ к крупным торговым центрам, включая Symbol и 41 Burda.",
      },
    ],
    distanceTitle: "Ближайшие места и региональные маршруты",
    distanceLead: "Заранее спланируйте поездку от отеля в Сапанджу, Картепе или аэропорт Сабиха Гёкчен. Для каждого направления можно открыть подробный маршрут.",
    distanceNote: "Расстояния и время в пути указаны приблизительно. Дорожная ситуация, погода, сезон и выбранный маршрут могут повлиять на продолжительность поездки.",
    routes: [
      {
        title: "Сапанджа",
        value: "Около 30 км",
        body: "Региональный маршрут для прогулок у озера и однодневных поездок.",
        destination: "Sapanca, Sakarya",
      },
      {
        title: "Горнолыжный центр Картепе",
        value: "Около 35 км",
        body: "Сезонный маршрут для зимнего спорта и поездок на природу.",
        destination: "Kartepe Kayak Merkezi, Kocaeli",
      },
      {
        title: "Аэропорт Сабиха Гёкчен",
        value: "Около 75 мин.",
        body: "Автомобильный маршрут к рейсам из азиатской части Стамбула.",
        destination: "Sabiha Gökçen International Airport",
      },
      {
        title: "Автовокзал Коджаэли",
        value: "Около 10 мин.",
        body: "Быстрый доступ на автомобиле к междугородним автобусным рейсам.",
        destination: "Kocaeli Şehirlerarası Otobüs Terminali",
      },
    ],
    routeLinkLabel: "Открыть маршрут",
    cta: "Открыть отель на карте",
  },
};

const cardIcons = [MapPin, BusFront, TrainFront, ShoppingBag];
const routeIcons = [Route, MountainSnow, Plane, BusFront];

function directionsHref(destination) {
  return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(site.address.full)}&destination=${encodeURIComponent(destination)}&travelmode=driving`;
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "cityGuide", image: site.images.exteriorCity });
}

export default async function CityGuidePage({ params }) {
  const { locale } = await params;
  const t = content[locale] ?? content.tr;
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;
  const structuredRoutes = t.routes.map((route) => ({
    ...route,
    url: directionsHref(route.destination),
  }));

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t.eyebrow, page: "cityGuide" }]} />
      <JsonLd
        data={cityGuideStructuredData({
          locale,
          name: t.distanceTitle,
          items: structuredRoutes,
        })}
      />

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
            {t.cards.map(({ title, value, body }, index) => {
              const Icon = cardIcons[index];
              return (
                <article className="min-h-64 bg-[#F7F5F1] p-7" key={title}>
                  <Icon className="h-6 w-6 text-[#19334F]" strokeWidth={1.4} aria-hidden="true" />
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A7658]">{value}</p>
                  <h3 className="mt-3 font-display text-2xl font-semibold text-[#19334F]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#59616C]">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden bg-white shadow-[0_16px_42px_rgba(0,0,0,0.12)] lg:sticky lg:top-28">
            <Image alt="" className="object-cover" fill sizes="(min-width: 1024px) 42vw, 100vw" src={site.images.map} />
          </div>
          <div>
            <Route className="h-7 w-7 text-[#19334F]" strokeWidth={1.4} aria-hidden="true" />
            <h2 className="mt-5 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">{t.distanceTitle}</h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">{t.distanceLead}</p>

            <div className="mt-8 divide-y divide-[#19334F]/15 border-y border-[#19334F]/15">
              {structuredRoutes.map(({ title, value, body, url }, index) => {
                const Icon = routeIcons[index];
                return (
                  <a
                    className="group grid gap-4 py-5 transition-colors hover:bg-white/55 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:px-4"
                    href={url}
                    key={title}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-[#19334F]/20 bg-white text-[#19334F]">
                      <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-display text-xl font-semibold text-[#19334F]">{title}</span>
                      <span className="mt-1 block text-sm leading-6 text-[#59616C]">{body}</span>
                    </span>
                    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#19334F] sm:justify-end">
                      <span>{value}</span>
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                      <span className="sr-only">{t.routeLinkLabel}</span>
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="mt-5 text-xs leading-6 text-[#727A84]">{t.distanceNote}</p>
            <a className="mt-8 inline-flex min-h-11 items-center border border-[#19334F] px-7 text-xs font-semibold uppercase tracking-[0.16em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white" href={mapHref} rel="noreferrer" target="_blank">{t.cta}</a>
          </div>
        </div>
      </section>

      {locale === "tr" ? (
        <section className="border-t border-black/10 bg-white px-5 py-14 sm:px-8 lg:px-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 border border-[#19334F]/12 bg-[#F7F5F1] px-6 py-9 sm:px-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A78B63]">İzmit merkez konaklama</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#19334F] sm:text-4xl">Şehir merkezindeki otel seçiminizi planlayın</h2>
              <p className="mt-4 text-sm leading-7 text-[#59616C]">Konum, oda seçenekleri, otopark ve rezervasyon ayrıntılarını bir arada inceleyerek İzmit seyahatiniz için uygun konaklama planını oluşturun.</p>
            </div>
            <Link className="inline-flex min-h-12 shrink-0 items-center justify-center border border-[#19334F] px-7 text-xs font-semibold uppercase tracking-[0.15em] text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white" href="/tr/izmit-otel">
              Konaklama rehberini aç
            </Link>
          </div>
        </section>
      ) : null}
    </main>
  );
}
