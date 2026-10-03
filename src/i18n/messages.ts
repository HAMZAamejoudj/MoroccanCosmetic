import type { SiteLocale } from "@/i18n/locale";
import enAbout from "@/i18n/locales/en/about.json";
import enBenefits from "@/i18n/locales/en/benefits.json";
import enBlog from "@/i18n/locales/en/blog.json";
import enContact from "@/i18n/locales/en/contact.json";
import enHome from "@/i18n/locales/en/home.json";
import enHomePage from "@/i18n/locales/en/homePage.json";
import enPrivateLabel from "@/i18n/locales/en/privateLabel.json";
import enProducts from "@/i18n/locales/en/products.json";
import enPrivateLabelPage from "@/i18n/locales/en/privateLabelPage.json";
import frAbout from "@/i18n/locales/fr/about.json";
import frBenefits from "@/i18n/locales/fr/benefits.json";
import frBlog from "@/i18n/locales/fr/blog.json";
import frContact from "@/i18n/locales/fr/contact.json";
import frHome from "@/i18n/locales/fr/home.json";
import frHomePage from "@/i18n/locales/fr/homePage.json";
import frPrivateLabel from "@/i18n/locales/fr/privateLabel.json";
import frProducts from "@/i18n/locales/fr/products.json";
import frPrivateLabelPage from "@/i18n/locales/fr/privateLabelPage.json";
import arAbout from "@/i18n/locales/ar/about.json";
import arBenefits from "@/i18n/locales/ar/benefits.json";
import arBlog from "@/i18n/locales/ar/blog.json";
import arContact from "@/i18n/locales/ar/contact.json";
import arHome from "@/i18n/locales/ar/home.json";
import arHomePage from "@/i18n/locales/ar/homePage.json";
import arPrivateLabel from "@/i18n/locales/ar/privateLabel.json";
import arProducts from "@/i18n/locales/ar/products.json";
import arPrivateLabelPage from "@/i18n/locales/ar/privateLabelPage.json";

export const messages = {
  en: { home: enHome, homePage: enHomePage, about: enAbout, benefits: enBenefits, privateLabel: enPrivateLabel, privateLabelPage: enPrivateLabelPage, products: enProducts, blog: enBlog, contact: enContact },
  fr: { home: frHome, homePage: frHomePage, about: frAbout, benefits: frBenefits, privateLabel: frPrivateLabel, privateLabelPage: frPrivateLabelPage, products: frProducts, blog: frBlog, contact: frContact },
  ar: { home: arHome, homePage: arHomePage, about: arAbout, benefits: arBenefits, privateLabel: arPrivateLabel, privateLabelPage: arPrivateLabelPage, products: arProducts, blog: arBlog, contact: arContact },
} as const satisfies Record<
  SiteLocale,
  {
    home: typeof enHome;
    homePage: typeof enHomePage;
    about: typeof enAbout;
    benefits: typeof enBenefits;
    privateLabel: typeof enPrivateLabel;
    privateLabelPage: typeof enPrivateLabelPage;
    products: typeof enProducts;
    blog: typeof enBlog;
    contact: typeof enContact;
  }
>;

export type TranslationNamespace = keyof (typeof messages)["en"];
