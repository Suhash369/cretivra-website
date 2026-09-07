import { Metadata } from "next";
import { REGIONS, RegionCode, getRegion } from "./regions";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cretivra.com";

interface BuildPageMetadataOptions {
  title: string;
  description: string;
  path?: string; // e.g. "", "/services", "/pricing"
  regionCode?: string; // "global", "in", "us", etc.
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Builds standard, strictly self-referencing SEO metadata with precise canonical URLs
 * and complete hreflang language alternates for Google Search Console.
 */
export function buildPageMetadata({
  title,
  description,
  path = "",
  regionCode = "global",
  keywords = [],
  ogImage = "/og-image.png",
  noIndex = false,
}: BuildPageMetadataOptions): Metadata {
  const isGlobal = !regionCode || regionCode === "global";
  const normalizedPath = path.startsWith("/") ? path : path ? `/${path}` : "";
  
  // Canonical URL for this specific page
  const canonicalUrl = isGlobal
    ? `${SITE_URL}${normalizedPath}`
    : `${SITE_URL}/${regionCode}${normalizedPath}`;

  // Complete hreflang language alternatives across all supported regions
  const languages: Record<string, string> = {
    "en-in": `${SITE_URL}/in${normalizedPath}`,
    "en-us": `${SITE_URL}/us${normalizedPath}`,
    "en-gb": `${SITE_URL}/uk${normalizedPath}`,
    "en-ae": `${SITE_URL}/ae${normalizedPath}`,
    "en-sg": `${SITE_URL}/sg${normalizedPath}`,
    "x-default": `${SITE_URL}${normalizedPath}`,
  };

  const reg = getRegion(regionCode);
  const defaultKeywords = [
    "AI automation agency",
    "AI agent development company",
    "autonomous AI agents",
    "WhatsApp AI sales agent",
    "enterprise multi-agent systems",
    "RAG vector memory",
    `AI implementation partner ${reg.areaServed}`,
    ...keywords,
  ];

  return {
    title,
    description,
    keywords: defaultKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Cretivra",
      images: [
        {
          url: ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: `${title} - Cretivra`,
        },
      ],
      locale: reg.locale.replace("-", "_"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`],
    },
  };
}
