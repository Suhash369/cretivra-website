import React from "react";
import { getRegion } from "@/lib/regions";
import StructuredData from "@/components/seo/StructuredData";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { Download, Newspaper, ExternalLink, Award } from "lucide-react";

export default function PressPage({ params }: { params: { region: string } }) {
  const reg = getRegion(params.region);

  const pressReleases = [
    {
      date: "August 2026",
      title: "Cretivra Launches Multi-Agent Autonomous Automation Framework for Global SMEs",
      desc: "Introducing end-to-end agentic workflows with 24/7 SLA monitoring and multi-currency pricing across India, US, UK, UAE, and Singapore.",
      tag: "Company Announcement",
    },
    {
      date: "June 2026",
      title: "Cretivra Crosses 450+ Automated Business Processes Landmark",
      desc: "Scaling operational efficiency for Real Estate, D2C, Logistics, and Enterprise client networks globally.",
      tag: "Milestone",
    },
  ];

  return (
    <>
      <StructuredData region={reg} pageType="about" />
      <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">
            Press & Media Room
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">
            Cretivra Newsroom & Assets.
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
            Official announcements, press kit assets, brand guidelines, and media contact info.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-blue-50 text-blue-600">
                <Download className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg text-slate-900">Download Cretivra Brand Assets</h3>
                <p className="text-xs text-slate-600 font-medium">High-resolution logo SVGs, PNGs, brand color guidelines, and founder bio.</p>
              </div>
            </div>
            <a
              href="#"
              className="px-6 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md hover:opacity-95 transition-opacity whitespace-nowrap"
            >
              Download Press Kit (ZIP)
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-6">
            Recent Announcements
          </h2>
          {pressReleases.map((pr, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 transition-colors">
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-mono">{pr.date}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-bold">{pr.tag}</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">{pr.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <LeadFormSection region={reg} />
    </>
  );
}
