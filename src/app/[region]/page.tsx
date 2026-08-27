import React from "react";
import { getRegion } from "@/lib/regions";
import HeroSection from "@/components/sections/HeroSection";
import ProofBarSection from "@/components/sections/ProofBarSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import LeadFormSection from "@/components/sections/LeadFormSection";

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
