export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";
export const localeCookie = "jlrv-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "es" || value === "en";
}

/** A saved choice wins; otherwise negotiate the visitor's preferred languages. */
export function resolveLocale(saved: string | undefined, acceptLanguage: string | null): Locale {
  if (isLocale(saved)) return saved;

  const preferences = (acceptLanguage ?? "").split(",").map((entry, index) => {
    const [tag, ...parameters] = entry.trim().toLowerCase().split(";");
    const weight = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const quality = weight ? Number(weight.trim().slice(2)) : 1;
    return { language: tag.split("-")[0], quality, index };
  }).filter(({ quality }) => Number.isFinite(quality) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  for (const { language } of preferences) {
    if (isLocale(language)) return language;
  }
  return defaultLocale;
}
