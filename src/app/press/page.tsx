import React from "react";
import { Metadata } from "next";
import RegionalPressPage from "@/app/[region]/press/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Press, Newsroom & Media Kit — Cretivra",
  description:
    "Official company announcements, media kit resources, brand assets, and news on Cretivra's enterprise autonomous AI agent platform.",
  path: "/press",
  regionCode: "global",
});

export default function GlobalPressPage() {
  return (
    <GlobalPageWrapper>
      <RegionalPressPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
