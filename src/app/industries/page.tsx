import React from "react";
import { Metadata } from "next";
import RegionalIndustriesPage from "@/app/[region]/industries/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Industry-Specific AI Automation Solutions — Cretivra",
  description:
    "Tailored AI agent architectures built for Real Estate, D2C/E-Commerce, Manufacturing, Healthcare, Education, and Logistics. Replace manual workflows with intelligent agents.",
  path: "/industries",
  regionCode: "global",
});

export default function GlobalIndustriesPage() {
  return (
    <GlobalPageWrapper>
      <RegionalIndustriesPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
