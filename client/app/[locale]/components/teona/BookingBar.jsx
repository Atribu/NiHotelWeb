"use client";

import { BellRing, Minus, Plus } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { site } from "@/lib/site";

const CHILD_AGE_OPTIONS = Array.from({ length: 13 }, (_, age) => age);

function Counter({ label, value, minimum, maximum, onChange }) {
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
        disabled={value >= maximum}
        onClick={() => onChange(Math.min(maximum, value + 1))}
        type="button"
      >
        <Plus aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

export default function BookingBar() {
  const t = useTranslations("booking");
  const locale = useLocale();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);

  function updateChildren(nextChildren) {
    setChildren(nextChildren);
    setChildAges((currentAges) =>
      Array.from(
        { length: nextChildren },
        (_, index) => currentAges[index] ?? 4,
      ),
    );
  }

  function updateChildAge(index, nextAge) {
    setChildAges((currentAges) =>
      currentAges.map((age, ageIndex) =>
        ageIndex === index ? nextAge : age,
      ),
    );
  }

  function submitReservation(event) {
    event.preventDefault();

    const bookingUrl = new URL(site.bookingUrl);

    if (checkIn) bookingUrl.searchParams.set("Checkin", checkIn);
    if (checkOut) bookingUrl.searchParams.set("Checkout", checkOut);

    bookingUrl.searchParams.set("Adult", String(adults));
    bookingUrl.searchParams.set("child", String(children));

    if (children > 0) {
      bookingUrl.searchParams.set(
        "ChildAges",
        childAges.slice(0, children).join("+"),
      );
    }

    bookingUrl.searchParams.set("language", locale);
    window.location.assign(bookingUrl.toString());
  }

  return (
    <section
      aria-label={t("title")}
      className="relative z-20 hidden min-h-24 flex-col items-center justify-center gap-3 border-b border-black/5 bg-[#fafafa] px-6 py-4 lg:flex"
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
        <Counter
          label={t("adults")}
          maximum={6}
          minimum={1}
          onChange={setAdults}
          value={adults}
        />
        <span aria-hidden="true" className="h-7 w-px bg-black/12" />
        <Counter
          label={t("children")}
          maximum={6}
          minimum={0}
          onChange={updateChildren}
          value={children}
        />
        <span aria-hidden="true" className="h-7 w-px bg-black/12" />

        <button
          className="inline-flex min-h-11 items-center gap-3 border border-[#dec7a6] px-6 text-xs font-semibold uppercase tracking-[0.13em] text-[#bda276] transition-colors hover:bg-[#24292c] hover:text-white"
          type="submit"
        >
          {t("bookNow")}
          <BellRing aria-hidden="true" className="h-4 w-4" />
        </button>
      </form>

      {children > 0 ? (
        <div className="mx-auto flex w-full max-w-[1220px] flex-wrap items-center justify-center gap-3 border-t border-black/8 pt-3">
          <span className="mr-1 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#7e858a]">
            {t("childAges")}
          </span>
          {childAges.map((age, index) => (
            <label
              className="flex min-h-9 items-center gap-2 border border-black/10 bg-white px-3"
              key={index}
            >
              <span className="text-[0.68rem] font-medium text-[#60676c]">
                {t("childAge", { number: index + 1 })}
              </span>
              <select
                aria-label={t("childAge", { number: index + 1 })}
                className="bg-transparent py-1 text-xs font-semibold text-[#24292c] outline-none"
                onChange={(event) =>
                  updateChildAge(index, Number(event.target.value))
                }
                value={age}
              >
                {CHILD_AGE_OPTIONS.map((childAge) => (
                  <option key={childAge} value={childAge}>
                    {childAge}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      ) : null}
    </section>
  );
}
