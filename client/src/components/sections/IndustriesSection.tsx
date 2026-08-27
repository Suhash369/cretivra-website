import React from "react";
import { motion } from "framer-motion";
import { Building2, ShoppingBag, Factory, Stethoscope, GraduationCap, Truck, Landmark, Scale, ArrowUpRight } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    { icon: Building2, name: "Real Estate", example: "AI agent that qualifies property enquiries and books site visits automatically.", color: "bg-blue-50 text-blue-600 border-blue-200" },
    { icon: ShoppingBag, name: "D2C / E-Commerce", example: "WhatsApp sales assistant that handles order tracking, cart recovery, and recommendations.", color: "bg-purple-50 text-purple-600 border-purple-200" },
    { icon: Factory, name: "Manufacturing", example: "Supply chain agent that ingests vendor quotes, checks ERP stock, and generates PO drafts.", color: "bg-amber-50 text-amber-600 border-amber-200" },
    { icon: Stethoscope, name: "Healthcare", example: "Patient triage agent that collects symptoms, schedules appointments, and sends prep info.", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
    { icon: GraduationCap, name: "Education", example: "Admissions counsellor AI that answers course queries, evaluates eligibility, and collects lead info.", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
    { icon: Truck, name: "Logistics", example: "Freight bot that provides live shipment updates, collects customs documents, and routes drivers.", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
    { icon: Landmark, name: "Finance", example: "Loan pre-qualification agent that verifies applicant docs, calculates eligibility, and alerts underwriters.", color: "bg-teal-50 text-teal-600 border-teal-200" },
    { icon: Scale, name: "Legal", example: "Intake AI agent that screens prospective clients, categorizes cases, and schedules consultations.", color: "bg-violet-50 text-violet-600 border-violet-200" },
  ];

  return (
    <section id="industries" className="relative z-10 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3">Industry Specializations</h2>
          <p className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900">Tailored AI Agents Built for Your Sector.</p>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">Hover over any vertical to see how Cretivra AI agents replace specific manual business processes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.04 }}
                className="group relative p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden cursor-pointer"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-xl border ${ind.color} group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{ind.name}</h3>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{ind.example}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
