"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function RoomGallery({ images, labels, title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const triggerRefs = useRef([]);
  const touchStartX = useRef(null);

  const galleryImages = images.slice(0, 4);
  const sideImages = galleryImages.slice(1);
  const remainingImageCount = Math.max(images.length - galleryImages.length, 0);

  const openGallery = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const closeGallery = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex !== null) {
        window.requestAnimationFrame(() => {
          triggerRefs.current[currentIndex]?.focus();
        });
      }
      return null;
    });
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? 0
        : (currentIndex - 1 + images.length) % images.length,
    );
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) =>
      currentIndex === null ? 0 : (currentIndex + 1) % images.length,
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    function handleKeyDown(event) {
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeGallery, showNext, showPrevious]);

  function handleTouchStart(event) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return;

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = touchEndX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 45) return;
    if (distance > 0) showPrevious();
    else showNext();
  }

  function imageButton({
    className,
    image,
    imageIndex,
    priority = false,
    remainingCount = 0,
    sizes,
  }) {
    return (
      <button
        ref={(node) => {
          triggerRefs.current[imageIndex] = node;
        }}
        aria-label={`${labels.open} ${imageIndex + 1}`}
        className={`group relative cursor-zoom-in overflow-hidden bg-[#e8e2d8] text-left ${className}`}
        key={image}
        onClick={() => openGallery(imageIndex)}
        type="button"
      >
        <Image
          src={image}
          alt={`${title} ${imageIndex + 1}`}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/20 group-focus-visible:bg-black/20">
          <span className="flex h-11 w-11 items-center justify-center border border-white/50 bg-black/35 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
            <Maximize2 aria-hidden="true" className="h-5 w-5" />
          </span>
        </span>
        {remainingCount > 0 ? (
          <span
            aria-hidden="true"
            className="absolute bottom-4 right-4 flex min-h-10 min-w-14 items-center justify-center border border-white/45 bg-black/55 px-3 text-sm font-semibold tracking-[0.08em] text-white backdrop-blur-sm"
          >
            +{remainingCount}
          </span>
        ) : null}
      </button>
    );
  }

  return (
    <>
      <div className="grid gap-3 lg:h-[680px] lg:grid-cols-[minmax(0,1.45fr)_minmax(0,0.85fr)]">
        {imageButton({
          className: "h-[clamp(430px,70vw,560px)] lg:h-full",
          image: galleryImages[0],
          imageIndex: 0,
          priority: true,
          sizes: "(min-width: 1024px) 64vw, 100vw",
        })}

        <div className="grid h-[460px] grid-cols-2 grid-rows-2 gap-3 sm:h-[560px] lg:h-full">
          {sideImages.map((image, index) =>
            imageButton({
              className: `min-h-0 ${
                sideImages.length < 3 || index === 0
                  ? "col-span-2"
                  : "col-span-1"
              }`,
              image,
              imageIndex: index + 1,
              remainingCount:
                index === sideImages.length - 1 ? remainingImageCount : 0,
              sizes:
                sideImages.length >= 3 && index > 0
                  ? "(min-width: 1024px) 18vw, 50vw"
                  : "(min-width: 1024px) 36vw, 100vw",
            }),
          )}
        </div>
      </div>

      {activeIndex !== null ? (
        <div
          aria-label={`${title} ${labels.open}`}
          aria-modal="true"
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/94 px-3 py-16 sm:px-8"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
          role="dialog"
        >
          <button
            ref={closeButtonRef}
            aria-label={labels.close}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center border border-white/30 bg-black/40 text-white transition-colors hover:bg-white hover:text-black sm:right-7 sm:top-6"
            onClick={closeGallery}
            type="button"
          >
            <X aria-hidden="true" className="h-6 w-6" />
          </button>

          <button
            aria-label={labels.previous}
            className="absolute left-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white transition-colors hover:bg-white hover:text-black sm:left-7"
            onClick={showPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" className="h-7 w-7" />
          </button>

          <div
            className="relative h-[78vh] w-[calc(100vw-2rem)] max-w-6xl touch-pan-y sm:w-[calc(100vw-8rem)]"
            onTouchEnd={handleTouchEnd}
            onTouchStart={handleTouchStart}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} ${activeIndex + 1}`}
              fill
              priority
              sizes="100vw"
              className="select-none object-contain"
              draggable={false}
            />
          </div>

          <button
            aria-label={labels.next}
            className="absolute right-3 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white transition-colors hover:bg-white hover:text-black sm:right-7"
            onClick={showNext}
            type="button"
          >
            <ChevronRight aria-hidden="true" className="h-7 w-7" />
          </button>

          <p
            aria-live="polite"
            className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-[0.16em] text-white/75"
          >
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
