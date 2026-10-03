"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function FaqSection() {
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);
  const t = useTranslations("home");

  const faqs = [
    {
      q: t.faq1Q,
      a: t.faq1A
    },
    {
      q: t.faq2Q,
      a: t.faq2A
    },
    {
      q: t.faq3Q,
      a: t.faq3A
    },
    {
      q: t.faq4Q,
      a: t.faq4A
    },
    {
      q: t.faq5Q,
      a: t.faq5A
    }
  ];

  const toggleFaq = (index: number) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 border-b border-border">
      <div className="container-wide px-4 md:px-8 max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.faqSub}</span>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">{t.faqTitle}</h2>
          <p className="text-muted-foreground">
            {t.faqDesc}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaqIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card overflow-hidden transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left rtl:text-right font-serif font-semibold text-base md:text-lg hover:text-rose transition-colors focus:outline-none cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="ml-4 shrink-0 text-muted-foreground">
                    {isOpen ? <Minus className="w-5 h-5 text-rose" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 border-t border-border" : "max-h-0"
                  } overflow-hidden`}
                >
                  <div className="p-5 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    {faq.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
