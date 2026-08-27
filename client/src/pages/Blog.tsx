import React from "react";
import { useParams } from "react-router-dom";
import { getRegion } from "@/lib/regions";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LeadFormSection from "@/components/sections/LeadFormSection";
import { Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const { region } = useParams<{ region?: string }>();
  const reg = getRegion(region);

  const posts = [
    { title: "How AI Agents Replace Manual WhatsApp Lead Qualification in 2026", category: "Sales Automation", readTime: "5 min read", date: "August 24, 2026", excerpt: "Learn how high-growth sales teams use autonomous agents to qualify inbound WhatsApp leads and book meetings in seconds." },
    { title: "Building Multi-Agent Workflows for SME Logistics & Supply Chain", category: "Operations", readTime: "7 min read", date: "August 18, 2026", excerpt: "Step-by-step guide to connecting RAG vector databases with ERP systems for real-time inventory checking." },
    { title: "Why Generic AI Chatbots Fail (And How Agentic Architectures Win)", category: "AI Engineering", readTime: "6 min read", date: "August 10, 2026", excerpt: "Why standard static prompt bots drop high-intent prospects, and why multi-agent swarms deliver 3x ROI." },
  ];

  return (
    <>
      <Navbar region={reg} />
      <main>
        <section className="relative pt-36 pb-16 bg-gradient-to-b from-white via-slate-50 to-white text-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase mb-3 block">AI Implementation Resources ({reg.name})</span>
            <h1 className="text-4xl sm:text-6xl font-heading font-extrabold text-slate-900">Engineering Insights & Articles.</h1>
            <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">Practical guides, architectural patterns, and ROI strategies for deploying autonomous AI agents.</p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <div key={i} className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-semibold border border-blue-200">{post.category}</span>
                      <span className="flex items-center gap-1 font-mono"><Clock className="w-3 h-3" />{post.readTime}</span>
                    </div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{post.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6 font-normal">{post.excerpt}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
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
