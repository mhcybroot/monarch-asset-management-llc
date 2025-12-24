import React from 'react';
import Reveal from './Reveal';
import './SectionHeader.css';

const SectionHeader = ({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    light = false,
    className = ''
}) => {
    return (
        <Reveal width="100%">
            <div className={`section-header ${align} ${light ? 'light' : ''} ${className}`}>
                {eyebrow && <span className="header-eyebrow">{eyebrow}</span>}
                <h2>{title}</h2>
                <div className="header-accent"></div>
                {subtitle && <p className="header-subtitle">{subtitle}</p>}
            </div>
        </Reveal>
    );
};

export default SectionHeader;
