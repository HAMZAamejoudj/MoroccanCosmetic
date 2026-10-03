import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateLabelPageContent from "@/components/private-label/PrivateLabelPageContent";
import PrivateLabelJsonLd from "@/components/private-label/PrivateLabelJsonLd";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("privateLabel", "/private-label-moroccan-cosmetics");

export default function PrivateLabelPage() {
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <PrivateLabelJsonLd />
      <Header />
      <div className="pt-20 md:pt-24">
        <PrivateLabelPageContent />
      </div>
      <Footer />
    </div>
  );
}
