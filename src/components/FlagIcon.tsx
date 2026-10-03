import type { SiteLocale } from "@/i18n/locale";

const FLAG_BY_LANGUAGE: Record<SiteLocale, "gb" | "fr" | "ma"> = {
  en: "gb",
  fr: "fr",
  ar: "ma",
};

type FlagCode = (typeof FLAG_BY_LANGUAGE)[SiteLocale];

function GbFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" strokeWidth="4" />
      <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v40M0 20h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

function FrFlag() {
  return (
    <svg viewBox="0 0 3 2" className="h-full w-full" aria-hidden>
      <rect width="1" height="2" fill="#002395" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#ED2939" />
    </svg>
  );
}

function MaFlag() {
  return (
    <svg viewBox="0 0 60 40" className="h-full w-full" aria-hidden>
      <rect width="60" height="40" fill="#C1272D" />
      <polygon
        fill="#006233"
        points="30,7.5 32.9,16.3 42.1,16.3 34.6,21.7 37.5,30.5 30,25.1 22.5,30.5 25.4,21.7 17.9,16.3 27.1,16.3"
      />
    </svg>
  );
}

const FLAGS: Record<FlagCode, () => React.JSX.Element> = {
  gb: GbFlag,
  fr: FrFlag,
  ma: MaFlag,
};

export function FlagIcon({
  language,
  className = "h-4 w-6 shrink-0 overflow-hidden rounded-[3px] border border-black/10 shadow-sm",
}: {
  language: SiteLocale;
  className?: string;
}) {
  const code = FLAG_BY_LANGUAGE[language];
  const Flag = FLAGS[code];

  return (
    <span className={`inline-flex ${className}`} role="img" aria-hidden>
      <Flag />
    </span>
  );
}

export function flagLabelForLanguage(language: SiteLocale): string {
  const labels: Record<SiteLocale, string> = {
    en: "English",
    fr: "Français",
    ar: "العربية",
  };
  return labels[language];
}
