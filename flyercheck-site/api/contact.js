/**
 * Proxies contact form submissions to Formspree.
 * Set FORMSPREE_ENDPOINT (or VITE_FORMSPREE_ENDPOINT) in Vercel env.
 */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const endpoint =
    (process.env.FORMSPREE_ENDPOINT || process.env.VITE_FORMSPREE_ENDPOINT || "")
      .trim();

  if (!endpoint) {
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

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        source: source || "flyercheck.io contact form",
      }),
    });

    const data = await upstream.json().catch(() => ({}));

    if (!upstream.ok) {
      res.status(upstream.status).json({
        error: data.error || "Failed to send message.",
      });
      return;
    }

    res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact proxy error:", error);
    res.status(500).json({
      error: "Sorry, there was an error sending your message. Please try again or email info@revayahg.com.",
    });
  }
}
