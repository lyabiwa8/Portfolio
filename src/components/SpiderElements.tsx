"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ─────────────────────────────────────────────
   SVG SPIDERMAN SILHOUETTES (Minimalist Style)
   ───────────────────────────────────────────── */

// Crouching Spider-Man (perched on edge, looking down)
function SpiderCrouch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 60" fill="currentColor" className={className}>
      {/* Body crouching */}
      <ellipse cx="40" cy="32" rx="12" ry="8" opacity="0.9" />
      {/* Head */}
      <circle cx="40" cy="20" r="8" />
      {/* Eyes */}
      <path d="M35 18 Q37 16 39 18 Q37 20 35 18Z" fill="#020617" />
      <path d="M41 18 Q43 16 45 18 Q43 20 41 18Z" fill="#020617" />
      {/* Left arm reaching down */}
      <path d="M30 28 Q22 35 18 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Right arm reaching down */}
      <path d="M50 28 Q58 35 62 42" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left leg crouched */}
      <path d="M32 36 Q24 42 20 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Right leg crouched */}
      <path d="M48 36 Q56 42 60 48" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      {/* Web pattern on chest */}
      <path d="M34 28 L40 22 L46 28" stroke="#020617" strokeWidth="0.5" fill="none" opacity="0.4" />
      <path d="M36 32 L40 26 L44 32" stroke="#020617" strokeWidth="0.5" fill="none" opacity="0.3" />
    </svg>
  );
}

// Hanging Spider-Man (upside down from web)
function SpiderHang({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 120" fill="currentColor" className={className}>
      {/* Web thread */}
      <line x1="30" y1="0" x2="30" y2="35" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      {/* Feet (at top since hanging) */}
      <path d="M26 35 L30 35 L34 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Legs */}
      <path d="M28 35 Q26 42 28 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M32 35 Q34 42 32 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Body */}
      <ellipse cx="30" cy="60" rx="10" ry="12" />
      {/* Arms hanging down */}
      <path d="M22 55 Q16 65 14 78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M38 55 Q44 65 46 78" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Head (at bottom since upside down) */}
      <circle cx="30" cy="78" r="9" />
      {/* Eyes (upside down) */}
      <path d="M25 80 Q27 82 29 80 Q27 78 25 80Z" fill="#020617" />
      <path d="M31 80 Q33 82 35 80 Q33 78 31 80Z" fill="#020617" />
    </svg>
  );
}

// Swinging Spider-Man silhouette
function SpiderSwing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      {/* Web line going up-right */}
      <line x1="55" y1="25" x2="100" y2="0" stroke="currentColor" strokeWidth="1.2" opacity="0.5" />
      {/* Head */}
      <circle cx="50" cy="30" r="8" />
      {/* Eyes */}
      <path d="M45 28 Q47 26 49 28 Q47 30 45 28Z" fill="#020617" />
      <path d="M51 28 Q53 26 55 28 Q53 30 51 28Z" fill="#020617" />
      {/* Body - dynamic swing pose */}
      <ellipse cx="48" cy="45" rx="9" ry="12" transform="rotate(-15 48 45)" />
      {/* Right arm (holding web) */}
      <path d="M55 35 Q65 28 72 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Left arm extended */}
      <path d="M40 38 Q30 42 22 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Right leg extended forward */}
      <path d="M50 55 Q60 65 68 72" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Left leg trailing back */}
      <path d="M42 55 Q35 62 28 68" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   WEB PATTERN BACKGROUND (CSS-only, no Vanta)
   Lightweight alternative to Vanta Net
   ───────────────────────────────────────────── */
function WebPattern() {
  return (
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="web-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Radial web lines */}
            <line x1="100" y1="100" x2="200" y2="0" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="200" y2="100" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="200" y2="200" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="100" y2="0" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="0" y2="0" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="0" y2="100" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="0" y2="200" stroke="#9F1239" strokeWidth="0.5" />
            <line x1="100" y1="100" x2="100" y2="200" stroke="#9F1239" strokeWidth="0.5" />
            {/* Concentric arcs */}
            <circle cx="100" cy="100" r="30" fill="none" stroke="#9F1239" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="#9F1239" strokeWidth="0.3" />
            <circle cx="100" cy="100" r="90" fill="none" stroke="#9F1239" strokeWidth="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#web-pattern)" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   EXPORTED COMPONENTS
   ───────────────────────────────────────────── */

// Hero corner: Hanging Spidey
export function HeroSpider() {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="hidden md:block absolute top-0 right-8 lg:right-16 z-30"
    >
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <SpiderHang className="w-12 lg:w-16 h-auto text-[#9F1239]/30" />
      </motion.div>
    </motion.div>
  );
}

// Card decoration: Crouching Spidey on top edge
export function CardSpider({ index = 0 }: { index?: number }) {
  // Only show on specific cards to avoid overload
  if (index !== 1 && index !== 4) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 + index * 0.1 }}
      className="hidden md:block absolute -top-6 right-4 z-20"
    >
      <SpiderCrouch className="w-10 lg:w-12 h-auto text-[#9F1239]/25" />
    </motion.div>
  );
}

// Scroll-triggered: Spidey descending on web near a section
export function ScrollSpider() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const webLength = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const spiderY = useTransform(scrollYProgress, [0, 0.5], [-40, 160]);
  const spiderOpacity = useTransform(scrollYProgress, [0, 0.15, 0.5], [0, 1, 1]);

  return (
    <div ref={ref} className="hidden md:block absolute -left-4 lg:left-4 top-0 h-full z-20 pointer-events-none">
      <motion.div style={{ opacity: spiderOpacity }} className="relative">
        {/* Web thread */}
        <motion.div
          style={{ height: webLength }}
          className="absolute left-1/2 top-0 w-[1.5px] bg-gradient-to-b from-[#9F1239]/40 to-[#9F1239]/10 origin-top"
        />
        {/* Spider-Man */}
        <motion.div style={{ y: spiderY }}>
          <SpiderSwing className="w-14 lg:w-16 h-auto text-[#9F1239]/25" />
        </motion.div>
      </motion.div>
    </div>
  );
}

// Subtle web pattern overlay for a section
export function WebOverlay() {
  return (
    <div className="hidden md:block">
      <WebPattern />
    </div>
  );
}
