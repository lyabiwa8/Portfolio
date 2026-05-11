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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    if (!isMobile) window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  const meshY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -80]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#D8DCC8]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#D8DCC8]">
      {/* ─── Cursor Follow Glow ─── */}
      {!isMobile && (
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.12] z-0"
          animate={{
            x: mousePos.x - 300,
            y: mousePos.y - 300,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 200, mass: 0.5 }}
          style={{
            background: "radial-gradient(circle, #8A5A2B 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
        />
      )}

      {/* ─── Soft Mesh Gradient Layers ─── */}
      <motion.div style={{ y: meshY }} className="absolute inset-0">
        {/* Top Left - Sage */}
        <div className="absolute top-[-20%] left-[-10%]">
          <MeshBlob color="#3A4D39" size={isMobile ? "120vw" : "80vw"} duration={isMobile ? 25 : 30} delay={0} isMobile={isMobile} />
        </div>
        
        {/* Top Right - Terracotta */}
        <div className="absolute top-[-10%] right-[-20%]">
          <MeshBlob color="#8B4513" size={isMobile ? "100vw" : "70vw"} duration={isMobile ? 20 : 25} delay={2} isMobile={isMobile} />
        </div>

        {/* Center - Sand/Beige */}
        <div className="absolute top-[20%] left-[10%]">
          <MeshBlob color="#D4A373" size={isMobile ? "130vw" : "90vw"} duration={isMobile ? 30 : 35} delay={4} isMobile={isMobile} />
        </div>

        {/* Bottom Right - Deep Green */}
        <div className="absolute bottom-[-20%] right-[-10%]">
          <MeshBlob color="#2F3B24" size={isMobile ? "140vw" : "80vw"} duration={isMobile ? 28 : 32} delay={1} isMobile={isMobile} />
        </div>

        {/* Bottom Left - Soft Cream */}
        <div className="absolute bottom-[10%] left-[-20%]">
          <MeshBlob color="#E0E4D1" size={isMobile ? "110vw" : "75vw"} duration={isMobile ? 35 : 40} delay={6} isMobile={isMobile} />
        </div>
      </motion.div>

      {/* ─── Premium Textures & Overlays ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(43,33,24,0.06)_100%)]" />
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#D8DCC8] to-transparent pointer-events-none" />
    </div>
  );
}




