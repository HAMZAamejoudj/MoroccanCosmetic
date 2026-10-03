import type { Metadata } from "next";
import ContactPageShell from "@/components/contact/ContactPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("contact", "/contact", "ar");

export default function ArabicContactPage() {
  return <ContactPageShell />;
}
