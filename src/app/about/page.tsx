import React from "react";
import { Metadata } from "next";
import RegionalAboutPage from "@/app/[region]/about/page";
import GlobalPageWrapper from "@/components/layout/GlobalPageWrapper";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "About Cretivra — Engineering Intelligence. Building the Future with AI.",
  description:
    "Cretivra architects, deploys, and manages autonomous AI agent infrastructure that replaces manual business friction for growing companies worldwide.",
  path: "/about",
  regionCode: "global",
});

export default function GlobalAboutPage() {
  return (
    <GlobalPageWrapper>
      <RegionalAboutPage params={{ region: "global" }} />
    </GlobalPageWrapper>
  );
}
