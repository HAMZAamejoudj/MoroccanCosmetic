import { businessFacts } from "@/config/businessFacts";
import { siteConfig, getSameAsUrls } from "@/config/siteConfig";
import type { SiteLocale } from "@/i18n/locale";
import { canonicalUrlForLocale } from "@/lib/localePaths";

function pageUrl(path: string, locale?: SiteLocale): string {
  if (locale) {
    return canonicalUrlForLocale(path, locale);
  }
  return `${siteConfig.siteUrl}${path === "/" ? "/" : `${path.replace(/\/$/, "")}/`}`;
}

function buildPostalAddress() {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.addressLocality,
    addressCountry: siteConfig.address.addressCountry,
  };
  if (businessFacts.factoryFullAddress) {
    address.streetAddress = businessFacts.factoryFullAddress;
  } else if (siteConfig.address.streetAddress) {
    address.streetAddress = siteConfig.address.streetAddress;
  }
  return address;
}

export function buildOrganizationSchema(options?: { includeFounding?: boolean }) {
  const org: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brandName,
    url: `${siteConfig.siteUrl}/`,
    logo: `${siteConfig.siteUrl}${siteConfig.logoPath}`,
    description:
      "Moroccan cosmetic products manufacturer and wholesale supplier based in Marrakech: argan oil, prickly pear seed oil, black soap, floral waters, clays, and OEM private label.",
    address: buildPostalAddress(),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      availableLanguage: ["en", "fr", "ar"],
    },
    knowsAbout: [
      "Argan oil",
      "Moroccan black soap",
      "Ghassoul clay",
      "Floral waters",
      "Private label cosmetics",
    ],
    sameAs: getSameAsUrls(),
  };

  if (businessFacts.companyRegistration) {
    org.identifier = {
      "@type": "PropertyValue",
      name: "Moroccan company registration (ICE / RC)",
      value: businessFacts.companyRegistration,
    };
  }

  if (options?.includeFounding && businessFacts.foundingYear != null) {
    org.foundingDate = String(businessFacts.foundingYear);
  }

  return org;
}

export function buildBreadcrumbSchema(
  items: ReadonlyArray<{ name: string; path: string }>,
  locale?: SiteLocale,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: pageUrl(item.path, locale),
    })),
  };
}

export function buildAboutPageSchema(description: string, locale?: SiteLocale) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    url: pageUrl("/about", locale),
    description,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.brandName,
      url: `${siteConfig.siteUrl}/`,
    },
    about: {
      "@type": "Organization",
      name: siteConfig.brandName,
    },
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.brandName,
    url: `${siteConfig.siteUrl}/`,
  };
}

export function buildServiceSchema(options: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: options.name,
    serviceType: options.serviceType,
    description: options.description,
    url: options.url,
    provider: {
      "@type": "Organization",
      name: siteConfig.brandName,
      url: `${siteConfig.siteUrl}/`,
    },
    areaServed: "Worldwide",
  };
}

export function buildFaqPageSchema(
  items: ReadonlyArray<{ question: string; answer: string }>,
  inLanguage?: string,
) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  if (inLanguage) {
    schema.inLanguage = inLanguage;
  }
  return schema;
}
