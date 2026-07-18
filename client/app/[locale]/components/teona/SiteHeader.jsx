"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { site } from "@/lib/site";
import LanguageSwitcher from "./LanguageSwitcher";

const navigation = [
  { key: "home", href: "/" },
  { key: "rooms", href: "/rooms" },
  { key: "about", href: "/about" },
  { key: "restaurant", href: "/restaurant" },
  { key: "gallery", href: "/gallery" },
  { key: "contact", href: "/contact" },
];

export default function SiteHeader() {
  const t = useTranslations("navigation");
  const locale = useLocale();
  const pathname = usePathname();
  const bookingUrl = `${site.bookingUrl}?language=${locale}`;
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const closeButtonRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleDrawerKeys = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleDrawerKeys);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleDrawerKeys);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 text-white">
      <div className="pointer-events-auto bg-gradient-to-b from-black/75 via-black/35 to-transparent pb-8 pt-2">
        <div className="relative mx-auto flex h-[5.5rem] max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:h-[6.5rem] lg:px-10">
          <div className="flex min-w-0 items-center gap-3 sm:gap-5">
            <button
              aria-controls="site-navigation-drawer"
              aria-expanded={isOpen}
              aria-label={t("menu")}
              className="group relative inline-flex min-h-11 items-center gap-2.5 text-white focus:outline-none"
              onClick={() => setIsOpen(true)}
              ref={menuButtonRef}
              type="button"
            >
              <Menu aria-hidden="true" className="h-6 w-6" strokeWidth={1.7} />
              <span className="hidden text-sm font-medium uppercase tracking-[0.18em] sm:inline">
                {t("menu")}
              </span>
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <div className="hidden lg:block">
              <LanguageSwitcher tone="light" />
            </div>
          </div>

          <Link
            aria-label={`${site.name} — ${t("home")}`}
            className="pointer-events-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            href="/"
          >
            <Image
              alt={site.name}
              className="h-[4.3rem] w-auto object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] sm:h-[4.8rem] lg:h-[5.55rem]"
              height={108}
              priority
              src={site.images.logoLight}
              width={71}
            />
          </Link>

          <div className="flex items-center gap-3 lg:gap-7">
            <a
              className="group hidden min-h-11 items-center gap-2 text-sm font-medium tracking-[0.04em] lg:inline-flex"
              href={site.phone.href}
            >
              <Phone aria-hidden="true" className="h-4 w-4" strokeWidth={1.7} />
              <span className="relative">
                {site.phone.display}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
            <a
              className="hidden min-h-11 items-center justify-center border border-white/75 bg-black/10 px-5 text-xs font-semibold uppercase tracking-[0.17em] transition-colors hover:bg-white hover:text-[#19334F] sm:inline-flex"
              href={bookingUrl}
            >
              {t("book")}
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>
            <div className="lg:hidden">
              <LanguageSwitcher tone="light" />
            </div>
          </div>
        </div>
      </div>

      <button
        aria-hidden="true"
        className={`pointer-events-auto fixed inset-0 z-[60] bg-black/55 transition-opacity duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={closeMenu}
        tabIndex={-1}
        type="button"
      />

      <aside
        aria-hidden={!isOpen}
        aria-label={t("menu")}
        className={`pointer-events-auto fixed inset-y-0 left-0 z-[70] flex w-[88%] max-w-[27rem] flex-col overflow-y-auto bg-white text-[#19334F] shadow-[20px_0_60px_rgba(0,0,0,0.2)] transition-transform duration-500 ease-out sm:w-[70%] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        id="site-navigation-drawer"
        inert={!isOpen}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-[#19334F]/10 px-5 py-5 sm:px-8">
          <LanguageSwitcher tone="dark" />
          <button
            aria-label={t("close")}
            className="inline-flex h-11 w-11 items-center justify-center border border-[#19334F]/20 transition-colors hover:bg-[#19334F] hover:text-white focus:outline-none"
            onClick={closeMenu}
            ref={closeButtonRef}
            tabIndex={isOpen ? 0 : -1}
            type="button"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-7 pt-7 sm:px-10 sm:pt-9">
          <Link
            aria-label={`${site.name} — ${t("home")}`}
            className="mb-8 inline-flex w-fit"
            href="/"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            <Image
              alt={site.name}
              className="h-[5.6rem] w-auto object-contain"
              height={112}
              src={site.images.logo}
              width={73}
            />
          </Link>

          <nav aria-label={t("menu")} className="flex flex-col">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  aria-current={isActive ? "page" : undefined}
                  className={`group flex min-h-12 items-center justify-between border-b border-[#19334F]/10 py-3 text-sm font-medium uppercase tracking-[0.17em] transition-colors hover:text-[#72809A] ${
                    isActive ? "text-[#72809A]" : "text-[#19334F]"
                  }`}
                  href={item.href}
                  key={item.key}
                  onClick={() => setIsOpen(false)}
                  tabIndex={isOpen ? 0 : -1}
                >
                  <span>{t(item.key)}</span>
                  <span className="text-[0.65rem] font-normal text-[#19334F]/35 transition-transform group-hover:translate-x-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pt-10">
            <a
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#19334F] px-5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#10273D]"
              href={bookingUrl}
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
            >
              {t("book")}
              <ArrowUpRight aria-hidden="true" className="ml-2 h-4 w-4" />
            </a>

            <address className="mt-7 space-y-3 text-xs not-italic leading-5 text-[#19334F]/65">
              <a className="flex items-center gap-3 hover:text-[#19334F]" href={site.phone.href} tabIndex={isOpen ? 0 : -1}>
                <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
                {site.phone.display}
              </a>
              <a className="flex items-center gap-3 hover:text-[#19334F]" href={`mailto:${site.email}`} tabIndex={isOpen ? 0 : -1}>
                <Mail aria-hidden="true" className="h-4 w-4 shrink-0" />
                {site.email}
              </a>
              <p className="flex items-start gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                {site.address.short}
              </p>
            </address>

            <a
              aria-label={`${site.restaurant.name} Instagram`}
              className="mt-6 inline-flex h-10 w-10 items-center justify-center border border-[#19334F]/15 transition-colors hover:bg-[#19334F] hover:text-white"
              href={site.restaurant.instagramHref}
              rel="noreferrer"
              tabIndex={isOpen ? 0 : -1}
              target="_blank"
            >
              <Instagram aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </aside>
    </header>
  );
}
