"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { REGIONS, RegionCode, RegionConfig } from "@/lib/regions";
import { Globe, ChevronDown, Check } from "lucide-react";

interface RegionSelectorProps {
  currentRegion: RegionConfig;
}

export default function RegionSelector({ currentRegion }: RegionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleSelectRegion = (code: RegionCode) => {
    setIsOpen(false);
    
    const segments = pathname.split("/").filter(Boolean);
    let subPath = "";
    if (segments.length > 0 && segments[0] in REGIONS) {
      subPath = "/" + segments.slice(1).join("/");
    } else {
      subPath = pathname;
    }

    const targetUrl = code === "global" ? subPath || "/" : `/${code}${subPath === "/" ? "" : subPath}`;
    router.push(targetUrl);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-semibold hover:border-blue-500 hover:bg-slate-50 transition-all shadow-sm"
        aria-label="Select Region"
      >
        <span className="text-sm">{currentRegion.flag}</span>
        <span>{currentRegion.name}</span>
        <span className="text-slate-400 font-mono text-[10px]">({currentRegion.currency.symbol})</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 z-50 py-2">
            <div className="px-3 py-1.5 border-b border-slate-100 mb-1">
              <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
                Select Your Regional Hub
              </p>
            </div>
            {Object.values(REGIONS).map((reg) => (
              <button
                key={reg.code}
                onClick={() => handleSelectRegion(reg.code as RegionCode)}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                  currentRegion.code === reg.code
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{reg.flag}</span>
                  <div>
                    <div className="font-semibold text-slate-900">{reg.name}</div>
                    <div className="text-[10px] text-slate-500">
                      Prices in {reg.currency.code} ({reg.currency.symbol})
                    </div>
                  </div>
                </div>
                {currentRegion.code === reg.code && <Check className="w-4 h-4 text-blue-600" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
