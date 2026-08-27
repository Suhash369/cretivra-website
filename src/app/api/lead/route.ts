import { NextResponse } from "next/server";
import { sendQuotationNotificationEmail } from "@/lib/emailService";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, website, industry, country, manualProcess, region } = body;

    // Validate required fields
    if (!name || !email || !manualProcess) {
      return NextResponse.json(
        { error: "Missing required fields: Name, Email, and Process details are required." },
        { status: 400 }
      );
    }

    const leadId = `CR-${Math.floor(100000 + Math.random() * 900000)}`;

    // Console log lead payload for server logging
    console.log("------------------------------------------");
    console.log(`⚡ CRETIVRA NEW LEAD RECEIVED: ${leadId}`);
    console.log(`Name: ${name}`);
    console.log(`Company: ${company || 'N/A'}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone || 'N/A'}`);
    console.log(`Website: ${website || 'N/A'}`);
    console.log(`Industry / Solution: ${industry || 'N/A'}`);
    console.log(`Country: ${country || 'N/A'}`);
    console.log(`Region Tag: ${region || 'global'}`);
    console.log(`Bottleneck & Notes: ${manualProcess}`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log("------------------------------------------");

    // Automatically send email notification to owner (suhashsugi369@gmail.com)
    await sendQuotationNotificationEmail({
      leadId,
      name,
      email,
      company: company || "",
      phone: phone || "",
      industry: industry || "General Business",
      country: country || "Global",
      manualProcess,
      recipientEmail: "suhashsugi369@gmail.com",
    });

    // Return success response to client
    return NextResponse.json({
      success: true,
      message: "Quotation request successfully received! Your details have been recorded and sent to engineering team.",
      leadId,
    });
  } catch (error) {
    console.error("Error processing lead:", error);
    return NextResponse.json(
      { error: "Internal server error processing lead form." },
      { status: 500 }
    );
  }
}
