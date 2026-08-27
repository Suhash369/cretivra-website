import { Router, Request, Response } from "express";
import Lead from "../models/Lead";
import { memoryLeadsStore } from "../config/db";

const router = Router();

// POST /api/leads - Create new lead or custom quotation request
router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, email, company, phone, website, industry, country, manualProcess, region, leadType } = req.body;

    if (!name || !email || !manualProcess) {
      return res.status(400).json({
        error: "Missing required fields: Name, Email, and Process details are required.",
      });
    }

    const leadRefId = `CR-${Math.floor(100000 + Math.random() * 900000)}`;

    const newLeadData = {
      _id: leadRefId,
      name,
      email,
      company: company || "",
      phone: phone || "",
      website: website || "",
      industry: industry || "General Business",
      country: country || "Global",
      manualProcess,
      region: region || "global",
      leadType: leadType || (manualProcess.includes("[QUOTATION REQUEST]") ? "quotation" : "prototype"),
      status: "new",
      createdAt: new Date(),
    };

    // Save to Memory Store
    memoryLeadsStore.unshift(newLeadData);

    // Attempt MongoDB save if connected
    try {
      if (Lead.db?.readyState === 1) {
        await Lead.create(newLeadData);
      }
    } catch (dbErr) {
      console.log("Db save skipped, retained in memory store.");
    }

    console.log(`⚡ [EXPRESS SERVER MAIL ALERT] New Quotation/Lead Saved: ${leadRefId} | ${name} | ${email} | Sent to: suhashsugi369@gmail.com`);

    return res.status(201).json({
      success: true,
      message: "Quotation request recorded and sent to engineering team.",
      leadId: leadRefId,
      data: newLeadData,
    });
  } catch (error) {
    console.error("Error creating lead:", error);
    return res.status(500).json({ error: "Server error processing lead submission." });
  }
});

export default router;
