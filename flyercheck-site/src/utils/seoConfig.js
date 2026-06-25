import { getPostBySlug } from '../content/blogPosts';

const baseUrl = 'https://www.flyercheck.io';
const defaultOGImage = 'https://www.flyercheck.io/favicon-512.png';

// FAQ data for FAQPage schema (AEO) - must match on-page content
const faqFlyerCheck = [
    { q: 'What does FlyerCheck analyze?', a: 'FlyerCheck reviews event flyer content for communication clarity, information completeness, and common design or layout issues that may affect audience understanding.' },
    { q: 'Who is FlyerCheck designed for?', a: 'FlyerCheck is designed for event organizers, hospitality teams, marketers, venue operators, and anyone responsible for creating or reviewing promotional materials for live experiences.' },
    { q: 'Does FlyerCheck replace a graphic designer?', a: 'No. FlyerCheck is intended as a review and quality-control tool. It helps identify potential issues before publishing, but it does not replace professional design judgment.' },
    { q: 'Can FlyerCheck be used for different types of events?', a: 'Yes. FlyerCheck can support a wide range of event types, including community events, hospitality activations, festivals, venue programming, and corporate events.' },
    { q: 'Why is flyer clarity so important?', a: 'A flyer often serves as the first impression of an event. If key information is missing or hard to understand, potential guests may not take the next step.' }
];

