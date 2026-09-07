import React from "react";
import { Metadata } from "next";
import { getRegion } from "@/lib/regions";
import { buildPageMetadata } from "@/lib/seo";
import IndustriesSection from "@/components/sections/IndustriesSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import StructuredData from "@/components/seo/StructuredData";

export async function generateMetadata({
  params,
}: {
  params: { region: string };
}): Promise<Metadata> {
  const reg = getRegion(params.region);
  return buildPageMetadata({
    title: `Industry-Specific AI Automation Solutions (${reg.name}) — Cretivra`,
    description: `Tailored AI agent architectures engineered for Real Estate, D2C/E-Commerce, Manufacturing, Healthcare, Education, and Logistics across ${reg.name}.`,
    path: "/industries",
    regionCode: params.region,
    keywords: [`AI industries ${reg.name}`, "real estate AI bot", "manufacturing AI agent"],
  });
}

export default function IndustriesPage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  return (
    <>
      <StructuredData region={reg} pageType="services" />
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">
            Vertical Specializations ({reg.name})
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">
            Industry-Specific AI Automation.
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Discover tailored AI agent architectures designed for Real Estate, E-Commerce, Manufacturing, Healthcare, Education, and Financial services.
          </p>
        </div>
      </section>

      <IndustriesSection />
      <LeadFormSection region={reg} />
    </>
  );
}
