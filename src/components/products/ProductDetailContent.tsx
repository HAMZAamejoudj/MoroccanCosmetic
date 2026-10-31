"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileText,
  Globe2,
  HelpCircle,
  Layers,
  MessageSquare,
  Package,
  ShieldCheck,
  Tag,
  Truck,
} from "lucide-react";
import type { SiteLocale } from "@/i18n/locale";
import type { ProductCatalogItem, ProductLocalizedData } from "@/lib/products";
import { getWhatsAppUrl } from "@/config/siteConfig";
import { localizedPathForLocale } from "@/lib/localeCatalog";
import { PAGE_CONTAINER } from "@/lib/pageContainer";

interface Props {
  product: ProductCatalogItem & ProductLocalizedData;
  relatedProducts: Array<ProductCatalogItem & ProductLocalizedData>;
  locale: SiteLocale;
}

const UI_COPY = {
  en: {
    home: "Home",
    products: "Products",
    skuLabel: "SKU",
    inciLabel: "INCI Name",
    originLabel: "Origin",
    extractionLabel: "Process",
    moqBulkLabel: "Bulk MOQ",
    moqPlLabel: "Private Label MOQ",
    inquireWhatsApp: "Inquire via WhatsApp",
    requestQuote: "Request a Quote & Samples",
    producerBadge: "Producer-Direct from Morocco",
    certifiedBadge: "100% Export Grade",
    batchDocsBadge: "Batch COA & MSDS Included",
    overviewTitle: "Product Overview & Heritage",
    benefitsTitle: "Key Benefits & Cosmetic Properties",
    specsTitle: "Technical Specifications",
    appsTitle: "Recommended Applications",
    packagingTitle: "Packaging & Supply Formats",
    bulkHeading: "Bulk Raw Materials",
    plHeading: "Turnkey Private Label (OEM)",
    qualityTitle: "Quality Assurance & Certifications",
    faqTitle: "Frequently Asked Questions",
    relatedTitle: "Explore More Moroccan Products",
    viewProduct: "View Details",
    ctaTitle: "Ready to Source Direct from Our Marrakech Factory?",
    ctaDesc:
      "Contact our export team today for current bulk price lists, custom private label quotes, and worldwide door-to-door air or sea freight arrangements.",
    ctaWhatsApp: "Chat with Sales Team",
    ctaContact: "Submit Wholesale Inquiry",
  },
  fr: {
    home: "Accueil",
    products: "Produits",
    skuLabel: "Réf.",
    inciLabel: "Nom INCI",
    originLabel: "Origine",
    extractionLabel: "Procédé",
    moqBulkLabel: "MOQ Vrac",
    moqPlLabel: "MOQ Marque Blanche",
    inquireWhatsApp: "Demande via WhatsApp",
    requestQuote: "Demander un devis & échantillons",
    producerBadge: "Direct Producteur Marocain",
    certifiedBadge: "Qualité Export Certifiée",
    batchDocsBadge: "Analyses & FDS incluses",
    overviewTitle: "Présentation & Origine du Produit",
    benefitsTitle: "Bienfaits & Propriétés Cosmétiques",
    specsTitle: "Spécifications Techniques",
    appsTitle: "Applications Cosmétiques Recommandées",
    packagingTitle: "Conditionnement & Formats de Vente",
    bulkHeading: "Matières Premières en Vrac",
    plHeading: "Marque Blanche Clé en Main (OEM)",
    qualityTitle: "Assurance Qualité & Conformité",
    faqTitle: "Questions Fréquentes sur ce Produit",
    relatedTitle: "Découvrez d'Autres Produits Marocains",
    viewProduct: "Voir les détails",
    ctaTitle: "Prêt à vous approvisionner directement auprès de notre usine à Marrakech ?",
    ctaDesc:
      "Contactez notre service export pour obtenir nos grilles tarifaires de gros, étudier votre projet de marque blanche ou organiser l'expédition internationale.",
    ctaWhatsApp: "Échanger sur WhatsApp",
    ctaContact: "Envoyer une demande de devis",
  },
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    skuLabel: "رمز المنتج",
    inciLabel: "الاسم العلمي (INCI)",
    originLabel: "المنشأ",
    extractionLabel: "طريقة الاستخلاص",
    moqBulkLabel: "الحد الأدنى للجملة",
    moqPlLabel: "الحد الأدنى للعلامة الخاصة",
    inquireWhatsApp: "استفسر عبر واتساب",
    requestQuote: "طلب عرض أسعار وعينات",
    producerBadge: "مباشرة من المصنع في المغرب",
    certifiedBadge: "جودة تصدير معتمدة",
    batchDocsBadge: "شهادات التحليل والسلامة متوفرة",
    overviewTitle: "نظرة عامة وأصالة المنتج",
    benefitsTitle: "أبرز الفوائد والخصائص التجميلية",
    specsTitle: "المواصفات الفنية والتركيب",
    appsTitle: "الاستخدامات والتطبيقات الموصى بها",
    packagingTitle: "خيارات التعبئة والتوريد",
    bulkHeading: "مواد خام بالجملة (براميل وجالونات)",
    plHeading: "العلامة الخاصة والتعبئة المتكاملة (OEM)",
    qualityTitle: "ضمان الجودة والشهادات المعتمدة",
    faqTitle: "الأسئلة الشائعة حول هذا المنتج",
    relatedTitle: "استكشف المزيد من المنتجات المغربية",
    viewProduct: "عرض التفاصيل",
    ctaTitle: "مستعدون للتوريد مباشرة من مصنعنا في مراكش؟",
    ctaDesc:
      "تواصلوا مع فريق التصدير اليوم للحصول على لوائح الأسعار المحدثة، وطلب عينات، أو التنسيق لشحن الطلبات جواً أو بحراً لجميع أنحاء العالم.",
    ctaWhatsApp: "محادثة فريق المبيعات",
    ctaContact: "إرسال طلب استفسار بالجملة",
  },
};

