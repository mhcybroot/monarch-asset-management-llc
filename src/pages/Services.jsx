import React from 'react';
import { Home, PenTool, RefreshCw, CheckCircle, Key } from 'lucide-react';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
import './Services.css';

import imgPreservation from '../assets/images/svc-preservation-detail.png';
import imgMaintenance from '../assets/images/svc-maintenance-detail.png';
import imgRenovation from '../assets/images/svc-renovation-detail.png';
import imgInspections from '../assets/images/service-4-inspections.png'; // Reused
import imgTurn from '../assets/images/hero-bg.png'; // Reused

const detailedServices = [
    {
        icon: <Home size={40} />,
        image: imgPreservation,
        title: 'Property Preservation',
        description: 'Protecting your vacant assets from deterioration and vandalism.',
        items: ['Securing & Re-keying', 'Debris Removal', 'Winterization', 'Lawn Maintenance', 'Board-ups']
    },
    {
        icon: <PenTool size={40} />,
        image: imgMaintenance,
        title: 'Property Maintenance',
        description: 'Ongoing upkeep to ensure tenant satisfaction and asset longevity.',
        items: ['Emergency Repairs', 'Plumbing & Electrical', 'HVAC Service', 'Pest Control', 'Janitorial Services']
    },
    {
        icon: <RefreshCw size={40} />,
        image: imgRenovation,
        title: 'Renovation & Remodeling',
        description: 'Transforming distressed properties into market-ready assets.',
        items: ['Full Rehabilitations', 'Kitchen & Bath Upgrades', 'Flooring & Paint', 'Roofing & Siding', 'Structural Repairs']
    },
    {
        icon: <CheckCircle size={40} />,
        image: imgInspections,
        title: 'Inspections & Compliance',
        description: 'Ensuring your properties meet all local codes and safety standards.',
        items: ['Occupancy Checks', 'Code Compliance Audits', 'Safety Inspections', 'Damage Assessments', 'Insurance Claims Support']
    },
    {
        icon: <Key size={40} />,
        image: imgTurn,
        title: 'Tenant Turn Services',
        description: 'Rapid turnover services to minimize vacancy periods.',
        items: ['Move-out Inspections', 'Deep Cleaning', 'Punch-list Repairs', 'Lock Changes', 'Painting & Touch-ups']
    }
];

const Services = () => {
    return (
        <div className="page-services">
            <Section className="services-header text-center" variant="alt">
                <SectionHeader
                    title="Our Services"
                    subtitle="Comprehensive asset management solutions tailored to your needs."
                />
            </Section>

            <Section>
                <div className="services-list">
                    {detailedServices.map((service, index) => (
                        <Reveal key={index} width="100%">
                            <div className="service-row">
                                <div className="service-content-col">
                                    <div className="service-info">
                                        <div className="service-icon-wrapper">{service.icon}</div>
                                        <h2>{service.title}</h2>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="service-details-list">
                                        <h3>What We Include</h3>
                                        <ul>
                                            {service.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="service-image-col">
                                    <img src={service.image} alt={service.title} className="service-main-image" />
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
