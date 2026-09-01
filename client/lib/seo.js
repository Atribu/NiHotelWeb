import { pageAlternates } from "@/lib/routes";
import { site } from "@/lib/site";

const localeSettings = {
  tr: { openGraph: "tr_TR", alternates: ["en_US", "de_DE", "ru_RU"] },
  en: { openGraph: "en_US", alternates: ["tr_TR", "de_DE", "ru_RU"] },
  de: { openGraph: "de_DE", alternates: ["tr_TR", "en_US", "ru_RU"] },
  ru: { openGraph: "ru_RU", alternates: ["tr_TR", "en_US", "de_DE"] },
};

const seoContent = {
  tr: {
    home: ["Teona Hotel | İzmit Merkez Konaklama", "İzmit merkezde 44 oda, ücretsiz Wi-Fi ve otopark, toplantı salonu ve Masa Kocaeli ile konforlu konaklama."],
    rooms: ["İzmit Otel Odaları | Teona Hotel", "Teona Hotel'in Eko, French, Süit, Triple ve Twin oda seçeneklerini, oda fotoğraflarını ve ortak otel olanaklarını inceleyin."],
    economyRoom: ["Eko Oda | İzmit Teona Hotel", "İzmit merkezde pratik konaklama sunan 15–20 m² Eko Oda fotoğraflarını, özelliklerini ve uygunluk durumunu inceleyin."],
    frenchRoom: ["French Oda | İzmit Teona Hotel", "French yatak düzenine sahip 15–20 m² odanın fotoğraflarını, doğrulanmış otel olanaklarını ve rezervasyon seçeneklerini inceleyin."],
    suiteRoom: ["Süit Oda ve Teras | İzmit Teona Hotel", "25 m² Süit Oda ve teras fotoğraflarını inceleyin; İzmit merkezde daha geniş bir konaklama için tarihlerinizi seçin."],
    tripleRoom: ["Triple Oda | İzmit Teona Hotel", "Üç kişilik yatak düzenine sahip 15–20 m² Triple Oda fotoğraflarını, otel olanaklarını ve rezervasyon seçeneklerini inceleyin."],
    twinRoom: ["Twin Oda | İzmit Teona Hotel", "Ayrı yatak düzenine sahip 15–20 m² Twin Oda fotoğraflarını, özelliklerini ve İzmit merkez konaklama seçeneklerini inceleyin."],
    about: ["Teona Hotel Hakkında | İzmit Merkez", "2010'dan beri İzmit merkezde hizmet veren Teona Hotel'in konumu, 44 odası, hizmet anlayışı ve otel olanakları hakkında bilgi alın."],
    meeting: ["İzmit Toplantı Salonu | Teona Hotel", "Teona Hotel toplantı salonu U düzende 40, sınıf düzende 80 kişiye kadar organizasyonlara İzmit merkezde ev sahipliği yapar."],
    cityGuide: ["İzmit Şehir Rehberi ve Ulaşım | Teona Hotel", "Kocaeli Otogarı, İzmit Tren Garı, Sapanca, Kartepe ve Sabiha Gökçen için yaklaşık mesafe, süre ve yol tarifi bilgilerini inceleyin."],
    restaurant: ["Masa Kocaeli | Teona Hotel İzmit", "Teona Hotel bünyesindeki Masa Kocaeli'nin atmosferini ve güncel iletişim bilgilerini keşfedin."],
    gallery: ["Teona Hotel Fotoğraf Galerisi | İzmit", "Teona Hotel'in dış cephe, oda, teras, banyo ve ortak alan fotoğraflarını yüksek çözünürlüklü galeride inceleyin."],
    contact: ["Teona Hotel İletişim ve Yol Tarifi | İzmit", "Teona Hotel telefon, e-posta, açık adres ve harita bilgilerine ulaşın; rezervasyon ve toplantı talepleriniz için iletişime geçin."],
    cookiePolicy: ["Teona Hotel Çerez Politikası", "Teona Hotel web sitesinde kullanılan zorunlu, analiz, pazarlama ve canlı destek teknolojileri ile tercih yönetimini inceleyin."],
    certificates: ["Teona Hotel Sertifikaları", "Teona Hotel'in sürdürülebilir turizm, sıfır atık ve KVKK uyum belgelerini görüntüleyin ve PDF olarak indirin."],
  },
  en: {
    home: ["Teona Hotel | Stay in Central Izmit", "Stay in central Izmit with 44 rooms, free Wi-Fi and parking, a meeting room and Masa Kocaeli."],
    rooms: ["Hotel Rooms in Izmit | Teona Hotel", "Explore Teona Hotel's Economy, French, Suite, Triple and Twin rooms, photo galleries and shared hotel facilities in central Izmit."],
    economyRoom: ["Economy Room | Teona Hotel Izmit", "View the photos and features of our practical 15–20 m² Economy Room and check availability for your stay in central Izmit."],
    frenchRoom: ["French Room | Teona Hotel Izmit", "Explore our 15–20 m² French Room with a French bed layout, verified hotel facilities and direct booking options."],
    suiteRoom: ["Suite Room with Terrace | Teona Hotel Izmit", "Explore our 25 m² Suite Room and terrace photos, then select your dates for a more spacious stay in central Izmit."],
    tripleRoom: ["Triple Room | Teona Hotel Izmit", "View our 15–20 m² Triple Room with a three-guest bed layout, hotel facilities and booking options in central Izmit."],
    twinRoom: ["Twin Room | Teona Hotel Izmit", "Explore our 15–20 m² Twin Room with separate beds, verified facilities and accommodation options in central Izmit."],
    about: ["About Teona Hotel | Central Izmit", "Learn about Teona Hotel, serving guests in central Izmit since 2010 with 44 rooms, a convenient location and practical facilities."],
    meeting: ["Meeting Room in Izmit | Teona Hotel", "Teona Hotel hosts meetings in central Izmit for up to 40 guests in U-shape and 80 guests in classroom layout."],
    cityGuide: ["Izmit City Guide and Transport | Teona Hotel", "Check approximate distances, driving times and directions from Teona Hotel to Kocaeli Coach Station, Sapanca, Kartepe and Sabiha Gökçen Airport."],
    restaurant: ["Masa Kocaeli | Teona Hotel Izmit", "Discover the atmosphere and current contact details of Masa Kocaeli located at Teona Hotel."],
    gallery: ["Teona Hotel Photo Gallery | Izmit", "Browse high-resolution photos of Teona Hotel's exterior, rooms, terrace, bathrooms and shared areas in Izmit."],
    contact: ["Teona Hotel Contact and Directions | Izmit", "Find Teona Hotel's phone, email, full address and map; contact us for reservations and meeting requests."],
    cookiePolicy: ["Teona Hotel Cookie Policy", "Review the essential, analytics, marketing and live-support technologies used on the Teona Hotel website and manage your choices."],
    certificates: ["Teona Hotel Certificates", "View and download Teona Hotel's sustainable tourism, zero waste and personal-data compliance certificates."],
  },
  de: {
    home: ["Teona Hotel | Übernachten im Zentrum von İzmit", "Übernachten Sie zentral in İzmit mit 44 Zimmern, kostenlosem WLAN und Parkplatz, Tagungsraum und Restaurant."],
    rooms: ["Hotelzimmer in İzmit | Teona Hotel", "Entdecken Sie Eco-, French-, Suite-, Dreibett- und Zweibettzimmer im Teona Hotel mit Fotos und Hotelausstattung."],
    economyRoom: ["Eco-Zimmer | Teona Hotel İzmit", "Fotos und Ausstattung des praktischen 15–20 m² Eco-Zimmers ansehen und Verfügbarkeit für Ihren Aufenthalt in İzmit prüfen."],
    frenchRoom: ["French-Zimmer | Teona Hotel İzmit", "Entdecken Sie das 15–20 m² French-Zimmer mit French-Bett, bestätigter Hotelausstattung und direkter Reservierung."],
    suiteRoom: ["Suite mit Terrasse | Teona Hotel İzmit", "Fotos der 25 m² Suite und ihrer Terrasse ansehen und Reisedaten für einen großzügigeren Aufenthalt in İzmit wählen."],
    tripleRoom: ["Dreibettzimmer | Teona Hotel İzmit", "Fotos des 15–20 m² Dreibettzimmers, die Hotelausstattung und Buchungsmöglichkeiten im Zentrum von İzmit ansehen."],
    twinRoom: ["Zweibettzimmer | Teona Hotel İzmit", "Entdecken Sie das 15–20 m² Zweibettzimmer mit getrennten Betten und bestätigter Ausstattung im Zentrum von İzmit."],
    about: ["Über das Teona Hotel | Zentrum von İzmit", "Erfahren Sie mehr über das Teona Hotel, das seit 2010 mit 44 Zimmern und praktischer Ausstattung im Zentrum von İzmit empfängt."],
    meeting: ["Tagungsraum in İzmit | Teona Hotel", "Der Tagungsraum im Teona Hotel bietet Platz für 40 Personen in U-Form und 80 Personen bei Schulbestuhlung."],
    cityGuide: ["Stadtführer und Anreise İzmit | Teona Hotel", "Ungefähre Entfernungen, Fahrzeiten und Routen vom Teona Hotel zum Busbahnhof Kocaeli, nach Sapanca, Kartepe und zum Flughafen Sabiha Gökçen."],
    restaurant: ["Masa Kocaeli in İzmit | Teona Hotel", "Entdecken Sie die Atmosphäre und aktuellen Kontaktdaten von Masa Kocaeli im Teona Hotel."],
    gallery: ["Teona Hotel Fotogalerie | İzmit", "Sehen Sie Fotos von Außenansicht, Zimmern, Terrasse, Bädern und Gemeinschaftsbereichen des Teona Hotels in İzmit."],
    contact: ["Teona Hotel Kontakt und Anfahrt | İzmit", "Telefon, E-Mail, vollständige Adresse und Karte des Teona Hotels; kontaktieren Sie uns für Reservierungen und Tagungen."],
    cookiePolicy: ["Teona Hotel Cookie-Richtlinie", "Informationen zu notwendigen, Analyse-, Marketing- und Live-Support-Technologien auf der Website des Teona Hotels."],
    certificates: ["Zertifikate des Teona Hotels", "Zertifikate des Teona Hotels zu nachhaltigem Tourismus, Abfallvermeidung und Datenschutz ansehen und herunterladen."],
  },
  ru: {
    home: ["Teona Hotel | Проживание в центре Измита", "44 номера в центре Измита, бесплатные Wi-Fi и парковка, конференц-зал и Masa Kocaeli."],
    rooms: ["Номера отеля в Измите | Teona Hotel", "Посмотрите номера Эконом, French, Люкс, Трёхместный и Twin, фотогалереи и общие удобства Teona Hotel."],
    economyRoom: ["Эконом-номер | Teona Hotel Измит", "Фотографии и особенности практичного Эконом-номера площадью 15–20 м², а также доступность проживания в центре Измита."],
    frenchRoom: ["Номер French | Teona Hotel Измит", "Номер French площадью 15–20 м² с двуспальной кроватью, подтверждёнными удобствами и прямым бронированием."],
    suiteRoom: ["Люкс с террасой | Teona Hotel Измит", "Посмотрите фотографии Люкса площадью 25 м² и террасы, затем выберите даты для просторного проживания в центре Измита."],
    tripleRoom: ["Трёхместный номер | Teona Hotel Измит", "Фотографии Трёхместного номера площадью 15–20 м², удобства отеля и варианты бронирования в центре Измита."],
    twinRoom: ["Номер Twin | Teona Hotel Измит", "Номер Twin площадью 15–20 м² с отдельными кроватями, подтверждёнными удобствами и бронированием в Измите."],
    about: ["О Teona Hotel | Центр Измита", "Узнайте о Teona Hotel, который с 2010 года принимает гостей в центре Измита и предлагает 44 номера и практичные удобства."],
    meeting: ["Конференц-зал в Измите | Teona Hotel", "Конференц-зал Teona Hotel в центре Измита рассчитан на 40 гостей при U-образной и на 80 гостей при классной рассадке."],
    cityGuide: ["Путеводитель и транспорт в Измите | Teona Hotel", "Примерные расстояния, время в пути и маршруты от Teona Hotel до автовокзала Коджаэли, Сапанджи, Картепе и аэропорта Сабиха Гёкчен."],
    restaurant: ["Masa Kocaeli | Teona Hotel Измит", "Узнайте об атмосфере и актуальных контактных данных Masa Kocaeli при Teona Hotel."],
    gallery: ["Фотогалерея Teona Hotel | Измит", "Посмотрите фотографии фасада, номеров, террасы, ванных комнат и общих зон Teona Hotel в Измите."],
    contact: ["Контакты и маршрут к Teona Hotel | Измит", "Телефон, электронная почта, полный адрес и карта Teona Hotel; свяжитесь с нами для бронирования и проведения встреч."],
    cookiePolicy: ["Политика cookie Teona Hotel", "Информация об обязательных, аналитических, маркетинговых технологиях и онлайн-поддержке на сайте Teona Hotel."],
    certificates: ["Сертификаты Teona Hotel", "Просмотрите и скачайте сертификаты Teona Hotel в области устойчивого туризма, нулевых отходов и защиты данных."],
  },
};

export function getSeoContent(locale, page) {
  return seoContent[locale]?.[page] ?? seoContent.tr[page];
}

export function buildPageMetadata({ locale, page, image = site.images.hero }) {
  const [title, description] = getSeoContent(locale, page);
  const alternates = pageAlternates(page, locale);
  const settings = localeSettings[locale] ?? localeSettings.tr;
  const imageUrl = new URL(image, site.url).toString();

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      url: alternates.canonical,
      siteName: site.name,
      locale: settings.openGraph,
      alternateLocale: settings.alternates,
      title,
      description,
      images: [{ url: imageUrl, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
