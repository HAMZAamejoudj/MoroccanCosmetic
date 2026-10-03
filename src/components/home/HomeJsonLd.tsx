"use client";

import { buildFaqPageSchema } from "@/lib/jsonLd";
import { useTranslations } from "@/i18n/useTranslations";
import { getHomeFaqItems } from "./homeFaq";

export default function HomeJsonLd() {
  const t = useTranslations("homePage");
  const faqSchema = buildFaqPageSchema(getHomeFaqItems(t));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
