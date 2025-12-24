import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import heroBg from '../../assets/images/hero-bg.png';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>
                    Preserving Value. <br />
                    <span className="text-highlight">Enhancing Assets.</span>
                </h1>
                <p className="hero-subtitle">
                    Professional property preservation, maintenance, and renovation services for asset managers who demand excellence.
                </p>
                <div className="hero-actions">
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Get a Quote</Button>
                    </Link>
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="btn-hero-outline">Our Services</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