interface ProductGuideLink {
  slug: string;
  badge: Record<SiteLocale, string>;
  title: Record<SiteLocale, string>;
  desc: Record<SiteLocale, string>;
  readTime: string;
}

const PRODUCT_GUIDES: Record<string, ProductGuideLink> = {
  "argan-oil": {
    slug: "packaging-for-natural-oils",
    badge: {
      en: "Sourcing & Packaging Guide",
      fr: "Guide Approvisionnement & Flaconnage",
      ar: "دليل التوريد والتعبئة",
    },
    title: {
      en: "Packaging for Natural Oils: Protecting Precious Argan & Carrier Oils",
      fr: "Conditionnement des Huiles Naturelles : Protéger l'Argan et vos Huiles Végétales",
      ar: "دليل تعبئة الزيوت الطبيعية: حماية زيت الأركان والزيوت الحاملة من الأكسدة",
    },
    desc: {
      en: "Learn why amber glass, pump choices, and UV protection are crucial for bulk and retail Moroccan argan oil shelf stability.",
      fr: "Découvrez pourquoi le verre ambré, le choix des pompes et la protection UV sont cruciaux pour la stabilité de l'huile d'argan.",
      ar: "تعرف على أهمية الزجاج العنبري، واختيار المضخات، وحماية الأشعة فوق البنفسجية لضمان ثبات جودة زيت الأركان للتصدير.",
    },
    readTime: "4 min read",
  },
  "prickly-pear": {
    slug: "packaging-for-natural-oils",
    badge: {
      en: "Luxury Seed Oil Guide",
      fr: "Guide Huiles Précieuses",
      ar: "دليل الزيوت النادرة الفاخرة",
    },
    title: {
      en: "Packaging & Sourcing Guide for Prickly Pear Seed Oil",
      fr: "Guide de Conditionnement et de Sourcing pour l'Huile de Figue de Barbarie",
      ar: "دليل تعبئة وتوريد زيت بذور التين الشوكي النادر",
    },
    desc: {
      en: "How to preserve the ultra-high Vitamin E and sterol potency of prickly pear seed oil using professional airtight dropper bottles.",
      fr: "Comment préserver la haute teneur en vitamine E et stérols de l'huile de figue de barbarie grâce à un flaconnage étanche.",
      ar: "كيفية حماية التركيز العالي لفيتامين E ومضادات الأكسدة في زيت التين الشوكي عبر عبوات وقطارات محكمة الإغلاق.",
    },
    readTime: "4 min read",
  },
  "black-soap": {
    slug: "how-moroccan-black-soap-is-made",
    badge: {
      en: "Traditional Hammam Production",
      fr: "Production Traditionnelle du Hammam",
      ar: "طرق تصنيع منتجات الحمام الأصيلة",
    },
    title: {
      en: "How Moroccan Black Soap Is Made: From Olive Paste to the Jar",
      fr: "Comment le Savon Noir Marocain est Fabriqué : De la Pâte d'Olive au Pot",
      ar: "كيف يُصنع الصابون الأسود المغربي: من عجينة الزيتون إلى العبوة",
    },
    desc: {
      en: "Step-by-step insight into our Marrakech workshop saponification process, potash balance, and wholesale bulk quality checks.",
      fr: "Découvrez les étapes de saponification dans notre atelier de Marrakech, le dosage de la potasse et les contrôles qualité en gros.",
      ar: "نظرة تفصيلية على مراحل التصبين بالبوتاس في ورشتنا بمراكش، وضوابط الجودة المعتمدة لتوريد الصابون البلدي بالجملة.",
    },
    readTime: "5 min read",
  },
  "ghassoul-clay": {
    slug: "ghassoul-clay-bulk-buying-guide",
    badge: {
      en: "Mineral Clay Buyer's Guide",
      fr: "Guide d'Achat Argile Minérale",
      ar: "دليل شراء الطين المعدني بالجملة",
    },
    title: {
      en: "Ghassoul Clay Bulk Buying Guide: Forms, Grades & Lab Checks",
      fr: "Guide d'Achat du Ghassoul en Vrac : Formes, Granulométrie & Analyses",
      ar: "دليل شراء طين الغاسول المغربي بالجملة: الأنواع، المعايير والتحاليل المخبرية",
    },
    desc: {
      en: "Everything B2B buyers need to know about raw chunks, flakes, micronized powder, microbiology testing, and heavy metals clearance.",
      fr: "Tout ce que les acheteurs professionnels doivent savoir sur les morceaux, plaquettes, poudre micronisée et analyses de métaux lourds.",
      ar: "كل ما يحتاجه المشترون والشركات حول الأحجار الخام، الرقائق، المسحوق الميكروني فائق النعومة، وفحوصات المعادن الثقيلة.",
    },
    readTime: "5 min read",
  },
  "rose-water": {
    slug: "orange-blossom-water-vs-rose-water",
    badge: {
      en: "Hydrosol Comparison Guide",
      fr: "Comparatif des Hydrolats",
      ar: "دليل المقارنة بين المياه الزهرية",
    },
    title: {
      en: "Orange Blossom Water vs Rose Water: Which Floral Water for Your Brand?",
      fr: "Eau de Fleur d'Oranger ou Eau de Rose : Quelle Eau Florale Choisir ?",
      ar: "ماء زهر البرتقال مقابل ماء الورد: أيهما تختار لعلامتك التجارية؟",
    },
    desc: {
      en: "Explore the harvest cycles, distillation differences, and formulation properties of Morocco's two famous floral waters.",
      fr: "Comparez les saisons de récolte, les techniques de distillation et les usages cosmétiques des deux eaux florales marocaines.",
      ar: "استكشف مواسم الحصاد، وفروق التقطير البخاري، والخصائص التجميلية لأشهر مياه الزهور المغربية المقطرة.",
    },
    readTime: "4 min read",
  },
  "orange-blossom-water": {
    slug: "orange-blossom-water-vs-rose-water",
    badge: {
      en: "Hydrosol Comparison Guide",
      fr: "Comparatif des Hydrolats",
      ar: "دليل المقارنة بين المياه الزهرية",
    },
    title: {
      en: "Orange Blossom Water vs Rose Water: Which Floral Water for Your Brand?",
      fr: "Eau de Fleur d'Oranger ou Eau de Rose : Quelle Eau Florale Choisir ?",
      ar: "ماء زهر البرتقال مقابل ماء الورد: أيهما تختار لعلامتك التجارية؟",
    },
    desc: {
      en: "Discover why bitter orange blossom hydrosol (Neroli water) is a standout ingredient for refreshing facial mists and luxury toners.",
      fr: "Découvrez pourquoi l'hydrolat de fleurs de bigaradier est l'ingrédient idéal pour vos brumes toniques et soins parfumés.",
      ar: "تعرف على أسباب تميز ماء زهر النارنج المقطر كعنصر استثنائي لبخاخات الوجه وتونر البشرة المنعش.",
    },
    readTime: "4 min read",
  },
  "nila-powder": {
    slug: "what-is-blue-nila-powder",
    badge: {
      en: "Authentic Botanical Guide",
      fr: "Guide Botanique Authentique",
      ar: "دليل الأصالة النباتية التراثية",
    },
    title: {
      en: "What Is Blue Nila Powder? History, Rituals & Spotting Real vs Fake",
      fr: "Qu'est-ce que la Poudre de Nila Bleue ? Origine, Rituels & Authenticité",
      ar: "ما هو مسحوق النيلة الزرقاء؟ التاريخ، الطقوس، وكيفية تمييز النيلة الأصلية",
    },
    desc: {
      en: "Essential verification criteria for cosmetic brands: natural indigo leaf composition, laboratory safety tests, and hammam pairings.",
      fr: "Critères essentiels pour les marques cosmétiques : composition végétale en indigo, tests de laboratoire et rituels hammam.",
      ar: "معايير الفحص الأساسية لعلامات التجميل: التركيب النباتي لنبات الإنديجو الطبيعي، واختبارات السلامة المخبرية لتجنب المساحيق المغشوشة.",
    },
    readTime: "4 min read",
  },
  "sidr-powder": {
    slug: "sidr-powder-for-hair",
    badge: {
      en: "Natural Haircare Sourcing",
      fr: "Sourcing Soins Capillaires Naturels",
      ar: "دليل توريد العناية الطبيعية بالشعر",
    },
    title: {
      en: "Sidr Powder for Hair Care: Traditional Use & Formulation Guide",
      fr: "Poudre de Sidr pour les Cheveux : Usages Traditionnels & Guide de Formulation",
      ar: "مسحوق السدر للشعر: الاستخدام التقليدي، آلية العمل ودليل التركيبات",
    },
    desc: {
      en: "How natural plant saponins in jujube leaves create a gentle no-poo hair cleanser and bulk quality checks for export.",
      fr: "Comment les saponines naturelles des feuilles de jujubier lavent les cheveux en douceur et les critères de contrôle export.",
      ar: "كيف تعمل مادة السابونين الطبيعية في أوراق السدر كبديل منظف للشامبو، وضوابط الجودة والميكروبيولوجيا للتصدير الدولي.",
    },
    readTime: "4 min read",
  },
  "aker-fassi": {
    slug: "what-is-blue-nila-powder",
    badge: {
      en: "Heritage Botanical Pigments",
      fr: "Pigments Botaniques Ancestraux",
      ar: "الأصباغ النباتية التراثية",
    },
    title: {
      en: "Moroccan Botanical Rituals: Aker Fassi, Blue Nila & Natural Pigments",
      fr: "Rituels Botaniques Marocains : Aker Fassi, Nila Bleu & Pigments Végétaux",
      ar: "طقوس الجمال المغربي النباتية: العكر الفاسي، النيلة الزرقاء والأصباغ الطبيعية",
    },
    desc: {
      en: "Explore how traditional Moroccan poppy and pomegranate petal extracts create iconic natural cosmetic colors and ritual treatments.",
      fr: "Découvrez comment les pétales de coquelicot et l'écorce de grenade créent des pigments cosmétiques naturels emblématiques.",
      ar: "تعرف على كيفية استخلاص أوراق شقائق النعمان وقشور الرمان لإنتاج مسحوق العكر الفاسي التراثي المستخدم في العناية بالبشرة والشفاه.",
    },
    readTime: "4 min read",
  },
};

