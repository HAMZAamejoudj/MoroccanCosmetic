import type { Metadata } from "next";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("products", "/products", "en");

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
