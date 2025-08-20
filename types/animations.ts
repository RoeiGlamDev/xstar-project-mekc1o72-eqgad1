import { AnimationType } from './types'; // Importing AnimationType from types file

const animationTypes: AnimationType[] = [
  {
    name: 'Fade In', // Elegant fade-in effect
    duration: '0.5s',
    timingFunction: 'ease-in',
  },
  {
    name: 'Slide Up', // Smooth slide-up effect
    duration: '0.6s',
    timingFunction: 'ease-out',
  },
  {
    name: 'Zoom In', // Classy zoom-in effect
    duration: '0.4s',
    timingFunction: 'ease-in-out',
  },
  {
    name: 'Bounce', // Luxurious bounce effect
    duration: '0.7s',
    timingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
  },
  {
    name: 'Rotate', // Sophisticated rotate effect
    duration: '0.5s',
    timingFunction: 'ease-in-out',
  },
];

export default animationTypes; // Exporting the animation types array as default export