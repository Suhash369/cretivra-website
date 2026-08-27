"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, Layers, CheckCircle2, Workflow, ArrowRight } from "lucide-react";

export default function CaseStudiesSection() {
  const blueprints = [
    {
      title: "Real Estate & Property Inquiry Blueprint",
      tier: "Tier 2: AI Automation Agent",
      vertical: "Real Estate",
      badge: "Inbound Sales Automation",
      problem: "Inbound WhatsApp & web site-visit inquiries delayed during off-hours, leading to lead drop-off.",
      solution: "Deploys a WhatsApp Sales Qualifier Agent that greets inquiries instantly, screens budget & timeline, and books site visits directly into CRM calendar.",
      deliverables: ["WhatsApp API Integration", "Automated Qualification Logic", "Calendar Booking Engine", "HubSpot / Salesforce Sync"],
    },
    {
      title: "D2C E-Commerce Support & Triage Blueprint",
      tier: "Tier 2: AI Automation Agent",
      vertical: "D2C / E-Commerce",
      badge: "High-Volume Customer Service",
      problem: "Support teams overwhelmed with repetitive order tracking, return requests, and FAQ questions.",
      solution: "Deploys an instant Customer Support Agent trained on product catalogs and store policies, escalating complex tickets to human staff.",
      deliverables: ["Instant FAQ Resolution", "Order Tracking Webhooks", "Human-in-the-Loop Escalation", "24/7 Response Readiness"],
    },
    {
      title: "Manufacturing Quotation & ERP Blueprint",
      tier: "Tier 3: Custom AI Agent System",
      vertical: "Manufacturing & Supply Chain",
      badge: "Connected Multi-Agent System",
      problem: "Manual RFQ parsing and stock verification across SAP/ERP slowing down proposal creation.",
      solution: "Deploys a multi-agent system where sales agent passes specs to quotation agent, which queries ERP inventory and drafts purchase orders.",
      deliverables: ["Multi-Agent Task Handoff", "Bi-directional ERP / SAP Sync", "Custom Vector Knowledge Base", "Audit Trail & Security Sandbox"],
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Implementation Blueprints
          </h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
            Proven AI Agent Architectures.
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Explore how Cretivra's four-tier product ladder addresses real operational bottlenecks across key industry verticals.
          </p>
        </div>

        {/* 3 Blueprint Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blueprints.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative group overflow-hidden"
            >
              <div>
                {/* Vertical & Tier */}
                <div className="flex items-center justify-between mb-4 text-xs">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">
                    {b.badge}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">{b.vertical}</span>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">{b.title}</h3>
                <p className="text-xs font-semibold text-blue-600 mb-4">{b.tier}</p>

                {/* Problem -> Solution Box */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Bottleneck</span>
                    <p className="text-xs text-slate-700 font-medium leading-relaxed">{b.problem}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60">
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block">Implementation</span>
                    <p className="text-xs text-slate-800 font-normal leading-relaxed">{b.solution}</p>
                  </div>
                </div>

                {/* Deliverables Checklist */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Delivered Capabilities</span>
                  {b.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="#lead-form"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <span>Request Similar Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
