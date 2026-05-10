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

function MeshBlob({ color, size, duration, delay, initialX, initialY }: any) {
  return (
    <motion.div
      animate={{ 
        x: [initialX, initialX + 100, initialX - 50, initialX],
        y: [initialY, initialY - 80, initialY + 40, initialY],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      style={{ 
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        width: size,
        height: size,
        filter: "blur(100px)",
      }}
      className="absolute rounded-full mix-blend-screen pointer-events-none opacity-40"
    />
  );
}

export function ModernBackground() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Parallax for the whole mesh system
  const meshY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#020617]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* ─── Mesh Gradient Layers ─── */}
      <motion.div style={{ y: meshY }} className="absolute inset-0">
        {/* Main Bordeaux Hub */}
        <MeshBlob color="#9F1239" size="100vw" duration={25} delay={0} initialX="-20%" initialY="-20%" />
        
        {/* Vibrant Crimson Pulse */}
        <MeshBlob color="#E11D48" size="80vw" duration={20} delay={2} initialX="40%" initialY="30%" />
        
        {/* Deep Rose Shadow */}
        <MeshBlob color="#881337" size="90vw" duration={30} delay={5} initialX="-10%" initialY="50%" />
        
        {/* Subtle Accent */}
        <MeshBlob color="#BE123C" size="60vw" duration={18} delay={1} initialX="20%" initialY="-10%" />
      </motion.div>

      {/* ─── Premium Finishing Textures ─── */}
      
      {/* Heavy Cinematic Grain (The "Framer" Secret) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.25] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          filter: "contrast(150%) brightness(100%)",
        }}
      />

      {/* Dark Vignette for Depth & Readability */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.9)_100%)]" />
      
      {/* Subliminal Scanlines for Technical Feel */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-20 opacity-20" />
    </div>
  );
}



