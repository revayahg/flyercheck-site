import { getPostBySlug } from '../content/blogPosts';
import { buildArticleSchema } from './articleSchema.js';
import { faqItems, faqSchemaEntities } from '../content/faqContent.js';

const baseUrl = 'https://www.flyercheck.io';
const defaultOGImage = 'https://www.flyercheck.io/favicon-512.png';

const seoConfig = {
    '/': {
        title: 'Catch Flyer Mistakes Before Launch | FlyerCheck',
        description: 'Free AI flyer review for event promoters, plus guides on event ops and hospitality execution. Flag missing dates and weak CTAs before you publish.',
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
    '/faq': {
        title: 'FlyerCheck FAQ — Common Questions Answered',
        description: 'Answers to common questions about FlyerCheck — what it analyzes, who it\'s for, how it works, and what to do with your results.',
        keywords: 'FlyerCheck FAQ, flyer analysis questions, free flyer check help',
        ogTitle: 'FlyerCheck FAQ — Common Questions Answered',
        ogDescription: 'Answers to common questions about FlyerCheck — what it analyzes, who it\'s for, how it works, and what to do with your results.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/how-it-works': {
        title: 'How FlyerCheck Works — AI Flyer Analysis Explained',
        description: 'A step-by-step explanation of how FlyerCheck analyzes your event flyer and what happens behind the scenes.',
        keywords: 'how FlyerCheck works, AI flyer analysis, flyer review process',
        ogTitle: 'How FlyerCheck Works — AI Flyer Analysis Explained',
        ogDescription: 'A step-by-step explanation of how FlyerCheck analyzes your event flyer and what happens behind the scenes.',
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
        ogType: 'website',
        noindex: true
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
        description: 'Every FlyerCheck page in one place: the free flyer analyzer, 22+ event ops articles, policies, and contact.',
        keywords: 'FlyerCheck sitemap, flyercheck.io',
        ogTitle: 'flyercheck.io Sitemap',
        ogDescription: 'Index of the FlyerCheck analyzer, blog articles, and policy pages.',
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
    },
    '/404': {
        title: 'Page Not Found (404) | FlyerCheck',
        description: 'This URL does not exist on flyercheck.io. Use the links on this page to reach the analyzer, blog, FAQ, or sitemap.',
        keywords: 'FlyerCheck 404, page not found',
        ogTitle: 'Page Not Found (404) | FlyerCheck',
        ogDescription: 'This URL does not exist on flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website',
        noindex: true
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
        return seoConfig['/404'];
    }
    return seoConfig['/404'];
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

    // Robots — noindex on 404 and other noindex pages
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (config.noindex) {
        if (!metaRobots) {
            metaRobots = document.createElement('meta');
            metaRobots.setAttribute('name', 'robots');
            document.head.appendChild(metaRobots);
        }
        metaRobots.setAttribute('content', 'noindex, follow');
    } else if (metaRobots) {
        metaRobots.remove();
    }
}

// Update structured data (JSON-LD)
function updateStructuredData(path, config, url) {
    // Remove existing structured data scripts (keep page-level JSON-LD from usePageJsonLd)
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => {
        if (script.getAttribute("data-page-jsonld") === "true") return;
        script.remove();
    });
    
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
        if (post) {
            pageSchema = buildArticleSchema(post);
        }
    } else if (path === '/contact') {
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Us",
            "description": config.description
        };
    } else if (path === '/about') {
        // Person schema is injected by AboutPage.jsx via usePageJsonLd
        pageSchema = null;
    }
    
    // Add organization schema (keep page-level JSON-LD after it)
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.textContent = JSON.stringify(organizationSchema);
    const pageJsonLd = document.querySelector('script[data-page-jsonld="true"]');
    if (pageJsonLd) {
        document.head.insertBefore(orgScript, pageJsonLd);
    } else {
        document.head.appendChild(orgScript);
    }
    
    // Add page-specific schema if exists (before page-level JSON-LD when present)
    if (pageSchema) {
        const pageScript = document.createElement('script');
        pageScript.type = 'application/ld+json';
        pageScript.textContent = JSON.stringify(pageSchema);
        const pageJsonLdAfterOrg = document.querySelector('script[data-page-jsonld="true"]');
        if (pageJsonLdAfterOrg) {
            document.head.insertBefore(pageScript, pageJsonLdAfterOrg);
        } else {
            document.head.appendChild(pageScript);
        }
    }

    // FAQPage schema for AEO — full set on /faq; homepage subset for rich results
    const homepageFaqItems = faqItems.filter((item) =>
        [
            'What does FlyerCheck analyze?',
            'Is FlyerCheck free?',
            'Who is FlyerCheck designed for?',
            'How long does an analysis take?',
        ].includes(item.q)
    );
    const faqList =
        path === '/faq' && faqItems.length
            ? faqItems
            : path === '/' && homepageFaqItems.length
              ? homepageFaqItems
              : null;
    if (faqList) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqSchemaEntities(faqList)
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

