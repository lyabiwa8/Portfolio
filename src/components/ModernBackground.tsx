"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 1200;
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
      ref.current.rotation.y += 0.0001;
      ref.current.rotation.x += 0.00005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#9F1239"
        size={0.07}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

function StarBackground() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.4 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 w-full h-full"
    >
      <Canvas 
        camera={{ position: [0, 0, 1] }} 
        gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <Stars 
            radius={100} 
            depth={50} 
            count={2000} 
            factor={4} 
            saturation={0} 
            fade 
            speed={0.6} 
          />
        </Float>
        <ParticleField />
        <ambientLight intensity={0.5} />
      </Canvas>
    </motion.div>
  );
}

export function ModernBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Mobile Detection for Performance Optimization
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 3D Starfield & Particles - Only active on PC/Tablet for performance */}
      <AnimatePresence>
        {!isMobile && <StarBackground />}
      </AnimatePresence>

      {/* ─── Adaptive Atmospheric Energy Fields ─── */}
      
      {/* Top Left Red Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: isMobile ? [0.15, 0.25, 0.15] : [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          y: y1,
          rotate,
          background: "radial-gradient(circle, #9F1239 0%, transparent 70%)",
          filter: isMobile ? "blur(80px)" : "blur(140px)",
        }}
        className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] rounded-full mix-blend-screen pointer-events-none"
      />
      
      {/* Bottom Right Energy Pulse */}
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: isMobile ? [0.1, 0.2, 0.1] : [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ 
          y: y2,
          rotate: -rotate,
          background: "radial-gradient(circle, #BE123C 0%, transparent 75%)",
          filter: isMobile ? "blur(100px)" : "blur(160px)",
        }}
        className="absolute bottom-[-10%] right-[-15%] w-[110%] h-[110%] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Floating Magenta Sparkle */}
      <motion.div
        animate={{ 
          x: ["-10%", "10%", "-10%"],
          y: ["-5%", "5%", "-5%"],
          opacity: isMobile ? [0.05, 0.1, 0.05] : [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[60%] h-[60%] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle, #881337 0%, transparent 70%)",
          filter: isMobile ? "blur(70px)" : "blur(120px)",
        }}
      />

      {/* ─── Texture & Finishing Touches ─── */}
      
      {/* Cinematic Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.7)_100%)]" />
      
      {/* Scanline Effect (Optimized) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] z-20 opacity-20" />
    </div>
  );
}


