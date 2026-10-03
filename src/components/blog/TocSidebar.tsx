"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, List, MessageSquare, ArrowRight } from "lucide-react";
import type { TocHeading } from "@/lib/blog-types";

interface TocSidebarProps {
  headings: TocHeading[];
}

export function TocSidebar({ headings }: TocSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const h2Headings = headings.filter((h) => h.level === 2);
  const showToc = h2Headings.length >= 5;

  useEffect(() => {
    if (!showToc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px" }
    );

    h2Headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [h2Headings, showToc]);

  return (
    <>
      {/* Mobile Collapsible TOC */}
      {showToc && (
        <div className="lg:hidden mb-8 p-4 rounded-2xl bg-card border border-border">
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="w-full flex items-center justify-between font-serif font-semibold text-base text-foreground"
          >
            <span className="flex items-center gap-2">
              <List className="w-4 h-4 text-rose" />
              Table of Contents ({h2Headings.length} sections)
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
                  className={`block text-xs leading-relaxed py-1 px-2.5 rounded-lg transition-colors ${
                    activeId === h.id
                      ? "bg-rose/10 text-rose font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          )}
        </div>
      )}

      {/* Desktop Sticky Sidebar Content */}
      <aside className="hidden lg:block w-[280px] shrink-0 sticky top-28 h-fit space-y-8">
        {/* Desktop TOC */}
        {showToc && (
          <div className="p-6 rounded-2xl bg-card border border-border shadow-xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-rose mb-4 flex items-center gap-2">
              <List className="w-3.5 h-3.5" />
              Table of Contents
            </h3>
            <nav className="space-y-1.5 text-xs font-light max-h-[50vh] overflow-y-auto pr-2">
              {h2Headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`block py-1.5 px-3 rounded-lg transition-all duration-200 line-clamp-2 ${
                    activeId === h.id
                      ? "bg-rose/15 text-rose font-medium translate-x-1"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Sidebar Quote Box (No certification claims) */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-card to-blush/20 border border-border shadow-md text-center space-y-4">
          <div className="p-3 rounded-full bg-rose/10 text-rose w-fit mx-auto">
            <MessageSquare className="w-5 h-5" />
          </div>
          <h4 className="font-serif font-semibold text-base text-foreground leading-snug">
            Need this ingredient in bulk?
          </h4>
          <p className="text-xs text-muted-foreground font-light leading-relaxed">
            Direct workshop supply from Marrakech with custom packaging & private label solutions.
          </p>
          <div className="space-y-2.5 pt-2">
            <Link
              href="/contact/"
              className="w-full inline-flex items-center justify-center gap-1.5 h-10 bg-rose text-white hover:bg-rose-dark rounded-xl font-semibold transition-all duration-200 text-xs shadow-xs"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://wa.me/212641517831?text=Hello,%20I'm%20interested%20in%20bulk%20ingredients."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center h-10 border border-border bg-card hover:bg-muted text-foreground rounded-xl font-semibold transition-all duration-200 text-xs"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
