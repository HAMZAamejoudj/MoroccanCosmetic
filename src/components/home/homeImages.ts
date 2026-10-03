import { siteImages } from "@/config/siteImages";

/** Homepage images — WebP under /images/ */
export const homeImages = {
  hero: siteImages.heroHome,
  arganOil: siteImages.catalog.arganOil,
  blackSoap: siteImages.catalog.blackSoap,
  roseWater: siteImages.catalog.roseWater,
  nilaPowder: siteImages.catalog.nilaPowder,
  pricklyPearOil: siteImages.catalog.pricklyPearOil,
  ghassoulClay: siteImages.catalog.ghassoulClay,
  orangeBlossomWater: siteImages.catalog.orangeBlossomWater,
  akerFassi: siteImages.catalog.akerFassi,
  sidrPowder: siteImages.catalog.sidrPowder,
  manufacturing: siteImages.factory.productionLine,
  qualityDocuments: siteImages.factory.qualityDocuments,
} as const;
