import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
    return (
        <section className="pricing-section">
            <div className="container">
                <h2 className="pricing-title">Luxury Pricing</h2>
                <div className="pricing-cards">
                    <div className="pricing-card">
                        <h3 className="card-title">Basic Package</h3>
                        <p className="card-price">$49</p>
                        <ul className="card-features">
                            <li>High-quality cosmetics</li>
                            <li>Free shipping</li>
                            <li>Exclusive access to new products</li>
                        </ul>
                        <button className="card-button">Select Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Premium Package</h3>
                        <p className="card-price">$99</p>
                        <ul className="card-features">
                            <li>All Basic Package features</li>
                            <li>Personalized consultation</li>
                            <li>Luxury gift wrapping</li>
                        </ul>
                        <button className="card-button">Select Package</button>
                    </div>
                    <div className="pricing-card">
                        <h3 className="card-title">Ultimate Package</h3>
                        <p className="card-price">$149</p>
                        <ul className="card-features">
                            <li>All Premium Package features</li>
                            <li>VIP access to events</li>
                            <li>Monthly subscription box</li>
                        </ul>
                        <button className="card-button">Select Package</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;