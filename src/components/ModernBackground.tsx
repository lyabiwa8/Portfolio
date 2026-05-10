"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.0002;
      ref.current.rotation.x += 0.0001;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#9F1239"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.3}
      />
    </Points>
  );
}

function StarBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-40">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#020617"]} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Stars 
            radius={100} 
            depth={50} 
            count={5000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={1} 
          />
        </Float>
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}

export function ModernBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 3D Starfield & Particles */}
      <StarBackground />

      {/* Atmospheric Nebula Blobs (Framer Style) */}
      <motion.div
        style={{ 
          y: y1, 
          rotate, 
          scale,
          background: "radial-gradient(circle, #0F172A 0%, transparent 75%)",
          filter: "blur(160px)",
        }}
        className="absolute top-[-10%] left-[-5%] w-[90%] h-[90%] rounded-full opacity-[0.2]"
      />
      
      <motion.div
        style={{ 
          y: y2, 
          rotate: -rotate, 
          scale,
          background: "radial-gradient(circle, #9F1239 0%, transparent 75%)",
          filter: "blur(140px)",
        }}
        className="absolute bottom-[-5%] right-[-10%] w-[80%] h-[80%] rounded-full opacity-[0.15]"
      />

      <motion.div
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.08, 0.12, 0.08] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[30%] w-[50%] h-[50%] rounded-full"
        style={{
          background: "radial-gradient(circle, #BE123C 0%, transparent 75%)",
          filter: "blur(120px)",
        }}
      />

      <motion.div
        animate={{ 
          x: [0, -40, 0],
          y: [0, 60, 0],
          opacity: [0.05, 0.1, 0.05] 
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] left-[10%] w-[40%] h-[40%] rounded-full"
        style={{
          background: "radial-gradient(circle, #0F172A 0%, transparent 75%)",
          filter: "blur(100px)",
        }}
      />

      {/* Static Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.5)_100%)]" />
    </div>
  );
}
