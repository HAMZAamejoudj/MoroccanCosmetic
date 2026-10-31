import { siteImages, type SiteImage } from "@/config/siteImages";
import type { SiteLocale } from "@/i18n/locale";

export interface ProductLocalizedData {
  title: string;
  subtitle: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  longDescription: string[];
  categoryName: string;
  origin: string;
  extractionMethod: string;
  keyBenefits: Array<{
    title: string;
    description: string;
  }>;
  specifications: Array<{
    label: string;
    value: string;
  }>;
  applications: string[];
  packagingOptions: {
    bulk: string[];
    privateLabel: string[];
  };
  moq: {
    bulk: string;
    privateLabel: string;
  };
  qualityCertificates: string[];
  waMessage: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ProductCatalogItem {
  slug: string;
  sku: string;
  category: "oils" | "soaps-clays" | "waters" | "powders";
  image: SiteImage;
  inciName: string;
  casNumber?: string;
  hsCode?: string;
  locales: Record<SiteLocale, ProductLocalizedData>;
}

export const PRODUCTS_CATALOG: ProductCatalogItem[] = [
  {
    slug: "argan-oil",
    sku: "MC-ARG-001",
    category: "oils",
    image: siteImages.catalog.arganOil,
    inciName: "Argania Spinosa Kernel Oil",
    casNumber: "223747-87-3",
    hsCode: "1515.90",
    locales: {
      en: {
        title: "Pure Moroccan Argan Oil",
        subtitle: "First cold-pressed cosmetic grade virgin argan oil direct from Moroccan cooperatives",
        seoTitle: "Wholesale Moroccan Argan Oil | Pure & Cold-Pressed Bulk Supply | Morocco Cosmetic",
        seoDescription: "Buy pure cold-pressed Moroccan argan oil in bulk or private label. Factory-direct wholesale supply from Marrakech with full COA and export documentation.",
        shortDescription: "Cold-pressed cosmetic argan oil rich in vitamin E and essential fatty acids for skin, hair, and OEM formulations.",
        longDescription: [
          "Often referred to as 'liquid gold', authentic Moroccan argan oil is one of the world's most sought-after cosmetic botanicals. Sourced directly from our partner women's cooperatives in the UNESCO-protected argan biosphere of southwestern Morocco, our kernels are harvested and selected with meticulous care.",
          "At our modern Marrakech processing facility, the kernels undergo cold mechanical pressing below 40°C without the use of solvents or chemical refining. This gentle artisan method preserves the natural profile of unsaturated fatty acids (omega-6 linoleic and omega-9 oleic), plant sterols, and high concentrations of antioxidant tocopherols (Vitamin E).",
          "Whether you need raw bulk drums for large-scale cosmetic manufacturing, salon-grade hair care treatments, or a turnkey private-label skincare range, we provide consistent export-grade quality backed by comprehensive laboratory analysis and international export documentation."
        ],
        categoryName: "Carrier & Botanical Oils",
        origin: "Souss-Massa & Marrakech, Morocco",
        extractionMethod: "First Cold-Pressed (Extra Virgin)",
        keyBenefits: [
          {
            title: "Potent Natural Antioxidant",
            description: "Packed with vitamin E (tocopherols) and polyphenols that defend against environmental oxidation and premature skin aging."
          },
          {
            title: "Intense Moisture & Elasticity",
            description: "High concentration of oleic and linoleic essential fatty acids deeply nourishes the lipid barrier, boosting skin suppleness and elasticity."
          },
          {
            title: "Non-Comedogenic & Fast-Absorbing",
            description: "Lightweight texture that sinks quickly into skin without greasy residue or pore clogging, suitable for all skin types."
          },
          {
            title: "Hair Cuticle & Scalp Care",
            description: "Restores glossy shine to dry, damaged hair strands, seals split ends, and calms dry, sensitive scalps."
          }
        ],
        specifications: [
          { label: "Botanical Name / INCI", value: "Argania Spinosa Kernel Oil" },
          { label: "Appearance", value: "Clear, golden-yellow liquid" },
          { label: "Odor", value: "Characteristic light nutty aroma (deodorized options available)" },
          { label: "Fatty Acid Profile", value: "Oleic (43–49%), Linoleic (29–36%), Palmitic (11–15%), Stearic (4–7%)" },
          { label: "Vitamin E Content", value: "Approx. 600–700 mg/kg" },
          { label: "Shelf Life", value: "24 months when stored in cool, dark conditions" },
          { label: "Quality Grade", value: "100% Pure Virgin Cosmetic Grade" }
        ],
        applications: [
          "Anti-aging face serums and dry facial oils",
          "Nourishing hair treatment oils, shampoos, and conditioners",
          "Rich body butters, massage oils, and stretch-mark creams",
          "Cuticle treatments and nail strengthening formulas",
          "Active carrier oil in OEM and custom cosmetic manufacturing"
        ],
        packagingOptions: {
          bulk: [
            "5 Liters / 25 Liters food-grade HDPE jerrycans",
            "200 Liters steel/poly drums with tamper-evident seals",
            "1,000 Liters food-grade IBC containers for industrial scale"
          ],
          privateLabel: [
            "30ml / 50ml / 100ml amber, frosted or clear glass dropper bottles",
            "Treatment pump bottles, pipette droppers or spray nozzles",
            "Custom silkscreen printing, waterproof luxury labels, and outer cartons"
          ]
        },
        moq: {
          bulk: "5 Liters",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Material Safety Data Sheet (MSDS / SDS)",
          "100% Organic & Ecocert / USDA compliant documentation",
          "ONSSA Moroccan sanitary export certificate",
          "ISO 22716 Good Manufacturing Practices (GMP)"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Argan Oil.",
        faqs: [
          {
            question: "What is the difference between cosmetic and culinary argan oil?",
            answer: "Cosmetic argan oil is pressed raw from unroasted argan kernels to preserve vitamins, sterols, and antioxidant potency with a mild nutty aroma. Culinary argan oil is made from gently roasted kernels which imparts a deep golden hue and strong nutty taste."
          },
          {
            question: "Can you provide batch-specific Certificates of Analysis (COA)?",
            answer: "Yes, every export shipment is accompanied by a fresh batch COA detailing peroxide value, acidity, fatty acid profile, and microbiological testing."
          },
          {
            question: "Do you supply deodorized argan oil for fragrance formulations?",
            answer: "Yes, in addition to virgin raw argan oil, we offer gently deodorized argan oil where the natural scent has been filtered without chemical solvents, ideal for perfumed skincare formulations."
          }
        ]
      },
      fr: {
        title: "Huile d'Argan Pure du Maroc",
        subtitle: "Huile d'argan cosmétique vierge de première pression à froid issue des coopératives marocaines",
        seoTitle: "Huile d'Argan Marocaine en Gros | Pure & Pressée à Froid | Morocco Cosmetic",
        seoDescription: "Achetez de l'huile d'argan marocaine pure pressée à froid en vrac ou en marque blanche. Fournisseur direct usine à Marrakech avec certificats d'analyse.",
        shortDescription: "Huile d'argan cosmétique pressée à froid, riche en vitamine E et acides gras essentiels pour le soin du visage, des cheveux et formulations OEM.",
        longDescription: [
          "Surnommée l'« or liquide » du Maroc, l'huile d'argan authentique figure parmi les trésors botaniques les plus prisés de la cosmétique mondiale. Récoltée au sein de la réserve de biosphère de l'arganeraie classée par l'UNESCO dans le sud-ouest marocain, elle provient de coopératives féminines partenaires sélectionnant les meilleurs amillons.",
          "Dans notre atelier de production à Marrakech, nous réalisons une extraction mécanique par première pression à froid sous 40°C, sans solvant ni additif chimique. Ce procédé préserve l'intégralité des acides gras insaturés (oméga-6 et oméga-9), des stérols végétaux et des tocophérols (vitamine E).",
          "Que vous recherchiez des fûts industriels pour la fabrication cosmétique, des soins capillaires professionnels pour salons ou une gamme complète en marque blanche, nous garantissons une qualité constante avec traçabilité et documentation analytique complète."
        ],
        categoryName: "Huiles Végétales & Botaniques",
        origin: "Souss-Massa & Marrakech, Maroc",
        extractionMethod: "Première pression à froid (Vierge)",
        keyBenefits: [
          {
            title: "Bouclier Antioxydant Puissant",
            description: "Forte concentration en vitamine E et polyphénols qui neutralisent les radicaux libres et freinent le vieillissement cutané."
          },
          {
            title: "Nutrition & Élasticité Cutanée",
            description: "Riche en acides oléique et linoléique pour régénérer la barrière lipidique et apporter souplesse et éclat naturel."
          },
          {
            title: "Pénétration Rapide & Toucher Soyeux",
            description: "Texture fine non comédogène qui pénètre en profondeur sans laisser de film gras, adaptée à tous les types de peaux."
          },
          {
            title: "Réparation Capillaire & Brillance",
            description: "Gaine la fibre capillaire, lisse les pointes fourchues et apaise les cuirs chevelus secs et sensibles."
          }
        ],
        specifications: [
          { label: "Nom Botanique / INCI", value: "Argania Spinosa Kernel Oil" },
          { label: "Aspect", value: "Liquide fluide jaune doré limpide" },
          { label: "Odeur", value: "Caractéristique douce de noisette (option désodorisée disponible)" },
          { label: "Profil Acides Gras", value: "Acide oléique (43–49%), linoléique (29–36%), palmitique (11–15%)" },
          { label: "Teneur en Vitamine E", value: "Environ 600 à 700 mg/kg" },
          { label: "Durée de conservation", value: "24 mois à l'abri de la lumière et de la chaleur" },
          { label: "Qualité", value: "100% Pure Vierge Cosmétique" }
        ],
        applications: [
          "Sérums anti-âge et huiles précieuses pour le visage",
          "Soins capillaires réparateurs, bains d'huile et shampoings",
          "Baumes corporels, huiles de massage et soins anti-vergetures",
          "Soins fortifiants ongles et cuticules",
          "Matière première pour l'industrie cosmétique et marques blanches"
        ],
        packagingOptions: {
          bulk: [
            "Bidons PEHD de 5 Litres et 25 Litres certifiés contact cosmétique",
            "Fûts de 200 Litres en acier ou polyéthylène avec scellé de sécurité",
            "Conteneurs IBC de 1 000 Litres pour approvisionnement industriel"
          ],
          privateLabel: [
            "Flacons verre ambré, dépoli ou transparent de 30 ml, 50 ml et 100 ml",
            "Pipettes compte-gouttes, pompes sérum ou sprays au choix",
            "Sérigraphie sur mesure, étiquetage haut de gamme résistant à l'huile"
          ]
        },
        moq: {
          bulk: "5 Litres",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) pour chaque lot produit",
          "Fiche de Données de Sécurité (FDS / MSDS)",
          "Conformité biologique Ecocert et USDA Organic",
          "Certificat sanitaire ONSSA pour l'exportation",
          "Bonnes Pratiques de Fabrication (BPF) ISO 22716"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur l'huile d'argan en gros ou marque blanche.",
        faqs: [
          {
            question: "Quelle est la différence entre l'huile d'argan cosmétique et alimentaire ?",
            answer: "L'huile d'argan cosmétique est pressée crue à partir d'amillons non torréfiés pour préserver intactes ses vitamines et propriétés dermatologiques. L'huile alimentaire est pressée à partir d'amillons torréfiés, ce qui lui confère son parfum toasté."
          },
          {
            question: "Fournissez-vous des certificats d'analyse par lot ?",
            answer: "Oui, chaque expédition est accompagnée de son certificat d'analyse spécifique attestant de l'acidité oléique, de l'indice de peroxyde et de la pureté."
          },
          {
            question: "Proposez-vous une version désodorisée ?",
            answer: "Absolument. Nous proposons une version désodorisée à froid par filtration mécanique sans solvant pour vos formules parfumées."
          }
        ]
      },
      ar: {
        title: "زيت الأركان المغربي النقي",
        subtitle: "زيت أركان تجميلي بكر معصور على البارد من التعاونيات المغربية مباشرة",
        seoTitle: "زيت الأركان المغربي بالجملة | نقي ومعصور على البارد | Morocco Cosmetic",
        seoDescription: "شراء زيت الأركان المغربي النقي بالجملة والعلامة الخاصة مباشرة من المصنع في مراكش. شهادات تحليل ووثائق تصدير كاملة.",
        shortDescription: "زيت أركان تجميلي معصور على البارد وغني بفيتامين E والأحماض الدهنية الأساسية للبشرة والشعر وتركيبات OEM.",
        longDescription: [
          "يُلقب زيت الأركان المغربي الأصيل بـ«الذهب السائل»، وهو أحد أندر وأثمن الزيوت النباتية التجميلية في العالم. يتم جنيه من شجر الأركان المتوطن في محمية المحيط الحيوي المصنفة من اليونسكو في جنوب غرب المغرب بالتعاون مع تعاونيات نسائية محلية عريقة.",
          "في مصنعنا الحديث بمدينة مراكش، يُعصر الزيت ميكانيكياً عصرة أولى على البارد عند درجة حرارة أقل من 40 درجة مئوية، دون إضافة أي مواد كيميائية أو مذيبات صناعية. هذه الطريقة التقليدية المتطورة تحافظ على كامل الأحماض الدهنية غير المشبعة (أوميغا 6 وأوميغا 9)، ومضادات الأكسدة وتراكيز عالية من فيتامين E الطبيعي.",
          "سواء كنتم تبحثون عن براميل خام للإنتاج الصناعي ومصانع المستحضرات، أو زيوت فاخرة للصالونات والسبا، أو خط منتجات متكامل تحت علامتكم التجارية الخاصة (Private Label)، نوفر لكم جودة مطابقة للمواصفات الدولية مع كامل شهادات التحليل والتصدير."
        ],
        categoryName: "الزيوت النباتية والتجميلية",
        origin: "سوس ماسة ومراكش، المغرب",
        extractionMethod: "عصر أول على البارد (بكر ممتاز)",
        keyBenefits: [
          {
            title: "مضاد أكسدة طبيعي فائق",
            description: "غني جداً بفيتامين E والبوليفينولات التي تحارب الجذور الحرة وعلامات التقدم في السن وتلف الخلايا."
          },
          {
            title: "ترطيب عميق ومرونة للبشرة",
            description: "يحتوي على نسب متوازنة من حمض الأوليك واللينوليك لتعزيز الحاجز الدهني الطبيعي وإعادة الحيوية والنضارة."
          },
          {
            title: "سريع الامتصاص وغير دهني",
            description: "قوام حريري خفيف يمتصه الجلد بسرعة فائقة دون سد المسام، ومناسب لجميع أنواع البشرة بما فيها الحساسة."
          },
          {
            title: "إصلاح الشعر وحماية الفروة",
            description: "يغلف ألياف الشعر ويعالج التقصف والجفاف ويمنح خصلات الشعر لمعاناً صحياً جذاباً ويغذي الفروة."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Argania Spinosa Kernel Oil" },
          { label: "المظهر", value: "سائل رائق ذهبي ناصع" },
          { label: "الرائحة", value: "رائحة جوزية خفيفة مميزة (تتوفر نسخة خالية من الرائحة)" },
          { label: "تركيبة الأحماض الدهنية", value: "حمض الأوليك (43-49%)، اللينوليك (29-36%)، البالميتيك (11-15%)" },
          { label: "نسبة فيتامين E", value: "حوالي 600–700 ملغ/كغ" },
          { label: "مدة الصلاحية", value: "24 شهراً في ظروف تخزين باردة ومظلمة" },
          { label: "درجة الجودة", value: "نقي 100% بكر تجميلي" }
        ],
        applications: [
          "سيرومات الوجه لمكافحة الشيخوخة وزيوت العناية الليلية",
          "خلطات وماسكات علاج الشعر وحمامات الزيت في الصالونات",
          "زيوت المساج والتدليك الفاخرة وزيوت الوقاية من علامات التمدد",
          "عناية الأظافر وترطيب الجلد المحيط بها",
          "مكون أساسي في تركيبات الكريمات ومصانع التجميل العالمية"
        ],
        packagingOptions: {
          bulk: [
            "جالونات HDPE غذائية سعة 5 لتر و25 لتر",
            "براميل سعة 200 لتر من البولي إيثيلين أو الفولاذ مع أختام أمان",
            "حاويات IBC سعة 1,000 لتر للطلبات الصناعية الكبرى"
          ],
          privateLabel: [
            "عبوات زجاجية كهرمانية أو شفافة أو مثلجة سعة 30، 50، 100 مل",
            "قطارات ماصة أو مضخات سيروم فاخرة",
            "طباعة سلك سكرين أو ملصقات فاخرة مقاومة للزيوت بتصميم علامتكم"
          ]
        },
        moq: {
          bulk: "5 لترات",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة منتجة",
          "صحيفة بيانات سلامة المواد (MSDS / SDS)",
          "مطابقة المعايير العضوية Ecocert وUSDA Organic",
          "شهادة السلامة الصحية والتصدير من مكتب ONSSA",
          "معيار ممارسات التصنيع الجيد ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن زيت الأركان بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "ما الفرق بين زيت الأركان التجميلي والغذائي؟",
            answer: "يُعصر زيت الأركان التجميلي من لوز الأركان الخام دون تحميص للحفاظ الكامل على الفيتامينات والخواص العلاجية، وتكون رائحته خفيفة جداً. بينما يُعصر الغذائي بعد تحميص الحبات مما يعطيه لوناً أدكن ورائحة طعام قوية."
          },
          {
            question: "هل تقدمون شهادات تحليل مخبرية لكل شحنة؟",
            answer: "نعم، نرفق مع كل شحنة دولية شهادة تحليل COA حديثة توضح معدل الحموضة والبيروكسيد وخلو المنتج من أي شوائب أو ملوثات."
          },
          {
            question: "هل يتوفر زيت أركان منزوع الرائحة؟",
            answer: "نعم، نوفر أيضاً زيت أركان منزوع الرائحة بفلترة فيزيائية طبيعية بدون أي مواد كيميائية ليلائم مستحضرات التجميل العطرية."
          }
        ]
      }
    }
  },
  {
    slug: "prickly-pear",
    sku: "MC-PPO-002",
    category: "oils",
    image: siteImages.catalog.pricklyPearOil,
    inciName: "Opuntia Ficus-Indica Seed Oil",
    casNumber: "90082-21-6",
    hsCode: "1515.90",
    locales: {
      en: {
        title: "Prickly Pear Seed Oil",
        subtitle: "Rare, cold-pressed cactus seed oil with ultra-high natural Vitamin E and sterols",
        seoTitle: "Wholesale Prickly Pear Seed Oil | Pure Cactus Oil Bulk | Morocco Cosmetic",
        seoDescription: "Wholesale 100% pure Moroccan prickly pear seed oil. Cold-pressed, rich in vitamin E and sterols for luxury anti-aging skincare and private label.",
        shortDescription: "Ultra-potent seed oil rich in vitamin E and sterols for youth-boosting serums and luxury skincare lines.",
        longDescription: [
          "Regarded as the pinnacle of botanical luxury, Moroccan prickly pear seed oil requires approximately 1 ton (1,000 kg) of hand-harvested cactus fruit and roughly 30 to 50 kg of dried tiny seeds to yield just one single liter of pure cold-pressed oil.",
          "Our seeds are gathered in Morocco's semi-arid regions such as Ait Baamrane and Rhamna, meticulously separated, washed, sun-dried, and cold-pressed in small artisanal batches. It features the highest concentration of natural Vitamin E (over 1,000 mg/kg) and plant sterols (delta-7-stigmasterol) of any cosmetic oil on the planet.",
          "This oil possesses extraordinary restorative properties for the delicate eye contour, dark circles, and loss of skin firmness, making it an indispensable hero ingredient for high-end luxury cosmetic brands and prestigious spas worldwide."
        ],
        categoryName: "Carrier & Botanical Oils",
        origin: "Ait Baamrane & Marrakech, Morocco",
        extractionMethod: "First Cold-Pressed from Dried Seeds",
        keyBenefits: [
          {
            title: "Record Vitamin E Concentration",
            description: "Contains over 1,000 mg/kg of natural tocopherols, nearly 150% more than argan oil, offering exceptional anti-wrinkle power."
          },
          {
            title: "Diminishes Dark Under-Eye Circles",
            description: "Natural vitamin K content helps lighten stubborn dark circles and reduces puffy, tired under-eye bags."
          },
          {
            title: "High Linoleic Acid Barrier Defense",
            description: "Contains over 60% linoleic acid (omega-6) to rebuild compromised barrier lipids and soothe redness."
          },
          {
            title: "Ultra-Light Silky Finish",
            description: "Penetrates instantly with a velvet-matte dry finish that leaves skin plumped, firm, and radiant."
          }
        ],
        specifications: [
          { label: "Botanical Name / INCI", value: "Opuntia Ficus-Indica Seed Oil" },
          { label: "Appearance", value: "Clear to slightly green/yellow fine liquid" },
          { label: "Odor", value: "Faint herbal, characteristic grassy-nutty aroma" },
          { label: "Linoleic Acid (Omega-6)", value: "60% – 65%" },
          { label: "Oleic Acid (Omega-9)", value: "18% – 24%" },
          { label: "Vitamin E (Tocopherols)", value: "> 1,000 mg/kg" },
          { label: "Shelf Life", value: "24 months when protected from heat and UV light" }
        ],
        applications: [
          "Prestige anti-aging eye serums and night elixirs",
          "Targeted hyperpigmentation and brightening formulations",
          "Skin rejuvenation oils for mature and demanding complexions",
          "Luxury spa facial contour treatments",
          "High-value hero active in organic cosmetic brands"
        ],
        packagingOptions: {
          bulk: [
            "1 Liter / 5 Liters / 10 Liters aluminum canisters or amber bottles",
            "25 Liters food-grade HDPE drums with nitrogen flush"
          ],
          privateLabel: [
            "15ml / 30ml / 50ml luxury UV-protective glass dropper bottles",
            "Gold, rose-gold, silver, or matte black pipette dropper caps",
            "Custom-branded luxury rigid gift boxes and gold foil labels"
          ]
        },
        moq: {
          bulk: "1 Liter",
          privateLabel: "50 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "MSDS / Safety Data Sheet",
          "100% Pure Virgin Cold-Pressed Certification",
          "ONSSA Phytosanitary export approval",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Prickly Pear Seed Oil.",
        faqs: [
          {
            question: "Why is prickly pear seed oil more expensive than other carrier oils?",
            answer: "It requires nearly 1 ton of prickly pear fruit to produce just 1 liter of oil. The seeds contain only 5% oil and extraction requires high-pressure cold expellers without solvents."
          },
          {
            question: "Is this seed oil or macerated cactus flower oil?",
            answer: "We supply 100% pure cold-pressed seed oil (Opuntia Ficus-Indica Seed Oil), NOT macerated cactus blossom extract in sunflower or mineral oil."
          },
          {
            question: "What is the recommended usage percentage in cosmetic formulas?",
            answer: "It can be applied 100% pure directly as an eye or facial oil, or incorporated at 2% to 15% as a luxury active in prestige creams and serums."
          }
        ]
      },
      fr: {
        title: "Huile de Pépins de Figue de Barbarie",
        subtitle: "Huile précieuse de cactus pressée à froid, d'une teneur exceptionnelle en vitamine E et stérols",
        seoTitle: "Huile de Pépins de Figue de Barbarie en Gros | Vrac & Marque Blanche | Morocco Cosmetic",
        seoDescription: "Achetez de l'huile de pépins de figue de barbarie pure du Maroc en gros. Pressée à froid, idéale pour sérums anti-âge et soins cosmétiques haut de gamme.",
        shortDescription: "Huile précieuse de pépins riche en vitamine E pour sérums tenseurs et lignes cosmétiques de luxe.",
        longDescription: [
          "Considérée comme le joyau suprême des huiles végétales anti-âge, l'huile de pépins de figue de barbarie du Maroc requiert environ une tonne de fruits frais pour recueillir les 30 à 50 kg de graines nécessaires à l'obtention d'un seul litre d'huile.",
          "Récoltées dans les terroirs arides d'Aït Baâmrane et de Rhamna, nos graines sont soigneusement lavées, séchées au soleil puis pressées à froid au goutte-à-goutte. Elle affiche le taux le plus élevé au monde de vitamine E naturelle (plus de 1 000 mg/kg) et une concentration exceptionnelle en stérols régénérants.",
          "Son action spectaculaire sur les ridules, le contour des yeux, les cernes et la fermeté cutanée en fait l'actif de choix des laboratoires cosmétiques de prestige et des spas haut de gamme à l'international."
        ],
        categoryName: "Huiles Végétales & Botaniques",
        origin: "Aït Baâmrane & Marrakech, Maroc",
        extractionMethod: "Première pression à froid des pépins séchés",
        keyBenefits: [
          {
            title: "Record Mondial de Vitamine E",
            description: "Contient plus de 1 000 mg/kg de vitamine E naturelle, presque 150% de plus que l'huile d'argan, pour une action antirides intense."
          },
          {
            title: "Action Ciblée Anti-Cernes",
            description: "Sa teneur naturelle en vitamine K stimule la microcirculation et aide à estomper les cernes bleutés et poches sous les yeux."
          },
          {
            title: "Teneur Élevée en Oméga-6",
            description: "Composée à plus de 60% d'acide linoléique qui restructure le ciment intercellulaire et maintient la souplesse de l'épiderme."
          },
          {
            title: "Fini Sec & Soyeux",
            description: "Pénètre rapidement l'épiderme sans brillance résiduelle, laissant la peau veloutée et visiblement redensifiée."
          }
        ],
        specifications: [
          { label: "Nom Botanique / INCI", value: "Opuntia Ficus-Indica Seed Oil" },
          { label: "Aspect", value: "Liquide fluide vert olive clair à jaune doré" },
          { label: "Odeur", value: "Végétale subtile, herbeuse et caractéristique" },
          { label: "Acide Linoléique (Oméga-6)", value: "60% à 65%" },
          { label: "Acide Oléique (Oméga-9)", value: "18% à 24%" },
          { label: "Vitamine E (Tocophérols)", value: "> 1 000 mg/kg" },
          { label: "Conservation", value: "24 mois dans un endroit frais à l'abri des rayons UV" }
        ],
        applications: [
          "Sérums contour des yeux et élixirs de jeunesse",
          "Soins anti-taches pigmentaires et régénérants nocturnes",
          "Huiles précieuses pour peaux matures et dévitalisées",
          "Protocoles de soins anti-âge visage en instituts et spas",
          "Actif phare pour gammes cosmétiques biologiques prestigieuses"
        ],
        packagingOptions: {
          bulk: [
            "Flacons aluminium étanches de 1L, 5L et 10L",
            "Bidons de 25L en PEHD opaque sous atmosphère protectrice d'azote"
          ],
          privateLabel: [
            "Flacons pipette de 15 ml, 30 ml et 50 ml en verre anti-UV",
            "Finitions pipettes dorées, argentées, or rose ou noir mat",
            "Étuis carton rigides personnalisés et marquage à chaud or"
          ]
        },
        moq: {
          bulk: "1 Litre",
          privateLabel: "50 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) complet par lot",
          "Fiche de Données de Sécurité (MSDS)",
          "Attestation 100% Pure Huile Vierge de Pépins",
          "Agrément export ONSSA",
          "Fabrication en laboratoire certifié ISO 22716"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur l'huile de pépins de figue de barbarie.",
        faqs: [
          {
            question: "Pourquoi cette huile est-elle plus coûteuse que les autres huiles ?",
            answer: "Il faut près d'une tonne de figues pour extraire environ 1 litre d'huile. Les pépins ne contiennent que 5% de matière grasse et leur pressage exige des presses spéciales à haute pression."
          },
          {
            question: "S'agit-il de véritable huile de pépins ou d'un macérât huileux ?",
            answer: "Nous garantissons de l'huile de pépins pressée à froid 100% pure (Opuntia Ficus-Indica Seed Oil), et absolument pas un macérât de fleurs dans une huile de tournesol."
          },
          {
            question: "Comment l'incorporer dans une formulation ?",
            answer: "Elle s'utilise pure directement sur la peau ou incorporée entre 2% et 15% dans la phase huileuse de crèmes et sérums luxueux."
          }
        ]
      },
      ar: {
        title: "زيت بذور التين الشوكي المغربي",
        subtitle: "زيت صبار بكر نادر معصور على البارد، يتميز بأعلى تركيز طبيعي لفيتامين E والستيرولات",
        seoTitle: "زيت بذور التين الشوكي بالجملة | نقي 100% وعلامة خاصة | Morocco Cosmetic",
        seoDescription: "شراء زيت بذور التين الشوكي المغربي النقي بالجملة. معصور على البارد وغني بفيتامين E ومضادات الأكسدة لسيرومات التجميل الفاخرة.",
        shortDescription: "زيت بذور فائق الفعالية غني بفيتامين E للتركيبات التجميلية الفاخرة وسيرومات النضارة ومكافحة التجاعيد.",
        longDescription: [
          "يُعتبر زيت بذور التين الشوكي المغربي ذروة الفخامة في عالم الزيوت النباتية التجميلية. يتطلب إنتاج لتر واحد فقط من هذا الزيت النادر عصر ما يقارب طناً كاملاً (1,000 كغ) من ثمار الصبار الشوكي الطازجة واستخراج نحو 30 إلى 50 كغ من البذور الصلبة المجففة.",
          "تُجنى البذور من مناطق أيت باعمران والرحامنة المغربية المعروفة بجودة صبارها، حيث تُغسل وتُجفف في الشمس وتُعصر بالضغط الهيدروليكي البارد قطرة قطرة. يحتوي هذا الزيت على أعلى تركيز مسجل عالمياً لفيتامين E الطبيعي (أكثر من 1,000 ملغ/كغ) مع نسب استثنائية من الستيرولات النباتية.",
          "تأثيره الملحوظ في تقليل الهالات السوداء ومحاربة تجاعيد محيط العين وشد البشرة جعله المكون الأساسي الأول لدى أشهر دور التجميل والمختبرات العالمية والمنتجعات الصحية الفاخرة."
        ],
        categoryName: "الزيوت النباتية والتجميلية",
        origin: "أيت باعمران ومراكش، المغرب",
        extractionMethod: "عصر أول على البارد للبذور المجففة",
        keyBenefits: [
          {
            title: "أعلى نسبة فيتامين E في العالم",
            description: "يحتوي على أكثر من 1,000 ملغ/كغ من فيتامين E الطبيعي، أي أكثر بنحو 150% من زيت الأركان لمقاومة التجاعيد."
          },
          {
            title: "علاج فعال للهالات السوداء",
            description: "يحتوي على فيتامين K الطبيعي الذي ينشط الدورة الدموية الدقيقة ويخفف السواد والانتفاخ تحت العينين."
          },
          {
            title: "غني جداً بأوميغا 6 (حمض اللينوليك)",
            description: "نسبة تفوق 60% من حمض اللينوليك تعيد بناء حاجز البشرة وترمم الخلايا المجهدة وتمنحها مرونة ونضارة."
          },
          {
            title: "ملمس مخملي سريع الامتصاص",
            description: "زيت جاف خفيف يتغلغل فوراً في طبقات الجلد دون ترك أي أثر دهني، ويمنح البشرة ملمساً حريرياً."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Opuntia Ficus-Indica Seed Oil" },
          { label: "المظهر", value: "سائل رقيق أخضر زيتوني خفيف إلى ذهبي" },
          { label: "الرائحة", value: "عشبية طبيعية خفيفة ومميزة" },
          { label: "حمض اللينوليك (أوميغا 6)", value: "60% إلى 65%" },
          { label: "حمض الأوليك (أوميغا 9)", value: "18% إلى 24%" },
          { label: "فيتامين E (توكوفيرول)", value: "أكثر من 1,000 ملغ/كغ" },
          { label: "مدة الصلاحية", value: "24 شهراً بعيداً عن الحرارة وأشعة الشمس" }
        ],
        applications: [
          "سيرومات محيط العين وإكسيرات مكافحة التجاعيد الليلية",
          "علاج التصبغات والبقع الداكنة وتوحيد لون البشرة",
          "العناية المكثفة بالبشرة المتقدمة في السن والفاقدة للمرونة",
          "جلسات العناية بالوجه في السبا والمراكز التجميلية الفاخرة",
          "المكون الرئيسي في خطوط التجميل الطبيعية الراقية"
        ],
        packagingOptions: {
          bulk: [
            "عبوات ألمنيوم معزولة سعة 1 لتر، 5 لتر، 10 لتر",
            "براميل 25 لتر معبأة تحت غاز النيتروجين لحماية مضادات الأكسدة"
          ],
          privateLabel: [
            "قوارير قطارة فاخرة سعة 15، 30، 50 مل زجاجية داكنة واقية من الضوء",
            "قطارات بأغطية ذهبية، فضية، أو سوداء غير لامعة",
            "علب هدايا فاخرة وطباعة شعاركم بالرقائق الذهبية"
          ]
        },
        moq: {
          bulk: "1 لتر",
          privateLabel: "50 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري كاملة (COA) لكل دفعة",
          "صحيفة السلامة الكيميائية (MSDS)",
          "شهادة زيت بذور صبار نقي 100% معصور على البارد",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "مختبرات تصنيع معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن زيت بذور التين الشوكي بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "لماذا سعر زيت بذور التين الشوكي مرتفع مقارنة بباقي الزيوت؟",
            answer: "لأن إنتاج لتر واحد فقط يتطلب طناً كاملاً من ثمار الصبار، وتتطلب البذور الصلبة معاصر هيدروليكية ذات ضغط عالٍ جداً دون تسخين."
          },
          {
            question: "هل هذا الزيت بذور حقيقي أم منقوع أزهار في زيت آخر؟",
            answer: "نضمن لكم زيت بذور أصلي ونقي 100% (Opuntia Ficus-Indica Seed Oil)، ولسنا ممن يبيع منقوع الأزهار في زيت دوار الشمس."
          },
          {
            question: "كيف يمكن استخدامه في التركيبات؟",
            answer: "يمكن استخدامه نقياً 100% مباشرة على البشرة ومحيط العينين، أو دمجه بنسبة 2% إلى 15% في الزيوت والسيرومات الفاخرة."
          }
        ]
      }
    }
  },
  {
    slug: "black-soap",
    sku: "MC-BLS-003",
    category: "soaps-clays",
    image: siteImages.catalog.blackSoap,
    inciName: "Potassium Olivate, Aqua, Glycerin, Olea Europaea Fruit Oil",
    casNumber: "68154-77-8",
    hsCode: "3401.30",
    locales: {
      en: {
        title: "Traditional Moroccan Black Soap (Savon Beldi)",
        subtitle: "Authentic saponified olive paste crafted in Marrakech for hammam exfoliation and body cleansing",
        seoTitle: "Wholesale Moroccan Black Soap (Savon Beldi) | Hammam Bulk Supply | Morocco Cosmetic",
        seoDescription: "Direct factory wholesale Moroccan black soap (savon beldi). Traditional olive paste for hammam exfoliation, professional spas, and custom private label packaging.",
        shortDescription: "Traditional Beldi olive paste for authentic hammam exfoliation rituals, deep skin purification, and professional spa treatments.",
        longDescription: [
          "Moroccan Black Soap, historically known as 'Savon Beldi', is an essential pillar of the ancestral North African hammam tradition. Made exclusively from saponified crushed black and green Moroccan olives and rich virgin olive oil, this thick, gel-like dark amber paste has cleansed bodies for centuries.",
          "Produced in our Marrakech workshop using traditional warm saponification techniques, our black soap retains high natural glycerin and vitamin E from the olive pulp. It softens the outermost layer of dead skin cells, making them effortless to slough away with a traditional Kessa exfoliating glove.",
          "Available pure natural or infused with organic Eucalyptus Globulus essential oil, Argan oil, or Lavender, we supply leading thalassotherapy centers, luxury hotel spas, and beauty brands around the globe."
        ],
        categoryName: "Soaps & Hammam Essentials",
        origin: "Marrakech, Morocco",
        extractionMethod: "Traditional Potassium Olive Saponification",
        keyBenefits: [
          {
            title: "Prepares Skin for Deep Exfoliation",
            description: "Softens dry dead skin cells and keratin buildup, allowing the Kessa glove to sweep away impurities effortlessly."
          },
          {
            title: "Rich in Natural Olive Vitamin E",
            description: "Nourishes the skin barrier during cleansing, preventing tightness, dryness, and irritation."
          },
          {
            title: "Purifies Pores & Toxins",
            description: "Eliminates surface toxins and excess sebum while restoring a healthy, radiant glow from neck to toes."
          },
          {
            title: "100% Biodegradable & Natural",
            description: "Contains zero synthetic surfactants, parabens, artificial dyes, or chemical foaming agents."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Potassium Olivate, Aqua, Glycerin, Olea Europaea Fruit Oil" },
          { label: "Appearance", value: "Thick, dark amber to olive-black translucent paste" },
          { label: "pH Range", value: "8.5 – 10.0 (natural alkaline olive soap)" },
          { label: "Varieties Available", value: "Pure Olive, Eucalyptus, Argan, Lavender, Rose" },
          { label: "Shelf Life", value: "24 months in sealed containers stored at ambient temperature" }
        ],
        applications: [
          "Professional hammam and spa body scrub treatments",
          "At-home weekly exfoliating rituals with Kessa glove",
          "Hydrating body cleanser for dry or textured skin",
          "Private label retail jars for natural bath and body lines"
        ],
        packagingOptions: {
          bulk: [
            "5 kg / 10 kg / 25 kg airtight heavy-duty food-grade pails",
            "200 kg open-top industrial drums with inner liner"
          ],
          privateLabel: [
            "200g / 250g / 500g luxury amber or matte black cosmetic PET/glass jars",
            "Matching aluminum or bamboo lids with waterproof labels",
            "Complete hammam kits paired with authentic Moroccan Kessa gloves"
          ]
        },
        moq: {
          bulk: "10 kg",
          privateLabel: "100 Jars"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Cosmetic Safety Data Sheet (MSDS)",
          "ONSSA Sanitary Export Compliance",
          "Microbiological Safety Certificate",
          "Manufactured under ISO 22716 GMP standards"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Moroccan Black Soap.",
        faqs: [
          {
            question: "How is traditional Moroccan black soap used in a hammam?",
            answer: "After warming the body in a steamy shower or bath for 5–10 minutes, apply the black soap all over damp skin and leave for 5–10 minutes. Rinse off thoroughly with warm water, then vigorously scrub with a damp Moroccan Kessa glove to lift off dead skin rolls."
          },
          {
            question: "Can black soap be fragranced with custom essential oils?",
            answer: "Yes, our most popular formulation is infused with Eucalyptus essential oil, but we also create custom batches with Argan, Lavender, Rose, or Verbena."
          },
          {
            question: "What is the texture of authentic black soap?",
            answer: "Authentic Savon Beldi is a smooth, thick, gelatinous paste that melts like butter between warm wet hands. It is not a liquid soap or a hard bar."
          }
        ]
      },
      fr: {
        title: "Savon Noir Marocain Traditionnel (Savon Beldi)",
        subtitle: "Pâte d'olive saponifiée authentique fabriquée à Marrakech pour gommage au hammam et soins corporels",
        seoTitle: "Savon Noir Marocain en Gros | Savon Beldi Traditionnel | Morocco Cosmetic",
        seoDescription: "Fabricant grossiste de savon noir marocain (savon beldi). Pâte d'olive naturelle pour rituels hammam, spas professionnels et marque blanche sur mesure.",
        shortDescription: "Pâte d'olive traditionnelle pour gommage au hammam, purification profonde de la peau et soins professionnels en spa.",
        longDescription: [
          "Le savon noir marocain, ou « Savon Beldi », est l'élément fondamental du rituel ancestral du hammam maghrébin. Obtenu par saponification à la potasse d'olives noires et vertes broyées et d'huile d'olive marocaine, cette pâte sombre et onctueuse purifie la peau sans jamais l'agresser.",
          "Élaboré dans notre atelier à Marrakech selon les méthodes artisanales respectueuses de la tradition, notre savon noir est naturellement concentré en glycérine et en vitamine E. Il ramollit les peaux mortes et prépare le corps à une exfoliation incomparable avec le gant Kessa.",
          "Disponible en version pure naturelle ou enrichi en huile essentielle d'eucalyptus, d'argan ou de lavande, nous approvisionnons les spas d'hôtels prestigieux, centres de thalassothérapie et marques cosmétiques internationales."
        ],
        categoryName: "Savons & Rituels Hammam",
        origin: "Marrakech, Maroc",
        extractionMethod: "Saponification traditionnelle à la potasse de pulpe d'olive",
        keyBenefits: [
          {
            title: "Préparation Idéale au Gommage Kessa",
            description: "Ramollit la kératine et les peaux mortes qui s'éliminent facilement au passage du gant de gommage traditionnel."
          },
          {
            title: "Riche en Vitamine E d'Olive",
            description: "Nourrit l'épiderme en profondeur pendant le nettoyage et préserve la douceur et l'élasticité cutanée."
          },
          {
            title: "Purifiant & Détoxifiant Corporel",
            description: "Désincruste les pores des impuretés, toxines et excès de sébum pour une peau satinée et éclatante."
          },
          {
            title: "100% Naturel & Biodégradable",
            description: "Sans tensioactifs chimiques, sans parabènes, sans colorants artificiels ni conservateurs synthétiques."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Potassium Olivate, Aqua, Glycerin, Olea Europaea Fruit Oil" },
          { label: "Aspect", value: "Pâte translucide épaisse ambrée foncé à brun-vert" },
          { label: "pH", value: "8,5 à 10,0 (savon naturel alcalin à l'olive)" },
          { label: "Variantes", value: "Naturel Pur, Eucalyptus, Argan, Lavande, Fleur d'oranger" },
          { label: "Durée de conservation", value: "24 mois dans un seau ou pot bien refermé" }
        ],
        applications: [
          "Gommage corporel traditionnel dans les spas et hammams",
          "Rituel exfoliant hebdomadaire à domicile avec gant Kessa",
          "Nettoyant corporel adoucissant pour peaux sèches",
          "Pots pour gammes de soins bain et corps en marque blanche"
        ],
        packagingOptions: {
          bulk: [
            "Seaux hermétiques alimentaires de 5 kg, 10 kg et 25 kg",
            "Fûts industriels de 200 kg avec housse protectrice intérieure"
          ],
          privateLabel: [
            "Pots cosmétiques de 200g, 250g et 500g en PET ambré ou noir mat",
            "Couvercles en aluminium ou bambou avec étiquettes résistantes à l'eau",
            "Kits hammam complets avec véritable gant Kessa marocain"
          ]
        },
        moq: {
          bulk: "10 kg",
          privateLabel: "100 Pots"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) par lot",
          "Fiche de Données de Sécurité (FDS)",
          "Agrément sanitaire et d'exportation ONSSA",
          "Attestation de conformité microbiologique",
          "Laboratoire certifié ISO 22716 BPF"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur le savon noir marocain en gros ou marque blanche.",
        faqs: [
          {
            question: "Comment s'utilise le savon noir au hammam ?",
            answer: "Sous une douche ou un bain bien chaud, appliquez la pâte sur peau humide. Laissez agir 5 à 10 minutes pour ramollir les cellules mortes, rincez abondamment à l'eau tiède, puis frottez énergiquement avec le gant Kessa pour faire rouler les peaux mortes."
          },
          {
            question: "Proposez-vous une version parfumée à l'eucalyptus ?",
            answer: "Oui, notre formule à l'huile essentielle d'eucalyptus globulus est notre best-seller, offrant une sensation de fraîcheur respiratoire typique du hammam."
          },
          {
            question: "Quelle est la texture d'un savon noir authentique ?",
            answer: "Le véritable savon noir est une pâte végétale sombre, onctueuse et gélifiée qui fond comme du beurre au contact de la peau chaude et humide."
          }
        ]
      },
      ar: {
        title: "الصابون المغربي الأسود التقليدي (الصابون البلدي)",
        subtitle: "معجون زيتون مسيّر تقليدي مصنوع في مراكش لتقشير البشرة وتنظيف الجسم في الحمام المغربي",
        seoTitle: "الصابون المغربي الأسود بالجملة | صابون بلدي طبيعي أصيل | Morocco Cosmetic",
        seoDescription: "توريد الصابون المغربي الأسود (البلدي) بالجملة مباشرة من مصنعنا في مراكش. معجون زيتون طبيعي فاخر للسبا والحمامات والعلامة الخاصة.",
        shortDescription: "معجون زيتون بلدي تقليدي لطقوس التقشير بالحمام المغربي والتنقية العميقة للبشرة ولجلسات السبا الاحترافية.",
        longDescription: [
          "يُعد الصابون المغربي الأسود، المعروف محلياً بـ«الصابون البلدي»، الركيزة الأساسية لطقوس الحمام المغربي التقليدي منذ قرون. يُصنع حصرياً من تصبين الزيتون المغربي الأسود والأخضر المهروس مع زيت الزيتون البكر النقي، لينتج معجوناً هلامياً دافئ اللون وغنياً بالعناصر المغذية.",
          "في ورشتنا بمدينة مراكش، نتبع أسلوب التصبين التقليدي المحكم الذي يحافظ على الجلسرين الطبيعي وفيتامين E من لب الزيتون. يقوم الصابون بتطرية طبقة الخلايا الميتة وتليينها لتسهيل إزالتها بالكامل بواسطة الكيس المغربي (القفاز الخشن).",
          "نوفره بنسخته الطبيعية الصافية، أو معززاً بالزيوت العطرية العضوية كزيت الأوكالبتوس (الكاليبتوس) المنعش، أو زيت الأركان، أو الخزامى، ونلبي طلبات أرقى المنتجعات الصحية والسبا والعلامات التجارية عالمياً."
        ],
        categoryName: "صابون وطقوس الحمام",
        origin: "مراكش، المغرب",
        extractionMethod: "تصبين تقليدي هيدروكسيد البوتاسيوم مع لب الزيتون",
        keyBenefits: [
          {
            title: "تجهيز مثالي للبشرة قبل التقشير",
            description: "يلين طبقة الجلد الميت والخلايا المتقرنة مما يتيح للقفاز المغربي (الكيس) إزالتها بكل سهولة وسلاسة."
          },
          {
            title: "غني بفيتامين E الطبيعي",
            description: "يغذي أنسجة الجلد أثناء التنظيف ويمنع الجفاف والتهيج ويحافظ على تماسك ونعومة البشرة."
          },
          {
            title: "تنقية المسام والتخلص من السموم",
            description: "يزيل الشوائب والإفرازات الدهنية العالقة في مسام الجسم ويمنح البشرة ملمساً حريرياً ناعماً كالحرير."
          },
          {
            title: "طبيعي 100% وقابل للتحلل",
            description: "خالٍ تماماً من المواد الكيميائية الرغوية، والبارابين، والملونات الصناعية والمواد الحافظة."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Potassium Olivate, Aqua, Glycerin, Olea Europaea Fruit Oil" },
          { label: "المظهر", value: "معجون هلامي داكن ولزج ذو لون عنبري إلى زيتوني مائل للسواد" },
          { label: "درجة الحموضة pH", value: "8.5 إلى 10.0 (صابون زيتون قلوي طبيعي)" },
          { label: "الخيارات المتوفرة", value: "طبيعي صافٍ، أوكالبتوس، أركان، خزامى، ورد" },
          { label: "مدة الصلاحية", value: "24 شهراً في عبوة مغلقة بإحكام" }
        ],
        applications: [
          "طقوس التقشير في الحمامات المغربية والسبا ومراكز العناية بالجسم",
          "روتين الاستحمام الأسبوعي المنزلي مع قفاز الكيس المغربي",
          "منظف للجسم مغذٍ وملين للبشرة الجافة والخشنة",
          "عبوات تجزئة مخصصة لعلامات العناية بالجسم (Private Label)"
        ],
        packagingOptions: {
          bulk: [
            "سلات محكمة الإغلاق سعة 5 كغ، 10 كغ، 25 كغ صالحة للمستحضرات",
            "براميل صناعية سعة 200 كغ مبطنة من الداخل"
          ],
          privateLabel: [
            "برطمانات سعة 200غ، 250غ، 500غ من البلاستيك الفاخر PET أو الزجاج",
            "أغطية ألمنيوم أو خشب بامبو مع ملصقات مقاومة للماء والرطوبة",
            "أطقم حمام متكاملة تشمل الصابون البلدي مع كيس الحمام المغربي الأصلي"
          ]
        },
        moq: {
          bulk: "10 كغ",
          privateLabel: "100 برطمان"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "صحيفة بيانات السلامة (MSDS)",
          "شهادة المطابقة الصحية والتصدير من مكتب ONSSA",
          "شهادة السلامة الميكروبيولوجية",
          "تصنيع وفق معايير ممارسات التصنيع الجيد ISO 22716"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن الصابون المغربي الأسود (البلدي) بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "كيف يُستخدم الصابون الأسود في الحمام المغربي؟",
            answer: "بعد تدفئة الجسم بالبخار أو الماء الساخن لمدة 5-10 دقائق، يُفرد الصابون على كامل الجسم ويُترك لمدة 5-10 دقائق، ثم يُشطف جيداً بالماء الدافئ، ويُفرك الجسم بالقفاز المغربي (الكيس) لإزالة الجلد الميت بسهولة."
          },
          {
            question: "هل توفرون صابوناً بالأوكالبتوس أو خلاصات أخرى؟",
            answer: "نعم، الصابون الأسود بخلاصة زيت الأوكالبتوس هو الأكثر طلباً عالمياً لمنحه شعور الانتعاش المميز للحمام، كما نوفر خيارات بالأركان والخزامى."
          },
          {
            question: "ما هو قوام الصابون الأسود الأصلي؟",
            answer: "قوامه معجون هلامي ناعم يشبه الزبدة السميكة، يذوب بسهولة بين اليدين المبللتين، وليس صابوناً سائلاً ولا قالباً صلباً."
          }
        ]
      }
    }
  },
  {
    slug: "ghassoul-clay",
    sku: "MC-GHS-004",
    category: "soaps-clays",
    image: siteImages.catalog.ghassoulClay,
    inciName: "Moroccan Lava Clay",
    casNumber: "12259-92-6",
    hsCode: "2507.00",
    locales: {
      en: {
        title: "Atlas Mountain Ghassoul Clay (Rhassoul)",
        subtitle: "Ancient smectic volcanic clay mined exclusively in Morocco's Atlas Mountains for detox masks and hair washing",
        seoTitle: "Wholesale Moroccan Ghassoul Clay (Rhassoul) | Bulk Clays | Morocco Cosmetic",
        seoDescription: "Source authentic Moroccan Ghassoul clay in bulk wafers or micronized powder. Sourced from the Atlas Mountains for hair, face masks, and luxury spa wraps.",
        shortDescription: "Atlas Mountain smectic clay for purifying facial masks, detoxifying body wraps, and no-poo hair treatments.",
        longDescription: [
          "Ghassoul (also known as Rhassoul, from the Arabic word 'Rhasala' meaning 'to wash') is an extraordinary mineral clay found in only one known location on Earth: underground mines along the edge of the Atlas Mountains in the Moulouya Valley of Morocco.",
          "Formed through ancient geothermal and volcanic activity during the Jurassic period, Ghassoul is exceptionally rich in natural silica, magnesium, iron, calcium, and potassium. Unlike other clays that dry out the skin, Ghassoul works by gentle physical absorption rather than harsh stripping, binding impurities and sebum without disturbing the protective lipid barrier.",
          "We supply premium Ghassoul in traditional dried sun-bleached chips (plaquettes), ultra-fine micronized cosmetic powder, or ready-to-use enriched pastes for thalassotherapy centers and skincare manufacturers."
        ],
        categoryName: "Soaps & Hammam Essentials",
        origin: "Moulouya Valley, Atlas Mountains, Morocco",
        extractionMethod: "Mined, Sun-Dried, and Micronized",
        keyBenefits: [
          {
            title: "High Mineral Exchange Capacity",
            description: "Rich in silica (up to 58%) and magnesium (up to 25%), replenishing vital minerals while drawing out impurities."
          },
          {
            title: "Absorbs Sebum Without Dehydration",
            description: "Cleanses oil and congested pores through electrostatic absorption without causing irritation or skin tightness."
          },
          {
            title: "Natural Conditioning Hair Wash",
            description: "Adds volume, bounce, and luster to hair strands while balancing oily roots and calming scalp flaking."
          },
          {
            title: "100% Pure & Untreated Mineral",
            description: "Sun-dried in the Moroccan breeze, free from chemical bleaches, fragrance additives, or heavy metals."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Moroccan Lava Clay" },
          { label: "Appearance", value: "Grayish-brown wafers or ultra-fine silky powder" },
          { label: "Silica (SiO2)", value: "55% – 60%" },
          { label: "Magnesium Oxide (MgO)", value: "22% – 26%" },
          { label: "Particle Size", value: "Available in wafers or micronized (< 60 microns)" },
          { label: "Shelf Life", value: "Indefinite when stored dry in airtight containers" }
        ],
        applications: [
          "Clarifying and pore-refining facial mud masks",
          "Detoxifying full-body wraps and spa mud treatments",
          "Natural shampoo and scalp detox ('No-Poo' cleansing)",
          "Exfoliating body pastes mixed with Moroccan black soap"
        ],
        packagingOptions: {
          bulk: [
            "25 kg heavy-duty multi-wall paper bags with plastic moisture barrier",
            "1,000 kg big bags for large industrial cosmetic processors"
          ],
          privateLabel: [
            "200g / 500g luxury cosmetic kraft pouches with ziplock",
            "Cosmetic PET or glass jars with custom printed lids and spoons",
            "Ready-hydrated paste in tubes or jars infused with rose water"
          ]
        },
        moq: {
          bulk: "25 kg",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) with mineral assay",
          "Heavy metals test report (Lead, Arsenic, Cadmium compliant)",
          "Microbiological purity certificate",
          "ONSSA export certificate",
          "ISO 22716 GMP manufacturing facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Moroccan Ghassoul Clay.",
        faqs: [
          {
            question: "What is the difference between Ghassoul chips (wafers) and powder?",
            answer: "Both come from the exact same pure mineral deposit. Wafers are the traditional sun-dried chips that rehydrate quickly in water or rose water. Micronized powder is finely sifted, ideal for pre-packaged cosmetic masks and smooth hair formulations."
          },
          {
            question: "Is Ghassoul suitable for sensitive or dry skin?",
            answer: "Yes, unlike green illite or bentonite clays which can be aggressively drying, Ghassoul has a gentle smectic structure that respects delicate skin and does not strip moisture."
          },
          {
            question: "How do you prepare Ghassoul for application?",
            answer: "Mix equal parts Ghassoul clay with warm mineral water or Moroccan rose water in a non-metallic bowl. Let it swell for 2 minutes to create a smooth, creamy chocolate-like paste."
          }
        ]
      },
      fr: {
        title: "Argile Ghassoul de l'Atlas (Rhassoul)",
        subtitle: "Argile minérale volcanique ancestrale extraite exclusivement dans l'Atlas marocain pour masques détox et soins capillaires",
        seoTitle: "Argile Ghassoul Marocain en Gros (Rhassoul) | Vrac & Marque Blanche | Morocco Cosmetic",
        seoDescription: "Grossiste ghassoul marocain authentique de l'Atlas. Disponible en plaquettes ou poudre micronisée pour soins visage, corps et cheveux en vrac et OEM.",
        shortDescription: "Argile smectique de l'Atlas pour masques visage purifiants, enveloppements détox et soins lavants doux pour les cheveux.",
        longDescription: [
          "Le Ghassoul (ou Rhassoul, du verbe arabe « Rassala » signifiant « laver ») est une argile minérale saponifère unique au monde, dont l'unique gisement connu se trouve aux confins du Moyen Atlas, dans la vallée de la Moulouya au Maroc.",
          "Issu d'une lente sédimentation volcanique sous-marine datant de l'ère jurassique, le Ghassoul est exceptionnellement riche en silice, magnésium, fer, calcium et potassium. Contrairement aux autres argiles, il nettoie selon un processus physique doux d'adsorption, éliminant les impuretés et le sébum sans altérer le film hydrolipidique de la peau.",
          "Nous proposons le Ghassoul sous forme de plaquettes traditionnelles séchées au soleil, de poudre micronisée ultra-fine pour laboratoires, ou de pâtes prêtes à l'emploi enrichies en eau de rose pour spas et thalassothérapies."
        ],
        categoryName: "Savons & Rituels Hammam",
        origin: "Vallée de la Moulouya, Moyen Atlas, Maroc",
        extractionMethod: "Extraction minière, séchage naturel au soleil et micronisation",
        keyBenefits: [
          {
            title: "Richesse Minérale Exceptionnelle",
            description: "Très concentré en silice (environ 58%) et magnésium (environ 25%) pour reminéraliser et tonifier l'épiderme."
          },
          {
            title: "Nettoyage Doux Non Agressif",
            description: "Absorbe les excès de sébum et les impuretés sans dessécher ni provoquer de tiraillements cutanés."
          },
          {
            title: "Shampoing Végétal Naturel (No-Poo)",
            description: "Apporte volume, souplesse et brillance aux cheveux, rééquilibre les racines grasses et assainit le cuir chevelu."
          },
          {
            title: "Minéral 100% Pur Non Traité",
            description: "Séchage naturel au soleil marocain, garanti sans blanchiment chimique, sans parfum ni métaux lourds."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Moroccan Lava Clay" },
          { label: "Aspect", value: "Plaquettes beiges-brunes ou poudre soyeuse très fine" },
          { label: "Teneur en Silice (SiO2)", value: "55% à 60%" },
          { label: "Oxyde de Magnésium (MgO)", value: "22% à 26%" },
          { label: "Granulométrie", value: "Plaquettes ou poudre micronisée (< 60 microns)" },
          { label: "Conservation", value: "Illimitée dans un endroit sec et à l'abri de l'humidité" }
        ],
        applications: [
          "Masques purifiants et resserrant les pores du visage",
          "Enveloppements corporels détoxifiants en spa et thalassothérapie",
          "Alternative naturelle au shampoing pour cuirs chevelus délicats",
          "Gommages et pâtes exfoliantes traditionnelles au hammam"
        ],
        packagingOptions: {
          bulk: [
            "Sacs industriels multicouches de 25 kg avec barrière anti-humidité",
            "Big bags de 1 000 kg pour les unités de fabrication cosmétique"
          ],
          privateLabel: [
            "Sachets kraft hermétiques zippés de 200g et 500g",
            "Pots en PET ambré ou verre avec cuillère en bois assortie",
            "Pâtes hydratées prêtes à l'emploi en tubes ou pots à l'eau de rose"
          ]
        },
        moq: {
          bulk: "25 kg",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) avec composition minérale détaillée",
          "Rapport de contrôle métaux lourds conforme aux normes cosmétiques",
          "Certificat de pureté microbiologique",
          "Agrément officiel d'exportation ONSSA",
          "Fabrication selon les BPF cosmétiques ISO 22716"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur le ghassoul marocain en gros ou marque blanche.",
        faqs: [
          {
            question: "Quelle est la différence entre le ghassoul en plaquettes et en poudre ?",
            answer: "Il s'agit exactement de la même roche minérale pure. Les plaquettes sont séchées au soleil et se délitent instantanément dans l'eau. La poudre micronisée est tamisée pour obtenir des masques crémeux très lisses."
          },
          {
            question: "Le ghassoul convient-il aux peaux sèches et sensibles ?",
            answer: "Oui, contrairement aux argiles vertes souvent asséchantes, le ghassoul agit par absorption douce sans altérer le film lipidique protecteur de la peau."
          },
          {
            question: "Comment préparer le ghassoul ?",
            answer: "Mélangez le ghassoul à parts égales avec de l'eau tiède ou de l'eau de rose dans un récipient non métallique jusqu'à obtenir une pâte onctueuse comme du chocolat fondu."
          }
        ]
      },
      ar: {
        title: "طين الغاسول المغربي الأصيل من جبال الأطلس",
        subtitle: "طين بركاني معدني أثري مستخرج حصرياً من جبال الأطلس المغربية لأقنعة التنقية وغسول الشعر والسبا",
        seoTitle: "طين الغاسول المغربي بالجملة | بودرة وصفائح نقية | Morocco Cosmetic",
        seoDescription: "توريد طين الغاسول المغربي الطبيعي بالجملة من جبال الأطلس. متوفر صفائح وبودرة ناعمة للأقنعة والعناية بالشعر والمنتجعات الصحية.",
        shortDescription: "طين الأطلس الطبيعي النقي لأقنعة الوجه المنقية، ولصقات طمي الجسم بالسبا، وغسول الشعر الطبيعي الخالي من الكيماويات.",
        longDescription: [
          "الغاسول المغربي (المشتق اسمه من فعل «غسل») هو طين تجميلي معدني استثنائي لا يوجد له نظير ولا منجم في العالم بأسره إلا في منطقة واحدة: مناجم باطنية على حافة جبال الأطلس المتوسط في وادي ملوية بالمغرب.",
          "تكون هذا الطين قبل ملايين السنين بفعل الترسبات البركانية، وهو غني جداً بالسيليكا والمغنيسيوم والحديد والكالسيوم والبوتاسيوم. وعلى عكس أنواع الطين الأخرى التي قد تسبب جفاف البشرة، يعمل الغاسول بخاصية التبادل الأيوني والامتصاص اللطيف، فيلتقط الإفرازات والشوائب دون تجريد الجلد من زيوته الطبيعية الحامية.",
          "نوفر الغاسول بأشكاله الأصلية: صفائح مجففة تحت أشعة الشمس المغربية (مسحوق تقليدي)، أو بودرة ناعمة ميكرونية، أو معجون جاهز للاستخدام وممزوج بماء الورد العضوي لمراكز السبا والمصانع العالمية."
        ],
        categoryName: "صابون وطقوس الحمام",
        origin: "وادي ملوية، جبال الأطلس المتوسط، المغرب",
        extractionMethod: "استخراج منجمي، تجفيف طبيعي بالشمس، وطحن دقيق",
        keyBenefits: [
          {
            title: "تركيبة معدنية فريدة وغنية",
            description: "يحتوي على أكثر من 55% سيليكا ونحو 25% مغنيسيوم لتعويض المعادن المفقودة وشد أنسجة الجلد."
          },
          {
            title: "امتصاص الدهون دون التسبب بالجفاف",
            description: "ينظف المسام العميقة ويمتص الإفرازات الزائدة بلطف فائق دون إحداث تهيج أو شد في البشرة."
          },
          {
            title: "شامبو طبيعي للشعر (بديل الشامبو)",
            description: "يمنح الشعر كثافة ولمعاناً ويزيل الدهون من الفروة الدهنية ويعالج القشرة دون الإضرار بصبغة الشعر."
          },
          {
            title: "طبيعي 100% غير معالج كيميائياً",
            description: "مجفف بالهواء والشمس المغربية، خالٍ تماماً من المبيضات الكيميائية والمعادن الثقيلة والروائح الاصطناعية."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Moroccan Lava Clay" },
          { label: "المظهر", value: "صفائح صخرية رمادية-بنية أو بودرة حريرية فائقة النعومة" },
          { label: "نسبة السيليكا (SiO2)", value: "55% إلى 60%" },
          { label: "أكسيد المغنيسيوم (MgO)", value: "22% إلى 26%" },
          { label: "حجم الحبيبات", value: "صفائح أو بودرة ميكرونية أقل من 60 ميكرون" },
          { label: "مدة الصلاحية", value: "غير محددة طالما حُفظ جافاً بعيداً عن الرطوبة" }
        ],
        applications: [
          "أقنعة طمي الوجه لتنظيف المسام وتصفية البشرة",
          "لفائف الجسم الطينية المنقية في السبا ومراكز العلاج الطبيعي",
          "غسول نباتي طبيعي للشعر والفروة الحساسة",
          "معجون الحمام المغربي والخلطات التجميلية التقليدية"
        ],
        packagingOptions: {
          bulk: [
            "أكياس ورقية صناعية مقواة سعة 25 كغ مزودة بطبقة عازلة للرطوبة",
            "أكياس كبرى Big Bags سعة 1,000 كغ للمصانع الكبرى"
          ],
          privateLabel: [
            "أكياس كرافت فاخرة قابلة لإعادة الإغلاق سعة 200غ و500غ",
            "برطمانات زجاجية أو بلاستيكية مع ملاعق خشبية أنيقة",
            "معجون غاسول جاهز للاستخدام بماء الورد في أنابيب أو برطمانات"
          ]
        },
        moq: {
          bulk: "25 كغ",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري كاملة (COA) للمكونات المعدنية",
          "تقرير فحص المعادن الثقيلة مطابق للمعايير الأوروبية",
          "شهادة النقاء الميكروبيولوجي",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "منشأة معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن طين الغاسول المغربي بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "ما الفرق بين الغاسول الصفائح والبودرة؟",
            answer: "كلاهما من نفس المنجم ونفس الجودة المعدنية النقية. الصفائح هي الشكل التقليدي المجفف بالشمس الذي يذوب في الماء خلال ثوانٍ. والبودرة مطحونة ومنخولة لتسهيل تحضير الأقنعة الكريمية السريعة."
          },
          {
            question: "هل يناسب الغاسول البشرة الجافة والحساسة؟",
            answer: "نعم، الغاسول يختلف عن الطين الأخضر لأنه لا يجفف البشرة ولا يسحب رطوبتها الطبيعية، بل ينظف بلطف فائق."
          },
          {
            question: "كيف يُحضر قناع الغاسول؟",
            answer: "تُخلط كمية متساوية من الغاسول مع ماء دافئ أو ماء ورد مغربي في وعاء غير معدني، ويُترك دقيقتين حتى يتشرب ويصبح قواماً كريمياً ناعماً."
          }
        ]
      }
    }
  },
  {
    slug: "rose-water",
    sku: "MC-RSW-005",
    category: "waters",
    image: siteImages.catalog.roseWater,
    inciName: "Rosa Damascena Flower Water",
    casNumber: "90106-38-0",
    hsCode: "3303.00",
    locales: {
      en: {
        title: "Pure Moroccan Rose Water (Rosa Damascena)",
        subtitle: "Authentic steam-distilled floral hydrosol from hand-picked fresh roses of Kelaat M'Gouna",
        seoTitle: "Wholesale Moroccan Rose Water | Pure Damask Rose Hydrosol | Morocco Cosmetic",
        seoDescription: "Wholesale Moroccan rose water distilled from Kelaat M'Gouna Rosa Damascena petals. Pure natural toner and cosmetic hydrosol in bulk drums or retail bottles.",
        shortDescription: "Distilled Damask rose hydrosol for soothing facial toners, hydrating mists, and luxury natural skincare.",
        longDescription: [
          "Harvested at dawn each spring in the fragrant valley of Kelaat M'Gouna (Morocco's famed 'Valley of the Roses'), our pure Rose Water is hydro-distilled from freshly picked petals of authentic Rosa Damascena.",
          "Our distillation process preserves the micro-droplets of precious rose essential oil naturally suspended within the botanical water, imparting a delicate, authentic floral scent and superior toning properties. It naturally rebalances skin pH, calms redness, and provides refreshing hydration.",
          "Free from synthetic alcohol, added fragrances, or chemical preservatives, we supply this premium floral hydrosol in bulk IBC containers and drums for cosmetic laboratories, as well as in elegant glass mist bottles for private label skincare brands."
        ],
        categoryName: "Hydrosols & Floral Waters",
        origin: "Kelaat M'Gouna (Valley of the Roses), Morocco",
        extractionMethod: "Traditional Steam Hydro-Distillation",
        keyBenefits: [
          {
            title: "Natural pH Balancing Toner",
            description: "Restores skin's optimal acidic pH after cleansing, tightening pores and preparing skin for serums."
          },
          {
            title: "Soothes Redness & Irritation",
            description: "Natural anti-inflammatory flavonoids reduce redness, sunburn, and soothe sensitive, rosacea-prone skin."
          },
          {
            title: "Delicate Hydration & Refreshment",
            description: "Delivers an instant burst of cooling hydration that awakens tired, dull, and dehydrated complexions."
          },
          {
            title: "Authentic Rosa Damascena Aroma",
            description: "100% natural aromatherapeutic floral fragrance that relaxes the senses without artificial chemicals."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Rosa Damascena Flower Water" },
          { label: "Appearance", value: "Clear, transparent colorless liquid" },
          { label: "Odor", value: "Intense, fresh, authentic Damask rose fragrance" },
          { label: "pH Range", value: "4.5 – 6.5 (skin-friendly natural acidity)" },
          { label: "Essential Oil Content", value: "Natural suspension (~0.05% - 0.1%)" },
          { label: "Preservation", value: "Pure unpreserved or with gentle Ecocert-approved preservative" },
          { label: "Shelf Life", value: "18–24 months stored cool and sheltered from light" }
        ],
        applications: [
          "Hydrating daily facial toner and setting spray",
          "Aqueous phase replacement in organic creams and lotions",
          "Soothing eye compress for tired, swollen eyelids",
          "Mixing medium for Moroccan Ghassoul and clay masks"
        ],
        packagingOptions: {
          bulk: [
            "25 Liters food-grade HDPE jerrycans",
            "200 Liters polyethylene drums",
            "1,000 Liters IBC containers for cosmetic manufacturing"
          ],
          privateLabel: [
            "100ml / 150ml / 200ml clear or frosted glass spray bottles",
            "Fine-mist atomizers in gold, rose gold, silver, or black",
            "Luxury retail labels and outer folding cartons"
          ]
        },
        moq: {
          bulk: "25 Liters",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Microbiological sterility analysis",
          "MSDS Safety Data Sheet",
          "ONSSA export certification",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Moroccan Rose Water.",
        faqs: [
          {
            question: "Is this genuine steam-distilled rose water or water with added rose fragrance?",
            answer: "It is 100% genuine steam-distilled hydrosol obtained directly from the distillation of fresh Rosa Damascena petals in Kelaat M'Gouna, never water mixed with artificial perfumes."
          },
          {
            question: "Does your rose water contain alcohol or preservatives?",
            answer: "We offer pure unpreserved 100% floral hydrosol for immediate formulation, as well as stabilized versions with gentle COSMOS/Ecocert compliant preservatives for retail shelf life."
          },
          {
            question: "What is the ratio of rose petals used in distillation?",
            answer: "We use a high 1:1 distillation ratio (1 kg of fresh rose petals produces 1 liter of concentrated hydrosol) to ensure maximum aroma and therapeutic benefits."
          }
        ]
      },
      fr: {
        title: "Eau de Rose Pure du Maroc (Rosa Damascena)",
        subtitle: "Hydrolat floral pur distillé à la vapeur à partir de pétales frais de roses de Kelaat M'Gouna",
        seoTitle: "Eau de Rose Marocaine en Gros | Hydrolat Pur de Kelaat M'Gouna | Morocco Cosmetic",
        seoDescription: "Achetez de l'eau de rose de Damas du Maroc en gros. Hydrolat pur distillé à Kelaat M'Gouna pour toniques visage et formulations cosmétiques.",
        shortDescription: "Hydrolat distillé de rose de Damas pour lotions toniques, brumes hydratantes et soins visage naturels.",
        longDescription: [
          "Récoltée à l'aube au printemps dans la célèbre vallée de Kelaat M'Gouna (la « Vallée des Roses » au sud de l'Atlas), notre eau de rose pure est issue de l'hydro-distillation traditionnelle des pétales frais de Rosa Damascena.",
          "Notre processus de distillation préserve les micro-gouttelettes d'huile essentielle précieuse de rose naturellement dispersées dans l'eau florale. Elle rééquilibre le pH cutané, apaise les rougeurs, tonifie l'épiderme et resserre les pores.",
          "Sans alcool, sans parfum de synthèse ni solvant chimique, nous approvisionnons les laboratoires cosmétiques en fûts et cuves IBC, ainsi que les marques en brumisateurs haut de gamme prêts à la vente."
        ],
        categoryName: "Hydrolats & Eaux Florales",
        origin: "Kelaat M'Gouna (Vallée des Roses), Maroc",
        extractionMethod: "Hydro-distillation à la vapeur d'eau",
        keyBenefits: [
          {
            title: "Tonique Rééquilibrant du pH",
            description: "Restaure le manteau acide naturel de la peau après le nettoyage et affine le grain de peau."
          },
          {
            title: "Apaisant Anti-Rougeurs",
            description: "Riche en flavonoïdes calmants pour apaiser les peaux sensibles, réactives et sujettes aux rougeurs."
          },
          {
            title: "Hydratation Rafraîchissante Instantanée",
            description: "Apporte un coup d'éclat immédiat, réveille les teints ternes et hydrate les peaux déshydratées."
          },
          {
            title: "Parfum Authentique de Rose de Damas",
            description: "Fragrance florale 100% naturelle aux propriétés aromathérapeutiques relaxantes et harmonisantes."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Rosa Damascena Flower Water" },
          { label: "Aspect", value: "Liquide limpide incolore et fluide" },
          { label: "Odeur", value: "Florale fraîche, caractéristique de rose de Damas" },
          { label: "pH", value: "4,5 à 6,5 (acidité physiologique naturelle)" },
          { label: "Huile Essentielle", value: "Suspension naturelle (env. 0,05% à 0,1%)" },
          { label: "Conservation", value: "18 à 24 mois à l'abri de la lumière et de la chaleur" }
        ],
        applications: [
          "Lotion tonique quotidienne pour le visage et brume fixatrice",
          "Substitution de l'eau dans la phase aqueuse de crèmes et émulsions",
          "Compresses apaisantes pour le contour des yeux fatigués",
          "Liquide de réhydratation pour masques au ghassoul et argiles"
        ],
        packagingOptions: {
          bulk: [
            "Bidons en PEHD de 25 Litres certifiés cosmétiques",
            "Fûts de 200 Litres en polyéthylène haute densité",
            "Conteneurs IBC de 1 000 Litres pour la fabrication industrielle"
          ],
          privateLabel: [
            "Flacons spray de 100 ml, 150 ml et 200 ml en verre transparent ou dépoli",
            "Pompes spray brumisateur fin dorées, argentées ou noires",
            "Étiquetage personnalisé de luxe et étuis imprimés"
          ]
        },
        moq: {
          bulk: "25 Litres",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) par lot",
          "Contrôle de stérilité microbiologique",
          "Fiche de Données de Sécurité (MSDS)",
          "Certificat phytosanitaire export ONSSA",
          "Atelier certifié ISO 22716 BPF"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur l'eau de rose en gros ou marque blanche.",
        faqs: [
          {
            question: "Est-ce un véritable hydrolat ou de l'eau parfumée artificiellement ?",
            answer: "C'est un véritable hydrolat 100% pur obtenu par distillation à la vapeur de pétales frais de rose de Damas à Kelaat M'Gouna, et en aucun cas de l'eau additionnée d'arômes de synthèse."
          },
          {
            question: "Contient-elle des conservateurs ?",
            answer: "Nous fournissons l'hydrolat pur sans conservateur pour les industriels, ou avec un conservateur doux agréé Ecocert pour les produits finis destinés au détail."
          },
          {
            question: "Quel ratio de fleurs est utilisé pour la distillation ?",
            answer: "Nous utilisons un ratio concentré de 1:1 (1 kg de pétales frais pour 1 litre d'hydrolat recueilli), garantissant une intensité aromatique et active maximale."
          }
        ]
      },
      ar: {
        title: "ماء الورد المغربي النقي (قلعة مكونة)",
        subtitle: "هيدروسول زهري مقطر بالبخار من بتلات الورد الدمشقي الطازج المقطوف يدوياً في قلعة مكونة",
        seoTitle: "ماء الورد المغربي بالجملة | ماء مقطر نقي من قلعة مكونة | Morocco Cosmetic",
        seoDescription: "توريد ماء الورد المغربي المقطر بالجملة من واحة قلعة مكونة. تونر طبيعي للبشرة وهيدروسول نقي للعلامة الخاصة ومصانع التجميل.",
        shortDescription: "ماء ورد مقطر نقي للوجه للتونر المنعش، وترطيب البشرة وتلطيف الاحمرار والتركيبات التجميلية الطبيعية.",
        longDescription: [
          "يُقطف الورد الدمشقي المغربي يدوياً عند بزوغ الفجر في فصل الربيع من واحات قلعة مكونة الشهيرة بـ«وادي الورود» في سفوح جبال الأطلس، ثم يُقطر طازجاً بالبخار للحصول على أنقى ماء ورد طبيعي.",
          "تحتفظ عملية التقطير الدقيقة بالقطرات الميكرونية لزيت الورد العطري الفاخر المذاب طبيعياً داخل الماء، مما يمنحه رائحة زهرية ساحرة وخصائص قابضة للمسام ومهدئة للبشرة وملطفة للاحمرار.",
          "خالٍ تماماً من الكحول والروائح الاصطناعية والمواد الكيميائية، نوفره بالجملة في براميل وحاويات لمصانع المستحضرات، أو في بخاخات زجاجية أنيقة جاهزة للتسويق تحت علامتكم التجارية."
        ],
        categoryName: "المياه المقطرة والهيدروسول",
        origin: "قلعة مكونة (وادي الورود)، المغرب",
        extractionMethod: "تقطير مائي تقليدي بالبخار",
        keyBenefits: [
          {
            title: "تونر طبيعي يوازن درجة حموضة البشرة",
            description: "يعيد للبشرة توازنها الطبيعي بعد الغسول ويضيق المسام الواسعة ويهيئها لامتصاص السيرومات."
          },
          {
            title: "مهدئ فائق للاحمرار والتهيج",
            description: "يحتوي على مركبات الفلافونويد المضادة للالتهاب لتهدئة البشرة الحساسة وعلاج حروق الشمس."
          },
          {
            title: "ترطيب وانتعاش فوري للبشرة",
            description: "يرطب البشرة المجهدة على الفور ويعيد إليها الحيوية والنضارة والإشراق في ثوانٍ."
          },
          {
            title: "رائحة الورد الدمشقي الطبيعية الساحرة",
            description: "عطر زهري طبيعي 100% يساعد على استرخاء الأعصاب وتحسين المزاج دون أي عطور كيميائية."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Rosa Damascena Flower Water" },
          { label: "المظهر", value: "سائل مائي شفاف نقي عديم اللون" },
          { label: "الرائحة", value: "رائحة ورد دمشقي فواحة وطبيعية زكية" },
          { label: "درجة الحموضة pH", value: "4.5 إلى 6.5 (حموضة طبيعية ملائمة للبشرة)" },
          { label: "نسبة الزيت العطري", value: "مذاب طبيعياً بنسبة (0.05% إلى 0.1%)" },
          { label: "مدة الصلاحية", value: "18 إلى 24 شهراً في مكان بارد ومعتم" }
        ],
        applications: [
          "تونر يومي للوجه وبخاخ مرطب ومثبت للمكياج",
          "بديل للماء العادي في المرحلة المائية لكريمات ولوشنات التجميل",
          "كمادات مهدئة لتخفيف إجهاد وانتفاخ العينين",
          "سائل خلط طبيعي لأقنعة الغاسول والطين المغربي"
        ],
        packagingOptions: {
          bulk: [
            "جالونات HDPE غذائية سعة 25 لتر",
            "براميل بولي إيثيلين سعة 200 لتر",
            "حاويات IBC سعة 1,000 لتر لخطوط الإنتاج الصناعي"
          ],
          privateLabel: [
            "عبوات بخاخ زجاجية شفافة أو مثلجة سعة 100، 150، 200 مل",
            "مضخات بخاخ رذاذ ناعم بألوان ذهبية، فضية، أو سوداء",
            "تصميم ملصقات فاخرة وعلب كرتونية مخصصة لعلامتكم"
          ]
        },
        moq: {
          bulk: "25 لتر",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "فحص السلامة والتعقيم الميكروبيولوجي",
          "صحيفة بيانات السلامة (MSDS)",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "تصنيع في منشأة معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن ماء الورد المغربي بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "هل هذا ماء مقطر حقيقي أم ماء معطر برائحة صناعية؟",
            answer: "هو ماء مقطر حقيقي نقي 100% ناتج عن تقطير بتلات الورد الدمشقي الطازجة في قلعة مكونة، ولسنا نستخدم أي ماء مخلوط بروائح عطرية اصطناعية."
          },
          {
            question: "هل يحتوي على مواد حافظة أو كحول؟",
            answer: "نوفر ماء الورد النقي بنسبة 100% بدون أي مواد حافظة للصناعات التجميلية، كما نوفر نسخاً مضافاً إليها مادة حافظة لطيفة معتمدة عضوياً من Ecocert لضمان بقائها طويلاً على رفوف التجزئة."
          },
          {
            question: "ما هي نسبة الورد المستخدمة في التقطير؟",
            answer: "نستخدم نسبة تقطير مركزة 1:1 (أي كغ واحد من بتلات الورد الطازجة لإنتاج لتر واحد من الهيدروسول)، مما يضمن أعلى تركيز للرائحة والفوائد."
          }
        ]
      }
    }
  },
  {
    slug: "orange-blossom-water",
    sku: "MC-OBW-006",
    category: "waters",
    image: siteImages.catalog.orangeBlossomWater,
    inciName: "Citrus Aurantium Amara Flower Water",
    casNumber: "8028-48-6",
    hsCode: "3303.00",
    locales: {
      en: {
        title: "Moroccan Orange Blossom Water (Neroli Hydrosol)",
        subtitle: "Artisanal steam-distilled floral water from bitter orange blossoms (Citrus aurantium)",
        seoTitle: "Wholesale Orange Blossom Water | Moroccan Neroli Hydrosol | Morocco Cosmetic",
        seoDescription: "Bulk and private label Moroccan orange blossom water (neroli hydrosol). Freshly distilled in Marrakech for calming face mists, toners, and spa rituals.",
        shortDescription: "Pure distilled neroli hydrosol for calming sensitive skin, pore tightening, and luxury spa aromatherapy.",
        longDescription: [
          "Distilled each spring from the pristine white blossoms of bitter orange trees (*Citrus aurantium amara*) in the historic citrus groves of Marrakech and Taroudant, Moroccan Orange Blossom Water (Neroli Hydrosol) is a celebrated treasure of Moroccan tradition.",
          "Distilled slowly in traditional copper alembics, it contains water-soluble active compounds and traces of precious neroli essential oil. It delivers exceptional calming, balancing, and rejuvenating benefits for combination, sensitive, or reactive skin types.",
          "With its signature honeyed citrus-floral aroma, it is extensively utilized in luxury spa therapies, facial toners, natural room and linen mists, and as a natural fragranced water in cosmetic formulations."
        ],
        categoryName: "Hydrosols & Floral Waters",
        origin: "Marrakech & Taroudant, Morocco",
        extractionMethod: "Traditional Steam Hydro-Distillation",
        keyBenefits: [
          {
            title: "Calms & Comforts Stressed Skin",
            description: "Naturally relieves tension, soothes redness, and brings calm to sensitive, blotchy, and irritated skin."
          },
          {
            title: "Balances Sebum & Clarifies Complexion",
            description: "Gently astringent properties tighten enlarged pores and balance oil production on combination skin."
          },
          {
            title: "Mood-Lifting Aromatherapy",
            description: "Renowned for its uplifting, stress-relieving natural neroli aroma that induces relaxation."
          },
          {
            title: "100% Pure & Free From Alcohol",
            description: "Pure botanical distillate without chemical solvents, denatured alcohol, or synthetic scent boosters."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Citrus Aurantium Amara Flower Water" },
          { label: "Appearance", value: "Clear, transparent colorless liquid" },
          { label: "Odor", value: "Characteristic delicate, sweet floral-citrus neroli aroma" },
          { label: "pH Range", value: "5.0 – 6.5" },
          { label: "Active Compounds", value: "Linalool, Nerolidol traces, Flavonoids" },
          { label: "Shelf Life", value: "18–24 months when kept cool in a sealed container" }
        ],
        applications: [
          "Balancing facial toner for combination and sensitive skin",
          "Relaxing night-time pillow and calming face mist",
          "Scenting and hydration medium for spa treatments",
          "Precious aqueous ingredient in serums, creams, and lotions"
        ],
        packagingOptions: {
          bulk: [
            "25 Liters food-grade HDPE jerrycans",
            "200 Liters polyethylene industrial drums",
            "1,000 Liters IBC totes"
          ],
          privateLabel: [
            "100ml / 150ml / 200ml frosted or amber glass mist bottles",
            "Fine mist pumps in matte black, silver, or gold",
            "Bespoke label design and retail box packaging"
          ]
        },
        moq: {
          bulk: "25 Liters",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Microbiological safety certificate",
          "MSDS Safety Data Sheet",
          "ONSSA export certification",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Orange Blossom Water.",
        faqs: [
          {
            question: "What is the difference between orange blossom water and neroli essential oil?",
            answer: "Neroli essential oil is the concentrated oil extracted from bitter orange blossoms, while orange blossom water is the pure aromatic hydrosol produced during the same distillation, containing the water-soluble compounds and a subtle fraction of neroli oil."
          },
          {
            question: "Can it be used for both culinary and cosmetic applications?",
            answer: "Our orange blossom water is produced to strict cosmetic and food-grade standards, making it completely pure and safe for luxury skincare, spa aromatherapy, or gourmet culinary applications."
          },
          {
            question: "How does it compare to Rose Water?",
            answer: "While Rose Water is deeply hydrating and anti-aging, Orange Blossom Water is particularly renowned for its calming, balancing effect on combination skin and its soothing aromatherapy properties."
          }
        ]
      },
      fr: {
        title: "Eau de Fleur d'Oranger du Maroc (Hydrolat de Néroli)",
        subtitle: "Eau florale artisanale distillée à la vapeur à partir de fleurs de bigaradier (Citrus aurantium)",
        seoTitle: "Eau de Fleur d'Oranger en Gros | Hydrolat de Néroli Marocain | Morocco Cosmetic",
        seoDescription: "Fournisseur d'eau de fleur d'oranger marocaine en gros. Distillation artisanale de néroli à Marrakech pour brumes apaisantes et soins du visage.",
        shortDescription: "Hydrolat pur de néroli pour apaiser les peaux sensibles, resserrer les pores et rituels aromathérapeutiques en spa.",
        longDescription: [
          "Distillée chaque printemps à partir des délicates fleurs blanches du bigaradier (*Citrus aurantium amara*) dans les vergers ensoleillés de Marrakech et du Souss, l'eau de fleur d'oranger marocaine (hydrolat de néroli) est une merveilleuse tradition olfactive et cosmétique.",
          "Obtenue par distillation lente à la vapeur d'eau, elle concentre les bienfaits adoucissants et régénérants de la fleur d'oranger ainsi que des traces précieuses d'huile essentielle de néroli. Elle est particulièrement indiquée pour apaiser les peaux stressées, rééquilibrer les peaux mixtes et apporter éclat et sérénité.",
          "Avec sa senteur florale gourmande et suave, elle s'utilise aussi bien en brume tonique pour le visage qu'en soin de relaxation en spa ou en ingrédient noble pour émulsions cosmétiques."
        ],
        categoryName: "Hydrolats & Eaux Florales",
        origin: "Marrakech & Taroudant, Maroc",
        extractionMethod: "Hydro-distillation artisanale à la vapeur",
        keyBenefits: [
          {
            title: "Apaisement Cutané & Anti-Stress",
            description: "Calme les tiraillements, atténue les rougeurs et apporte un réconfort immédiat aux peaux sensibles."
          },
          {
            title: "Rééquilibrage & Action Astringente Douce",
            description: "Régule en douceur l'excès de sébum et resserre les pores sans assécher les zones déshydratées."
          },
          {
            title: "Bien-Être Aromathérapeutique",
            description: "Reconnue pour ses vertus relaxantes qui favorisent la détente nerveuse et le sommeil réparateur."
          },
          {
            title: "100% Pure Sans Alcool",
            description: "Distillat botanique sans alcool dénaturé, sans parfum chimique ni solvants agressifs."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Citrus Aurantium Amara Flower Water" },
          { label: "Aspect", value: "Liquide limpide incolore et fluide" },
          { label: "Odeur", value: "Florale suave, miellée et fraîche caractéristique de néroli" },
          { label: "pH", value: "5,0 à 6,5" },
          { label: "Composants actifs", value: "Traces de néroli, linalol, flavonoïdes naturels" },
          { label: "Conservation", value: "18 à 24 mois dans un endroit frais et sombre" }
        ],
        applications: [
          "Lotion tonique adoucissante pour peaux mixtes et sensibles",
          "Brume d'oreiller relaxante et spray rafraîchissant pour le visage",
          "Rituels de relaxation et massages aromatiques en spa",
          "Phase aqueuse parfumée pour crèmes, gels et laits corporels"
        ],
        packagingOptions: {
          bulk: [
            "Bidons en PEHD alimentaire de 25 Litres",
            "Fûts industriels de 200 Litres en polyéthylène",
            "Cuves IBC de 1 000 Litres pour la fabrication industrielle"
          ],
          privateLabel: [
            "Flacons brumisateurs de 100 ml, 150 ml et 200 ml en verre ambré ou dépoli",
            "Pompes spray fin en noir mat, argent ou doré",
            "Création graphique d'étiquettes personnalisées et boîtes pliantes"
          ]
        },
        moq: {
          bulk: "25 Litres",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) complet par lot",
          "Contrôle de stérilité microbiologique",
          "Fiche de Données de Sécurité (MSDS)",
          "Agrément sanitaire et d'exportation ONSSA",
          "Atelier conforme aux BPF cosmétiques ISO 22716"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur l'eau de fleur d'oranger en gros ou marque blanche.",
        faqs: [
          {
            question: "Quelle est la différence avec l'huile essentielle de néroli ?",
            answer: "L'huile essentielle de néroli est l'huile pure hautement concentrée obtenue lors de la distillation, tandis que l'eau florale est l'hydrolat délicat qui recueille les molécules aromatiques hydrosolubles."
          },
          {
            question: "Convient-elle aux peaux grasses ou à imperfections ?",
            answer: "Oui, son action légèrement astringente et purifiante en fait un excellent tonique pour rééquilibrer la zone T sans décaper l'épiderme."
          },
          {
            question: "Peut-on l'utiliser comme brume de sommeil ?",
            answer: "Tout à fait, sa teneur naturelle en molécules relaxantes en fait une brume idéale à vaporiser sur le visage et l'oreiller avant le coucher."
          }
        ]
      },
      ar: {
        title: "ماء زهر البرتقال المغربي (ماء الزهر / نيرولي)",
        subtitle: "ماء مقطر تقليدي بالبخار من زهور شجر النارنج المغربي الفواح (أشجار الزنبوع)",
        seoTitle: "ماء زهر البرتقال بالجملة | ماء زهر مغربي مقطر | Morocco Cosmetic",
        seoDescription: "ماء زهر البرتقال المغربي النقي بالجملة والعلامة الخاصة. مقطر في مراكش لتونر البشرة المهدئ والطقوس الجمالية والمنتجات العطرية.",
        shortDescription: "ماء زهر مقطر نقي لتهدئة البشرة الحساسة وتضييق المسام، والطقوس الجمالية والاسترخاء في مراكز السبا.",
        longDescription: [
          "يُقطر ماء الزهر المغربي الفاخر في كل ربيع من أزهار شجر النارنج البيضاء الزكية (*Citrus aurantium amara*) في بساتين مراكش وتارودانت التاريخية العريقة.",
          "تتم عملية التقطير التقليدية على مهل في أوانٍ نحاسية مقفلة، مما يجعل الماء المقطر مشبعاً بمركبات زهر النيرولي المهدئة وقطرات من زيته العطري الثمين. يمنح هذا الماء المقطر ترطيباً فورياً ويهدئ البشرة الحساسة ويساعد على تنظيم إفراز الدهون للبشرة المختلطة.",
          "برائحته الزهرية العذبة والمنعشة، يدخل ماء الزهر في طقوس السبا الراقية، ورذاذ الوجه المهدئ قبل النوم، وكعنصر عطري مائي نباتي فاخر في صناعة المستحضرات والكريمات."
        ],
        categoryName: "المياه المقطرة والهيدروسول",
        origin: "مراكش وتارودانت، المغرب",
        extractionMethod: "تقطير بالبخار في أجهزة نحاسية تقليدية",
        keyBenefits: [
          {
            title: "تهدئة البشرة المجهدة والحساسة",
            description: "يخفف الاحمرار والشد والحساسية الجلدية ويعيد التوازن والراحة للبشرة المتهيجة."
          },
          {
            title: "تنظيم الدهون وقبض المسام",
            description: "خصائصه القابضة اللطيفة تضيق المسام الواسعة وتنظم إفراز الدهون للبشرة المختلطة والدهنية."
          },
          {
            title: "علاج عطري مهدئ للأعصاب (Aromatherapy)",
            description: "رائحته الطبيعية الغنية بالنيرولي تساعد على التخلص من التوتر والقلق وتحفز النوم الهادئ."
          },
          {
            title: "نقي 100% وخالٍ من الكحول",
            description: "مقطر نباتي خالص خالٍ من الكحول الصناعي والملونات والمثبتات الكيميائية."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Citrus Aurantium Amara Flower Water" },
          { label: "المظهر", value: "سائل مائي شفاف عديم اللون" },
          { label: "الرائحة", value: "زهرية حمضية عذبة فواحة ومميزة لزهر النارنج" },
          { label: "درجة الحموضة pH", value: "5.0 إلى 6.5" },
          { label: "المركبات الفعالة", value: "آثار النيرولي واللينالول والفلافونويد الطبيعي" },
          { label: "مدة الصلاحية", value: "18 إلى 24 شهراً في مكان بارد وجاف" }
        ],
        applications: [
          "تونر مهدئ ومنظم لإفراز دهون الوجه",
          "رذاذ مهدئ قبل النوم على الوجه والوسادة للاسترخاء",
          "طقوس السبا وجلسات التدليك والعناية الفاخرة",
          "المرحلة المائية المعطرة في صناعة الكريمات واللوشنات التجميلية"
        ],
        packagingOptions: {
          bulk: [
            "جالونات بلاستيكية HDPE غذائية سعة 25 لتر",
            "براميل بولي إيثيلين سعة 200 لتر",
            "حاويات IBC صناعية سعة 1,000 لتر"
          ],
          privateLabel: [
            "قوارير رذاذ زجاجية كهرمانية أو مثلجة سعة 100، 150، 200 مل",
            "مضخات رذاذ ناعمة باللون الأسود أو الذهبي أو الفضي",
            "تصميم ملصقات مقاومة وعلب فاخرة خاصة بعلامتكم"
          ]
        },
        moq: {
          bulk: "25 لتر",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "فحص التعقيم والسلامة الميكروبيولوجية",
          "صحيفة بيانات السلامة (MSDS)",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "تصنيع في منشأة معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن ماء زهر البرتقال بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "ما الفرق بين ماء الزهر وزيت النيرولي العطري؟",
            answer: "زيت النيرولي هو الزيت العطري المركز الصافي المستخرج من الزهور، بينما ماء الزهر هو الهيدروسول المائي الناتج عن التقطير والمشبع بالمركبات العطرية الذائبة."
          },
          {
            question: "هل يناسب البشرة المختلطة والدهنية؟",
            answer: "نعم، بفضل خصائصه القابضة اللطيفة، يساعد ماء الزهر على موازنة منطقة T وتقليص المسام دون تجفيف الجلد."
          },
          {
            question: "هل يمكن استخدامه للأغراض الغذائية أيضاً؟",
            answer: "نعم، يتم تقطير ماء الزهر لدينا بمعايير نقاء فائقة تجعله ملائماً للمستحضرات التجميلية وكذلك للاستخدام الغذائي والحلويات الفاخرة."
          }
        ]
      }
    }
  },
  {
    slug: "nila-powder",
    sku: "MC-NIL-007",
    category: "powders",
    image: siteImages.catalog.nilaPowder,
    inciName: "Indigofera Tinctoria Leaf / Mineral Powder",
    casNumber: "84775-63-3",
    hsCode: "3203.00",
    locales: {
      en: {
        title: "Authentic Blue Nila Powder",
        subtitle: "Traditional Sahrawi royal blue pigment for skin brightening masks, hammam scrubs, and dark-spot treatments",
        seoTitle: "Wholesale Blue Nila Powder | Moroccan Indigo Brightening Pigment | Morocco Cosmetic",
        seoDescription: "Wholesale authentic Moroccan blue nila powder from the Sahara. Natural botanical/mineral pigment for skin brightening masks, body scrubs, and spa treatments.",
        shortDescription: "Traditional Sahrawi royal blue pigment for brightening facial masks, hammam body scrubs, and dark spot treatments.",
        longDescription: [
          "Originating in the sun-drenched Moroccan Sahara, Blue Nila powder (*Nila Zarka*) is an ancient beauty secret cherished for generations by Sahrawi and Moroccan women for evening out skin tone and illuminating the complexion.",
          "Extracted from specific indigo botanical plants native to arid southern Morocco and traditionally prepared into soft, vibrant royal blue mineralized cakes, it possesses remarkable skin-brightening and detoxifying qualities without chemical dyes or artificial colorants.",
          "Widely requested by prestigious spas, hammams, and cosmetic brands formulating natural brightening lines, Blue Nila is mixed into facial masks with yogurt or rose water, infused into body scrubs with Moroccan black soap, or blended into whitening creams for stubborn dark spots."
        ],
        categoryName: "Botanical & Mineral Powders",
        origin: "Moroccan Sahara & Zagora, Morocco",
        extractionMethod: "Traditional Botanical/Mineral Preparation & Micronization",
        keyBenefits: [
          {
            title: "Brightens & Evens Skin Tone",
            description: "Known to visibly lighten hyperpigmentation, age spots, and uneven sun patches on face and body."
          },
          {
            title: "Softens Elbows, Knees & Dark Zones",
            description: "Particularly effective for smoothing and lightening friction-darkened areas such as knees, elbows, and knuckles."
          },
          {
            title: "Deeply Purifying for Pores",
            description: "Absorbs impurities and refines skin texture when combined with ghassoul clay or black soap in hammams."
          },
          {
            title: "100% Authentic Moroccan Source",
            description: "Pure natural origin without harmful aniline dyes, synthetic blue pigments, or toxic heavy metals."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Indigofera Tinctoria Leaf Powder" },
          { label: "Appearance", value: "Fine, velvety intense royal blue powder" },
          { label: "Odor", value: "Faint, characteristic earthy botanical scent" },
          { label: "Solubility", value: "Dispersible in water, oil, clays, and soap bases" },
          { label: "Purity", value: "100% natural cosmetic grade, tested free of lead & synthetic dyes" },
          { label: "Shelf Life", value: "36 months stored dry away from direct sunlight" }
        ],
        applications: [
          "Brightening face masks mixed with yogurt, rose water, or argan oil",
          "Hammam body scrubs blended with Moroccan black soap",
          "Natural pigment and active in brightening creams and body lotions",
          "Custom formulations for targeted dark spot correction"
        ],
        packagingOptions: {
          bulk: [
            "5 kg / 10 kg / 25 kg airtight fiber drums with inner PE liner",
            "Double-sealed moisture-barrier bags"
          ],
          privateLabel: [
            "50g / 100g / 200g luxury cosmetic jars or ziplock pouches",
            "Custom printed labels with your brand logo and directions of use",
            "Pre-formulated Nila face masks and Nila black soaps ready for retail"
          ]
        },
        moq: {
          bulk: "5 kg",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Heavy metals compliance test (Lead, Cadmium, Arsenic free)",
          "MSDS Safety Data Sheet",
          "ONSSA export sanitary certificate",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Blue Nila Powder.",
        faqs: [
          {
            question: "Does authentic Blue Nila powder permanently stain the skin?",
            answer: "No. Authentic cosmetic Blue Nila powder washes away completely with water or a gentle washcloth, leaving the skin visibly brighter. Fake synthetic blue dyes stain the skin and are toxic; our product is 100% authentic Moroccan natural Nila tested for safety."
          },
          {
            question: "How is Nila powder used in treatments?",
            answer: "It is extremely concentrated: only a small pinch (half a teaspoon) is mixed with yogurt, rose water, or argan oil for a facial mask, or blended directly into Moroccan black soap for an invigorating body exfoliation."
          },
          {
            question: "Can you provide pre-mixed Nila skincare products?",
            answer: "Yes, we formulate private label Nila-infused black soap, Nila body scrubs, and ready-to-use Nila clay masks filled and packaged with your branding."
          }
        ]
      },
      fr: {
        title: "Poudre de Nila Bleue Authentique",
        subtitle: "Pigment bleu royal saharien traditionnel pour l'éclat du teint, gommages au hammam et soins anti-taches",
        seoTitle: "Poudre de Nila Bleue en Gros | Pigment Éclaircissant Marocain | Morocco Cosmetic",
        seoDescription: "Grossiste poudre de nila bleue authentique du Sahara marocain. Ingrédient traditionnel pour masques éclaircissants, gommages hammam et cosmétique.",
        shortDescription: "Pigment bleu royal traditionnel du Sahara pour masques clarifiants, gommages corporels et soins anti-taches.",
        longDescription: [
          "Originaire du Sahara marocain, la poudre de Nila bleue (*Nila Zarka*) est un rituel de beauté ancestral transmis par les femmes sahraouies pour éclaircir le teint et raviver l'éclat de la peau.",
          "Extraite d'une variété spécifique d'indigotier poussant dans le grand sud marocain et préparée selon des méthodes artisanales en blocs bleu roi soyeux, elle possède d'exceptionnelles vertus unifiantes sans recourir à des colorants de synthèse.",
          "Très demandée par les spas et marques de cosmétiques naturels, la Nila s'incorpore dans les masques au yaourt ou à l'eau de rose, se mélange au savon noir pour les gommages ou enrichit des soins ciblés contre les taches pigmentaires."
        ],
        categoryName: "Poudres Botaniques & Minérales",
        origin: "Sahara Marocain & Zagora, Maroc",
        extractionMethod: "Préparation botanique artisanale et micronisation fine",
        keyBenefits: [
          {
            title: "Éclaircit & Unifie le Teint",
            description: "Aide à estomper les taches brunes, masque de grossesse et irrégularités pigmentaires du visage et du corps."
          },
          {
            title: "Adoucit les Zones Sombres et Rugueuses",
            description: "Très efficace pour éclaircir les genoux, coudes, aisselles et articulations assombries par les frottements."
          },
          {
            title: "Purification en Profondeur",
            description: "Désincruste les pores et affine le grain de peau en synergie avec le savon noir au hammam."
          },
          {
            title: "100% Naturelle du Maroc",
            description: "Sans colorants azoïques nocifs, sans pigments synthétiques toxiques et testée sans métaux lourds."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Indigofera Tinctoria Leaf Powder" },
          { label: "Aspect", value: "Poudre très fine d'un bleu royal intense et velouté" },
          { label: "Odeur", value: "Subtile odeur minérale et végétale caractéristique" },
          { label: "Solubilité", value: "Dispersible dans l'eau, les huiles, argiles et bases de savon" },
          { label: "Pureté", value: "100% pure cosmétique, testée sans aniline ni colorants chimiques" },
          { label: "Conservation", value: "36 mois dans un contenant hermétique à l'abri de l'humidité" }
        ],
        applications: [
          "Masques éclaircissants visage au yaourt, à l'eau de rose ou à l'argan",
          "Gommages corporels au hammam mélangée au savon noir marocain",
          "Actif unifiant dans les laits corporels et crèmes clarifiantes",
          "Soins ciblés pour les zones de frottement foncées"
        ],
        packagingOptions: {
          bulk: [
            "Fûts hermétiques en fibre de 5 kg, 10 kg et 25 kg avec doublure PE",
            "Sacs thermo-soudés avec barrière anti-humidité"
          ],
          privateLabel: [
            "Pots cosmétiques ou sachets zippés de 50g, 100g et 200g",
            "Étiquetage personnalisé de luxe selon votre charte graphique",
            "Produits finis formulés (Savon noir à la nila, masques prêts à l'emploi)"
          ]
        },
        moq: {
          bulk: "5 kg",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) par lot",
          "Contrôle d'absence de métaux lourds (Plomb, Cadmium, Arsenic)",
          "Fiche de Données de Sécurité (MSDS)",
          "Agrément sanitaire officiel ONSSA",
          "Laboratoire certifié ISO 22716 BPF"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur la poudre de nila bleue en gros ou marque blanche.",
        faqs: [
          {
            question: "La véritable nila bleue tache-t-elle la peau de façon permanente ?",
            answer: "Absolument pas. La vraie poudre de nila naturelle se rince facilement à l'eau ou avec un gant de toilette sans tacher la peau durablement, révélant un teint clarifié. Seules les contrefaçons chimiques tachent la peau."
          },
          {
            question: "Comment l'utilise-t-on en rituel ?",
            answer: "Elle est très concentrée : une simple demi-cuillère à café mélangée à du yaourt nature ou de l'eau de rose suffit pour un masque visage lumineux de 15 minutes."
          },
          {
            question: "Proposez-vous des formules prêtes à l'emploi à la nila ?",
            answer: "Oui, nous fabriquons en marque blanche du savon noir enrichi à la nila, des gommages au sucre et nila et des masques crémeux prêts à l'emploi."
          }
        ]
      },
      ar: {
        title: "بودرة النيلة الزرقاء الصحراوية المغربية",
        subtitle: "سر الجمال الصحراوي الأزرق الأصيل لتفتيح ونضارة البشرة، وأقنعة الحمام المغربي وتوحيد لون الجسم",
        seoTitle: "بودرة النيلة الزرقاء بالجملة | نيلة صحراوية مغربية أصلية | Morocco Cosmetic",
        seoDescription: "شراء بودرة النيلة الزرقاء المغربية الأصلية بالجملة. مسحوق صحراوي طبيعي لتفتيح البشرة، أقنعة التبييض ومقشرات الحمام المغربي.",
        shortDescription: "مسحوق أزرق ملكي صحراوي تقليدي لتفتيح الوجه وتبييض الجسم وعلاج التصبغات والبقع الداكنة في الحمام المغربي.",
        longDescription: [
          "تعد بودرة النيلة الزرقاء (النيلة الصحراوية) إحدى أقدم وأبرز أسرار الجمال التي تناقلتها النساء الصحراويات والمغربيات منذ قرون لتوحيد لون البشرة وإكسابها إشراقة نضرة ونقية.",
          "تُستخرج النيلة من نبات النيلة الطبيعي المتوطن في الجنوب المغربي والصحراء، وتُحضر بطرق تقليدية متوارثة على شكل كتل صخرية زرقاء ميكرونية ناعمة، وتتميز بخصائصها الفائقة في تنقية وتبييض البشرة دون استخدام أي ملونات صناعية أو صبغات ضارة.",
          "تلقى النيلة إقبالاً واسعاً في أرقى مراكز السبا والحمامات المغربية ومصانع المستحضرات الطبيعية، حيث تُخلط في أقنعة الوجه مع الزبادي أو ماء الورد، أو تُمزج بالصابون البلدي لتقشير الجسم وإزالة السواد من المناطق الحساسة والداكنة."
        ],
        categoryName: "البودرات النباتية والمعدنية",
        origin: "الصحراء المغربية وزاكورة، المغرب",
        extractionMethod: "تحضير نباتي تقليدي وطحن ميكروني ناعم",
        keyBenefits: [
          {
            title: "تفتيح وتوحيد لون البشرة",
            description: "تساعد بفعالية على تفتيح التصبغات، وآثار الكلف، والبقع الناتجة عن أشعة الشمس على الوجه والجسم."
          },
          {
            title: "تنعيم وتفتيح المناطق الداكنة",
            description: "مثالية لتفتيح الركب والأكواع والمفاصل والمناطق المعرضة للاحتكاك والتصبغ."
          },
          {
            title: "تنقية عميقة لمسام الجلد",
            description: "تنظف المسام من الدهون والشوائب وتمنح الجلد ملمساً مخملياً ناعماً عند دمجها بالصابون المغربي."
          },
          {
            title: "أصيلة وطبيعية 100%",
            description: "خالية تماماً من صبغات الأنيلين السامة، والملونات الزرقاء الكيميائية، ومفحوصة مخبرياً لضمان خلوها من الرصاص."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Indigofera Tinctoria Leaf Powder" },
          { label: "المظهر", value: "بودرة مخملية ناعمة جداً بلون أزرق ملكي زاهٍ" },
          { label: "الرائحة", value: "ترابية نباتية خفيفة مميزة" },
          { label: "القابلية للخلط", value: "تنتشر بسهولة في الماء والزيوت والطين وقواعد الصابون" },
          { label: "درجة النقاء", value: "تجميلية نقية 100%، مفحوصة ومطابقة لمعايير السلامة" },
          { label: "مدة الصلاحية", value: "36 شهراً في عبوة جافة ومحكمة بعيداً عن الرطوبة" }
        ],
        applications: [
          "أقنعة تفتيح الوجه بمزجها مع الزبادي الطبيعي أو ماء الورد أو زيت الأركان",
          "مقشرات تبييض الجسم في الحمام المغربي بخلطها مع الصابون الأسود",
          "مكون فعال في كريمات ولوشنات التفتيح وتوحيد اللون",
          "علاج مخصص للبقع والمناطق الخشنة والداكنة في الجسم"
        ],
        packagingOptions: {
          bulk: [
            "براميل ألياف محكمة الإغلاق سعة 5 كغ، 10 كغ، 25 كغ مبطنة بالبولي إيثيلين",
            "أكياس معزولة حرارياً ضد الرطوبة والضوء"
          ],
          privateLabel: [
            "برطمانات تجميلية أو أكياس زيبلوك سعة 50غ، 100غ، 200غ",
            "طباعة ملصقات فاخرة تحمل اسم علامتكم وشعاركم وطريقة الاستخدام",
            "منتجات مركبة جاهزة (صابون بلدي بالنيلة، مقشرات وماسكات جاهزة)"
          ]
        },
        moq: {
          bulk: "5 كغ",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "تقرير فحص خلو المسحوق من المعادن الثقيلة (الرصاص والزرنيخ)",
          "صحيفة بيانات السلامة (MSDS)",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "تصنيع في منشأة معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن بودرة النيلة الزرقاء بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "هل النيلة الزرقاء الأصلية تترك صبغة زرقاء دائمة على الجلد؟",
            answer: "أبداً. النيلة الطبيعية الأصلية تزول تماماً بالماء والصابون بمجرد الشطف وتترك البشرة نضرة ومشرقة، بينما النيلة المغشوشة بالصبغات الكيميائية هي التي تصبغ الجلد وتبقى ملتصقة به."
          },
          {
            question: "كيف تُستخدم بودرة النيلة في الأقنعة؟",
            answer: "النيلة شديدة التركيز، ويكفي مقدار نصف ملعقة صغيرة فقط ممزوجة بملعقتين من الزبادي الطبيعي أو ماء الورد للحصول على ماسك نضارة متكامل للوجه لمدة 15 دقيقة."
          },
          {
            question: "هل توفرون منتجات جاهزة محضرة بالنيلة؟",
            answer: "نعم، نقوم بتصنيع صابون أسود مغربي غني بالنيلة الزرقاء، ومقشرات سكر بالنيلة، وماسكات طين جاهزة معبأة بعلامتكم التجارية الخاصة."
          }
        ]
      }
    }
  },
  {
    slug: "sidr-powder",
    sku: "MC-SDR-008",
    category: "powders",
    image: siteImages.catalog.sidrPowder,
    inciName: "Ziziphus Spina-Christi Leaf Powder",
    casNumber: "91722-69-9",
    hsCode: "1211.90",
    locales: {
      en: {
        title: "Pure Moroccan Sidr Leaf Powder (Jujube)",
        subtitle: "100% natural finely ground Ziziphus leaves for herbal hair washing, scalp detox, and natural volume",
        seoTitle: "Wholesale Sidr Leaf Powder | Moroccan Botanical Hair Cleanser | Morocco Cosmetic",
        seoDescription: "Bulk 100% pure Moroccan sidr leaf powder (Ziziphus spina-christi). Natural saponin-rich botanical wash for delicate scalp care, no-poo, and hair volume.",
        shortDescription: "Finely ground wild sidr leaves rich in plant saponins for gentle no-poo hair washes, scalp detox, and density.",
        longDescription: [
          "Harvested from wild Ziziphus trees (*Ziziphus spina-christi*) that thrive across the sun-drenched foothills of Morocco, Sidr powder has been revered for millennia as an ancestral herbal shampoo and restorative hair treatment.",
          "Naturally rich in gentle plant saponins, conditioning mucilage, and cleansing tannins, Sidr produces a soft lather when whipped with warm water. It cleanses the scalp and hair thoroughly without stripping away essential lipid moisture or washing out natural henna color.",
          "Our Sidr leaves are ethically harvested, shadedried to preserve their active phytochemicals, and triple-sifted into an ultra-fine green powder that rinses easily from hair without gritty residue."
        ],
        categoryName: "Botanical & Mineral Powders",
        origin: "Atlas Foothills & Marrakech, Morocco",
        extractionMethod: "Shade-Dried and Triple-Micronized Wild Leaves",
        keyBenefits: [
          {
            title: "100% Natural Herbal Shampoo ('No-Poo')",
            description: "Cleanses hair and scalp using natural botanical saponins without chemical sulfates, silicones, or parabens."
          },
          {
            title: "Boosts Hair Volume & Density",
            description: "Leaves hair strands feeling thicker, full of bouncy volume, and noticeably stronger from root to tip."
          },
          {
            title: "Calms Scalp Itching & Flakes",
            description: "Soothing mucilage and antiseptic tannins balance sebum, reduce dandruff, and calm irritated scalps."
          },
          {
            title: "Preserves & Locks Natural Hair Color",
            description: "Unlike synthetic shampoos, it will not strip botanical henna, indigo, or natural color pigments."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Ziziphus Spina-Christi Leaf Powder" },
          { label: "Appearance", value: "Fine pale green to olive botanical powder" },
          { label: "Odor", value: "Fresh, herbal, tea-like natural leafy scent" },
          { label: "Active Constituents", value: "Botanical saponins, mucilages, flavonoids, tannins" },
          { label: "Sieve Fineness", value: "Triple-sifted (< 80 microns) for clump-free rinsing" },
          { label: "Shelf Life", value: "24–36 months stored dry in an airtight container" }
        ],
        applications: [
          "Natural sulfate-free herbal hair wash and conditioning masks",
          "Scalp detox treatments for dandruff and excess oiliness",
          "Henna color fixative and volume booster blends",
          "Gentle clarifying facial pastes for sensitive, acne-prone skin"
        ],
        packagingOptions: {
          bulk: [
            "20 kg / 25 kg multi-wall craft bags with inner polyethylene liner",
            "Airtight fiber drums for industrial hair care formulators"
          ],
          privateLabel: [
            "100g / 250g / 500g resealable kraft or matte pouches with degassing valve",
            "Cosmetic amber jars with botanical packaging aesthetics",
            "Custom-branded natural hair treatment box packaging"
          ]
        },
        moq: {
          bulk: "10 kg",
          privateLabel: "100 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Microbiological safety certificate (Salmonella & E. coli free)",
          "Pesticide-free / Organic botanical certification",
          "ONSSA Phytosanitary export approval",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Sidr Leaf Powder.",
        faqs: [
          {
            question: "How does Sidr powder create a lather without soap or chemicals?",
            answer: "Sidr leaves naturally contain high levels of botanical saponins. When mixed vigorously with warm water using a whisk or fork, it whips into a foamy herbal paste that cleanses like a mild shampoo."
          },
          {
            question: "Does Sidr powder change or darken hair color?",
            answer: "No, pure Sidr does not alter your natural hair color. It is completely safe for blonde, gray, bleached, or colored hair, and is especially popular among henna users to clean hair without washing out color."
          },
          {
            question: "How is it rinsed out of hair?",
            answer: "Because our Sidr is triple-sifted into an ultra-fine micronized powder, it rinses out effortlessly under running water without leaving clumps or grit in the hair."
          }
        ]
      },
      fr: {
        title: "Poudre de Feuilles de Sidr Pure du Maroc (Jujubier)",
        subtitle: "Feuilles de jujubier sauvage séchées et micronisées pour un lavage capillaire végétal doux, volume et détox du cuir chevelu",
        seoTitle: "Poudre de Sidr en Gros | Lavage Capillaire Végétal Marocain | Morocco Cosmetic",
        seoDescription: "Achetez de la poudre de sidr du Maroc en vrac. Nettoyant végétal naturel riche en saponines pour le cuir chevelu sensible et soins capillaires sans sulfate.",
        shortDescription: "Poudre de feuilles de jujubier riche en saponines végétales pour laver les cheveux sans shampoing chimique, apaiser le cuir chevelu et donner du volume.",
        longDescription: [
          "Récoltée sur les jujubiers sauvages (*Ziziphus spina-christi*) des contreforts de l'Atlas marocain, la poudre de Sidr est utilisée depuis l'Antiquité comme shampoing végétal naturel et soin fortifiant pour la chevelure.",
          "Naturellement concentrée en saponines végétales lavantes, en mucilages hydratants et en tanins astringents, la poudre de Sidr forme une pâte moussante lorsqu'elle est fouettée avec de l'eau tiède. Elle lave les cheveux et le cuir chevelu en douceur sans décaper les huiles protectrices et sans faire dégorger les colorations au henné.",
          "Nos feuilles sont cueillies avec soin, séchées à l'ombre pour préserver leurs principes actifs et tamisées trois fois pour obtenir une poudre ultra-fine qui se rince facilement sans laisser de grains dans les cheveux."
        ],
        categoryName: "Poudres Botaniques & Minérales",
        origin: "Contreforts de l'Atlas & Marrakech, Maroc",
        extractionMethod: "Feuilles sauvages séchées à l'ombre et triple micronisation",
        keyBenefits: [
          {
            title: "Shampoing Végétal 100% Naturel (No-Poo)",
            description: "Lave en douceur grâce à ses saponines naturelles, sans sulfates, sans silicones et sans tensioactifs irritants."
          },
          {
            title: "Apporte Volume & Épaisseur",
            description: "Gaine les mèches fines, fortifie la fibre capillaire et apporte un volume et une brillance spectaculaires."
          },
          {
            title: "Apaise les Démangeaisons & Pellicules",
            description: "Ses mucilages et tanins purifiants assainissent le cuir chevelu, régulent le sébum et éliminent les pellicules."
          },
          {
            title: "Fixe & Préserve les Colorations au Henné",
            description: "Ne fait pas dégorger les colorations végétales et aide à fixer les pigments de henné et d'indigo."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Ziziphus Spina-Christi Leaf Powder" },
          { label: "Aspect", value: "Poudre fine vert olive à vert tendre" },
          { label: "Odeur", value: "Herbacée fraîche, rappelant le thé vert séché" },
          { label: "Principes actifs", value: "Saponines végétales, mucilages, flavonoïdes, tanins" },
          { label: "Granulométrie", value: "Triple tamisage (< 80 microns) pour un rinçage fluide" },
          { label: "Conservation", value: "24 à 36 mois au sec dans un sachet hermétique" }
        ],
        applications: [
          "Shampoing végétal naturel sans tensioactifs synthétiques",
          "Masques capillaires fortifiants et volumateurs",
          "Soins assainissants pour cuirs chevelus sujets aux pellicules",
          "Pâtes purifiantes pour peaux réactives ou à tendance acnéique"
        ],
        packagingOptions: {
          bulk: [
            "Sacs kraft multicouches de 20 kg et 25 kg avec doublure PE",
            "Fûts industriels étanches pour formulateurs cosmétiques"
          ],
          privateLabel: [
            "Sachets kraft hermétiques zippés de 100g, 250g et 500g",
            "Pots cosmétiques avec design éco-responsable",
            "Packs de soins capillaires naturels sur mesure sous votre marque"
          ]
        },
        moq: {
          bulk: "10 kg",
          privateLabel: "100 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) par lot",
          "Analyses microbiologiques garanties sans salmonelle ni E. coli",
          "Attestation botanique 100% pure sans pesticides",
          "Certificat phytosanitaire ONSSA pour l'export",
          "Atelier de conditionnement certifié ISO 22716 BPF"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur la poudre de sidr en gros ou marque blanche.",
        faqs: [
          {
            question: "Comment le sidr mousse-t-il sans agent moussant chimique ?",
            answer: "Les feuilles de sidr contiennent naturellement des saponines végétales. Lorsqu'on mélange vigoureusement la poudre à de l'eau tiède avec un fouet, elle forme une émulsion végétale onctueuse qui lave les cheveux comme un shampoing doux."
          },
          {
            question: "Le sidr modifie-t-il la couleur des cheveux clairs ?",
            answer: "Non, la poudre de sidr pure ne colore pas et ne fonce pas les cheveux. Elle convient parfaitement aux cheveux blonds, blancs ou colorés."
          },
          {
            question: "Est-elle difficile à rincer ?",
            answer: "Notre poudre bénéficie d'un triple tamisage ultra-fin, ce qui lui permet de se rincer très facilement à l'eau courante sans laisser de grains dans la chevelure."
          }
        ]
      },
      ar: {
        title: "بودرة ورق السدر المغربي النقي",
        subtitle: "مسحوق أوراق السدر البرية المجففة والمطحونة بعناية لغسل الشعر طبيعياً وتكثيفه وتطهير الفروة",
        seoTitle: "بودرة السدر للشعر بالجملة | ورق سدر مغربي نقي 100% | Morocco Cosmetic",
        seoDescription: "توريد بودرة السدر المغربي النقي بالجملة. بديل طبيعي للشامبو غني بالصابونين النباتي لتكثيف الشعر وعلاج فروة الرأس الحساسة.",
        shortDescription: "بودرة أوراق سدر برية مطحونة بعناية وغنية بالصابونين النباتي لغسل الشعر كبديل طبيعي للشامبو وتكثيفه وتطهير الفروة.",
        longDescription: [
          "يُجنى ورق السدر البري المغربي من أشجار السدر (*Ziziphus spina-christi*) النامية في سفوح جبال الأطلس والمناطق المغربية الجافة، واستُخدم منذ آلاف السنين كشامبو نباتي طبيعي وعلاج لتقوية بصيلات الشعر وتكثيفه.",
          "تتميز أوراق السدر باحتوائها على صابونين نباتي طبيعي ومواد هلامية مرطبة، فعند خفق بودرة السدر مع الماء الدافئ تتكون رغوة لطيفة تنظف الشعر والفروة تماماً دون إزالة الزيوت الحامية للرأس ودون سحب لون الحناء أو صبغات الشعر الطبيعية.",
          "تُجفف أوراقنا في الظل للحفاظ على كامل العناصر الفعالة، ثم تُطحن وتُنخل ثلاث مرات لنحصل على مسحوق حريري فائق النعومة ينشطف بسهولة تامة من الشعر دون أن يترك أي بقايا أو شوائب عالقة."
        ],
        categoryName: "البودرات النباتية والمعدنية",
        origin: "سفوح جبال الأطلس ومراكش، المغرب",
        extractionMethod: "تجفيف في الظل وطحن ميكروني ثلاثي النخل",
        keyBenefits: [
          {
            title: "شامبو نباتي طبيعي 100% (بديل الشامبو)",
            description: "ينظف الشعر والفروة برغوة صابونين نباتية لطيفة دون أي كبريتات أو بارابين أو كيماويات صناعية."
          },
          {
            title: "تكثيف الشعر وإعطاؤه حجماً وحيوية",
            description: "يغلف خصلات الشعر الرقيقة ويمنحها كثافة وقوة ولمعاناً صحياً جذاباً من الجذور حتى الأطراف."
          },
          {
            title: "تهدئة حكة الفروة ومحاربة القشرة",
            description: "المواد الهلامية والمنظفة في السدر تنظم إفراز الدهون وتزيل القشرة وتهدئ التهابات الفروة."
          },
          {
            title: "تثبيت لون الحناء والصبغات الطبيعية",
            description: "على عكس الشامبوهات الكيميائية، لا يسحب السدر صبغة الحناء أو الوسمة بل يساعد على تثبيتها."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Ziziphus Spina-Christi Leaf Powder" },
          { label: "المظهر", value: "بودرة ناعمة جداً بلون أخضر زيتوني فاتح" },
          { label: "الرائحة", value: "عشبية طبيعية زكية تشبه رائحة أوراق الشاي" },
          { label: "المكونات الفعالة", value: "صابونين نباتي، مواد هلامية، فلافونويدات، تانينات" },
          { label: "درجة النخل", value: "منخولة ثلاثياً (< 80 ميكرون) لشطف سهل وسريع" },
          { label: "مدة الصلاحية", value: "24 إلى 36 شهراً في عبوة جافة ومحكمة" }
        ],
        applications: [
          "شامبو نباتي طبيعي خالٍ من السلفات لغسل الشعر الحساس",
          "ماسكات وخلطات تكثيف الشعر وتقوية البصيلات الضعيفة",
          "علاج الفروة الدهنية وإزالة القشرة والحكة",
          "أقنعة طينية نباتية لتنقية وتصفية الوجه والبشرة المعرضة للحبوب"
        ],
        packagingOptions: {
          bulk: [
            "أكياس كرافت صناعية متعددة الطبقات سعة 20 كغ و25 كغ مع بطانة عازلة",
            "براميل ألياف محكمة الإغلاق للمصانع والورش التجميلية"
          ],
          privateLabel: [
            "أكياس كرافت زيبلوك سعة 100غ، 250غ، 500غ بتصميم نباتي جذاب",
            "برطمانات تجميلية فاخرة تحمل هوية علامتكم التجارية",
            "أطقم عناية طبيعية بالشعر متكاملة بعلامتكم الخاصة"
          ]
        },
        moq: {
          bulk: "10 كغ",
          privateLabel: "100 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "فحص النقاء الميكروبيولوجي لضمان خلوه من أي ملوثات",
          "شهادة نباتية طبيعية خالية من المبيدات",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "منشأة معتمدة وفق معايير ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن بودرة السدر للشعر بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "كيف يُعطي السدر رغوة دون مواد كيميائية؟",
            answer: "أوراق السدر غنية بمركبات الصابونين النباتية الطبيعية، وعند خفق البودرة مع ماء دافئ بمضرب يدوي تتشكل رغوة لطيفة تنظف الشعر تماماً مثل الشامبو."
          },
          {
            question: "هل يغير السدر لون الشعر الفاتح أو المصبوغ؟",
            answer: "لا، السدر الطبيعي الصافي لا يصبغ الشعر ولا يغير لونه أبداً، وهو آمن تماماً للشعر الأشقر أو الأبيض أو المصبوغ."
          },
          {
            question: "هل يصعب شطفه من الشعر؟",
            answer: "بودرة السدر لدينا منخولة ثلاث مرات بحبيبات دقيقة جداً تذوب في الماء كالكريمة، وتنشطف تحت الدش بسهولة دون أن تترك أي حبيبات في الشعر."
          }
        ]
      }
    }
  },
  {
    slug: "aker-fassi",
    sku: "MC-AKF-009",
    category: "powders",
    image: siteImages.catalog.akerFassi,
    inciName: "Papaver Rhoeas Flower & Punica Granatum Bark Powder",
    casNumber: "84696-43-5",
    hsCode: "3203.00",
    locales: {
      en: {
        title: "Authentic Moroccan Aker Fassi Powder",
        subtitle: "Ancestral terracotta-baked red poppy and pomegranate pigment for natural lips, cheek blush, and glowing masks",
        seoTitle: "Wholesale Aker Fassi Powder | Moroccan Poppy & Pomegranate Pigment | Morocco Cosmetic",
        seoDescription: "Wholesale authentic Moroccan Aker Fassi powder made from poppy petals and pomegranate rind. Natural vibrant red pigment for lip tints, blush, and luxury masks.",
        shortDescription: "Ancestral Moroccan red poppy and pomegranate pigment for natural lip stains, cheek blush, and brightening clay masks.",
        longDescription: [
          "Originating in the imperial artisan workshops of Fes and Marrakech, Aker Fassi (also known as 'Gazelle's Blood' or *Dam El Ghazal*) is an iconic North African beauty cosmetic used by Berber and Moroccan women since medieval times.",
          "It is crafted by blending sun-dried petals of wild red poppies (*Papaver rhoeas*) with dried pomegranate bark (*Punica granatum*). Traditionally baked onto porous unglazed terracotta clay pots, it yields an extraordinarily rich, shimmering crimson-gold powder loaded with natural antioxidants and vibrant anthocyanin pigments.",
          "Highly sought after for clean beauty and natural decorative cosmetics, Aker Fassi provides a buildable rosy flush for cheeks, a kiss-proof water tint for lips, and a radiant pink glow when blended into Moroccan Ghassoul or rose water face masks."
        ],
        categoryName: "Botanical & Mineral Powders",
        origin: "Fes & Marrakech, Morocco",
        extractionMethod: "Traditional Poppy & Pomegranate Sun-Baking",
        keyBenefits: [
          {
            title: "100% Natural Red Lip & Cheek Stain",
            description: "Creates an authentic, long-lasting dewy rose-red tint on lips and cheeks without synthetic color additives."
          },
          {
            title: "Rich in Antioxidants & Flavonoids",
            description: "Packed with poppy anthocyanins and pomegranate polyphenols that soothe skin and fight oxidative stress."
          },
          {
            title: "Infuses Radiant Glow into Face Masks",
            description: "A tiny pinch blended into Ghassoul clay or yogurt revitalizes tired, sallow skin with a youthful glow."
          },
          {
            title: "Traditional Terracotta Presentation",
            description: "Available as pure loose micronized powder, or coated onto authentic artisanal terracotta clay cups."
          }
        ],
        specifications: [
          { label: "Botanical / INCI Name", value: "Papaver Rhoeas Flower Powder, Punica Granatum Bark Extract" },
          { label: "Appearance", value: "Vibrant crimson-red powder with subtle golden metallic shimmer" },
          { label: "Odor", value: "Faint floral, characteristic sweet-tart botanical aroma" },
          { label: "Color Index", value: "Natural Anthocyanin & Tannin Pigments" },
          { label: "Formats Available", value: "Pure loose micronized powder or baked on clay pots" },
          { label: "Shelf Life", value: "36 months stored in dry, dark conditions" }
        ],
        applications: [
          "Natural lip and cheek tints (water-based or oil-based)",
          "Radiance-boosting facial masks blended with Ghassoul or Rose Water",
          "Luxury body brightening treatments in traditional hammams",
          "Color cosmetics, organic tinted lip balms, and botanical makeup"
        ],
        packagingOptions: {
          bulk: [
            "1 kg / 5 kg / 10 kg sealed food-grade containers with desiccant",
            "Wholesale boxes of handcrafted Aker Fassi terracotta clay discs/pots"
          ],
          privateLabel: [
            "5g / 10g / 25g luxury mini glass cosmetic jars with gold lids",
            "Terracotta clay cups with your branded linen pouch or outer box",
            "Pre-formulated tinted lip oils and Aker Fassi face masks ready for retail"
          ]
        },
        moq: {
          bulk: "1 kg",
          privateLabel: "50 Units"
        },
        qualityCertificates: [
          "Certificate of Analysis (COA) per batch",
          "Heavy metals test report (Lead, Cadmium, Arsenic free)",
          "100% Natural Botanical Certification (Azo dye free)",
          "ONSSA export certificate",
          "ISO 22716 GMP Certified Facility"
        ],
        waMessage: "Hello Morocco Cosmetic! I am interested in wholesale or private label Aker Fassi Powder.",
        faqs: [
          {
            question: "How do you distinguish authentic Aker Fassi from synthetic red dyes?",
            answer: "Authentic Aker Fassi made from poppy and pomegranate has a characteristic subtle golden-bronze shimmer when dry, and turns vibrant red when hydrated. It contains zero artificial red dyes (like Red 40 or Carmine) and is completely safe and food-grade."
          },
          {
            question: "How is the terracotta clay cup version used?",
            answer: "Simply wet a finger, makeup brush, or cotton swab with a drop of water, argan oil, or rose water, rub the surface of the terracotta cup to activate the pigment, and apply directly to lips or cheeks."
          },
          {
            question: "Can it be incorporated into commercial cosmetic formulations?",
            answer: "Yes, our micronized loose powder mixes seamlessly into oil phases, balms, creams, and water-based tints for natural and vegan beauty lines."
          }
        ]
      },
      fr: {
        title: "Poudre d'Aker Fassi Authentique du Maroc",
        subtitle: "Pigment ancestral de coquelicot et grenade cuit à la terre cuite pour lèvres, joues et masques éclat",
        seoTitle: "Poudre d'Aker Fassi en Gros | Pigment Coquelicot & Grenade | Morocco Cosmetic",
        seoDescription: "Grossiste poudre d'aker fassi marocaine authentique. Pigment rouge 100% naturel à base de coquelicot et grenade pour maquillage, rouges à lèvres et masques.",
        shortDescription: "Pigment ancestral de coquelicot rouge et grenade pour teinter naturellement lèvres et joues et illuminer les masques visage.",
        longDescription: [
          "Issu du savoir-faire traditionnel des artisans de Fès et Marrakech, l'Aker Fassi (également appelé « Sang de Gazelle » ou *Dam El Ghazal*) est le maquillage naturel emblématique des femmes berbères depuis des siècles.",
          "Il est préparé à partir d'un savant mélange de pétales de coquelicot séchés au soleil (*Papaver rhoeas*) et d'écorce de grenade (*Punica granatum*). Cuit traditionnellement sur des poteries en terre cuite poreuses, il donne une poudre pourpre aux reflets d'or d'une intensité chromatique fascinante.",
          "Plébiscité par les adeptes de la beauté propre (Clean Beauty), l'Aker Fassi colore les lèvres d'un rouge rosé longue tenue, rehausse les pommettes d'un éclat bonne mine et s'ajoute au ghassoul ou à l'eau de rose pour révéler la clarté du teint."
        ],
        categoryName: "Poudres Botaniques & Minérales",
        origin: "Fès & Marrakech, Maroc",
        extractionMethod: "Cuisson traditionnelle au soleil de pétales de coquelicot et grenade",
        keyBenefits: [
          {
            title: "Rouge à Lèvres & Blush 100% Végétal",
            description: "Offre une couleur rose grenat naturelle et durable sur les lèvres et les joues sans aucun colorant synthétique."
          },
          {
            title: "Riche en Antioxydants Protecteurs",
            description: "Les anthocyanes de coquelicot et polyphénols de grenade apaisent la peau et luttent contre le stress oxydatif."
          },
          {
            title: "Éclat Magistral dans les Masques Visage",
            description: "Une pointe de couteau mélangée à du ghassoul ou du yaourt donne un teint rosé lumineux et éclatant de santé."
          },
          {
            title: "Présentation Traditionnelle en Terre Cuite",
            description: "Disponible en poudre pure micronisée ou incrusté sur de véritables coupelles artisanales en terre cuite."
          }
        ],
        specifications: [
          { label: "Nom INCI", value: "Papaver Rhoeas Flower Powder, Punica Granatum Bark Extract" },
          { label: "Aspect", value: "Poudre rouge carmin vif aux reflets dorés métallisés" },
          { label: "Odeur", value: "Subtilement fleurie et fruitée" },
          { label: "Colorants", value: "Anthocyanes et tanins 100% végétaux naturels" },
          { label: "Formes", value: "Poudre micronisée libre ou coupelles en terre cuite" },
          { label: "Conservation", value: "36 mois dans un pot bien fermé à l'abri de l'humidité" }
        ],
        applications: [
          "Encres à lèvres et fards à joues naturels (phases aqueuses ou huileuses)",
          "Masques bonne mine visage mélangés à l'eau de rose ou au ghassoul",
          "Soins illuminants corporels au hammam",
          "Formulations de baumes à lèvres teintés et maquillage bio"
        ],
        packagingOptions: {
          bulk: [
            "Boîtes hermétiques alimentaires de 1 kg, 5 kg et 10 kg avec déshydratant",
            "Cartons de coupelles artisanales en terre cuite prêtes à l'emploi"
          ],
          privateLabel: [
            "Petits pots cosmétiques de 5g, 10g et 25g avec couvercle doré de luxe",
            "Coupelles en terre cuite dans pochons en lin avec votre logo",
            "Baumes à lèvres et huiles teintées formulés et packagés à votre marque"
          ]
        },
        moq: {
          bulk: "1 kg",
          privateLabel: "50 Unités"
        },
        qualityCertificates: [
          "Certificat d'Analyse (COA) par lot",
          "Test d'absence de métaux lourds (Plomb, Cadmium, Mercure)",
          "Attestation 100% végétal sans colorants azoïques de synthèse",
          "Agrément sanitaire d'exportation ONSSA",
          "Laboratoire certifié ISO 22716 BPF"
        ],
        waMessage: "Bonjour Morocco Cosmetic ! Je souhaite des informations sur la poudre d'aker fassi en gros ou marque blanche.",
        faqs: [
          {
            question: "Comment reconnaître le véritable Aker Fassi des imitations synthétiques ?",
            answer: "Le véritable Aker Fassi présente un reflet mordoré et scintillant caractéristique lorsqu'il est sec, et vire au rouge éclatant dès qu'il est humidifié. Il ne contient aucun colorant chimique (comme le Red 40 ou le carmin) et est 100% végétal et comestible."
          },
          {
            question: "Comment s'utilise la coupelle en terre cuite ?",
            answer: "Il suffit d'humidifier son doigt ou un pinceau avec une goutte d'eau, d'eau de rose ou d'huile d'argan, de frotter la surface de la terre cuite pour prélever la couleur, puis d'appliquer sur les lèvres ou les pommettes."
          },
          {
            question: "Peut-on l'intégrer dans une formulation industrielle ?",
            answer: "Oui, notre poudre micronisée pure se disperse parfaitement dans les émulsions, les baumes à lèvres, les huiles et les gels pour créer des gammes de maquillage naturel."
          }
        ]
      },
      ar: {
        title: "بودرة عكر فاسي (دم الغزال) الأصيل",
        subtitle: "صبغة تقليدية فاخرة من بتلات شقائق النعمان وقشور الرمان المخبوزة في الفخار لتوريد الشفاه والخدود وأقنعة النضارة",
        seoTitle: "بودرة عكر فاسي بالجملة | دم الغزال المغربي الأصلي | Morocco Cosmetic",
        seoDescription: "توريد بودرة عكر فاسي (دم الغزال) المغربي الأصلي بالجملة. صبغة طبيعية غنية بمضادات الأكسدة للموردات وأقنعة الإشراق وحمرة الشفاه والخدود.",
        shortDescription: "صبغة مغربية تقليدية من شقائق النعمان والرمان لتوريد الشفاه والخدود طبيعياً وإعطاء إشراقة وردية لأقنعة الوجه.",
        longDescription: [
          "يُعد العكر الفاسي (المعروف تاريخياً بـ«دم الغزال») أحد أقدم وأشهر أسرار الزينة والتجميل المغربية الأصيلة التي توارثتها النساء منذ عهود طويلة في فاس ومراكش.",
          "يُصنع بمزيج حرفي فريد يجمع بين بتلات أزهار شقائق النعمان البرية المجففة تحت أشعة الشمس وقشور الرمان المجففة. وتُخبز تقليدياً على أوانٍ فخارية طينية لتنتج بودرة بلون قرمزي غني ببريق ذهبي مبهر ومفعمة بمضادات الأكسدة الطبيعية ومادة الأنثوسيانين.",
          "يحظى العكر الفاسي بإقبال عالمي متزايد في منتجات التجميل النظيفة (Clean Beauty)، حيث يُستخدم لتوريد الشفاه والخدود بلون وردي طبيعي ثابت لا يزول بسهولة، كما يُضاف للغاسول المغربي أو ماء الورد لمنح الوجه إشراقة وردية حيوية مذهلة."
        ],
        categoryName: "البودرات النباتية والمعدنية",
        origin: "فاس ومراكش، المغرب",
        extractionMethod: "تحضير تقليدي لبتلات شقائق النعمان والرمان مع التحميص الفخاري",
        keyBenefits: [
          {
            title: "مورد طبيعي 100% للشفاه والخدود",
            description: "يمنح الشفاه والوجنتين لوناً وردياً قرمزياً ثابتاً وجذاباً يدوم طويلاً دون أي صبغات كيميائية."
          },
          {
            title: "غني بمضادات الأكسدة والبوليفينول",
            description: "مستخلص من شقائق النعمان وقشور الرمان الغنية بالأنثوسيانين التي تحمي البشرة وتهدئها."
          },
          {
            title: "إشراقة وردية فورية لأقنعة الوجه",
            description: "ذرة صغيرة تُمزج مع طين الغاسول أو الزبادي وماء الورد تعيد الحيوية والنضارة الفائقة للبشرة الباهتة."
          },
          {
            title: "شكل الفخار التقليدي أو بودرة نقية",
            description: "متوفر إما كمسحوق ناعم ميكروني نقي، أو مطلي على أوانٍ فخارية طينية أصلية للاستخدام المباشر."
          }
        ],
        specifications: [
          { label: "الاسم العلمي / INCI", value: "Papaver Rhoeas Flower Powder, Punica Granatum Bark Extract" },
          { label: "المظهر", value: "بودرة حمراء قرمزية براقة مع لمعة ذهبية ناعمة" },
          { label: "الرائحة", value: "عشبية زهرية لطيفة وخفيفة" },
          { label: "طبيعة اللون", value: "صبغات نباتية طبيعية من الأنثوسيانين والتانين" },
          { label: "الأشكال المتوفرة", value: "بودرة ناعمة منخولة أو فخار تقليدي" },
          { label: "مدة الصلاحية", value: "36 شهراً في مكان جاف ومظلم" }
        ],
        applications: [
          "مورد طبيعي للشفاه والخدود (تنت مائي أو زيتي)",
          "أقنعة النضارة الفورية للبشرة ممزوجاً بماء الورد أو الغاسول",
          "خلطات الحمام المغربي لتفتيح وتوريد ملمس الجسم",
          "مكون تلوين طبيعي في صناعة مرطبات الشفاه ومستحضرات التجميل العضوية"
        ],
        packagingOptions: {
          bulk: [
            "علب غذائية محكمة الإغلاق سعة 1 كغ، 5 كغ، 10 كغ مزودة بحبيبات امتصاص الرطوبة",
            "صناديق جملة للأواني الفخارية التقليدية المطلية بالعكر الفاسي"
          ],
          privateLabel: [
            "برطمانات زجاجية صغيرة فاخرة سعة 5غ، 10غ، 25غ بأغطية ذهبية",
            "فخاريات عكر فاسي داخل أكياس كتان أنيقة مطبوعة بشعاركم",
            "زيوت وموردات شفاه جاهزة ومعبأة خصيصاً لعلامتكم التجارية"
          ]
        },
        moq: {
          bulk: "1 كغ",
          privateLabel: "50 عبوة"
        },
        qualityCertificates: [
          "شهادة تحليل مخبري (COA) لكل دفعة",
          "فحص خلو المسحوق من المعادن الثقيلة والملونات الصناعية",
          "شهادة نباتية طبيعية 100% خالية من صبغات الآزو والقطران",
          "شهادة السلامة والتصدير من مكتب ONSSA",
          "منشأة معتمدة وفق ISO 22716 GMP"
        ],
        waMessage: "مرحباً موروكو كوزمتيك! أود الاستفسار عن بودرة عكر فاسي (دم الغزال) بالجملة أو بالعلامة الخاصة.",
        faqs: [
          {
            question: "كيف يمكن تمييز العكر الفاسي الأصلي عن الملونات الكيميائية المغشوشة؟",
            answer: "العكر الفاسي الأصلي يظهر فيه بريق ذهبي خفيف عندما يكون جافاً، ويتحول إلى لون قرمزي رائع عند ملامسة الماء، ولا يحتوي على صبغات صناعية أو ألوان ضارة بل هو مستخلص نباتي 100%."
          },
          {
            question: "كيف تُستخدم قطقة الفخار المطلية بالعكر الفاسي؟",
            answer: "يتم تبليل الإصبع أو فرشاة المكياج بقطرة ماء أو ماء ورد أو زيت أركان، ومسح سطح الفخار للحصول على اللون وتطبيقه مباشرة على الشفاه أو الخدود."
          },
          {
            question: "هل يمكن استخدامه في التصنيع التجميلي؟",
            answer: "نعم، البودرة الميكرونية النقية قابلة للدمج بسلاسة في تصنيع مرطبات الشفاه الطبيعية والموردات والسيرومات وأقنعة الطين."
          }
        ]
      }
    }
  }
];

export function getAllProducts(locale: SiteLocale = "en"): Array<ProductCatalogItem & ProductLocalizedData> {
  return PRODUCTS_CATALOG.map((item) => ({
    ...item,
    ...item.locales[locale],
  }));
}

export function getAllProductSlugs(): string[] {
  return PRODUCTS_CATALOG.map((item) => item.slug);
}

export function getProductBySlug(
  slug: string,
  locale: SiteLocale = "en"
): (ProductCatalogItem & ProductLocalizedData) | null {
  const item = PRODUCTS_CATALOG.find((p) => p.slug === slug);
  if (!item) return null;
  return {
    ...item,
    ...item.locales[locale],
  };
}

export function getRelatedProducts(
  currentSlug: string,
  locale: SiteLocale = "en",
  count: number = 3
): Array<ProductCatalogItem & ProductLocalizedData> {
  const all = getAllProducts(locale);
  return all.filter((p) => p.slug !== currentSlug).slice(0, count);
}

