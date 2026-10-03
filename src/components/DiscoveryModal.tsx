"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { X, Sparkles, ArrowRight } from "lucide-react";

interface DiscoveryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DiscoveryModal({ isOpen, onClose }: DiscoveryModalProps) {
  const [shouldRender, setShouldRender] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Slight delay to trigger animation
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
      const timer = setTimeout(() => setShouldRender(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        animate ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
      }}
      onClick={onClose}
    >
      <div
        className={`relative bg-card rounded-[2.5rem] shadow-2xl max-w-md w-full overflow-hidden transition-all duration-500 ${
          animate ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
        style={{ border: "1px solid hsl(var(--border))" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 rounded-full transition-all duration-200 text-muted-foreground hover:text-rose hover:bg-rose/10 cursor-pointer"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Image Banner */}
        <div className="relative h-48 bg-gradient-to-br from-blush to-blush-deep overflow-hidden">
          <Image
            src="/images/catalog/argan-oil.webp"
            alt="Premium Moroccan Beauty"
            width={512}
            height={512}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute bottom-4 left-6 inline-flex items-center gap-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-rose/20 shadow-sm">
            <Sparkles className="w-4 h-4 text-rose" />
            <span className="text-xs font-semibold tracking-wide text-foreground uppercase">
              New Collections
            </span>
          </div>
        </div>

        {/* content */}
        <div className="p-8 pb-10 text-center">
          <h3 className="text-3xl font-serif font-semibold text-foreground mb-3 leading-tight">
            Discover Our
            <br />
            <span className="text-rose">Premium Essentials</span>
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed mb-8">
            Explore our full range of natural Moroccan beauty products and wholesale manufacturing services on our official store.
          </p>

          <a
            href="https://wa.me/212641517831"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full h-14 bg-rose hover:bg-rose-dark text-white font-semibold text-lg rounded-2xl shadow-lg shadow-rose/20 hover:shadow-xl hover:shadow-rose/30 transition-all duration-300 group cursor-pointer"
          >
            Download Wholesale Catalog
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="mt-6 text-xs text-muted-foreground/60 italic">
            Experience the essence of authentic Moroccan beauty.
          </p>
        </div>
      </div>
    </div>
  );
}
