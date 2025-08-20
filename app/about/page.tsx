import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fff', color: '#000', padding: '50px' }}>
      <h1 style={{ color: '#d5006d', textAlign: 'center' }}>About FashionTV Cosmetics</h1>
      <p style={{ fontSize: '18px', textAlign: 'center' }}>
        Welcome to FashionTV Cosmetics, where luxury meets elegance. Our products are crafted with the finest ingredients to enhance your natural beauty.
      </p>
      <h2 style={{ color: '#d5006d', textAlign: 'center' }}>Our Mission</h2>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>
        At FashionTV Cosmetics, we aim to empower individuals through high-quality cosmetics that inspire confidence and sophistication.
      </p>
      <h2 style={{ color: '#d5006d', textAlign: 'center' }}>Our Products</h2>
      <p style={{ fontSize: '16px', textAlign: 'center' }}>
        Explore our luxurious range of cosmetics, from vibrant lipsticks to flawless foundations, all designed to elevate your beauty routine.
      </p>
    </div>
  );
};

export default AboutPage;