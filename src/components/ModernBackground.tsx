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

export function ModernBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  
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

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* 3D Starfield & Particles - Active on PC/Tablet */}
      <AnimatePresence mode="wait">
        {!isMobile && <StarBackground key="desktop-bg" />}
      </AnimatePresence>

      {/* ─── Sophisticated Atmospheric Energy Fields ─── */}
      
      {/* Top Left: Subtle Deep Red Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        style={{ 
          y: y1,
          rotate,
          background: "radial-gradient(circle, #9F1239 0%, transparent 70%)",
          filter: "blur(130px)",
        }}
        className="absolute top-[-30%] left-[-15%] w-[110%] h-[110%] rounded-full mix-blend-screen pointer-events-none"
      />
      
      {/* Bottom Right: Ethereal Rose Pulse */}
      <motion.div
        animate={{ 
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -60, 0],
          y: [0, 40, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ 
          y: y2,
          rotate: -rotate,
          background: "radial-gradient(circle, #E11D48 0%, transparent 75%)",
          filter: "blur(150px)",
        }}
        className="absolute bottom-[-20%] right-[-20%] w-[120%] h-[120%] rounded-full mix-blend-screen pointer-events-none"
      />

      {/* Floating Sparkle Glow */}
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] left-[10%] w-[70%] h-[70%] rounded-full mix-blend-screen pointer-events-none"
        style={{
          background: "radial-gradient(circle, #881337 0%, transparent 65%)",
          filter: "blur(110px)",
        }}
      />

      {/* ─── Finishing Atmosphere ─── */}
      
      {/* Cinematic Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* Deep Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.85)_100%)]" />
      
      {/* Subtle Scanlines */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-20 opacity-25" />
    </div>
  );
}



