import React from 'react';
import './Section.css';

const Section = ({
    children,
    id = '',
    className = '',
    variant = 'default', // default, alt, dark
    fullWidth = false
}) => {
    return (
        <section id={id} className={`section section-${variant} ${className}`}>
            <div className={fullWidth ? '' : 'container section-container'}>
                {children}
            </div>
        </section>
    );
};

export default Section;
