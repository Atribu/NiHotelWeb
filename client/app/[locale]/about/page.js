// app/hakkimizda/page.jsx
import Image from "next/image";
import aboutBanner from "../gallery/images/lobi/LOBI1.webp";
// Yanına ekleyeceğin resmi burada import et
import aboutSide from "../gallery/images/lobi/LOBI6.webp";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Hakkımızda – NiHotel",
  description: "NiHotel hakkında daha fazla bilgi alın."
};

export default function AboutPage() {
  const t = useTranslations("About");

  return (
    <main>
      {/* BANNER */}
      <section className="relative h-[50vh] lg:h-[60vh] ">
        <Image
          src={aboutBanner}
          alt="NiHotel Hakkımızda Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-['Cormorant_Garamond'] text-white font-bold">
            {t("header")}
          </h1>
        </div>
      </section>

      {/* İÇERİK + GÖRSEL */}
      <section className="container mx-auto px-4 py-10 lg:py-12 md:px-8 font-['Cormorant_Garamond'] font-bold">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-center lg:text-start justify-center">
          {/* Metin bölümü */}
          <div className="space-y-9">
            <p className="text-gray-700 text-[16px] lg:text-[18px] md:text-lg lg::text-xl leading-relaxed">
              {t("text1")}
            </p>
            <div className="flex h-[1px] w-[80%] bg-gray-200 mx-auto"></div>
            <p className="text-gray-700 text-[16px] lg:text-[18px] md:text-xl leading-relaxed">
              {t("text2")}
            </p>
          </div>
          {/* Görsel bölümü */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={aboutSide}
              alt={t("header")}
              width={600}
              height={400}
              className="shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
