import React from 'react';
import './HeroSection.css'; // Assuming a CSS file for styles

const HeroSection: React.FC = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Luxury Awaits</h1>
                <p className="hero-subtitle">Elevate your beauty with FashionTV Cosmetics</p>
                <button className="hero-button">Shop Now</button>
            </div>
        </div>
    );
};

export default HeroSection;