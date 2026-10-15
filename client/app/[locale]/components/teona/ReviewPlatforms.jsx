"use client";

import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function ReviewPlatforms({ platforms, labels }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = platforms.find((platform) => platform.id === selectedId);
  const guideRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    if (selectedId) {
      guideRef.current?.focus({ preventScroll: true });
      guideRef.current?.scrollIntoView({ block: "nearest" });
    }
  }, [selectedId]);

  function closeGuide() {
    const lastSelectedId = selectedId;
    setSelectedId(null);
    cardRefs.current[lastSelectedId]?.focus({ preventScroll: true });
  }

  return (
    <div>
      {selected ? (
        <section
          aria-describedby="review-guide-copy"
          aria-labelledby="review-guide-title"
          className="relative mb-4 scroll-mt-36 border border-[#dec7a6] bg-[#eee4d5] p-5 pr-14 text-[#19334F] focus:outline-none sm:p-6 sm:pr-16"
          id="review-platform-guide"
          onKeyDown={(event) => {
            if (event.key === "Escape") closeGuide();
          }}
          ref={guideRef}
          tabIndex={-1}
        >
          <h2 className="text-base font-medium" id="review-guide-title">
            {selected.name}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#19334F]/75" id="review-guide-copy">
            {selected.guide}
          </p>
          <a
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 bg-[#19334F] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#10273D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19334F]"
            href={selected.href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {selected.linkLabel}
            <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
            <span className="sr-only"> — {labels.openInNewTab}</span>
          </a>
          <button
            aria-label={labels.closeGuide}
            className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center transition-colors hover:bg-[#19334F]/5 focus-visible:outline-2 focus-visible:outline-[#19334F]"
            onClick={closeGuide}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </section>
      ) : null}

      <ul
        aria-label={labels.platformsLabel}
        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4"
      >
        {platforms.map((platform) => (
          <li className="min-w-0" key={platform.id}>
            <button
              aria-controls={selectedId ? "review-platform-guide" : undefined}
              aria-expanded={selectedId === platform.id}
              className={`group flex h-full min-h-[136px] w-full min-w-0 cursor-pointer flex-col justify-between gap-4 border bg-white p-3 text-left shadow-[0_4px_14px_#10273d06] transition-colors hover:border-[#b69d79] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#19334F] motion-reduce:transition-none sm:min-h-[152px] sm:p-5 ${
                selectedId === platform.id
                  ? "border-[#b69d79]"
                  : "border-[#dedfe1]"
              }`}
              onClick={() => setSelectedId(platform.id)}
              ref={(element) => {
                cardRefs.current[platform.id] = element;
              }}
              type="button"
            >
              <span className="relative flex h-12 w-full items-center justify-center bg-[#fafafa] p-2">
                <span className="flex h-8 w-full max-w-[140px] items-center justify-center">
                  <Image
                    alt={platform.name}
                    className="h-auto max-h-8 w-auto max-w-full object-contain"
                    height={platform.logoHeight}
                    src={platform.logo}
                    unoptimized
                    width={platform.logoWidth}
                  />
                </span>
              </span>
              <span className="flex w-full flex-1 items-center justify-between gap-2 border-t border-[#dedfe1] pt-3 text-[0.7rem] leading-5 text-[#657387] sm:text-xs">
                <span>{platform.action}</span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 text-[#19334F] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  strokeWidth={1.5}
                />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
