import type { SiteLocale } from "@/i18n/locale";
import { messages, type TranslationNamespace } from "@/i18n/messages";

export function getMessages(locale: SiteLocale) {
  return messages[locale];
}

export function getNamespace<N extends TranslationNamespace>(
  locale: SiteLocale,
  namespace: N,
): (typeof messages)[SiteLocale][N] {
  return messages[locale][namespace];
}
