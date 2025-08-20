import { keyframes } from 'styled-components';

// Define keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define keyframes for slide-up animation
const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Define keyframes for hover effect
const hoverEffect = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
`;

// Export animations
export const animations = {
  fadeIn,
  slideUp,
  hoverEffect,
}; 

export default animations;