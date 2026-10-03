"use client";

import React, { useState } from "react";
import { ChevronDown, List } from "lucide-react";
import type { TocHeading } from "@/lib/blog-types";
import { useTranslations } from "@/i18n/useTranslations";

interface MobileTocProps {
  headings: TocHeading[];
}

export function MobileToc({ headings }: MobileTocProps) {
  const t = useTranslations("blog");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const h2Headings = headings.filter((h) => h.level === 2);
  const showToc = h2Headings.length >= 5;

  if (!showToc) return null;

  return (
    <div className="lg:hidden mb-8 p-4 rounded-2xl bg-card border border-border shadow-xs">
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="w-full flex items-center justify-between font-serif font-semibold text-base text-foreground cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <List className="w-4 h-4 text-rose" />
          {t.tocTitle} ({h2Headings.length} {t.tocSections})
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${
            isMobileOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isMobileOpen && (
        <nav className="mt-4 pt-4 border-t border-border/60 space-y-2">
          {h2Headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              onClick={() => setIsMobileOpen(false)}
              className="block text-xs leading-relaxed py-1.5 px-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {h.text}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
