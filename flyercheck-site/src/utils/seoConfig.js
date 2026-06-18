// SEO Metadata Configuration for all pages
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
        title: 'FlyerCheck™ | AI-Powered Event Flyer Analysis',
        description: 'FlyerCheck is a free AI flyer analysis tool for event planners and promoters. Upload your flyer and catch clarity issues, missing details, and conversion problems before launch.',
        keywords: 'FlyerCheck, flyer analysis, AI flyer check, event flyer review, event promotion tools',
        ogTitle: 'FlyerCheck™ | AI-Powered Event Flyer Analysis',
        ogDescription: 'Upload your event flyer for instant AI feedback on clarity, missing information, and conversion blockers before you publish.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/about': {
        title: 'About FlyerCheck™ | Event Operations & Flyer Analysis',
        description: 'Learn about FlyerCheck—the AI flyer review tool on flyercheck.io—and the Revaya Hospitality Group team building technology for event operations and hospitality.',
        keywords: 'about FlyerCheck, event operations, hospitality technology, flyer analysis team',
        ogTitle: 'About FlyerCheck™',
        ogDescription: 'Meet the team behind FlyerCheck and our mission to help event organizers ship clearer flyers and stronger operations.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/flyercheck': {
        title: 'FlyerCheck™ Tool | Upload & Analyze Your Event Flyer',
        description: 'Use the FlyerCheck AI tool to upload your event flyer and get instant feedback on clarity, design, missing information, and conversion blockers before you publish.',
        keywords: 'FlyerCheck tool, flyer upload, AI flyer analysis, event flyer review, flyer QA',
        ogTitle: 'FlyerCheck™ Tool | Upload & Analyze Your Event Flyer',
        ogDescription: 'Upload your event flyer for instant AI-powered analysis—clarity, completeness, and conversion issues flagged before launch.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/blog': {
        title: 'FlyerCheck™ Blog | Event Operations & Hospitality Insights',
        description: 'Articles on event operations, vendor management, run-of-show planning, flyer marketing, and hospitality technology from the FlyerCheck team.',
        keywords: 'FlyerCheck blog, event operations, hospitality blog, event management articles',
        ogTitle: 'FlyerCheck™ Blog',
        ogDescription: 'Event operations and hospitality insights for organizers, venues, and promoters—from the FlyerCheck team.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/contact': {
        title: 'Contact FlyerCheck™ | Support & Inquiries',
        description: 'Contact the FlyerCheck team for product questions, feedback on flyer analysis, partnerships, or support using flyercheck.io.',
        keywords: 'contact FlyerCheck, FlyerCheck support, event flyer tool contact',
        ogTitle: 'Contact FlyerCheck™',
        ogDescription: 'Get in touch with the FlyerCheck team for support, feedback, or partnership inquiries.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/privacy': {
        title: 'Privacy Policy | FlyerCheck™',
        description: 'Privacy Policy for FlyerCheck at www.flyercheck.io. Learn how we collect, use, and protect your information when you use the flyer analysis tool.',
        keywords: 'FlyerCheck privacy policy, flyercheck.io, data protection',
        ogTitle: 'Privacy Policy | FlyerCheck™',
        ogDescription: 'How FlyerCheck collects, uses, and protects your information at flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/terms': {
        title: 'Terms of Service | FlyerCheck™',
        description: 'Terms of Service for FlyerCheck at www.flyercheck.io. Read the terms and conditions for using the AI flyer analysis service.',
        keywords: 'FlyerCheck terms of service, flyercheck.io, terms and conditions',
        ogTitle: 'Terms of Service | FlyerCheck™',
        ogDescription: 'Terms and conditions for using FlyerCheck at flyercheck.io.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/sitemap': {
        title: 'Sitemap | FlyerCheck™',
        description: 'HTML sitemap for flyercheck.io—find the FlyerCheck tool, blog articles, policies, and contact pages.',
        keywords: 'FlyerCheck sitemap, flyercheck.io pages',
        ogTitle: 'Sitemap | FlyerCheck™',
        ogDescription: 'Browse all pages on flyercheck.io including the flyer tool, blog, and policies.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/acceptable-use': {
        title: 'Acceptable Use Policy | FlyerCheck™',
        description: 'Acceptable Use Policy for FlyerCheck at flyercheck.io. Guidelines for using the website and AI flyer analysis service responsibly.',
        keywords: 'FlyerCheck acceptable use, flyercheck.io policy',
        ogTitle: 'Acceptable Use Policy | FlyerCheck™',
        ogDescription: 'Guidelines for acceptable use of FlyerCheck and flyercheck.io.',
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
            const title = `${post.title} | FlyerCheck™`;
            return {
                title,
                description: post.description,
                keywords: `FlyerCheck, ${post.title}, event operations, hospitality`,
                ogTitle: post.title,
                ogDescription: post.description,
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
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": config.ogTitle,
            "description": config.description,
            "url": url
        };
    } else if (path === '/flyercheck') {
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "FlyerCheck",
            "applicationCategory": "BusinessApplication",
            "description": config.description,
            "operatingSystem": "Web",
            "provider": {
                "@type": "Organization",
                "name": "Revaya Hospitality Group"
            }
        };
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
            pageSchema = {
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": post.title,
                "description": post.description,
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

