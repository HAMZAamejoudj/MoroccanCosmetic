"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function PrivateLabelSection() {
  const t = useTranslations("home");

  const checklistItems = [
    t.plCheck1,
    t.plCheck2,
    t.plCheck3,
    t.plCheck4,
    t.plCheck5,
    t.plCheck6
  ];

  return (
    <section id="private-label" className="py-16 md:py-24 border-b border-border bg-background">
      <div className="container-wide px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Content) */}
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.plSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">
            {t.plTitle}
          </h2>
          
          <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light space-y-4">
            <p>
              {t.plP1}
            </p>
            <p>
              {t.plP2}
            </p>
            <p>
              {t.plP3}
            </p>
            <p className="font-normal text-rose">
              {t.plP4}
            </p>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            {checklistItems.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <div className="p-1 rounded-full bg-rose/10 text-rose shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm md:text-base text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/212641517831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-rose text-white hover:bg-rose-dark font-semibold shadow-sm transition-all duration-300 btn-glow"
          >
            {t.plBtn}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>

        {/* Right Column (Image) */}
        <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border border-border group lg:order-2">
          <Image
            src="/images/factory/bulk-production.webp"
            alt="Organic Private Label Skincare & Cosmetic Products Morocco"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover group-hover:scale-105 transition-transform duration-750"
          />
          {/* Visual glow */}
          <div className="absolute inset-0 bg-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