export default function ProductDetailContent({ product, relatedProducts, locale }: Props) {
  const ui = UI_COPY[locale];
  const flip = locale === "ar";
  const whatsappBase = getWhatsAppUrl();
  const whatsappUrl = `${whatsappBase}?text=${encodeURIComponent(product.waMessage)}`;
  const guide = PRODUCT_GUIDES[product.slug];

  return (
    <main className="pt-24 md:pt-28 pb-20">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-4 border-b border-border/50 bg-background/50">
        <div className={PAGE_CONTAINER}>
          <ol className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-muted-foreground">
            <li>
              <Link
                href={localizedPathForLocale("/", locale)}
                className="hover:text-rose transition-colors duration-150"
              >
                {ui.home}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
            </li>
            <li>
              <Link
                href={localizedPathForLocale("/products", locale)}
                className="hover:text-rose transition-colors duration-150"
              >
                {ui.products}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
            </li>
            <li className="text-foreground font-medium">
              {product.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Showcase Section */}
      <section className="py-10 md:py-16">
        <div className={PAGE_CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left: Image Showcase */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-muted border border-border shadow-md group">
                <Image
                  src={product.image.src}
                  alt={product.title}
                  width={product.image.width}
                  height={product.image.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-card border border-border text-center">
                <div className="flex flex-col items-center gap-1">
                  <Globe2 className="w-5 h-5 text-rose" />
                  <span className="text-[11px] font-medium text-foreground/80 leading-tight">
                    {locale === "fr" ? "Export 40+ Pays" : locale === "ar" ? "تصدير عالمي" : "Export 40+ Countries"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1 border-x border-border/60">
                  <FileText className="w-5 h-5 text-rose" />
                  <span className="text-[11px] font-medium text-foreground/80 leading-tight">
                    {locale === "fr" ? "COA & FDS Inclus" : locale === "ar" ? "شهادة COA و MSDS" : "COA & MSDS Ready"}
                  </span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Truck className="w-5 h-5 text-rose" />
                  <span className="text-[11px] font-medium text-foreground/80 leading-tight">
                    {locale === "fr" ? "Vrac & OEM" : locale === "ar" ? "جملة وعلامة خاصة" : "Bulk & OEM"}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Direct CTAs */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose/10 text-rose border border-rose/20">
                  {product.categoryName}
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  {ui.skuLabel}: {product.sku}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
                {product.title}
              </h1>

              <p className="text-base md:text-lg text-rose/90 font-serif italic mb-4">
                {product.subtitle}
              </p>

              <p className="text-base text-foreground/85 font-light leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Key Highlights In Hero */}
              <div className="mb-6 p-4 rounded-2xl bg-card border border-border shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose mb-3">
                  {locale === "fr" ? "Points Forts & Caractéristiques" : locale === "ar" ? "أبرز مميزات وخصائص المنتج" : "Key Product Highlights"}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs md:text-sm text-foreground/85">
                  {product.keyBenefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-snug">
                        <strong className="font-semibold text-foreground">{b.title}: </strong>
                        <span className="text-muted-foreground">{b.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fast Spec Box - Full Text Without Truncation */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-2xl bg-muted/25 border border-border mb-6">
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground block mb-0.5">{ui.originLabel}</span>
                  <span className="text-xs font-semibold text-foreground leading-snug">{product.origin}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground block mb-0.5">{ui.extractionLabel}</span>
                  <span className="text-xs font-semibold text-foreground leading-snug">{product.extractionMethod}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground block mb-0.5">{ui.moqBulkLabel}</span>
                  <span className="text-xs font-semibold text-rose leading-snug">{product.moq.bulk}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground block mb-0.5">{ui.moqPlLabel}</span>
                  <span className="text-xs font-semibold text-rose leading-snug">{product.moq.privateLabel}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  {ui.inquireWhatsApp}
                </a>

                <Link
                  href={localizedPathForLocale("/contact", locale)}
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl border border-rose/30 bg-rose/5 hover:bg-rose hover:text-white text-rose font-semibold text-sm transition-all duration-300"
                >
                  {ui.requestQuote}
                  <ArrowRight className={`w-4 h-4 ${flip ? "rotate-180" : ""}`} />
                </Link>
              </div>

              {/* Botanical & Regulatory Tags */}
              <div className="pt-5 border-t border-border flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Check className="w-4 h-4 text-emerald-600" />
                  INCI: {product.inciName}
                </span>
                {product.casNumber && (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    CAS: {product.casNumber}
                  </span>
                )}
                {product.hsCode && (
                  <span className="flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                    HS Code: {product.hsCode}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Story Section */}
      <section className="py-12 md:py-16 bg-blush/10 border-y border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                {product.title}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2">
                {ui.overviewTitle}
              </h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground/85 font-light">
              {product.longDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-14 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-rose">
              {locale === "fr" ? "Efficacité & Actifs" : locale === "ar" ? "الفعالية والنتائج" : "Efficacy & Actives"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              {ui.benefitsTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {product.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-rose/30 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-rose/10 text-rose flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold text-foreground mb-1.5">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="py-12 md:py-16 bg-muted/30 border-y border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                {locale === "fr" ? "Données Techniques" : locale === "ar" ? "البيانات الفنية" : "Technical Data"}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2">
                {ui.specsTitle}
              </h2>
            </div>

            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="divide-y divide-border">
                {product.specifications.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 sm:grid-cols-3 p-4 text-sm ${
                      idx % 2 === 0 ? "bg-card" : "bg-muted/15"
                    }`}
                  >
                    <span className="font-semibold text-foreground sm:col-span-1">
                      {spec.label}
                    </span>
                    <span className="text-muted-foreground sm:col-span-2 font-light mt-1 sm:mt-0">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-14 md:py-20">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                {locale === "fr" ? "Formulation & Rituels" : locale === "ar" ? "التركيبات والتصنيع" : "Formulation & Rituals"}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2">
                {ui.appsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm"
                >
                  <Layers className="w-5 h-5 text-rose shrink-0" />
                  <span className="text-sm text-foreground/90 font-medium">{app}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging & Supply Options (Bulk vs Private Label) */}
      <section className="py-14 md:py-20 bg-blush/10 border-y border-border/60">
        <div className={PAGE_CONTAINER}>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-rose">
              {locale === "fr" ? "Solutions B2B" : locale === "ar" ? "حلول التوريد والتعبئة" : "B2B Solutions"}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              {ui.packagingTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bulk Card */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col h-full">
              <div className="w-12 h-12 rounded-2xl bg-rose/10 text-rose flex items-center justify-center mb-6">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                {ui.bulkHeading}
              </h3>
              <p className="text-xs text-rose font-semibold uppercase tracking-wider mb-5">
                {ui.moqBulkLabel}: {product.moq.bulk}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {product.packagingOptions.bulk.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light">
                    <Check className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl border border-rose/30 bg-rose/5 text-rose hover:bg-rose hover:text-white font-semibold text-sm transition-all"
              >
                {ui.inquireWhatsApp}
                <ArrowRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
              </a>
            </div>

            {/* Private Label Card */}
            <div className="p-8 rounded-3xl bg-card border border-border shadow-sm flex flex-col h-full relative overflow-hidden">
              <div className="absolute top-0 start-0 w-full h-1 bg-gradient-to-r from-rose to-amber-600" />
              <div className="w-12 h-12 rounded-2xl bg-rose/10 text-rose flex items-center justify-center mb-6">
                <Tag className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                {ui.plHeading}
              </h3>
              <p className="text-xs text-rose font-semibold uppercase tracking-wider mb-5">
                {ui.moqPlLabel}: {product.moq.privateLabel}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {product.packagingOptions.privateLabel.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground font-light">
                    <Check className="w-4 h-4 text-rose shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={localizedPathForLocale("/private-label-moroccan-cosmetics", locale)}
                className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-rose hover:bg-rose/90 text-white font-semibold text-sm transition-all shadow-sm"
              >
                {locale === "fr" ? "Découvrir la Marque Blanche" : locale === "ar" ? "خدمات العلامة الخاصة" : "Explore Private Label"}
                <ArrowRight className={`w-3.5 h-3.5 ${flip ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Documents */}
      <section className="py-14 md:py-18">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                {locale === "fr" ? "Sécurité & Export" : locale === "ar" ? "السلامة والتصدير" : "Safety & Export"}
              </span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mt-2">
                {ui.qualityTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.qualityCertificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm"
                >
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span className="text-xs md:text-sm text-foreground/90 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Specific FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-14 md:py-20 bg-muted/20 border-y border-border/60">
          <div className={PAGE_CONTAINER}>
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                  {ui.faqTitle}
                </span>
                <h2 className="text-3xl font-serif font-bold text-foreground mt-2">
                  {locale === "fr" ? "Foire Aux Questions" : locale === "ar" ? "الأسئلة الأكثر تكراراً" : "Got Questions?"}
                </h2>
              </div>

              <div className="space-y-4">
                {product.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-card border border-border shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-base font-semibold text-foreground mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Sourcing Guide & Expert Insights Section */}
      {guide && (
        <section className="py-14 md:py-18 bg-blush/15 border-b border-border/60">
          <div className={PAGE_CONTAINER}>
            <div className="max-w-4xl mx-auto">
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-rose/25 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-rose/10 text-rose border border-rose/20">
                      {guide.badge[locale]}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-rose" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground leading-snug">
                    <Link
                      href={localizedPathForLocale(`/blog/${guide.slug}`, locale)}
                      className="hover:text-rose transition-colors"
                    >
                      {guide.title[locale]}
                    </Link>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                    {guide.desc[locale]}
                  </p>
                </div>
                <div className="shrink-0 w-full md:w-auto">
                  <Link
                    href={localizedPathForLocale(`/blog/${guide.slug}`, locale)}
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose hover:bg-rose-dark text-white font-semibold text-sm transition-all shadow-md shadow-rose/20 hover:scale-103"
                  >
                    <span>
                      {locale === "fr"
                        ? "Lire le Guide Complet"
                        : locale === "ar"
                        ? "قراءة الدليل الشامل"
                        : "Read Sourcing Guide"}
                    </span>
                    <ArrowRight className={`w-4 h-4 ${flip ? "rotate-180" : ""}`} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Products Carousel / Grid */}
      {relatedProducts.length > 0 && (
        <section className="py-16 md:py-24">
          <div className={PAGE_CONTAINER}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-rose">
                {locale === "fr" ? "Catalogue Marocain" : locale === "ar" ? "كتالوج المستحضرات" : "Moroccan Catalog"}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                {ui.relatedTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedProducts.map((rel) => (
                <article
                  key={rel.slug}
                  className="flex flex-col h-full rounded-2xl bg-card border border-border shadow-sm overflow-hidden hover:shadow-md hover:border-rose/30 transition-all duration-300"
                >
                  <Link
                    href={localizedPathForLocale(`/products/${rel.slug}`, locale)}
                    className="relative aspect-square w-full overflow-hidden bg-muted group block"
                  >
                    <Image
                      src={rel.image.src}
                      alt={rel.title}
                      width={rel.image.width}
                      height={rel.image.height}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-xs uppercase font-semibold text-rose mb-1">
                      {rel.categoryName}
                    </span>
                    <Link
                      href={localizedPathForLocale(`/products/${rel.slug}`, locale)}
                      className="text-lg font-serif font-semibold text-foreground hover:text-rose transition-colors mb-2"
                    >
                      {rel.title}
                    </Link>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6 flex-grow">
                      {rel.shortDescription}
                    </p>
                    <Link
                      href={localizedPathForLocale(`/products/${rel.slug}`, locale)}
                      className="inline-flex items-center gap-2 text-rose font-semibold text-sm hover:underline"
                    >
                      {ui.viewProduct}
                      <ArrowRight className={`w-4 h-4 ${flip ? "rotate-180" : ""}`} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom Wholesale CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rose/10 via-blush/20 to-background border-t border-border/80">
        <div className={PAGE_CONTAINER}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="w-12 h-12 rounded-2xl bg-rose/15 text-rose inline-flex items-center justify-center mb-6">
              <ClipboardList className="w-6 h-6" />
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              {ui.ctaTitle}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-8">
              {ui.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 h-12 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                {ui.ctaWhatsApp}
              </a>
              <Link
                href={localizedPathForLocale("/contact", locale)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-rose hover:bg-rose/90 text-white font-semibold text-sm transition-all shadow-md"
              >
                {ui.ctaContact}
                <ArrowRight className={`w-4 h-4 ${flip ? "rotate-180" : ""}`} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

