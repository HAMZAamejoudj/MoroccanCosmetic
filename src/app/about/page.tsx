import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPageContent from "@/components/about/AboutPageContent";
import AboutJsonLd from "@/components/about/AboutJsonLd";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("about", "/about");

export default function AboutPage() {
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <AboutJsonLd />
      <Header />
      <div className="pt-20 md:pt-24">
        <AboutPageContent />
      </div>
      <Footer />
    </div>
  );
}
