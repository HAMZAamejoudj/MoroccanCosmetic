import type { Metadata } from "next";
import type { SiteLocale } from "@/i18n/locale";
import { canonicalUrl } from "@/config/siteConfig";
import { getPostBySlug } from "@/lib/blog";
import { buildLocalizedMetadata } from "@/lib/localizedMetadata";
import { hreflangLocalesForPath } from "@/lib/localeCatalog";
import { canonicalUrlForLocale } from "@/lib/localePaths";

export function buildBlogPostMetadata(slug: string, locale: SiteLocale): Metadata {
  const en = getPostBySlug(slug, "en");
  if (!en) {
    return { title: "Article Not Found | Morocco Cosmetic" };
  }

  const post = getPostBySlug(slug, locale) ?? en;
  const logicalPath = `/blog/${slug}`;
  const url = canonicalUrlForLocale(logicalPath, locale);
  const imageUrl = canonicalUrl(post.image);
  const title = post.seoTitle || post.title;
  const description = post.description || post.excerpt;

  const base = buildLocalizedMetadata({
    locale,
    logicalPath,
    title,
    description,
    availableLocales: hreflangLocalesForPath(logicalPath),
    ogType: "article",
  });

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 675,
          alt: post.title,
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
