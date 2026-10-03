"use client";

import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
  buildOrganizationSchema,
} from "@/lib/jsonLd";
import { useTranslations } from "@/i18n/useTranslations";
import { getAboutFaqItems } from "./aboutFaq";

const ABOUT_DESCRIPTION =
  "Meet Morocco Cosmetic: a Marrakech-based producer of argan oil and natural Moroccan cosmetics for wholesale and OEM buyers.";

export default function AboutJsonLd() {
  const tAbout = useTranslations("about");
  const tHome = useTranslations("home");
  const faqItems = getAboutFaqItems(tAbout);

  const graph = [
    buildAboutPageSchema(ABOUT_DESCRIPTION),
    buildOrganizationSchema(),
    buildBreadcrumbSchema([
      { name: tHome.navHome, path: "/" },
      { name: tHome.navAbout, path: "/about" },
    ]),
    buildFaqPageSchema(faqItems),
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
