import type { Metadata } from "next";
import "@/app/globals.css";
import { cormorantGaramond, dmSans, ibmPlexSansArabic } from "@/lib/fonts";
import SiteShell from "@/components/layout/SiteShell";
import { baseSiteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseSiteMetadata;

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${dmSans.variable} ${cormorantGaramond.variable} ${ibmPlexSansArabic.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground font-arabic">
        <SiteShell locale="ar">{children}</SiteShell>
      </body>
    </html>
  );
}
