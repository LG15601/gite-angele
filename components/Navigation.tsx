"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Dictionary } from "@/lib/getDictionary";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navigation({
  dict,
  locale,
}: {
  dict: Dictionary["nav"];
  locale: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "#intro", label: dict.gite },
    { href: "#spaces", label: dict.spaces },
    { href: "#gallery", label: dict.gallery },
    { href: "#cantal", label: dict.cantal },
    { href: "#tarifs", label: dict.tarifs },
    { href: "#contact", label: dict.contact },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-600 ${
          scrolled
            ? "py-3 bg-cream/95 backdrop-blur-md border-b border-stone/5 shadow-sm"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="w-[90%] max-w-[1400px] mx-auto flex justify-between items-center">
          <a
            href="#"
            className={`font-display text-2xl font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-stone" : "text-white"
            }`}
          >
            Gîte Angèle
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[0.95rem] tracking-wide transition-colors duration-300 group ${
                  scrolled ? "text-stone" : "text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <LanguageSwitcher locale={locale} scrolled={scrolled} />
            <a
              href="https://wa.me/33682478020"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-terracotta text-white text-sm uppercase tracking-widest hover:bg-terracotta/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              {dict.book}
            </a>
          </div>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher locale={locale} scrolled={scrolled} />
            <button
              className="flex flex-col gap-1.5 z-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-45 translate-y-[4px] bg-white"
                    : scrolled
                    ? "bg-stone"
                    : "bg-white"
                }`}
              />
              <span
                className={`block w-6 h-px transition-all duration-300 ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[3px] bg-white"
                    : scrolled
                    ? "bg-stone"
                    : "bg-white"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-stone/95 backdrop-blur-md flex items-center justify-center md:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-white font-display text-3xl"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="https://wa.me/33682478020"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.1 }}
                className="mt-4 px-8 py-3 bg-terracotta text-white text-sm uppercase tracking-widest"
                onClick={() => setMobileOpen(false)}
              >
                {dict.book}
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
