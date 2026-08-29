/** Canonical FAQ content — keep FAQPage and JSON-LD in sync with this file. */

export const faqItems = [
  {
    q: "What does FlyerCheck analyze?",
    a: "FlyerCheck reviews your flyer for missing event details, readability issues, weak calls to action, visual hierarchy problems, and branding inconsistencies. It focuses on the things that affect whether someone decides to attend — not abstract design scores.",
  },
  {
    q: "Is FlyerCheck free?",
    a: "Yes. The core analysis tool is completely free to use with no account or signup required. Upload your flyer and get results immediately.",
  },
  {
    q: "What file formats does FlyerCheck accept?",
    a: "FlyerCheck accepts PNG, JPEG, and WEBP files. For best results, upload the version you plan to post — the tool analyzes what your audience will actually see.",
  },
  {
    q: "Who is FlyerCheck designed for?",
    a: "FlyerCheck is built for anyone producing live experiences: event promoters, hospitality teams, venue marketing departments, festival organizers, brand activation teams, and community event producers. If you send a flyer before an event, FlyerCheck is for you.",
  },
  {
    q: "Does FlyerCheck replace a graphic designer?",
    a: "No. FlyerCheck is a pre-publish review tool — a second set of eyes before you go live. It identifies specific issues but doesn't redesign anything. Think of it as a checklist run, not creative direction.",
  },
  {
    q: "How long does an analysis take?",
    a: "Most analyses complete in under 30 seconds. The tool sends your flyer to an AI model that reviews the content and returns a structured report of findings.",
  },
  {
    q: "Does FlyerCheck store my flyer?",
    a: "No. Uploaded flyers are analyzed and not stored on FlyerCheck servers after the analysis completes. Do not upload flyers containing sensitive personal information.",
  },
  {
    q: "What should I do with my results?",
    a: "Review each flag and decide whether it applies to your specific flyer and audience. Not every flag requires a change — some are judgment calls. Fix what matters. Skip what doesn't. Post with confidence.",
  },
  {
    q: "Can I run the same flyer more than once?",
    a: "Yes. If you make changes based on the results, upload the updated version and run it again. There is no limit on how many times you can use the tool.",
  },
  {
    q: "How is FlyerCheck different from asking ChatGPT to review my flyer?",
    a: "FlyerCheck is purpose-built for event flyers specifically. It checks for the exact details attendees need (date, time, venue, ticket link) and evaluates readability at phone-screen scale — the context where most flyers are actually seen. A general AI tool will give you general feedback; FlyerCheck gives you event-specific feedback.",
  },
  {
    q: "Who built FlyerCheck?",
    a: "FlyerCheck is built by event operators and technologists at Revaya Hospitality Group who work in live events and hospitality.",
  },
  {
    q: "How do I contact the team?",
    a: "Email info@revayahg.com or use the contact form at flyercheck.io/contact. We read everything and respond within 1–2 business days.",
  },
  {
    q: "Do I need an account to use FlyerCheck?",
    a: "No account is required. Upload your flyer and get results immediately — no sign-up, no email, no credit card. The tool is completely free and open to use without registration.",
  },
  {
    q: "What should I do if I disagree with a flag?",
    a: "Trust your judgment. FlyerCheck flags potential issues based on common patterns across event flyers — it does not know your specific audience, your design intent, or your event context. If a flag does not apply to your situation, skip it. The goal is to surface things worth considering, not to prescribe what your flyer must look like.",
  },
];

/** Short preview for tool page — full list lives on /faq */
export const faqPreviewItems = faqItems.slice(0, 2);

/** Contact-page-only questions (not duplicated on /faq) */
export const contactFaqItems = [
  {
    q: "What happens after I send a message?",
    a: "We read every note and respond within 1–2 business days. If you're reporting a bug or tool issue, include the type of flyer you uploaded and what the result said — it helps us reproduce it faster.",
  },
  {
    q: "Can I suggest a feature or flag something the tool missed?",
    a: "Absolutely — product feedback is the most useful thing you can send. Tell us what the flyer was for, what FlyerCheck said, and what it missed. That goes directly into how we improve the analysis.",
  },
  {
    q: "Are you open to partnerships or integrations?",
    a: "We're selectively open to partnerships with platforms and tools that serve event producers and hospitality professionals. Send a note with what you have in mind.",
  },
  {
    q: "Do you work with venues and hospitality teams directly?",
    a: "Yes. FlyerCheck is built for anyone producing live experiences — promoters, venue marketing teams, hospitality operators, and festival organizers. If your team reviews flyers regularly, reach out and we can talk about how the tool fits your workflow.",
  },
];

export function faqSchemaEntities(items = faqItems) {
  return items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  }));
}
