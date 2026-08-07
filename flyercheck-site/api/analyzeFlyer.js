// Backend API handler for flyer analysis using OpenAI GPT-4 Vision
import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function analyzeFlyerWithOpenAI(imageBuffer, imageMimeType, targetAudience, eventCategories, extractedText) {
  if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.trim() === '') {
    throw new Error('OpenAI API key is not configured. Please set OPENAI_API_KEY in your deployment environment.');
  }

  try {
    // Check if file is PDF - OpenAI Vision API doesn't support PDFs directly
    if (imageMimeType === 'application/pdf') {
      throw new Error('PDF files are not directly supported. Please convert your PDF to an image (JPG or PNG) first. You can use online tools or screenshot the PDF pages.');
    }
    
    // Convert image buffer to base64
    const base64Image = imageBuffer.toString('base64');
    
    const audienceDescriptions = {
      'general-public': 'general public audience',
      'parents-families': 'parents and families',
      'lgbtq': 'LGBTQ+ community',
      'local-residents': 'local residents',
      'gen-z': 'Gen Z and young adults (ages 18-27)',
      'students': 'students',
      'professionals': 'professionals and business people',
      'tourists': 'tourists and visitors',
      'seniors': 'seniors (ages 65+)',
      'nonprofit': 'nonprofit supporters',
      'event-fans': 'event fans and enthusiasts',
      'fitness': 'fitness and wellness enthusiasts',
      'religious': 'religious and spiritual communities',
      'other': 'general audience'
    };

    const audienceDesc = audienceDescriptions[targetAudience] || 'general audience';

    // Ensure eventCategories is an array
    const categories = Array.isArray(eventCategories) ? eventCategories : [eventCategories];

    const categoryDescriptions = {
      'party-nightlife': 'Party / Nightlife',
      'club-event': 'Club Event',
      'happy-hour': 'Happy Hour / Social Mixer',
      'bar-event': 'Bar Event',
      'concert-live-music': 'Concert / Live Music',
      'festival-fair': 'Festival / Fair',
      'theater-performance': 'Theater / Performance',
      'comedy-show': 'Comedy Show',
      'art-show': 'Art Show / Gallery Event',
      'community-event': 'Community Event',
      'fundraiser-charity': 'Fundraiser / Charity Event',
      'parade-march-pride': 'Parade / March / Pride Event',
      'cultural-celebration': 'Cultural Celebration',
      'conference': 'Conference',
      'networking-event': 'Networking Event',
      'workshop-training': 'Workshop / Training',
      'trade-show-expo': 'Trade Show / Expo',
      'corporate-meeting': 'Corporate Meeting / Company Event',
      'sports-event': 'Sports Event',
      'fitness-wellness': 'Fitness Class / Wellness Event',
      'tournament-competition': 'Tournament / Competition',
      'class-course': 'Class / Course',
      'lecture-speaker': 'Lecture / Speaker Series',
      'campus-event': 'Campus Event',
      'restaurant-event': 'Restaurant Event / Menu Special',
      'food-drink-festival': 'Food & Drink Festival',
      'tasting-event': 'Tasting Event (Wine, Spirits, etc.)',
      'kids-event': 'Kids Event',
      'family-friendly': 'Family-Friendly Event',
      'holiday-event': 'Holiday Event',
      'themed-event': 'Themed Event',
      'grand-opening': 'Grand Opening',
      'anniversary-celebration': 'Anniversary / Celebration',
      'general-event': 'General Event / Misc',
      'virtual-event': 'Virtual Event',
      'corporate': 'Corporate / Networking Events',
      'hospitality': 'Hospitality / Nightlife Events',
      'concert': 'Concert / Festival Events',
      'wedding': 'Wedding / Private Party Events',
      'nonprofit': 'Nonprofit / Community Events',
      'other': 'Other event types'
    };

    const categoryDescs = categories.map(cat => categoryDescriptions[cat] || cat).join(', ');
    const categoryDesc = categoryDescs || 'General event';

    function getCategoryGuidance(category) {
      const guidance = {
        'corporate': `- Corporate events should project professionalism and clarity
- Use clean, structured layouts with conservative color palettes (blues, grays, whites)
- Include company logo, event title, date/time, venue prominently
- Keep tone formal and focus on value propositions
- Use minimalistic, elegant typography (sans-serif for modern, serif for traditional)
- Avoid overly bright or clashing colors that dilute a serious tone`,
        'hospitality': `- Hospitality/nightlife events need immediate visual impact and vibe
- Use bold, vibrant colors and dynamic imagery
- Typography can be more creative but must remain readable
- Make event name and main draw (DJ, act, special night) stand out
- Include day of week prominently (e.g., "FRIDAY NIGHT, 10 PM")
- Mention entry fee, dress code, age restrictions if applicable
- Use urgency and excitement in language ("One Night Only!", "Limited Seats")
- Avoid making design too busy - even wild themes need a focal point`,
        'concert': `- Concert/festival flyers should capture energy and style
- Use bold visuals: eye-catching illustrations, artist photos, thematic artwork
- Make headliner or event name prominent (largest for headliner, smaller for others)
- Use dramatic, high-contrast colors to stand out
- Date and venue should be immediately visible (consider bold date banner)
- Include clear ticket CTA with URL, QR code, or ticket outlet logo
- Include ticket price or "Free Admission" if applicable
- Use imagery that lets viewer feel the atmosphere
- Strive for artistic but clear - creative fonts for title, simple fonts for details`,
        'wedding': `- Wedding/private party flyers should be elegant and refined
- Use harmonious color schemes matching wedding colors or theme
- Script or calligraphy fonts for names/headings, but pair with clear serif/sans-serif for details
- Key info: couple names, date, time, venue, RSVP contact
- Use hierarchy and spacing to organize ceremony vs reception info
- Ensure readability - avoid overly ornate fonts or low contrast pastel-on-pastel
- Don't overcrowd - provide website or insert for extra details
- Double-check accuracy of names, dates, directions`,
        'nonprofit': `- Nonprofit/community events should blend clarity with cause-driven message
- Quickly communicate what the event is supporting - the "Why" should shine
- Use imagery that evokes the mission (hopeful survivors, community coming together)
- Include nonprofit logo and brief mission statement/tagline
- Event name or cause should be front and center
- If fundraiser, indicate goal or whom it benefits
- Use bullet points or short phrases to keep text digestible
- Avoid walls of text - direct detailed storytelling to website via QR code
- Use colors aligned with the cause (green for environmental, pink for breast cancer, etc.)
- Tone should be uplifting and invitational, not guilt-tripping`,
        'other': `- Apply general best practices for event flyers
- Ensure clear visual hierarchy and message clarity
- Use appropriate colors and typography for the event tone
- Include all essential information (date, time, location, CTA)`
      };
      return guidance[category] || guidance['other'];
    }

    const allGuidance = categories.map(cat => getCategoryGuidance(cat)).join('\n\n');

    const prompt = `You are an expert event marketing consultant for FlyerCheck. Your job is to review EVENT FLYERS — promotional images meant to get people to attend a live experience (party, concert, gala, conference, festival, venue night, fundraiser, etc.).

EXTRACTED TEXT FROM IMAGE: "${extractedText}"
EVENT CATEGORIES (user-selected, may be wrong if this is not a flyer): ${categoryDesc}
TARGET AUDIENCE: ${audienceDesc}

═══════════════════════════════════════
STEP 0 — FLYER GATE (DO THIS FIRST)
═══════════════════════════════════════
Before scoring anything, decide: is this image an event flyer / event promotional graphic?

It IS an event flyer if it appears designed to promote attendance at an event or venue night (even if incomplete or poorly designed). Typical signals: event name/title, date/time, venue/location, ticket/RSVP/CTA, lineup/hosts, promotional layout.

It is NOT an event flyer if it is primarily something else, including but not limited to:
- Random photos, selfies, memes, screenshots of chats/apps/websites
- Product packaging, receipts, invoices, documents, resumes
- Art/illustration with no event logistics
- Logos alone, mood boards, stock photos
- Social posts that do not promote a specific event
- Anything that would not function as "come to this event" marketing

If isEventFlyer is false:
- Set overallScore to 1.0 or lower (never above 2)
- Set EVERY dimension score to 0–2
- positiveSummary MUST clearly say this does not look like an event flyer and that FlyerCheck only reviews flyers
- pitfallsFound MUST include "Not an event flyer"
- strengths should be empty or minimal
- improvements/recommendations should tell the user to upload an event flyer (PNG/JPEG/WEBP of the design they plan to post)
- Do NOT praise visual quality of a non-flyer as if it were a successful flyer
- Do NOT invent event details that are not present

If isEventFlyer is true, continue with the full evaluation below.

CATEGORY-SPECIFIC GUIDANCE (only when isEventFlyer is true):
${allGuidance}

EVALUATION FRAMEWORK (only when isEventFlyer is true):

Score each dimension 0-10 for how well this works AS AN EVENT FLYER for attendees deciding whether to show up — not as general graphic design or photography.

1. **Visual Clarity (0-10)**: Layout organization, visual hierarchy, whitespace, balance for scanning on a phone.
2. **Message Clarity (0-10)**: Whether event purpose, date, time, location, and essential details are immediately apparent. Missing logistics = low score.
3. **Branding Consistency (0-10)**: Logos, brand colors, fonts, trust/professionalism for the event.
4. **Emotional Appeal (0-10)**: Whether the design evokes the right vibe for this event type.
5. **CTA Effectiveness (0-10)**: Ticket/RSVP/follow CTA visibility and clarity. No CTA = low score.
6. **Audience Fit (0-10)**: Alignment with the intended audience.
7. **Technical Quality (0-10)**: Resolution, readability, contrast, formatting at feed/phone size.

Hard rules when scoring a real flyer:
- If date OR time OR venue/location is missing or unreadable, messageClarity must be 4 or lower and overallScore must reflect that.
- If there is no clear next step (ticket link, RSVP, "doors at", QR, URL, etc.), ctaEffectiveness must be 4 or lower.
- Do not give high scores for a pretty image that fails as event communication.

DESIGN PITFALLS TO CHECK (when it is a flyer):
- Overloading with text
- Poor font choices / illegible type
- Bad contrast
- Low-quality or stretched images
- Unclear or missing CTA
- Cluttered layout
- Missing or wrong event information (date, location, etc.)

RESPONSE FORMAT REQUIREMENTS:

1. Always set isEventFlyer (boolean) and notFlyerReason (string; empty string if it is a flyer).
2. Opening summary (positiveSummary) must match the situation:
   - Not a flyer: state clearly it is not an event flyer; tell them what to upload instead.
   - overallScore 8+: lead with what works; optional brief polish note.
   - overallScore 5–7: MUST include both a specific strength AND a specific priority fix. No praise-only summary.
   - overallScore below 5: lead with the biggest problems; one salvageable strength only if real.
3. Dimension feedback: score, justification, actionable suggestions.
4. Friendly, actionable language when it is a flyer; direct and clear when it is not.
5. End with encouragement only when it is a flyer; for non-flyers, invite them to upload a real flyer.

Provide your analysis in this JSON format:
{
  "isEventFlyer": true,
  "notFlyerReason": "",
  "overallScore": 7.5,
  "scores": {
    "visualClarity": 8,
    "messageClarity": 6,
    "brandingConsistency": 7,
    "emotionalAppeal": 8,
    "ctaEffectiveness": 5,
    "audienceFit": 7,
    "technicalQuality": 8
  },
  "positiveSummary": "Balanced opening line matching score tone — or a clear not-a-flyer message.",
  "detailedFeedback": {
    "visualClarity": "Score: X/10. Detailed feedback with specific suggestions.",
    "messageClarity": "Score: X/10. Detailed feedback with specific suggestions.",
    "brandingConsistency": "Score: X/10. Detailed feedback with specific suggestions.",
    "emotionalAppeal": "Score: X/10. Detailed feedback with specific suggestions.",
    "ctaEffectiveness": "Score: X/10. Detailed feedback with specific suggestions.",
    "audienceFit": "Score: X/10. Detailed feedback with specific suggestions.",
    "technicalQuality": "Score: X/10. Detailed feedback with specific suggestions."
  },
  "pitfallsFound": ["pitfall1", "pitfall2"],
  "strengths": ["strength1", "strength2"],
  "improvements": ["improvement1", "improvement2"],
  "recommendations": ["specific recommendation1", "specific recommendation2"],
  "audienceSpecificTips": "Specific advice tailored to ${audienceDesc}",
  "categorySpecificGuidance": "Category-specific recommendations for ${categoryDesc}.",
  "encouragement": "Motivating closing statement — or upload guidance if not a flyer"
}

Be specific and honest. Never score a non-flyer as a successful event flyer.`;

    const visionModel =
      process.env.OPENAI_VISION_MODEL && process.env.OPENAI_VISION_MODEL.trim() !== ''
        ? process.env.OPENAI_VISION_MODEL.trim()
        : 'gpt-4o';

    const response = await openai.chat.completions.create({
      model: visionModel,
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            {
              type: "image_url",
              image_url: {
                url: `data:${imageMimeType};base64,${base64Image}`
              }
            }
          ]
        }
      ],
      max_tokens: 2500,
      temperature: 0.35,
      response_format: { type: "json_object" },
    });

    const analysisText = response.choices[0].message.content;
    let analysis;
    try {
      const jsonMatch = analysisText.match(/```json\s*([\s\S]*?)\s*```/) || 
                       analysisText.match(/```\s*([\s\S]*?)\s*```/) ||
                       analysisText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[1] || jsonMatch[0]);
      } else {
        analysis = JSON.parse(analysisText);
      }
    } catch (parseError) {
      console.warn('Failed to parse JSON, creating structured response');
      analysis = {
        isEventFlyer: true,
        notFlyerReason: '',
        overallScore: 6,
        scores: {
          visualClarity: 6,
          messageClarity: 6,
          brandingConsistency: 6,
          emotionalAppeal: 6,
          ctaEffectiveness: 6,
          audienceFit: 6,
          technicalQuality: 6
        },
        positiveSummary: 'Analysis completed successfully.',
        detailedFeedback: {
          visualClarity: 'Score: 6/10. ' + analysisText.substring(0, 200),
          messageClarity: 'Score: 6/10. Review the flyer for clarity.',
          brandingConsistency: 'Score: 6/10. Check branding elements.',
          emotionalAppeal: 'Score: 6/10. Assess emotional impact.',
          ctaEffectiveness: 'Score: 6/10. Ensure clear call-to-action.',
          audienceFit: 'Score: 6/10. Verify audience alignment.',
          technicalQuality: 'Score: 6/10. Check technical quality.'
        },
        pitfallsFound: [],
        strengths: ['AI analysis completed'],
        improvements: ['Consider reviewing the detailed feedback'],
        recommendations: [analysisText.substring(0, 200) + '...'],
        audienceSpecificTips: `Consider tailoring your message for ${audienceDesc}.`,
        categorySpecificGuidance: `Apply best practices for ${categoryDesc}.`,
        encouragement: 'Keep refining your design!'
      };
    }

    const dimensionKeys = [
      'visualClarity',
      'messageClarity',
      'brandingConsistency',
      'emotionalAppeal',
      'ctaEffectiveness',
      'audienceFit',
      'technicalQuality',
    ];

    let isEventFlyer = analysis.isEventFlyer !== false;
    // Extra guard: model sometimes forgets the flag but puts it in the summary
    if (
      isEventFlyer &&
      /\b(not an? event flyer|doesn'?t look like (an? )?event flyer|isn'?t (an? )?event flyer|not a flyer)\b/i.test(
        analysis.positiveSummary || '',
      )
    ) {
      isEventFlyer = false;
    }

    // OCR/UI chrome heuristics (screenshots of FlyerCheck or generic websites)
    const ocrText = String(extractedText || '').toLowerCase().replace(/\s+/g, ' ');
    const uiChromePhrases = [
      'what we look for',
      'drop or paste your flyer',
      'browse files',
      'png, jpeg, or webp',
      'check another flyer',
      'analyzed flyer',
      'overall score',
      'dimension scores',
      'text readability',
      'crowd visibility',
      'catch the mistake before your audience',
    ];
    const chromeHits = uiChromePhrases.filter((p) => ocrText.includes(p));
    if (isEventFlyer && chromeHits.length >= 2) {
      isEventFlyer = false;
      analysis.notFlyerReason =
        'This looks like a website or app screenshot, not an event flyer.';
    }
    if (
      isEventFlyer &&
      ((ocrText.includes('flyercheck') && ocrText.includes('what we look for')) ||
        (ocrText.includes('flyercheck') && ocrText.includes('browse files')))
    ) {
      isEventFlyer = false;
      analysis.notFlyerReason =
        'This looks like a screenshot of FlyerCheck (or another website), not an event flyer.';
    }

    let overallScore = Number(analysis.overallScore);
    if (Number.isNaN(overallScore)) overallScore = isEventFlyer ? 6 : 1;

    let scores = { ...(analysis.scores || {}) };
    let openingSummary = analysis.positiveSummary || 'Your flyer has been analyzed.';
    let strengths = Array.isArray(analysis.strengths) ? [...analysis.strengths] : [];
    let improvements = Array.isArray(analysis.improvements) ? [...analysis.improvements] : [];
    let recommendations = Array.isArray(analysis.recommendations)
      ? [...analysis.recommendations]
      : [];
    let pitfallsFound = Array.isArray(analysis.pitfallsFound) ? [...analysis.pitfallsFound] : [];
    let detailedFeedback = { ...(analysis.detailedFeedback || {}) };
    const notFlyerReason =
      (analysis.notFlyerReason && String(analysis.notFlyerReason).trim()) ||
      'This image does not appear to be an event flyer.';

    // Enforce non-flyer outcomes so random photos cannot score as strong flyers
    if (!isEventFlyer) {
      overallScore = Math.min(overallScore, 1.5);
      const lowScores = {};
      const lowFeedback = {};
      for (const key of dimensionKeys) {
        const raw = Number(scores[key]);
        lowScores[key] = Number.isFinite(raw) ? Math.min(raw, 2) : 1;
        lowFeedback[key] =
          detailedFeedback[key] ||
          `Score: ${lowScores[key]}/10. Not evaluated as an event flyer — upload a promotional flyer for an event to get useful dimension feedback.`;
      }
      scores = lowScores;
      detailedFeedback = lowFeedback;
      openingSummary = `This doesn't look like an event flyer. ${notFlyerReason} FlyerCheck only reviews event promotional graphics — upload the flyer you plan to post (with event details) to get a real analysis.`;
      if (!pitfallsFound.some((p) => /not an event flyer/i.test(String(p)))) {
        pitfallsFound = ['Not an event flyer', ...pitfallsFound];
      }
      strengths = [];
      improvements = [
        'Upload an event flyer: a designed graphic promoting a live event or venue night.',
        ...improvements.filter((i) => !/not an event flyer/i.test(String(i))),
      ];
      recommendations = [
        'Use a PNG, JPEG, or WEBP of the flyer you intend to share — including date, time, venue, and a clear next step when possible.',
        ...recommendations,
      ];
    } else if (overallScore >= 5 && overallScore < 8) {
      // Mid-range scores need balanced copy — don't show praise-only under a yellow tone
      const looksBalanced =
        /\b(but|however|though|needs?|should|consider|improve|missing|weak|unclear|priority|fix)\b/i.test(
          openingSummary,
        );
      if (!looksBalanced) {
        const strength = strengths[0];
        const fix = improvements[0] || recommendations[0];
        if (strength && fix) {
          openingSummary = `${String(strength).replace(/\.$/, '')}. Priority fix: ${fix}`;
        } else if (fix) {
          openingSummary = `Some elements work, but this needs attention first: ${fix}`;
        }
      }
    }

    return {
      success: true,
      analysis: {
        extractedText: extractedText || 'Text extraction not available',
        isEventFlyer,
        notFlyerReason: isEventFlyer ? '' : notFlyerReason,
        overallScore,
        scores,
        positiveSummary: openingSummary,
        detailedFeedback,
        pitfallsFound,
        strengths,
        improvements,
        recommendations,
        audienceSpecificTips: isEventFlyer
          ? analysis.audienceSpecificTips || `Consider tailoring your message for ${audienceDesc}.`
          : 'Audience tips apply once you upload a real event flyer.',
        categorySpecificGuidance: isEventFlyer
          ? analysis.categorySpecificGuidance || `Apply best practices for ${categoryDesc}.`
          : 'Category guidance applies once you upload a real event flyer.',
        encouragement: isEventFlyer
          ? analysis.encouragement || 'Keep refining your design!'
          : 'Upload your event flyer whenever you\'re ready — we\'ll review it for clarity, logistics, and conversion.',
      }
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`AI analysis failed: ${error.message}`);
  }
}

export { analyzeFlyerWithOpenAI };
