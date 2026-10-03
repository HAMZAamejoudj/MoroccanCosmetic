import { notFound } from "next/navigation";
import type { SiteLocale } from "@/i18n/locale";
import { getNamespace } from "@/i18n/getMessages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogPostArticle from "@/components/blog/BlogPostArticle";
import { getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { canonicalUrlForLocale } from "@/lib/localePaths";
import { siteConfig, canonicalUrl } from "@/config/siteConfig";
import { buildFaqPageSchema } from "@/lib/jsonLd";

type Props = {
  slug: string;
  locale: SiteLocale;
};

export default async function BlogPostPageView({ slug, locale }: Props) {
  const en = getPostBySlug(slug, "en");
  if (!en) {
    notFound();
  }
  const fr = getPostBySlug(slug, "fr")!;
  const ar = getPostBySlug(slug, "ar")!;
  const post = locale === "fr" ? fr : locale === "ar" ? ar : en;

  const relatedPosts = getRelatedPosts(post.slug, post.category, 3);
  const postUrl = canonicalUrlForLocale(`/blog/${slug}`, locale);
  const tHome = getNamespace(locale, "home");

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: canonicalUrl(post.image),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: locale,
    author: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: canonicalUrlForLocale("/", locale),
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.brandName,
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
        name: tHome.navHome,
        item: canonicalUrlForLocale("/", locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tHome.navBlog,
        item: canonicalUrlForLocale("/blog", locale),
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
    post.faqItems.length > 0 ? buildFaqPageSchema(post.faqItems, locale) : null;

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
