import { businessFacts } from "@/config/businessFacts";
import type enAbout from "@/i18n/locales/en/about.json";

export type AboutFaqItem = { question: string; answer: string };

export type AboutFaqCopy = Pick<
  typeof enAbout,
  "faqManufacturerQ" | "faqManufacturerA" | "faqVisitQ" | "faqVisitA" | "faqExportQ"
>;

export function getAboutFaqItems(t: AboutFaqCopy): AboutFaqItem[] {
  const items: AboutFaqItem[] = [
    {
      question: t.faqManufacturerQ,
      answer: t.faqManufacturerA,
    },
    {
      question: t.faqVisitQ,
      answer: t.faqVisitA,
    },
  ];

  if (businessFacts.exportRegions && businessFacts.exportRegions.length > 0) {
    items.push({
      question: t.faqExportQ,
      answer: businessFacts.exportRegions.join(", "),
    });
  }

  return items;
}
