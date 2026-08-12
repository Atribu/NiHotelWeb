import Image from "next/image";
import { Armchair, Mail, MapPin, Presentation, UsersRound } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { faqStructuredData } from "@/lib/structuredData";
import FaqSection from "../components/teona/FaqSection";
import JsonLd from "../components/teona/JsonLd";
import SeoStructuredData from "../components/teona/SeoStructuredData";

const content = {
  tr: {
    eyebrow: "Toplantı ve organizasyon",
    title: "İzmit merkezde verimli toplantılar",
    lead: "Teona Hotel toplantı salonu; iş toplantıları, eğitimler ve kurumsal buluşmalar için merkezi ve ulaşılabilir bir ortam sunar.",
    sectionTitle: "İhtiyacınıza uygun iki yerleşim",
    sectionBody: "Salonumuz U düzeninde 40, sınıf düzeninde 80 kişiye kadar toplantılara ev sahipliği yapar. Organizasyon detayları ve uygunluk için ekibimizle doğrudan iletişime geçebilirsiniz.",
    uTitle: "U düzeni",
    uValue: "40 kişiye kadar",
    classTitle: "Sınıf düzeni",
    classValue: "80 kişiye kadar",
    locationTitle: "Merkezi konum",
    locationBody: "İzmit şehir merkezindeki konumu sayesinde şehir içinden ve çevre yollardan kolay ulaşım.",
    ctaTitle: "Toplantınızı birlikte planlayalım",
    ctaBody: "Tarih, katılımcı sayısı ve yerleşim tercihinizi iletin; ekibimiz uygunluk bilgisiyle size dönüş yapsın.",
    contact: "Teklif ve bilgi alın",
    faqEyebrow: "Sık sorulan sorular",
    faqTitle: "Toplantı salonu hakkında",
    faqItems: [
      {
        question: "Toplantı salonunun kapasitesi nedir?",
        answer: "Salon U düzeninde 40, sınıf düzeninde 80 kişiye kadar kullanılabilir. Katılımcı sayınızı ve tercih ettiğiniz yerleşimi talebinizde belirtebilirsiniz.",
      },
      {
        question: "Salonda hangi organizasyonlar düzenlenebilir?",
        answer: "Toplantı salonu iş toplantıları, eğitimler, seminerler ve kurumsal buluşmalar için değerlendirilebilir.",
      },
      {
        question: "Uygunluk ve teklif bilgisini nasıl alabilirim?",
        answer: `Tarih, katılımcı sayısı ve yerleşim tercihinizi iletişim sayfasından veya ${site.callCenterEmail} adresinden iletebilirsiniz. Ekibimiz güncel uygunluk bilgisiyle size dönüş yapar.`,
      },
    ],
  },
  en: {
    eyebrow: "Meetings and events",
    title: "Productive meetings in central Izmit",
    lead: "Teona Hotel's meeting room offers a central and accessible setting for business meetings, training sessions and corporate gatherings.",
    sectionTitle: "Two layouts for your programme",
    sectionBody: "Our room hosts up to 40 guests in U-shape and 80 guests in classroom layout. Contact our team directly for event details and availability.",
    uTitle: "U-shape layout",
    uValue: "Up to 40 guests",
    classTitle: "Classroom layout",
    classValue: "Up to 80 guests",
    locationTitle: "Central location",
    locationBody: "Convenient access from central Izmit and the surrounding road network.",
    ctaTitle: "Let us plan your meeting",
    ctaBody: "Share your date, guest count and preferred layout, and our team will respond with availability.",
    contact: "Request information",
    faqEyebrow: "Frequently asked questions",
    faqTitle: "About the meeting room",
    faqItems: [
      {
        question: "What is the capacity of the meeting room?",
        answer: "The room accommodates up to 40 guests in U-shape and up to 80 guests in classroom layout. Include your guest count and preferred setup in your enquiry.",
      },
      {
        question: "What types of events can be held in the room?",
        answer: "The meeting room can be considered for business meetings, training sessions, seminars and corporate gatherings.",
      },
      {
        question: "How can I request availability and a quotation?",
        answer: `Send your date, guest count and preferred layout through the contact page or to ${site.callCenterEmail}. Our team will reply with current availability.`,
      },
    ],
  },
  de: {
    eyebrow: "Tagungen und Veranstaltungen",
    title: "Produktive Tagungen im Zentrum von İzmit",
    lead: "Der Tagungsraum im Teona Hotel bietet einen zentralen und gut erreichbaren Rahmen für Geschäftstreffen, Schulungen und Firmenveranstaltungen.",
    sectionTitle: "Zwei Bestuhlungen für Ihr Programm",
    sectionBody: "Unser Raum bietet Platz für bis zu 40 Personen in U-Form und 80 Personen bei Schulbestuhlung. Für Details und Verfügbarkeit kontaktieren Sie bitte unser Team.",
    uTitle: "U-Form",
    uValue: "Bis zu 40 Personen",
    classTitle: "Schulbestuhlung",
    classValue: "Bis zu 80 Personen",
    locationTitle: "Zentrale Lage",
    locationBody: "Gute Erreichbarkeit aus dem Zentrum von İzmit und über die umliegenden Verkehrswege.",
    ctaTitle: "Planen wir Ihre Tagung gemeinsam",
    ctaBody: "Teilen Sie uns Datum, Teilnehmerzahl und gewünschte Bestuhlung mit; unser Team informiert Sie über die Verfügbarkeit.",
    contact: "Informationen anfordern",
    faqEyebrow: "Häufig gestellte Fragen",
    faqTitle: "Zum Tagungsraum",
    faqItems: [
      {
        question: "Wie viele Personen fasst der Tagungsraum?",
        answer: "Der Raum ist für bis zu 40 Personen in U-Form und bis zu 80 Personen bei Schulbestuhlung ausgelegt. Teilen Sie uns Teilnehmerzahl und gewünschte Bestuhlung in Ihrer Anfrage mit.",
      },
      {
        question: "Welche Veranstaltungen können im Raum stattfinden?",
        answer: "Der Tagungsraum eignet sich für Geschäftstreffen, Schulungen, Seminare und Firmenveranstaltungen.",
      },
      {
        question: "Wie erhalte ich Informationen zu Verfügbarkeit und Angebot?",
        answer: `Senden Sie Datum, Teilnehmerzahl und gewünschte Bestuhlung über die Kontaktseite oder an ${site.callCenterEmail}. Unser Team antwortet mit der aktuellen Verfügbarkeit.`,
      },
    ],
  },
  ru: {
    eyebrow: "Встречи и мероприятия",
    title: "Деловые встречи в центре Измита",
    lead: "Конференц-зал Teona Hotel — центральная и удобная площадка для деловых встреч, обучения и корпоративных мероприятий.",
    sectionTitle: "Два варианта рассадки",
    sectionBody: "Зал принимает до 40 гостей при U-образной и до 80 гостей при классной рассадке. Свяжитесь с командой отеля для уточнения деталей и доступности.",
    uTitle: "U-образная рассадка",
    uValue: "До 40 гостей",
    classTitle: "Классная рассадка",
    classValue: "До 80 гостей",
    locationTitle: "Центральное расположение",
    locationBody: "Удобный доступ из центра Измита и с ближайших автомобильных маршрутов.",
    ctaTitle: "Спланируем вашу встречу",
    ctaBody: "Сообщите дату, число участников и вариант рассадки — наша команда ответит по доступности.",
    contact: "Запросить информацию",
    faqEyebrow: "Часто задаваемые вопросы",
    faqTitle: "О конференц-зале",
    faqItems: [
      {
        question: "Какова вместимость конференц-зала?",
        answer: "Зал рассчитан на 40 человек при U-образной и до 80 человек при классной рассадке. Укажите число участников и желаемый вариант рассадки в запросе.",
      },
      {
        question: "Какие мероприятия можно проводить в зале?",
        answer: "Конференц-зал подходит для деловых встреч, обучения, семинаров и корпоративных мероприятий.",
      },
      {
        question: "Как узнать о доступности и запросить предложение?",
        answer: `Отправьте дату, число участников и вариант рассадки через страницу контактов или на адрес ${site.callCenterEmail}. Команда сообщит актуальную информацию о доступности.`,
      },
    ],
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return buildPageMetadata({ locale, page: "meeting", image: site.images.corridor });
}

export default async function MeetingPage({ params }) {
  const { locale } = await params;
  const t = content[locale] ?? content.tr;

  return (
    <main id="main-content" className="overflow-hidden bg-white text-[#30343A]">
      <SeoStructuredData locale={locale} items={[{ name: t.eyebrow, page: "meeting" }]} />
      <JsonLd data={faqStructuredData({ items: t.faqItems })} />

      <section className="relative isolate flex min-h-[62vh] items-center justify-center overflow-hidden px-5 pb-14 pt-32 text-center sm:px-8 lg:min-h-[70vh] lg:px-12">
        <Image alt="" className="object-cover object-center" fill priority sizes="100vw" src={site.images.corridor} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative mx-auto max-w-4xl text-white">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/75">{t.eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-none sm:text-6xl lg:text-7xl">{t.title}</h1>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">{t.lead}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a78b63]">{site.name}</p>
            <h2 className="mt-4 font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">{t.sectionTitle}</h2>
            <p className="mt-6 text-sm leading-8 text-[#59616C] sm:text-base">{t.sectionBody}</p>
            <div className="mt-9 flex items-start gap-4 border-t border-[#19334F]/15 pt-7">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#19334F]" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 className="font-semibold text-[#19334F]">{t.locationTitle}</h3>
                <p className="mt-2 text-sm leading-7 text-[#59616C]">{t.locationBody}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-[#19334F]/15 sm:grid-cols-2">
            {[
              { Icon: Armchair, title: t.uTitle, value: t.uValue },
              { Icon: UsersRound, title: t.classTitle, value: t.classValue },
            ].map(({ Icon, title, value }) => (
              <article className="min-h-64 bg-[#F7F5F1] p-8 sm:p-10" key={title}>
                <Icon className="h-8 w-8 text-[#19334F]" strokeWidth={1.3} aria-hidden="true" />
                <h3 className="mt-10 font-display text-3xl font-semibold text-[#19334F]">{title}</h3>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#72809A]">{value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FaqSection
        eyebrow={t.faqEyebrow}
        items={t.faqItems}
        title={t.faqTitle}
      />

      <section className="bg-[#19334F] px-5 py-16 text-center text-white sm:px-8 lg:px-10 lg:py-20">
        <Presentation className="mx-auto h-8 w-8 text-[#dec7a6]" strokeWidth={1.4} aria-hidden="true" />
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">{t.ctaTitle}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">{t.ctaBody}</p>
        <Link className="mt-8 inline-flex min-h-11 items-center gap-3 border border-white/70 px-7 text-xs font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#19334F]" href="/contact">
          <Mail className="h-4 w-4" aria-hidden="true" />
          {t.contact}
        </Link>
      </section>
    </main>
  );
}
