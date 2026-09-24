import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ContactFormSchema,
  interestLabels,
} from "@/lib/validations/contact";
import { rateLimit } from "@/lib/rate-limit";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function generateEmailHtml({
  name,
  email,
  phone,
  interest,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "Not provided";
  const safeInterest = escapeHtml(
    interestLabels[interest as keyof typeof interestLabels] || interest
  );
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");
  const formattedDate = new Date().toLocaleString("en-US", {
    timeZone: "Africa/Addis_Ababa",
    dateStyle: "full",
    timeStyle: "short",
  });

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Property Inquiry - Merit Real Estate</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f4f7; color: #1f2937; }
    .container { max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); border: 1px solid #e5e7eb; }
    .header { background-color: #002D20; padding: 32px 24px; text-align: center; border-bottom: 3px solid #C6A87D; }
    .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { color: #C6A87D; margin: 6px 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px; }
    .content { padding: 32px 28px; }
    .badge { display: inline-block; background-color: #fef3c7; color: #92400e; padding: 4px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; text-transform: uppercase; margin-bottom: 20px; }
    .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .info-table td { padding: 12px 0; border-bottom: 1px solid #f3f4f6; font-size: 14px; vertical-align: top; }
    .info-label { width: 140px; color: #6b7280; font-weight: 600; }
    .info-value { color: #111827; font-weight: 500; }
    .message-box { background-color: #f9fafb; border-left: 4px solid #C6A87D; padding: 16px 20px; border-radius: 4px; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #374151; }
    .action-btn { display: inline-block; background-color: #C6A87D; color: #002D20; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; font-size: 14px; margin-top: 24px; }
    .footer { background-color: #f9fafb; padding: 20px 24px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #f3f4f6; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>MERIT REAL ESTATE</h1>
      <p>New Website Inquiry Received</p>
    </div>
    
    <div class="content">
      <span class="badge">Inquiry Notification</span>
      <h2 style="font-size: 18px; margin: 0 0 16px 0; color: #111827;">Lead Contact Information</h2>
      
      <table class="info-table">
        <tr>
          <td class="info-label">Full Name</td>
          <td class="info-value"><strong>${safeName}</strong></td>
        </tr>
        <tr>
          <td class="info-label">Email Address</td>
          <td class="info-value"><a href="mailto:${safeEmail}" style="color: #002D20; text-decoration: underline;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td class="info-label">Phone Number</td>
          <td class="info-value">${safePhone}</td>
        </tr>
        <tr>
          <td class="info-label">Interested In</td>
          <td class="info-value" style="color: #002D20; font-weight: 600;">${safeInterest}</td>
        </tr>
        <tr>
          <td class="info-label">Received Date</td>
          <td class="info-value">${formattedDate} (EAT)</td>
        </tr>
      </table>

      <h3 style="font-size: 15px; margin: 20px 0 8px 0; color: #111827;">Inquiry Message:</h3>
      <div class="message-box">
        ${safeMessage}
      </div>

      <div style="text-align: center;">
        <a href="mailto:${safeEmail}?subject=Regarding your Merit Real Estate inquiry (${safeInterest})" class="action-btn">
          Reply Directly to ${safeName}
        </a>
      </div>
    </div>

    <div class="footer">
      <p style="margin: 0;">Sent automatically from the Merit Real Estate official website contact portal.</p>
      <p style="margin: 4px 0 0;">Piassa & Teklehaymanot Developments, Addis Ababa, Ethiopia</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "anonymous-client";

    const rateResult = rateLimit(ip, 5, 10 * 60 * 1000);

    if (!rateResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateResult.reset - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    if (body._gotcha) {
      return NextResponse.json(
        { success: true, message: "Your message has been sent successfully." },
        { status: 200 }
      );
    }

    const validation = ContactFormSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const firstErrorMessage =
        Object.values(fieldErrors).flat()[0] || "Invalid form submission.";

      return NextResponse.json(
        {
          success: false,
          error: firstErrorMessage,
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const { name, email, phone, interest, message } = validation.data;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_FORM_TO_EMAIL || "contact@meritproperties.et";
    const fromEmail =
      process.env.CONTACT_FORM_FROM_EMAIL || "Merit Real Estate <onboarding@resend.dev>";

    if (!apiKey || apiKey.includes("your_api_key")) {
      console.warn("[Contact Form] RESEND_API_KEY not configured. Simulating dispatch:\n", {
        to: toEmail,
        from: fromEmail,
        lead: { name, email, phone, interest },
        message,
      });

      return NextResponse.json(
        {
          success: true,
          simulated: true,
          message:
            "Your message has been received! Our sales team will get back to you shortly.",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(apiKey);
    const subjectInterest =
      interestLabels[interest as keyof typeof interestLabels] || interest;

    const emailResponse = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New Lead: ${name} (${subjectInterest})`,
      html: generateEmailHtml({ name, email, phone, interest, message }),
      text: `New Lead from Merit Real Estate Website:
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Interested In: ${subjectInterest}

Message:
${message}
`,
    });

    let finalResponse = emailResponse;

    if (emailResponse.error) {
      console.error("[Resend Error]:", emailResponse.error);

      const errorMsg = emailResponse.error.message || "";
      const matchOwner = errorMsg.match(/own email address \(([^)]+)\)/);
      if (matchOwner && matchOwner[1] && matchOwner[1] !== toEmail) {
        const ownerEmail = matchOwner[1];
        const retryResponse = await resend.emails.send({
          from: fromEmail,
          to: [ownerEmail],
          replyTo: email,
          subject: `[Merit Inquiry] ${name} - ${subjectInterest}`,
          html: generateEmailHtml({ name, email, phone, interest, message }),
          text: `New Lead from Merit Real Estate Website:
Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Interested In: ${subjectInterest}

Message:
${message}
`,
        });

        if (!retryResponse.error) {
          finalResponse = retryResponse;
        } else {
          console.error("[Resend Retry Error]:", retryResponse.error);
        }
      }
    }

    if (finalResponse.error) {
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send message via email provider. Please contact us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully. Our team will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Exception]:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
