import React, { useState, useEffect } from "react";
import { ShieldCheck, RefreshCw, Filter, Search, Clock, Mail, Building } from "lucide-react";

interface LeadItem {
  _id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  industry?: string;
  country?: string;
  manualProcess: string;
  region: string;
  leadType: string;
  status: "new" | "contacted" | "prototype_sent" | "closed";
  createdAt: string;
}

export default function AdminPortal() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterRegion, setFilterRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const url = filterRegion === "all" ? "/api/admin/leads" : `/api/admin/leads?region=${filterRegion}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.ok && data.leads) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [filterRegion]);

  const handleUpdateStatus = async (id: string, status: string) => {
    try {
      await fetch(`/api/admin/leads/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      fetchLeads();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredLeads = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (l.company && l.company.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b border-slate-200 mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700 mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Cretivra Lead Management Portal</span>
            </div>
            <h1 className="text-3xl font-heading font-extrabold text-slate-900">
              Lead & Quotation Command Center
            </h1>
          </div>

          <button
            onClick={fetchLeads}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:border-blue-500 shadow-sm"
          >
            <RefreshCw className={`w-4 h-4 text-blue-600 ${loading ? "animate-spin" : ""}`} />
            <span>Refresh Data</span>
          </button>
        </div>

        {/* Filters & Search Bar */}
        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads by name, email, or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600 w-full sm:w-80"
            />
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
            <Filter className="w-4 h-4 text-blue-600" />
            <span>Filter Region:</span>
            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600 font-semibold"
            >
              <option value="all">All Global Regions ({leads.length})</option>
              <option value="in">🇮🇳 India</option>
              <option value="us">🇺🇸 United States</option>
              <option value="uk">🇬🇧 United Kingdom</option>
              <option value="ae">🇦🇪 UAE</option>
              <option value="sg">🇸🇬 Singapore</option>
              <option value="global">🌐 Global Default</option>
            </select>
          </div>
        </div>

        {/* Leads Table Card */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-md overflow-hidden">
          {filteredLeads.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Clock className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="font-heading font-bold text-slate-700">No leads captured yet.</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Submit a free AI prototype form or custom quotation request on the main website to see live entries populate here!
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                  <tr>
                    <th className="px-6 py-4">Ref ID & Date</th>
                    <th className="px-6 py-4">Prospect Info</th>
                    <th className="px-6 py-4">Region / Market</th>
                    <th className="px-6 py-4">Type</th>
                    <th className="px-6 py-4">Process Bottleneck</th>
                    <th className="px-6 py-4">Status & Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="font-mono font-bold text-blue-600">{lead._id}</div>
                        <div className="text-[10px] text-slate-400">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="font-bold text-slate-900">{lead.name}</div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-1">
                          <Mail className="w-3 h-3 text-slate-400" />
                          <span>{lead.email}</span>
                        </div>
                        {lead.company && (
                          <div className="text-[11px] text-slate-500 flex items-center gap-1">
                            <Building className="w-3 h-3 text-slate-400" />
                            <span>{lead.company}</span>
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-800 font-semibold border border-slate-200 uppercase">
                          {lead.region}
                        </span>
                        <div className="text-[10px] text-slate-400 mt-1">{lead.country}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                            lead.leadType === "quotation"
                              ? "bg-purple-50 text-purple-700 border border-purple-200"
                              : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                        >
                          {lead.leadType}
                        </span>
                      </td>

                      <td className="px-6 py-4 max-w-xs">
                        <p className="text-slate-700 line-clamp-2 text-[11px] leading-relaxed">
                          {lead.manualProcess}
                        </p>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead._id, e.target.value)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border focus:outline-none ${
                            lead.status === "new"
                              ? "bg-amber-50 text-amber-800 border-amber-300"
                              : lead.status === "contacted"
                              ? "bg-blue-50 text-blue-800 border-blue-300"
                              : lead.status === "prototype_sent"
                              ? "bg-cyan-50 text-cyan-800 border-cyan-300"
                              : "bg-emerald-50 text-emerald-800 border-emerald-300"
                          }`}
                        >
                          <option value="new">🟡 New</option>
                          <option value="contacted">🔵 Contacted</option>
                          <option value="prototype_sent">🌐 Prototype Sent</option>
                          <option value="closed">🟢 Closed Deal</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
