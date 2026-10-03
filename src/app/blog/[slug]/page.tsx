import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostArticle from "@/components/blog/BlogPostArticle";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { canonicalUrl, siteConfig } from "@/config/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Morocco Cosmetic",
    };
  }

  const url = canonicalUrl(`/blog/${post.slug}/`);
  const imageUrl = canonicalUrl(post.image);

  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      url,
      siteName: siteConfig.brandName,
      locale: "en_US",
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
      title: post.seoTitle,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const en = getPostBySlug(slug, "en");
  if (!en) {
    notFound();
  }
  const fr = getPostBySlug(slug, "fr")!;
  const ar = getPostBySlug(slug, "ar")!;
  const post = en;

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const postUrl = canonicalUrl(`/blog/${post.slug}/`);

  // JSON-LD Schemas
  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: canonicalUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Morocco Cosmetic",
      url: canonicalUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Morocco Cosmetic",
      logo: {
        "@type": "ImageObject",
        url: canonicalUrl(siteConfig.logoPath),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonicalUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: canonicalUrl("/blog/"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: postUrl,
      },
    ],
  };

  const faqJsonLd =
    post.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      <Header />

      <main className="pt-24 md:pt-28 pb-20 md:pb-28">
        <BlogPostArticle en={en} fr={fr} ar={ar} related={relatedPosts} />
      </main>

      <Footer />
    </div>
  );
}
