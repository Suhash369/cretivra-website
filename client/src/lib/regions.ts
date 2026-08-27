export type RegionCode = 'in' | 'us' | 'uk' | 'ae' | 'sg' | 'global';

export interface RegionConfig {
  code: RegionCode;
  name: string;
  flag: string;
  currency: {
    code: string;
    symbol: string;
    rateVsUsd: number;
    position: 'prefix' | 'suffix';
  };
  locale: string;
  hreflang: string;
  areaServed: string;
  heroHeadline: string;
  heroSubheadline: string;
  whatsappFocus: boolean;
}

export const REGIONS: Record<RegionCode, RegionConfig> = {
  global: {
    code: 'global',
    name: 'Global / International',
    flag: '🌐',
    currency: { code: 'USD', symbol: '$', rateVsUsd: 1, position: 'prefix' },
    locale: 'en',
    hreflang: 'x-default',
    areaServed: 'Worldwide',
    heroHeadline: 'Engineering Intelligence. Building the Future with AI.',
    heroSubheadline: 'We build and manage AI agents that replace manual business processes — sales enquiries, support, lead qualification — for growing companies worldwide.',
    whatsappFocus: false,
  },
  in: {
    code: 'in',
    name: 'India',
    flag: '🇮🇳',
    currency: { code: 'INR', symbol: '₹', rateVsUsd: 83, position: 'prefix' },
    locale: 'en-IN',
    hreflang: 'en-in',
    areaServed: 'India',
    heroHeadline: 'Automate Business Enquiries & Sales with Custom AI Agents.',
    heroSubheadline: 'Replace slow manual WhatsApp & email follow-ups with intelligent 24/7 AI agents designed for fast-growing Indian SMEs and enterprises.',
    whatsappFocus: true,
  },
  us: {
    code: 'us',
    name: 'United States',
    flag: '🇺🇸',
    currency: { code: 'USD', symbol: '$', rateVsUsd: 1, position: 'prefix' },
    locale: 'en-US',
    hreflang: 'en-us',
    areaServed: 'United States',
    heroHeadline: 'Autonomous AI Agents for US High-Growth Mid-Market Teams.',
    heroSubheadline: 'Eliminate operational drag. Deploy custom multi-agent workflows integrated with Salesforce, HubSpot, and internal databases in days.',
    whatsappFocus: false,
  },
  uk: {
    code: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: { code: 'GBP', symbol: '£', rateVsUsd: 0.79, position: 'prefix' },
    locale: 'en-GB',
    hreflang: 'en-gb',
    areaServed: 'United Kingdom',
    heroHeadline: 'Enterprise-Grade AI Implementation & Managed Services UK.',
    heroSubheadline: 'Secure, GDPR-compliant AI agent architectures that automate customer support, lead intake, and complex workflow execution.',
    whatsappFocus: false,
  },
  ae: {
    code: 'ae',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: { code: 'AED', symbol: 'AED ', rateVsUsd: 3.67, position: 'prefix' },
    locale: 'en-AE',
    hreflang: 'en-ae',
    areaServed: 'United Arab Emirates & GCC',
    heroHeadline: 'AI Implementation Partner for GCC & UAE Leaders.',
    heroSubheadline: 'Scale operations across Dubai, Abu Dhabi, and the region with multi-lingual AI agents operating across WhatsApp, web, and ERP systems.',
    whatsappFocus: true,
  },
  sg: {
    code: 'sg',
    name: 'Singapore',
    flag: '🇸🇬',
    currency: { code: 'USD', symbol: '$', rateVsUsd: 1, position: 'prefix' },
    locale: 'en-SG',
    hreflang: 'en-sg',
    areaServed: 'Singapore & APAC',
    heroHeadline: 'Agentic AI Automation for APAC Enterprises.',
    heroSubheadline: 'Drive 24/7 responsiveness across regional sales hubs and supply chains with managed autonomous AI agent infrastructure.',
    whatsappFocus: true,
  },
};

export function getRegion(code?: string): RegionConfig {
  if (!code || !(code in REGIONS)) {
    return REGIONS.global;
  }
  return REGIONS[code as RegionCode];
}
