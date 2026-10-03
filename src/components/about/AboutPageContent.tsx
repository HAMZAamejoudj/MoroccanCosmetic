"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Clock,
  Droplet,
  FileText,
  MapPin,
  MessageCircle,
  MessageSquare,
  Mountain,
  Package,
  Plus,
  Sun,
  UserCheck,
} from "lucide-react";
import { businessFacts } from "@/config/businessFacts";
import { getWhatsAppUrl } from "@/config/siteConfig";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import { useTranslations } from "@/i18n/useTranslations";
import AboutHeroVisual from "./AboutHeroVisual";
import { aboutImages } from "./aboutImages";
import { getAboutFaqItems } from "./aboutFaq";
import { PAGE_CONTAINER } from "@/lib/pageContainer";
const bodyText =
  "text-base md:text-lg text-foreground/90 font-light leading-relaxed max-w-2xl";
const sectionPad = "py-14 md:py-20";
const creamSection = `${sectionPad} bg-background`;
const blushSection = `${sectionPad} bg-blush/10`;
const expectationCard =
  "flex h-full flex-col rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-all duration-200 card-lift hover:shadow-md";
const regionCard =
  "flex flex-row h-full gap-4 items-start rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 card-lift hover:shadow-md";

const REGION_ICONS: LucideIcon[] = [Droplet, Mountain, Sun];
const EXPECTATION_ICONS: LucideIcon[] = [MessageCircle, FileText, Package, UserCheck];

function IconBadge({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span
      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose/10 text-rose"
      aria-hidden
    >
      <Icon className="h-6 w-6" strokeWidth={1.75} />
    </span>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose mb-3">
      {children}
    </p>
  );
}

