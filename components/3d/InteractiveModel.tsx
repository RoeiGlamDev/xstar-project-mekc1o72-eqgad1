'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const InteractiveModel: React.FC = () => {
  const modelRef = useRef<any>(null);

  useEffect(() => {
    // Load your 3D model here
  }, []);

  return (
    <Canvas style={{ height: '100vh', background: 'white' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={true} />
      <mesh ref={modelRef}>
        {/* Replace with your 3D model geometry */}
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="pink" />
      </mesh>
    </Canvas>
  );
};

export default InteractiveModel;