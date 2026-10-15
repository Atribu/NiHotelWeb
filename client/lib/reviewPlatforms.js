import { site } from "@/lib/site";
import platformLogos from "@/public/teona/review-platforms/logo-manifest.json";

// Account-bound review forms cannot be linked to a particular stay publicly.
// See docs/review-platform-links.md for the verified destinations and sources.
export function getReviewPlatforms() {
  const googleReviewUrl = process.env.GOOGLE_REVIEW_URL?.trim();
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${site.name} ${site.address.full}`,
  )}`;

  return [
    {
      id: "google",
      name: "Google",
      href: googleReviewUrl || googleMapsUrl,
      directReview: Boolean(googleReviewUrl),
    },
    {
      id: "booking",
      name: "Booking.com",
      href: "https://www.booking.com/signin.html",
    },
    {
      id: "expedia",
      name: "Expedia",
      href: "https://www.expedia.com/trips",
    },
    {
      id: "etstur",
      name: "Etstur",
      href: "https://www.otelpuan.com/Teona-Otel/yorum-yaz",
    },
    {
      id: "airbnb",
      name: "Airbnb",
      href: "https://www.airbnb.com/users/reviews",
    },
    {
      id: "tatilsepeti",
      name: "Tatilsepeti",
      href: "https://www.tatilsepeti.com/teona-otel",
    },
    {
      id: "tatilbudur",
      name: "Tatilbudur",
      href: "https://www.tatilbudur.com/teona-hotel",
    },
    {
      id: "otelz",
      name: "Otelz",
      href: "https://www.otelz.com/hotel/teona-hotel",
    },
    {
      id: "enuygun",
      name: "ENUYGUN",
      href: "https://www.enuygun.com/otel/detay/teona-hotel-217697/",
    },
    {
      id: "setur",
      name: "Setur",
      href: "https://www.tripadvisor.com.tr/Hotel_Review-g298012-d2469489-Reviews-Teona_Otel-Izmit_Kocaeli_Province.html",
    },
    {
      id: "jolly",
      name: "Jolly",
      href: "https://www.jollytur.com/teona-hotel",
    },
    {
      id: "sorgulamax",
      name: "Sorgulamax",
      href: "https://sorgulamax.com/otel/teona-hotel",
    },
  ].map((platform) => ({
    ...platform,
    logo: platformLogos[platform.id].src,
    logoWidth: platformLogos[platform.id].width,
    logoHeight: platformLogos[platform.id].height,
  }));
}
