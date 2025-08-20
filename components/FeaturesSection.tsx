import React from 'react';
import './FeaturesSection.css'; // Importing CSS for styling

const featuresData = [
  {
    title: 'Luxury Ingredients',
    description: 'Our cosmetics are made with the finest ingredients for a flawless finish.',
  },
  {
    title: 'Elegant Packaging',
    description: 'Every product is designed to reflect sophistication and style.',
  },
  {
    title: 'Cruelty-Free',
    description: 'We believe in beauty without harm, ensuring all products are cruelty-free.',
  },
  {
    title: 'Exclusive Collections',
    description: 'Discover limited edition products that elevate your beauty routine.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="features-section">
      <h2 className="features-title">Our Features</h2>
      <div className="features-container">
        {featuresData.map((feature, index) => (
          <div key={index} className="feature-item">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;