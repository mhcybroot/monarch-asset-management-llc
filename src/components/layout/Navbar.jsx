import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Button from '../ui/Button';
import './Navbar.css';

import logo from '../../assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logo} alt="Monarch Asset Management" className="logo-image" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="navbar-links desktop-only">
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </nav>

                <div className="navbar-actions desktop-only">
                    <ThemeToggle />
                    <Link to="/contact">
                        <Button variant="primary" size="sm">Get Quote</Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle mobile-only">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <nav className="mobile-links">
                        <Link to="/">Home</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/contact" className="mobile-cta">
                            <Button variant="primary" fullWidth>Get Quote</Button>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
