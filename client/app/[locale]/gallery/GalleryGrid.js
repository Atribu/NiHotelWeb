"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function GalleryGrid({ categories, items, modalLabels }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);

  const visibleItems = useMemo(
    () =>
      activeCategory === "all"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [activeCategory, items],
  );

  const closeModal = useCallback(() => setActiveIndex(null), []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? 0 : (current - 1 + visibleItems.length) % visibleItems.length,
    );
  }, [visibleItems.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % visibleItems.length,
    );
  }, [visibleItems.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeModal, showNext, showPrevious]);

  const selectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveIndex(null);
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => selectCategory(category.id)}
              aria-pressed={isActive}
              className={`min-h-11 border px-5 py-3 text-xs font-semibold uppercase tracking-[0.15em] transition-colors ${
                isActive
                  ? "border-[#19334F] bg-[#19334F] text-white"
                  : "border-[#19334F]/55 bg-white text-[#19334F] hover:border-[#19334F] hover:bg-[#F7F5F1]"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visibleItems.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={item.label}
            className={`group relative mb-4 block w-full break-inside-avoid overflow-hidden bg-[#ECEBE8] text-left ${item.height}`}
          >
            <Image
              src={item.image}
              alt={item.label}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`object-cover transition-transform duration-700 group-hover:scale-[1.025] ${item.position ?? ""}`}
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-x-0 bottom-0 p-5 font-display text-2xl font-semibold text-white sm:p-6">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      {activeIndex !== null && visibleItems[activeIndex] && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/90 p-4 sm:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={visibleItems[activeIndex].label}
          onClick={closeModal}
        >
          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={visibleItems[activeIndex].image}
              alt={visibleItems[activeIndex].label}
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />

            <button
              type="button"
              onClick={closeModal}
              aria-label={modalLabels.close}
              className="absolute right-0 top-0 grid h-11 w-11 -translate-y-14 place-items-center border border-white/60 text-white transition-colors hover:bg-white hover:text-black sm:translate-x-14 sm:translate-y-0"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            {visibleItems.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label={modalLabels.previous}
                  className="absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/60 bg-black/20 text-white transition-colors hover:bg-white hover:text-black sm:-translate-x-16"
                >
                  <ChevronLeft className="h-6 w-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label={modalLabels.next}
                  className="absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/60 bg-black/20 text-white transition-colors hover:bg-white hover:text-black sm:translate-x-16"
                >
                  <ChevronRight className="h-6 w-6" aria-hidden="true" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
