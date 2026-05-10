"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform } from "framer-motion";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 1500;
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
      ref.current.rotation.y += 0.00015;
      ref.current.rotation.x += 0.00008;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#9F1239"
        size={0.06}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.35}
      />
    </Points>
  );
}

function StarBackground() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [0, 0, 1] }} alpha={true}>
        {/* Transparent background for Canvas */}
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
          <Stars 
            radius={100} 
            depth={50} 
            count={3000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.8} 
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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 3D Starfield & Particles */}
      <StarBackground />

      {/* ─── Vanta-inspired Atmospheric Nebula Fields (High Visibility) ─── */}
      
      {/* Intense Deep Red Pulse (Top Left) */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          y: y1,
          rotate,
          background: "radial-gradient(circle, #9F1239 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        className="absolute top-[-25%] left-[-15%] w-[110%] h-[110%] rounded-full mix-blend-screen pointer-events-none"
      />
      
      {/* Main Energy Field (Bottom Right) */}
      <motion.div
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.25, 0.45, 0.25],
          x: [0, -70, 0],
          y: [0, 50, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ 
          y: y2,
          rotate: -rotate,
          background: "radial-gradient(circle, #BE123C 0%, transparent 75%)",
          filter: "blur(150px)",
        }}
        className="absolute bottom-[-15%] right-[-20%] w-[120%] h-[120%] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Floating Magenta Sparkle (Center-Left) */}
      <motion.div
        animate={{ 
          x: ["-15%", "15%", "-15%"],
          y: ["-10%", "10%", "-10%"],
          scale: [1, 1.25, 1],
          opacity: [0.1, 0.25, 0.1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[10%] w-[70%] h-[70%] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle, #881337 0%, transparent 70%)",
          filter: "blur(110px)",
        }}
      />

      {/* Subtle Blue/Cyan Counter-Balance (Bottom Left) */}
      <motion.div
        animate={{ 
          x: [0, 60, 0],
          y: [0, -50, 0],
          opacity: [0.15, 0.3, 0.15] 
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[5%] left-[-15%] w-[80%] h-[80%] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle, #1E293B 0%, transparent 75%)",
          filter: "blur(130px)",
        }}
      />

      {/* ─── Texture & Finishing Touches ─── */}
      
      {/* Enhanced Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Deep Dynamic Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      
      {/* Subliminal Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_3px,4px_100%] z-20 opacity-25" />
    </div>
  );
}


