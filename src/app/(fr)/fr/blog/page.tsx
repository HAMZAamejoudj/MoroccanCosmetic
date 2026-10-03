import type { Metadata } from "next";
import BlogIndexPageView from "@/components/blog/BlogIndexPageView";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("blog", "/blog", "fr");

export default function FrenchBlogIndexPage() {
  return <BlogIndexPageView locale="fr" />;
}
