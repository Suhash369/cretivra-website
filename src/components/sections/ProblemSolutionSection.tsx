"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight, AlertTriangle, Sparkles, Zap } from "lucide-react";

export default function ProblemSolutionSection() {
  const [activeTab, setActiveTab] = useState<"solution" | "problem">("solution");

  const oldWayItems = [
    {
      title: "Manual Enquiry Triage",
      desc: "Sales reps spending hours copying lead data from WhatsApp & forms into spreadsheets.",
    },
    {
      title: "12+ Hour Response Delays",
      desc: "High-intent buyers move to competitors before your team even reads their initial message.",
    },
    {
      title: "Missed Weekend & Night Leads",
      desc: "Zero response coverage outside 9-to-5 office hours causes up to 40% lead drop-off.",
    },
    {
      title: "Fragmented Data & Human Error",
      desc: "Inconsistent follow-ups, untracked conversation status, and zero unified analytics.",
    },
  ];

  const cretivraWayItems = [
    {
      title: "Instant Autonomous AI Triage",
      desc: "AI agents engage enquiries instantly on WhatsApp, Web, or Email within 3 seconds.",
    },
    {
      title: "24/7 Real-Time Lead Qualification",
      desc: "Intelligent agents ask qualifying questions, collect criteria, and book calendar meetings automatically.",
    },
    {
      title: "Zero Lead Drop-Off Guaranteed",
      desc: "Round-the-clock SLA execution ensuring every inbound prospect receives human-like assistance anytime.",
    },
    {
      title: "Direct ERP/CRM Sync & Intelligence",
      desc: "Structured data pushed directly to Salesforce, HubSpot, or custom databases with audit logs.",
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            The Operational Transformation
          </h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
            Stop Losing Revenue to Manual Bottlenecks.
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Compare how traditional companies handle operational friction versus how Cretivra AI agent infrastructure scales your business.
          </p>

          {/* Interactive Switch */}
          <div className="mt-8 inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab("problem")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "problem"
                  ? "bg-red-50 text-red-700 border border-red-200 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-red-500" />
              The Old Way (Manual)
            </button>
            <button
              onClick={() => setActiveTab("solution")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "solution"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4 text-cyan-100" />
              The Cretivra Way (AI Agents)
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Old Way Card */}
          <div
            className={`p-8 rounded-3xl transition-all duration-300 border ${
              activeTab === "problem"
                ? "bg-red-50/50 border-red-200 shadow-xl shadow-red-100/50 ring-1 ring-red-200"
                : "bg-slate-50/50 border-slate-200 opacity-70"
            }`}
          >
            <div className="flex items-center justify-between pb-6 border-b border-red-200/60 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-red-100 text-red-600">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">The Old Way</h3>
                  <p className="text-xs text-red-600 font-medium">Manual, slow, error-prone</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-red-100 text-red-700 border border-red-200 font-bold">
                HIGH CHURN
              </span>
            </div>

            <div className="space-y-6">
              {oldWayItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cretivra Way Card */}
          <div
            className={`p-8 rounded-3xl transition-all duration-300 border ${
              activeTab === "solution"
                ? "bg-white border-blue-300 shadow-xl shadow-blue-500/10 ring-2 ring-blue-500/20"
                : "bg-slate-50/50 border-slate-200 opacity-70"
            }`}
          >
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-slate-900">The Cretivra Way</h3>
                  <p className="text-xs text-blue-600 font-medium">Autonomous, 24/7, high-converting</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-blue-50 text-blue-700 border border-blue-200 font-bold">
                3X ROI AVERAGE
              </span>
            </div>

            <div className="space-y-6">
              {cretivraWayItems.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
