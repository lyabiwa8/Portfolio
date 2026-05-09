"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Warm particle net — perfectly matches the site palette ── */
function ParticleNet() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Gold color matching #C9975C
    const R = 201, G = 151, B = 92;
    const COUNT = 55;
    const LINK  = 180;
    const SPEED = 0.25;

    type P = { x: number; y: number; vx: number; vy: number; r: number; pulse: number; pSpeed: number };
    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1 + Math.random() * 1.8,
      pulse: Math.random() * Math.PI * 2,
      pSpeed: 0.015 + Math.random() * 0.02,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        p.x  = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y  = (p.y + p.vy + canvas.height) % canvas.height;
        p.pulse += p.pSpeed;
      }

      // Lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx   = pts[i].x - pts[j].x;
          const dy   = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK) {
            const a = (1 - dist / LINK) * 0.15;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(${R},${G},${B},${a})`;
            ctx.lineWidth   = (1 - dist / LINK) * 1.5;
            ctx.stroke();
          }
        }
      }

      // Dots (pulsing)
      for (const p of pts) {
        const glow = 0.4 + 0.25 * Math.sin(p.pulse);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${R},${G},${B},${glow})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }} />;
}

/* ── Blob definitions — gold palette matching the site accent ── */
const blobs = [
  { top: "-20%", left: "-10%", w: "60%", h: "60%", color: "rgba(201,151,92,0.18)", dur: 24, dx: 70, dy: 40 },
  { top:  "10%", right: "-5%", w: "40%", h: "45%", color: "rgba(232,201,122,0.10)", dur: 20, dx: -50, dy: 30 },
  { bottom: "-20%", left: "5%", w: "70%", h: "55%", color: "rgba(168,112,64,0.12)", dur: 30, dx: -40, dy: -35 },
  { top:  "40%", left: "35%",  w: "35%", h: "35%", color: "rgba(201,151,92,0.07)", dur: 17, dx: 35, dy: -50 },
];

export function ModernBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 10%, #231507 0%, #120804 50%, #0F0905 100%)",
      }}
    >
      {/* Gradient blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          style={{
            position: "absolute",
            top:    (b as any).top    ?? undefined,
            left:   (b as any).left   ?? undefined,
            right:  (b as any).right  ?? undefined,
            bottom: (b as any).bottom ?? undefined,
            width:  b.w,
            height: b.h,
            borderRadius: "100%",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Canvas particle net */}
      <ParticleNet />

      {/* Subtle horizontal aurora — gold tone */}
      <motion.div
        animate={{ opacity: [0.05, 0.13, 0.05], y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: 0, right: 0,
          top: "42%",
          height: "180px",
          background:
            "linear-gradient(90deg, transparent 0%, rgba(201,151,92,0.15) 25%, rgba(232,201,122,0.20) 50%, rgba(201,151,92,0.15) 75%, transparent 100%)",
          filter: "blur(50px)",
          pointerEvents: "none",
        }}
      />

      {/* Vignette — darker edges */}
      <div
        style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(8,5,2,0.7) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Fine grain */}
      <div
        style={{
          position: "absolute", inset: 0,
          opacity: 0.04,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
