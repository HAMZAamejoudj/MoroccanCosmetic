import { canonicalUrl } from "@/config/siteConfig";

export function canonicalPathWithSlash(path: string): string {
  if (path === "/" || path === "") return "/";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized.endsWith("/") ? normalized : `${normalized}/`;
}

export function sitemapUrlForPath(path: string): string {
  return canonicalUrl(canonicalPathWithSlash(path));
}
