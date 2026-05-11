"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

declare global {
  interface Window {
    VANTA: any;
    p5: any;
  }
}

export function ModernBackground() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
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
    if (!mounted || isMobile) return;

    let effect: any = null;
    const loadVanta = async () => {
      try {
        const p5 = (await import("p5")).default;
        window.p5 = p5;
        
        // Dynamic import for Vanta Topology
        // @ts-ignore
        const TOPOLOGY = (await import("vanta/dist/vanta.topology.min")).default;

        if (vantaRef.current && !vantaEffect) {
          effect = TOPOLOGY({
            el: vantaRef.current,
            p5: p5,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x3a4d39, // Vibrant Sage Green
            backgroundColor: 0xf2f4e8, // Silk base
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.error("Vanta initialization failed:", err);
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
      {/* ─── Vanta Topology Overlay (HIGH VISIBILITY) ─── */}
      <div 
        ref={vantaRef} 
        className="absolute inset-0 z-0 opacity-[0.5] mix-blend-multiply pointer-events-none" 
      />

      {/* ─── Framer-Style Mesh Gradients (Soft Backdrop) ─── */}
      <div className="absolute inset-0 filter blur-[140px] opacity-60 z-[-1]">
        <motion.div
          animate={{
            x: ["-15%", "15%", "-10%", "10%", "-15%"],
            y: ["-10%", "20%", "5%", "-15%", "-10%"],
            scale: [1, 1.1, 0.9, 1.2, 1],
          }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] rounded-full bg-[#D8DCC8] opacity-70"
        />

        <motion.div
          animate={{
            x: ["10%", "-20%", "5%", "-10%", "10%"],
            y: ["20%", "-10%", "-5%", "15%", "20%"],
            scale: [1.1, 0.9, 1.2, 1, 1.1],
          }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
          className="absolute top-[10%] right-[-20%] w-[110vw] h-[110vw] rounded-full bg-[#E0E4D1] opacity-60"
        />

        <motion.div
          animate={{
            x: ["-5%", "10%", "0%", "-10%", "-5%"],
            y: ["40%", "20%", "50%", "30%", "40%"],
            scale: [1, 1.2, 1.1, 1, 1],
          }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] left-[10%] w-[90vw] h-[90vw] rounded-full bg-[#C0C5AD] opacity-50"
        />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply contrast-125" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
      
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(47,59,36,0.02)_100%)]" />
    </div>
  );
}
