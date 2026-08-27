import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { Bot, Network, Database, Shield } from "lucide-react";

export default function Services() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-6">
              <Bot className="w-3.5 h-3.5" />
              <span>AI Architecture & Implementation Suite</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900 tracking-tight">
              Autonomous AI Agents Engineered for Scale.
            </h1>
            <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
              From quick-hit WhatsApp sales qualifiers to enterprise multi-agent ERP orchestrators, Cretivra builds production-ready AI agent infrastructure.
            </p>
          </div>
        </section>

        <ProductLadderSection region={reg} />

        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Technical Architecture</h2>
              <p className="text-3xl sm:text-4xl font-heading font-bold text-slate-900">Enterprise-Grade AI Security & Stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6"><Network className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Multi-Agent Swarm Logic</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Specialized micro-agents communicating via high-speed IPC pipelines.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6"><Database className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">Custom RAG Vector Memory</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Private vector databases indexed with your company docs & policy manuals.</p>
              </div>
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit mb-6"><Shield className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">SOC2 & Human Safeguards</h3>
                <p className="text-xs text-slate-600 leading-relaxed">Automated escalation to human staff when confidence thresholds drop.</p>
              </div>
            </div>
          </div>
        </section>

        <LeadFormSection region={reg} />
      </main>
      <Footer region={reg} />
    </>
  );
}
