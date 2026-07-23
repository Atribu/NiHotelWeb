"use client";

import { Cookie } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  useCallback,
  useSyncExternalStore,
} from "react";
import { Link } from "@/i18n/navigation";

const CONSENT_COOKIE_NAME = "teona_cookie_consent";
const CONSENT_VERSION = 2;
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_EVENT = "teona-cookie-consent-change";
const SERVER_SNAPSHOT = "__pending__";

function getCookieSnapshot() {
  if (typeof document === "undefined") return SERVER_SNAPSHOT;

  const prefix = `${CONSENT_COOKIE_NAME}=`;
  const entry = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(prefix));

  return entry ? entry.slice(prefix.length) : "";
}

function getServerSnapshot() {
  return SERVER_SNAPSHOT;
}

function subscribeToConsent(callback) {
  window.addEventListener(CONSENT_EVENT, callback);
  return () => window.removeEventListener(CONSENT_EVENT, callback);
}

function hasAcknowledgedCookieNotice(snapshot) {
  if (!snapshot || snapshot === SERVER_SNAPSHOT) return false;

  try {
    const stored = JSON.parse(decodeURIComponent(snapshot));
    return (
      stored.version === CONSENT_VERSION &&
      stored.acknowledged === true
    );
  } catch {
    return false;
  }
}

function writeAcknowledgement() {
  const payload = encodeURIComponent(
    JSON.stringify({
      version: CONSENT_VERSION,
      acknowledged: true,
      savedAt: new Date().toISOString(),
    }),
  );
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE_NAME}=${payload}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export default function CookieConsentProvider({ children }) {
  const t = useTranslations("cookieConsent");
  const snapshot = useSyncExternalStore(
    subscribeToConsent,
    getCookieSnapshot,
    getServerSnapshot,
  );
  const isReady = snapshot !== SERVER_SNAPSHOT;
  const hasAcknowledged = hasAcknowledgedCookieNotice(snapshot);
  const acknowledge = useCallback(() => {
    writeAcknowledgement();
  }, []);

  return (
    <>
      {children}

      {isReady && !hasAcknowledged ? (
        <section
          aria-label={t("bannerLabel")}
          className="fixed inset-x-3 bottom-3 z-[900] border border-white/20 bg-[#19334F] px-5 py-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:inset-x-6 sm:bottom-6 sm:px-7 lg:left-1/2 lg:max-w-5xl lg:-translate-x-1/2"
        >
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div className="flex gap-4">
              <span className="hidden h-11 w-11 shrink-0 items-center justify-center border border-white/20 sm:inline-flex">
                <Cookie aria-hidden="true" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold">
                  {t("title")}
                </h2>
                <p className="mt-1 max-w-3xl text-xs leading-5 text-white/78 sm:text-sm sm:leading-6">
                  {t("bannerBody")}{" "}
                  <Link
                    className="border-b border-white/60 text-white transition-colors hover:border-white"
                    href="/cookie-policy"
                  >
                    {t("policyLink")}
                  </Link>
                </p>
              </div>
            </div>
            <button
              className="inline-flex min-h-11 items-center justify-center border border-white/45 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#19334F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              onClick={acknowledge}
              type="button"
            >
              {t("understood")}
            </button>
          </div>
        </section>
      ) : null}
    </>
  );
}
