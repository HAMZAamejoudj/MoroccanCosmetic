import type { Metadata } from "next";
import type { Language } from "@/context/LanguageContext";
import { OPEN_GRAPH_LOCALE } from "@/i18n/openGraphLocale";
import { metadataLanguageAlternates, openGraphAlternateLocales } from "@/lib/seo";
import { canonicalUrl, siteConfig } from "@/config/siteConfig";

type PageMetaInput = {
  title: string;
  description: string;
  /** Route path, e.g. `/about` or `/`. */
  path: string;
  locale?: Language;
  ogType?: "website" | "article";
};

export function buildPageMetadata({
  title,
  description,
  path,
  locale = "en",
  ogType = "website",
}: PageMetaInput): Metadata {
  const url = canonicalUrl(path);
  const ogLocale = OPEN_GRAPH_LOCALE[locale];

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: metadataLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brandName,
      locale: ogLocale,
      alternateLocale: openGraphAlternateLocales(locale),
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
