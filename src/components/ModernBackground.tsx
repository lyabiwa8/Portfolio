"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

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
      ref.current.rotation.y += 0.0002;
      ref.current.rotation.x += 0.0001;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#E11D48"
        size={0.09}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

function StarBackground() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 w-full h-full"
    >
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
          <Stars 
            radius={100} 
            depth={50} 
            count={3000} 
            factor={6} 
            saturation={0} 
            fade 
            speed={1.5} 
          />
        </Float>
        <ParticleField />
        <ambientLight intensity={1} />
      </Canvas>
    </motion.div>
  );
}

function GradientBar({ index, scrollYProgress }: { index: number; scrollYProgress: any }) {
  // Create a wave effect based on index
  const delay = index * 0.05;
  const initialHeight = 40 + Math.random() * 40; // Random base height
  
  // Link some movement to scroll
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 200 : -200]);

  return (
    <div className="relative h-full flex-1 min-w-[2px]">
      <motion.div
        animate={{ 
          height: ["20%", "60%", "20%"],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ 
          duration: 3 + Math.random() * 2, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay 
        }}
        style={{ 
          y: scrollOffset,
          background: "linear-gradient(to top, transparent, #9F1239 50%, transparent)",
        }}
        className="absolute inset-0 w-full rounded-full"
      />
      
      {/* Secondary accent bar for depth */}
      <motion.div
        animate={{ 
          height: ["10%", "40%", "10%"],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ 
          duration: 4 + Math.random() * 3, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: delay + 0.5
        }}
        style={{ 
          background: "linear-gradient(to top, transparent, #E11D48 50%, transparent)",
        }}
        className="absolute inset-0 w-[1px] left-1/2 -translate-x-1/2 opacity-20"
      />
    </div>
  );
}

export function ModernBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Number of bars based on common screen widths
  const barCount = 20;

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#020617]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617] flex items-center justify-around px-4 gap-4 md:gap-8">
      {/* ─── Gradient Bars Pro ─── */}
      {Array.from({ length: barCount }).map((_, i) => (
        <GradientBar key={i} index={i} scrollYProgress={scrollYProgress} />
      ))}

      {/* ─── Finishing Atmosphere ─── */}
      
      {/* Cinematic Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Deep Vignette to keep text readable */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />
      
      {/* Technical Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-20 opacity-20" />
    </div>
  );
}



