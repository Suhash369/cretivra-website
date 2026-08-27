import React from "react";
import { RegionConfig } from "@/lib/regions";

interface StructuredDataProps {
  region: RegionConfig;
  pageType?: "home" | "services" | "pricing" | "about" | "contact";
}

export default function StructuredData({ region, pageType = "home" }: StructuredDataProps) {
  const baseUrl = `https://cretivra.com${region.code === "global" ? "" : `/${region.code}`}`;

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://cretivra.com/#organization",
    name: "Cretivra",
    url: "https://cretivra.com",
    logo: "https://cretivra.com/logo.png",
    slogan: "Engineering Intelligence. Building the Future with AI.",
    description:
      "Cretivra is an elite AI implementation and managed service agency engineering autonomous AI agent systems for growing businesses globally.",
    sameAs: [
      "https://linkedin.com/company/cretivra",
      "https://twitter.com/cretivra",
      "https://github.com/cretivra",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-CRETIVRA",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi", "Arabic"],
    },
  };

  // LocalBusiness / ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service-provider`,
    name: `Cretivra ${region.name}`,
    url: baseUrl,
    image: "https://cretivra.com/og-image.png",
    areaServed: region.areaServed,
    priceRange: "$$$",
    description: region.heroSubheadline,
    address: {
      "@type": "PostalAddress",
      addressCountry: region.code.toUpperCase(),
    },
  };

  // Service Schemas (4 Tiers)
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Audit & Process Discovery",
      provider: { "@id": "https://cretivra.com/#organization" },
      description: "In-depth operational flow analysis to identify manual bottlenecks and map ROI-maximized AI agent automation candidate processes.",
      areaServed: region.areaServed,
      offers: {
        "@type": "Offer",
        price: region.pricing.audit,
        priceCurrency: region.currency.code,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Automation (Single-Agent Systems)",
      provider: { "@id": "https://cretivra.com/#organization" },
      description: "Dedicated single-purpose AI agents for WhatsApp sales enquiry qualification, automated customer support, and lead routing.",
      areaServed: region.areaServed,
      offers: {
        "@type": "Offer",
        price: region.pricing.automation,
        priceCurrency: region.currency.code,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Custom AI Agent Systems (Multi-Agent)",
      provider: { "@id": "https://cretivra.com/#organization" },
      description: "Multi-agent autonomous systems fully integrated with ERP, CRM, databases, and custom business logic.",
      areaServed: region.areaServed,
      offers: {
        "@type": "Offer",
        price: region.pricing.custom,
        priceCurrency: region.currency.code,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Managed AI Service",
      provider: { "@id": "https://cretivra.com/#organization" },
      description: "Continuous 24/7 AI agent monitoring, prompt tuning, SLA uptime guarantees, and workflow optimization.",
      areaServed: region.areaServed,
      offers: {
        "@type": "Offer",
        price: region.pricing.managed,
        priceCurrency: region.currency.code,
      },
    },
  ];

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can Cretivra work with international clients remotely?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Cretivra serves clients across India, US, UK, UAE, and Singapore with 24/7 managed support and dedicated regional time-zone coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What time zones does Cretivra support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support round-the-clock SLAs covering IST, EST, PST, GMT, GST, and SGT time zones.",
        },
      },
      {
        "@type": "Question",
        name: "How fast can Cretivra deliver a working AI prototype?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We build and deliver functional AI prototypes within 48 to 72 hours following an initial discovery call.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
      {(pageType === "pricing" || pageType === "home") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
