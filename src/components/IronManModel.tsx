
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere, Torus } from '@react-three/drei';
import { Mesh } from 'three';

export const IronManModel = () => {
  const groupRef = useRef<any>();
  const chestRef = useRef<Mesh>(null);
  const shoulderRef = useRef<Mesh>(null);
  const armRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }

    if (chestRef.current) {
      chestRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }

    if (shoulderRef.current) {
      shoulderRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
    }

    if (armRef.current) {
      armRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Chest/Arc Reactor Core */}
      <Torus
        ref={chestRef}
        args={[0.5, 0.1, 16, 100]}
        position={[0, 0.5, 0]}
      >
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Torus>

      {/* Central Core */}
      <Sphere args={[0.2]} position={[0, 0.5, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.7}
          metalness={1}
          roughness={0.1}
        />
      </Sphere>

      {/* Body Segments */}
      <Box ref={shoulderRef} args={[1.2, 0.4, 0.6]} position={[0, 1, 0]}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.3}
        />
      </Box>

      <Box args={[0.8, 1, 0.4]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#2D2D2D"
          metalness={0.8}
          roughness={0.4}
        />
      </Box>

      {/* Arms */}
      <Box ref={armRef} args={[0.3, 0.8, 0.3]} position={[-0.8, 0.5, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.2}
        />
      </Box>

      <Box args={[0.3, 0.8, 0.3]} position={[0.8, 0.5, 0]}>
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.2}
        />
      </Box>

      {/* Legs */}
      <Box args={[0.35, 1.2, 0.35]} position={[-0.3, -1, 0]}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </Box>

      <Box args={[0.35, 1.2, 0.35]} position={[0.3, -1, 0]}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </Box>

      {/* Floating segments */}
      <Box args={[0.2, 0.2, 0.2]} position={[-1.5, 0.8, 0.5]}>
        <meshStandardMaterial
          color="#00D4FF"
          emissive="#00D4FF"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>

      <Box args={[0.15, 0.15, 0.15]} position={[1.3, 1.2, -0.3]}>
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </Box>
    </group>
  );
};
