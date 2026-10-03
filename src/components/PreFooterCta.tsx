"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { PAGE_CONTAINER } from "@/lib/pageContainer";
import { useTranslations } from "@/i18n/useTranslations";

export default function PreFooterCta() {
  const t = useTranslations("home");
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="py-16 md:py-24 bg-background border-t border-border/40" aria-labelledby="pre-footer-cta-title">
      <div className={`${PAGE_CONTAINER} max-w-4xl mx-auto text-center`}>
        <div className="p-10 md:p-14 rounded-[2.5rem] bg-[#1a2230] text-white shadow-xl relative overflow-hidden">
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose/20 via-transparent to-transparent opacity-50"
            aria-hidden
          />
          <div className="relative z-10">
            <h2
              id="pre-footer-cta-title"
              className="text-3xl md:text-4xl font-serif font-semibold mb-6"
            >
              {t.preFooterTitle}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
              {t.preFooterDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-rose text-white hover:bg-rose-dark font-semibold shadow-lg hover:shadow-rose/30 transition-all duration-300 btn-glow"
              >
                {t.headerRequestQuote}
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 font-semibold transition-all duration-300"
              >
                {t.chatWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
