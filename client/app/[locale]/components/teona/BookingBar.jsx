"use client";

import { BellRing, Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter } from "@/i18n/navigation";

function Counter({ label, value, minimum, onChange }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap">
      <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#24292c]">
        {label}
      </span>
      <button
        aria-label={`${label} -`}
        className="p-1 text-[#7e858a] transition-colors hover:text-black disabled:cursor-not-allowed disabled:opacity-30"
        disabled={value <= minimum}
        onClick={() => onChange(Math.max(minimum, value - 1))}
        type="button"
      >
        <Minus aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
      <span className="min-w-5 text-center text-sm font-medium">{value}</span>
      <button
        aria-label={`${label} +`}
        className="p-1 text-[#7e858a] transition-colors hover:text-black"
        onClick={() => onChange(value + 1)}
        type="button"
      >
        <Plus aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export default function BookingBar() {
  const t = useTranslations("booking");
  const router = useRouter();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  function submitReservation(event) {
    event.preventDefault();
    router.push("/contact");
  }

  return (
    <section
      aria-label={t("title")}
      className="relative z-20 hidden min-h-24 items-center justify-center border-b border-black/5 bg-[#fafafa] px-6 lg:flex"
    >
      <form
        className="mx-auto flex w-full max-w-[1220px] items-center justify-center gap-6 xl:gap-8"
        onSubmit={submitReservation}
      >
        <label className="flex items-center gap-3 whitespace-nowrap text-xs font-medium uppercase tracking-[0.08em] text-[#24292c]">
          {t("checkIn")}
          <input
            className="w-[7.8rem] border-0 border-b border-black/15 bg-transparent px-0 py-2 text-xs text-[#60676c] outline-none focus:border-[#dec7a6]"
            min={new Date().toISOString().split("T")[0]}
            onChange={(event) => setCheckIn(event.target.value)}
            type="date"
            value={checkIn}
          />
        </label>

        <span aria-hidden="true" className="h-7 w-px bg-black/12" />

        <label className="flex items-center gap-3 whitespace-nowrap text-xs font-medium uppercase tracking-[0.08em] text-[#24292c]">
          {t("checkOut")}
          <input
            className="w-[7.8rem] border-0 border-b border-black/15 bg-transparent px-0 py-2 text-xs text-[#60676c] outline-none focus:border-[#dec7a6]"
            min={checkIn || new Date().toISOString().split("T")[0]}
            onChange={(event) => setCheckOut(event.target.value)}
            type="date"
            value={checkOut}
          />
        </label>

        <span aria-hidden="true" className="h-7 w-px bg-black/12" />
        <Counter label={t("adults")} minimum={1} onChange={setAdults} value={adults} />
        <span aria-hidden="true" className="h-7 w-px bg-black/12" />
        <Counter label={t("children")} minimum={0} onChange={setChildren} value={children} />
        <span aria-hidden="true" className="h-7 w-px bg-black/12" />

        <button
          className="inline-flex min-h-11 items-center gap-3 border border-[#dec7a6] px-6 text-xs font-semibold uppercase tracking-[0.13em] text-[#bda276] transition-colors hover:bg-[#24292c] hover:text-white"
          type="submit"
        >
          {t("bookNow")}
          <BellRing aria-hidden="true" className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}
