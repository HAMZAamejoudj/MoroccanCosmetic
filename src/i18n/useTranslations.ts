"use client";

import { useLanguage } from "@/context/LanguageContext";
import { messages, type TranslationNamespace } from "@/i18n/messages";

export function useTranslations<N extends TranslationNamespace>(namespace: N) {
  const { language } = useLanguage();
  return messages[language][namespace];
}
