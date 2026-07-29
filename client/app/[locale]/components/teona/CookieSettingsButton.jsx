"use client";

import { CONSENT_SETTINGS_EVENT } from "./CookieConsentProvider";

export default function CookieSettingsButton({ children }) {
  return (
    <button
      className="transition-colors hover:text-[#19334F]"
      onClick={() => window.dispatchEvent(new Event(CONSENT_SETTINGS_EVENT))}
      type="button"
    >
      {children}
    </button>
  );
}
