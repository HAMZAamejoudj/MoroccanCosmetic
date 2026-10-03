"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function HeroSection() {
  const t = useTranslations("home");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 md:py-24 overflow-hidden border-b border-border">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-home.webp"
          alt="Premium Moroccan Cosmetic Manufacturing Process Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Soft, rich dark gradient overlay for superior contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120a06]/80 via-[#1a0f0a]/70 to-[#120a06]/90 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="container-wide px-4 md:px-8 relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto text-white">
        
        {/* Title (Primary H1) */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
          {t.heroHeading}
        </h1>

        {/* Short Description */}
        <p className="text-base md:text-lg text-white/95 leading-relaxed mb-8 max-w-3xl font-light drop-shadow-sm">
          {t.heroDesc}
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <a
            href="https://wa.me/212641517831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md bg-rose text-white hover:bg-rose-dark shadow-lg hover:shadow-rose/30 font-semibold transition-all duration-300 btn-glow"
          >
            {t.heroBtn}
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </a>
        </div>

      </div>
    </section>
  );
}
