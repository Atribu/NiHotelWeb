import { ChevronDown } from "lucide-react";

export default function FaqSection({ eyebrow, items, title }) {
  return (
    <section className="border-t border-black/10 bg-[#F7F5F1] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a78b63]">
            {eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold text-[#19334F] sm:text-5xl">
            {title}
          </h2>
        </div>

        <div className="mt-10 border-t border-[#19334F]/15 bg-white sm:mt-12">
          {items.map(({ answer, question }) => (
            <details
              className="group border-b border-[#19334F]/15 px-5 sm:px-8"
              key={question}
            >
              <summary className="flex min-h-20 cursor-pointer list-none items-center justify-between gap-5 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="font-display text-xl font-semibold leading-snug text-[#19334F] sm:text-2xl">
                  {question}
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#a78b63] transition-transform duration-200 group-open:rotate-180"
                  strokeWidth={1.6}
                />
              </summary>
              <p className="max-w-3xl pb-7 text-sm leading-8 text-[#59616C] sm:text-base">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
