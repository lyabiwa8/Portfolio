"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function ModernBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#1A2414]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#1A2414]">
      {/* ─── Base Organic Layers ─── */}
      <div className="absolute inset-0 opacity-40 filter blur-[100px]">
        {/* Moss Undergrowth */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[120vw] h-[120vw] rounded-full bg-[#2F3B24]"
        />
        
        {/* Earth/Wood Glow */}
        <motion.div
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#5D4037]"
        />
      </div>

      {/* ─── Wood Grain Texture Overlay ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] mix-blend-overlay"
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='woodGrain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.01 0.2' numOctaves='3' stitchTiles='stitch'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='15'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23woodGrain)'/%3E%3C/svg%3E")`,
             backgroundSize: '400px 800px'
           }} />

      {/* ─── Floating Leaves (Parallax) ─── */}
      {/* Top Left Leaf */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [-5, 5, -5],
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-5%] left-[-5%] w-[60vw] h-[60vw] opacity-30 pointer-events-none filter blur-[2px]"
      >
        <Image 
          src="/images/organic_leaf_silhouettes_1778525782260.png" 
          alt="Plant detail" 
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Bottom Right Leaf */}
      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [185, 175, 185],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 50, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] opacity-25 pointer-events-none filter blur-[4px]"
      >
        <Image 
          src="/images/organic_leaf_silhouettes_1778525782260.png" 
          alt="Plant detail" 
          fill
          className="object-contain transform rotate-180"
        />
      </motion.div>

      {/* Center Left - Soft Branch */}
      {!isMobile && (
        <motion.div
          animate={{
            x: [0, 20, 0],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] left-[-20%] w-[50vw] h-[50vw] opacity-20 pointer-events-none filter blur-[8px]"
        >
          <Image 
            src="/images/organic_leaf_silhouettes_1778525782260.png" 
            alt="Plant detail" 
            fill
            className="object-contain transform -rotate-45"
          />
        </motion.div>
      )}

      {/* ─── Light & Atmosphere ─── */}
      {/* Sun Ray Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(212,163,115,0.15)_0%,transparent_50%)]" />
      
      {/* Deep Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,15,8,0.6)_100%)]" />
    </div>
  );
}
