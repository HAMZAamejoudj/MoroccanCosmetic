import type { Metadata } from "next";
import BenefitsPageShell from "@/components/benefits/BenefitsPageShell";
import { buildLocalizedPageMetadata } from "@/i18n/localizedPageMetadata";

export const metadata: Metadata = buildLocalizedPageMetadata("benefits", "/benefits", "ar");

export default function ArabicBenefitsPage() {
  return <BenefitsPageShell />;
}
