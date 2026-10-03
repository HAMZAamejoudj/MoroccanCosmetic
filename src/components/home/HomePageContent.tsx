"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import type { SiteLocale } from "@/i18n/locale";
import type enHomePage from "@/i18n/locales/en/homePage.json";
import type enHome from "@/i18n/locales/en/home.json";
import type enBlog from "@/i18n/locales/en/blog.json";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ClipboardList,
  FileCheck,
  FlaskConical,
  Globe2,
  Mail,
  Receipt,
  Plane,
  ShieldCheck,
  Store,
  Truck,
  Droplet,
  Package,
  Tag,
  MessageSquare,
  BookOpen,
  Settings,
} from "lucide-react";
import { businessFacts } from "@/config/businessFacts";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { localizedPathForLocale } from "@/lib/localeCatalog";
import { getHomeFaqItems } from "./homeFaq";
import { homeImages } from "./homeImages";
import LatestGuidesSection, { type LatestGuidePost } from "./LatestGuidesSection";
import { PAGE_CONTAINER } from "@/lib/pageContainer";

const bodyText = "text-muted-foreground font-light leading-relaxed";

const CATALOG_IMAGES = [
  homeImages.arganOil,
  homeImages.pricklyPearOil,
  homeImages.blackSoap,
  homeImages.ghassoulClay,
  homeImages.roseWater,
  homeImages.orangeBlossomWater,
  homeImages.nilaPowder,
  homeImages.sidrPowder,
  homeImages.akerFassi,
] as const;

const DOC_ICONS = [ClipboardList, ShieldCheck, FileCheck, BadgeCheck, Receipt] as const;
const AUDIENCE_ICONS = [Truck, Building2, Store, FlaskConical] as const;
const ORDER_ICONS = [MessageSquare, BookOpen, FileCheck, Settings, Plane] as const;
const FACTORY_ICONS = [Building2, ClipboardList, ShieldCheck, Tag] as const;

