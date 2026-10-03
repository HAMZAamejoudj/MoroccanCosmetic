import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import enMeta from "@/i18n/locales/en/meta.json";
import frMeta from "@/i18n/locales/fr/meta.json";
import arMeta from "@/i18n/locales/ar/meta.json";
import { buildPageMetadata } from "@/lib/metadata";

export type PageMetaKey = keyof typeof enMeta;

const metaByLanguage = {
  en: enMeta,
  fr: frMeta,
  ar: arMeta,
} as const satisfies Record<SiteLocale, typeof enMeta>;

const PATH_TO_PAGE: Record<string, PageMetaKey> = {
  "/": "home",
  "/about": "about",
  "/benefits": "benefits",
  "/private-label-moroccan-cosmetics": "privateLabel",
  "/blog": "blog",
  "/contact": "contact",
  "/products": "products",
};

export function getPageMetaKey(pathname: string): PageMetaKey {
  const normalized = pathname.replace(/\/$/, "") || "/";
  return PATH_TO_PAGE[normalized] ?? "home";
}

export function getPageMetadata(pathname: string, language: SiteLocale) {
  const page = getPageMetaKey(pathname);
  return metaByLanguage[language][page];
}

/** Default (English) Next.js metadata for static routes from `meta.json`. */
export function buildMetadataForPage(page: PageMetaKey, path: string): Metadata {
  const { title, description } = enMeta[page];
  return buildPageMetadata({ title, description, path });
}

export function buildMetadataForPageLocalized(
  page: PageMetaKey,
  path: string,
  language: SiteLocale,
  ogType: "website" | "article" = "website",
): Metadata {
  const { title, description } = metaByLanguage[language][page];
  return buildPageMetadata({ title, description, path, locale: language, ogType });
}

export { OPEN_GRAPH_LOCALE } from "@/i18n/openGraphLocale";
