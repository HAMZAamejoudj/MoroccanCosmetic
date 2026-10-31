"use client";



import Image from "next/image";

import Link from "next/link";

import type { LucideIcon } from "lucide-react";

import {

  ArrowRight,

  Beaker,

  Box,

  Check,

  CheckCircle2,

  Cog,

  Cylinder,

  Droplets,

  Factory,

  FileCheck,

  FlaskConical,

  Flower2,

  Gift,

  MessageSquare,

  MessageSquareText,

  Mountain,

  Package,

  PackageCheck,

  Palette,

  Plane,

  ShoppingBag,

  Tag,

  Truck,

} from "lucide-react";

import { businessFacts } from "@/config/businessFacts";

import { getWhatsAppUrl } from "@/config/siteConfig";

import Breadcrumbs from "@/components/ui/Breadcrumbs";

import type enPrivateLabelPage from "@/i18n/locales/en/privateLabelPage.json";

import { useTranslations } from "@/i18n/useTranslations";
import { useLocale } from "@/context/LocaleContext";
import { localizedPathForLocale } from "@/lib/localeCatalog";

import { PAGE_CONTAINER } from "@/lib/pageContainer";

import { siteImages } from "@/config/siteImages";

import { getPrivateLabelFaqItems } from "./privateLabelFaq";

import { privateLabelHeroImage } from "./privateLabelHeroImage";



const m = siteImages.manufacture;



const bodyText = "text-muted-foreground font-light leading-relaxed";



const MANUFACTURE_CATEGORY_KEYS = [

  "pureOils",

  "blackSoap",

  "ghassoulClay",

  "floralWaters",

  "botanicalPowders",

  "hammamKits",

] as const;



const MANUFACTURE_CATEGORY_META: Record<

  (typeof MANUFACTURE_CATEGORY_KEYS)[number],

  { icon: LucideIcon; image: string }

> = {

  pureOils: { icon: Droplets, image: m.pureOils },

  blackSoap: { icon: Droplets, image: m.blackSoap },

  ghassoulClay: { icon: Mountain, image: m.ghassoulClay },

  floralWaters: { icon: Flower2, image: m.floralWaters },

  botanicalPowders: { icon: Package, image: m.botanicalPowders },

  hammamKits: { icon: Gift, image: m.hammamKits },

};



const TIMELINE_ICONS: LucideIcon[] = [

  MessageSquareText,

  Beaker,

  Palette,

  FileCheck,

  Cog,

  Plane,

];



interface ManufactureCategory {

  key: (typeof MANUFACTURE_CATEGORY_KEYS)[number];
  title: string;

  subtitle: string;

  description: string;

  options: string[];

  icon: LucideIcon;

  badge: string;

  image: string;

}



const CATEGORY_PRODUCT_SLUGS: Record<(typeof MANUFACTURE_CATEGORY_KEYS)[number], string> = {
  pureOils: "argan-oil",
  blackSoap: "black-soap",
  ghassoulClay: "ghassoul-clay",
  floralWaters: "rose-water",
  botanicalPowders: "nila-powder",
  hammamKits: "",
};

function buildManufactureCategories(t: typeof enPrivateLabelPage): ManufactureCategory[] {

  return MANUFACTURE_CATEGORY_KEYS.map((key) => {

    const cat = t.manufacture.categories[key];

    let description = cat.description;

    if (key === "pureOils" && businessFacts.carrierOils) {

      description += ` ${t.manufacture.alsoAvailable.replace("{oils}", businessFacts.carrierOils)}`;

    }

    const meta = MANUFACTURE_CATEGORY_META[key];

    return {

      key,
      title: cat.title,

      subtitle: cat.subtitle,

      description,

      options: cat.options,

      icon: meta.icon,

      badge: cat.badge,

      image: meta.image,

    };

  });

}



function PrivateLabelCtaButtons({ className }: { className?: string }) {

  const t = useTranslations("privateLabelPage");
  const locale = useLocale();
  const flip = locale === "ar";

  const whatsappUrl = `${getWhatsAppUrl()}?text=${encodeURIComponent(t.whatsappMessage)}`;

  return (

    <div className={`flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto ${className ?? ""}`}>

      <Link

        href={localizedPathForLocale("/contact", locale)}

        className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-rose text-white hover:bg-rose-dark font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-rose/25 transition-all duration-300 btn-glow"

      >

        <span>{t.ctaRequestQuote}</span>

        <ArrowRight className="w-4 h-4 rtl:rotate-180" />

      </Link>

      <a

        href={whatsappUrl}

        target="_blank"

        rel="noopener noreferrer"

        className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all duration-300 shadow-sm"

      >

        <MessageSquare className="w-4 h-4 text-rose" />

        <span>{t.ctaWhatsApp}</span>

      </a>

    </div>

  );

}



