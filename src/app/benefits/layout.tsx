import type { Metadata } from "next";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("benefits", "/benefits");

export default function BenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