function AboutPhoto({
  src,
  alt,
  className,
  aspect = "4/3",
}: {
  src: string;
  alt: string;
  className?: string;
  aspect?: "4/3" | "3/4" | "16/10";
}) {
  const aspectClass =
    aspect === "3/4" ? "aspect-[3/4]" : aspect === "16/10" ? "aspect-[16/10]" : "aspect-[4/3]";
  return (
    <figure
      className={`rounded-2xl overflow-hidden border border-border bg-card shadow-sm ${className ?? ""}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className={`w-full ${aspectClass} object-cover`} />
    </figure>
  );
}

function PageShell({
  variant,
  className,
  children,
}: {
  variant: "cream" | "blush";
  className?: string;
  children: ReactNode;
}) {
  return (
    <section className={`${variant === "cream" ? creamSection : blushSection} ${className ?? ""}`}>
      <div className={PAGE_CONTAINER}>{children}</div>
    </section>
  );
}

export default function AboutPageContent() {
  const t = useTranslations("about");
  const tHome = useTranslations("home");
  const faqItems = getAboutFaqItems(t);
  const whatsappUrl = getWhatsAppUrl();
  const processes = t.facilityProcesses;
  const showFacility = processes.length > 0;
  const visitAddress = businessFacts.factoryFullAddress;
  const visitHours = businessFacts.openingHours;

  return (
    <main className="bg-background">
      <PageShell variant="cream">
        <Breadcrumbs
          items={[
            { label: tHome.navHome, href: "/" },
            { label: tHome.navAbout },
          ]}
        />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          <div className="lg:col-span-7">
            <SectionEyebrow>{t.heroEyebrow}</SectionEyebrow>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-semibold text-foreground leading-[1.12] mb-4">
              {t.heroTitle}
            </h1>
            <p className={bodyText}>{t.heroIntro}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/contact/"
                className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-8 rounded-full bg-rose text-white hover:bg-rose-dark font-semibold shadow-md hover:shadow-lg hover:shadow-rose/25 transition-all duration-200 btn-glow"
              >
                {t.ctaContact}
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center h-12 px-8 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold transition-all duration-200"
              >
                {t.ctaWhatsapp}
              </a>
            </div>
          </div>
          <div className="w-full lg:col-span-5">
            <AboutHeroVisual />
          </div>
        </div>
      </PageShell>

      <PageShell variant="blush">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div>
            <SectionEyebrow>{t.locationEyebrow}</SectionEyebrow>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-5">
              {t.locationTitle}
            </h2>
            <p className={bodyText}>{t.locationBody}</p>
            <div className="mt-8 space-y-4 flex flex-col max-w-2xl">
              {t.regions.map((region, idx) => {
                const Icon = REGION_ICONS[idx] ?? Droplet;
                return (
                  <article key={region.title} className={regionCard}>
                    <IconBadge icon={Icon} />
                    <div className="min-w-0">
                      <h3 className="font-serif font-semibold text-lg text-foreground mb-1">
                        {region.title}
                      </h3>
                      <p className="text-base text-foreground/90 font-light leading-relaxed">
                        {region.line}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mt-6 lg:mt-14 xl:mt-20">
            <AboutPhoto
              src={aboutImages.exportPallet}
              alt={t.photoExportAlt}
            />
          </div>
        </div>
      </PageShell>

      {showFacility ? (
        <PageShell variant="cream">
          <SectionEyebrow>{t.facilityEyebrow}</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4 max-w-2xl">
            {t.facilityTitle}
          </h2>
          <p className={`${bodyText} mb-8`}>{t.facilityIntro}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {processes.map((step, idx) => (
              <article key={step.title} className={expectationCard}>
                <span
                  className="text-4xl font-serif font-bold text-rose/35 mb-3 tabular-nums"
                  aria-hidden
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-base text-foreground/90 font-light leading-relaxed">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <AboutPhoto src={aboutImages.bulkProduction} alt={t.photoBulkAlt} />
            <AboutPhoto src={aboutImages.orderPacking} alt={t.photoPackingAlt} />
          </div>
          {businessFacts.facilityPhotos.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {businessFacts.facilityPhotos.map((photo) => (
                <figure
                  key={photo.file}
                  className="rounded-2xl overflow-hidden border border-border bg-card shadow-sm"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photo.file} alt={photo.alt} className="w-full aspect-[4/3] object-cover" />
                  <figcaption className="p-4 text-sm text-foreground/80">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          ) : null}
        </PageShell>
      ) : null}

      <PageShell variant={showFacility ? "blush" : "cream"}>
        <div className="text-center mb-8 md:mb-10">
          <SectionEyebrow>{t.promiseEyebrow}</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {t.promiseTitle}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch auto-rows-fr">
          {t.expectations.map((item, idx) => {
            const Icon = EXPECTATION_ICONS[idx] ?? MessageCircle;
            return (
              <article key={item.title} className={expectationCard}>
                <IconBadge icon={Icon} />
                <h3 className="mt-4 font-serif font-semibold text-xl text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-base text-foreground/90 font-light leading-relaxed mt-auto">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </PageShell>

      <PageShell variant={showFacility ? "cream" : "blush"}>
        <div className="relative rounded-[2.5rem] bg-[#1a2230] text-white p-10 md:p-16 text-center shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose/25 via-transparent to-transparent opacity-60" />
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-5 tracking-tight mt-6">
              {t.visitTitle}
            </h2>
            <p className="text-base md:text-lg text-white/80 font-light mb-8 leading-relaxed">
              {t.visitBody}
            </p>

            {(visitAddress || visitHours) && (
              <dl className="mb-10 space-y-4 w-full max-w-xl text-base text-white/90 text-left bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-sm">
                {visitAddress ? (
                  <div className="flex gap-3">
                    <MapPin className="h-5 w-5 text-rose shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <dt className="font-semibold text-white mb-1">{t.visitAddressLabel}</dt>
                      <dd className="font-light text-white/80 leading-relaxed">{visitAddress}</dd>
                    </div>
                  </div>
                ) : null}
                {visitHours ? (
                  <div className="flex gap-3">
                    <Clock className="h-5 w-5 text-rose shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <dt className="font-semibold text-white mb-1">{t.visitHoursLabel}</dt>
                      <dd className="font-light text-white/80">{visitHours}</dd>
                    </div>
                  </div>
                ) : null}
              </dl>
            )}

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full bg-rose text-white hover:bg-rose-dark font-semibold text-sm shadow-md hover:shadow-lg hover:shadow-rose/25 transition-all duration-300 btn-glow"
              >
                <span>{t.ctaContact}</span>
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-full border border-border bg-card hover:bg-muted text-foreground font-semibold text-sm transition-all duration-300 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 text-rose" />
                <span>{t.ctaWhatsapp}</span>
              </a>
            </div>
          </div>
        </div>
      </PageShell>

      <PageShell variant={showFacility ? "blush" : "cream"}>
        <div className="text-center mb-8 md:mb-10">
          <SectionEyebrow>{t.faqEyebrow}</SectionEyebrow>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground">
            {t.faqTitle}
          </h2>
        </div>
        <div className="divide-y divide-border border border-border rounded-2xl bg-card overflow-hidden">
          {faqItems.map((item) => (
            <details key={item.question} className="group">
              <summary className="cursor-pointer list-none px-5 py-5 flex items-center justify-between gap-4 hover:bg-muted/40 transition-colors">
                <h3 className="font-serif font-semibold text-lg text-foreground text-start pe-4">
                  {item.question}
                </h3>
                <Plus
                  className="w-5 h-5 text-rose shrink-0 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <div className="px-5 pb-5 text-base text-foreground/90 font-light leading-relaxed border-t border-border pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
        <p className="mt-10 text-center text-base text-foreground/90">
          {t.faqStillQuestions}{" "}
          <Link href="/contact/" className="text-rose font-semibold hover:underline">
            {t.faqContactLink}
          </Link>
        </p>
      </PageShell>
    </main>
  );
}
