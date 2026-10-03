import type { Metadata } from "next";
import ProductsPageShell from "@/components/products/ProductsPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("products", "/products", "ar");

export default function ArabicProductsPage() {
  return <ProductsPageShell locale="ar" />;
}
