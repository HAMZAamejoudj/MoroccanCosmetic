import type { SiteLocale } from "@/i18n/locale";
import { getNamespace } from "@/i18n/getMessages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogIndexClient from "@/components/blog/BlogIndexClient";
import BlogIndexHero from "@/components/blog/BlogIndexHero";
import { getAllPosts } from "@/lib/blog";
import { canonicalUrlForLocale } from "@/lib/localePaths";
import { siteConfig } from "@/config/siteConfig";

export default function BlogIndexPageView({ locale }: { locale: SiteLocale }) {
  const posts = getAllPosts();
  const tHome = getNamespace(locale, "home");
  const blogUrl = canonicalUrlForLocale("/blog", locale);
  const homeUrl = canonicalUrlForLocale("/", locale);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Morocco Cosmetic Blog",
    description:
      "Practical guides on Moroccan cosmetic ingredients, production and packaging from our Marrakech workshop.",
    url: blogUrl,
    inLanguage: locale,
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: canonicalUrlForLocale(`/blog/${post.slug}`, locale),
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Organization",
        name: siteConfig.brandName,
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
        name: tHome.navHome,
        item: homeUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tHome.navBlog,
        item: blogUrl,
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
        <BlogIndexClient posts={posts} />
      </main>

      <Footer />
    </div>
  );
}
