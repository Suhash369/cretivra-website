import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductLadderSection from "@/components/sections/ProductLadderSection";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { HelpCircle } from "lucide-react";

export default function Pricing() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  const faqs = [
    { q: "How does requesting a Custom Quotation work?", a: "Click 'Get Custom Quotation' or fill out our interactive calculator. Our engineering team reviews your volume, channels, and security SLAs to deliver an official proposal within 2 hours." },
    { q: "Can Cretivra work with international clients remotely?", a: "Yes! Cretivra engineering teams operate round-the-clock across IST, EST, PST, GMT, GST, and SGT time zones serving clients globally." },
    { q: "How does the Free AI Prototype work?", a: "You submit your biggest manual process. Our team builds a functional mini demo agent within 48 hours for you to test live before signing any contract." },
    { q: "What CRM and software systems do Cretivra agents connect to?", a: "We natively integrate with WhatsApp Business API, Salesforce, HubSpot, Zendesk, Zoho, PostgreSQL, SAP, Shopify, and custom REST APIs." },
  ];

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">Custom Quotations & Proposals ({reg.name})</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">Tailored AI Implementation Pricing.</h1>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Get an official MNC-grade proposal tailored specifically to your company's process volume and integration needs.</p>
          </div>
        </section>

        <ProductLadderSection region={reg} />

        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-2">Got Questions?</h2>
              <p className="text-3xl font-heading font-bold text-slate-900">Frequently Asked Questions</p>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                  <div className="flex items-center gap-3 text-slate-900 font-heading font-bold text-base">
                    <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed font-medium">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <LeadFormSection region={reg} />
      </main>
      <Footer region={reg} />
    </>
  );
}
