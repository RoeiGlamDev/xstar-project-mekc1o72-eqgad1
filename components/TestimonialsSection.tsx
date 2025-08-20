import React from 'react';
import './TestimonialsSection.css'; // Importing CSS for styling

const testimonials = [
  {
    id: 1,
    name: 'Sophia Loren',
    quote: 'The best cosmetics I have ever used. Truly luxurious!',
    image: '/images/sophia.jpg', // Path to image
  },
  {
    id: 2,
    name: 'Gigi Hadid',
    quote: 'FashionTV cosmetics elevate my beauty routine to the next level.',
    image: '/images/gigi.jpg', // Path to image
  },
  {
    id: 3,
    name: 'Zendaya',
    quote: 'I love the elegance and quality of these products.',
    image: '/images/zendaya.jpg', // Path to image
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;