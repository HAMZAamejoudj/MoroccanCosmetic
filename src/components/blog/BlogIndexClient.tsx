"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-types";
import { useTranslations } from "@/i18n/useTranslations";
import { localizedBlogPost } from "@/lib/blogLocale";

interface BlogIndexClientProps {
  posts: BlogPost[];
}

export default function BlogIndexClient({ posts }: BlogIndexClientProps) {
  const t = useTranslations("blog");
  const categories = [
    { key: "All", label: t.categoryAll },
    { key: "Production", label: t.categoryProduction },
    { key: "Ingredients", label: t.categoryIngredients },
    { key: "Packaging", label: t.categoryPackaging },
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="py-14 md:py-20">
      <div className="container-wide px-4 md:px-8">
        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map(({ key, label }) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-rose text-white shadow-md shadow-rose/20 scale-105"
                    : "bg-card border border-border text-muted-foreground hover:border-rose/50 hover:text-foreground"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Cards Grid - All cards remain in HTML DOM */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          {posts.map((post) => {
            const isVisible =
              activeCategory === "All" ||
              post.category.toLowerCase() === activeCategory.toLowerCase();
            const { title, excerpt } = localizedBlogPost(post.slug, t, {
              title: post.title,
              excerpt: post.excerpt,
            });

            return (
              <article
                key={post.slug}
                className={`group w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.33rem)] max-w-[420px] flex flex-col bg-card rounded-2xl border border-border shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${
                  isVisible ? "flex" : "hidden"
                }`}
              >
                {/* Image Container 16:10 */}
                <Link
                  href={`/blog/${post.slug}/`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-muted block shrink-0"
                >
                  <Image
                    src={post.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </Link>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground font-light mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-rose" />
                      {post.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-rose" />
                      {post.readingTime} {t.minRead}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif font-semibold text-foreground leading-snug mb-3 group-hover:text-rose transition-colors">
                    <Link href={`/blog/${post.slug}/`}>{title}</Link>
                  </h2>

                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 line-clamp-3 flex-1">
                    {excerpt}
                  </p>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between mt-auto">
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-rose hover:text-rose-dark group-hover:translate-x-1 transition-all"
                    >
                      <span>{t.readGuide}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
