function Footer() {
    try {
        return (
            <footer className="footer" data-name="footer">
                <div className="container mx-auto px-4">
                    <div className="footer-content" data-name="footer-content">
                        <div className="footer-links" data-name="footer-links">
                            <div className="footer-left" data-name="footer-left">
                                <a href="/" className="footer-link">Home</a>
                                <a href="/about" className="footer-link">About Us</a>
                                <a href="/blog" className="footer-link">Blog</a>
                                <a href="/contact" className="footer-link">Contact</a>
                            </div>
                            <div className="footer-solutions" data-name="footer-solutions">
                                <p className="footer-section-title">Solutions</p>
                                <ul className="footer-solutions-list">
                                    <li><a href="/revaya-host">Revaya Host™</a></li>
                                    <li><a href="/flyercheck">Revaya FlyerCheck™</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-legal" data-name="footer-legal">
                            <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
                            <a href="/terms" className="footer-legal-link">Terms of Service</a>
                        </div>
                        <div className="footer-copyright" data-name="footer-copyright">
                            <p>© 2025 Revaya Hospitality Group™. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
