import type { Metadata } from "next";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("contact", "/contact");

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
