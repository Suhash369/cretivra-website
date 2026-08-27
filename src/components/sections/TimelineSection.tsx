"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Search, Code2, Rocket, RefreshCw, CheckCircle2 } from "lucide-react";

export default function TimelineSection() {
  const steps = [
    {
      num: "01",
      icon: Sparkles,
      title: "Free AI Prototype",
      time: "Day 1-2",
      desc: "We build a mini working demonstration tailored to your exact sales or support workflow before you pay a single dollar.",
    },
    {
      num: "02",
      icon: Search,
      title: "Discovery & Audit",
      time: "Day 3-5",
      desc: "Deep analysis of your manual bottlenecks, API connections, database schemas, and SLA guidelines.",
    },
    {
      num: "03",
      icon: Code2,
      title: "Agent Architecture & Build",
      time: "Week 1-2",
      desc: "Developing multi-agent logic, prompt engineering, RAG vector pipelines, and CRM/ERP integrations.",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Production Deployment",
      time: "Week 3",
      desc: "Staged rollout with human-in-the-loop fallback safeguards, staff training, and live system monitoring.",
    },
    {
      num: "05",
      icon: RefreshCw,
      title: "Managed Service & Tuning",
      time: "Ongoing",
      desc: "24/7 SLA monitoring, weekly model upgrades, performance tuning, and new feature releases.",
    },
  ];

  return (
    <section id="how-it-works" className="relative z-10 py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Process & Delivery Timeline
          </h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
            From Zero to Autonomous AI in Weeks.
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Our structured, low-risk 5-stage implementation methodology designed for maximum speed and ROI.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 -translate-y-1/2 opacity-30 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-heading font-extrabold text-2xl text-blue-600">
                        {step.num}
                      </span>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {step.time}
                      </span>
                    </div>

                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-heading font-bold text-base text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-blue-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Stage {step.num} Milestone</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
