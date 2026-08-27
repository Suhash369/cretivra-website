import React from "react";
import { getRegion, REGIONS, RegionCode } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";
import { Metadata } from "next";

export async function generateStaticParams() {
  return [
    { region: "in" },
    { region: "us" },
    { region: "uk" },
    { region: "ae" },
    { region: "sg" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { region: string };
}): Promise<Metadata> {
  const reg = getRegion(params.region);
  const baseUrl = `https://cretivra.com${params.region ? `/${params.region}` : ""}`;

  return {
    title: `${reg.heroHeadline} | Cretivra ${reg.name}`,
    description: reg.heroSubheadline,
    alternates: {
      canonical: baseUrl,
      languages: {
        "en-in": "https://cretivra.com/in",
        "en-us": "https://cretivra.com/us",
        "en-gb": "https://cretivra.com/uk",
        "en-ae": "https://cretivra.com/ae",
        "en-sg": "https://cretivra.com/sg",
        "x-default": "https://cretivra.com",
      },
    },
    openGraph: {
      title: `${reg.heroHeadline} | Cretivra ${reg.name}`,
      description: reg.heroSubheadline,
      url: baseUrl,
      siteName: "Cretivra",
      images: [
        {
          url: "https://cretivra.com/og-image.png",
          width: 1200,
          height: 630,
          alt: `Cretivra AI Automation ${reg.name}`,
        },
      ],
    },
  };
}

export default function RegionalLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { region: string };
}) {
  const reg = getRegion(params.region);

  return (
    <>
      <StructuredData region={reg} pageType="home" />
      <Navbar region={reg} />
      <main>{children}</main>
      <Footer region={reg} />
    </>
  );
}
