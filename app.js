function App() {
    try {
        const path = window.location.pathname;

        return (
            <div className="app" data-name="app">
                {path === '/flyercheck' ? <FlyerCheckPage /> :
                 path === '/about' ? <AboutPage /> :
                 path === '/contact' ? <ContactPage /> :
                 path === '/blog' ? <BlogPage /> :
                 path === '/blog/flyer-blind-spots' ? <BlogPostFlyerBlindSpots /> :
                 path === '/revaya-host' ? <RevayaHostPage /> :
                 path === '/privacy' ? <PrivacyPage /> :
                 path === '/terms' ? <TermsPage /> :
                 path === '/sitemap' ? <SitemapPage /> :
                 <LandingPage />}
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
