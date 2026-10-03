"use client";

import {
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildServiceSchema,
} from "@/lib/jsonLd";
import { siteConfig } from "@/config/siteConfig";
import { useTranslations } from "@/i18n/useTranslations";
import { getPrivateLabelFaqItems } from "./privateLabelFaq";

const SERVICE_DESCRIPTION =
  "White label, private label or OEM: we manufacture Moroccan oils, soaps, clays and floral waters under your brand in Marrakech. Formats, MOQs and process explained.";

export default function PrivateLabelJsonLd() {
  const t = useTranslations("privateLabelPage");
  const tHome = useTranslations("home");
  const faqItems = getPrivateLabelFaqItems(t);

  const graph = [
    buildServiceSchema({
      name: "Private Label and OEM Cosmetics, Manufactured in Morocco",
      serviceType: "OEM and private label cosmetics manufacturing",
      description: SERVICE_DESCRIPTION,
      url: `${siteConfig.siteUrl}/private-label-moroccan-cosmetics/`,
    }),
    buildBreadcrumbSchema([
      { name: tHome.navHome, path: "/" },
      {
        name: "Private Label",
        path: "/private-label-moroccan-cosmetics",
      },
    ]),
    buildFaqPageSchema(faqItems),
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
