import { businessFacts } from "@/config/businessFacts";
import { siteConfig, getSameAsUrls } from "@/config/siteConfig";

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
      availableLanguage: ["English", "French", "Arabic"],
    },
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
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path === "/" ? "/" : `${item.path.replace(/\/$/, "")}/`}`,
    })),
  };
}

export function buildAboutPageSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    url: `${siteConfig.siteUrl}/about/`,
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
) {
  return {
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
}
