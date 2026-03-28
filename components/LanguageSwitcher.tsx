"use client";

import { useState, useRef, useEffect } from "react";
import { locales, localeFlags, localeNames, type Locale } from "@/lib/i18n";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher({
  locale,
  scrolled,
}: {
  locale: string;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const switchLocale = (target: Locale) => {
    // Replace /current-locale with /target-locale
    const segments = pathname.split("/");
    segments[1] = target;
    window.location.href = segments.join("/") || `/${target}`;
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm tracking-wide transition-colors duration-300 ${
          scrolled ? "text-stone" : "text-white"
        }`}
        aria-label="Change language"
      >
        <span className="text-base leading-none">{localeFlags[locale as Locale]}</span>
        <span className="hidden sm:inline uppercase text-xs font-medium">{locale}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-cream/95 backdrop-blur-md border border-stone/10 rounded-sm shadow-lg overflow-hidden min-w-[140px] z-50">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => {
                switchLocale(l);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-sand ${
                l === locale ? "bg-sand/60 text-terracotta font-medium" : "text-stone"
              }`}
            >
              <span className="text-base leading-none">{localeFlags[l]}</span>
              <span>{localeNames[l]}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
