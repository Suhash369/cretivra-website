import React from "react";
import { Metadata } from "next";
import { getRegion } from "@/lib/regions";
import { buildPageMetadata } from "@/lib/seo";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import StructuredData from "@/components/seo/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: { region: string };
}): Promise<Metadata> {
  const reg = getRegion(params.region);
  return buildPageMetadata({
    title: `AI Case Studies & Client Architecture Blueprints (${reg.name}) — Cretivra`,
    description: `Explore real-world AI agent implementation blueprints across Real Estate, D2C, and Manufacturing for companies in ${reg.name}.`,
    path: "/case-studies",
    regionCode: params.region,
    keywords: [`case studies Cretivra ${reg.name}`, "AI ROI benchmarks", "AI automation blueprints"],
  });
}

export default function CaseStudiesPage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  return (
    <>
      <StructuredData region={reg} pageType="home" />
      <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-2 sm:mb-3 block">
            Proven Client Transformations
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 leading-tight">
            Client Success Stories & ROI Benchmarks.
          </h1>
          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-lg max-w-2xl mx-auto px-1 sm:px-0">
            Detailed case studies demonstrating how Cretivra AI agent architectures drive 40% faster lead response and reduce operational costs.
          </p>
        </div>
      </section>

      <CaseStudiesSection />
      <LeadFormSection region={reg} />
    </>
  );
}
