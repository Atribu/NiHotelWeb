"use client";

import { Cookie, X } from "lucide-react";
import { useTranslations } from "next-intl";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { Link } from "@/i18n/navigation";

const CONSENT_COOKIE_NAME = "teona_cookie_consent";
const CONSENT_VERSION = 3;
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_EVENT = "teona-cookie-consent-change";
export const CONSENT_SETTINGS_EVENT = "teona-cookie-settings-open";
const SERVER_SNAPSHOT = "__pending__";
const DEFAULT_PREFERENCES = {
  liveSupport: false,
  analytics: false,
  marketing: false,
};

const CookieConsentContext = createContext({
  consent: DEFAULT_PREFERENCES,
  hasDecision: false,
  isReady: false,
});

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

function normalizePreferences(preferences = {}) {
  return {
    liveSupport: preferences.liveSupport === true,
    analytics: preferences.analytics === true,
    marketing: preferences.marketing === true,
  };
}

function parseConsent(snapshot) {
  if (!snapshot || snapshot === SERVER_SNAPSHOT) {
    return {
      hasDecision: false,
      preferences: DEFAULT_PREFERENCES,
    };
  }

  try {
    const stored = JSON.parse(decodeURIComponent(snapshot));

    if (stored.version !== CONSENT_VERSION || !stored.preferences) {
      throw new Error("Outdated cookie consent");
    }

    return {
      hasDecision: true,
      preferences: normalizePreferences(stored.preferences),
    };
  } catch {
    return {
      hasDecision: false,
      preferences: DEFAULT_PREFERENCES,
    };
  }
}

function syncGoogleConsent(preferences) {
  if (typeof window === "undefined") return;

  const analyticsState = preferences.analytics ? "granted" : "denied";
  const marketingState = preferences.marketing ? "granted" : "denied";

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("consent", "update", {
    analytics_storage: analyticsState,
    ad_storage: marketingState,
    ad_user_data: marketingState,
    ad_personalization: marketingState,
  });

  window.dataLayer.push({
    event: "teona_consent_update",
    analytics_consent: analyticsState,
    marketing_consent: marketingState,
    live_support_consent: preferences.liveSupport ? "granted" : "denied",
  });
}

function writePreferences(preferences) {
  const normalized = normalizePreferences(preferences);
  const payload = encodeURIComponent(
    JSON.stringify({
      version: CONSENT_VERSION,
      preferences: normalized,
      savedAt: new Date().toISOString(),
    }),
  );
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE_NAME}=${payload}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  syncGoogleConsent(normalized);
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

export function useCookieConsent() {
  return useContext(CookieConsentContext);
}

function PreferenceToggle({
  body,
  checked,
  label,
  onChange,
  status,
}) {
  return (
    <label className="grid cursor-pointer gap-4 border-t border-[#19334F]/10 py-5 first:border-t-0 sm:grid-cols-[1fr_auto] sm:items-center">
      <span>
        <span className="block text-sm font-semibold text-[#19334F]">
          {label}
        </span>
        <span className="mt-1 block text-xs leading-5 text-[#59616C]">
          {body}
        </span>
      </span>
      <span className="flex items-center justify-between gap-3 sm:justify-end">
        <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#72809A]">
          {status}
        </span>
        <input
          checked={checked}
          className="peer sr-only"
          onChange={(event) => onChange(event.target.checked)}
          type="checkbox"
        />
        <span
          aria-hidden="true"
          className="relative h-7 w-12 rounded-full bg-[#19334F]/20 transition-colors peer-checked:bg-[#19334F] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[#19334F] after:absolute after:left-1 after:top-1 after:h-5 after:w-5 after:rounded-full after:bg-white after:shadow-sm after:transition-transform peer-checked:after:translate-x-5"
        />
      </span>
    </label>
  );
}

