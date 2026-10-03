"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "../context/LanguageContext";
import { useTranslations } from "@/i18n/useTranslations";
import { FlagIcon, flagLabelForLanguage } from "./FlagIcon";
import { getWhatsAppUrl, siteConfig } from "@/config/siteConfig";

const LANGUAGES: { code: Language }[] = [
  { code: "en" },
  { code: "fr" },
  { code: "ar" },
];

const navLinkClass =
  "shrink-0 whitespace-nowrap text-[15px] xl:text-base text-foreground/75 hover:text-foreground font-medium transition-colors duration-200";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage } = useLanguage();
  const t = useTranslations("home");

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  const navItems = [
    { href: "/", label: t.navHome },
    { href: "/about/", label: t.navAbout },
    { href: "/products/", label: t.navProducts },
    { href: "/benefits/", label: t.navBenefits },
    { href: "/private-label-moroccan-cosmetics/", label: t.navPrivateLabel },
    { href: "/blog/", label: t.navBlog },
    { href: "/contact/", label: t.navContact },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <nav className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 h-20 lg:h-24 flex items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8 xl:gap-12">
        <Link
          href="/"
          className="site-brand flex items-center shrink-0"
          dir="ltr"
          aria-label={siteConfig.brandName}
        >
          <Image
            src="/moroccan-cosmetic-logo.svg"
            alt={`${siteConfig.brandName} logo`}
            width={2172}
            height={724}
            priority
            className="h-11 lg:h-14 w-auto max-w-[12rem] lg:max-w-[15rem] object-contain object-left"
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-8 2xl:gap-10 min-w-0">
          {navItems.map(({ href, label }) => (
            <Link key={href} href={href} className={navLinkClass}>
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setIsLangOpen((o) => !o)}
              className="flex items-center gap-1.5 h-9 px-2.5 rounded-md border border-border bg-background hover:bg-muted transition-colors duration-200 cursor-pointer"
              aria-label="Select language"
            >
              <FlagIcon
                language={currentLang.code}
                className="h-3.5 w-[1.35rem] shrink-0 overflow-hidden rounded-[2px] border border-black/10"
              />
              <ChevronDown className={`w-3 h-3 text-foreground/50 transition-transform duration-200 ${isLangOpen ? "rotate-180" : ""}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-border bg-background shadow-xl py-1 z-50 animate-fade-in">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => { setLanguage(lang.code); setIsLangOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors cursor-pointer ${
                      language === lang.code
                        ? "text-rose font-semibold bg-rose/5"
                        : "text-foreground/75 hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <FlagIcon language={lang.code} />
                    <span>{flagLabelForLanguage(lang.code)}</span>
                    {language === lang.code && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-rose" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/contact/"
            className="inline-flex items-center justify-center h-11 px-5 rounded-lg border border-border bg-background hover:bg-muted text-foreground font-semibold text-sm transition-colors duration-200 whitespace-nowrap"
          >
            {t.headerRequestQuote}
          </Link>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <div className="flex items-center gap-0.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`px-1.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  language === lang.code
                    ? "bg-rose text-white"
                    : "text-foreground/50"
                }`}
                title={flagLabelForLanguage(lang.code)}
                aria-label={flagLabelForLanguage(lang.code)}
              >
                <FlagIcon language={lang.code} className="h-3.5 w-5 shrink-0 overflow-hidden rounded-[2px] border border-black/10" />
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md hover:bg-muted text-foreground"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-6 flex flex-col gap-1 animate-fade-in">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-rose py-3 px-2 rounded-lg hover:bg-muted transition-colors font-medium text-base"
            >
              {label}
            </Link>
          ))}

          <hr className="border-border my-3" />

          <Link
            href="/contact/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-rose text-white font-semibold transition-all duration-300 mb-3"
          >
            {t.headerRequestQuote}
          </Link>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold transition-all duration-300"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            {t.chatWhatsApp}
          </a>
        </div>
      )}
    </header>
  );
}
