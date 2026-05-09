"use client";

import { motion } from "framer-motion";

export function ModernBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" style={{ backgroundColor: "#1A120B" }}>
      {/* Base warm dark layer */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A120B 0%, #2D1F14 40%, #1A120B 100%)" }} />

      {/* Large warm amber glow — top left */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 40, 0], y: [0, 25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(150,114,89,0.18) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* Warm brown glow — bottom right */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0], y: [0, -40, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-[20%] -right-[10%] w-[80%] h-[80%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(60,42,33,0.6) 0%, transparent 70%)", filter: "blur(100px)" }}
      />

      {/* Accent gold orb — center right */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], x: [0, -30, 0], y: [0, 50, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] right-[5%] w-[40%] h-[40%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(150,114,89,0.12) 0%, transparent 70%)", filter: "blur(80px)" }}
      />

      {/* Subtle mid glow */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[50%] left-[30%] w-[35%] h-[35%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(75,54,33,0.35) 0%, transparent 70%)", filter: "blur(90px)" }}
      />

      {/* Fine noise grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </div>
  );
}
