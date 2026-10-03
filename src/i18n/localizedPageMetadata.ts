import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import enMeta from "@/i18n/locales/en/meta.json";
import frMeta from "@/i18n/locales/fr/meta.json";
import arMeta from "@/i18n/locales/ar/meta.json";
import { buildLocalizedMetadata } from "@/lib/localizedMetadata";
import { hreflangLocalesForPath } from "@/lib/localeCatalog";
import type { PageMetaKey } from "@/i18n/pageMetadata";

const metaByLocale = {
  en: enMeta,
  fr: frMeta,
  ar: arMeta,
} as const;

export function buildLocalizedPageMetadata(
  page: PageMetaKey,
  logicalPath: string,
  locale: SiteLocale,
): Metadata {
  const { title, description } = metaByLocale[locale][page];
  return buildLocalizedMetadata({
    locale,
    logicalPath,
    title,
    description,
    availableLocales: hreflangLocalesForPath(logicalPath),
  });
}
