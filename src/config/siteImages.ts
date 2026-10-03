import { imageMeta } from "./imageMeta.generated";

export type SiteImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

function img(src: string, alt: string): SiteImage {
  const m = imageMeta[src as keyof typeof imageMeta];
  return {
    src,
    width: m?.width ?? 1200,
    height: m?.height ?? 800,
    alt,
  };
}

const catalogAlt = {
  arganOil: "Moroccan argan oil bulk supply — wholesale cosmetic oil from Marrakech",
  blackSoap: "Moroccan black soap (Beldi) — traditional hammam care, bulk supply",
  roseWater: "Moroccan rose water — floral hydrosol for toners and skincare, bulk",
  nilaPowder: "Blue nila powder — traditional Moroccan cosmetic ingredient, bulk",
  pricklyPearOil: "Prickly pear seed oil — cosmetic oil, bulk supply from Marrakech",
  ghassoulClay: "Ghassoul clay powder — Atlas Mountain clay for masks and spa, bulk",
  orangeBlossomWater: "Moroccan orange blossom water — neroli hydrosol, bulk supply",
  akerFassi: "Aker fassi powder — traditional Moroccan rose pigment, bulk",
  sidrPowder: "Sidr powder — natural leaf powder for hair and skin care, bulk",
} as const;

/** Canonical WebP paths under /public/images/ */
export const siteImages = {
  heroHome: img(
    "/images/hero-home.webp",
    "Argan oil, argan nuts and rose petals on a Moroccan table",
  ),
  catalog: {
    arganOil: img("/images/catalog/argan-oil.webp", catalogAlt.arganOil),
    blackSoap: img("/images/catalog/black-soap.webp", catalogAlt.blackSoap),
    roseWater: img("/images/catalog/rose-water.webp", catalogAlt.roseWater),
    nilaPowder: img("/images/catalog/blue-nila.webp", catalogAlt.nilaPowder),
    pricklyPearOil: img("/images/catalog/prickly-pear-oil.webp", catalogAlt.pricklyPearOil),
    ghassoulClay: img("/images/catalog/ghassoul-clay.webp", catalogAlt.ghassoulClay),
    orangeBlossomWater: img(
      "/images/catalog/orange-blossom-water.webp",
      catalogAlt.orangeBlossomWater,
    ),
    akerFassi: img("/images/catalog/aker-fassi.webp", catalogAlt.akerFassi),
    sidrPowder: img("/images/catalog/sidr-powder.webp", catalogAlt.sidrPowder),
  },
  factory: {
    productionLine: img(
      "/images/factory/production-line.webp",
      "Morocco Cosmetic production line — bottled products packed at our Marrakech facility",
    ),
    qualityDocuments: img(
      "/images/factory/quality-documents.webp",
      "Morocco Cosmetic factory — bulk Moroccan cosmetic products ready for export",
    ),
    exportPallet: img(
      "/images/factory/export-pallet.webp",
      "Pallet of strapped cartons ready for export from Marrakech",
    ),
    bulkProduction: img(
      "/images/factory/bulk-production.webp",
      "Bulk jars and argan oil on the production bench in Marrakech",
    ),
    orderPacking: img(
      "/images/factory/order-packing.webp",
      "Sealed export carton beside filled bottles at Morocco Cosmetic",
    ),
  },
  manufacture: {
    pureOils: "/images/manufacture/pure-oils.webp",
    blackSoap: "/images/manufacture/black-soap.webp",
    ghassoulClay: "/images/manufacture/ghassoul-clay.webp",
    floralWaters: "/images/manufacture/floral-waters.webp",
    botanicalPowders: "/images/manufacture/botanical-powders.webp",
    hammamKits: "/images/manufacture/hammam-kits.webp",
  },
  benefitsHero: img(
    "/images/benefits-hero.webp",
    "Moroccan natural cosmetics ingredients and wellness benefits",
  ),
  paymentMethods: img(
    "/images/payment-methods.webp",
    "Payment methods accepted by Morocco Cosmetic",
  ),
  shippingPartners: img(
    "/images/shipping-partners.webp",
    "Logistics and transport partners for Morocco Cosmetic exports",
  ),
} as const;
