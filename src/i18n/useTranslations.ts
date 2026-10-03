"use client";

import { useLocale } from "@/context/LocaleContext";
import { messages, type TranslationNamespace } from "@/i18n/messages";

export function useTranslations<N extends TranslationNamespace>(namespace: N) {
  const locale = useLocale();
  return messages[locale][namespace];
}
