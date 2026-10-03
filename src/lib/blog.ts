import "server-only";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import type { SiteLocale } from "@/i18n/locale";
import type {
  BlogPost,
  BlogPostFrontmatter,
  FaqItem,
  LatestGuidePost,
  TocHeading,
} from "@/lib/blog-types";
import { getBlogRendererCopy, type BlogRendererCopy } from "@/lib/blogRendererCopy";

export type {
  BlogPost,
  BlogPostFrontmatter,
  FaqItem,
  LatestGuidePost,
  TocHeading,
} from "@/lib/blog-types";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogContentLocale = SiteLocale;

export function slugify(text: string): string {
  const slug = text
    .replace(/<[^>]+>/g, "")
    .trim()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  return slug;
}

function headingId(rawText: string, headings: TocHeading[]): string {
  const fromSlug = slugify(rawText);
  if (fromSlug) return fromSlug;
  return `section-${headings.length + 1}`;
}

function localizedBlogPath(locale: BlogContentLocale, slug: string): string {
  return path.join(BLOG_DIR, locale, `${slug}.md`);
}

function readEnglishPostFile(slug: string): string | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const fileNames = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
  for (const fileName of fileNames) {
    const fullPath = path.join(BLOG_DIR, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    const frontmatter = data as BlogPostFrontmatter;
    if (frontmatter.slug === slug) {
      return fileContents;
    }
  }
  return null;
}

export function getLatestGuidePosts(limit = 3): LatestGuidePost[] {
  return getAllPosts()
    .slice(0, limit)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      readingTime: post.readingTime,
      image: post.image,
    }));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const fileNames = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

  const posts: BlogPost[] = fileNames
    .map((fileName) => {
      const fullPath = path.join(BLOG_DIR, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      return parsePost(fileContents, getBlogRendererCopy("en"));
    })
    .filter((post) => post.status === "published")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string, locale: BlogContentLocale = "en"): BlogPost | null {
  const enContents = readEnglishPostFile(slug);
  if (!enContents) return null;

  const enPost = parsePost(enContents, getBlogRendererCopy("en"));
  if (locale === "en") return enPost;

  const localizedPath = localizedBlogPath(locale, slug);
  if (!fs.existsSync(localizedPath)) {
    return enPost;
  }

  const localized = parsePost(
    fs.readFileSync(localizedPath, "utf8"),
    getBlogRendererCopy(locale),
  );

  return {
    ...enPost,
    ...localized,
    slug: enPost.slug,
    image: enPost.image,
    date: enPost.date,
    status: enPost.status,
    seoTitle: localized.seoTitle || localized.title || enPost.seoTitle,
    description: localized.description || localized.excerpt || enPost.description,
    primaryKeyword: enPost.primaryKeyword,
  };
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const posts = getAllPosts().filter((p) => p.slug !== currentSlug);
  const sameCategory = posts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  const otherCategory = posts.filter((p) => p.category.toLowerCase() !== category.toLowerCase());
  return [...sameCategory, ...otherCategory].slice(0, limit);
}

