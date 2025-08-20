import React from 'react';
import { styled } from '@mui/system';

const GradientBackgroundContainer = styled('div')({
  height: '100vh', // Full height
  width: '100%', // Full width
  background: 'linear-gradient(135deg, #FFC0CB, #FFFFFF)', // Pink to white gradient
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const GradientBackground: React.FC = ({ children }) => {
  return <GradientBackgroundContainer>{children}</GradientBackgroundContainer>;
};

export default GradientBackground;