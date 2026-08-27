import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProofBarSection from "@/components/sections/ProofBarSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import NodeNetworkCanvas from "@/components/animation/NodeNetworkCanvas";

export default function Home() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  return (
    <>
      <NodeNetworkCanvas />
      <Navbar region={reg} />
      <main className="relative z-10">
        <HeroSection region={reg} />
        <ProofBarSection />
        <ProblemSolutionSection />
        <ProductLadderSection region={reg} />
        <IndustriesSection />
        <TimelineSection />
        <CaseStudiesSection />
        <GlobalReachSection />
        <LeadFormSection region={reg} />
      </main>
      <Footer region={reg} />
    </>
  );
}
