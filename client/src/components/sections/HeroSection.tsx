import React, { useState } from "react";
import { motion } from "framer-motion";
import CretivraLogo from "@/components/brand/CretivraLogo";
import QuotationModal from "@/components/ui/QuotationModal";
import { RegionConfig } from "@/lib/regions";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Calculator } from "lucide-react";

interface HeroSectionProps {
  region: RegionConfig;
}

export default function HeroSection({ region }: HeroSectionProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[500px] bg-gradient-radial from-blue-100/70 via-cyan-100/40 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-100/50 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-blue-100/40 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-xs font-semibold text-blue-600 mb-8 shadow-sm hover:border-blue-300 transition-all hover:scale-105 cursor-pointer"
          >
            <Zap className="w-4 h-4 text-blue-600 fill-blue-600 animate-pulse" />
            <span>Next-Gen Autonomous AI Agents & Implementation</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-700 font-medium">{region.flag} {region.name}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-[1.12] mb-4"
          >
            Engineering Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600">
              Building the Future with AI.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed"
          >
            {region.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 shadow-xl shadow-blue-500/25 transition-all hover:scale-105 active:scale-95 group"
            >
              <Calculator className="w-4 h-4 text-cyan-100" />
              <span>Get Custom Quotation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#lead-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-sm font-semibold text-slate-800 bg-white border border-slate-200/90 hover:border-blue-400 hover:bg-slate-50 transition-all shadow-sm hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Request Free AI Prototype</span>
            </a>
          </motion.div>

          {/* Hero Logo Card Display - ONLY Animated Company Logo, NO Write-ups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 inline-block px-12 py-8 rounded-3xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 relative group hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-center py-2">
              <CretivraLogo size="xl" lightMode={true} useImageOnly={true} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-500 font-semibold"
          >
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>SOC2 & GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>24/7 SLA Monitored</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>WhatsApp & CRM Integrated</span>
            </div>
          </motion.div>
        </div>
      </section>

      <QuotationModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        region={region}
      />
    </>
  );
}
