import type { SiteLocale } from "@/i18n/locale";
import { SITE_LOCALES } from "@/i18n/locale";
import { localizedPath } from "@/lib/localePaths";

/** Logical paths (no locale prefix, no trailing slash except `/`). */
export const SITE_LOGICAL_PATHS = [
  "/",
  "/about",
  "/products",
  "/benefits",
  "/private-label-moroccan-cosmetics",
  "/contact",
  "/blog",
] as const;

export type SiteLogicalPath = (typeof SITE_LOGICAL_PATHS)[number];

const FULL_LOCALE_PATHS = new Set<string>(SITE_LOGICAL_PATHS);

export function isLocalizedPath(logicalPath: string): boolean {
  const normalized = logicalPath === "" ? "/" : logicalPath.replace(/\/$/, "") || "/";
  if (FULL_LOCALE_PATHS.has(normalized)) return true;
  if (normalized.startsWith("/blog/") && normalized.length > "/blog/".length) return true;
  return false;
}

/** Locales that have a published page at this logical path. */
export function localesForPath(logicalPath: string): SiteLocale[] {
  const normalized = logicalPath.replace(/\/$/, "") || "/";
  if (!isLocalizedPath(normalized)) {
    return ["en"];
  }
  return [...SITE_LOCALES];
}

export function localizedPathForLocale(
  logicalPath: string,
  targetLocale: SiteLocale,
): string {
  const available = localesForPath(logicalPath);
  if (available.includes(targetLocale)) {
    return localizedPath(logicalPath, targetLocale);
  }
  return localizedPath("/", targetLocale);
}

export function hreflangLocalesForPath(logicalPath: string): SiteLocale[] {
  return localesForPath(logicalPath);
}
