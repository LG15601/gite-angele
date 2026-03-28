"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import ScrollReveal from "./ScrollReveal";
import type { Dictionary } from "@/lib/getDictionary";

function Stars({ count }: { count: number }) {
  return (
    <div className="text-gold tracking-widest text-xl mb-4">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < count ? "opacity-100" : "opacity-25"}>
          &#9733;
        </span>
      ))}
    </div>
  );
}

export default function Testimonial({
  dict,
}: {
  dict: Dictionary["testimonial"];
}) {
  const { reviews, sectionTitle, sourceLabel } = dict;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current]
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  // Auto-rotate every 7 seconds
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[current];

  return (
    <section className="py-24 lg:py-32 bg-sand text-center overflow-hidden">
      <div className="w-[90%] max-w-[800px] mx-auto">
        <ScrollReveal>
          {/* Section title */}
          <p className="text-gold/70 tracking-[0.3em] uppercase text-xs font-medium mb-12">
            {sectionTitle}
          </p>

          {/* Carousel */}
          <div className="relative min-h-[280px] flex flex-col items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <span className="font-display text-7xl leading-none text-gold/50 block -mb-4">
                  &ldquo;
                </span>
                <p
                  className="font-display italic text-stone my-8"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
                >
                  {review.quote}
                </p>
                <Stars count={review.rating} />
                <p className="text-stone/70 text-sm font-medium">
                  {review.author} — {review.date}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-gold/30 text-gold/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to review ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-gold w-6"
                      : "bg-gold/30 hover:bg-gold/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-gold/30 text-gold/60 hover:border-gold hover:text-gold transition-colors flex items-center justify-center"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6 4L10 8L6 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Source label */}
          <p className="text-stone/40 text-xs mt-8 tracking-wide">
            {sourceLabel}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
