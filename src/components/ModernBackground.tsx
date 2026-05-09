"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ── Subtle warm particle net on light background ── */
function LightParticleNet() {
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

    // Terracotta / warm brown — very subtle on light bg
    const COUNT = 45;
    const LINK  = 160;
    const SPEED = 0.22;

    type P = { x: number; y: number; vx: number; vy: number; r: number; pulse: number; pSpeed: number };
    const pts: P[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1 + Math.random() * 1.4,
      pulse: Math.random() * Math.PI * 2,
      pSpeed: 0.012 + Math.random() * 0.016,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of pts) {
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        p.pulse += p.pSpeed;
      }

      // Lines — very subtle warm tone
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const a = (1 - d / LINK) * 0.10;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(168, 112, 63, ${a})`;
            ctx.lineWidth   = (1 - d / LINK) * 1.0;
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of pts) {
        const glow = 0.18 + 0.12 * Math.sin(p.pulse);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 112, 63, ${glow})`;
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

  return <canvas ref={ref} className="absolute inset-0 w-full h-full" style={{ opacity: 0.7 }} />;
}

/* ── Warm blobs (very subtle on light bg) ── */
const blobs = [
  { top: "-15%", left: "-8%",  w: "55%", h: "55%", color: "rgba(221, 198, 170, 0.45)", dur: 24, dx: 50, dy: 35 },
  { top: "5%",  right: "-5%",  w: "40%", h: "42%", color: "rgba(237, 217, 190, 0.35)", dur: 20, dx: -45, dy: 28 },
  { bottom: "-20%", left: "8%", w: "65%", h: "55%", color: "rgba(213, 185, 150, 0.30)", dur: 30, dx: -35, dy: -30 },
  { top: "38%", left: "32%",   w: "32%", h: "32%", color: "rgba(201, 173, 135, 0.22)", dur: 17, dx: 30, dy: -40 },
];

export function ModernBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #F0DCBD 0%, #E8D5B8 45%, #DFC9A8 100%)" }}
    >
      {/* Warm blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{ x: [0, b.dx, 0], y: [0, b.dy, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
          style={{
            position: "absolute",
            top:    (b as any).top    ?? undefined,
            left:   (b as any).left   ?? undefined,
            right:  (b as any).right  ?? undefined,
            bottom: (b as any).bottom ?? undefined,
            width: b.w, height: b.h,
            borderRadius: "100%",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Particle net */}
      <LightParticleNet />

      {/* Fine grain */}
      <div
        style={{
          position: "absolute", inset: 0,
          opacity: 0.025,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          mixBlendMode: "multiply",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}


