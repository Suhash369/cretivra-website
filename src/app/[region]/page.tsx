import React from "react";
import { Metadata } from "next";
import { getRegion } from "@/lib/regions";
import { buildPageMetadata } from "@/lib/seo";
import HeroSection from "@/components/sections/HeroSection";
import ProofBarSection from "@/components/sections/ProofBarSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import LeadFormSection from "@/components/sections/LeadFormSection";

export async function generateMetadata({
  params,
}: {
  params: { region: string };
}): Promise<Metadata> {
  const reg = getRegion(params.region);
  return buildPageMetadata({
    title: `${reg.heroHeadline} | Cretivra ${reg.name}`,
    description: reg.heroSubheadline,
    path: "",
    regionCode: params.region,
    keywords: [
      `AI agency ${reg.name}`,
      `AI automation company ${reg.areaServed}`,
      ...reg.majorCities.map((city) => `AI agent developers ${city}`),
      `WhatsApp AI bot ${reg.name}`,
      `multi-agent autonomous systems ${reg.name}`,
    ],
  });
}

export default function RegionalHomePage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  return (
    <>
      <HeroSection region={reg} />
      <ProofBarSection />
      <ProblemSolutionSection />
      <ProductLadderSection region={reg} />
      <IndustriesSection />
      <TimelineSection />
      <CaseStudiesSection />
      <GlobalReachSection />
      <LeadFormSection region={reg} />
    </>
  );
}
