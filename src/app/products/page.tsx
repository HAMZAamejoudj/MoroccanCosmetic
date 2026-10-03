import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductsPageContent from "@/components/products/ProductsPageContent";

export default function ProductsPage() {
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <Header />
      <ProductsPageContent />
      <Footer />
    </div>
  );
}
