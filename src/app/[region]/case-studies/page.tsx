import React from "react";
import { getRegion } from "@/lib/regions";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import StructuredData from "@/components/seo/StructuredData";

export default function CaseStudiesPage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  return (
    <>
      <StructuredData region={reg} pageType="home" />
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">
            Proven Client Transformations
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">
            Client Success Stories & ROI Benchmarks.
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Detailed case studies demonstrating how Cretivra AI agent architectures drive 40% faster lead response and reduce operational costs.
          </p>
        </div>
      </section>

      <CaseStudiesSection />
      <LeadFormSection region={reg} />
    </>
  );
}
