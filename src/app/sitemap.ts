import type { MetadataRoute } from "next";
import { SITE_ROUTES } from "@/lib/site";
import { canonicalUrl } from "@/config/siteConfig";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const posts = getAllPosts();

  const staticEntries: MetadataRoute.Sitemap = SITE_ROUTES.map(
    ({ path, priority, changeFrequency }) => ({
      url: canonicalUrl(path.endsWith("/") ? path : `${path}/`),
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const blogPostEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: canonicalUrl(`/blog/${post.slug}/`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogPostEntries];
}
