import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import { OPEN_GRAPH_LOCALE } from "@/i18n/openGraphLocale";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { canonicalUrlForLocale } from "@/lib/localePaths";
import { siteConfig } from "@/config/siteConfig";

type LocalizedMetaInput = {
  locale: SiteLocale;
  logicalPath: string;
  title: string;
  description: string;
  /** Locales that have a published page at this logical path. */
  availableLocales: readonly SiteLocale[];
  ogType?: "website" | "article";
};

export function buildLocalizedMetadata({
  locale,
  logicalPath,
  title,
  description,
  availableLocales,
  ogType = "website",
}: LocalizedMetaInput): Metadata {
  const url = canonicalUrlForLocale(logicalPath, locale);
  const languages = buildHreflangAlternates(logicalPath, availableLocales);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brandName,
      locale: OPEN_GRAPH_LOCALE[locale],
      type: ogType,
      images: [
        {
          url: siteConfig.ogImagePath,
          width: 1200,
          height: 630,
          alt: `${siteConfig.brandName} — Moroccan cosmetics wholesale`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImagePath],
    },
  };
}
