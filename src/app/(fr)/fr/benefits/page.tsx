import type { Metadata } from "next";
import BenefitsPageShell from "@/components/benefits/BenefitsPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("benefits", "/benefits", "fr");

export default function FrenchBenefitsPage() {
  return <BenefitsPageShell />;
}
