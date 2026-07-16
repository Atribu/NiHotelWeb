"use client";

import { ChevronDown } from "lucide-react";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames } from "@/lib/site";

export default function LanguageSwitcher({ className = "", tone = "light" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isDark = tone === "dark";

  function changeLocale(event) {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale, scroll: false });
    });
  }

  return (
    <label
      className={`relative inline-flex min-h-11 items-center ${
        isDark ? "text-[#19334F]" : "text-white"
      } ${className}`}
    >
      <span className="sr-only">Language / Dil</span>
      <select
        aria-label="Language / Dil"
        className="min-h-11 cursor-pointer appearance-none bg-transparent py-2 pl-1 pr-7 text-sm font-medium uppercase tracking-[0.17em] outline-none disabled:cursor-wait disabled:opacity-50"
        disabled={isPending}
        onChange={changeLocale}
        value={locale}
      >
        {Object.entries(localeNames).map(([code, label]) => (
          <option className="bg-white text-[#19334F]" key={code} value={code}>
            {label}
          </option>
        ))}
      </select>
      <ChevronDown
        aria-hidden="true"
        className="pointer-events-none absolute right-0 h-4 w-4"
        strokeWidth={1.6}
      />
    </label>
  );
}
