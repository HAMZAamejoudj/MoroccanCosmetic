"use client";

import React, { createContext, useContext } from "react";
import type { SiteLocale } from "@/i18n/locale";

const LocaleContext = createContext<SiteLocale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: SiteLocale;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): SiteLocale {
  return useContext(LocaleContext);
}