function HeroTrustPoints({
  factoryLabel,
  batchDocsLabel,
  bulkLabel,
  exportLabel,
}: {
  factoryLabel: string;
  batchDocsLabel: string;
  bulkLabel: string | null;
  exportLabel: string | null;
}) {
  const points: { text: string; icon: typeof Building2 }[] = [
    { text: factoryLabel, icon: Building2 },
  ];
  if (bulkLabel) {
    points.push({ text: bulkLabel, icon: Package });
  }
  points.push({ text: batchDocsLabel, icon: FileCheck });
  if (exportLabel) {
    points.push({ text: exportLabel, icon: Globe2 });
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3.5 mb-8">
      {points.map(({ text, icon: Icon }) => (
        <li key={text} className="flex items-center gap-2.5 text-sm text-[#4a3d32]">
          <Icon className="w-4 h-4 text-rose shrink-0" strokeWidth={2} />
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}

type HomeCopy = typeof enHomePage;
type NavCopy = typeof enHome;
type BlogCopy = typeof enBlog;

export default function HomePageContent({
  locale,
  copy: t,
  nav: tNav,
  blog: tBlog,
  latestGuides,
}: {
  locale: SiteLocale;
  copy: HomeCopy;
  nav: NavCopy;
  blog: BlogCopy;
  latestGuides: LatestGuidePost[];
}) {
  const faqItems = getHomeFaqItems(t);
  const flipArrow = locale === "ar";
  const whatsappUrl = getWhatsAppUrl();

  const bulkTrust =
    businessFacts.moq != null
      ? t.heroTrustBulkFrom.replace("{{moq}}", businessFacts.moq)
      : null;
  const exportTrust =
    businessFacts.exportCountryCount != null
      ? t.heroTrustExport.replace("{{count}}", String(businessFacts.exportCountryCount))
      : null;

  const catalogProductCards = t.catalogProducts.map((product, i) => ({
    ...product,
    image: CATALOG_IMAGES[i],
  }));

  const orderSteps = t.orderSteps.map((step, i) => ({
    ...step,
    icon: ORDER_ICONS[i],
  }));

  const documentItems = t.docItems.map((doc, i) => {
    let title = doc.title;
    if (i === 3 && businessFacts.coaProducts) {
      title = t.docCoaWithProducts.replace("{{products}}", businessFacts.coaProducts);
    }
    return { ...doc, title, icon: DOC_ICONS[i] };
  });

  return (
    <main>
      <section
        id="home"
        className="relative min-h-[100svh] flex flex-col justify-center pt-28 pb-14 md:pt-32 md:pb-16 overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={homeImages.hero.src}
            alt={homeImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[72%_center] md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3d2e22]/45 via-[#8b7355]/15 to-transparent" />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20">
          <div className="home-hero-card-slot relative isolate">
            <div
              className="pointer-events-none absolute -top-10 -left-8 z-0 h-40 w-40 rounded-full bg-[#f5ead8]/55 blur-[48px] md:-top-12 md:-left-10 md:h-52 md:w-52 md:blur-[64px]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -top-2 left-8 z-0 h-24 w-[85%] rounded-[2rem] bg-[#e8dcc8]/35 blur-2xl md:blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] shadow-[0_0_70px_20px_rgba(210,190,160,0.35)]"
              aria-hidden
            />
            <div className="home-hero-card relative z-10 rounded-3xl bg-[#ebe4d8]/88 backdrop-blur-md text-[#2c241c] p-7 md:p-10 border border-[#c9b896]/55 shadow-[0_24px_55px_-18px_rgba(60,48,36,0.35)]">
            <p className="text-[11px] tracking-[0.18em] uppercase font-semibold text-[#6b5a48] mb-4">
              {t.heroEyebrow}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-serif font-bold tracking-tight leading-[1.15] mb-5 text-[#2a2218]">
              {t.heroTitle}{" "}
              <span className="text-rose">{t.heroTitleAccent}</span>
            </h1>
            <p className="text-sm md:text-base text-[#4a3f35] leading-relaxed mb-6 font-light">
              {t.heroIntro}
            </p>
            <HeroTrustPoints
              factoryLabel={t.heroTrustFactory}
              batchDocsLabel={t.heroTrustBatchDocs}
              bulkLabel={bulkTrust}
              exportLabel={exportTrust}
            />
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={localizedPathForLocale("/contact", locale)}
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-rose text-white hover:bg-rose-dark shadow-lg hover:shadow-rose/30 font-semibold text-sm transition-all duration-300 btn-glow"
              >
                {t.heroBtnCatalog}
                <ArrowRight className={`w-4 h-4 ${flipArrow ? "rotate-180" : ""}`} />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full border border-[#3d342a]/25 bg-[#3d342a]/5 text-[#2c241c] hover:bg-[#3d342a]/10 font-semibold text-sm transition-all duration-300"
              >
                {tNav.chatWhatsApp}
              </a>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-blush/10 border-b border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">
              {t.catalogEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">
              {t.catalogTitle}
            </h2>
            <p className={`text-lg text-foreground/90 font-light leading-relaxed ${bodyText} !max-w-2xl mx-auto`}>
              {t.catalogIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {catalogProductCards.map(({ image, title, description }) => (
              <article
                key={title}
                className="flex flex-col h-full rounded-2xl bg-card border border-border shadow-sm overflow-hidden card-lift hover:shadow-md hover:border-rose/20 transition-all duration-200"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-base font-serif font-semibold text-foreground mb-2">{title}</p>
                  <p className={`text-sm leading-relaxed flex-grow text-foreground/85 font-light`}>{description}</p>
                </div>
              </article>
            ))}
          </div>
          {businessFacts.carrierOils ? (
            <p className={`mt-8 text-sm max-w-2xl mx-auto ${bodyText}`}>
              <strong className="font-semibold text-foreground">{t.carrierOilsLabel}</strong>{" "}
              {businessFacts.carrierOils}
            </p>
          ) : null}
          {businessFacts.essentialOils ? (
            <p className={`mt-3 text-sm max-w-2xl mx-auto ${bodyText}`}>
              <strong className="font-semibold text-foreground">{t.essentialOilsLabel}</strong>{" "}
              {businessFacts.essentialOils}
            </p>
          ) : null}
          <div className="mt-10">
            <Link
              href={localizedPathForLocale("/products", locale)}
              className="inline-flex items-center gap-2 text-rose font-semibold hover:underline"
            >
              {t.catalogLink}
              <ArrowRight className={`w-4 h-4 ${flipArrow ? "rotate-180" : ""}`} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              {t.buyTitle}
            </h2>
            <p className={bodyText}>{t.buyIntro}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-rose/30 transition-all duration-300 card-lift">
              <div className="w-12 h-12 rounded-xl bg-rose/10 text-rose flex items-center justify-center mb-6">
                <Droplet className="w-6 h-6" />
              </div>
              <p className="text-xl font-serif font-semibold mb-3 text-foreground">{t.buyBulkTitle}</p>
              <p className={`mb-6 min-h-[60px] ${bodyText}`}>{t.buyBulkDesc}</p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">{t.buyBestFor}</p>
                <p className={`text-sm ${bodyText}`}>{t.buyBulkBest}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-rose/30 transition-all duration-300 card-lift relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose to-gold"></div>
              <div className="w-12 h-12 rounded-xl bg-rose/10 text-rose flex items-center justify-center mb-6">
                <Package className="w-6 h-6" />
              </div>
              <p className="text-xl font-serif font-semibold mb-3 text-foreground">{t.buyRetailTitle}</p>
              <p className={`mb-6 min-h-[60px] ${bodyText}`}>{t.buyRetailDesc}</p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">{t.buyBestFor}</p>
                <p className={`text-sm ${bodyText}`}>{t.buyRetailBest}</p>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md hover:border-rose/30 transition-all duration-300 card-lift">
              <div className="w-12 h-12 rounded-xl bg-rose/10 text-rose flex items-center justify-center mb-6">
                <Tag className="w-6 h-6" />
              </div>
              <p className="text-xl font-serif font-semibold mb-3 text-foreground">{t.buyPlTitle}</p>
              <p className={`mb-6 min-h-[60px] ${bodyText}`}>{t.buyPlDesc}</p>
              <div className="pt-6 border-t border-border/50">
                <p className="text-sm font-semibold text-foreground mb-1">{t.buyBestFor}</p>
                <p className={`text-sm ${bodyText}`}>{t.buyPlBest}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className={`inline-block px-6 py-3 rounded-full bg-blush/20 ${bodyText}`}>
              <span className="font-medium text-foreground me-1">{t.buyNotSure}</span>
              <Link
                href={localizedPathForLocale("/contact", locale)}
                className="text-rose hover:underline font-medium"
              >
                {t.buyNotSureLink}
              </Link>
              {t.buyNotSureEnd}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background border-b border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">
              {t.partnersEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
              {t.partnersTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {t.audience.map((item, i) => {
              const Icon = AUDIENCE_ICONS[i];
              return (
              <div
                key={item.title}
                className="flex h-full gap-5 items-start rounded-2xl bg-card border border-border p-8 shadow-sm card-lift hover:shadow-md transition-all duration-200"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose">
                  <Icon className="w-6 h-6" strokeWidth={1.75} aria-hidden />
                </span>
                <p className={`text-lg text-foreground/90 font-light leading-relaxed`}>
                  <strong className="font-semibold text-foreground">{item.title}</strong>{" "}
                  {item.text}
                </p>
              </div>
            );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                {t.factoryTitle}
              </h2>
              <p className={`${bodyText} mb-6`}>{t.factoryIntro}</p>
              
              <div className="space-y-3 mt-6 mb-8">
                {t.factoryPoints.map((item, i) => {
                  const Icon = FACTORY_ICONS[i];
                  return (
                  <div key={item.title} className="flex gap-4 p-4 rounded-2xl bg-card border border-border/40 shadow-sm hover:shadow-md hover:border-rose/30 transition-all duration-300 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-rose/10 flex items-center justify-center text-rose group-hover:bg-rose group-hover:text-white group-hover:scale-105 group-hover:-rotate-3 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{item.title}</p>
                      <p className={`${bodyText} text-sm`}>{item.desc}</p>
                    </div>
                  </div>
                );
                })}
              </div>

              <div className="p-5 rounded-2xl bg-foreground/5 border border-foreground/10 flex items-start gap-3">
                <Check className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {t.factoryTip}
                </p>
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden border border-border shadow-xl aspect-[4/3] min-h-[280px] lg:aspect-auto lg:min-h-[380px] lg:h-full">
              <Image
                src={homeImages.manufacturing.src}
                alt={homeImages.manufacturing.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                loading="lazy"
                className="object-cover object-center scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className={PAGE_CONTAINER}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              {t.orderTitle}
            </h2>
            <p className={bodyText}>{t.orderIntro}</p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-stretch md:gap-2 lg:gap-3">
            {orderSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <Fragment key={idx}>
                  <article
                    className="relative flex flex-1 min-w-0 gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-rose/30 hover:shadow-md card-lift md:flex-col md:gap-0 md:p-4 md:text-center lg:p-5"
                  >
                    <div className="relative mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose/10 text-rose md:mx-auto md:mb-5 md:mt-0 lg:h-14 lg:w-14">
                      <Icon className="h-6 w-6 lg:h-7 lg:w-7" strokeWidth={1.75} />
                      <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose text-[10px] font-bold text-white ring-2 ring-card lg:h-6 lg:w-6 lg:text-[11px]">
                        {idx + 1}
                      </span>
                    </div>
                    <p className={`flex-1 text-base md:flex-none ${bodyText}`}>
                      <span className="mb-1 block font-semibold text-foreground text-[1.05rem] leading-snug md:mb-2 md:text-[0.95rem] lg:text-[1.05rem]">
                        {step.title}
                      </span>
                      {step.detail ? (
                        <span className="text-sm leading-relaxed md:text-[0.8rem] lg:text-[0.85rem]">
                          {step.detail}
                        </span>
                      ) : null}
                    </p>
                  </article>
                  {idx < orderSteps.length - 1 ? (
                    <div
                      className="hidden w-5 shrink-0 items-center justify-center self-center text-rose/30 md:flex lg:w-6"
                      aria-hidden
                    >
                      <ArrowRight
                        className={`h-5 w-5 lg:h-6 lg:w-6 ${flipArrow ? "rotate-180" : ""}`}
                        strokeWidth={2}
                      />
                    </div>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 bg-background border-b border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="text-center mb-10 md:mb-12 max-w-2xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">
              {t.docsEyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-foreground">
              {t.docsTitle}
            </h2>
            <p className="text-lg text-foreground/90 font-light leading-relaxed">
              {t.docsIntro}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border shadow-md">
              <Image
                src={homeImages.qualityDocuments.src}
                alt={homeImages.qualityDocuments.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 560px"
                loading="lazy"
                className="object-cover object-center"
              />
            </div>
            <div className="flex flex-col gap-2.5 lg:gap-3 max-lg:justify-start lg:justify-between lg:min-h-full">
              {documentItems.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="flex gap-4 items-start rounded-2xl bg-card border border-border p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-rose/20 bg-secondary text-rose">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-base font-semibold text-foreground leading-snug mb-2">
                      {title}
                    </p>
                    <p className={`text-sm leading-relaxed ${bodyText}`}>{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className={`${PAGE_CONTAINER} max-w-4xl mx-auto text-center`}>
          <div className="w-16 h-16 mx-auto bg-rose/10 rounded-full flex items-center justify-center mb-6">
            <Plane className="w-8 h-8 text-rose" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
            {t.shippingTitle}
          </h2>
          <p className={`text-lg ${bodyText}`}>
            {t.shippingBody}
            {businessFacts.shippingPortsIncoterms
              ? ` ${businessFacts.shippingPortsIncoterms}`
              : null}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className={`${PAGE_CONTAINER} max-w-3xl mx-auto`}>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-10 text-center">
            {t.faqTitle}
          </h2>
          <div className="space-y-3">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-border bg-card overflow-hidden"
              >
                <summary className="cursor-pointer list-none px-5 py-4 flex items-center justify-between gap-4">
                  <span className="font-serif font-semibold text-foreground text-start text-base md:text-lg">
                    {item.question}
                  </span>
                  <span className="text-rose text-xl leading-none" aria-hidden>
                    +
                  </span>
                </summary>
                <div className={`px-5 pb-5 text-sm md:text-base border-t border-border pt-4 ${bodyText}`}>
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Guides Section */}
      <LatestGuidesSection posts={latestGuides} copy={t} blog={tBlog} locale={locale} />

    </main>
  );
}
