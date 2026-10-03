"use client";

import React from "react";
import Image from "next/image";
import { Factory, Globe, Package } from "lucide-react";
import { useTranslations } from "@/i18n/useTranslations";

export default function ServicesSection() {
  const t = useTranslations("home");

  const services = [
    {
      icon: <Factory className="w-8 h-8 text-rose" />,
      title: t.serviceManufacturerTitle,
      desc: t.serviceManufacturerDesc
    },
    {
      icon: <Globe className="w-8 h-8 text-rose" />,
      title: t.serviceExporterTitle,
      desc: t.serviceExporterDesc
    },
    {
      icon: <Package className="w-8 h-8 text-rose" />,
      title: t.serviceWholesalerTitle,
      desc: t.serviceWholesalerDesc
    }
  ];

  const ingredients = [
    {
      name: t.arganName,
      image: "/images/catalog/argan-oil.webp",
      desc: t.arganDesc
    },
    {
      name: t.pricklyName,
      image: "/images/catalog/prickly-pear-oil.webp",
      desc: t.pricklyDesc
    },
    {
      name: t.soapName,
      image: "/images/catalog/black-soap.webp",
      desc: t.soapDesc
    },
    {
      name: t.roseName,
      image: "/images/catalog/rose-water.webp",
      desc: t.roseDesc
    },
    {
      name: t.clayName,
      image: "/images/catalog/ghassoul-clay.webp",
      desc: t.clayDesc
    },
    {
      name: t.orangeName,
      image: "/images/catalog/orange-blossom-water.webp",
      desc: t.orangeDesc
    }
  ];

  return (
    <>
      {/* SECTION 1: BULK & WHOLESALE FACTORY */}
      <section id="services" className="py-16 md:py-24 border-b border-border bg-blush/10">
        <div className="container-wide px-4 md:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            {/* Left Content (B2B Intro) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.servicesSubtitle}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-2 mb-6">
                {t.servicesHeading}
              </h2>
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed font-light space-y-6">
                <p>
                  {t.servicesP1}
                </p>
                <p>
                  {t.servicesP2}
                </p>
                <p className="font-normal text-rose">
                  {t.servicesP3}
                </p>
              </div>
            </div>

            {/* Right Interactive Card */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-border group">
              <Image
                src="/images/factory/production-line.webp"
                alt="Moroccan cosmetic factory production line"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <p className="text-xs uppercase tracking-wider font-semibold text-rose-light mb-1">{t.servicesCardSub}</p>
                <h3 className="text-xl font-serif font-medium">{t.servicesCardTitle}</h3>
              </div>
            </div>
          </div>

          {/* Raw Materials Grid Showcase */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-center mb-10">
              {t.ingredientsHeading}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ingredients.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-rose/20 transition-all duration-300 group"
                >
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-border">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-rose transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 2: CORE SERVICES */}
      <section className="py-16 md:py-24 border-b border-border bg-background">
        <div className="container-wide px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">{t.capabilitiesSub}</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mt-2 mb-4">{t.capabilitiesTitle}</h2>
            <p className="text-lg text-muted-foreground">
              {t.capabilitiesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-start p-6 md:p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 card-lift"
              >
                <div className="p-3.5 rounded-xl bg-rose/10 mb-6 text-rose">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light text-base">{service.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
