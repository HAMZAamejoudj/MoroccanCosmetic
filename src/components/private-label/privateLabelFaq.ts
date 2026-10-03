import { businessFacts } from "@/config/businessFacts";

import type enPrivateLabelPage from "@/i18n/locales/en/privateLabelPage.json";



export type PrivateLabelFaqItem = { question: string; answer: string };



export type PrivateLabelFaqCopy = Pick<

  typeof enPrivateLabelPage,

  | "faqMoqQ"

  | "faqMoqWhiteLabel"

  | "faqMoqPrivateLabel"

  | "faqMoqOem"

  | "faqMoqSuffix"

  | "faqLeadTimeQ"

  | "faqLeadTimeA"

  | "faqOwnPackagingQ"

  | "faqCustomFormulaQ"

  | "faqRegistrationQ"

  | "faqRegistrationA"

>;



function withValue(template: string, value: string): string {

  return template.replace("{value}", value);

}



export function getPrivateLabelFaqItems(t: PrivateLabelFaqCopy): PrivateLabelFaqItem[] {

  const items: PrivateLabelFaqItem[] = [];



  const hasAnyMoq =

    businessFacts.privateLabelMoq.whiteLabel ||

    businessFacts.privateLabelMoq.privateLabel ||

    businessFacts.privateLabelMoq.oem;



  if (hasAnyMoq) {

    const parts: string[] = [];

    if (businessFacts.privateLabelMoq.whiteLabel) {

      parts.push(withValue(t.faqMoqWhiteLabel, businessFacts.privateLabelMoq.whiteLabel));

    }

    if (businessFacts.privateLabelMoq.privateLabel) {

      parts.push(withValue(t.faqMoqPrivateLabel, businessFacts.privateLabelMoq.privateLabel));

    }

    if (businessFacts.privateLabelMoq.oem) {

      parts.push(withValue(t.faqMoqOem, businessFacts.privateLabelMoq.oem));

    }

    items.push({

      question: t.faqMoqQ,

      answer: `${parts.join(" ")} ${t.faqMoqSuffix}`,

    });

  }



  if (businessFacts.leadTimeWeeks) {

    items.push({

      question: t.faqLeadTimeQ,

      answer: t.faqLeadTimeA.replace("{weeks}", String(businessFacts.leadTimeWeeks)),

    });

  }



  if (businessFacts.ownPackagingAccepted) {

    items.push({

      question: t.faqOwnPackagingQ,

      answer: businessFacts.ownPackagingAccepted,

    });

  }



  if (businessFacts.customFormulaDetails) {

    items.push({

      question: t.faqCustomFormulaQ,

      answer: businessFacts.customFormulaDetails,

    });

  }



  items.push({

    question: t.faqRegistrationQ,

    answer: t.faqRegistrationA,

  });



  return items;

}

