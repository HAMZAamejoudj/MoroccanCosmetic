"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "@/i18n/useTranslations";

export default function IngredientsDemandSection() {
  const t = useTranslations("home");

  const ingredientsList = [
    {
      title: t.arganName,
      purpose: t.trend1Purp,
      desc: t.trend1Desc,
      image: "/images/catalog/argan-oil.webp"
    },
    {
      title: t.pricklyName,
      purpose: t.trend2Purp,
      desc: t.trend2Desc,
      image: "/images/catalog/prickly-pear-oil.webp"
    },
    {
      title: t.soapName,
      purpose: t.trend3Purp,
      desc: t.trend3Desc,
      image: "/images/catalog/black-soap.webp"
    },
    {
      title: t.roseName,
      purpose: t.trend4Purp,
      desc: t.trend4Desc,
      image: "/images/catalog/rose-water.webp"
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-border bg-blush/10">
      <div className="container-wide px-4 md:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.trendSub}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-2 mb-4">
              {t.trendTitle}
            </h2>
            <div className="text-base md:text-lg text-muted-foreground font-light leading-relaxed space-y-4">
              <p>
                {t.trendP1}
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base md:text-lg text-muted-foreground font-medium border-l-2 border-rose pl-4 italic">
              {t.trendQuote}
            </p>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ingredientsList.map((item, i) => (
            <div
              key={i}
              className="flex flex-col rounded-3xl bg-card border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 card-lift group"
            >
              {/* Product Photo */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-border">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-border px-3 py-1 rounded-full text-xs font-semibold uppercase text-rose shadow-sm">
                  {item.purpose}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-rose transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
