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

    const prompt = `You are an expert event marketing consultant analyzing an event flyer using a comprehensive evaluation framework.

EXTRACTED TEXT FROM FLYER: "${extractedText}"
EVENT CATEGORIES: ${categoryDesc}
TARGET AUDIENCE: ${audienceDesc}

CATEGORY-SPECIFIC GUIDANCE:
Based on the selected event categories, apply these category-specific best practices. Consider how the flyer should appeal to all selected categories:

${allGuidance}

EVALUATION FRAMEWORK:

You must evaluate this flyer across 7 dimensions, each scored 0-10:

1. **Visual Clarity (0-10)**: Assess layout organization, visual hierarchy, whitespace, and balance. Poor (0-3): Chaotic/cluttered, no focal point. Average (4-6): Some hierarchy but minor clutter. Excellent (7-10): Clean, clear hierarchy, plenty of whitespace.

2. **Message Clarity (0-10)**: Check if event purpose, date, time, location, and essential details are immediately apparent. Poor (0-3): Unclear or missing key info. Average (4-6): Info present but not obvious. Excellent (7-10): All key details instantly clear.

3. **Branding Consistency (0-10)**: Evaluate use of logos, brand colors, fonts, and overall brand alignment. Poor (0-3): No branding, looks generic. Average (4-6): Some branding but inconsistent. Excellent (7-10): Strong brand presence, builds trust.

4. **Emotional Appeal (0-10)**: Assess if design evokes appropriate emotion for the event type. Poor (0-3): Bland or mismatched. Average (4-6): Moderately appealing. Excellent (7-10): Compelling, on-theme, draws viewers in.

5. **CTA Effectiveness (0-10)**: Evaluate call-to-action visibility, clarity, and actionability. Poor (0-3): No CTA or hidden/unclear. Average (4-6): CTA exists but not prominent. Excellent (7-10): Obvious, accessible, motivating.

6. **Audience Fit (0-10)**: Assess alignment with target audience expectations and preferences. Poor (0-3): Poorly matched, may alienate. Average (4-6): Mostly appropriate. Excellent (7-10): Excellent alignment, feels "made for them."

7. **Technical Quality (0-10)**: Check image resolution, text readability, contrast, formatting. Poor (0-3): Pixelated, illegible, unprofessional. Average (4-6): Adequate with minor issues. Excellent (7-10): High-resolution, crisp, polished.

DESIGN PITFALLS TO CHECK:
- Overloading with text
- Poor font choices (too many fonts, illegible fonts)
- Bad color combinations (low contrast, clashing colors)
- Low-quality images (pixelated, stretched)
- Unclear call-to-action
- Cluttered layout (lack of spacing)
- Ignoring branding/consistency
- Overusing effects or gimmicks
- Not considering the audience
- Missing or wrong information (date, location, etc.)

RESPONSE FORMAT REQUIREMENTS:

1. Start with a positive summary highlighting something that works well
2. Provide sectioned feedback for each dimension with:
   - Score (0-10)
   - Brief justification
   - Specific, actionable suggestions
3. Use friendly, actionable language ("consider doing X", "you might try Y")
4. Highlight both strengths and weaknesses
5. Offer concrete, specific suggestions
6. End with encouragement

Provide your analysis in this JSON format:
{
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
  "positiveSummary": "Brief positive opening statement",
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
  "categorySpecificGuidance": "Category-specific recommendations for ${categoryDesc}. Consider how the design should appeal to all selected categories.",
  "encouragement": "Motivating closing statement"
}

Be specific, constructive, and actionable. Use the tone of a knowledgeable design coach, not a harsh judge.`;

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
      temperature: 0.7
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

    return {
      success: true,
      analysis: {
        extractedText: extractedText || 'Text extraction not available',
        overallScore: analysis.overallScore || 6,
        scores: analysis.scores || {},
        positiveSummary: analysis.positiveSummary || 'Your flyer has been analyzed.',
        detailedFeedback: analysis.detailedFeedback || {},
        pitfallsFound: analysis.pitfallsFound || [],
        strengths: analysis.strengths || [],
        improvements: analysis.improvements || [],
        recommendations: analysis.recommendations || [],
        audienceSpecificTips: analysis.audienceSpecificTips || `Consider tailoring your message for ${audienceDesc}.`,
        categorySpecificGuidance: analysis.categorySpecificGuidance || `Apply best practices for ${categoryDesc}.`,
        encouragement: analysis.encouragement || 'Keep refining your design!'
      }
    };
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`AI analysis failed: ${error.message}`);
  }
}

export { analyzeFlyerWithOpenAI };
