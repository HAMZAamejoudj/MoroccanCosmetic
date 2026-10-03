import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import BlogIndexHero from "@/components/blog/BlogIndexHero";
import { getAllPosts } from "@/lib/blog";
import { canonicalUrl, siteConfig } from "@/config/siteConfig";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Morocco Cosmetic Blog",
    description:
      "Practical guides on Moroccan cosmetic ingredients, production and packaging from our Marrakech workshop.",
    url: canonicalUrl("/blog/"),
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: canonicalUrl(`/blog/${post.slug}/`),
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: "Morocco Cosmetic",
      },
    })),
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
    ],
  };

  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <main className="pt-20 md:pt-28 pb-20 md:pb-28">
        <BlogIndexHero />

        {/* Filtered Grid Section */}
        <BlogIndexClient posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
