/** Central site identity — update contact and social links here. */
export const siteConfig = {
  brandName: "Morocco Cosmetic",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://www.moroccocosmetic.com",
  email: "moroccocosmetic@moroccocosmetic.com",
  phoneE164: "+212641517831",
  phoneDisplay: "+212 641-517831",
  whatsappNumber: "212641517831",
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    tiktok: null as string | null,
  },
  address: {
    addressLocality: "Marrakech",
    addressCountry: "MA",
    streetAddress: null as string | null,
  },
  logoPath: "/moroccan-cosmetic-logo.svg",
  ogImagePath: "/favicon/og-image.png",
} as const;

export function getWhatsAppUrl(): string {
  return `https://wa.me/${siteConfig.whatsappNumber}`;
}

export function getSameAsUrls(): string[] {
  const { facebook, instagram, tiktok } = siteConfig.social;
  return [facebook, instagram, tiktok].filter(
    (url): url is string => typeof url === "string" && url.length > 0,
  );
}

export function canonicalUrl(path: string): string {
  const base = siteConfig.siteUrl;
  if (path === "/" || path === "") {
    return `${base}/`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailing = normalized.replace(/\/$/, "") || "/";
  return `${base}${withoutTrailing}/`;
}
