import type { Metadata } from "next";
import BlogPostPageView from "@/components/blog/BlogPostPageView";
import { getAllPosts } from "@/lib/blog";
import { buildBlogPostMetadata } from "@/lib/blogMetadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildBlogPostMetadata(slug, "fr");
}

export default async function FrenchBlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  return <BlogPostPageView slug={slug} locale="fr" />;
}
