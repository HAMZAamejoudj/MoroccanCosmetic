import type { SiteLocale } from "@/i18n/locale";
import { getMessages } from "@/i18n/getMessages";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeJsonLd from "@/components/home/HomeJsonLd";
import HomePageContent from "@/components/home/HomePageContent";
import type { LatestGuidePost } from "@/lib/blog-types";

export default function HomePageShell({
  locale,
  latestGuides,
}: {
  locale: SiteLocale;
  latestGuides: LatestGuidePost[];
}) {
  const messages = getMessages(locale);
  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <HomeJsonLd locale={locale} />
      <Header />
      <HomePageContent
        locale={locale}
        copy={messages.homePage}
        nav={messages.home}
        blog={messages.blog}
        latestGuides={latestGuides}
      />
      <Footer />
    </div>
  );
}
