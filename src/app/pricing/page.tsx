import React from "react";
import { Metadata } from "next";
import RegionalPricingPage from "@/app/[region]/pricing/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tailored AI Implementation Pricing & Quotations — Cretivra",
  description:
    "Modular AI agent implementation solutions. Interactive calculator, transparent deliverables, and fast custom quotations for growing companies.",
  path: "/pricing",
  regionCode: "global",
});

export default function GlobalPricingPage() {
  return (
    <GlobalPageWrapper>
      <RegionalPricingPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
