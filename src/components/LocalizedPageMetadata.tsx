"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { applyDocumentMeta } from "@/lib/documentMeta";
import { getPageMetaKey, getPageMetadata } from "@/i18n/pageMetadata";

/** Updates title & meta description when the user switches language (static routes only). */
export default function LocalizedPageMetadata() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    if (!pathname) return;
    const normalized = pathname.replace(/\/$/, "") || "/";
    if (normalized.startsWith("/blog/") && normalized !== "/blog") {
      return;
    }

    const page = getPageMetaKey(normalized);
    const meta = getPageMetadata(normalized, language);
    applyDocumentMeta({
      title: meta.title,
      description: meta.description,
      locale: language,
    });
  }, [pathname, language]);

  return null;
}
