import type { Metadata } from "next";
import PrivateLabelPageShell from "@/components/private-label/PrivateLabelPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata(
  "privateLabel",
  "/private-label-moroccan-cosmetics",
  "fr",
);

export default function FrenchPrivateLabelPage() {
  return <PrivateLabelPageShell locale="fr" />;
}
