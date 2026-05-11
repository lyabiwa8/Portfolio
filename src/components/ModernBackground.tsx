"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function MeshBlob({ color, size, duration, delay, initialX, initialY, isMobile }: any) {
  return (
    <motion.div
      animate={{ 
        x: [initialX, initialX + (isMobile ? 30 : 60), initialX - (isMobile ? 15 : 30), initialX],
        y: [initialY, initialY - (isMobile ? 20 : 40), initialY + (isMobile ? 10 : 20), initialY],
        scale: [1, 1.05, 0.98, 1],
      }}
      transition={{ 
        duration, 
        repeat: Infinity, 
        ease: "easeInOut",
        delay 
      }}
      style={{ 
        background: `radial-gradient(circle at center, ${color} 0%, ${color}22 50%, transparent 100%)`,
        width: size,
        height: size,
        filter: `blur(${isMobile ? "80px" : "140px"})`,
      }}
      className={`absolute rounded-full pointer-events-none ${isMobile ? "opacity-20" : "opacity-15"}`}
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
        <MeshBlob color="#E0E4D1" size={isMobile ? "150vw" : "100vw"} duration={isMobile ? 35 : 30} delay={0} initialX="-20%" initialY="-10%" isMobile={isMobile} />
        <MeshBlob color="#3A4D39" size={isMobile ? "130vw" : "80vw"} duration={isMobile ? 30 : 25} delay={2} initialX="40%" initialY="20%" isMobile={isMobile} />
        <MeshBlob color="#8B4513" size={isMobile ? "100vw" : "60vw"} duration={isMobile ? 25 : 20} delay={4} initialX="10%" initialY="60%" isMobile={isMobile} />
        
        {!isMobile && (
          <>
            <MeshBlob color="#D4A373" size="70vw" duration={45} delay={5} initialX="60%" initialY="0%" isMobile={isMobile} />
            <MeshBlob color="#F4EFE6" size="50vw" duration={20} delay={1} initialX="-10%" initialY="30%" isMobile={isMobile} />
            <MeshBlob color="#2F3B24" size="90vw" duration={40} delay={8} initialX="-20%" initialY="70%" isMobile={isMobile} />
          </>
        )}
      </motion.div>

      {/* ─── Premium Textures & Overlays ─── */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(43,33,24,0.06)_100%)]" />
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#D8DCC8] to-transparent pointer-events-none" />
    </div>
  );
}




