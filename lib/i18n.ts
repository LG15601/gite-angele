export const locales = ["fr", "en", "it", "es", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  it: "Italiano",
  es: "Español",
  de: "Deutsch",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  it: "🇮🇹",
  es: "🇪🇸",
  de: "🇩🇪",
};
