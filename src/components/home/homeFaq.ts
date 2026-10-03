import { businessFacts } from "@/config/businessFacts";
import type enHomePage from "@/i18n/locales/en/homePage.json";

export type FaqItem = { question: string; answer: string };
export type HomePageCopy = typeof enHomePage;

export function getHomeFaqItems(t: HomePageCopy): FaqItem[] {
  const items: FaqItem[] = [];

  let factoryAnswer = t.faqFactoryA;
  if (businessFacts.factoryFullAddress) {
    factoryAnswer += ` ${businessFacts.factoryFullAddress}`;
  }
  factoryAnswer += t.faqFactoryVisit;
  items.push({
    question: t.faqFactoryQ,
    answer: factoryAnswer,
  });

  let moqAnswer = t.faqMoqA;
  if (businessFacts.moqByCategory) {
    moqAnswer += ` ${businessFacts.moqByCategory}`;
  }
  items.push({
    question: t.faqMoqQ,
    answer: moqAnswer,
  });

  if (businessFacts.samplePolicy) {
    items.push({
      question: t.faqSamplesQ,
      answer: `${t.faqSamplesYes} ${businessFacts.samplePolicy}`,
    });
  }

  items.push({
    question: t.faqCertsQ,
    answer: t.faqCertsA,
  });

  items.push({
    question: t.faqShipQ,
    answer: t.faqShipA,
  });

  return items;
}
