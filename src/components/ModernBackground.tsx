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

  const meshY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -80]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#D8DCC8]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#D8DCC8]">
      {/* ─── Soft Mesh Gradient Layers ─── */}
      <motion.div style={{ y: meshY }} className="absolute inset-0">
        <MeshBlob color="#E0E4D1" size={isMobile ? "150vw" : "100vw"} duration={isMobile ? 45 : 40} delay={0} initialX="-20%" initialY="-10%" isMobile={isMobile} />
        <MeshBlob color="#2F3B24" size={isMobile ? "130vw" : "80vw"} duration={isMobile ? 38 : 32} delay={2} initialX="30%" initialY="30%" isMobile={isMobile} />
        
        {!isMobile && (
          <>
            <MeshBlob color="#8A5A2B" size="90vw" duration={50} delay={5} initialX="-10%" initialY="50%" isMobile={isMobile} />
            <MeshBlob color="#F4EFE6" size="60vw" duration={25} delay={1} initialX="50%" initialY="-10%" isMobile={isMobile} />
          </>
        )}
      </motion.div>

      {/* ─── Premium Textures & Overlays ─── */}
      {/* Subtle Noise Texture - Procedural Matte Paper Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-multiply contrast-125" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      {/* Soft Vignette - Deepened for glare reduction */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(43,33,24,0.04)_100%)]" />
      
      {/* Bottom fade for smoother transitions */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#D8DCC8] to-transparent pointer-events-none" />
    </div>
  );
}




