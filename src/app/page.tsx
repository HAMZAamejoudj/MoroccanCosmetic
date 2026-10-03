import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePageContent from "@/components/home/HomePageContent";
import HomeJsonLd from "@/components/home/HomeJsonLd";
import { getLatestGuidePosts } from "@/lib/blog";
import type { Metadata } from "next";
import { buildMetadataForPage } from "@/i18n/pageMetadata";

export const metadata: Metadata = buildMetadataForPage("home", "/");

export default function Home() {
  const latestGuides = getLatestGuidePosts(3);

  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <HomeJsonLd />
      <Header />
      <HomePageContent latestGuides={latestGuides} />
      <Footer />
    </div>
  );
}
