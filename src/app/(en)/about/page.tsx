import type { Metadata } from "next";
import AboutPageShell from "@/components/about/AboutPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("about", "/about", "en");

export default function AboutPage() {
  return <AboutPageShell locale="en" />;
}
