"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  ClipboardList,
  HandHeart,
  Package,
  Plus,
  Truck,
} from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { useLocale } from "@/context/LocaleContext";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { homeImages } from "@/components/home/homeImages";
import { localizedPathForLocale } from "@/lib/localeCatalog";

const PRODUCT_IMAGES: Record<string, string> = {
  "argan-oil": homeImages.arganOil.src,
  "prickly-pear": homeImages.pricklyPearOil.src,
  "rose-water": homeImages.roseWater.src,
  "orange-blossom-water": homeImages.orangeBlossomWater.src,
  "aker-fassi": homeImages.akerFassi.src,
  "nila-powder": homeImages.nilaPowder.src,
  "black-soap": homeImages.blackSoap.src,
  "ghassoul-clay": homeImages.ghassoulClay.src,
  "sidr-powder": homeImages.sidrPowder.src,
};

const WHY_ICONS = [HandHeart, BadgeCheck, Package, ClipboardList, Truck];

export default function ProductsPageContent() {
  const t = useTranslations("products");
  const locale = useLocale();
  const whatsappBase = getWhatsAppUrl();
  const flip = locale === "ar";

  const viewDetailsText =
    locale === "fr"
      ? "Voir les détails"
      : locale === "ar"
      ? "عرض التفاصيل"
      : "View Specifications";

  return (
    <main className="pt-20 md:pt-24">
      <section className="relative py-16 md:py-24 bg-blush/10 overflow-hidden">
        <div className="container-wide px-4 md:px-8 relative z-10 text-center max-w-4xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.heroEyebrow}</span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-6 text-foreground leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">{t.heroDesc}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.items.map((p) => {
              const image = PRODUCT_IMAGES[p.id];
              const productUrl = localizedPathForLocale(`/products/${p.id}`, locale);
              const waLink = `${whatsappBase}?text=${encodeURIComponent(p.waMessage)}`;
              return (
                <div
                  key={p.id}
                  className="group flex flex-col h-full bg-card rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href={productUrl} className="relative aspect-square w-full overflow-hidden bg-muted block">
                    {image ? (
                      <Image
                        src={image}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-103 transition-transform duration-700"
                      />
                    ) : null}
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={productUrl}>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-rose transition-colors duration-200">
                        {p.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                      {p.description}
                    </p>
                    <ul className="space-y-2 border-t border-border pt-4 mb-6">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 items-start text-xs text-foreground/80">
                          <Check className="w-3.5 h-3.5 text-rose shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2.5">
                      <Link
                        href={productUrl}
                        className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-rose/10 hover:bg-rose hover:text-white text-rose font-semibold transition-all duration-300 text-sm"
                      >
                        {viewDetailsText}
                        <ArrowRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
                      </Link>
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl border border-border bg-background hover:bg-muted text-foreground/85 font-semibold transition-all duration-300 text-sm"
                      >
                        {t.inquireCta}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-blush/5">
        <div className="container-wide px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.whyEyebrow}</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mt-2 mb-4">{t.whyTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {t.whyItems.map((item, index) => {
              const Icon = WHY_ICONS[index] ?? Package;
              return (
                <div key={item.title} className="flex flex-col items-center text-center p-4">
                  <div className="p-4 rounded-full bg-rose/10 text-rose mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background border-t border-border">
        <div className="container-wide px-4 md:px-8 max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.faqEyebrow}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 text-foreground">
              {t.faqTitle}
            </h2>
          </div>
          <div className="divide-y divide-border border border-border rounded-3xl bg-card overflow-hidden shadow-sm">
            {t.faqs.map((item) => (
              <details key={item.question} className="group">
                <summary className="cursor-pointer list-none px-6 py-6 flex items-center justify-between gap-4 hover:bg-muted/30 transition-colors">
                  <h3 className="font-serif font-semibold text-lg text-foreground text-left pr-4">{item.question}</h3>
                  <Plus className="w-5 h-5 text-rose shrink-0 transition-transform duration-300 group-open:rotate-45" aria-hidden />
                </summary>
                <div className="px-6 pb-6 text-base border-t border-border pt-4 text-foreground/80 font-light leading-relaxed">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
          <p className="mt-16 text-center text-base text-foreground/85">
            {t.faqStillQuestions}{" "}
            <Link
              href={localizedPathForLocale("/contact", locale)}
              className="text-rose font-semibold hover:underline"
            >
              {t.faqContact}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
