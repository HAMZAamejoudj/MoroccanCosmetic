import type { SiteLocale } from "@/i18n/locale";
import { LocaleProvider } from "@/context/LocaleContext";
import GlobalJsonLd from "@/components/GlobalJsonLd";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function SiteShell({
  locale,
  children,
}: {
  locale: SiteLocale;
  children: React.ReactNode;
}) {
  return (
    <LocaleProvider locale={locale}>
      <GlobalJsonLd />
      {children}
      <FloatingWhatsApp />
    </LocaleProvider>
  );
}
