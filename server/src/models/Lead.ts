import mongoose, { Schema, Document } from "mongoose";

export interface ILead extends Document {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  website?: string;
  industry?: string;
  country?: string;
  manualProcess: string;
  region: string;
  leadType: "prototype" | "quotation";
  status: "new" | "contacted" | "prototype_sent" | "closed";
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String, default: "" },
  phone: { type: String, default: "" },
  website: { type: String, default: "" },
  industry: { type: String, default: "General Business" },
  country: { type: String, default: "Global" },
  manualProcess: { type: String, required: true },
  region: { type: String, default: "global" },
  leadType: { type: String, enum: ["prototype", "quotation"], default: "prototype" },
  status: { type: String, enum: ["new", "contacted", "prototype_sent", "closed"], default: "new" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model<ILead>("Lead", LeadSchema);
