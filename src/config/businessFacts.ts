export type Certification = {
  name: string;
  number: string;
  scope: string;
  url: string | null;
};

export type TeamMember = {
  name: string;
  role: string;
  photo: string | null;
};

export type FacilityPhoto = {
  file: string;
  caption: string;
  alt: string;
};

export type OnSiteProcess = {
  title: string;
  text: string;
};

/** Fill in when you have verified figures — null hides dependent copy. */
export const businessFacts = {
  moq: null as string | null,
  exportCountryCount: null as number | null,
  carrierOils: null as string | null,
  essentialOils: null as string | null,
  sellsAkerFassi: null as boolean | null,
  coaProducts: null as string | null,
  certifications: [] as Certification[],
  shippingPortsIncoterms: null as string | null,
  factoryFullAddress: null as string | null,
  moqByCategory: null as string | null,
  samplePolicy: null as string | null,
  catalogResponseHours: null as number | null,
  foundingYear: null as number | null,
  founderName: null as string | null,
  founderRole: null as string | null,
  companyStory: null as string | null,
  teamSize: null as number | null,
  countriesServed: null as number | null,
  exportRegions: null as string[] | null,
  openingHours: null as string | null,
  onSiteProcesses: [
    {
      title: "Argan oil pressing",
      text: "Argan kernels pressed in our facility.",
    },
    {
      title: "Black soap making",
      text: "Traditional Moroccan black soap (savon beldi) made on site.",
    },
    {
      title: "Filling",
      text: "Bulk and retail formats filled by our team.",
    },
    {
      title: "Labelling",
      text: "Products labelled with our brand or yours.",
    },
  ] as OnSiteProcess[],
  sourcedProducts: [
    "prickly pear seed oil",
    "ghassoul clay",
    "rose water",
    "orange blossom water",
    "blue nila powder",
    "sidr powder",
    "carrier oils",
    "essential oils",
  ] as string[],
  teamMembers: null as TeamMember[] | null,
  facilityPhotos: [] as FacilityPhoto[],
  companyRegistration: null as string | null,
  /** Per service tier; null → "On request" in comparison table. */
  privateLabelMoq: {
    whiteLabel: null as string | null,
    privateLabel: null as string | null,
    oem: null as string | null,
  },
  leadTimeWeeks: null as string | null,
  packagingSizes: {
    bottles: null as string | null,
    jars: null as string | null,
    pouches: null as string | null,
    boxes: null as string | null,
  },
  designService: null as string | null,
  ownPackagingAccepted: null as string | null,
  customFormulaDetails: null as string | null,
  oilBlends: null as string | null,
} as const;

