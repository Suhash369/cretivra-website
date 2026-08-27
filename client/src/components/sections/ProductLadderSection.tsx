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
      tagline: "Uncover manual friction & map high-ROI AI opportunities.",
      actionLabel: "Request Audit Quotation",
      features: [
        "In-depth workflow bottleneck analysis",
        "ROI & cost-savings projection model",
        "Technical architecture & API roadmap",
        "48-Hour delivery with actionable plan",
      ],
      popular: false,
    },
    {
      id: "automation",
      icon: Bot,
      title: "2. AI Automation Agents",
      badge: "Most Popular for SMEs",
      tagline: "Single-agent builds for WhatsApp sales, support & leads.",
      actionLabel: "Get Automation Quote",
      features: [
        "Custom WhatsApp / Web Sales Qualifier Agent",
        "Instant FAQ & Customer Support Agent",
        "Calendar booking & lead qualification",
        "Webhook & CRM integration",
      ],
      popular: true,
    },
    {
      id: "custom",
      icon: Layers,
      title: "3. Custom AI Agent Systems",
      badge: "Enterprise Scale",
      tagline: "Multi-agent autonomous systems integrated with ERP/CRM.",
      actionLabel: "Get Enterprise Quotation",
      features: [
        "Multi-agent collaborative network architecture",
        "Bi-directional ERP, SAP, Salesforce, HubSpot sync",
        "Custom RAG vector database & private memory",
        "Dedicated security sandbox & audit trail",
      ],
      popular: false,
    },
    {
      id: "managed",
      icon: Headphones,
      title: "4. Managed AI Service",
      badge: "Continuous Tuning",
      tagline: "Ongoing monitoring, prompt tuning, 24/7 SLA uptime.",
      actionLabel: "Get Managed SLA Quote",
      features: [
        "24/7 Agent SLA uptime & error monitoring",
        "Weekly prompt optimization & model upgrades",
        "Human-in-the-loop fallback escalation",
        "Dedicated AI engineer & monthly analytics",
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
              Tailored solutions built for growing SMEs and MNC enterprise teams. Request a custom quotation tailored to your volume.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Calculator className="w-4 h-4 text-blue-600" />
              <span>Tailored MNC Pricing • Get Custom Quotations for Any Scale</span>
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
                    <p className="text-xs text-slate-600 mb-6 leading-relaxed font-normal">{tier.tagline}</p>

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