export default function PrivateLabelPageContent() {

  const t = useTranslations("privateLabelPage");
  const locale = useLocale();
  const flip = locale === "ar";

  const tHome = useTranslations("home");

  const faqItems = getPrivateLabelFaqItems(t);

  const manufactureCategories = buildManufactureCategories(t);



  const moqFor = (value: string | null) => value ?? t.moqFlexible;



  const serviceTiers = [

    {

      name: t.serviceTiers.whiteLabel.name,

      highlight: true,

      tag: t.serviceTiers.whiteLabel.tag,

      description: t.serviceTiers.whiteLabel.description,

      effort: t.serviceTiers.whiteLabel.effort,

      moq: moqFor(businessFacts.privateLabelMoq.whiteLabel),

      icon: Tag,

      features: t.serviceTiers.whiteLabel.features,

    },

    {

      name: t.serviceTiers.privateLabel.name,

      highlight: false,

      tag: t.serviceTiers.privateLabel.tag,

      description: t.serviceTiers.privateLabel.description,

      effort: t.serviceTiers.privateLabel.effort,

      moq: moqFor(businessFacts.privateLabelMoq.privateLabel),

      icon: PackageCheck,

      features: t.serviceTiers.privateLabel.features,

    },

    {

      name: t.serviceTiers.oem.name,

      highlight: false,

      tag: t.serviceTiers.oem.tag,

      description: t.serviceTiers.oem.description,

      effort: t.serviceTiers.oem.effort,

      moq: moqFor(businessFacts.privateLabelMoq.oem),

      icon: FlaskConical,

      features: t.serviceTiers.oem.features,

    },

  ];



  const sizesPrefix = t.packaging.availableSizesPrefix;



  const packagingOptions = [

    {

      title: t.packaging.bottles.title,

      icon: Droplets,

      desc: t.packaging.bottles.desc,

      detail: businessFacts.packagingSizes.bottles

        ? `${sizesPrefix} ${businessFacts.packagingSizes.bottles}`

        : t.packaging.bottles.standardDetail,

    },

    {

      title: t.packaging.jars.title,

      icon: Cylinder,

      desc: t.packaging.jars.desc,

      detail: businessFacts.packagingSizes.jars

        ? `${sizesPrefix} ${businessFacts.packagingSizes.jars}`

        : t.packaging.jars.standardDetail,

    },

    {

      title: t.packaging.pouches.title,

      icon: ShoppingBag,

      desc: t.packaging.pouches.desc,

      detail: businessFacts.packagingSizes.pouches

        ? `${sizesPrefix} ${businessFacts.packagingSizes.pouches}`

        : t.packaging.pouches.standardDetail,

    },

    {

      title: t.packaging.boxes.title,

      icon: Box,

      desc: t.packaging.boxes.desc,

      detail: businessFacts.packagingSizes.boxes

        ? businessFacts.packagingSizes.boxes

        : t.packaging.boxes.standardDetail,

    },

  ];



  const timelineItems = t.timeline.steps.map((step, index) => {

    const Icon = TIMELINE_ICONS[index] ?? MessageSquareText;

    let body: string;

    if (index === 4 && "bodyDefault" in step && step.bodyDefault && step.bodyWithLeadTime) {

      body = businessFacts.leadTimeWeeks

        ? step.bodyWithLeadTime.replace("{weeks}", String(businessFacts.leadTimeWeeks))

        : step.bodyDefault;

    } else {

      body = step.body ?? "";

    }

    return {

      step: step.step,

      title: step.title,

      icon: Icon,

      body,

    };

  });



  return (

    <main className="bg-background overflow-x-hidden">

      {/* HERO SECTION */}

      <section className="relative py-12 md:py-20 bg-gradient-to-b from-blush/20 via-background to-background">

        <div className={PAGE_CONTAINER}>

          <Breadcrumbs

            items={[

              { label: tHome.navHome, href: localizedPathForLocale("/", locale) },

              { label: tHome.navPrivateLabel },

            ]}

          />



          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-7">

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose/10 border border-rose/20 text-rose text-xs font-semibold uppercase tracking-wider mb-5">

                <Factory className="w-3.5 h-3.5" />

                <span>{t.hero.badge}</span>

              </div>



              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-foreground leading-[1.14] mb-5 tracking-tight">

                {t.hero.titleBefore}

                <span className="text-rose">{t.hero.titleHighlight}</span>

              </h1>



              <p className="text-base sm:text-lg text-foreground/85 font-light leading-relaxed mb-8">

                {t.hero.description}

              </p>



              <PrivateLabelCtaButtons />

            </div>



            <div className="lg:col-span-5">

              <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-lg group">

                <div className="aspect-[4/3] sm:aspect-[16/11] relative">

                  <Image

                    src={privateLabelHeroImage.src}

                    alt={privateLabelHeroImage.alt}

                    fill

                    sizes="(max-width: 1024px) 100vw, 45vw"

                    priority

                    className="object-cover transition-transform duration-500 group-hover:scale-105"

                  />

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-background">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.serviceTiers.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.serviceTiers.title}

            </h2>

            <p className={bodyText}>{t.serviceTiers.description}</p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

            {serviceTiers.map((tier) => {

              const Icon = tier.icon;

              return (

                <div

                  key={tier.name}

                  className={`flex flex-col rounded-3xl border transition-all duration-300 p-7 lg:p-8 relative ${

                    tier.highlight

                      ? "bg-card border-rose/50 shadow-xl ring-2 ring-rose/20"

                      : "bg-card border-border hover:border-rose/30 shadow-sm hover:shadow-md"

                  }`}

                >

                  {tier.highlight && (

                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-rose text-white text-xs font-semibold shadow-sm tracking-wide">

                      {tier.tag}

                    </span>

                  )}



                  <div className="flex items-center justify-between mb-6">

                    <div className="w-14 h-14 rounded-2xl bg-rose/15 text-rose flex items-center justify-center">

                      <Icon className="w-7 h-7" strokeWidth={2.5} />

                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 py-1 rounded-full bg-muted">

                      {t.moqPrefix} {tier.moq}

                    </span>

                  </div>



                  <h3 className="font-serif font-bold text-2xl text-foreground mb-3">{tier.name}</h3>

                  <p className="text-sm sm:text-base text-foreground/85 font-medium leading-relaxed mb-6">

                    {tier.description}

                  </p>



                  <div className="p-4 rounded-xl bg-muted/50 border border-border/50 text-sm mb-6">

                    <span className="font-bold text-foreground block mb-1">{t.effortLevelLabel}</span>

                    <span className="font-medium text-foreground/90">{tier.effort}</span>

                  </div>



                  <div className="mt-auto pt-6 border-t border-border/60">

                    <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">

                      {t.keyBenefitsLabel}

                    </p>

                    <ul className="space-y-2.5">

                      {tier.features.map((feat) => (

                        <li

                          key={feat}

                          className="flex items-start gap-2.5 text-sm text-foreground/90 font-medium"

                        >

                          <Check

                            className="w-5 h-5 text-rose shrink-0 mt-0.5"

                            strokeWidth={2.75}

                          />

                          <span>{feat}</span>

                        </li>

                      ))}

                    </ul>

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-blush/10">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.manufacture.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.manufacture.title}

            </h2>

            <p className={bodyText}>{t.manufacture.description}</p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">

            {manufactureCategories.map((cat) => (

              <div

                key={cat.title}

                className="group flex flex-col rounded-3xl bg-card border border-border/80 shadow-sm hover:shadow-xl hover:border-rose/40 transition-all duration-300 overflow-hidden"

              >

                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">

                  <Image

                    src={cat.image}

                    alt={cat.title}

                    fill

                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"

                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-300" />



                  <div className="absolute bottom-3.5 left-4 right-4 text-white">

                    <h3 className="font-serif font-bold text-xl drop-shadow-sm text-white mb-0.5">{cat.title}</h3>

                    <p className="text-xs font-medium text-rose-200/90 tracking-wide">{cat.subtitle}</p>

                  </div>

                </div>



                <div className="flex flex-col flex-1 p-6">

                  <p className="text-xs sm:text-sm text-foreground/80 font-light leading-relaxed mb-5">

                    {cat.description}

                  </p>



                  <div className="mt-auto pt-4 border-t border-border/60">

                    <p className="text-[11px] font-bold text-foreground/90 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">

                      <span className="w-1.5 h-1.5 rounded-full bg-rose inline-block" />

                      {t.manufactureOptionsLabel}

                    </p>

                    <ul className="space-y-2">

                      {cat.options.map((opt) => (

                        <li key={opt} className="flex items-center gap-2 text-xs text-foreground/85 font-medium">

                          <div className="w-4 h-4 rounded-full bg-rose/10 border border-rose/30 text-rose flex items-center justify-center shrink-0">

                            <Check className="w-2.5 h-2.5 stroke-[3]" />

                          </div>

                          <span>{opt}</span>
                        </li>
                      ))}
                    </ul>
                    {CATEGORY_PRODUCT_SLUGS[cat.key] ? (
                      <div className="mt-4 pt-3 border-t border-border/40">
                        <Link
                          href={localizedPathForLocale(`/products/${CATEGORY_PRODUCT_SLUGS[cat.key]}`, locale)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose hover:underline"
                        >
                          <span>
                            {locale === "fr"
                              ? "Voir les spécifications vrac"
                              : locale === "ar"
                              ? "عرض مواصفات المنتج بالجملة"
                              : "View bulk ingredient specs"}
                          </span>
                          <ArrowRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
                        </Link>
                      </div>
                    ) : (
                      <div className="mt-4 pt-3 border-t border-border/40">
                        <Link
                          href={localizedPathForLocale("/products", locale)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose hover:underline"
                        >
                          <span>
                            {locale === "fr"
                              ? "Explorer le catalogue produits"
                              : locale === "ar"
                              ? "استكشاف منتجات الكتالوج"
                              : "Explore full products catalog"}
                          </span>
                          <ArrowRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
                        </Link>
                      </div>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>



          <div className="mt-12 text-center">

            <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border shadow-xs text-sm text-foreground font-light">

              <span>{t.manufacture.ctaQuestion}</span>

              <Link href={localizedPathForLocale("/contact", locale)} className="text-rose font-semibold hover:underline">

                {t.manufacture.ctaLink}

              </Link>

            </p>

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-background">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.responsibilities.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.responsibilities.title}

            </h2>

            <p className={bodyText}>{t.responsibilities.description}</p>

          </div>



          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <div>

                  <h3 className="font-serif font-bold text-2xl text-foreground">{t.responsibilities.youDecideTitle}</h3>

                  <p className="text-xs text-muted-foreground font-light">{t.responsibilities.youDecideSubtitle}</p>

                </div>

              </div>



              <div className="space-y-4">

                {t.responsibilities.youDecide.map((item, idx) => (

                  <div key={idx} className="flex gap-3.5 p-4 rounded-2xl bg-card border border-border/60 shadow-2xs">

                    <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />

                    <div>

                      <h4 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h4>

                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>

                    </div>

                  </div>

                ))}

              </div>

            </div>



            <div className="rounded-3xl border border-border bg-card p-8 lg:p-10 shadow-sm">

              <div className="flex items-center gap-3 mb-6">

                <div>

                  <h3 className="font-serif font-bold text-2xl text-foreground">{t.responsibilities.weHandleTitle}</h3>

                  <p className="text-xs text-muted-foreground font-light">{t.responsibilities.weHandleSubtitle}</p>

                </div>

              </div>



              <div className="space-y-4">

                {t.responsibilities.weHandle.map((item, idx) => (

                  <div key={idx} className="flex gap-3.5 p-4 rounded-2xl bg-card border border-border/60 shadow-2xs">

                    <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />

                    <div>

                      <h4 className="text-sm font-semibold text-foreground mb-0.5">{item.title}</h4>

                      <p className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-blush/10">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.timeline.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.timeline.title}

            </h2>

            <p className={bodyText}>{t.timeline.description}</p>

          </div>



          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {timelineItems.map((item) => {

              const Icon = item.icon;

              return (

                <div

                  key={item.step}

                  className="flex flex-col p-7 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 relative group"

                >

                  <div className="mb-5">

                    <div className="w-12 h-12 rounded-2xl bg-rose/10 text-rose flex items-center justify-center group-hover:bg-rose group-hover:text-white transition-colors duration-300">

                      <Icon className="w-6 h-6" strokeWidth={1.75} />

                    </div>

                  </div>



                  <h3 className="font-serif font-bold text-xl text-foreground mb-2">{item.title}</h3>

                  <p className="text-sm text-foreground/80 font-light leading-relaxed mt-auto">

                    {item.body}

                  </p>

                </div>

              );

            })}

          </div>



          <div className="mt-12 text-center">

            <PrivateLabelCtaButtons className="justify-center mx-auto" />

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-background">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.packaging.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.packaging.title}

            </h2>

            <p className={bodyText}>{t.packaging.description}</p>

          </div>



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {packagingOptions.map((pkg) => {

              const Icon = pkg.icon;

              return (

                <div key={pkg.title} className="p-7 rounded-3xl bg-card border border-border shadow-sm flex flex-col">

                  <div className="w-12 h-12 rounded-2xl bg-rose/10 text-rose flex items-center justify-center mb-5">

                    <Icon className="w-6 h-6" strokeWidth={1.75} />

                  </div>

                  <h3 className="font-serif font-bold text-xl text-foreground mb-2">{pkg.title}</h3>

                  <p className="text-sm text-foreground/80 font-light leading-relaxed mb-4">{pkg.desc}</p>

                  <div className="mt-auto pt-4 border-t border-border/50 text-xs font-medium text-rose">

                    {pkg.detail}

                  </div>

                </div>

              );

            })}

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-blush/10">

        <div className={PAGE_CONTAINER}>

          <div className="max-w-5xl mx-auto rounded-3xl bg-card border border-border p-8 md:p-12 shadow-sm">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-7">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose/10 text-rose text-xs font-semibold uppercase tracking-wider mb-4">

                  <FileCheck className="w-3.5 h-3.5" />

                  <span>{t.compliance.badge}</span>

                </div>

                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

                  {t.compliance.title}

                </h2>

                <p className="text-sm md:text-base text-foreground/85 font-light leading-relaxed mb-6">

                  {t.compliance.description}

                </p>



                <div className="space-y-3">

                  {t.compliance.items.map((item) => (

                    <div key={item} className="flex items-center gap-3 text-sm text-foreground/90 font-light">

                      <CheckCircle2 className="w-4 h-4 text-rose shrink-0" />

                      <span>{item}</span>

                    </div>

                  ))}

                </div>

              </div>



              <div className="lg:col-span-5 flex flex-col gap-3">

                <div className="p-5 rounded-2xl bg-muted/60 border border-border text-center">

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">

                    {t.compliance.markets.eu.label}

                  </span>

                  <span className="text-lg font-bold text-foreground">{t.compliance.markets.eu.value}</span>

                </div>

                <div className="p-5 rounded-2xl bg-muted/60 border border-border text-center">

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">

                    {t.compliance.markets.uk.label}

                  </span>

                  <span className="text-lg font-bold text-foreground">{t.compliance.markets.uk.value}</span>

                </div>

                <div className="p-5 rounded-2xl bg-muted/60 border border-border text-center">

                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">

                    {t.compliance.markets.us.label}

                  </span>

                  <span className="text-lg font-bold text-foreground">{t.compliance.markets.us.value}</span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="py-16 md:py-24 bg-background">

        <div className={PAGE_CONTAINER}>

          <div className="text-center max-w-3xl mx-auto mb-14">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

              {t.mistakes.eyebrow}

            </p>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

              {t.mistakes.title}

            </h2>

            <p className={bodyText}>{t.mistakes.description}</p>

          </div>



          <div className="flex flex-wrap justify-center gap-5 md:gap-6">

            {t.mistakes.items.map((item, idx) => (

              <div

                key={idx}

                className="w-full md:w-[calc(50%-1.25rem)] lg:w-[31%] max-w-[400px] p-6 lg:p-7 rounded-3xl bg-card border border-border shadow-sm flex flex-col hover:border-rose/30 transition-colors"

              >

                <h3 className="font-serif font-bold text-base text-foreground leading-snug mb-3">

                  {item.title}

                </h3>



                <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">

                  {item.body}

                </p>



                <div className="mt-auto pt-4 border-t border-border/50 text-xs text-rose font-medium leading-relaxed">

                  <span className="font-semibold text-foreground block mb-1">{t.mistakesRecommendationLabel}</span>

                  {item.solution}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>



      {faqItems.length > 0 && (

        <section className="py-16 md:py-24 bg-blush/10">

          <div className={PAGE_CONTAINER}>

            <div className="text-center max-w-3xl mx-auto mb-14">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">

                {t.faq.eyebrow}

              </p>

              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">

                {t.faq.title}

              </h2>

              <p className={bodyText}>{t.faq.description}</p>

            </div>



            <div className="max-w-3xl mx-auto space-y-4">

              {faqItems.map((faq) => (

                <details

                  key={faq.question}

                  className="group rounded-2xl border border-border bg-card overflow-hidden shadow-2xs transition-all duration-200"

                >

                  <summary className="cursor-pointer list-none p-6 text-base md:text-lg font-semibold text-foreground hover:text-rose transition-colors flex items-center justify-between gap-4">

                    <span>{faq.question}</span>

                    <span className="w-7 h-7 rounded-full bg-rose/10 text-rose flex items-center justify-center shrink-0 text-xl font-bold group-open:rotate-45 transition-transform duration-300">

                      +

                    </span>

                  </summary>

                  <div className="px-6 pb-6 text-sm md:text-base text-foreground/80 font-light leading-relaxed border-t border-border/50 pt-4">

                    {faq.answer}

                  </div>

                </details>

              ))}

            </div>

          </div>

        </section>

      )}

    </main>

  );

}


