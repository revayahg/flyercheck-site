/**
 * Sends contact form submissions via Resend.
 * Set RESEND_API_KEY in Vercel env (server-only).
 * From address must be on a verified revayahg.com domain in Resend.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = (process.env.RESEND_API_KEY || "").trim();

  if (!apiKey) {
    res.status(503).json({
      error:
        "Contact form is not configured on the server. Email info@revayahg.com.",
    });
    return;
  }

  const { name, email, subject, message, source } = req.body || {};

  if (!name || !email || !subject || !message) {
    res.status(400).json({ error: "Missing required fields." });
    return;
  }

  const fromAddress =
    (process.env.RESEND_FROM_EMAIL || "").trim() ||
    "FlyerCheck <contact@revayahg.com>";
  const toAddress =
    (process.env.RESEND_TO_EMAIL || "").trim() || "info@revayahg.com";
  const sourceLabel = source || "flyercheck.io contact form";

  try {
    const upstream = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [toAddress],
        reply_to: email,
        subject: `[FlyerCheck] ${subject}`,
        text: [
          `New contact form submission (${sourceLabel})`,
          "",
          `Name: ${name}`,
          `Email: ${email}`,
          `Subject: ${subject}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      console.error("Resend API error:", upstream.status, data);
      res.status(500).json({
        error:
          "Sorry, there was an error sending your message. Please try again or email info@revayahg.com.",
      });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact send error:", error);
    res.status(500).json({
      error:
        "Sorry, there was an error sending your message. Please try again or email info@revayahg.com.",
    });
  }
}
