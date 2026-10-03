import type { SiteLocale } from "@/i18n/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/about/AboutPageContent";
import AboutJsonLd from "@/components/about/AboutJsonLd";

export default function AboutPageShell({ locale }: { locale: SiteLocale }) {
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <AboutJsonLd locale={locale} />
      <Header />
      <div className="pt-20 md:pt-24">
        <AboutPageContent />
      </div>
      <Footer />
    </div>
  );
}
