import type { SiteLocale } from "@/i18n/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateLabelPageContent from "@/components/private-label/PrivateLabelPageContent";
import PrivateLabelJsonLd from "@/components/private-label/PrivateLabelJsonLd";

export default function PrivateLabelPageShell({ locale }: { locale: SiteLocale }) {
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <PrivateLabelJsonLd locale={locale} />
      <Header />
      <div className="pt-20 md:pt-24">
        <PrivateLabelPageContent />
      </div>
      <Footer />
    </div>
  );
}
