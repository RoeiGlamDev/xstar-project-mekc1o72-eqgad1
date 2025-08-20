import React from 'react';
import './ContactSection.css'; // Importing CSS for styling

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section" style={{ backgroundColor: '#fff', color: '#d5006d' }}>
            <div className="container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">We would love to hear from you!</p>
                <form className="contact-form">
                    <input type="text" placeholder="Your Name" className="form-input" required />
                    <input type="email" placeholder="Your Email" className="form-input" required />
                    <textarea placeholder="Your Message" className="form-textarea" required></textarea>
                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;