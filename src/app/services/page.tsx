import React from "react";
import { Metadata } from "next";
import RegionalServicesPage from "@/app/[region]/services/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Agent Architecture & Implementation Services — Cretivra",
  description:
    "Explore Cretivra's AI implementation suite: AI Process Audits, single-function WhatsApp/Support automation agents, custom multi-agent enterprise systems, and 24/7 managed SLA services.",
  path: "/services",
  regionCode: "global",
});

export default function GlobalServicesPage() {
  return (
    <GlobalPageWrapper>
      <RegionalServicesPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
