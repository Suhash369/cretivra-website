import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LeadFormSection from "@/components/sections/LeadFormSection";

export default function Industries() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">Vertical Specializations</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">Industry-Specific AI Automation.</h1>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Discover tailored AI agent architectures designed for Real Estate, E-Commerce, Manufacturing, Healthcare, Education, and Financial services.</p>
          </div>
        </section>
        <IndustriesSection />
        <LeadFormSection region={reg} />
      </main>
      <Footer region={reg} />
    </>
  );
}
