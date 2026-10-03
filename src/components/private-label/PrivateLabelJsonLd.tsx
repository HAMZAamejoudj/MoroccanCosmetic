import type { SiteLocale } from "@/i18n/locale";
import { getNamespace } from "@/i18n/getMessages";
import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/jsonLd";
import { canonicalUrlForLocale } from "@/lib/localePaths";
import { getPrivateLabelFaqItems } from "./privateLabelFaq";
import enMeta from "@/i18n/locales/en/meta.json";
import frMeta from "@/i18n/locales/fr/meta.json";
import arMeta from "@/i18n/locales/ar/meta.json";

const metaByLocale = { en: enMeta, fr: frMeta, ar: arMeta } as const;

export default function PrivateLabelJsonLd({ locale }: { locale: SiteLocale }) {
  const t = getNamespace(locale, "privateLabelPage");
  const tHome = getNamespace(locale, "home");
  const faqItems = getPrivateLabelFaqItems(t);
  const description = metaByLocale[locale].privateLabel.description;
  const serviceUrl = canonicalUrlForLocale("/private-label-moroccan-cosmetics", locale);

  const graph = [
    buildServiceSchema({
      name: metaByLocale[locale].privateLabel.title,
      serviceType: "OEM and private label cosmetics manufacturing",
      description,
      url: serviceUrl,
    }),
    buildBreadcrumbSchema(
      [
        { name: tHome.navHome, path: "/" },
        { name: tHome.navPrivateLabel, path: "/private-label-moroccan-cosmetics" },
      ],
      locale,
    ),
    buildFaqPageSchema(faqItems, locale),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
