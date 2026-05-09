"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─── Animated canvas net (Vanta-inspired, warm palette) ─── */
function WarmNetCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize to full viewport
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Warm palette: deep brown base + amber/gold accent
    const COLORS = {
      bg:      "rgba(30, 21, 15, 0)",   // transparent — let CSS handle bg
      node:    "rgba(184, 145, 90, 0.55)",
      line:    "rgba(184, 145, 90, 0.08)",
      lineFar: "rgba(210, 180, 140, 0.04)",
    };

    const NODES = 60;
    const CONNECT_DIST = 200;
    const SPEED = 0.3;

    // Create nodes
    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    const nodes: Node[] = Array.from({ length: NODES }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
      r: 1 + Math.random() * 1.5,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move nodes + wrap
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) n.x = canvas.width;
        if (n.x > canvas.width) n.x = 0;
        if (n.y < 0) n.y = canvas.height;
        if (n.y > canvas.height) n.y = 0;
      }

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = 1 - dist / CONNECT_DIST;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(184, 145, 90, ${alpha * 0.12})`;
            ctx.lineWidth = alpha * 1.2;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = COLORS.node;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}

/* ─── Flowing gradient blobs (Framer/Webflow style) ─── */
const blobs = [
  { top: "-10%", left: "-5%",  w: "55%", h: "55%", color: "rgba(184,145,90,0.20)", dur: 22, dx: 60, dy: 35 },
  { top: "5%",   right: "-8%", w: "45%", h: "45%", color: "rgba(210,175,120,0.10)", dur: 18, dx: -40, dy: 25 },
  { bottom: "-15%", left: "10%", w: "65%", h: "55%", color: "rgba(150,100,60,0.14)", dur: 28, dx: -50, dy: -30 },
  { top: "35%",  left: "30%",  w: "38%", h: "38%", color: "rgba(184,145,90,0.09)", dur: 16, dx: 30, dy: -45 },
];

export function ModernBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: "linear-gradient(150deg, #281A0D 0%, #1C1208 45%, #231608 75%, #281A0D 100%)",
      }}
    >
      {/* ── Flowing blobs ── */}
      {blobs.map((b, i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, b.dx, 0],
            y: [0, b.dy, 0],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: b.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1.5,
          }}
          style={{
            position: "absolute",
            top:    b.top    ?? undefined,
            left:   b.left   ?? undefined,
            right:  (b as any).right  ?? undefined,
            bottom: (b as any).bottom ?? undefined,
            width:  b.w,
            height: b.h,
            borderRadius: "100%",
            background: `radial-gradient(circle, ${b.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
          }}
        />
      ))}

      {/* ── Canvas net overlay ── */}
      <WarmNetCanvas />

      {/* ── Aurora horizontal band ── */}
      <motion.div
        animate={{ opacity: [0.06, 0.12, 0.06], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-0 right-0"
        style={{
          top: "45%",
          height: "200px",
          background: "linear-gradient(90deg, transparent 0%, rgba(184,145,90,0.12) 30%, rgba(210,175,120,0.16) 50%, rgba(184,145,90,0.12) 70%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />

      {/* ── Fine grain noise ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
