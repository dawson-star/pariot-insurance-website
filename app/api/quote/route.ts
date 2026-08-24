import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, phone, email, insuranceType, businessName, contactMethod, message } = body;

  if (!name || !phone || !email || !insuranceType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Quote form isn't fully configured yet — call (717) 579-1270 instead." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const lines = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    `Insurance type: ${insuranceType}`,
    businessName ? `Business name: ${businessName}` : null,
    `Preferred contact method: ${contactMethod ?? "Not specified"}`,
    message ? `Message: ${message}` : null,
  ].filter(Boolean);

  try {
    await resend.emails.send({
      from: "Patriot Insurance Group Website <onboarding@resend.dev>",
      to: "dawson@patriotinsgroup.com",
      replyTo: email,
      subject: `New quote request: ${insuranceType} — ${name}`,
      text: lines.join("\n"),
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send" },
      { status: 500 }
    );
  }
}
