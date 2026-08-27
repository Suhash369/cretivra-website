"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CretivraLogo from "@/components/brand/CretivraLogo";
import QuotationModal from "@/components/ui/QuotationModal";
import { RegionConfig } from "@/lib/regions";
import { Menu, X, Calculator } from "lucide-react";

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
            ? "bg-white/90 backdrop-blur-xl border-b border-slate-200/80 py-3 shadow-md shadow-slate-200/40"
            : "bg-white/60 backdrop-blur-md py-5 border-b border-slate-100"
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

            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 group overflow-hidden"
              >
                <Calculator className="w-3.5 h-3.5 text-cyan-200" />
                <span>Get Custom Quotation</span>
              </button>
            </div>

            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-2xl border-b border-slate-200 p-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-800 hover:text-blue-600 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md"
              >
                <Calculator className="w-4 h-4" />
                Get Custom Quotation
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
