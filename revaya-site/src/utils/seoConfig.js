// SEO Metadata Configuration for all pages
import { getPostBySlug } from '../content/blogPosts';

const baseUrl = 'https://www.revayahg.com';
const defaultOGImage = 'https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png';

// FAQ data for FAQPage schema (AEO) - must match on-page content
const faqRevayaHost = [
    { q: 'What types of events can Revaya Host support?', a: 'Revaya Host is designed for a wide range of live experiences including festivals, community events, venue activations, hospitality programming, and corporate events.' },
    { q: 'Who typically uses Revaya Host?', a: 'The platform is intended for event planners, venue managers, hospitality teams, and operations staff responsible for coordinating live events.' },
    { q: 'Is Revaya Host only useful for large events?', a: 'While the platform is especially helpful for complex events, smaller teams can also benefit from having a structured way to organize event logistics and coordination.' },
    { q: 'Can Revaya Host help manage vendors?', a: 'Yes. Revaya Host helps teams organize vendor information and maintain clear communication about logistical details and responsibilities.' },
    { q: 'Is Revaya Host focused on planning or execution?', a: 'Revaya Host supports both. It helps teams organize event details during the planning phase and maintain operational clarity during event execution.' }
];
const faqFlyerCheck = [
    { q: 'What does FlyerCheck analyze?', a: 'FlyerCheck reviews event flyer content for communication clarity, information completeness, and common design or layout issues that may affect audience understanding.' },
    { q: 'Who is FlyerCheck designed for?', a: 'FlyerCheck is designed for event organizers, hospitality teams, marketers, venue operators, and anyone responsible for creating or reviewing promotional materials for live experiences.' },
    { q: 'Does FlyerCheck replace a graphic designer?', a: 'No. FlyerCheck is intended as a review and quality-control tool. It helps identify potential issues before publishing, but it does not replace professional design judgment.' },
    { q: 'Can FlyerCheck be used for different types of events?', a: 'Yes. FlyerCheck can support a wide range of event types, including community events, hospitality activations, festivals, venue programming, and corporate events.' },
    { q: 'Why is flyer clarity so important?', a: 'A flyer often serves as the first impression of an event. If key information is missing or hard to understand, potential guests may not take the next step.' }
];

