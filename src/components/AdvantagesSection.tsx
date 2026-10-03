"use client";

import React from "react";
import { Award, Factory, Plus, FileCheck, Leaf, Globe } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function AdvantagesSection() {
  const t = useTranslations("home");

  const advantages = [
    {
      icon: <Award className="w-6 h-6 text-rose" />,
      title: t.adv1Title,
      desc: t.adv1Desc
    },
    {
      icon: <Factory className="w-6 h-6 text-rose" />,
      title: t.adv2Title,
      desc: t.adv2Desc
    },
    {
      icon: <FileCheck className="w-6 h-6 text-rose" />,
      title: t.adv3Title,
      desc: t.adv3Desc
    },
    {
      icon: <Plus className="w-6 h-6 text-rose" />,
      title: t.adv4Title,
      desc: t.adv4Desc
    },
    {
      icon: <Leaf className="w-6 h-6 text-rose" />,
      title: t.adv5Title,
      desc: t.adv5Desc
    },
    {
      icon: <Globe className="w-6 h-6 text-rose" />,
      title: t.adv6Title,
      desc: t.adv6Desc
    }
  ];

  return (
    <section className="py-16 md:py-24 border-b border-border bg-blush/10">
      <div className="container-wide px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.advSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">{t.advTitle}</h2>
          
          <div className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto font-light space-y-4 mb-10 text-left md:text-center">
            <p>
              {t.advP1}
            </p>
            <p>
              {t.advP2}
            </p>
            <p className="font-normal text-rose">
              {t.advP3}
            </p>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 card-lift"
            >
              <div className="p-3 rounded-xl bg-rose/10 text-rose shrink-0">
                {adv.icon}
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-2 text-foreground">{adv.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
