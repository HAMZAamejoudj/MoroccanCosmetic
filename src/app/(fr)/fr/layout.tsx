import type { Metadata } from "next";
import "@/app/globals.css";
import { cormorantGaramond, dmSans } from "@/lib/fonts";
import SiteShell from "@/components/layout/SiteShell";
import { baseSiteMetadata } from "@/lib/siteMetadata";

export const metadata: Metadata = baseSiteMetadata;

export default function FrenchRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${dmSans.variable} ${cormorantGaramond.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col antialiased bg-background text-foreground">
        <SiteShell locale="fr">{children}</SiteShell>
      </body>
    </html>
  );
}
