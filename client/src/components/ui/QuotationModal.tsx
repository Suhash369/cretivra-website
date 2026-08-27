import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { RegionConfig } from "@/lib/regions";
import { X, Sparkles, Calculator, ArrowRight, Loader2, Check } from "lucide-react";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  region: RegionConfig;
  defaultTier?: string;
}

const WEB3FORMS_ACCESS_KEY = "90b14128-0d5e-498a-ab1f-7c05ec3c33f5";
const OWNER_EMAIL = "suhashsugi369@gmail.com";

export default function QuotationModal({
  isOpen,
  onClose,
  region,
  defaultTier = "AI Automation Agents",
}: QuotationModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({
    tier: defaultTier,
    volume: "1,000 - 5,000 / month",
    channels: ["WhatsApp", "Web Chat"],
    crm: "Salesforce / HubSpot",
    name: "",
    email: "",
    company: "",
    phone: "",
    requirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");

  const handleChannelToggle = (channel: string) => {
    if (formData.channels.includes(channel)) {
      setFormData({
        ...formData,
        channels: formData.channels.filter((c) => c !== channel),
      });
    } else {
      setFormData({ ...formData, channels: [...formData.channels, channel] });
    }
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.company || !formData.phone) {
      alert("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    try {
      const generatedQuoteId = `CR-${Math.floor(100000 + Math.random() * 900000)}`;

      // Submit to Web3Forms API using the secret key
      const web3FormsPayload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `🚨 NEW CRETIVRA AI QUOTATION REQUEST (${generatedQuoteId}) - ${formData.name}`,
        from_name: "Cretivra AI Quotations",
        to_email: OWNER_EMAIL,
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        solution_tier: formData.tier,
        monthly_volume: formData.volume,
        target_channels: formData.channels.join(", "),
        crm_integration: formData.crm,
        region_market: region.name,
        process_notes_or_video: formData.requirements || "None",
        quote_ref_id: generatedQuoteId,
      };

      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(web3FormsPayload),
      });

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          industry: formData.tier,
          country: region.name,
          manualProcess: `[WEB3FORMS QUOTATION REQUEST] Ref: ${generatedQuoteId} | Tier: ${formData.tier} | Volume: ${formData.volume} | Channels: ${formData.channels.join(", ")} | Integration: ${formData.crm} | Notes: ${formData.requirements}`,
          region: region.code,
          leadType: "quotation",
        }),
      });

      setSubmitted(true);
      setQuoteId(generatedQuoteId);

      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#2563EB", "#06B6D4", "#7C3AED"],
      });

    } catch (err) {
      console.error("Web3Forms submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden p-6 sm:p-8"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-500 text-blue-600">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <h3 className="text-2xl font-heading font-extrabold text-slate-900">
              Quotation Request Received!
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you <span className="font-semibold text-slate-900">{formData.name}</span>. Reference ID: <span className="font-mono bg-slate-100 text-blue-600 px-2 py-0.5 rounded font-bold border border-slate-200">{quoteId}</span>. Your quotation request has been delivered via Web3Forms. Our engineering team will review your requirements and respond to <span className="font-semibold text-blue-600">{formData.email}</span> within 2 hours.
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 transition-opacity"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">
              <Calculator className="w-4 h-4" />
              <span>Interactive AI Quotation Calculator ({region.flag} {region.name})</span>
            </div>

            <h3 className="text-2xl font-heading font-bold text-slate-900 mb-1">
              Request Your Tailored AI Quotation
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Please fill out all details below to receive an official proposal and implementation plan.
            </p>

            {step === 1 ? (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    1. Select AI Solution Tier *
                  </label>
                  <select
                    value={formData.tier}
                    onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs font-medium focus:outline-none focus:border-blue-600"
                  >
                    <option value="AI Audit & Discovery">Tier 1: AI Audit & Discovery</option>
                    <option value="AI Automation Agents">Tier 2: Single-Agent Automation (WhatsApp / Support / Sales)</option>
                    <option value="Custom Multi-Agent Systems">Tier 3: Custom Multi-Agent Enterprise Systems</option>
                    <option value="Managed AI Service SLA">Tier 4: 24/7 Managed AI Service SLA</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    2. Monthly Process / Customer Enquiry Volume *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {["< 1,000", "1,000 - 5,000", "5,000 - 25,000", "25,000+"].map((vol) => (
                      <button
                        type="button"
                        key={vol}
                        onClick={() => setFormData({ ...formData, volume: `${vol} / month` })}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold transition-all border ${
                          formData.volume.startsWith(vol)
                            ? "bg-blue-600 text-white border-blue-600 shadow"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {vol}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    3. Target Deployment Channels *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["WhatsApp Business", "Web Widget", "Salesforce / CRM", "Email Triage", "Custom REST API"].map((ch) => {
                      const selected = formData.channels.includes(ch);
                      return (
                        <button
                          type="button"
                          key={ch}
                          onClick={() => handleChannelToggle(ch)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all border ${
                            selected
                              ? "bg-cyan-50 border-cyan-400 text-cyan-800 font-semibold"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {ch} {selected && "✓"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 shadow-md hover:opacity-95 flex items-center gap-2"
                  >
                    <span>Proceed to Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 mb-2 flex items-center justify-between">
                  <div>
                    <span className="font-semibold">Selected: </span>
                    {formData.tier} • {formData.volume}
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[11px] underline text-blue-700 font-semibold"
                  >
                    Edit Selections
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Wright"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Enterprises"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Specific Process Requirements / Notes / Video Link
                  </label>
                  <textarea
                    rows={2}
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    placeholder="Describe your process requirements or paste a Loom/Drive video link..."
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 shadow-lg hover:opacity-95 flex items-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-cyan-200" />
                        <span>Submit Quotation Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
