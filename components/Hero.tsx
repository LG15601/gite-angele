"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <header className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/batisse-hero.webp')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 px-4 max-w-4xl">
        {/* Ornament line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-px h-20 mx-auto mb-8 origin-top"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #C5A05E, transparent)",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-sm md:text-base uppercase tracking-[0.2em] text-white/90 mb-6 font-body"
        >
          Ancien corps de ferme restauré &middot; 12 personnes
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-normal text-cream leading-[1.1] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
        >
          L&apos;art de vivre cantalien
          <br />
          dans un écrin de nature préservée
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12"
        >
          <a
            href="#intro"
            className="inline-block px-8 py-3.5 border border-white/60 text-white text-sm uppercase tracking-widest hover:bg-white hover:text-stone transition-all duration-300"
          >
            Découvrir le gîte
          </a>
        </motion.div>
      </div>

      {/* Badge */}
      <div className="absolute bottom-12 right-12 hidden md:block text-white/80 text-sm tracking-wider border-l border-gold pl-4">
        Sénezergues, Cantal &middot; France
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="square"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </motion.div>
    </header>
  );
}
