"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Subtle burgundy particle net on navy background ── */
function DarkParticleNet() {
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

    // Burgundy / Dark Navy tones
    const COUNT = 40;
    const LINK  = 180;
    const SPEED = 0.25;

    type P = { x: number; y: number; vx: number; vy: number; r: number; pulse: number; pSpeed: number };
    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 0.8 + Math.random() * 1.2,
      pulse: Math.random() * Math.PI * 2,
      pSpeed: 0.01 + Math.random() * 0.015,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        p.pulse += p.pSpeed;
      }

      // Lines — burgundy hue
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const a = (1 - d / LINK) * 0.15;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(159, 18, 57, ${a})`;
            ctx.lineWidth   = (1 - d / LINK) * 0.8;
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of pts) {
        const glow = 0.2 + 0.15 * Math.sin(p.pulse);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(159, 18, 57, ${glow})`;
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

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />;
}

/* ── Navy & Burgundy blobs (Subtle) ── */
const blobs = [
  { top: "-10%", left: "-5%",  w: "60%", h: "60%", color: "rgba(15, 23, 42, 0.8)", dur: 22, dx: 40, dy: 30 },
  { top: "5%",  right: "-10%", w: "45%", h: "45%", color: "rgba(159, 18, 57, 0.15)", dur: 18, dx: -40, dy: 25 },
  { bottom: "-15%", left: "5%", w: "60%", h: "60%", color: "rgba(17, 24, 39, 0.9)", dur: 28, dx: -30, dy: -25 },
  { top: "35%", left: "30%",   w: "35%", h: "35%", color: "rgba(159, 18, 57, 0.1)", dur: 15, dx: 25, dy: -35 },
];

export function ModernBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "radial-gradient(circle at top left, #0F172A 0%, #020617 100%)" }}
    >
      {/* Dynamic blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: i * 1.5 }}
          style={{
            position: "absolute",
            top:    (b as any).top    ?? undefined,
            left:   (b as any).left   ?? undefined,
            right:  (b as any).right  ?? undefined,
            bottom: (b as any).bottom ?? undefined,
            width: b.w, height: b.h,
            borderRadius: "100%",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Particle net */}
      <DarkParticleNet />

      {/* Fine grain */}
      <div
        style={{
          position: "absolute", inset: 0,
          opacity: 0.03,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
