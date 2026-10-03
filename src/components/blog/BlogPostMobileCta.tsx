"use client";

import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { getWhatsAppUrl } from "@/config/siteConfig";

export default function BlogPostMobileCta() {
  const t = useTranslations("blog");
  const whatsappUrl = `${getWhatsAppUrl()}?text=${encodeURIComponent("Hello, I'm interested in bulk ingredients.")}`;

  return (
    <div className="lg:hidden my-10 p-6 rounded-2xl bg-gradient-to-b from-card to-blush/20 border border-border text-center space-y-4 shadow-sm">
      <div className="p-3 rounded-full bg-rose/10 text-rose w-fit mx-auto">
        <MessageSquare className="w-5 h-5" />
      </div>
      <h4 className="font-serif font-semibold text-lg text-foreground">{t.postBulkCtaTitle}</h4>
      <p className="text-sm text-muted-foreground font-light">{t.postBulkCtaDesc}</p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
        <Link
          href="/contact/"
          className="w-full sm:w-auto px-5 py-2.5 bg-rose text-white rounded-xl font-semibold text-sm hover:bg-rose-dark transition-colors shadow-xs"
        >
          {t.requestQuote}
        </Link>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-5 py-2.5 border border-border bg-card text-foreground rounded-xl font-semibold text-sm hover:bg-muted transition-colors"
        >
          {t.chatWhatsapp}
        </a>
      </div>
    </div>
  );
}
