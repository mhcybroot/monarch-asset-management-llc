import React from 'react';
import { Home, PenTool, RefreshCw } from 'lucide-react';
import Card from '../ui/Card';
import Section from '../ui/Section';
import Reveal from '../ui/Reveal';
import SectionHeader from '../ui/SectionHeader';
import imgPreservation from '../../assets/images/service-1-preservation.png';
import imgMaintenance from '../../assets/images/service-2-maintenance.png';
import imgRenovation from '../../assets/images/service-3-renovation.png';
import './ServicePreview.css';

const services = [
    {
        icon: <Home size={28} />,
        image: imgPreservation,
        title: 'Property Preservation',
        desc: 'Securing and protecting vacant assets to maintain value and ensure insurability.'
    },
    {
        icon: <PenTool size={28} />,
        image: imgMaintenance,
        title: 'Maintenance',
        desc: 'Routine upkeep and emergency repairs to keep properties in optimal condition.'
    },
    {
        icon: <RefreshCw size={28} />,
        image: imgRenovation,
        title: 'Renovation',
        desc: 'Strategic upgrades and remodeling to maximize asset value and marketability.'
    }
];

const ServicePreview = () => {
    return (
        <Section variant="alt" className="service-preview">
            <SectionHeader
                eyebrow="Expertise"
                title="Our Core Expertise"
                subtitle="Comprehensive solutions for modern asset management."
            />

            <div className="services-grid">
                {services.map((service, index) => (
                    <Reveal key={index} delay={index * 0.15}>
                        <Card className="service-card">
                            <div className="service-image-container">
                                <img src={service.image} alt={service.title} className="service-thumb" />
                            </div>
                            <div className="service-content">
                                <div className="service-icon-wrapper">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default ServicePreview;
