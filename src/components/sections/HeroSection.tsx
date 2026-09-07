"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import QuotationModal from "@/components/ui/QuotationModal";
import { RegionConfig } from "@/lib/regions";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Calculator,
  Bot,
  MessageSquare,
  Database,
  CheckCircle2,
  Workflow,
  Cpu,
  Lock,
} from "lucide-react";

interface HeroSectionProps {
  region: RegionConfig;
}

export default function HeroSection({ region }: HeroSectionProps) {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activePipelineStep, setActivePipelineStep] = useState(1);

  const pipelineSteps = [
    {
      step: 1,
      title: "1. Inbound Triage",
      channel: region.whatsappFocus ? "WhatsApp & Web" : "Omnichannel Intake",
      status: "Active (< 3s)",
      detail: "Instant greeting & intent categorization across WhatsApp, Web Chat & Email.",
      badge: "Instant 24/7",
    },
    {
      step: 2,
      title: "2. Autonomous Qualifier",
      channel: "Multi-Agent Logic",
      status: "AI Model Swarm",
      detail: "Interactive qualification screening budget, timeline & exact business requirements.",
      badge: "Zero Drop-off",
    },
    {
      step: 3,
      title: "3. Vector RAG Memory",
      channel: "Private Knowledge Base",
      status: "0 Hallucination",
      detail: "Retrieves verified answers from your product catalog, price sheets & FAQs in real time.",
      badge: "SOC2 Encrypted",
    },
    {
      step: 4,
      title: "4. CRM & Calendar Sync",
      channel: "Salesforce / HubSpot / SAP",
      status: "Auto-Scheduled",
      detail: "Pushes structured deal data to CRM and books meetings into sales reps' calendars.",
      badge: "Closed Loop",
    },
  ];

  return (
    <>
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-start items-center pt-28 sm:pt-36 lg:pt-40 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
        {/* Ambient Radial Glows - Scaled responsibly for mobile GPUs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[750px] h-[300px] sm:h-[500px] bg-gradient-radial from-blue-100/70 via-cyan-100/40 to-transparent blur-[70px] sm:blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-4 sm:right-10 w-[240px] sm:w-[450px] h-[240px] sm:h-[450px] bg-violet-100/50 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-1/2 left-4 sm:left-10 w-[200px] sm:w-[350px] h-[200px] sm:h-[350px] bg-blue-100/40 rounded-full blur-[60px] sm:blur-[90px] pointer-events-none animate-float" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          {/* Top Pill Badge - Fully responsive, guaranteed clearance below fixed navbar */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 text-[11px] sm:text-xs font-semibold text-blue-600 mb-6 sm:mb-8 shadow-xs hover:border-blue-300 transition-all hover:scale-102 cursor-pointer max-w-[95vw] flex-wrap justify-center"
          >
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600 animate-pulse shrink-0" />
              <span>Next-Gen Autonomous AI Agents</span>
            </div>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <span className="text-slate-700 font-medium">
              {region.flag} {region.name}
            </span>
          </motion.div>

          {/* Hero Main Headline (H1) - Responsive sizing for small phones to 4K monitors */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight text-slate-900 max-w-5xl mx-auto leading-tight sm:leading-[1.12] mb-4 sm:mb-6"
          >
            Engineering Intelligence. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600">
              Building the Future with AI.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-2 sm:mt-4 text-xs sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed px-1 sm:px-0"
          >
            {region.heroSubheadline}
          </motion.p>

          {/* Action Buttons - Fully responsive stack on mobile, comfortable touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto px-1 sm:px-0 max-w-md sm:max-w-none mx-auto"
          >
            <button
              onClick={() => setQuoteModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 shadow-lg shadow-blue-500/25 transition-all hover:scale-103 active:scale-97 group min-h-[48px]"
            >
              <Calculator className="w-4 h-4 text-cyan-100 shrink-0" />
              <span>Get Custom Quotation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <a
              href="#lead-form"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-semibold text-slate-800 bg-white border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all shadow-xs hover:scale-103 min-h-[48px]"
            >
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Request Free AI Prototype</span>
            </a>
          </motion.div>

          {/* High-Converting Interactive AI Agent Runtime Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 sm:mt-14 max-w-4xl mx-auto w-full text-left"
          >
            <div className="rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/60 overflow-hidden">
              {/* Terminal Top Bar */}
              <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs text-slate-300 font-medium truncate">
                    cretivra://live-orchestrator
                  </span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-emerald-400 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  <span className="hidden sm:inline">SWARM ACTIVE •</span> 24/7 SLA
                </div>
              </div>

              {/* Pipeline Interactive Tabs & Flow */}
              <div className="p-3.5 sm:p-6 bg-gradient-to-b from-slate-50/60 to-white">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-5">
                  {pipelineSteps.map((p) => {
                    const isSelected = activePipelineStep === p.step;
                    return (
                      <button
                        key={p.step}
                        type="button"
                        onClick={() => setActivePipelineStep(p.step)}
                        className={`p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl text-left transition-all border min-h-[44px] ${
                          isSelected
                            ? "bg-white border-blue-500 shadow-md ring-1 ring-blue-400"
                            : "bg-white/80 border-slate-200/80 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1 gap-1">
                          <span className="text-[10px] font-mono font-semibold text-blue-600 shrink-0">
                            {p.title.split(".")[0]}
                          </span>
                          <span className="text-[8px] sm:text-[9px] font-semibold px-1 py-0.5 rounded bg-blue-50 text-blue-700 truncate">
                            {p.badge}
                          </span>
                        </div>
                        <div className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate">
                          {p.title.split(". ")[1]}
                        </div>
                        <div className="text-[9px] sm:text-[10px] text-slate-500 truncate mt-0.5">
                          {p.channel}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Step Live Simulation Box */}
                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed space-y-2.5 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] sm:text-[11px] text-slate-400 pb-2 border-b border-slate-800 gap-2">
                    <span className="flex items-center gap-1.5 text-blue-400 truncate">
                      <Cpu className="w-3.5 h-3.5 shrink-0" />
                      Stage {activePipelineStep}/4: {pipelineSteps[activePipelineStep - 1].title}
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1 shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      28ms
                    </span>
                  </div>

                  <p className="text-slate-200 font-sans text-xs sm:text-sm leading-relaxed">
                    {pipelineSteps[activePipelineStep - 1].detail}
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1 text-slate-300">
                      <Lock className="w-3 h-3 text-cyan-400 shrink-0" />
                      Zero-Hallucination Vector Check Passed
                    </span>
                    <span className="text-blue-300 underline cursor-pointer hover:text-blue-200" onClick={() => setQuoteModalOpen(true)}>
                      Test this architecture with your workflows →
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-slate-500 font-semibold"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>SOC2 & GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
              <span>24/7 SLA Monitored</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 hover:text-blue-600 transition-colors">
              <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
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
