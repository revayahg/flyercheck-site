function Header() {
    try {
        const [isMenuOpen, setIsMenuOpen] = React.useState(false);

        return (
            <header className="header py-4 shadow-sm" data-name="header">
                <div className="container mx-auto px-4">
                    <nav className="flex justify-between items-center">
                        <div className="text-2xl font-bold" data-name="logo">
                            Your Company
                        </div>
                        
                        <div className="hidden md:flex space-x-8" data-name="desktop-nav">
                            <a href="#home" className="nav-link" data-name="nav-home">Home</a>
                            <a href="#services" className="nav-link" data-name="nav-services">Services</a>
                            <a href="#about" className="nav-link" data-name="nav-about">About</a>
                            <a href="#contact" className="nav-link" data-name="nav-contact">Contact</a>
                        </div>

                        <button 
                            className="md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            data-name="mobile-menu-button"
                        >
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                        </button>
                    </nav>

                    {isMenuOpen && (
                        <div className="md:hidden mt-4 space-y-4" data-name="mobile-nav">
                            <a href="#home" className="block nav-link" data-name="mobile-nav-home">Home</a>
                            <a href="#services" className="block nav-link" data-name="mobile-nav-services">Services</a>
                            <a href="#about" className="block nav-link" data-name="mobile-nav-about">About</a>
                            <a href="#contact" className="block nav-link" data-name="mobile-nav-contact">Contact</a>
                        </div>
                    )}
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
