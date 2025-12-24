import React from 'react';
import Section from '../components/ui/Section';
import Reveal from '../components/ui/Reveal';
import SectionHeader from '../components/ui/SectionHeader';
import './About.css';

import imgMission from '../assets/images/svc-renovation-detail.png'; // Reusing high-quality asset

const About = () => {
    return (
        <div className="page-about">
            <Section className="about-header text-center" variant="dark">
                <SectionHeader
                    title="About Monarch Asset Management"
                    subtitle="Excellence in every detail. Reliability in every action."
                    light
                />
            </Section>

            <Section>
                <div className="about-content">
                    <Reveal width="100%">
                        <div className="about-block about-mission-split">
                            <div className="mission-text">
                                <h2>Our Mission</h2>
                                <p>
                                    At Monarch Asset Management, our mission is to provide comprehensive, high-quality property preservation and maintenance services that protect and enhance the value of your assets. We are dedicated to professionalism, compliance, and speed, ensuring that every property we touch is market-ready and secure.
                                </p>
                            </div>
                            <div className="mission-image">
                                <img src={imgMission} alt="Monarch Mission" />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal width="100%" delay={0.4}>
                        <div className="about-grid">
                            <div className="value-item">
                                <h3>Professionalism</h3>
                                <p>We treat every property as if it were our own, with a uniformed, trained staff and clear communication.</p>
                            </div>
                            <div className="value-item">
                                <h3>Compliance</h3>
                                <p>We stay up-to-date with all local and federal regulations to mitigate risk for our clients.</p>
                            </div>
                            <div className="value-item">
                                <h3>Efficiency</h3>
                                <p>Time is money. We prioritize rapid turnaround times without sacrificing quality.</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>
        </div>
    );
};

export default About;
