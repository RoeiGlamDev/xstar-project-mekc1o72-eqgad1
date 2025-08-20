import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
  background-color: #fff; // white background
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/path/to/your/image.jpg'); // replace with your image path
  background-size: cover;
  background-position: center;
  transform: translateZ(-1px) scale(1.5); // parallax effect
  z-index: -1;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #ff69b4; // pink text color
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
`;

const Subtitle = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const ParallaxSection: React.FC = () => {
  return (
    <ParallaxContainer>
      <BackgroundImage />
      <Content>
        <Title>Luxury FashionTV Cosmetics</Title>
        <Subtitle>Elevate Your Beauty</Subtitle>
      </Content>
    </ParallaxContainer>
  );
};

export default ParallaxSection;