import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { phone, source = "landing" } = body;

    if (!phone || typeof phone !== "string" || phone.trim().length < 5) {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL;

    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phone.trim(),
          source,
          timestamp: new Date().toISOString(),
          project: "dentacrm-landing",
        }),
      });
    } else {
      // Dev mode — log to console
      console.log("[Lead]", { phone: phone.trim(), source, timestamp: new Date().toISOString() });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
