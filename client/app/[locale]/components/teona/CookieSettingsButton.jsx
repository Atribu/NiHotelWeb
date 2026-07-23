"use client";

import { useTranslations } from "next-intl";
import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieSettingsButton({ className = "" }) {
  const t = useTranslations("cookieConsent");
  const { openSettings } = useCookieConsent();

  return (
    <button
      className={className}
      onClick={openSettings}
      type="button"
    >
      {t("manage")}
    </button>
  );
}
