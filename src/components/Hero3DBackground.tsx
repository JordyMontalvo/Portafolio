import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedBlob = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 32, 32]} scale={2.2} position={[2, 0, -2]}>
        <MeshDistortMaterial
          color="#0d9488"
          attach="material"
          distort={0.3}
          speed={1}
          roughness={0.4}
          metalness={0.2}
          transparent={true}
          opacity={0.15}
          wireframe={true}
        />
      </Sphere>
      <Sphere args={[1, 24, 24]} scale={1.8} position={[-2, 1, -3]}>
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.4}
          metalness={0.2}
          transparent={true}
          opacity={0.1}
          wireframe={true}
        />
      </Sphere>
    </Float>
  );
};

const Hero3DBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: false }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#14b8a6" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#3b82f6" />
        <AnimatedBlob />
      </Canvas>
    </div>
  );
};

export default Hero3DBackground;
