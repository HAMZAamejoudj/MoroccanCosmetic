import type { SiteLocale } from "@/i18n/locale";
import { getNamespace } from "@/i18n/getMessages";
import { buildFaqPageSchema } from "@/lib/jsonLd";
import { getHomeFaqItems } from "./homeFaq";

export default function HomeJsonLd({ locale }: { locale: SiteLocale }) {
  const t = getNamespace(locale, "homePage");
  const faqSchema = buildFaqPageSchema(getHomeFaqItems(t), locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}
