import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function CaseStudiesSection() {
  const cases = [
    {
      company: "Apex Global Real Estate",
      region: "🇮🇳 India & 🇦🇪 UAE",
      vertical: "Real Estate & Property Development",
      metric: "40% Faster Lead Response",
      subMetric: "3.4x Increase in Site Visits Booked",
      quote: "Cretivra built a WhatsApp sales qualification agent that greets inbound leads instantly, collects buyer criteria, and schedules site visits directly into our CRM. Our lead drop-off dropped to zero.",
      author: "Vikram Malhotra",
      title: "VP of Sales & Growth",
      stars: 5,
    },
    {
      company: "Lumina Commerce",
      region: "🇺🇸 United States",
      vertical: "D2C & E-Commerce Retail",
      metric: "85% Support Tickets Automated",
      subMetric: "Saved $140,000 in Annual Operational Drag",
      quote: "Our customer support was drowning in repetitive order tracking and return queries. Cretivra's multi-agent solution handles 85% of enquiries end-to-end with flawless customer satisfaction scores.",
      author: "Sarah Jenkins",
      title: "Head of Customer Experience",
      stars: 5,
    },
    {
      company: "Nexus Supply Chain",
      region: "🇬🇧 UK & 🇸🇬 Singapore",
      vertical: "Logistics & Manufacturing",
      metric: "3x More Qualified B2B Leads",
      subMetric: "Quote Turnaround Reduced from 24h to 3m",
      quote: "The custom multi-agent system Cretivra delivered ingests complex vendor quote specs and calculates pricing automatically. It changed how we scale across European and APAC markets.",
      author: "David Chen",
      title: "Chief Operating Officer",
      stars: 5,
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Case Studies & Proven Results</h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">Measurable ROI Across Global Markets.</p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">Real performance benchmarks achieved by businesses powered by Cretivra AI agent infrastructure.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, i) => (
            <motion.div
              key={c.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 relative group overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-100 group-hover:text-blue-100 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4 text-xs">
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">{c.region}</span>
                  <span className="text-slate-500 font-mono text-[11px]">{c.vertical}</span>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 mb-6">
                  <p className="text-2xl font-heading font-extrabold text-blue-700">{c.metric}</p>
                  <p className="text-xs text-blue-600 font-semibold mt-0.5">{c.subMetric}</p>
                </div>

                <div className="flex items-center gap-1 text-amber-400 mb-3">
                  {[...Array(c.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">"{c.quote}"</p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900">{c.author}</h4>
                  <p className="text-xs text-slate-500">{c.title} • {c.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
