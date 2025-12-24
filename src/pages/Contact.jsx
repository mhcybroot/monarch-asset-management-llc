import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-contact">
            <Section className="contact-header text-center" variant="alt">
                <h1>Contact Us</h1>
                <p className="subtitle">Ready to get started? Get in touch with us today.</p>
            </Section>

            <Section>
                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p className="mb-lg">
                            We are available for all your property preservation and maintenance needs.
                        </p>

                        <div className="info-item">
                            <Phone className="info-icon" />
                            <div>
                                <h3>Phone</h3>
                                <a href="tel:9165189580">(916) 518-9580</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <Mail className="info-icon" />
                            <div>
                                <h3>Email</h3>
                                <a href="mailto:info@monarchassetsmgmt.com">info@monarchassetsmgmt.com</a>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Business Address</h3>
                                <p>3400 Cottage Way, Suite G2,<br />Sacramento, CA 95825</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <MapPin className="info-icon" />
                            <div>
                                <h3>Mailing Address</h3>
                                <p>352 E 8th St, Apt 4F,<br />Brooklyn, NY 11218</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <Card className="contact-form-card">
                        <form action="https://formsubmit.co/info@monarchassetsmgmt.com" method="POST">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" name="name" required placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" name="email" required placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="service">Service Needed</label>
                                <select id="service" name="service">
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Property Preservation">Property Preservation</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Renovation">Renovation</option>
                                    <option value="Compliance">Compliance</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required placeholder="Tell us about your property needs..."></textarea>
                            </div>

                            <input type="hidden" name="_subject" value="New Inquiry from Monarch Website" />
                            <input type="hidden" name="_next" value={window.location.origin + "/contact?success=true"} />
                            <input type="hidden" name="_captcha" value="false" />

                            <Button variant="primary" size="lg" type="submit" style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
