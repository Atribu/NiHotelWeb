"use client";

import { MapPinned } from "lucide-react";
import { useTranslations } from "next-intl";
import { useCookieConsent } from "./CookieConsentProvider";

export default function ConsentMap({
  allowFullScreen = false,
  className = "",
  sandbox,
  title,
}) {
  const t = useTranslations("cookieConsent");
  const { enableService, preferences } = useCookieConsent();

  if (preferences.externalMedia) {
    return (
      <iframe
        allowFullScreen={allowFullScreen}
        className={className}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        sandbox={sandbox}
        src="https://www.google.com/maps?q=Teona%20Hotel%20Izmit%20Kocaeli&output=embed"
        title={title}
      />
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center bg-[#E9E7E2] px-6 text-center text-[#19334F] ${className}`}
    >
      <span className="inline-flex h-12 w-12 items-center justify-center border border-[#19334F]/15 bg-white/80">
        <MapPinned aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <p className="mt-4 max-w-sm text-sm leading-6 text-[#59616C]">
        {t("mapBlocked")}
      </p>
      <button
        className="mt-5 inline-flex min-h-11 items-center justify-center border border-[#19334F] bg-[#19334F] px-5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-white hover:text-[#19334F]"
        onClick={() => enableService("externalMedia")}
        type="button"
      >
        {t("enableMap")}
      </button>
    </div>
  );
}
