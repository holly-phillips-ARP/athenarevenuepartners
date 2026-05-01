import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface Payload {
  name: string;
  email: string;
  company?: string;
  role?: string;
  arr_stage?: string;
  challenge?: string;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY not configured");

    const body = (await req.json()) as Payload;
    if (!body?.name || !body?.email) {
      return new Response(JSON.stringify({ error: "name and email are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const rows = [
      ["Name", body.name],
      ["Email", body.email],
      ["Company", body.company || "—"],
      ["Role", body.role || "—"],
      ["Current ARR / stage", body.arr_stage || "—"],
      ["Top revenue challenge", body.challenge || "—"],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:600;vertical-align:top;">${escape(
            k
          )}</td><td style="padding:8px 12px;border-bottom:1px solid #eee;white-space:pre-wrap;">${escape(
            v
          )}</td></tr>`
      )
      .join("");

    const html = `
      <div style="font-family:system-ui,-apple-system,sans-serif;color:#111;">
        <h2 style="margin:0 0 16px;">New Revenue Diagnostic Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">${rows}</table>
      </div>
    `;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Athena Revenue Partners <onboarding@resend.dev>",
        to: ["hello@athenarevenuepartners.com"],
        reply_to: body.email,
        subject: `New diagnostic request — ${body.name}${body.company ? ` (${body.company})` : ""}`,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error("Resend error", data);
      return new Response(JSON.stringify({ error: data }), {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error(e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
