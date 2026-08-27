"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { RegionConfig } from "@/lib/regions";
import QuotationModal from "@/components/ui/QuotationModal";
import { Search, Bot, Layers, Headphones, Check, Calculator } from "lucide-react";

interface ProductLadderProps {
  region: RegionConfig;
}

export default function ProductLadderSection({ region }: ProductLadderProps) {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleRequestQuote = (tierTitle: string) => {
    setSelectedTier(tierTitle);
    setModalOpen(true);
  };

  const tiers = [
    {
      id: "audit",
      icon: Search,
      title: "1. AI Audit & Discovery",
      badge: "Foundation Phase",
      tagline: "Structured analysis of manual friction & high-ROI automation opportunities.",
      targetAudience: "For companies unsure where to start or seeking low-commitment initial roadmap.",
      actionLabel: "Request Audit Quotation",
      features: [
        "Workflow bottleneck analysis (sales, support, operations)",
        "ROI & cost-savings projection per opportunity",
        "Technical architecture & integration roadmap (CRM, WhatsApp, ERP)",
        "Written 48-hour turnaround report with actionable plan",
      ],
      popular: false,
    },
    {
      id: "automation",
      icon: Bot,
      title: "2. AI Automation Agents",
      badge: "Most Popular for SMEs",
      tagline: "Single working AI agent built for one specific business function.",
      targetAudience: "For companies with one clear, high-volume repetitive process.",
      actionLabel: "Get Automation Quote",
      features: [
        "WhatsApp / Web Sales Qualifier Agent",
        "Instant FAQ & Customer Support Agent",
        "Lead qualification across website, WhatsApp, IG & ads",
        "Built-in calendar booking & appointment scheduling",
        "CRM & webhook integration for automatic data sync",
      ],
      popular: true,
    },
    {
      id: "custom",
      icon: Layers,
      title: "3. Custom AI Agent Systems",
      badge: "Enterprise Scale",
      tagline: "Connected multi-agent system replacing several linked processes.",
      targetAudience: "For larger SMEs or mid-market companies with connected workflows.",
      actionLabel: "Get Enterprise Quotation",
      features: [
        "Multi-agent architecture with automated task handoffs",
        "Bi-directional sync with ERP, SAP, Salesforce, or HubSpot",
        "Custom knowledge base (RAG/vector DB) on your docs & data",
        "Dedicated security sandbox & audit trail",
      ],
      popular: false,
    },
    {
      id: "managed",
      icon: Headphones,
      title: "4. Managed AI Service",
      badge: "Recurring Operations",
      tagline: "Ongoing operation, 24/7 SLA monitoring & continuous agent tuning.",
      targetAudience: "The natural next step for all live Tier 2 & Tier 3 deployments.",
      actionLabel: "Get Managed SLA Quote",
      features: [
        "24/7 monitoring of agent uptime & error rates",
        "Weekly prompt tuning & model upgrades",
        "Human-in-the-loop fallback escalation",
        "Monthly analytics reporting on agent performance & savings",
      ],
      popular: false,
    },
  ];

  return (
    <>
      <section id="services" className="relative z-10 py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
              Product Ladder & Implementation Suite
            </h2>
            <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
              Modular AI Implementation Solutions.
            </p>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Tailored solutions built for growing SMEs and enterprise teams. Request a custom quotation tailored to your volume.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Tailored Pricing • Get Custom Quotations for Any Scale</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {tiers.map((tier, i) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className={`relative flex flex-col justify-between p-6 rounded-3xl transition-all duration-300 ${
                    tier.popular
                      ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-102"
                      : "bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-[10px] font-bold tracking-widest text-white uppercase shadow-md">
                      ⚡ {tier.badge}
                    </div>
                  )}

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                      {!tier.popular && (
                        <span className="text-[10px] font-mono font-semibold text-slate-500 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{tier.title}</h3>
                    <p className="text-xs text-slate-600 mb-4 leading-relaxed font-normal">{tier.tagline}</p>

                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-6 text-[11px] text-slate-600">
                      <span className="font-bold text-slate-900 block mb-0.5">Who it's for:</span>
                      {tier.targetAudience}
                    </div>

                    <div className="mb-6 pb-6 border-b border-slate-100">
                      <span className="inline-block text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200/80">
                        Custom Quotation Required
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handleRequestQuote(tier.title)}
                    className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                      tier.popular
                        ? "bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 text-white shadow-md shadow-blue-500/20 hover:opacity-95"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>{tier.actionLabel}</span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <QuotationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        region={region}
        defaultTier={selectedTier || undefined}
      />
    </>
  );
}