export default function CookieConsentProvider({ children }) {
  const t = useTranslations("cookieConsent");
  const snapshot = useSyncExternalStore(
    subscribeToConsent,
    getCookieSnapshot,
    getServerSnapshot,
  );
  const parsedConsent = useMemo(() => parseConsent(snapshot), [snapshot]);
  const isReady = snapshot !== SERVER_SNAPSHOT;
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState(DEFAULT_PREFERENCES);

  const openSettings = useCallback(() => {
    setDraft(parsedConsent.preferences);
    setSettingsOpen(true);
  }, [parsedConsent.preferences]);

  const closeSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const save = useCallback((preferences) => {
    writePreferences(preferences);
    setSettingsOpen(false);
  }, []);

  useEffect(() => {
    if (isReady && parsedConsent.hasDecision) {
      syncGoogleConsent(parsedConsent.preferences);
    }
  }, [
    isReady,
    parsedConsent.hasDecision,
    parsedConsent.preferences.analytics,
    parsedConsent.preferences.liveSupport,
    parsedConsent.preferences.marketing,
  ]);

  useEffect(() => {
    function handleOpenSettings() {
      openSettings();
    }

    window.addEventListener(CONSENT_SETTINGS_EVENT, handleOpenSettings);
    return () =>
      window.removeEventListener(CONSENT_SETTINGS_EVENT, handleOpenSettings);
  }, [openSettings]);

  useEffect(() => {
    if (!settingsOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        closeSettings();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [closeSettings, settingsOpen]);

  const contextValue = useMemo(
    () => ({
      consent: parsedConsent.preferences,
      hasDecision: parsedConsent.hasDecision,
      isReady,
    }),
    [isReady, parsedConsent.hasDecision, parsedConsent.preferences],
  );

  const optionalPreferences = [
    {
      key: "liveSupport",
      label: t("liveSupportTitle"),
      body: t("liveSupportBody"),
    },
    {
      key: "analytics",
      label: t("analyticsTitle"),
      body: t("analyticsBody"),
    },
    {
      key: "marketing",
      label: t("marketingTitle"),
      body: t("marketingBody"),
    },
  ];

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {isReady && !parsedConsent.hasDecision && !settingsOpen ? (
        <section
          aria-label={t("bannerLabel")}
          className="fixed inset-x-3 bottom-3 z-[900] border border-white/20 bg-[#19334F] px-5 py-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:inset-x-6 sm:bottom-6 sm:px-7 lg:inset-x-auto lg:left-1/2 lg:w-[calc(100%-3rem)] lg:max-w-6xl lg:-translate-x-1/2"
        >
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
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
            <div className="grid gap-2 sm:grid-cols-[max-content_max-content_max-content] sm:justify-end">
              <button
                className="inline-flex min-h-10 items-center justify-center whitespace-nowrap bg-white px-3 !text-xs font-semibold uppercase tracking-[0.08em] text-[#19334F] transition-colors hover:bg-[#E8E0D3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() =>
                  save({
                    liveSupport: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                type="button"
              >
                {t("acceptAll")}
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center whitespace-nowrap border border-white/45 px-3 !text-xs font-semibold uppercase tracking-[0.08em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#19334F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={() => save(DEFAULT_PREFERENCES)}
                type="button"
              >
                {t("rejectOptional")}
              </button>
              <button
                className="inline-flex min-h-10 items-center justify-center whitespace-nowrap px-3 !text-xs font-semibold uppercase tracking-[0.08em] text-white underline decoration-white/45 underline-offset-4 transition-colors hover:decoration-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                onClick={openSettings}
                type="button"
              >
                {t("manage")}
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {isReady && settingsOpen ? (
        <div
          className="fixed inset-0 z-[950] flex items-end justify-center bg-[#0D1B2A]/65 p-3 sm:items-center sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeSettings();
            }
          }}
          role="presentation"
        >
          <section
            aria-label={t("settingsTitle")}
            aria-modal="true"
            className="max-h-[calc(100vh-1.5rem)] w-full max-w-2xl overflow-y-auto bg-white p-6 text-[#19334F] shadow-[0_24px_80px_rgba(0,0,0,0.35)] sm:max-h-[calc(100vh-3rem)] sm:p-8"
            role="dialog"
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[#72809A]">
                  {t("settingsEyebrow")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold">
                  {t("settingsTitle")}
                </h2>
              </div>
              <button
                aria-label={t("close")}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#19334F]/15 transition-colors hover:bg-[#19334F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19334F]"
                onClick={closeSettings}
                type="button"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-6 text-[#59616C]">
              {t("settingsBody")}
            </p>

            <div className="mt-7 border-y border-[#19334F]/10">
              <div className="grid gap-3 py-5 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <h3 className="text-sm font-semibold">
                    {t("necessaryTitle")}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#59616C]">
                    {t("necessaryBody")}
                  </p>
                </div>
                <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                  {t("alwaysActive")}
                </span>
              </div>

              {optionalPreferences.map((preference) => (
                <PreferenceToggle
                  body={preference.body}
                  checked={draft[preference.key]}
                  key={preference.key}
                  label={preference.label}
                  onChange={(checked) =>
                    setDraft((current) => ({
                      ...current,
                      [preference.key]: checked,
                    }))
                  }
                  status={t("optional")}
                />
              ))}
            </div>

            <div className="sticky -bottom-6 z-10 -mx-6 -mb-6 mt-7 grid gap-3 border-t border-[#19334F]/10 bg-white px-6 pb-6 pt-5 shadow-[0_-12px_28px_rgba(25,51,79,0.08)] sm:static sm:mx-0 sm:mb-0 sm:grid-cols-2 sm:border-t-0 sm:px-0 sm:pb-0 sm:pt-0 sm:shadow-none">
              <button
                className="inline-flex min-h-12 items-center justify-center bg-[#19334F] px-6 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:bg-[#284D70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19334F] focus-visible:ring-offset-2"
                onClick={() => save(draft)}
                type="button"
              >
                {t("savePreferences")}
              </button>
              <button
                className="inline-flex min-h-12 items-center justify-center border border-[#19334F]/25 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-[#19334F] transition-colors hover:bg-[#F3EFE7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#19334F] focus-visible:ring-offset-2"
                onClick={() => save(DEFAULT_PREFERENCES)}
                type="button"
              >
                {t("rejectOptional")}
              </button>
            </div>
          </section>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}
