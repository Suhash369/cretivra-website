import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CretivraLogo from "@/components/brand/CretivraLogo";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { getRegion } from "@/lib/regions";
import { Cpu, Target, Users } from "lucide-react";

export default function AboutPage({ params }: { params: { region?: string } }) {
  const reg = getRegion(params?.region);

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-20 bg-gradient-to-b from-white via-slate-50 to-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6 inline-block">
              <CretivraLogo size="lg" lightMode={true} useImageOnly={true} />
            </div>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900 tracking-tight">
              Engineering Intelligence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600">
                Building the Future with AI.
              </span>
            </h1>
            <p className="mt-6 text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-normal">
              Cretivra was founded on a singular premise: generic AI chatbots don't solve real business problems. We build production-ready, autonomous multi-agent systems that replace manual drag and deliver tangible ROI.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit"><Cpu className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Implementation & Integration Value</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">We integrate and implement leading foundation models (Anthropic, OpenAI, Google) directly into your business systems (CRM, ERP, WhatsApp). The core value is our custom engineering, system integration, and ongoing managed service.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit"><Target className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Managed Service SLA</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">We provide 24/7 monitoring, weekly prompt upgrades, and dedicated engineer support to guarantee zero downtime.</p>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="p-3 rounded-2xl bg-blue-50 text-blue-600 w-fit"><Users className="w-6 h-6" /></div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Global Reach, Local SLA</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">With engineering hubs in India and clients across US, UK, UAE, and Singapore, we deliver round-the-clock responsiveness.</p>
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