const seoConfig = {
    '/': {
        title: 'Revaya Hospitality Group™ | Event Solutions & AI-Powered Tools',
        description: 'Powerful event solutions at your fingertips. Try our AI-powered event flyer analysis and comprehensive event management tools.',
        keywords: 'events, hospitality, Revaya Flyer Check, event solutions, Revaya Host, event management, AI flyer analysis',
        ogTitle: 'Revaya Hospitality Group™ | Event Solutions & AI-Powered Tools',
        ogDescription: 'Powerful event solutions at your fingertips. Try our AI-powered event flyer analysis and comprehensive event management tools.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/about': {
        title: 'About Us | Revaya Hospitality Group™',
        description: 'Meet the founders of Revaya Hospitality Group. Jolyse Stultz and Thiago Ferreira bring 15+ years of experience in hospitality, events, and AI innovation.',
        keywords: 'about Revaya, Revaya founders, Jolyse Stultz, Thiago Ferreira, hospitality professionals, event management team',
        ogTitle: 'About Us | Revaya Hospitality Group™',
        ogDescription: 'Meet the founders of Revaya Hospitality Group. Jolyse Stultz and Thiago Ferreira bring 15+ years of experience in hospitality, events, and AI innovation.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/revaya-host': {
        title: 'Revaya Host™ | Comprehensive Event Management Platform',
        description: 'All-in-one event management platform designed for hospitality professionals. Streamline your workflow, enhance collaboration, and deliver exceptional experiences.',
        keywords: 'Revaya Host, event management platform, event planning software, hospitality management, event workflow',
        ogTitle: 'Revaya Host™ | Comprehensive Event Management Platform',
        ogDescription: 'All-in-one event management platform designed for hospitality professionals. Streamline your workflow, enhance collaboration, and deliver exceptional experiences.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/flyercheck': {
        title: 'Revaya Flyer Check™ | AI-Powered Event Flyer Analysis',
        description: 'Get instant AI-powered feedback on your event flyers. Analyze clarity, design, missing information, and conversion blockers before you publish.',
        keywords: 'flyer analysis, AI flyer check, event flyer review, flyer design feedback, event promotion tools',
        ogTitle: 'Revaya Flyer Check™ | AI-Powered Event Flyer Analysis',
        ogDescription: 'Get instant AI-powered feedback on your event flyers. Analyze clarity, design, missing information, and conversion blockers before you publish.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/blog': {
        title: 'Blog | Revaya Hospitality Group™',
        description: 'Read our latest articles, citations, and developments on hospitality, AI, and event management. Insights from founders Jolyse Stultz and Thiago Ferreira.',
        keywords: 'Revaya blog, hospitality blog, event management articles, AI in hospitality, event industry insights',
        ogTitle: 'Blog | Revaya Hospitality Group™',
        ogDescription: 'Read our latest articles, citations, and developments on hospitality, AI, and event management. Insights from founders Jolyse Stultz and Thiago Ferreira.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/blog/flyer-blind-spots': {
        title: 'You\'re Too Close to the Flyer: How Great Events Lose People | Revaya Blog',
        description: 'Discover how event organizers miss critical details in their flyers that prevent potential attendees from showing up. Learn the common blind spots and how to fix them.',
        keywords: 'event flyer mistakes, flyer design tips, event promotion, flyer blind spots, event attendance',
        ogTitle: 'You\'re Too Close to the Flyer: How Great Events Lose People',
        ogDescription: 'Discover how event organizers miss critical details in their flyers that prevent potential attendees from showing up. Learn the common blind spots and how to fix them.',
        ogImage: defaultOGImage,
        ogType: 'article'
    },
    '/contact': {
        title: 'Contact Us | Revaya Hospitality Group™',
        description: 'Get in touch with Revaya Hospitality Group. Contact us for questions about our event solutions, partnerships, or support.',
        keywords: 'contact Revaya, Revaya support, event management contact, hospitality consulting',
        ogTitle: 'Contact Us | Revaya Hospitality Group™',
        ogDescription: 'Get in touch with Revaya Hospitality Group. Contact us for questions about our event solutions, partnerships, or support.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/privacy': {
        title: 'Privacy Policy | Revaya Hospitality Group™',
        description: 'Privacy Policy for Revaya Hospitality Group. Learn how we collect, use, and protect your information.',
        keywords: 'Revaya privacy policy, data protection, privacy',
        ogTitle: 'Privacy Policy | Revaya Hospitality Group™',
        ogDescription: 'Privacy Policy for Revaya Hospitality Group. Learn how we collect, use, and protect your information.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/terms': {
        title: 'Terms of Service | Revaya Hospitality Group™',
        description: 'Terms of Service for Revaya Hospitality Group. Read our terms and conditions for using our services.',
        keywords: 'Revaya terms of service, terms and conditions',
        ogTitle: 'Terms of Service | Revaya Hospitality Group™',
        ogDescription: 'Terms of Service for Revaya Hospitality Group. Read our terms and conditions for using our services.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/sitemap': {
        title: 'Sitemap | Revaya Hospitality Group™',
        description: 'Sitemap for Revaya Hospitality Group website. Find all pages and resources.',
        keywords: 'sitemap, Revaya sitemap',
        ogTitle: 'Sitemap | Revaya Hospitality Group™',
        ogDescription: 'Sitemap for Revaya Hospitality Group website. Find all pages and resources.',
        ogImage: defaultOGImage,
        ogType: 'website'
    },
    '/acceptable-use': {
        title: 'Acceptable Use Policy | Revaya Hospitality Group™',
        description: 'Acceptable Use Policy for Revaya Hospitality Group. Guidelines for using our website and services including Revaya Host and FlyerCheck.',
        keywords: 'acceptable use, Revaya policy, terms of use',
        ogTitle: 'Acceptable Use Policy | Revaya Hospitality Group™',
        ogDescription: 'Acceptable Use Policy for Revaya Hospitality Group. Guidelines for using our website and services including Revaya Host and FlyerCheck.',
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
            const title = post.title + ' | Revaya Hospitality Group™';
            return {
                title,
                description: post.description,
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
        'og:site_name': 'Revaya Hospitality Group™'
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
        "name": "Revaya Hospitality Group",
        "url": baseUrl,
        "logo": defaultOGImage,
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
        // Homepage - Organization + SoftwareApplication
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Revaya Hospitality Group",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web",
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
            }
        };
    } else if (path === '/revaya-host') {
        pageSchema = {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Revaya Host",
            "applicationCategory": "BusinessApplication",
            "description": config.description,
            "operatingSystem": "Web",
            "provider": {
                "@type": "Organization",
                "name": "Revaya Hospitality Group"
            }
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
            "name": "Revaya Hospitality Group Blog",
            "description": config.description,
            "publisher": {
                "@type": "Organization",
                "name": "Revaya Hospitality Group"
            }
        };
    } else if (path.startsWith('/blog/')) {
        const slug = path.slice('/blog/'.length);
        const post = getPostBySlug(slug);
        if (post) {
            const datePublished = post.date ? (typeof post.date === 'string' && /^\d{4}-\d{2}-\d{2}/.test(post.date) ? post.date : new Date(post.date).toISOString().slice(0, 10)) : undefined;
            pageSchema = {
                "@context": "https://schema.org",
                "@type": "Article",
                "headline": post.title,
                "description": post.description,
                "author": {
                    "@type": "Person",
                    "name": post.author || "Revaya Hospitality Group"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "Revaya Hospitality Group",
                    "logo": {
                        "@type": "ImageObject",
                        "url": defaultOGImage
                    }
                },
                ...(datePublished && { datePublished }),
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "@id": url
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

    // FAQPage schema for AEO (Revaya Host + FlyerCheck)
    const faqList = path === '/revaya-host' ? faqRevayaHost : path === '/flyercheck' ? faqFlyerCheck : null;
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
    const canonicalBaseUrl = 'https://www.revayahg.com';
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

