import type { Language } from "@/context/LanguageContext";
import { OPEN_GRAPH_LOCALE } from "@/i18n/openGraphLocale";

export type DocumentMetaInput = {
  title: string;
  description: string;
  locale: Language;
};

function upsertMetaByName(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertMetaByProperty(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function applyDocumentMeta({ title, description, locale }: DocumentMetaInput) {
  if (typeof document === "undefined") return;

  document.title = title;
  upsertMetaByName("description", description);
  upsertMetaByProperty("og:title", title);
  upsertMetaByProperty("og:description", description);
  upsertMetaByProperty("og:locale", OPEN_GRAPH_LOCALE[locale]);
  upsertMetaByName("twitter:title", title);
  upsertMetaByName("twitter:description", description);
}
