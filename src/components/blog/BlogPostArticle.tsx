"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTranslations } from "@/i18n/useTranslations";
import type { BlogPost } from "@/lib/blog-types";
import { localizedBlogPost } from "@/lib/blogLocale";
import { MobileToc } from "./MobileToc";
import { DesktopSidebar } from "./DesktopSidebar";
import BlogPostHeader from "./BlogPostHeader";
import BlogPostMobileCta from "./BlogPostMobileCta";
import LocalizedBlogPostMetadata from "./LocalizedBlogPostMetadata";

type BlogPostArticleProps = {
  en: BlogPost;
  fr: BlogPost;
  ar: BlogPost;
  related: BlogPost[];
};

function categoryLabel(
  category: string,
  t: {
    categoryProduction: string;
    categoryIngredients: string;
    categoryPackaging: string;
  },
) {
  const key = category.toLowerCase();
  if (key === "production") return t.categoryProduction;
  if (key === "ingredients") return t.categoryIngredients;
  if (key === "packaging") return t.categoryPackaging;
  return category;
}

export default function BlogPostArticle({ en, fr, ar, related }: BlogPostArticleProps) {
  const { language } = useLanguage();
  const t = useTranslations("blog");
  const post = language === "fr" ? fr : language === "ar" ? ar : en;

  const displayMeta = localizedBlogPost(post.slug, t, {
    title: post.title,
    excerpt: post.excerpt,
  });

  return (
    <>
      <LocalizedBlogPostMetadata en={en} fr={fr} ar={ar} />
      <BlogPostHeader
        slug={post.slug}
        title={displayMeta.title}
        excerpt={displayMeta.excerpt}
        category={categoryLabel(post.category, t)}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        image={post.image}
      />

      <div className="container-wide px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 justify-center items-start">
          <article className="w-full max-w-[720px] shrink-0">
            <MobileToc headings={post.headings} />

            <div
              className="max-w-none text-[18px] leading-[1.75] text-foreground/90 font-light [&_p_a]:text-rose [&_p_a]:font-medium [&_p_a:hover]:text-rose-dark [&_li_a]:text-rose [&_li_a]:font-medium [&_a.blog-cta-btn]:no-underline [&_strong]:font-semibold [&_strong]:text-foreground [&_img]:rounded-2xl [&_img]:shadow-sm [&_img]:my-8 [&_img]:border [&_img]:border-border [&_blockquote]:border-l-4 [&_blockquote]:border-rose/30 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:my-8"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />

            <BlogPostMobileCta />

            <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-rose/10 border border-rose/20 text-rose flex items-center justify-center font-serif font-semibold text-xl shrink-0">
                MC
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="font-serif font-semibold text-lg text-foreground">
                  {t.writtenBy} {post.author}
                </h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{t.authorBio}</p>
              </div>
            </div>
          </article>

          <DesktopSidebar headings={post.headings} />
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 pt-16 border-t border-border bg-blush/10">
          <div className="container-wide px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-rose">{t.continueReading}</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mt-1">{t.relatedGuides}</h2>
              </div>
              <Link
                href="/blog/"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-rose hover:text-rose-dark transition-colors"
              >
                <span>{t.allGuides}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {related.map((rel) => {
                const relMeta = localizedBlogPost(rel.slug, t, {
                  title: rel.title,
                  excerpt: rel.excerpt,
                });
                return (
                  <article
                    key={rel.slug}
                    className="group flex flex-col bg-card rounded-2xl border border-border shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  >
                    <Link
                      href={`/blog/${rel.slug}/`}
                      className="relative aspect-[16/10] w-full overflow-hidden bg-muted block"
                    >
                      <Image
                        src={rel.image}
                        alt={relMeta.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-base font-serif font-semibold text-foreground mb-2 group-hover:text-rose transition-colors line-clamp-2">
                        <Link href={`/blog/${rel.slug}/`}>{relMeta.title}</Link>
                      </h3>
                      <p className="text-xs text-muted-foreground font-light line-clamp-2 mb-4">{relMeta.excerpt}</p>
                      <Link
                        href={`/blog/${rel.slug}/`}
                        className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-rose hover:text-rose-dark"
                      >
                        {t.readGuide} &rarr;
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