const seoConfig = {
    '/': {
        title: 'Catch Flyer Mistakes Before Launch | FlyerCheck',
        description: 'Your audience finds the typo before you do. Free AI flyer review flags missing dates, weak CTAs, and clutter—before you publish.',
        keywords: 'FlyerCheck, flyer analysis, AI flyer check, event flyer review',
        ogTitle: 'Catch Flyer Mistakes Before Launch',
        ogDescription: 'Free AI flyer review for event promoters—spot what costs you RSVPs before your flyer goes live.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/about': {
        title: 'Who Built FlyerCheck? Event Ops + AI | FlyerCheck',
        description: 'FlyerCheck comes from operators who\'ve run galas, festivals, and venue nights—not a generic SaaS team. Meet who\'s behind the tool.',
        keywords: 'about FlyerCheck, event operations, hospitality technology',
        ogTitle: 'Who Built FlyerCheck?',
        ogDescription: 'Event operators building AI tools for clearer flyers and stronger live-event execution.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/flyercheck': {
        title: 'Upload Your Flyer—Free AI Review | FlyerCheck',
        description: 'Missing time, buried venue, weak headline? FlyerCheck scans your flyer in seconds and flags what stops people from showing up.',
        keywords: 'FlyerCheck tool, flyer upload, AI flyer analysis',
        ogTitle: 'Free AI Flyer Upload & Review',
        ogDescription: 'Upload your event flyer—get instant feedback on clarity, completeness, and conversion killers.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/blog': {
        title: 'Event Ops Blog: Flyers, Vendors & ROS | FlyerCheck',
        description: 'Where budgets leak, spreadsheets fail, vendors collide, and flyers lose RSVPs—practical reads for promoters and planners.',
        keywords: 'FlyerCheck blog, event operations, hospitality blog',
        ogTitle: 'FlyerCheck Event Ops Blog',
        ogDescription: 'Articles on flyers, vendor chaos, run-of-show discipline, and hospitality execution.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/contact': {
        title: 'Contact FlyerCheck—Support & Feedback',
        description: 'Bug, partnership idea, or flyer tool feedback? Message the FlyerCheck team—we read every note from promoters and venues.',
        keywords: 'contact FlyerCheck, FlyerCheck support',
        ogTitle: 'Contact FlyerCheck',
        ogDescription: 'Reach the FlyerCheck team for support, product feedback, or partnerships.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/privacy': {
        title: 'FlyerCheck Privacy Policy | flyercheck.io',
        description: 'What we collect when you upload a flyer, how long we keep it, and your choices—plain-language privacy for flyercheck.io.',
        keywords: 'FlyerCheck privacy policy, flyercheck.io',
        ogTitle: 'FlyerCheck Privacy Policy',
        ogDescription: 'How FlyerCheck handles uploads, data, and your privacy at flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/terms': {
        title: 'FlyerCheck Terms of Service | flyercheck.io',
        description: 'Rules for using the FlyerCheck AI tool—uploads, acceptable use, and limitations. Read before you analyze your next flyer.',
        keywords: 'FlyerCheck terms of service, flyercheck.io',
        ogTitle: 'FlyerCheck Terms of Service',
        ogDescription: 'Terms for using the FlyerCheck flyer analysis service at flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/sitemap': {
        title: 'flyercheck.io Sitemap—Tool, Blog & Policies',
        description: 'Every FlyerCheck page in one place: the free flyer analyzer, 18 ops articles, policies, and contact.',
        keywords: 'FlyerCheck sitemap, flyercheck.io',
        ogTitle: 'flyercheck.io Sitemap',
        ogDescription: 'Index of the FlyerCheck tool, blog, and policy pages.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/acceptable-use': {
        title: 'FlyerCheck Acceptable Use | flyercheck.io',
        description: 'What\'s allowed when you upload flyers—and what isn\'t. Clear rules for promoters, venues, and agencies using FlyerCheck.',
        keywords: 'FlyerCheck acceptable use, flyercheck.io',
        ogTitle: 'FlyerCheck Acceptable Use',
        ogDescription: 'Guidelines for responsible use of FlyerCheck and flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website'
    }
};

// Get SEO config for a path (includes dynamic blog posts)
function getSEOConfig(path) {
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
    if (seoConfig[cleanPath]) return seoConfig[cleanPath];
    const blogMatch = cleanPath.match(/^\/blog\/(.+)$/);
    if (blogMatch) {
        const post = getPostBySlug(blogMatch[1]);
        if (post) {
            const title = post.seoTitle ?? `${post.title} | FlyerCheck`;
            const description = post.seoDescription ?? post.description;
            const ogTitle = post.ogTitle ?? post.title;
            return {
                title,
                description,
                keywords: `FlyerCheck, ${post.title}, event operations, hospitality`,
                ogTitle,
                ogDescription: description,
                ogImage: defaultOGImage,
                ogType: 'article',
                datePublished: post.date,
                author: post.author
            };
        }
    }
    return seoConfig['/'];
}

// Update meta tags dynamically
function updateMetaTags(config, url) {
    // Update title
    document.title = config.title;
    
    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.description);
    
    // Update OG tags
    const ogTags = {
        'og:title': config.ogTitle,
        'og:description': config.ogDescription,
        'og:image': config.ogImage,
        'og:url': url,
        'og:type': config.ogType,
        'og:site_name': 'FlyerCheck™'
    };
    
    Object.keys(ogTags).forEach(property => {
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', ogTags[property]);
    });
    
    // Update Twitter Card tags
    const twitterTags = {
        'twitter:card': 'summary_large_image',
        'twitter:title': config.ogTitle,
        'twitter:description': config.ogDescription,
        'twitter:image': config.ogImage
    };
    
    Object.keys(twitterTags).forEach(name => {
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('name', name);
            document.head.appendChild(tag);
        }
        tag.setAttribute('content', twitterTags[name]);
    });

    // Author meta (dynamic blog posts from getSEOConfig include config.author)
    let metaAuthor = document.querySelector('meta[name="author"]');
    if (config.author) {
        if (!metaAuthor) {
            metaAuthor = document.createElement('meta');
            metaAuthor.setAttribute('name', 'author');
            document.head.appendChild(metaAuthor);
        }
        metaAuthor.setAttribute('content', config.author);
    } else if (metaAuthor) {
        metaAuthor.remove();
    }
}

// Update structured data (JSON-LD)
function updateStructuredData(path, config, url) {
    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());
    
    // Base organization schema for all pages
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "FlyerCheck",
        "url": baseUrl,
        "logo": defaultOGImage,
        "parentOrganization": {
            "@type": "Organization",
            "name": "Revaya Hospitality Group",
            "url": "https://www.revayahg.com"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@revayahg.com",
            "contactType": "customer service"
        },
        "sameAs": []
    };
    
    // Page-specific schemas
    let pageSchema = null;
    
    if (path === '/') {
        // WebSite schema is injected by LandingPage.jsx
        pageSchema = null;
    } else if (path === '/flyercheck') {
        // WebApplication schema is injected by FlyerCheckPage.jsx
        pageSchema = null;
    } else if (path === '/blog') {
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "FlyerCheck Blog",
            "description": config.description,
            "publisher": {
                "@type": "Organization",
                "name": "FlyerCheck",
                "parentOrganization": {
                    "@type": "Organization",
                    "name": "Revaya Hospitality Group"
                }
            }
        };
    } else if (path.startsWith('/blog/')) {
        const slug = path.slice('/blog/'.length);
        const post = getPostBySlug(slug);
        if (post && slug === 'flyer-blind-spots') {
            pageSchema = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.seoDescription ?? post.description,
                "author": {
                    "@type": "Person",
                    "name": post.author || "Revaya Hospitality Group"
                },
                "datePublished": post.date,
                "publisher": {
                    "@type": "Organization",
                    "name": "Revaya Hospitality Group",
                    "url": baseUrl
                }
            };
        }
        // Article schema for /blog/:slug is injected by BlogPostPage.jsx
    } else if (path === '/contact') {
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "description": config.description
        };
    }
    
    // Add organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);
    
    // Add page-specific schema if exists
    if (pageSchema) {
        const pageScript = document.createElement('script');
        pageScript.type = 'application/ld+json';
        pageScript.textContent = JSON.stringify(pageSchema);
        document.head.appendChild(pageScript);
    }

    // FAQPage schema for AEO (FlyerCheck)
    const faqList = path === '/flyercheck' ? faqFlyerCheck : null;
    if (faqList && faqList.length) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqList.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": a
                }
            }))
        };
        const faqScript = document.createElement('script');
        faqScript.type = 'application/ld+json';
        faqScript.textContent = JSON.stringify(faqSchema);
        document.head.appendChild(faqScript);
    }
}

