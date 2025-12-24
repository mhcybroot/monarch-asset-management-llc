import React from 'react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionHeader from '../ui/SectionHeader';
import Reveal from '../ui/Reveal';
import { Star } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        quote: "Monarch's attention to detail in property preservation is unmatched. They saved us significant costs on a portfolio of distressed assets.",
        author: "Sarah Jenkins",
        role: "Senior Asset Manager, Beacon Capital"
    },
    {
        quote: "Reliable, professional, and always compliant. Their team handles our tenant turns with incredible efficiency.",
        author: "Michael Ross",
        role: "Director of Operations, Urban Living"
    },
    {
        quote: "The renovation work was top-tier. They transformed a neglected property into a market-ready gem in record time.",
        author: "David Chen",
        role: "Real Estate Investor"
    }
];

const Testimonials = () => {
    return (
        <Section className="testimonials">
            <SectionHeader
                eyebrow="Testimonials"
                title="Client Stories"
                subtitle="Trusted by industry leaders."
            />

            <div className="testimonials-grid">
                {testimonials.map((item, index) => (
                    <Card key={index} className="testimonial-card">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill="var(--color-secondary)" stroke="none" />
                            ))}
                        </div>
                        <p className="quote">"{item.quote}"</p>
                        <div className="author">
                            <strong>{item.author}</strong>
                            <span>{item.role}</span>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Testimonials;
