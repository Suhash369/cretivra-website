"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function GlobalReachSection() {
  const [activeHub, setActiveHub] = useState<string>("in");

  const hubs = [
    {
      id: "in",
      name: "India (HQ & Delivery Hub)",
      flag: "🇮🇳",
      currency: "₹ INR",
      tag: "Tech & Agent Engineering Core",
      desc: "Engineers 24/7 AI agents for Indian SMEs, high-volume WhatsApp automation, and rapid prototype development.",
      coords: { top: "45%", left: "68%" },
    },
    {
      id: "us",
      name: "United States",
      flag: "🇺🇸",
      currency: "$ USD",
      tag: "Mid-Market & Enterprise Growth",
      desc: "Deploys custom multi-agent CRM integrations (Salesforce, HubSpot) for high-growth tech & service teams.",
      coords: { top: "35%", left: "22%" },
    },
    {
      id: "uk",
      name: "United Kingdom",
      flag: "🇬🇧",
      currency: "£ GBP",
      tag: "GDPR & Security Compliant",
      desc: "Delivers enterprise-grade AI support automation with strict European privacy and SLA compliance.",
      coords: { top: "25%", left: "48%" },
    },
    {
      id: "ae",
      name: "United Arab Emirates & GCC",
      flag: "🇦🇪",
      currency: "AED",
      tag: "Bilingual AI Solutions",
      desc: "Powers rapid-growth real estate, luxury retail, and logistics companies across Dubai, Abu Dhabi, and the region.",
      coords: { top: "40%", left: "58%" },
    },
    {
      id: "sg",
      name: "Singapore & APAC",
      flag: "🇸🇬",
      currency: "$ USD / SGD",
      tag: "APAC Regional Command",
      desc: "Provides agentic automation across supply chain hubs, finance, and regional e-commerce marketplaces.",
      coords: { top: "52%", left: "76%" },
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">
            Global Footprint & Reach
          </h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">
            Delivering AI Excellence Worldwide.
          </p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Engineering intelligence locally in India and serving clients seamlessly across North America, Europe, the Middle East, and Asia-Pacific.
          </p>
        </div>

        {/* World Map Container */}
        <div className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-10 shadow-xl overflow-hidden">
          <div className="relative w-full h-[320px] sm:h-[420px] bg-slate-50 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200">
            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />

            {/* Stylized Continent Silhouette Outlines */}
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full object-cover opacity-35"
              fill="none"
              stroke="#2563EB"
              strokeWidth="1"
            >
              <path d="M 150 120 Q 200 100, 260 140 T 240 240 T 150 200 Z" fill="#2563EB" opacity="0.15" />
              <path d="M 280 260 Q 320 300, 300 380 T 260 320 Z" fill="#2563EB" opacity="0.15" />
              <path d="M 460 100 Q 520 80, 540 140 T 480 180 Z" fill="#2563EB" opacity="0.15" />
              <path d="M 480 200 Q 550 220, 530 320 T 460 260 Z" fill="#2563EB" opacity="0.15" />
              <path d="M 600 100 Q 750 80, 820 180 T 680 240 Z" fill="#2563EB" opacity="0.15" />
              <path d="M 780 300 Q 840 320, 820 380 T 760 340 Z" fill="#2563EB" opacity="0.15" />
            </svg>

            {/* Pulsing Regional Hub Location Dots */}
            {hubs.map((hub) => {
              const isActive = activeHub === hub.id;
              return (
                <div
                  key={hub.id}
                  style={{ top: hub.coords.top, left: hub.coords.left }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  onClick={() => setActiveHub(hub.id)}
                >
                  <div
                    className={`w-10 h-10 rounded-full bg-blue-400/30 absolute -top-3 -left-3 animate-ping ${
                      isActive ? "opacity-100 scale-125" : "opacity-40"
                    }`}
                  />
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-blue-600 text-white scale-125 shadow-lg shadow-blue-500/50"
                        : "bg-slate-800 text-white group-hover:scale-110"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                  </div>

                  <div
                    className={`absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1 rounded-lg text-[11px] font-semibold transition-all ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-white text-slate-800 border border-slate-200 shadow-sm opacity-90 group-hover:opacity-100"
                    }`}
                  >
                    <span>{hub.flag} {hub.name.split(" ")[0]}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Hub Info Cards Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {hubs.map((hub) => {
              const isActive = activeHub === hub.id;
              return (
                <div
                  key={hub.id}
                  onClick={() => setActiveHub(hub.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    isActive
                      ? "bg-blue-50/80 border-blue-500 shadow-md ring-1 ring-blue-400"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">{hub.flag}</span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-blue-700">
                      {hub.currency}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-xs text-slate-900 mb-1">{hub.name}</h4>
                  <p className="text-[10px] text-blue-600 font-semibold mb-2">{hub.tag}</p>
                  <p className="text-[11px] text-slate-600 leading-snug line-clamp-3">{hub.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
