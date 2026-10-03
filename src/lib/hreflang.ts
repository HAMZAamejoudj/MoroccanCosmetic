import type { SiteLocale } from "@/i18n/locale";
import { HREFLANG_CODE } from "@/i18n/locale";
import { canonicalUrlForLocale } from "@/lib/localePaths";

export function buildHreflangAlternates(
  logicalPath: string,
  availableLocales: readonly SiteLocale[],
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of availableLocales) {
    alternates[HREFLANG_CODE[locale]] = canonicalUrlForLocale(logicalPath, locale);
  }
  if (availableLocales.includes("en")) {
    alternates["x-default"] = canonicalUrlForLocale(logicalPath, "en");
  }
  return alternates;
}
