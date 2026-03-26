"use client";

export default function Footer() {
  return (
    <footer className="bg-stone text-white/60 py-16 text-sm">
      <div className="w-[90%] max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end border-b border-white/10 pb-12 mb-8">
          <div>
            <span className="font-display text-3xl text-white block mb-2">
              Gîte Angèle
            </span>
            <p className="text-white/50">
              L&apos;authenticité a trouvé son écrin.
            </p>
          </div>
          <div className="md:text-right flex flex-wrap gap-6 md:justify-end">
            <a
              href="https://wa.me/33682478020"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              WhatsApp
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4 text-white/40 text-xs">
          <span>&copy; 2025 Gîte Angèle. Tous droits réservés.</span>
          <span>Mentions Légales &middot; Politique de Confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
