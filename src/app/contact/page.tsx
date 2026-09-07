import React from "react";
import { Metadata } from "next";
import RegionalContactPage from "@/app/[region]/contact/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Cretivra — AI Engineering Team & Discovery",
  description:
    "Direct communication with Cretivra's AI engineering team. 2-hour response SLA, round-the-clock coverage, and free 48-hour AI prototype requests.",
  path: "/contact",
  regionCode: "global",
});

export default function GlobalContactPage() {
  return (
    <GlobalPageWrapper>
      <RegionalContactPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
