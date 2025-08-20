import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white; // Card background
  border-radius: 10px; // Rounded corners
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Subtle shadow
  overflow: hidden; // Clip overflow
  transition: transform 0.3s; // Smooth hover effect

  &:hover {
    transform: scale(1.05); // Scale on hover
  }
`;

const Image = styled.img`
  width: 100%; // Full width
  height: auto; // Maintain aspect ratio
`;

const Content = styled.div`
  padding: 20px; // Inner padding
  text-align: center; // Centered text
`;

const Title = styled.h3`
  color: #d5006d; // Pink color for title
  font-size: 1.5em; // Title size
  margin: 0; // Remove default margin
`;

const Description = styled.p`
  color: #555; // Dark gray for description
  font-size: 1em; // Description size
`;

const Price = styled.span`
  color: #d5006d; // Pink color for price
  font-weight: bold; // Bold price
  font-size: 1.2em; // Price size
`;

interface CardProps {
  image: string;
  title: string;
  description: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, price }) => {
  return (
    <CardContainer>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </CardContainer>
  );
};

export default Card;