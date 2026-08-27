"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RegionConfig } from "@/lib/regions";
import confetti from "canvas-confetti";
import { Sparkles, CheckCircle2, ShieldCheck, Loader2, ArrowRight, Video, MessageSquare, Upload } from "lucide-react";

interface LeadFormProps {
  region: RegionConfig;
}

export default function LeadFormSection({ region }: LeadFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    industry: "Real Estate",
    country: region.name,
    manualProcess: "",
    videoLink: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const fullProcessDescription = formData.videoLink
        ? `${formData.manualProcess}\n\n🎥 Attached Process Video/Link: ${formData.videoLink}`
        : formData.manualProcess;

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          manualProcess: fullProcessDescription,
          region: region.code,
          leadType: "prototype",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setLeadId(data.leadId);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563EB", "#06B6D4", "#7C3AED"],
        });
      } else {
        setErrorMessage(data.error || "Failed to submit request.");
      }
    } catch (err) {
      setErrorMessage("Network error connecting to API server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="lead-form" className="relative z-10 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Zero Risk • Free 48-Hour AI Prototype</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-slate-900 leading-tight">
              Send Your Inquiry or Process Video.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Tell us your manual process bottleneck or attach a quick video recording (Loom, Google Drive, MP4). Our engineering team builds a functional AI agent prototype for your business within 48 hours.
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Working prototype delivered in 48 hours</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <Video className="w-5 h-5 text-blue-600 shrink-0" />
                <span>Upload or share video walkthrough links of your workflow</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                <span>View submitted leads anytime in your private Admin Dashboard</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-blue-600 shrink-0" />
              <span>All submitted customer video files & messages are encrypted & protected under NDA.</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-200/60 relative overflow-hidden">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-500 text-blue-600">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-heading font-extrabold text-slate-900">Message & Video Received!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                      Thank you <span className="font-semibold text-blue-600">{formData.name}</span>. Reference ID: <span className="font-mono text-slate-900 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{leadId}</span>. Your request and video link have been recorded into your Admin Portal.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:bg-slate-200">
                      Submit Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="font-heading font-bold text-xl text-slate-900">Send Message or Video Explanation</h3>
                      <p className="text-xs text-slate-500 mt-1">Fill in details below. You can also paste a Loom or Drive video link explaining your process.</p>
                    </div>

                    {errorMessage && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">{errorMessage}</div>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                        <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                        <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="rahul@company.com" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                        <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corp" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Website URL</label>
                        <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://company.com" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp</label>
                        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Describe your manual process or requirement *</label>
                      <textarea name="manualProcess" required rows={3} value={formData.manualProcess} onChange={handleChange} placeholder="Describe the manual work or questions you want automated..." className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600" />
                    </div>

                    {/* Video Attachment / URL Field */}
                    <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                          <Video className="w-4 h-4 text-blue-600" />
                          <span>Attach Video Link / Walkthrough (Optional)</span>
                        </label>
                        <span className="text-[10px] text-blue-600 font-semibold">Loom, Drive, MP4 URL</span>
                      </div>
                      <input
                        type="url"
                        name="videoLink"
                        value={formData.videoLink}
                        onChange={handleChange}
                        placeholder="e.g. https://www.loom.com/share/... or https://drive.google.com/..."
                        className="w-full px-3.5 py-2 rounded-xl bg-white border border-blue-200 text-slate-900 text-xs focus:outline-none focus:border-blue-600"
                      />
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 hover:opacity-95 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-50">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-cyan-100" />
                          <span>Send Message & Request Prototype</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
