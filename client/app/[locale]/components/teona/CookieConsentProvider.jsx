"use client";

import {
  Cookie,
  MapPinned,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useTranslations } from "next-intl";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { Link } from "@/i18n/navigation";

const CONSENT_COOKIE_NAME = "teona_cookie_consent";
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;
const CONSENT_EVENT = "teona-cookie-consent-change";
const SERVER_SNAPSHOT = "__pending__";
const defaultPreferences = {
  externalMedia: false,
  liveSupport: false,
};

const CookieConsentContext = createContext(null);
const disabledConsentValue = {
  enableService: () => {},
  openSettings: () => {},
  preferences: {
    externalMedia: true,
    liveSupport: true,
  },
};

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

function parseStoredConsent(snapshot) {
  if (!snapshot || snapshot === SERVER_SNAPSHOT) return null;

  try {
    const stored = JSON.parse(decodeURIComponent(snapshot));

    if (
      stored.version !== CONSENT_VERSION ||
      typeof stored.preferences !== "object"
    ) {
      return null;
    }

    return {
      externalMedia: stored.preferences.externalMedia === true,
      liveSupport: stored.preferences.liveSupport === true,
    };
  } catch {
    return null;
  }
}

function writeConsent(preferences) {
  const payload = encodeURIComponent(
    JSON.stringify({
      version: CONSENT_VERSION,
      savedAt: new Date().toISOString(),
      preferences,
    }),
  );
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE_NAME}=${payload}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function PreferenceSwitch({ checked, description, icon: Icon, label, onChange }) {
  return (
    <div className="flex items-start justify-between gap-5 border-t border-[#19334F]/10 py-5 first:border-t-0">
      <div className="flex min-w-0 gap-4">
        <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#F3EFE7] text-[#19334F]">
          <Icon aria-hidden="true" className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <div>
          <p className="text-sm font-semibold text-[#19334F]">{label}</p>
          <p className="mt-1 text-xs leading-5 text-[#59616C]">{description}</p>
        </div>
      </div>
      <button
        aria-checked={checked}
        aria-label={label}
        className={`relative mt-1 h-7 w-12 shrink-0 rounded-full border transition-colors ${
          checked
            ? "border-[#19334F] bg-[#19334F]"
            : "border-[#19334F]/25 bg-[#D9DCE0]"
        }`}
        onClick={() => onChange(!checked)}
        role="switch"
        type="button"
      >
        <span
          aria-hidden="true"
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
            checked ? "translate-x-5" : "translate-x-0.5"
          }`}
        />
      </button>
    </div>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);

  if (!context) {
    throw new Error(
      "useCookieConsent must be used within CookieConsentProvider",
    );
  }

  return context;
}

function ActiveCookieConsentProvider({ children }) {
  const t = useTranslations("cookieConsent");
  const snapshot = useSyncExternalStore(
    subscribeToConsent,
    getCookieSnapshot,
    getServerSnapshot,
  );
  const storedPreferences = useMemo(
    () => parseStoredConsent(snapshot),
    [snapshot],
  );
  const preferences = storedPreferences ?? defaultPreferences;
  const isReady = snapshot !== SERVER_SNAPSHOT;
  const hasDecision = storedPreferences !== null;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [draftPreferences, setDraftPreferences] = useState(defaultPreferences);

  const savePreferences = useCallback((nextPreferences) => {
    writeConsent(nextPreferences);
    setIsSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({
      externalMedia: true,
      liveSupport: true,
    });
  }, [savePreferences]);

  const rejectOptional = useCallback(() => {
    savePreferences(defaultPreferences);
  }, [savePreferences]);

  const openSettings = useCallback(() => {
    setDraftPreferences(preferences);
    setIsSettingsOpen(true);
  }, [preferences]);

  const enableService = useCallback(
    (service) => {
      writeConsent({
        ...preferences,
        [service]: true,
      });
    },
    [preferences],
  );

  const contextValue = useMemo(
    () => ({
      enableService,
      openSettings,
      preferences,
    }),
    [enableService, openSettings, preferences],
  );

  const bannerButtonClassName =
    "inline-flex min-h-11 items-center justify-center border border-white/45 px-5 text-[0.68rem] font-semibold uppercase tracking-[0.13em] text-white transition-colors hover:border-white hover:bg-white hover:text-[#19334F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white";

  return (
    <CookieConsentContext.Provider value={contextValue}>
      {children}

      {isReady && !hasDecision && !isSettingsOpen ? (
        <section
          aria-label={t("bannerLabel")}
          className="fixed inset-x-3 bottom-3 z-[900] border border-white/20 bg-[#19334F] px-5 py-5 text-white shadow-[0_18px_60px_rgba(0,0,0,0.28)] sm:inset-x-6 sm:bottom-6 sm:px-7 lg:left-1/2 lg:max-w-6xl lg:-translate-x-1/2"
        >
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
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
            <div className="grid gap-2 sm:grid-cols-3">
              <button
                className={bannerButtonClassName}
                onClick={acceptAll}
                type="button"
              >
                {t("acceptAll")}
              </button>
              <button
                className={bannerButtonClassName}
                onClick={rejectOptional}
                type="button"
              >
                {t("rejectOptional")}
              </button>
              <button
                className={bannerButtonClassName}
                onClick={openSettings}
                type="button"
              >
                {t("manage")}
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {isSettingsOpen ? (
        <div
          aria-labelledby="cookie-settings-title"
          aria-modal="true"
          className="fixed inset-0 z-[950] flex items-end justify-center bg-black/55 p-3 backdrop-blur-[2px] sm:items-center sm:p-6"
          role="dialog"
        >
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-white shadow-[0_24px_80px_rgba(0,0,0,0.32)]">
            <div className="flex items-start justify-between gap-5 border-b border-[#19334F]/10 px-6 py-6 sm:px-8">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#a78b63]">
                  {t("settingsEyebrow")}
                </p>
                <h2
                  className="mt-2 font-display text-3xl font-semibold text-[#19334F]"
                  id="cookie-settings-title"
                >
                  {t("settingsTitle")}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#59616C]">
                  {t("settingsBody")}
                </p>
              </div>
              <button
                autoFocus
                aria-label={t("close")}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-[#19334F]/15 text-[#19334F] transition-colors hover:bg-[#19334F] hover:text-white"
                onClick={() => setIsSettingsOpen(false)}
                type="button"
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-2 sm:px-8">
              <div className="flex items-start justify-between gap-5 py-5">
                <div className="flex min-w-0 gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#F3EFE7] text-[#19334F]">
                    <ShieldCheck
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#19334F]">
                      {t("necessaryTitle")}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#59616C]">
                      {t("necessaryBody")}
                    </p>
                  </div>
                </div>
                <span className="mt-2 shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                  {t("alwaysActive")}
                </span>
              </div>

              <PreferenceSwitch
                checked={draftPreferences.liveSupport}
                description={t("liveSupportBody")}
                icon={MessageCircle}
                label={t("liveSupportTitle")}
                onChange={(checked) =>
                  setDraftPreferences((current) => ({
                    ...current,
                    liveSupport: checked,
                  }))
                }
              />
              <PreferenceSwitch
                checked={draftPreferences.externalMedia}
                description={t("externalMediaBody")}
                icon={MapPinned}
                label={t("externalMediaTitle")}
                onChange={(checked) =>
                  setDraftPreferences((current) => ({
                    ...current,
                    externalMedia: checked,
                  }))
                }
              />

              <div className="flex items-start justify-between gap-5 border-t border-[#19334F]/10 py-5">
                <div className="flex min-w-0 gap-4">
                  <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center bg-[#F3EFE7] text-[#19334F]">
                    <SlidersHorizontal
                      aria-hidden="true"
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-[#19334F]">
                      {t("analyticsTitle")}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#59616C]">
                      {t("analyticsBody")}
                    </p>
                  </div>
                </div>
                <span className="mt-2 shrink-0 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#72809A]">
                  {t("notUsed")}
                </span>
              </div>
            </div>

            <div className="grid gap-2 border-t border-[#19334F]/10 bg-[#F7F5F1] px-6 py-5 sm:grid-cols-3 sm:px-8">
              <button
                className="min-h-11 border border-[#19334F]/20 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#19334F] transition-colors hover:bg-white"
                onClick={rejectOptional}
                type="button"
              >
                {t("rejectOptional")}
              </button>
              <button
                className="min-h-11 border border-[#19334F]/20 px-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#19334F] transition-colors hover:bg-white"
                onClick={() => savePreferences(draftPreferences)}
                type="button"
              >
                {t("savePreferences")}
              </button>
              <button
                className="min-h-11 border border-[#19334F] bg-[#19334F] px-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#274c70]"
                onClick={acceptAll}
                type="button"
              >
                {t("acceptAll")}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </CookieConsentContext.Provider>
  );
}

export default function CookieConsentProvider({
  children,
  enabled = true,
}) {
  if (!enabled) {
    return (
      <CookieConsentContext.Provider value={disabledConsentValue}>
        {children}
      </CookieConsentContext.Provider>
    );
  }

  return (
    <ActiveCookieConsentProvider>
      {children}
    </ActiveCookieConsentProvider>
  );
}
