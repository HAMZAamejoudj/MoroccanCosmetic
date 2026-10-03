import type { Metadata } from "next";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("contact", "/contact", "en");

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
