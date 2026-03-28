"use client";

import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  MeshTransmissionMaterial,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

function Blob({ position, color, speed, radius, scrollY, ...props }: any) {
  const mesh = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Subtle organic movement
    mesh.current.position.y = position[1] + Math.sin(t * speed * 0.5) * 0.3;
    mesh.current.position.x = position[0] + Math.cos(t * speed * 0.3) * 0.2;
    
    // Rotation
    mesh.current.rotation.x = t * speed * 0.1;
    mesh.current.rotation.y = t * speed * 0.15;
  });

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={mesh} position={position} scale={radius} {...props}>
        {/* Reduced geometry segments from 15 to 8 for performance */}
        <icosahedronGeometry args={[1, 8]} />
        <MeshTransmissionMaterial
          backside={false} // Disabled backside rendering for performance
          thickness={1.5}
          // Reduced samples from 8 to 4
          samples={4}
          transmission={1}
          clearcoat={0.5}
          clearcoatRoughness={0}
          roughness={0.1}
          chromaticAberration={0.04}
          anisotropy={0.1}
          distortion={0.4}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color={color}
          attenuationDistance={0.5}
          attenuationColor={color}
        />
      </mesh>
    </Float>
  );
}

export default function GlassBlobs() {
  return (
    <div className="absolute inset-0 z-0 opacity-40">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        // Set dpr to max 1.5 to prevent pixel overflow lag on high DPI screens
        dpr={[1, 1.5]}
        // Drop alpha from config to use default and enable precision
        gl={{ antialias: false, powerPreference: "high-performance" }}
        frameloop="demand" // Only render on demand/interaction and animations
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00e5ff" />
          
          <Blob 
            position={[-5, 3, -2]} 
            color="#00e5ff" 
            speed={0.8} 
            radius={2.8} 
          />
          <Blob 
            position={[6, -2, -4]} 
            color="#94a3b8" 
            speed={0.6} 
            radius={3.5} 
          />
          <Blob 
            position={[-2, -5, -1]} 
            color="#00e5ff" 
            speed={1.2} 
            radius={2} 
          />
          
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}
