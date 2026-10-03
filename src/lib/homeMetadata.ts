import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import enMeta from "@/i18n/locales/en/meta.json";
import frMeta from "@/i18n/locales/fr/meta.json";
import arMeta from "@/i18n/locales/ar/meta.json";
import { buildLocalizedMetadata } from "@/lib/localizedMetadata";

const HOME_META: Record<SiteLocale, { title: string; description: string }> = {
  en: enMeta.home,
  fr: frMeta.home,
  ar: arMeta.home,
};

const HOME_AVAILABLE_LOCALES: SiteLocale[] = ["en", "fr", "ar"];

export function buildHomeMetadata(locale: SiteLocale): Metadata {
  const { title, description } = HOME_META[locale];
  return buildLocalizedMetadata({
    locale,
    logicalPath: "/",
    title,
    description,
    availableLocales: HOME_AVAILABLE_LOCALES,
  });
}
