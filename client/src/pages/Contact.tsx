import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">Direct Communication ({reg.name})</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">Let's Engineer Your AI Infrastructure.</h1>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Book a discovery call, request a free AI prototype, or contact our engineering team directly.</p>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-blue-600"><Mail className="w-5 h-5" /><span className="font-bold text-slate-900 text-sm">Email Inquiries</span></div>
                <p className="text-xs text-slate-700 font-semibold">hello@cretivra.com</p>
                <p className="text-[11px] text-slate-500 font-medium">Response SLA within 2 hours</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-blue-600"><Clock className="w-5 h-5" /><span className="font-bold text-slate-900 text-sm">24/7 Managed Support</span></div>
                <p className="text-xs text-slate-700 font-semibold">IST, EST, PST, GMT, GST, SGT</p>
                <p className="text-[11px] text-slate-500 font-medium">Round-the-clock engineer coverage</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3">
                <div className="flex items-center gap-3 text-blue-600"><MapPin className="w-5 h-5" /><span className="font-bold text-slate-900 text-sm">Regional Coverage</span></div>
                <p className="text-xs text-slate-700 font-semibold">{reg.areaServed}</p>
                <p className="text-[11px] text-slate-500 font-medium">Localized billing ({reg.currency.code})</p>
              </div>
            </div>
          </div>
        </section>

        <LeadFormSection region={reg} />
      </main>
      <Footer region={reg} />
    </>
  );
}
