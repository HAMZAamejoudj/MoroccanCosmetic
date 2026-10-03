"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { PAGE_CONTAINER } from "@/lib/pageContainer";
import { useTranslations } from "@/i18n/useTranslations";
import type { LatestGuidePost } from "@/lib/blog-types";
import { localizedBlogPost } from "@/lib/blogLocale";

export type { LatestGuidePost };

export default function LatestGuidesSection({ posts }: { posts: LatestGuidePost[] }) {
  const t = useTranslations("homePage");
  const tBlog = useTranslations("blog");

  if (posts.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-blush/10 border-t border-b border-border/60">
      <div className={PAGE_CONTAINER}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-2">
              {t.guidesEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {t.guidesTitle}
            </h2>
          </div>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rose hover:text-rose-dark transition-colors"
          >
            <span>{t.guidesViewAll}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const { title, excerpt } = localizedBlogPost(post.slug, tBlog, {
              title: post.title,
              excerpt: post.excerpt,
            });
            return (
            <article
              key={post.slug}
              className="group flex flex-col bg-card rounded-2xl border border-border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              <Link
                href={`/blog/${post.slug}/`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-muted block"
              >
                <Image
                  src={post.image}
                  alt={title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-light mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-rose" />
                    {post.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-rose" />
                    {post.readingTime} {t.guidesMinRead}
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground leading-snug mb-3 group-hover:text-rose transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}/`}>{title}</Link>
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3">
                  {excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="mt-auto inline-flex items-center gap-1 text-xs font-semibold text-rose hover:text-rose-dark group-hover:translate-x-1 transition-all"
                >
                  <span>{t.guidesReadMore}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          );
          })}
        </div>
      </div>
    </section>
  );
}
