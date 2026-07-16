"use client";

import { PhoneCall } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { site } from "@/lib/site";

export default function FloatingActions() {
  const t = useTranslations("navigation");

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex items-center justify-center px-5 lg:justify-start lg:px-7">
      <a
        aria-label={site.phone.display}
        className="floating-phone pointer-events-auto absolute bottom-0 left-5 inline-flex h-13 w-13 items-center justify-center rounded-full border border-white bg-black/70 text-white shadow-lg transition-colors hover:border-black hover:bg-white hover:text-[#b99b6c] lg:left-7 lg:h-15 lg:w-15"
        href={site.phone.href}
      >
        <PhoneCall aria-hidden="true" className="h-6 w-6" />
        <span aria-hidden="true" className="pulse-ring absolute inset-[-1px] rounded-full border border-white" />
      </a>
      <Link
        className="pointer-events-auto inline-flex min-h-11 min-w-[13rem] items-center justify-center border border-white/70 bg-[#dec7a6] px-6 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg md:hidden"
        href="/contact"
      >
        {t("book")}
      </Link>
    </div>
  );
}
