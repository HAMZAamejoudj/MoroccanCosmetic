import type { Language } from "@/context/LanguageContext";
import { OPEN_GRAPH_LOCALE } from "@/i18n/openGraphLocale";
import { canonicalUrl } from "@/config/siteConfig";

/** Same URL serves EN/FR/AR via client language switch — hreflang points to one canonical URL. */
export const SITE_LANGUAGES: Language[] = ["en", "fr", "ar"];

export const HREFLANG_CODES: Record<Language, string> = {
  en: "en",
  fr: "fr",
  ar: "ar",
};

export function canonicalPathWithSlash(path: string): string {
  if (path === "/" || path === "") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function sitemapUrlForPath(path: string): string {
  return canonicalUrl(canonicalPathWithSlash(path));
}

/** Sitemap `alternates.languages` for multilingual hints (single URL per page). */
export function sitemapLanguageAlternates(path: string): Record<string, string> {
  const url = sitemapUrlForPath(path);
  return {
    en: url,
    fr: url,
    ar: url,
    "x-default": url,
  };
}

export function openGraphAlternateLocales(primary: Language = "en"): string[] {
  return SITE_LANGUAGES.filter((lang) => lang !== primary).map(
    (lang) => OPEN_GRAPH_LOCALE[lang],
  );
}

export function metadataLanguageAlternates(path: string): Record<string, string> {
  const url = sitemapUrlForPath(path);
  return {
    en: url,
    fr: url,
    ar: url,
    "x-default": url,
  };
}
