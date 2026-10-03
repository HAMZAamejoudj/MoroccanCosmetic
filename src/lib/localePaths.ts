import type { SiteLocale } from "@/i18n/locale";
import { canonicalUrl } from "@/config/siteConfig";

/** Path without locale prefix, trailing slash (except root is `/`). */
export function pathnameToLogical(pathname: string): string {
  let path = pathname.split("?")[0].split("#")[0];
  if (!path.startsWith("/")) path = `/${path}`;
  if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  if (path === "/fr" || path.startsWith("/fr/")) {
    const rest = path === "/fr" ? "" : path.slice(3);
    return rest === "" ? "/" : rest.startsWith("/") ? rest : `/${rest}`;
  }
  if (path === "/ar" || path.startsWith("/ar/")) {
    const rest = path === "/ar" ? "" : path.slice(3);
    return rest === "" ? "/" : rest.startsWith("/") ? rest : `/${rest}`;
  }
  return path === "" ? "/" : path;
}

export function localeFromPathname(pathname: string): SiteLocale {
  const path = pathname.split("?")[0];
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  if (path === "/ar" || path.startsWith("/ar/")) return "ar";
  return "en";
}

/** Public URL path with trailing slash. */
export function localizedPath(logicalPath: string, locale: SiteLocale): string {
  const normalized = pathnameToLogical(logicalPath);
  const suffix = normalized === "/" ? "" : normalized;
  if (locale === "en") {
    return normalized === "/" ? "/" : `${suffix}/`;
  }
  if (locale === "fr") {
    return normalized === "/" ? "/fr/" : `/fr${suffix}/`;
  }
  return normalized === "/" ? "/ar/" : `/ar${suffix}/`;
}

export function canonicalPathForLocale(logicalPath: string, locale: SiteLocale): string {
  return localizedPath(logicalPath, locale);
}

export function canonicalUrlForLocale(logicalPath: string, locale: SiteLocale): string {
  return canonicalUrl(localizedPath(logicalPath, locale));
}
