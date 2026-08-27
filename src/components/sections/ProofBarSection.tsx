"use client";

import React from "react";
import AnimatedCountUp from "@/components/animation/AnimatedCountUp";
import { Cpu, Zap, Clock, ShieldCheck } from "lucide-react";

export default function ProofBarSection() {
  const stats = [
    {
      icon: Cpu,
      value: 4,
      suffix: " Tiers",
      label: "Modular Product Ladder",
      subtext: "Audit to 24/7 Managed Service",
    },
    {
      icon: Clock,
      value: 48,
      suffix: " Hours",
      label: "Turnaround Audit Report",
      subtext: "Actionable roadmap & ROI model",
    },
    {
      icon: ShieldCheck,
      value: 8,
      suffix: " Verticals",
      label: "Industry Specializations",
      subtext: "Tailored process workflows",
    },
    {
      icon: Zap,
      value: 24,
      suffix: "/7",
      label: "Managed Agent Service",
      subtext: "Continuous tuning & safeguards",
    },
  ];

  const techBadges = [
    "Anthropic, OpenAI & Gemini Model Implementation",
    "WhatsApp Business API",
    "Salesforce & HubSpot CRM",
    "SAP & ERP Webhooks",
    "RAG & Vector Knowledge Bases",
    "Human-in-the-Loop Safeguards",
  ];

  return (
    <section className="relative z-10 py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl text-slate-900 font-heading font-bold">
                    <AnimatedCountUp
                      end={stat.value}
                      decimals={0}
                      suffix={stat.suffix}
                    />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-slate-900 text-sm">{stat.label}</h3>
                <p className="text-xs text-slate-500 mt-1">{stat.subtext}</p>
              </div>
            );
          })}
        </div>

        {/* Integration Strip */}
        <div className="mt-12 pt-8 border-t border-slate-200/80">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            Natively Integrated with Your Enterprise Tech Stack
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techBadges.map((badge, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-medium hover:border-blue-400 hover:text-blue-600 shadow-2xs transition-colors"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
