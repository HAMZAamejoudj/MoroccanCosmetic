"use client";

import { useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { applyDocumentMeta } from "@/lib/documentMeta";
import type { BlogPost } from "@/lib/blog-types";

type LocalizedBlogPostMetadataProps = {
  en: BlogPost;
  fr: BlogPost;
  ar: BlogPost;
};

export default function LocalizedBlogPostMetadata({ en, fr, ar }: LocalizedBlogPostMetadataProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const post = language === "fr" ? fr : language === "ar" ? ar : en;
    const title = post.seoTitle || post.title;
    applyDocumentMeta({
      title,
      description: post.description,
      locale: language,
    });
  }, [language, en, fr, ar]);

  return null;
}
