import React from "react";
import { REGIONS } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import HeroSection from "@/components/sections/HeroSection";
import ProofBarSection from "@/components/sections/ProofBarSection";
import ProblemSolutionSection from "@/components/sections/ProblemSolutionSection";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import GlobalReachSection from "@/components/sections/GlobalReachSection";
import LeadFormSection from "@/components/sections/LeadFormSection";

export default function GlobalHomePage() {
  const reg = REGIONS.global;

  return (
    <>
      <StructuredData region={reg} pageType="home" />
      <Navbar region={reg} />
      <main>
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
