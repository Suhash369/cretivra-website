import React from "react";
import { Metadata } from "next";
import RegionalCaseStudiesPage from "@/app/[region]/case-studies/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Implementation Case Studies & Architecture Blueprints — Cretivra",
  description:
    "Explore proven AI agent blueprints and real results for Real Estate, E-Commerce, and Manufacturing. 40% faster inquiry response and verified ROI.",
  path: "/case-studies",
  regionCode: "global",
});

export default function GlobalCaseStudiesPage() {
  return (
    <GlobalPageWrapper>
      <RegionalCaseStudiesPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
