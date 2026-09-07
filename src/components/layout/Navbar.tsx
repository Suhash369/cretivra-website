"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CretivraLogo from "@/components/brand/CretivraLogo";
import QuotationModal from "@/components/ui/QuotationModal";
import RegionSelector from "@/components/ui/RegionSelector";
import { RegionConfig } from "@/lib/regions";
import { Menu, X, Calculator, Globe } from "lucide-react";

interface NavbarProps {
  region: RegionConfig;
}

export default function Navbar({ region }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const basePrefix = region.code === "global" ? "" : `/${region.code}`;

  const navLinks = [
    { label: "Services", href: `${basePrefix}/services` },
    { label: "Industries", href: `${basePrefix}/industries` },
    { label: "Pricing", href: `${basePrefix}/pricing` },
    { label: "About", href: `${basePrefix}/about` },
    { label: "Case Studies", href: `${basePrefix}/case-studies` },
    { label: "Contact", href: `${basePrefix}/contact` },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-2.5 sm:py-3 shadow-md shadow-slate-200/40"
            : "bg-white/70 backdrop-blur-md py-3.5 sm:py-5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href={basePrefix || "/"} className="flex items-center">
              <CretivraLogo size="md" lightMode={true} useImageOnly={true} />
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    pathname === link.href ? "text-blue-600 font-bold" : "text-slate-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3.5">
              <RegionSelector currentRegion={region} />
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 shadow-md shadow-blue-500/20 transition-all hover:scale-103 active:scale-97 group overflow-hidden"
              >
                <Calculator className="w-3.5 h-3.5 text-cyan-200" />
                <span>Get Custom Quotation</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-100/80 text-slate-700 border border-slate-200 hover:bg-slate-200 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Down Drawer with Dynamic Alignment and Max-Height */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full inset-x-0 bg-white/98 backdrop-blur-2xl border-b border-slate-200 p-4 sm:p-6 space-y-4 sm:space-y-5 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 gap-2">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Region & Currency
              </span>
              <RegionSelector currentRegion={region} />
            </div>

            <nav className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-1 transition-colors ${
                    pathname === link.href
                      ? "text-blue-600 font-bold"
                      : "text-slate-800 hover:text-blue-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-md min-h-[48px]"
              >
                <Calculator className="w-4 h-4" />
                <span>Get Custom Quotation</span>
              </button>
            </div>
          </div>
        )}
      </header>

      <QuotationModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        region={region}
      />
    </>
  );
}
