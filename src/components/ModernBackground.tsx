"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function MeshBlob({ color, size, duration, delay, isMobile }: any) {
  return (
    <motion.div
      animate={{ 
        x: ["-20%", "20%", "-10%", "10%", "-20%"],
        y: ["-10%", "30%", "10%", "-20%", "-10%"],
        rotate: [0, 90, 180, 270, 360],
        scale: [1, 1.2, 0.9, 1.1, 1],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "linear",
        delay 
      }}
      style={{ 
        background: `radial-gradient(circle at center, ${color} 0%, ${color}44 40%, transparent 70%)`,
        width: size,
        height: size,
        filter: `blur(${isMobile ? "60px" : "120px"})`,
      }}
      className={`absolute rounded-full pointer-events-none opacity-40 mix-blend-soft-light`}
    />
  );
}

export function ModernBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#F2F4E8]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F2F4E8]">
      {/* ─── Framer-Style Mesh Gradients (Light Green Version) ─── */}
      <div className="absolute inset-0 filter blur-[140px] opacity-80">
        {/* Blob 1: Soft Sage */}
        <motion.div
          animate={{
            x: ["-15%", "15%", "-10%", "10%", "-15%"],
            y: ["-10%", "20%", "5%", "-15%", "-10%"],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#D8DCC8] opacity-70"
        />

        {/* Blob 2: Mint Frost */}
        <motion.div
          animate={{
            x: ["10%", "-20%", "5%", "-10%", "10%"],
            y: ["20%", "-10%", "-5%", "15%", "20%"],
            scale: [1.1, 0.9, 1.2, 1, 1.1],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-20%] w-[110vw] h-[110vw] rounded-full bg-[#E0E4D1] opacity-60"
        />

        {/* Blob 3: Deep Sage (Muted) */}
        <motion.div
          animate={{
            x: ["-5%", "10%", "0%", "-10%", "-5%"],
            y: ["40%", "20%", "50%", "30%", "40%"],
            scale: [1, 1.2, 1.1, 1, 1],
          }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[90vw] rounded-full bg-[#C0C5AD] opacity-50"
        />

        {/* Blob 4: Earthy Accent */}
        <motion.div
          animate={{
            opacity: [0.1, 0.25, 0.15, 0.3, 0.1],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-br from-[#3A4D39]/10 to-transparent"
        />
      </div>

      {/* ─── Premium Textures ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply contrast-125" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(47,59,36,0.03)_100%)]" />
    </div>
  );
}




