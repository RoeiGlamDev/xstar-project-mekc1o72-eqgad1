'use client';

import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealAnimation: React.FC = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: 'bottom', // Animation origin
      distance: '50px', // Distance of the reveal
      duration: 1000, // Animation duration
      delay: 200, // Delay between animations
      easing: 'ease-in-out', // Easing function
      reset: true, // Reset animation on scroll
    });

    sr.reveal('.scroll-reveal'); // Target class for reveal
  }, []);

  return <div className="scroll-reveal">{children}</div>; // Render children with reveal
};

export default ScrollRevealAnimation;