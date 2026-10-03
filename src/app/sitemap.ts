import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { buildHreflangAlternates } from "@/lib/hreflang";
import type { SiteLocale } from "@/i18n/locale";
import { canonicalUrlForLocale } from "@/lib/localePaths";
import { hreflangLocalesForPath } from "@/lib/localeCatalog";

export const dynamic = "force-static";

function entryWithAlternates(
  logicalPath: string,
  availableLocales: readonly SiteLocale[],
  meta: Omit<MetadataRoute.Sitemap[number], "url" | "alternates"> & { url?: string },
  locale: SiteLocale,
): MetadataRoute.Sitemap[number] {
  return {
    ...meta,
    url: canonicalUrlForLocale(logicalPath, locale),
    alternates: {
      languages: buildHreflangAlternates(logicalPath, availableLocales),
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = SITE_ROUTES.flatMap(({ path, priority, changeFrequency }) => {
    const locales = hreflangLocalesForPath(path);
    return locales.map((locale) =>
      entryWithAlternates(path, locales, {
        lastModified: now,
        changeFrequency,
        priority,
      }, locale),
    );
  });

  const blogPostEntries: MetadataRoute.Sitemap = posts.flatMap((post) => {
    const logicalPath = `/blog/${post.slug}`;
    const locales = hreflangLocalesForPath(logicalPath);
    return locales.map((locale) =>
      entryWithAlternates(logicalPath, locales, {
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.7,
      }, locale),
    );
  });

  return [...staticEntries, ...blogPostEntries];
}
