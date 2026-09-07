import React from "react";
import { Metadata } from "next";
import RegionalBlogPage from "@/app/[region]/blog/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Engineering Articles, Case Studies & Insights — Cretivra",
  description:
    "Architectural guides, ROI case studies, and engineering strategies for implementing autonomous AI agents and enterprise swarms.",
  path: "/blog",
  regionCode: "global",
});

export default function GlobalBlogPage() {
  return (
    <GlobalPageWrapper>
      <RegionalBlogPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
