"use client";

import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "@/i18n/useTranslations";
import { siteImages } from "@/config/siteImages";
import {
  Star,
  ShieldCheck,
  Package,
  Tag,
  Handshake,
  Sprout,
  Droplet,
  Droplets,
  Flower2,
  Bath,
  Sparkles,
} from "lucide-react";

const CORE_BENEFIT_ICONS = [
  Star,
  ShieldCheck,
  Package,
  Tag,
  Handshake,
  Sprout,
] as const;

const INGREDIENT_ICONS = [
  Droplet,
  Droplets,
  Flower2,
  Bath,
  Sparkles,
] as const;

export default function BenefitsPageShell() {
  const t = useTranslations("benefits");

  return (
    <div className="relative min-h-screen organic-texture bg-blush/10 text-foreground transition-colors duration-300">
      <Header />

      <main className="pt-20 md:pt-24">
        {/* HERO SECTION */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/benefits-hero-bg.jpg"
              alt="Moroccan Cosmetic Ingredients Background"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Subtle Gradient & Backdrop Blur Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-blush/80 via-blush/60 to-blush/90 backdrop-blur-[2px]" />
          </div>

          <div className="container-wide px-4 md:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">
              {t.heroSub}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-6 text-foreground leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </section>

        {/* CORE BENEFITS 6 CARDS */}
        <section className="py-16 md:py-24">
          <div className="container-wide px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.coreBenefits.map((benefit, i) => {
                return (
                  <div
                    key={i}
                    className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
                  >
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMAGE GALLERY SECTION */}
        <section className="py-10">
          <div className="container-wide px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-border">
                <Image
                  src={siteImages.manufacture.pureOils}
                  alt="Moroccan pure oils manufacturing"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-border">
                <Image
                  src={siteImages.manufacture.blackSoap}
                  alt="Moroccan black soap production"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-sm border border-border">
                <Image
                  src={siteImages.manufacture.botanicalPowders}
                  alt="Moroccan botanical powders"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* INGREDIENTS SECTION */}
        <section className="py-16 md:py-24">
          <div className="container-wide px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6">
                <span className="text-sm font-semibold uppercase tracking-wider text-rose">
                  {t.ingredientsSub}
                </span>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mt-2 mb-6">
                  {t.ingredientsTitle}
                </h2>
                <p className="text-base text-muted-foreground font-light leading-relaxed mb-8">
                  {t.ingredientsDesc}
                </p>

                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md border border-border max-w-md">
                  <Image
                    src={siteImages.benefitsHero.src}
                    alt={siteImages.benefitsHero.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 space-y-5">
                {t.traditionalIngredients.map((item, i) => {
                  return (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-card border border-border shadow-xs flex flex-col group hover:border-rose/30 transition-colors"
                    >
                      <h3 className="text-base font-semibold text-foreground mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SEO SECTION */}
        {t.seoSection && (
          <section className="py-16 md:py-24">
            <div className="container-wide px-4 md:px-8 max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-6">
                {t.seoSection.title}
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground font-light leading-relaxed text-justify md:text-center">
                <p>{t.seoSection.p1}</p>
                <p>{t.seoSection.p2}</p>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
