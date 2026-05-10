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

function MeshBlob({ color, size, duration, delay, initialX, initialY, isMobile }: any) {
  return (
    <motion.div
      animate={{ 
        x: [initialX, initialX + (isMobile ? 40 : 80), initialX - (isMobile ? 20 : 40), initialX],
        y: [initialY, initialY - (isMobile ? 30 : 60), initialY + (isMobile ? 15 : 30), initialY],
        scale: [1, 1.1, 0.95, 1],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      style={{ 
        background: `radial-gradient(circle at center, ${color} 0%, ${color}33 40%, transparent 80%)`,
        width: size,
        height: size,
        filter: `blur(${isMobile ? "100px" : "160px"})`,
      }}
      className={`absolute rounded-full mix-blend-screen pointer-events-none ${isMobile ? "opacity-40" : "opacity-25"}`}
    />
  );
}

export function ModernBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax for the whole mesh system
  const meshY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -150]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#020617]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020617]">
      {/* ─── 3D Star Field (Optimized) ─── */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isMobile ? 'opacity-40' : 'opacity-60'}`}>
        <Canvas 
          camera={{ position: [0, 0, 1] }} 
          gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
          dpr={[1, isMobile ? 1 : 2]}
        >
          <Float speed={isMobile ? 1 : 2} rotationIntensity={0.2} floatIntensity={0.4}>
            <Stars 
              radius={100} 
              depth={50} 
              count={isMobile ? 800 : 3000} 
              factor={isMobile ? 4 : 6} 
              saturation={0} 
              fade 
              speed={1.5} 
            />
          </Float>
          <ParticleField />
          <ambientLight intensity={1} />
        </Canvas>
      </div>

      {/* ─── Mesh Gradient Layers ─── */}
      <motion.div style={{ y: meshY }} className="absolute inset-0">
        <MeshBlob color="#881337" size={isMobile ? "150vw" : "110vw"} duration={isMobile ? 40 : 35} delay={0} initialX="-30%" initialY="-30%" isMobile={isMobile} />
        <MeshBlob color="#9F1239" size={isMobile ? "130vw" : "90vw"} duration={isMobile ? 35 : 28} delay={2} initialX="40%" initialY="40%" isMobile={isMobile} />
        
        {!isMobile && (
          <>
            <MeshBlob color="#701a28" size="100vw" duration={40} delay={5} initialX="-20%" initialY="60%" isMobile={isMobile} />
            <MeshBlob color="#4c0519" size="70vw" duration={22} delay={1} initialX="30%" initialY="-20%" isMobile={isMobile} />
          </>
        )}
      </motion.div>

      {/* ─── Overlays ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
      
      {/* Cinematic Scanlines (Bat-Computer Effect) */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-[0.03]" 
           style={{ 
             background: 'repeating-linear-gradient(0deg, #9F1239, #9F1239 1px, transparent 1px, transparent 2px)',
             backgroundSize: '100% 2px'
           }} 
      />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.95)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%)] bg-[length:100%_4px] z-20 opacity-10" />
    </div>
  );
}



