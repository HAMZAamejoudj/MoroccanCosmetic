"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslations } from "@/i18n/useTranslations";
import { siteConfig } from "@/config/siteConfig";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  ArrowRight,
  Send,
  MessageSquare,
} from "lucide-react";

const DEFAULT_INQUIRY_VALUE = "Wholesale Supply";

export default function ContactPageShell() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: DEFAULT_INQUIRY_VALUE,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        inquiryType: DEFAULT_INQUIRY_VALUE,
        message: "",
      });
    }, 1200);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="relative min-h-screen organic-texture bg-background text-foreground transition-colors duration-300">
      <Header />

      <main className="pt-20 md:pt-24">
        <section className="relative py-16 md:py-24 border-b border-border bg-blush/10 overflow-hidden">
          <div className="container-wide px-4 md:px-8 relative z-10 text-center max-w-4xl mx-auto">
            <span className="text-sm font-semibold uppercase tracking-wider text-rose">
              {t.heroSub}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-6 text-foreground leading-tight">
              {t.heroTitle}
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl mx-auto">
              {t.heroDesc}
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-wide px-4 md:px-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <span className="text-sm font-semibold uppercase tracking-wider text-rose">
                    {t.infoSub}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-serif font-semibold mt-2 mb-4">
                    {t.infoTitle}
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground font-light leading-relaxed mb-6">
                    {t.infoP1}
                  </p>
                  <p className="text-sm font-medium text-rose">{t.infoTagline}</p>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/212641517831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-card border border-border hover:border-rose/30 shadow-xs flex gap-4 items-center transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-rose/10 text-rose group-hover:bg-rose group-hover:text-white transition-colors duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xxs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t.channelWhatsAppLabel}
                      </span>
                      <span className="text-base font-semibold text-foreground">
                        +212 641-517831
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="p-5 rounded-2xl bg-card border border-border hover:border-rose/30 shadow-xs flex gap-4 items-center transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-full bg-rose/10 text-rose group-hover:bg-rose group-hover:text-white transition-colors duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xxs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t.channelEmailLabel}
                      </span>
                      <span className="text-base font-semibold text-foreground">
                        {siteConfig.email}
                      </span>
                    </div>
                  </a>

                  <div className="p-5 rounded-2xl bg-card border border-border flex gap-4 items-center">
                    <div className="p-3 rounded-full bg-rose/10 text-rose">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xxs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t.channelFacilityLabel}
                      </span>
                      <span className="text-base font-semibold text-foreground">
                        {t.channelFacilityValue}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-card border border-border flex gap-4 items-center">
                    <div className="p-3 rounded-full bg-rose/10 text-rose">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xxs font-semibold text-muted-foreground uppercase tracking-wider">
                        {t.channelHoursLabel}
                      </span>
                      <span className="text-base font-semibold text-foreground">
                        {t.channelHoursValue}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="p-8 rounded-3xl bg-card border border-border shadow-lg relative overflow-hidden">
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-rose/5 blur-3xl pointer-events-none" />

                  {submitted ? (
                    <div className="py-12 px-4 text-center flex flex-col items-center animate-fade-in">
                      <div className="w-16 h-16 rounded-full bg-rose/10 text-rose flex items-center justify-center mb-6">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-serif font-semibold mb-3">
                        {t.successTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground font-light max-w-md mx-auto mb-8">
                        {t.successDesc}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 h-11 px-6 rounded-md bg-rose text-white hover:bg-rose-dark font-medium transition-colors"
                      >
                        {t.successAnother}
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-serif font-semibold mb-2">
                        {t.formTitle}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 font-light">
                        {t.formDesc}
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                              {t.labelName}
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                              placeholder={t.placeholderName}
                              className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                              {t.labelEmail}
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              placeholder={t.placeholderEmail}
                              className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                              {t.labelCompany}
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleInputChange}
                              placeholder={t.placeholderCompany}
                              className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                              {t.labelPhone}
                            </label>
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder={t.placeholderPhone}
                              className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                            {t.labelInquiry}
                          </label>
                          <select
                            name="inquiryType"
                            value={formData.inquiryType}
                            onChange={handleInputChange}
                            className="w-full h-11 px-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors cursor-pointer"
                          >
                            {t.inquiryTypes.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-foreground/80 mb-2 uppercase tracking-wider">
                            {t.labelMessage}
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            placeholder={t.placeholderMessage}
                            className="w-full p-4 rounded-lg bg-background border border-border focus:border-rose/50 outline-none text-sm transition-colors resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full h-12 rounded-lg bg-rose text-white hover:bg-rose-dark font-semibold shadow-md hover:shadow-lg hover:shadow-rose/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <span>{t.submitLoading}</span>
                          ) : (
                            <>
                              <span>{t.submitButton}</span>
                              <Send className="w-4 h-4 rtl:rotate-180" />
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>

                <div className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex gap-3.5 items-center">
                    <div className="p-3 rounded-full bg-emerald-500/15 text-emerald-600">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-sm font-semibold text-foreground">
                        {t.whatsappTitle}
                      </h4>
                      <p className="text-xs text-muted-foreground font-light">
                        {t.whatsappDesc}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/212641517831?text=Hello,%20I'm%20visiting%20your%20website%20and%20need%20a%20wholesale/private%20label%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs transition-colors shrink-0"
                  >
                    {t.whatsappButton}
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
