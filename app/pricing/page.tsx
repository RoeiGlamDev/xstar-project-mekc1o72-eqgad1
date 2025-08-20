import React from 'react';
import './PricingPage.css'; // Importing CSS for styling

const PricingPage: React.FC = () => {
    return (
        <div className="pricing-page">
            <header className="header">
                <h1>Luxury FashionTV Cosmetics</h1>
                <p>Elevate your beauty with our exclusive products</p>
            </header>
            <section className="pricing-section">
                <h2>Our Pricing Plans</h2>
                <div className="pricing-cards">
                    <div className="card">
                        <h3>Basic Package</h3>
                        <p>$29.99/month</p>
                        <ul>
                            <li>Access to basic products</li>
                            <li>Monthly newsletter</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                    <div className="card">
                        <h3>Premium Package</h3>
                        <p>$49.99/month</p>
                        <ul>
                            <li>Access to premium products</li>
                            <li>Monthly newsletter</li>
                            <li>Exclusive discounts</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                    <div className="card">
                        <h3>Luxury Package</h3>
                        <p>$99.99/month</p>
                        <ul>
                            <li>Access to all products</li>
                            <li>Personalized beauty consultations</li>
                            <li>Exclusive discounts</li>
                        </ul>
                        <button className="btn">Choose Plan</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2023 Luxury FashionTV Cosmetics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default PricingPage;