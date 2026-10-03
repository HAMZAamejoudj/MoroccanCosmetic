import type enBlog from "@/i18n/locales/en/blog.json";

type BlogLocale = typeof enBlog;

export function localizedBlogPost(
  slug: string,
  blog: BlogLocale,
  fallback: { title: string; excerpt: string },
) {
  const entry = blog.posts[slug as keyof typeof blog.posts];
  if (!entry) return fallback;
  return { title: entry.title, excerpt: entry.excerpt };
}
