import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import { canonicalUrl, siteConfig } from "@/config/siteConfig";
import { getProductBySlug } from "@/lib/products";
import { buildLocalizedMetadata } from "@/lib/localizedMetadata";
import { hreflangLocalesForPath } from "@/lib/localeCatalog";
import { canonicalUrlForLocale } from "@/lib/localePaths";

export function buildProductMetadata(slug: string, locale: SiteLocale): Metadata {
  const en = getProductBySlug(slug, "en");
  if (!en) {
    return { title: "Product Not Found | Morocco Cosmetic" };
  }

  const product = getProductBySlug(slug, locale) ?? en;
  const logicalPath = `/products/${slug}`;
  const url = canonicalUrlForLocale(logicalPath, locale);
  const imageUrl = canonicalUrl(product.image.src);
  const title = product.seoTitle;
  const description = product.seoDescription;

  const base = buildLocalizedMetadata({
    locale,
    logicalPath,
    title,
    description,
    availableLocales: hreflangLocalesForPath(logicalPath),
    ogType: "website",
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      title,
      description,
      url,
      images: [
        {
          url: imageUrl,
          width: product.image.width || 1200,
          height: product.image.height || 800,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

