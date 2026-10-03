"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("preferred_language") as Language;
    if (savedLang && ["en", "fr", "ar"].includes(savedLang)) {
      setLanguageState(savedLang);
      document.cookie = `preferred_language=${savedLang};path=/;max-age=31536000;SameSite=Lax`;
      return;
    }

    const browserLang = navigator.language.split("-")[0];
    if (["en", "fr", "ar"].includes(browserLang)) {
      setLanguageState(browserLang as Language);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_language", lang);
    document.cookie = `preferred_language=${lang};path=/;max-age=31536000;SameSite=Lax`;
  };

  // Layout stays LTR for all languages; only copy changes (per site design).
  const dir = "ltr";

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr";
    
    // Add custom font/styling adjustments for Arabic
    if (language === "ar") {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  }, [language, dir]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
