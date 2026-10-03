import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";
import { sitemapLanguageAlternates, sitemapUrlForPath } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = SITE_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: sitemapUrlForPath(path),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: sitemapLanguageAlternates(path),
      },
    }),
  );

  const blogPostEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const blogPath = `/blog/${post.slug}`;
    return {
      url: sitemapUrlForPath(blogPath),
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: sitemapLanguageAlternates(blogPath),
      },
    };
  });

  return [...staticEntries, ...blogPostEntries];
}
