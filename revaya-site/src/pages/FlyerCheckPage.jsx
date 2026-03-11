import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import FileUploader from "../components/FileUploader";
import { reportError } from "../utils/errorHandler";
import "../utils/flyerAnalysisService"; // Loads window.analyzeFlyerWithAI

function FlyerCheckPage() {
    try {
        React.useEffect(() => {
            // Initialize ads
            if (window.adsbygoogle) {
                window.adsbygoogle.push({});
            }
        }, []);

        return (
            <div data-name="flyercheck-page">
                <Navbar />
                <AdBanner />
                <section className="hero hero-flyercheck" data-name="hero">
                    <div className="hero-content">
                        <h1 className="hero-title">Revaya FlyerCheck™</h1>
                        <p className="hero-subtitle">
                            Your flyer is almost perfect. Let's make it undeniable.
                        </p>
                        <p className="hero-description">
                            Upload your design and get fast, unbiased feedback—<br />
                            clarity, errors, spacing, and visibility checks.
                        </p>
                    </div>
                </section>

                <FileUploader />

                {/* Informational content sections (SEO, AdSense, educational depth) */}
                <section className="host-content-section" aria-labelledby="flyercheck-overview-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-overview-heading" className="host-content-title">Overview</h2>
                        <p className="host-content-text">
                            FlyerCheck is a flyer analysis tool designed to help event organizers review promotional materials before they are published.
                        </p>
                        <p className="host-content-text">
                            For many events, the flyer is the first piece of communication a guest sees. It often determines whether a potential attendee understands the value of the event, knows what action to take, and feels confident enough to attend.
                        </p>
                        <p className="host-content-text">
                            FlyerCheck helps identify common communication and design issues in event flyers, including missing information, weak hierarchy, and unclear calls to action. By reviewing flyers before they go live, teams can reduce avoidable mistakes and improve the clarity of their event messaging.
                        </p>
                        <p className="host-content-text">
                            The goal is not simply to improve design. It is to improve communication so guests can quickly understand what the event is, where it is happening, and how to participate.
                        </p>
                    </div>
                </section>

                <section className="host-content-section host-content-section--alt" aria-labelledby="flyercheck-problem-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-problem-heading" className="host-content-title">The Problem</h2>
                        <p className="host-content-text">
                            Event flyers often carry a heavy communication burden. In a single image or graphic, organizers are expected to communicate the purpose of the event, the date and time, the location, the audience, and the action guests should take next.
                        </p>
                        <p className="host-content-text">
                            When key information is missing or poorly organized, potential attendees can become confused or lose interest. Even strong events can underperform if their promotional materials do not clearly communicate the basics.
                        </p>
                        <p className="host-content-text">
                            Common flyer issues include:
                        </p>
                        <ul className="host-content-list">
                            <li>missing location or time details</li>
                            <li>weak visual hierarchy</li>
                            <li>cluttered layouts</li>
                            <li>unclear calls to action</li>
                            <li>text that is difficult to read on mobile devices</li>
                        </ul>
                        <p className="host-content-text">
                            These are not only design issues — they are event communication issues. FlyerCheck helps organizers spot them earlier.
                        </p>
                    </div>
                </section>

                <section className="host-content-section" aria-labelledby="flyercheck-how-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-how-heading" className="host-content-title">How It Works</h2>
                        <p className="host-content-text">
                            FlyerCheck reviews uploaded event flyer content and highlights common communication and presentation issues that can affect audience understanding.
                        </p>
                        <p className="host-content-text">
                            The tool is designed to help event teams evaluate whether a flyer clearly answers the questions guests are most likely to ask:
                        </p>
                        <ul className="host-content-list">
                            <li>What is this event?</li>
                            <li>When is it happening?</li>
                            <li>Where is it happening?</li>
                            <li>Who is it for?</li>
                            <li>What should I do next?</li>
                        </ul>
                        <p className="host-content-text">
                            By identifying communication gaps and layout concerns, FlyerCheck helps teams strengthen the clarity of their event materials before those materials are shared publicly.
                        </p>
                        <p className="host-content-text">
                            It can be especially useful for teams working quickly, managing multiple events, or reviewing a large volume of promotional materials.
                        </p>
                    </div>
                </section>

                <section className="host-content-section host-content-section--alt" aria-labelledby="flyercheck-clarity-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-clarity-heading" className="host-content-title">Why Flyer Clarity Matters</h2>
                        <p className="host-content-text">
                            A flyer is often the first touchpoint in the guest journey. Before someone visits an event website, buys a ticket, or asks a question, they may first encounter a flyer on social media, in an email, or through a shared message.
                        </p>
                        <p className="host-content-text">
                            If the flyer is confusing, incomplete, or difficult to scan, the audience may never take the next step.
                        </p>
                        <p className="host-content-text">
                            Clear communication does more than make a flyer look polished. It reduces friction, improves guest confidence, and increases the likelihood that the right audience will understand the event and respond.
                        </p>
                        <p className="host-content-text">
                            For hospitality and event teams, better flyer communication supports stronger attendance, fewer guest questions, and a more consistent brand experience.
                        </p>
                    </div>
                </section>

                <section className="host-content-section" aria-labelledby="flyercheck-mistakes-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-mistakes-heading" className="host-content-title">Common Mistakes in Event Flyer Design</h2>
                        <p className="host-content-text">
                            Some of the most common flyer problems are easy to miss internally, especially when teams are close to the content or moving quickly.
                        </p>
                        <p className="host-content-text">
                            Typical issues include:
                        </p>
                        <ul className="host-content-list">
                            <li>emphasizing decorative elements over key event details</li>
                            <li>burying date, time, or location information</li>
                            <li>using too many fonts or inconsistent visual styles</li>
                            <li>making mobile readability an afterthought</li>
                            <li>relying on visuals without a strong call to action</li>
                        </ul>
                        <p className="host-content-text">
                            These mistakes can reduce audience understanding even when the event itself is compelling. FlyerCheck helps teams review flyers with a clearer, more objective lens.
                        </p>
                    </div>
                </section>

                <section className="host-content-section host-content-section--alt" aria-labelledby="flyercheck-use-cases-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-use-cases-heading" className="host-content-title">Use Cases</h2>
                        <p className="host-content-text">
                            FlyerCheck can support a wide range of event and hospitality marketing scenarios.
                        </p>
                        <h3 className="host-content-subtitle">Community Events</h3>
                        <p className="host-content-text">
                            Neighborhood events, nonprofit events, and public festivals often rely on flyers and social graphics to spread awareness quickly. FlyerCheck helps ensure the message is complete and easy to understand.
                        </p>
                        <h3 className="host-content-subtitle">Venue Programming</h3>
                        <p className="host-content-text">
                            Restaurants, hotels, bars, and entertainment venues frequently promote recurring events and activations. FlyerCheck helps teams maintain clarity and consistency across these materials.
                        </p>
                        <h3 className="host-content-subtitle">Brand Activations</h3>
                        <p className="host-content-text">
                            Experiential campaigns and pop-up events often need promotional materials that communicate quickly and clearly. FlyerCheck helps teams evaluate whether those materials are doing their job.
                        </p>
                        <h3 className="host-content-subtitle">Fast-Moving Event Teams</h3>
                        <p className="host-content-text">
                            Teams working under deadline pressure can use FlyerCheck as an extra review step before publishing event materials.
                        </p>
                    </div>
                </section>

                <section className="host-content-section" aria-labelledby="flyercheck-faq-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-faq-heading" className="host-content-title">Frequently Asked Questions</h2>
                        <dl className="host-faq-list">
                            <dt className="host-faq-question">What does FlyerCheck analyze?</dt>
                            <dd className="host-faq-answer">
                                FlyerCheck reviews event flyer content for communication clarity, information completeness, and common design or layout issues that may affect audience understanding.
                            </dd>
                            <dt className="host-faq-question">Who is FlyerCheck designed for?</dt>
                            <dd className="host-faq-answer">
                                FlyerCheck is designed for event organizers, hospitality teams, marketers, venue operators, and anyone responsible for creating or reviewing promotional materials for live experiences.
                            </dd>
                            <dt className="host-faq-question">Does FlyerCheck replace a graphic designer?</dt>
                            <dd className="host-faq-answer">
                                No. FlyerCheck is intended as a review and quality-control tool. It helps identify potential issues before publishing, but it does not replace professional design judgment.
                            </dd>
                            <dt className="host-faq-question">Can FlyerCheck be used for different types of events?</dt>
                            <dd className="host-faq-answer">
                                Yes. FlyerCheck can support a wide range of event types, including community events, hospitality activations, festivals, venue programming, and corporate events.
                            </dd>
                            <dt className="host-faq-question">Why is flyer clarity so important?</dt>
                            <dd className="host-faq-answer">
                                A flyer often serves as the first impression of an event. If key information is missing or hard to understand, potential guests may not take the next step.
                            </dd>
                        </dl>
                    </div>
                </section>

                <section className="host-content-section host-content-section--alt" aria-labelledby="flyercheck-communication-heading">
                    <div className="host-content-container">
                        <h2 id="flyercheck-communication-heading" className="host-content-title">Why Clear Event Communication Matters</h2>
                        <p className="host-content-text">
                            Guests make fast decisions. In many cases, they decide within seconds whether an event feels relevant, interesting, and worth pursuing further.
                        </p>
                        <p className="host-content-text">
                            When communication is clear, guests feel more confident. They understand what the event is, how to attend, and what to expect.
                        </p>
                        <p className="host-content-text">
                            When communication is unclear, even strong events can lose momentum.
                        </p>
                        <p className="host-content-text">
                            FlyerCheck supports clearer event communication by helping teams review their materials before they are published, reducing the risk of confusion at the earliest stage of the guest journey.
                        </p>
                    </div>
                </section>

                {/* Content Section for AdSense Compliance */}
                <section className="flyercheck-content-section" data-name="flyercheck-content">
                    <div className="container">
                        <div className="flyercheck-content-wrapper">
                            <div className="flyercheck-intro">
                                <h2 className="flyercheck-section-title">AI-Powered Flyer Analysis for Better Event Attendance</h2>
                                <p className="flyercheck-intro-text">
                                    Revaya FlyerCheck™ uses advanced AI technology to analyze your event flyers and provide comprehensive feedback on design, clarity, and effectiveness. Whether you're promoting a corporate conference, music festival, wedding, or nonprofit fundraiser, our tool helps ensure your flyer communicates clearly and drives attendance.
                                </p>
                            </div>

                            <div className="flyercheck-benefits">
                                <h3 className="flyercheck-subtitle">Why Use FlyerCheck?</h3>
                                <p className="flyercheck-benefits-intro">
                                    Designing an effective event flyer is more complex than it appears. Small design decisions can significantly impact whether potential attendees take action or scroll past. FlyerCheck provides the analytical rigor and fresh perspective needed to transform good designs into conversion-driving communications that maximize event attendance.
                                </p>
                                <div className="flyercheck-benefits-grid">
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-eye"></i>
                                        <h4>Fresh Perspective</h4>
                                        <p>When you've spent hours designing a flyer, you become too familiar with it. This familiarity creates blind spots where you assume viewers understand context that isn't actually clear. Our AI provides an unbiased, first-time viewer perspective to catch issues you might miss, from confusing layout choices to missing critical information.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-check-double"></i>
                                        <h4>Comprehensive Analysis</h4>
                                        <p>We evaluate text readability, visual hierarchy, branding consistency, contrast issues, and information completeness to ensure your flyer performs at its best. Our multi-dimensional analysis goes beyond basic design checks to assess how effectively your flyer communicates key information and motivates action from your target audience.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-clock"></i>
                                        <h4>Instant Feedback</h4>
                                        <p>Get detailed analysis in seconds, not days. No need to wait for colleagues or designers to review—receive actionable feedback immediately. This speed allows you to iterate quickly and test multiple design variations, ensuring your final flyer is optimized before you start your marketing campaign.</p>
                                    </div>
                                    <div className="flyercheck-benefit-card">
                                        <i className="fas fa-users"></i>
                                        <h4>Audience-Specific Insights</h4>
                                        <p>Our analysis adapts to your target audience, whether it's corporate professionals, families, young adults, or seniors, ensuring your message resonates. What works for a college party won't work for a professional conference. Our AI understands these nuances and provides recommendations tailored to your specific audience demographics and expectations.</p>
                                    </div>
                                </div>
                                <p className="flyercheck-benefits-closing">
                                    Beyond these core benefits, FlyerCheck helps you avoid the costly mistakes of launching ineffective marketing materials. Every flyer that fails to convert is a missed opportunity to grow your event attendance. By catching issues before publication, you save time, money, and most importantly, potential attendees.
                                </p>
                            </div>

                            <div className="flyercheck-how-it-works">
                                <h3 className="flyercheck-subtitle">How It Works</h3>
                                <p className="flyercheck-how-intro">
                                    Our AI-powered analysis process is designed to be fast, thorough, and actionable. In just four simple steps, you'll receive comprehensive feedback that helps you identify and fix issues before your flyer goes live.
                                </p>
                                <div className="flyercheck-steps">
                                    <div className="flyercheck-step">
                                        <div className="step-number">1</div>
                                        <div className="step-content">
                                            <h4>Upload Your Flyer</h4>
                                            <p>Simply drag and drop your flyer image or click to upload. We support JPG, PNG, AVIF, HEIC, and WEBP formats up to 3MB. Our system automatically processes and optimizes your image for analysis, ensuring the best results regardless of your original file format.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">2</div>
                                        <div className="step-content">
                                            <h4>Select Event Details</h4>
                                            <p>Choose your event category (corporate, music, wedding, nonprofit, etc.) and target audience to get tailored analysis. This context helps our AI apply the most relevant design principles and expectations for your specific event type and audience demographics.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">3</div>
                                        <div className="step-content">
                                            <h4>Receive AI Analysis</h4>
                                            <p>Our AI analyzes your flyer for clarity, missing information, design issues, and conversion blockers, providing detailed feedback in seconds. The analysis includes specific recommendations for improvements, scoring across multiple dimensions, and prioritized action items.</p>
                                        </div>
                                    </div>
                                    <div className="flyercheck-step">
                                        <div className="step-number">4</div>
                                        <div className="step-content">
                                            <h4>Improve and Iterate</h4>
                                            <p>Use our actionable recommendations to refine your flyer before publishing, ensuring maximum impact and attendance. You can upload revised versions to track improvements and ensure all issues have been addressed before finalizing your design.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flyercheck-tips">
                                <h3 className="flyercheck-subtitle">Tips for Creating Effective Flyers</h3>
                                <p className="flyercheck-tips-intro">
                                    While FlyerCheck helps identify issues in existing designs, following these fundamental principles from the start will help you create flyers that are more likely to pass analysis and drive attendance.
                                </p>
                                <div className="flyercheck-tips-list">
                                    <div className="tip-item">
                                        <i className="fas fa-font"></i>
                                        <div>
                                            <h4>Prioritize Information Hierarchy</h4>
                                            <p>The most critical information—event name, date, and location—should be immediately visible. Use size, color, and positioning to guide the viewer's eye through your flyer in a logical order. The event name should be the largest text, followed by date and time, then location. Secondary details like ticket prices or RSVP information come next.</p>
                                        </div>
                                    </div>
                                    <div className="tip-item">
                                        <i className="fas fa-palette"></i>
                                        <div>
                                            <h4>Ensure Strong Contrast and Readability</h4>
                                            <p>Text must be easily readable at a glance, especially on mobile devices. Avoid placing text over busy backgrounds. Use high contrast color combinations (dark text on light backgrounds or vice versa) and ensure font sizes are large enough to read without squinting. Remember that many people will see your flyer first on a small phone screen.</p>
                                        </div>
                                    </div>
                                    <div className="tip-item">
                                        <i className="fas fa-info-circle"></i>
                                        <div>
                                            <h4>Include Complete Information</h4>
                                            <p>Don't assume viewers know when doors open versus when the event starts, or whether tickets are required. Include all essential details: event date and time, location with full address, ticket requirements, age restrictions if applicable, and clear contact or RSVP information. Missing information creates friction that prevents conversions.</p>
                                        </div>
                                    </div>
                                    <div className="tip-item">
                                        <i className="fas fa-mouse-pointer"></i>
                                        <div>
                                            <h4>Make Your Call-to-Action Obvious</h4>
                                            <p>Viewers need clear direction on what to do next. Whether it's "RSVP Now," "Buy Tickets," or "Learn More," your call-to-action should be prominent and easy to find. Use a distinct color or button style to make it stand out. Include all necessary information—like a website URL or QR code—to complete the action.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="flyercheck-tips-closing">
                                    Following these principles will give you a strong foundation, but even well-designed flyers benefit from an objective analysis. FlyerCheck helps you catch the subtle issues that can slip through even when you follow best practices.
                                </p>
                            </div>

                            <div className="flyercheck-use-cases">
                                <h3 className="flyercheck-subtitle">Perfect For</h3>
                                <p className="flyercheck-use-cases-intro">
                                    FlyerCheck is designed to work across all event types and industries. Our AI understands the unique requirements and design expectations for different event categories, ensuring you receive relevant, actionable feedback regardless of your event type.
                                </p>
                                <div className="flyercheck-use-cases-list">
                                    <div className="use-case-item">
                                        <i className="fas fa-briefcase"></i>
                                        <div>
                                            <h4>Corporate Events</h4>
                                            <p>Conferences, networking events, product launches, and company gatherings that need professional, clear communication. For corporate events, FlyerCheck ensures your flyer maintains brand consistency, communicates professionalism, and includes all necessary logistical details. The analysis pays special attention to information hierarchy and clarity, as corporate audiences value efficiency and complete information over flashy design.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-music"></i>
                                        <div>
                                            <h4>Music & Entertainment</h4>
                                            <p>Concerts, festivals, club nights, and live performances where visual appeal and clear information are crucial for ticket sales. Entertainment events benefit from FlyerCheck's focus on visual hierarchy and emotional appeal. The tool helps ensure your flyer captures the energy and vibe of your event while still providing all essential ticket and venue information that drives sales. Missing details like age restrictions or door times can significantly impact attendance.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-heart"></i>
                                        <div>
                                            <h4>Weddings & Celebrations</h4>
                                            <p>Wedding invitations, anniversary parties, and milestone celebrations that need to convey elegance and important details. Celebratory events require a balance of aesthetic appeal and informational completeness. FlyerCheck helps ensure your invitation or event announcement maintains the appropriate tone while clearly communicating date, time, location, dress code, and RSVP information. The analysis considers how well the design matches the formality level of your event.</p>
                                        </div>
                                    </div>
                                    <div className="use-case-item">
                                        <i className="fas fa-hand-holding-heart"></i>
                                        <div>
                                            <h4>Nonprofit Fundraisers</h4>
                                            <p>Charity events, fundraisers, and community gatherings that must clearly communicate purpose and inspire action. Nonprofit events rely heavily on clearly communicating their cause and impact. FlyerCheck ensures your fundraising flyer effectively explains the purpose of the event, what donations support, and how attendees can contribute. The tool helps balance emotional appeal with practical information about ticket prices, donation options, and event logistics.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flyercheck-mistakes">
                                <h3 className="flyercheck-subtitle">Common Flyer Mistakes That Hurt Attendance</h3>
                                <p className="flyercheck-mistakes-intro">
                                    Even experienced designers can fall into these common traps when creating event flyers. Understanding these mistakes helps you avoid them, and FlyerCheck specifically looks for each of these issues during analysis.
                                </p>
                                <div className="flyercheck-mistakes-list">
                                    <div className="mistake-item">
                                        <i className="fas fa-exclamation-triangle"></i>
                                        <div>
                                            <h4>Missing or Unclear Date and Time</h4>
                                            <p>One of the most critical mistakes is failing to clearly display the event date and time. Many flyers show only a date without time, or they show "start time" but not "doors open" time, confusing potential attendees. Some designers bury this information in small text or place it where it's easy to miss. FlyerCheck flags when date and time information isn't immediately visible or is incomplete, as this directly impacts whether people can attend.</p>
                                        </div>
                                    </div>
                                    <div className="mistake-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <div>
                                            <h4>Incomplete or Ambiguous Location Information</h4>
                                            <p>Simply listing a venue name without an address, or providing an address without indicating whether it's indoor or outdoor, creates unnecessary friction. Viewers shouldn't have to search elsewhere to find where your event is happening. FlyerCheck identifies when location information is missing, unclear, or incomplete, ensuring your flyer provides everything attendees need to find your event.</p>
                                        </div>
                                    </div>
                                    <div className="mistake-item">
                                        <i className="fas fa-clipboard-question"></i>
                                        <div>
                                            <h4>Assuming Viewers Know What the Event Is</h4>
                                            <p>Designers who are deeply involved in their event often assume viewers understand context they don't actually have. Flyers that rely on insider knowledge or industry jargon fail to communicate effectively. FlyerCheck evaluates how well your flyer explains what the event is, who it's for, and why someone should attend, flagging when key information is implied rather than stated clearly.</p>
                                        </div>
                                    </div>
                                    <div className="mistake-item">
                                        <i className="fas fa-dollar-sign"></i>
                                        <div>
                                            <h4>Hidden or Missing Ticket Information</h4>
                                            <p>Potential attendees need to know upfront whether tickets are required, how much they cost, and where to purchase them. Many flyers mention "tickets available" without price or purchase location, forcing viewers to search elsewhere. This extra step significantly reduces conversion rates. FlyerCheck identifies when ticket information is missing or unclear, as this directly impacts attendance.</p>
                                        </div>
                                    </div>
                                    <div className="mistake-item">
                                        <i className="fas fa-eye-slash"></i>
                                        <div>
                                            <h4>Poor Readability and Contrast Issues</h4>
                                            <p>Text that's difficult to read—whether due to small font sizes, low contrast, or text placed over busy backgrounds—prevents viewers from absorbing your information. This is especially problematic on mobile devices where people often first encounter flyers. FlyerCheck evaluates text readability and contrast, identifying when design choices make information hard to consume, which directly impacts your flyer's effectiveness.</p>
                                        </div>
                                    </div>
                                    <div className="mistake-item">
                                        <i className="fas fa-bullhorn"></i>
                                        <div>
                                            <h4>Unclear or Missing Call-to-Action</h4>
                                            <p>Even if your flyer includes all necessary information, viewers need clear direction on what to do next. Flyers without obvious calls-to-action—like "RSVP Now" buttons, website URLs, or QR codes—create hesitation and reduce conversions. FlyerCheck evaluates whether your call-to-action is prominent and actionable, as this directly impacts whether interested viewers actually take the next step to attend.</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="flyercheck-mistakes-closing">
                                    Each of these mistakes creates friction that prevents potential attendees from converting. FlyerCheck's comprehensive analysis specifically looks for these and other common issues, providing specific recommendations for improvement. By catching these mistakes before publication, you significantly increase your chances of achieving strong event attendance.
                                </p>
                            </div>

                            <div className="flyercheck-faq">
                                <h3 className="flyercheck-subtitle">Frequently Asked Questions</h3>
                                <div className="flyercheck-faq-list">
                                    <div className="faq-item">
                                        <h4>What file formats are supported?</h4>
                                        <p>We support JPG, PNG, AVIF, HEIC, and WEBP image formats. PDF files need to be converted to an image first (you can take a screenshot or use an online converter). Maximum file size is 3MB, and images are automatically compressed if needed. Our system optimizes your image during upload to ensure the best analysis results regardless of your original file format or size.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>How accurate is the AI analysis?</h4>
                                        <p>Our AI is trained on thousands of event flyers and design best practices. It evaluates visual hierarchy, text readability, information completeness, and audience alignment to provide comprehensive, actionable feedback. While AI analysis can't replace professional design consultation, it provides objective, consistent evaluation that catches issues you might miss and offers insights based on proven design principles and conversion optimization strategies.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>Do I need to create an account?</h4>
                                        <p>No account required! Simply upload your flyer and get instant analysis. Your files are processed securely and are not stored after analysis. We prioritize your privacy—your flyer images are processed temporarily for analysis purposes only and are not saved, shared, or used for any other purpose. This makes FlyerCheck accessible to everyone without registration barriers.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>Is my flyer data kept private?</h4>
                                        <p>Absolutely. Your privacy and data security are our top priorities. Flyer images are processed temporarily for analysis and are never stored, shared, or used for any other purpose. Once analysis is complete, your image data is permanently deleted from our systems. We don't track, store, or monetize your content—your flyer designs remain completely private and confidential.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>Can I analyze multiple flyers?</h4>
                                        <p>Yes, you can analyze as many flyers as you need. There are no limits on the number of analyses you can run. This makes it easy to test multiple design variations, compare different approaches, or refine your flyer through iterative improvements. Simply upload each version separately, and you'll receive independent analysis for each one, helping you identify which design elements work best.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>What design principles does the AI check?</h4>
                                        <p>The AI evaluates your flyer across multiple dimensions including visual clarity and hierarchy, text readability and contrast, information completeness, branding consistency, call-to-action effectiveness, and audience alignment. It checks for common design mistakes like missing critical information, poor readability, unclear messaging, and weak visual hierarchy. The analysis provides scores and specific recommendations for each dimension.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>How does this compare to hiring a designer?</h4>
                                        <p>FlyerCheck complements rather than replaces professional design services. While a designer provides creative vision and custom solutions, FlyerCheck offers instant, objective analysis based on proven design and conversion principles. Many designers use FlyerCheck to validate their work before client presentation, and non-designers use it to ensure their flyers meet quality standards. It's particularly valuable for quick iterations and catching issues that might slip through even experienced designers.</p>
                                    </div>
                                    <div className="faq-item">
                                        <h4>What makes a flyer effective?</h4>
                                        <p>An effective flyer clearly communicates the what, when, where, and why of your event. It has strong visual hierarchy that guides the eye to key information, readable text with proper contrast, complete information without requiring viewers to search elsewhere, and alignment with your target audience's expectations and preferences. Our analysis checks all these elements and provides specific recommendations for improvement. The most effective flyers make it easy for viewers to understand the event and take action to attend.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        );
    } catch (error) {
        console.error('FlyerCheckPage error:', error);
        reportError(error);
        return null;
    }
}

export default FlyerCheckPage;