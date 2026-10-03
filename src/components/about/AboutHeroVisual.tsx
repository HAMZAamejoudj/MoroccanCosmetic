"use client";

import { MapPin } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";
import { MOROCCO_MAP_PATH } from "@/components/about/moroccoMapPath";

export default function AboutHeroVisual() {
  const t = useTranslations("about");

  return (
    <aside
      className="relative flex w-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] lg:h-full flex-col"
      aria-label={t.visualAria}
    >
      <div className="relative flex flex-col sm:flex-row flex-1 gap-5 sm:gap-3 lg:gap-2 items-start justify-end lg:pt-2">
        <div className="flex flex-col z-10 max-w-[320px] sm:max-w-[300px] pt-8 sm:pt-10 lg:pt-16 lg:pe-1">
          <p className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-[1.05]">
            {t.visualCity}
          </p>
          <p className="mt-2 text-xl sm:text-2xl text-foreground/75 font-light">
            {t.visualCountry}
          </p>
          <p className="mt-6 text-base sm:text-lg text-foreground/85 font-light leading-relaxed">
            {t.visualBlurb}
          </p>
        </div>

        <div className="flex flex-col shrink-0 items-center gap-6">
          <div className="relative w-full max-w-[280px] sm:max-w-[380px] lg:max-w-[420px]">
            <svg
              viewBox="0 0 1024 1024"
              className="w-full h-auto text-rose/80"
              fill="currentColor"
              aria-label={t.mapAlt}
            >
              <g transform="translate(0,1024) scale(0.1,-0.1)">
                <path d={MOROCCO_MAP_PATH} />
              </g>
            </svg>
            <div
              className="absolute top-[42%] left-[44%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
              aria-label={t.visualCity}
            >
              <span
                className="inline-flex h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full border-2 border-white bg-white/25 shadow-sm"
                aria-hidden
              />
            </div>
          </div>

          <p className="inline-flex items-center gap-2 text-base font-medium text-foreground">
            <MapPin
              className="h-5 w-5 text-rose shrink-0"
              strokeWidth={2}
              aria-hidden
            />
            {t.visualFooter}
          </p>
        </div>
      </div>
    </aside>
  );
}