// Update canonical tag
function updateCanonical() {
    const canonicalBaseUrl = 'https://www.flyercheck.io';
    let path = window.location.pathname;
    if (path !== '/' && path.endsWith('/')) path = path.slice(0, -1);
    const canonicalUrl = canonicalBaseUrl + path + (window.location.search || '');
    let canonicalLink = document.getElementById('canonical-link');
    if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.id = 'canonical-link';
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;
}

/** Single entry point: run meta, structured data, and canonical from current path. Call on load and on route change (e.g. React Router). */
export function updateSEO() {
    const path = window.location.pathname;
    const cleanPath = path === '/' ? '/' : path.replace(/\/$/, '');
    const url = baseUrl + (path === '/' ? '' : path);
    const config = getSEOConfig(cleanPath);
    updateMetaTags(config, url);
    updateStructuredData(cleanPath, config, url);
    updateCanonical();
}

// Initialize SEO on page load and route changes (fallbacks for non-React entry)
(function() {
    updateSEO();
    let lastPath = window.location.pathname + window.location.search;
    function checkPath() {
        const currentPath = window.location.pathname + window.location.search;
        if (currentPath !== lastPath) {
            lastPath = currentPath;
            updateSEO();
        }
    }
    window.addEventListener('popstate', updateSEO);
    document.addEventListener('click', function(e) {
        const anchor = e.target.closest('a[href]');
        if (anchor && anchor.href) {
            try {
                const url = new URL(anchor.href);
                if (url.origin === window.location.origin) setTimeout(checkPath, 50);
            } catch (err) {}
        }
    }, true);
    setInterval(checkPath, 500);
})();

