import { Router, Request, Response } from "express";
import Lead from "../models/Lead";
import { memoryLeadsStore } from "../config/db";

const router = Router();

// GET /api/admin/leads - Fetch all captured leads with optional region filtering
router.get("/leads", async (req: Request, res: Response) => {
  try {
    const { region } = req.query;

    let leads = [...memoryLeadsStore];

    if (Lead.db?.readyState === 1) {
      try {
        const dbLeads = await Lead.find().sort({ createdAt: -1 });
        if (dbLeads.length > 0) {
          leads = dbLeads;
        }
      } catch (err) {}
    }

    if (region && typeof region === "string" && region !== "all") {
      leads = leads.filter((l) => l.region === region);
    }

    return res.json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch leads." });
  }
});

// PATCH /api/admin/leads/:id - Update status of a lead
router.patch("/leads/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Update in memory store
    const memIndex = memoryLeadsStore.findIndex((l) => l._id === id || l.id === id);
    if (memIndex !== -1) {
      memoryLeadsStore[memIndex].status = status;
    }

    if (Lead.db?.readyState === 1) {
      await Lead.findByIdAndUpdate(id, { status });
    }

    return res.json({ success: true, message: `Lead ${id} status updated to ${status}` });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update lead status." });
  }
});

// GET /api/admin/stats - Lead conversion analytics
router.get("/stats", async (req: Request, res: Response) => {
  try {
    const total = memoryLeadsStore.length;
    const quotations = memoryLeadsStore.filter((l) => l.leadType === "quotation").length;
    const prototypes = memoryLeadsStore.filter((l) => l.leadType === "prototype").length;

    return res.json({
      success: true,
      stats: {
        totalLeads: total,
        quotationRequests: quotations,
        prototypeRequests: prototypes,
        uptime: "99.98%",
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch stats." });
  }
});

export default router;
