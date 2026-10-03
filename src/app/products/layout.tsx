import type { Metadata } from "next";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("products", "/products");

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
