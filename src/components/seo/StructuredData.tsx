import React from "react";
import { RegionConfig } from "@/lib/regions";

interface StructuredDataProps {
  region: RegionConfig;
  pageType?: "home" | "services" | "pricing" | "about" | "contact";
}

export default function StructuredData({ region, pageType = "home" }: StructuredDataProps) {
  const baseUrl = `https://cretivra.com${region.code === "global" ? "" : `/${region.code}`}`;

  // WebSite Schema for Google Sitelinks Searchbox
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://cretivra.com/#website",
    url: "https://cretivra.com",
    name: "Cretivra",
    description: "Engineering Autonomous AI Agents & Implementation Partner for Growing Businesses.",
    publisher: {
      "@id": "https://cretivra.com/#organization",
    },
    inLanguage: region.locale,
  };

  // BreadcrumbList Schema for Google Rich Snippets
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
  ];

  if (pageType !== "home") {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: pageType.charAt(0).toUpperCase() + pageType.slice(1),
      item: `${baseUrl}/${pageType}`,
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

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

  // LocalBusiness / ProfessionalService Schema for Geo SEO
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${baseUrl}/#service-provider`,
    name: `Cretivra — AI Automation & Agent Engineering (${region.name})`,
    url: baseUrl,
    image: "https://cretivra.com/og-image.png",
    areaServed: [
      {
        "@type": "Country",
        name: region.areaServed,
      },
      ...region.majorCities.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    priceRange: "$$$",
    description: region.heroSubheadline,
    address: {
      "@type": "PostalAddress",
      addressCountry: region.code.toUpperCase(),
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    knowsAbout: [
      "AI Agent Development",
      "WhatsApp AI Automation",
      "Enterprise Multi-Agent Systems",
      "LLM Fine-Tuning & RAG Vector Memory",
      "AI Managed Infrastructure",
    ],
  };

  // Service Schemas (4 Tiers)
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `AI Audit & Process Discovery - ${region.name}`,
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
      name: `AI Automation (Single-Agent Systems) - ${region.name}`,
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
      name: `Custom AI Agent Systems (Multi-Agent) - ${region.name}`,
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
      name: `Managed AI Service - ${region.name}`,
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
        name: "Can Cretivra work with clients across different cities and regions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes! Cretivra provides remote and on-site AI implementation support across ${region.majorCities.join(", ")}, and internationally with 24/7 managed support.`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
