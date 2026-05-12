"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    VANTA: any;
    p5: any;
    THREE: any;
  }
}

export function ModernBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let effect: any = null;
    const loadVanta = async () => {
      try {
        const THREE = await import("three");
        window.THREE = THREE;
        const p5 = (await import("p5")).default;
        window.p5 = p5;
        
        // @ts-ignore
        const TOPOLOGY = (await import("vanta/dist/vanta.topology.min")).default;

        if (vantaRef.current && !vantaEffect) {
          effect = TOPOLOGY({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: isMobile ? 1.50 : 3.50, // Smaller scale for mobile
            scaleMobile: 1.50,
            color: 0x5d4037, // Wood Brown
            backgroundColor: 0xf2f4e8,
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.error("Vanta failed:", err);
      }
    };

    loadVanta();
    return () => {
      if (effect) effect.destroy();
    };
  }, [mounted, isMobile]);

  if (!mounted) return <div className="fixed inset-0 -z-10 bg-[#F2F4E8]" />;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F2F4E8]">
      {/* ─── Vanta Topology Overlay (WOOD GRAIN) ─── */}
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 z-0 mix-blend-multiply"
      >
        <div 
          ref={vantaRef} 
          className="w-full h-full" 
        />
      </motion.div>

      {/* ─── Soft Green Backdrop ─── */}
      <div className="absolute inset-0 filter blur-[120px] opacity-50 z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#D8DCC8] opacity-70" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#E0E4D1] opacity-60" />
      </div>

      {/* Texture Noise */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
    </div>
  );
}
