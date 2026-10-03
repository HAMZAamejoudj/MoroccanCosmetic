"use client";

import { useTranslations } from "@/i18n/useTranslations";

export default function BlogIndexHero() {
  const t = useTranslations("blog");

  return (
    <section className="py-14 md:py-20 bg-blush/20 border-b border-border">
      <div className="container-wide px-4 md:px-8 text-center max-w-4xl mx-auto">
        <span className="text-xs sm:text-sm font-semibold text-rose uppercase tracking-widest block mb-3">
          {t.indexEyebrow}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6">
          {t.indexTitle}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
          {t.indexDesc}
        </p>
      </div>
    </section>
  );
}
