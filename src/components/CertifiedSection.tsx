"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function CertifiedSection() {
  const t = useTranslations("home");

  return (
    <section className="py-16 md:py-24 border-b border-border bg-background">
      <div className="container-wide px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (Image) */}
          <div className="lg:col-span-5 relative aspect-[4/3] md:aspect-[16/11] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border border-border group order-2 lg:order-1">
            <Image
              src="/images/factory/export-pallet.webp"
              alt="Quality control and certification testing at Morocco Cosmetic Factory"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-rose/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>

          {/* Right Column (Content) */}
          <div className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.certifiedSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-2 mb-6">
              {t.certifiedTitle}
            </h2>
            
            <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light space-y-6">
              <p>
                {t.certifiedP1}
              </p>
              <p>
                {t.certifiedP2}
              </p>
              <p className="font-normal text-rose">
                {t.certifiedP3}
              </p>
            </div>

            {/* Verification Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-border pt-6">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-rose shrink-0" />
                <span className="text-sm font-medium text-foreground">{t.badgeTraceable}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-rose shrink-0" />
                <span className="text-sm font-medium text-foreground">{t.badgeCoa}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-rose shrink-0" />
                <span className="text-sm font-medium text-foreground">{t.badgeExport}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-rose shrink-0" />
                <span className="text-sm font-medium text-foreground">{t.badgeStandards}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
