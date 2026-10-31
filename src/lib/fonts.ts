import { Cormorant_Garamond, DM_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";

export const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});
