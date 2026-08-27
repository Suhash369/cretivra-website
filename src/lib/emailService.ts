import nodemailer from "nodemailer";

interface SendQuotationEmailParams {
  leadId: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  country: string;
  manualProcess: string;
  recipientEmail: string;
}

export async function sendQuotationNotificationEmail(data: SendQuotationEmailParams) {
  const {
    leadId,
    name,
    email,
    company,
    phone,
    industry,
    country,
    manualProcess,
    recipientEmail = "suhashsugi369@gmail.com",
  } = data;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
      <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #2563eb;">
        <h2 style="color: #0f172a; margin: 0;">🚀 CRETIVRA AI</h2>
        <p style="color: #2563eb; font-weight: bold; margin: 5px 0 0 0;">New Lead & Quotation Request Received</p>
      </div>

      <div style="padding: 20px 0;">
        <p style="font-size: 14px; color: #475569;"><strong>Reference ID:</strong> <span style="background: #f1f5f9; padding: 3px 8px; border-radius: 4px; font-family: monospace; color: #2563eb;">${leadId}</span></p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Customer Name</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Email Address</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Company</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Phone / WhatsApp</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;">${phone || 'N/A'}</td>
          </tr>
          <tr style="background-color: #f8fafc;">
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Solution Tier / Industry</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #2563eb; font-weight: bold;">${industry || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e2e8f0; font-weight: bold; color: #334155;">Region / Country</td>
            <td style="padding: 10px; border: 1px solid #e2e8f0; color: #0f172a;">${country || 'Global'}</td>
          </tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background-color: #f0f4ff; border-left: 4px solid #2563eb; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #1e3a8a;">Process Requirements / Notes / Video Link:</h4>
          <p style="margin: 0; font-size: 13px; color: #1e293b; white-space: pre-wrap;">${manualProcess}</p>
        </div>
      </div>

      <div style="text-align: center; padding-top: 15px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8;">
        Sent automatically by Cretivra AI Lead Engine • <a href="http://localhost:3001/admin" style="color: #2563eb;">View in Admin Portal</a>
      </div>
    </div>
  `;

  // Check for configured SMTP server settings in environment
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = parseInt(process.env.SMTP_PORT || "587");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Cretivra AI Engine" <${smtpUser}>`,
        to: recipientEmail,
        subject: `🚨 New Lead & Quotation Request (${leadId}) - ${name}`,
        html: htmlContent,
      });

      console.log(`✅ [EMAIL SENT] Automatic notification delivered to ${recipientEmail}`);
      return { success: true, method: "smtp" };
    } catch (err) {
      console.error("❌ Error sending email via SMTP:", err);
    }
  } else {
    console.log(`ℹ️ [SERVER MAIL LOG] Lead ${leadId} ready for ${recipientEmail}. Add SMTP_USER & SMTP_PASS in .env for live automated inbox delivery.`);
  }

  return { success: true, method: "logged" };
}
