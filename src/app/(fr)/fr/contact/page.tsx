import type { Metadata } from "next";
import ContactPageShell from "@/components/contact/ContactPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("contact", "/contact", "fr");

export default function FrenchContactPage() {
  return <ContactPageShell />;
}
