import type { SiteLocale } from "@/i18n/locale";
import { getNamespace } from "@/i18n/getMessages";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildOrganizationSchema,
} from "@/lib/jsonLd";
import { getAboutFaqItems } from "./aboutFaq";
import enMeta from "@/i18n/locales/en/meta.json";
import frMeta from "@/i18n/locales/fr/meta.json";
import arMeta from "@/i18n/locales/ar/meta.json";

const metaByLocale = { en: enMeta, fr: frMeta, ar: arMeta } as const;

export default function AboutJsonLd({ locale }: { locale: SiteLocale }) {
  const tAbout = getNamespace(locale, "about");
  const tHome = getNamespace(locale, "home");
  const faqItems = getAboutFaqItems(tAbout);
  const description = metaByLocale[locale].about.description;

  const graph = [
    buildAboutPageSchema(description, locale),
    buildOrganizationSchema(),
    buildBreadcrumbSchema(
      [
        { name: tHome.navHome, path: "/" },
        { name: tHome.navAbout, path: "/about" },
      ],
      locale,
    ),
    buildFaqPageSchema(faqItems, locale),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
