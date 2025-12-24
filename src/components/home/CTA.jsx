import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Section from '../ui/Section';
import ctaBg from '../../assets/images/cta-bg.png';
import './CTA.css';

const CTA = () => {
    return (
        <Section variant="dark" className="cta-section" style={{ backgroundImage: `url(${ctaBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="cta-content text-center">
                <h2>Ready to Elevate Your Asset Management?</h2>
                <p>Partner with Monarch for professional, reliable, and premium property services.</p>
                <div className="cta-actions">
                    <Link to="/contact">
                        <Button variant="primary" size="lg">Get a Free Quote</Button>
                    </Link>
                    <Link to="/services">
                        <Button variant="outline" size="lg" className="btn-cta-outline">View All Services</Button>
                    </Link>
                </div>
            </div>
        </Section>
    );
};

export default CTA;
