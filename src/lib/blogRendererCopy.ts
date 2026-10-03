import type { SiteLocale } from "@/i18n/locale";
import enBlog from "@/i18n/locales/en/blog.json";
import frBlog from "@/i18n/locales/fr/blog.json";
import arBlog from "@/i18n/locales/ar/blog.json";

export type BlogRendererCopy = {
  midCtaEyebrow: string;
  midCtaTitle: string;
  midCtaDesc: string;
  midCtaButton: string;
  inlineQuoteTitle: string;
  inlineQuoteDesc: string;
  requestQuote: string;
  chatWhatsapp: string;
  quoteTokens: string[];
};

const messages = { en: enBlog, fr: frBlog, ar: arBlog };

export function getBlogRendererCopy(locale: SiteLocale): BlogRendererCopy {
  const t = messages[locale];
  const quoteTokens =
    locale === "fr"
      ? ["[Demander un devis]", "[Request a Quote]"]
      : locale === "ar"
        ? ["[طلب عرض سعر]", "[Request a Quote]"]
        : ["[Request a Quote]"];

  return {
    midCtaEyebrow: t.midCtaEyebrow,
    midCtaTitle: t.midCtaTitle,
    midCtaDesc: t.midCtaDesc,
    midCtaButton: t.midCtaButton,
    inlineQuoteTitle: t.inlineQuoteTitle,
    inlineQuoteDesc: t.inlineQuoteDesc,
    requestQuote: t.requestQuote,
    chatWhatsapp: t.chatWhatsapp,
    quoteTokens,
  };
}
