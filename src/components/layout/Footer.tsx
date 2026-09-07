import React from "react";
import Link from "next/link";
import CretivraLogo from "@/components/brand/CretivraLogo";
import { RegionConfig } from "@/lib/regions";
import { Linkedin, Twitter, Github } from "lucide-react";

interface FooterProps {
  region: RegionConfig;
}

export default function Footer({ region }: FooterProps) {
  const basePrefix = region.code === "global" ? "" : `/${region.code}`;

  return (
    <footer className="relative z-10 bg-slate-900 border-t border-slate-800 text-slate-400 pt-16 pb-12 overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-4">
            <CretivraLogo size="lg" lightMode={false} useImageOnly={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm font-normal">
              Engineering Intelligence. Building the Future with AI. We architect, deploy, and manage autonomous agent infrastructure for high-growth businesses globally.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500 hover:bg-slate-750 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500 hover:bg-slate-750 transition-all shadow-sm"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-300 hover:border-cyan-500 hover:bg-slate-750 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={`${basePrefix}/services`} className="text-slate-400 hover:text-cyan-400 transition-colors">AI Process Audit</Link></li>
              <li><Link href={`${basePrefix}/services`} className="text-slate-400 hover:text-cyan-400 transition-colors">AI Automation Agents</Link></li>
              <li><Link href={`${basePrefix}/services`} className="text-slate-400 hover:text-cyan-400 transition-colors">Custom Multi-Agent Systems</Link></li>
              <li><Link href={`${basePrefix}/services`} className="text-slate-400 hover:text-cyan-400 transition-colors">Managed AI Services</Link></li>
              <li><Link href={`${basePrefix}/industries`} className="text-slate-400 hover:text-cyan-400 transition-colors">Industry Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href={`${basePrefix}/about`} className="text-slate-400 hover:text-cyan-400 transition-colors">About Cretivra</Link></li>
              <li><Link href={`${basePrefix}/pricing`} className="text-slate-400 hover:text-cyan-400 transition-colors">Get Quotations</Link></li>
              <li><Link href={`${basePrefix}/case-studies`} className="text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link href={`${basePrefix}/press`} className="text-slate-400 hover:text-cyan-400 transition-colors">Press & Media Kit</Link></li>
              <li><Link href={`${basePrefix}/blog`} className="text-slate-400 hover:text-cyan-400 transition-colors">AI Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">Target Markets</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/in" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">🇮🇳 India (₹ INR)</Link></li>
              <li><Link href="/us" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">🇺🇸 United States ($ USD)</Link></li>
              <li><Link href="/uk" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">🇬🇧 United Kingdom (£ GBP)</Link></li>
              <li><Link href="/ae" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">🇦🇪 UAE & GCC (AED)</Link></li>
              <li><Link href="/sg" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors">🇸🇬 Singapore & APAC</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Cretivra Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
