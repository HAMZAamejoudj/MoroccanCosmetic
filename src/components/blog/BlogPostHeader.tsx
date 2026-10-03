"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { localizedBlogPost } from "@/lib/blogLocale";

type BlogPostHeaderProps = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: number;
  image: string;
};

export default function BlogPostHeader({
  slug,
  title: fallbackTitle,
  excerpt,
  category,
  author,
  date,
  readingTime,
  image,
}: BlogPostHeaderProps) {
  const t = useTranslations("blog");
  const tHome = useTranslations("home");
  const { title } = localizedBlogPost(slug, t, { title: fallbackTitle, excerpt });

  return (
    <>
      <div className="container-wide px-4 md:px-8 mb-8">
        <nav className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground font-light flex-wrap">
          <Link href="/" className="hover:text-rose transition-colors">{tHome.navHome}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          <Link href="/blog/" className="hover:text-rose transition-colors">{tHome.navBlog}</Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/50" />
          <span className="text-foreground font-medium truncate max-w-[240px] sm:max-w-xs">{title}</span>
        </nav>
      </div>

      <header className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block px-3.5 py-1 rounded-full bg-rose/10 border border-rose/20 text-rose font-semibold text-xs uppercase tracking-wider mb-4">
          {category}
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-muted-foreground font-light flex-wrap">
          <span>{t.byAuthor} {author}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose/30" />
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-rose" />
            {date}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-rose/30" />
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-rose" />
            {readingTime} {t.minRead}
          </span>
        </div>
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-lg mt-8 bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-cover"
          />
        </div>
      </header>
    </>
  );
}
