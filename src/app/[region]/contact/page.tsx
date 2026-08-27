import React from "react";
import { getRegion } from "@/lib/regions";
import LeadFormSection from "@/components/sections/LeadFormSection";
import StructuredData from "@/components/seo/StructuredData";
import { Mail, Phone, MapPin, Clock, Globe } from "lucide-react";

export default function ContactPage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  return (
    <>
      <StructuredData region={reg} pageType="contact" />
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">
            Direct Communication ({reg.name})
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">
            Let's Engineer Your AI Infrastructure.
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Book a discovery call, request a free AI prototype, or contact our engineering team directly.
          </p>
        </div>
      </section>

      {/* Global Regional Office Hubs / Contact Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-blue-600">
                <Mail className="w-5 h-5" />
                <span className="font-bold text-slate-900 text-sm">Email Inquiries</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">hello@cretivra.com</p>
              <p className="text-[11px] text-slate-500 font-medium">Response SLA within 2 hours</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-blue-600">
                <Clock className="w-5 h-5" />
                <span className="font-bold text-slate-900 text-sm">24/7 Managed Support</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">IST, EST, PST, GMT, GST, SGT</p>
              <p className="text-[11px] text-slate-500 font-medium">Round-the-clock engineer coverage</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-blue-600">
                <MapPin className="w-5 h-5" />
                <span className="font-bold text-slate-900 text-sm">Regional Coverage</span>
              </div>
              <p className="text-xs text-slate-700 font-semibold">{reg.areaServed}</p>
              <p className="text-[11px] text-slate-500 font-medium">Localized billing ({reg.currency.code})</p>
            </div>
          </div>
        </div>
      </section>

      <LeadFormSection region={reg} />
    </>
  );
}
