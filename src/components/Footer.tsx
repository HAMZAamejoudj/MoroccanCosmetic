"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { useLocale } from "@/context/LocaleContext";
import { localizedPathForLocale } from "@/lib/localeCatalog";
import { businessFacts } from "@/config/businessFacts";
import { getWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { siteImages } from "@/config/siteImages";
import PreFooterCta from "@/components/PreFooterCta";

function SocialLinks() {
  const { facebook, instagram, tiktok } = siteConfig.social;
  const links = [
    { url: facebook, label: "Facebook" },
    { url: instagram, label: "Instagram" },
    { url: tiktok, label: "TikTok" },
  ].filter((item): item is { url: string; label: string } => Boolean(item.url));

  if (links.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {links.map(({ url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-foreground/5 hover:bg-rose transition-all duration-300 text-foreground/80 hover:text-white flex items-center justify-center cursor-pointer"
          aria-label={label}
        >
          {label === "Facebook" && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          )}
          {label === "Instagram" && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          )}
          {label === "TikTok" && (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          )}
        </a>
      ))}
    </div>
  );
}

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold mb-6 text-foreground tracking-wide uppercase">
      {children}
    </p>
  );
}

export default function Footer() {
  const t = useTranslations("home");
  const locale = useLocale();
  const addressLine =
    businessFacts.factoryFullAddress ?? "Marrakech, Morocco";

  const navLinks = [
    { logical: "/", label: t.navHome },
    { logical: "/about", label: t.navAbout },
    { logical: "/products", label: t.navProducts },
    { logical: "/private-label-moroccan-cosmetics", label: t.navPrivateLabel },
    { logical: "/benefits", label: t.navBenefits },
    { logical: "/blog", label: t.navBlog },
    { logical: "/contact", label: t.navContact },
  ].map((item) => ({
    href: localizedPathForLocale(item.logical, locale),
    label: item.label,
  }));

  return (
    <footer id="footer" className="bg-secondary text-foreground font-sans">
      <PreFooterCta />
      <div className="pt-16 pb-8 border-t border-border/40">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-12 gap-10 xl:gap-6 2xl:gap-10 items-start">
          <div
            className={`footer-brand xl:col-span-3 flex flex-col w-full ${
              locale === "ar" ? "items-end" : "items-start text-start"
            }`}
            dir={locale === "ar" ? "ltr" : undefined}
          >
            <Link
              className="footer-brand-logo inline-flex items-center mb-6 shrink-0"
              dir="ltr"
              href={localizedPathForLocale("/", locale)}
              aria-label={siteConfig.brandName}
            >
              <Image
                src="/moroccan-cosmetic-logo.svg"
                alt={`${siteConfig.brandName} logo`}
                width={2172}
                height={724}
                className="h-10 md:h-12 w-auto max-w-[12rem] object-contain object-left"
              />
            </Link>
            <p
              className="footer-brand-desc text-sm leading-relaxed text-muted-foreground font-light mb-6 max-w-[16rem]"
              dir={locale === "ar" ? "rtl" : "ltr"}
            >
              {t.footerDesc}
            </p>
            <SocialLinks />
          </div>

          <div className="xl:col-span-3">
            <FooterHeading>{t.footerContactTitle}</FooterHeading>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a
                  href={`tel:${siteConfig.phoneE164}`}
                  className="inline-flex items-start gap-3 hover:text-rose transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-rose/10 text-rose shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" aria-hidden />
                  </div>
                  <span className="mt-1.5 font-medium">{siteConfig.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-3 hover:text-rose transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-rose/10 text-rose shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <span className="mt-1.5 font-medium">WhatsApp</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-3 group">
                <div className="p-2.5 rounded-full bg-rose/10 text-rose shrink-0">
                  <MapPin className="w-4 h-4" aria-hidden />
                </div>
                <span className="mt-1.5 font-medium">{addressLine}</span>
              </li>
              {businessFacts.companyRegistration ? (
                <li className="text-xs text-muted-foreground pl-12 max-w-[16rem] leading-relaxed">
                  {businessFacts.companyRegistration}
                </li>
              ) : null}
              <li className="min-w-0 max-w-full">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 min-w-0 max-w-full hover:text-rose transition-colors group"
                >
                  <div className="p-2.5 rounded-full bg-rose/10 text-rose shrink-0 group-hover:bg-rose group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" aria-hidden />
                  </div>
                  <span className="min-w-0 flex-1 whitespace-nowrap font-medium text-[11px] md:text-xs tracking-tight">
                    {siteConfig.email}
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="xl:col-span-2">
            <FooterHeading>{t.footerNavTitle}</FooterHeading>
            <ul className="grid grid-cols-1 gap-y-4 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-rose transition-colors font-medium flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-rose/40"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:col-span-2">
            <FooterHeading>{t.footerPayment}</FooterHeading>
            <div className="rounded-2xl bg-card border border-border/80 p-2 sm:p-3 flex items-center justify-center shadow-sm w-full h-32 xl:h-36 hover:shadow-md hover:border-rose/20 transition-all duration-300 overflow-hidden">
              <Image
                src={siteImages.paymentMethods.src}
                alt={siteImages.paymentMethods.alt}
                width={siteImages.paymentMethods.width}
                height={siteImages.paymentMethods.height}
                loading="lazy"
                className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="xl:col-span-2">
            <FooterHeading>{t.footerPartners}</FooterHeading>
            <div className="rounded-2xl bg-card border border-border/80 p-2 sm:p-3 flex items-center justify-center shadow-sm w-full h-32 xl:h-36 hover:shadow-md hover:border-rose/20 transition-all duration-300 overflow-hidden">
              <Image
                src={siteImages.shippingPartners.src}
                alt={siteImages.shippingPartners.alt}
                width={siteImages.shippingPartners.width}
                height={siteImages.shippingPartners.height}
                loading="lazy"
                className="w-full h-full object-contain scale-110 hover:scale-125 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 pt-6 border-t border-border/60 flex items-center justify-center">
        <p className="text-sm text-muted-foreground font-light text-center">
          {t.footerRights}
        </p>
      </div>
      </div>
    </footer>
  );
}
