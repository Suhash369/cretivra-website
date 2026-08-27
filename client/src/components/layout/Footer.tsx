import React from "react";
import { Link } from "react-router-dom";
import CretivraLogo from "@/components/brand/CretivraLogo";
import { RegionConfig } from "@/lib/regions";
import { Linkedin, Twitter, Github } from "lucide-react";

interface FooterProps {
  region: RegionConfig;
}

export default function Footer({ region }: FooterProps) {
  const basePrefix = region.code === "global" ? "" : `/${region.code}`;

  return (
    <footer className="relative z-10 bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          <div className="lg:col-span-2 space-y-4">
            <CretivraLogo size="lg" lightMode={true} useImageOnly={true} />
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              Engineering Intelligence. Building the Future with AI. We architect, deploy, and manage autonomous agent infrastructure for high-growth businesses globally.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 shadow-sm"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to={`${basePrefix}/services`} className="hover:text-blue-600">AI Process Audit</Link></li>
              <li><Link to={`${basePrefix}/services`} className="hover:text-blue-600">AI Automation Agents</Link></li>
              <li><Link to={`${basePrefix}/services`} className="hover:text-blue-600">Custom Multi-Agent Systems</Link></li>
              <li><Link to={`${basePrefix}/services`} className="hover:text-blue-600">Managed AI Services</Link></li>
              <li><Link to={`${basePrefix}/industries`} className="hover:text-blue-600">Industry Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to={`${basePrefix}/about`} className="hover:text-blue-600">About Cretivra</Link></li>
              <li><Link to={`${basePrefix}/pricing`} className="hover:text-blue-600">Get Quotations</Link></li>
              <li><Link to={`${basePrefix}/case-studies`} className="hover:text-blue-600">Case Studies</Link></li>
              <li><Link to={`${basePrefix}/press`} className="hover:text-blue-600">Press & Media Kit</Link></li>
              <li><Link to={`${basePrefix}/blog`} className="hover:text-blue-600">AI Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-slate-900 text-sm uppercase mb-4">Target Markets</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/in" className="flex items-center gap-2 hover:text-blue-600">🇮🇳 India (₹ INR)</Link></li>
              <li><Link to="/us" className="flex items-center gap-2 hover:text-blue-600">🇺🇸 United States ($ USD)</Link></li>
              <li><Link to="/uk" className="flex items-center gap-2 hover:text-blue-600">🇬🇧 United Kingdom (£ GBP)</Link></li>
              <li><Link to="/ae" className="flex items-center gap-2 hover:text-blue-600">🇦🇪 UAE & GCC (AED)</Link></li>
              <li><Link to="/sg" className="flex items-center gap-2 hover:text-blue-600">🇸🇬 Singapore & APAC</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Cretivra Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-800">Privacy Policy</a>
            <a href="#" className="hover:text-slate-800">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
