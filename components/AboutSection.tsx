import React from 'react';
import './AboutSection.css'; // Assuming you have a CSS file for styling

const AboutSection: React.FC = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                    Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are crafted with the finest ingredients, 
                    designed to enhance your natural beauty and provide a lavish experience.
                </p>
                <p className="about-description">
                    Embrace the essence of sophistication with our exclusive range of cosmetics, tailored for the discerning individual.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;