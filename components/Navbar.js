function Navbar() {
    try {
        const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

        const toggleMobileMenu = () => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            setIsDropdownOpen(false);
        };

        return (
            <nav className="navbar" data-name="navbar">
                <div className="navbar-container">
                    <a href="/" className="navbar-brand" data-name="navbar-brand">
                        <img 
                            src="https://app.trickle.so/storage/public/images/usr_0ad8d73270000001/514b6f7e-130b-496e-9d51-dc2d16df66fb.png"
                            alt="Revaya Logo"
                            className="navbar-logo"
                            data-name="navbar-logo"
                        />
                        <span className="navbar-brand-text" data-name="navbar-brand-text">
                            Revaya Hospitality Group™
                        </span>
                    </a>

                    <button 
                        className="mobile-menu-btn"
                        onClick={toggleMobileMenu}
                        data-name="mobile-menu-button"
                    >
                        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                    
                    <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`} data-name="nav-menu">
                        <a href="/" className="nav-link" data-name="nav-home">Home</a>
                        <a href="/about" className="nav-link" data-name="nav-about">About Us</a>
                        <div 
                            className="dropdown" 
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                            data-name="nav-solutions"
                        >
                            <button className="dropdown-btn">
                                Solutions
                                <span className="dropdown-arrow">▼</span>
                            </button>
                            {isDropdownOpen && (
                                <div className="dropdown-content">
                                    <a href="/revaya-host" className="dropdown-item">Revaya Host™</a>
                                    <a href="/flyercheck" className="dropdown-item">Revaya Flyer Check™</a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        );
    } catch (error) {
        console.error('Navbar component error:', error);
        reportError(error);
        return null;
    }
}
