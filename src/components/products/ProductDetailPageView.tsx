import { notFound } from "next/navigation";
import type { SiteLocale } from "@/i18n/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductDetailContent from "./ProductDetailContent";
import { getProductBySlug, getRelatedProducts } from "@/lib/products";
import { buildBreadcrumbSchema, buildFaqPageSchema, buildProductSchema } from "@/lib/jsonLd";
import { canonicalUrl, siteConfig } from "@/config/siteConfig";
import { canonicalUrlForLocale } from "@/lib/localePaths";

interface Props {
  slug: string;
  locale: SiteLocale;
}

export default function ProductDetailPageView({ slug, locale }: Props) {
  const product = getProductBySlug(slug, locale);
  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(slug, locale, 3);
  const pageUrl = canonicalUrlForLocale(`/products/${slug}`, locale);
  const imageUrl = canonicalUrl(product.image.src);

  const productJsonLd = buildProductSchema({
    name: product.title,
    description: product.shortDescription,
    image: imageUrl,
    url: pageUrl,
    sku: product.sku,
    category: product.categoryName,
    inLanguage: locale,
  });

  const breadcrumbsJsonLd = buildBreadcrumbSchema(
    [
      { name: locale === "fr" ? "Accueil" : locale === "ar" ? "الرئيسية" : "Home", path: "/" },
      { name: locale === "fr" ? "Produits" : locale === "ar" ? "المنتجات" : "Products", path: "/products" },
      { name: product.title, path: `/products/${slug}` },
    ],
    locale
  );

  const faqJsonLd =
    product.faqs && product.faqs.length > 0
      ? buildFaqPageSchema(product.faqs, locale)
      : null;

  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <Header />
      <ProductDetailContent product={product} relatedProducts={related} locale={locale} />
      <Footer />
    </div>
  );
}

