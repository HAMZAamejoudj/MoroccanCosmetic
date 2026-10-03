"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { getWhatsAppUrl, siteConfig } from "@/config/siteConfig";

export default function ContactSection() {
  const t = useTranslations("home");

  return (
    <section id="contact" className="py-16 md:py-24 border-b border-border bg-blush/5">
      <div className="container-wide px-4 md:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-rose font-sans">{t.contactSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-6">
              {t.contactTitle}
            </h2>

            <div className="text-base text-muted-foreground mb-8 font-light leading-relaxed space-y-4">
              <p>{t.contactP1}</p>
              <p>{t.contactP2}</p>
              <p className="font-semibold text-rose">{t.contactP3}</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-full bg-rose/10 text-rose">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">Call / WhatsApp</span>
                  <a href={`tel:${siteConfig.phoneE164}`} className="text-base font-medium hover:text-rose transition-colors">{siteConfig.phoneDisplay}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-full bg-rose/10 text-rose">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">Email Us</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-base font-medium hover:text-rose transition-colors">{siteConfig.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-full bg-rose/10 text-rose">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide">Our Facility</span>
                  <span className="text-base font-medium">Marrakech, Morocco</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 rounded-3xl bg-card border border-border shadow-lg">
            <h3 className="text-xl font-serif font-semibold mb-2">{t.contactCardTitle}</h3>
            <p className="text-sm text-muted-foreground mb-6">{t.contactCardDesc}</p>

            <div className="flex flex-col gap-4">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-12 rounded-md bg-rose text-white hover:bg-rose-dark font-semibold shadow-sm hover:shadow-lg hover:shadow-rose/25 transition-all duration-300 btn-glow group cursor-pointer"
                aria-label="Contact us on WhatsApp to get catalog"
              >
                {t.contactCardBtn}
              </a>
              <div className="text-center text-xs text-muted-foreground">
                {t.contactCardSubtext}{" "}
                <a href={`mailto:${siteConfig.email}`} className="underline hover:text-rose">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