function parsePost(fileContents: string, copy: BlogRendererCopy): BlogPost {
  const { data, content } = matter(fileContents);
  const frontmatter = data as BlogPostFrontmatter;

  // Clean TODO comments from raw markdown
  const cleanedMarkdown = content.replace(/<!--\s*TODO[\s\S]*?-->/gi, "").trim();

  // Calculate word count
  const plainText = cleanedMarkdown
    .replace(/#+\s+/g, "")
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1")
    .replace(/[*_~`|]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = plainText ? plainText.split(/\s+/).length : 0;
  const readingTime = Math.max(1, Math.ceil(words / 200));

  // Extract TOC headings and FAQ items
  const headings: TocHeading[] = [];
  const faqItems: FaqItem[] = [];

  // Extract FAQ items before converting markdown
  const faqMatch = cleanedMarkdown.match(
    /## (?:FAQ|Questions fréquentes|الأسئلة الشائعة)\s+([\s\S]*?)(?=\n## |$)/i,
  );
  if (faqMatch && faqMatch[1]) {
    const faqSection = faqMatch[1];
    const qMatches = Array.from(faqSection.matchAll(/###\s+(.+?)\r?\n([\s\S]*?)(?=\r?\n###|\r?\n\[|\r?\n##|$)/g));
    for (const qm of qMatches) {
      const qText = qm[1].trim();
      const aText = qm[2].replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/[*_~`]/g, "").trim();
      if (qText && aText) {
        faqItems.push({ question: qText, answer: aText });
      }
    }
  }

  // Pre-process markdown for links trailing slashes and button tokens
  let processedMarkdown = cleanedMarkdown;

  // Ensure internal links have trailing slashes e.g. /products/
  processedMarkdown = processedMarkdown.replace(/\]\(\/([a-zA-Z0-9_-]+)\)/g, "](/$1/)");
  processedMarkdown = processedMarkdown.replace(/\]\(\/([a-zA-Z0-9_-]+)\/\)/g, "](/$1/)");

  // Render markdown to HTML using custom marked renderer
  let h2Count = 0;
  const renderer = new marked.Renderer();

  renderer.heading = (token: any) => {
    const text = token.text || "";
    const depth = token.depth;
    const rawText = text.replace(/<[^>]+>/g, "").trim();
    const id = headingId(rawText, headings);

    if (depth === 2 || depth === 3) {
      headings.push({ id, text: rawText, level: depth as 2 | 3 });
    }

    let extraHtml = "";
    if (depth === 2) {
      h2Count++;
      // Mid-article CTA box after the 3rd H2
      if (h2Count === 3) {
        extraHtml = `
          <div class="my-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose/10 via-blush/20 to-background border border-rose/20 text-foreground flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div class="space-y-1.5 text-center md:text-left">
              <span class="text-xs font-semibold uppercase tracking-wider text-rose">${copy.midCtaEyebrow}</span>
              <p class="font-serif text-xl sm:text-2xl font-semibold text-foreground leading-snug">${copy.midCtaTitle}</p>
              <p class="text-sm text-muted-foreground font-light">${copy.midCtaDesc}</p>
            </div>
            <a href="/private-label-moroccan-cosmetics/" class="blog-cta-btn shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-rose !text-white font-semibold text-sm hover:bg-rose-dark hover:!text-white transition-all shadow-md shadow-rose/20 hover:scale-105">
              <span>${copy.midCtaButton} &rarr;</span>
            </a>
          </div>
        `;
      }
    }

    if (depth === 2) {
      return `<h2 id="${id}" class="text-2xl sm:text-3xl font-serif font-semibold text-foreground mt-12 mb-4 pt-4 scroll-mt-24 border-t border-border/40 first:border-t-0 first:pt-0">${text}</h2>${extraHtml}`;
    }
    if (depth === 3) {
      return `<h3 id="${id}" class="text-xl font-serif font-semibold text-foreground mt-8 mb-3 pt-2 scroll-mt-24">${text}</h3>`;
    }
    return `<h${depth} class="font-serif font-semibold text-foreground mt-6 mb-3">${text}</h${depth}>`;
  };

  renderer.paragraph = (token: any) => {
    const text = token.text || "";
    // Check for [Request a Quote] token on its own line
    const trimmed = text.trim();
    if (copy.quoteTokens.includes(trimmed) || trimmed === "&lbrack;Request a Quote&rbrack;") {
      return `
        <div class="my-10 p-6 sm:p-8 rounded-2xl bg-card border border-border shadow-md text-foreground flex flex-col sm:flex-row items-center justify-between gap-6">
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="font-serif font-semibold text-xl text-foreground">${copy.inlineQuoteTitle}</h4>
            <p class="text-sm text-muted-foreground font-light">${copy.inlineQuoteDesc}</p>
          </div>
          <div class="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto shrink-0">
            <a href="/contact/" class="blog-cta-btn inline-flex items-center justify-center px-5 py-3 rounded-xl bg-rose !text-white font-semibold text-sm hover:bg-rose-dark hover:!text-white transition-colors shadow-sm shadow-rose/20">
              <span>${copy.requestQuote}</span>
            </a>
            <a href="https://wa.me/212641517831?text=Hello,%20I%20want%20to%20inquire%20about%20bulk%20ingredients." target="_blank" rel="noopener noreferrer" class="blog-cta-btn inline-flex items-center justify-center px-5 py-3 rounded-xl border border-border bg-background text-foreground font-semibold text-sm hover:bg-muted transition-colors">
              <span>${copy.chatWhatsapp}</span>
            </a>
          </div>
        </div>
      `;
    }
    return `<p class="mb-6 text-[18px] leading-[1.75] text-foreground/90 font-light">${text}</p>`;
  };

  let html = marked.parse(processedMarkdown, { renderer }) as string;

  // Post-process styling for HTML elements
  html = html
    .replace(/<table>/g, '<div class="overflow-x-auto my-8 border border-border rounded-2xl shadow-xs"><table class="w-full text-left text-sm font-light border-collapse">')
    .replace(/<\/table>/g, '</table></div>')
    .replace(/<th>/g, '<th scope="col" class="px-4 py-3 bg-blush/30 font-semibold text-foreground text-left border-b border-border">')
    .replace(/<td>/g, '<td class="px-4 py-3 border-b border-border/60 text-muted-foreground">')
    .replace(/<ol>/g, '<ol class="list-decimal pl-6 my-6 space-y-2 text-[18px] leading-[1.75] text-foreground/90 font-light">')
    .replace(/<ul>/g, '<ul class="list-disc pl-6 my-6 space-y-2 text-[18px] leading-[1.75] text-foreground/90 font-light marker:text-rose">');

  return {
    ...frontmatter,
    contentHtml: html,
    rawMarkdown: fileContents,
    wordCount: words,
    readingTime,
    headings,
    faqItems,
  };
}
