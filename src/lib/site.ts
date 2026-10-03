import { siteConfig } from "@/config/siteConfig";

export const SITE_URL = siteConfig.siteUrl;
export const SITE_NAME = siteConfig.brandName;

export const SITE_ROUTES = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/benefits", priority: 0.8, changeFrequency: "monthly" as const },
  {
    path: "/private-label-moroccan-cosmetics",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  { path: "/blog", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" as const },
];
