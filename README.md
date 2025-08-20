import React from 'react';

const Readme: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', padding: '20px' }}>
      <h1 style={{ color: '#D5006D' }}>Luxury FashionTV Cosmetics</h1>
      <h2 style={{ color: '#D5006D' }}>Overview</h2>
      <p>
        Welcome to the Luxury FashionTV Cosmetics website! This platform is dedicated to offering high-end cosmetic products with an elegant design.
      </p>
      <h2 style={{ color: '#D5006D' }}>Design</h2>
      <p>
        The website features a sophisticated design in pink and white colors, embodying luxury and elegance.
      </p>
      <h2 style={{ color: '#D5006D' }}>Features</h2>
      <ul>
        <li>High-quality product images</li>
        <li>Elegant layout and typography</li>
        <li>Responsive design for all devices</li>
        <li>Easy navigation and user-friendly interface</li>
      </ul>
      <h2 style={{ color: '#D5006D' }}>Getting Started</h2>
      <p>
        To get started, clone the repository and install the necessary dependencies.
      </p>
      <h2 style={{ color: '#D5006D' }}>Installation</h2>
      <pre>
        <code>
          git clone https://github.com/yourusername/fashiontv-cosmetics.git
          <br />
          cd fashiontv-cosmetics
          <br />
          npm install
        </code>
      </pre>
      <h2 style={{ color: '#D5006D' }}>Usage</h2>
      <p>
        After installation, you can run the application using:
      </p>
      <pre>
        <code>npm start</code>
      </pre>
      <h2 style={{ color: '#D5006D' }}>Contributing</h2>
      <p>
        Contributions are welcome! Please submit a pull request for any improvements or features.
      </p>
      <h2 style={{ color: '#D5006D' }}>License</h2>
      <p>
        This project is licensed under the MIT License.
      </p>
    </div>
  );
};

export default Readme;