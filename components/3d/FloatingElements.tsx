import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // Full viewport height
  background: linear-gradient(to bottom, #f8d3e0, #ffffff); // Elegant pink to white gradient
`;

const FloatingElement = styled.div`
  position: absolute;
  width: 200px; // Set width for floating elements
  height: 200px; // Set height for floating elements
  border-radius: 50%; // Circular shape
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Soft shadow for luxury effect
  background-color: #ffccdb; // Light pink background
  animation: float 6s ease-in-out infinite; // Floating animation

  @keyframes float {
    0%, 100% {
      transform: translateY(0); // Start and end at original position
    }
    50% {
      transform: translateY(-20px); // Move up in the middle of animation
    }
  }
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingElement style={{ left: '10%', top: '20%' }} />
      <FloatingElement style={{ right: '15%', bottom: '30%' }} />
      <FloatingElement style={{ left: '50%', top: '50%' }} />
      <FloatingElement style={{ right: '5%', top: '10%' }} />
    </FloatingContainer>
  );
};

export default FloatingElements;