import type { Metadata } from "next";
import ProductDetailPageView from "@/components/products/ProductDetailPageView";
import { getAllProductSlugs } from "@/lib/products";
import { buildProductMetadata } from "@/lib/productMetadata";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return buildProductMetadata(slug, "ar");
}

export default async function ArabicProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  return <ProductDetailPageView slug={slug} locale="ar" />;
}

