/** Shared blog types — safe to import from Client Components (no Node.js APIs). */

export interface BlogPostFrontmatter {
  title: string;
  seoTitle: string;
  slug: string;
  description: string;
  excerpt: string;
  category: "Production" | "Ingredients" | "Packaging" | string;
  primaryKeyword: string;
  author: string;
  date: string;
  status: "published" | "draft";
  image: string;
}

export interface TocHeading {
  id: string;
  text: string;
  level: 2 | 3;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BlogPost extends BlogPostFrontmatter {
  contentHtml: string;
  rawMarkdown: string;
  wordCount: number;
  readingTime: number;
  headings: TocHeading[];
  faqItems: FaqItem[];
}

/** Serializable subset for homepage “latest guides” cards. */
export type LatestGuidePost = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "date" | "readingTime" | "image"
>;
