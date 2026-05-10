"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, Music, Film, Dumbbell, Globe, Sparkles } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { Photography } from "@/components/Photography";
import { Magnetic } from "@/components/Magnetic";

/* ── Hobbies ── */
const hobbies = [
  { title: "Gymnastique",  icon: <Dumbbell size={16} />, img: "/images/photos-presentation/gymnastique-life.jpg", wide: true },
  { title: "Cinéma",       icon: <Film     size={16} />, img: "/images/photos-presentation/cinema-life-2.jpg" },
  { title: "Musique",      icon: <Music    size={16} />, img: "/images/photos-presentation/what-music-represent-to-me.jpg" },
  { title: "Voyages",      icon: <Globe    size={16} />, img: "/images/photos-presentation/photo-plage.jpg" },
  { title: "Événementiel", icon: <Camera   size={16} />, img: "/images/photos-presentation/mode-lifestyle.jpg" },
  { title: "Pop Culture",  icon: <Play     size={16} />, img: "/images/photos-presentation/dragon-ball.jpg" },
];

function SectionTitle({ subtitle, title, alignment = "left" }: { subtitle: string; title: string | React.ReactNode; alignment?: "left" | "center" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className={`mb-12 md:mb-20 ${alignment === "center" ? "text-center" : ""}`}>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-[#9F1239] mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tighter break-words"
      >
        {title}
      </motion.h3>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageWrapper>
      
      {/* ════════════ HERO SECTION ════════════ */}
      <section ref={heroRef} className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-16 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 relative z-10 text-center lg:text-left">
            {/* Availability Badge - PC ONLY - Above Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:inline-flex items-center gap-3 px-4 py-2 rounded-full glass-burgundy mb-8"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-[#BE123C] opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-[#BE123C]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2E8F0]">
                Disponibilité : Septembre 2026
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-4xl md:text-8xl lg:text-[10rem] font-display font-black text-white leading-[0.9] tracking-tighter mb-6"
            >
              LYA <br />
              <span className="text-[#9F1239] italic-display">BIWA.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-sm md:text-2xl text-white/40 max-w-xl mx-auto lg:mx-0 mb-8 font-medium leading-relaxed"
            >
              Future stratège en communication spécialisée dans l'événementiel de luxe, de mode et de sport.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <Magnetic strength={0.2}>
                <Link href="/projects" className="btn-primary group flex items-center gap-3 px-10 py-5 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                  Découvrir mon univers 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="lg:col-span-5 relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 max-w-md mx-auto w-full group"
          >
            <Image
              src={getAssetPath("/images/photos-presentation/photo-runway-mode.jpg")}
              alt="Hero Portrait"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
            
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass p-5 rounded-2xl border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#9F1239] flex items-center justify-center text-white">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-[#E2E8F0]/40 font-bold">Expertise</p>
                  <p className="text-white font-bold text-xs">Événementiel & Stratégie</p>
                </div>
              </div>
            </div>
          </motion.div>


        </div>
      </section>

      {/* ════════════ BIO SECTION ════════════ */}
      <section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Left side: Image + Badge Container (Order 2 on Mobile, 1 on PC) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 w-full max-w-lg mx-auto lg:mx-0"
              >
                <Image
                  src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
                  alt="Bio Image"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40" />
              </motion.div>

              {/* Availability Badge - MOBILE ONLY - Directly under Portrait */}
              <div className="lg:hidden flex justify-center mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-burgundy"
                >
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inset-0 rounded-full bg-[#BE123C] opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-[#BE123C]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E2E8F0]">
                    Disponibilité : Septembre 2026
                  </span>
                </motion.div>
              </div>
            </div>

          {/* Right side: Text (Order 1 on Mobile, 2 on PC) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/about" className="inline-flex items-center gap-2 text-[#9F1239] text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-4 hover:opacity-70 transition-opacity">
                  En savoir plus sur mon parcours <ArrowRight size={12} />
                </Link>
                
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-black text-white tracking-tighter leading-[1.1] break-words mb-6">
                  "L'art de la narration <br />
                  <span className="text-[#9F1239] italic-display">au service de l'exception."</span>
                </h2>
                
                <p className="text-sm md:text-2xl text-white/60 font-medium leading-relaxed mb-6 max-w-2xl">
                  Actuellement en BTS Communication, je me projette vers une licence spécialisée pour affiner mon expertise dans les secteurs du luxe, de la mode et du sport. Mon parcours est guidé par une curiosité insatiable et une volonté de repousser les limites de la communication traditionnelle.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-y border-white/10">
                  {[
                    { label: "Formation", value: "BTS Com" },
                    { label: "Spécialité", value: "Event" },
                    { label: "Langues", value: "FR EN ES JP" },
                    { label: "Dispo", value: "Alternance" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-0.5">
                      <p className="text-[8px] uppercase tracking-widest text-[#9F1239] font-black">{stat.label}</p>
                      <p className="text-base md:text-xl font-display font-black text-white">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════ HOBBIES SECTION ════════════ */}
      <section className="py-12 md:py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Inspirations" title="PASSIONS & VIBES" alignment="center" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {hobbies.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group ${h.wide ? "sm:col-span-2 md:col-span-1 md:row-span-2" : "aspect-square"}`}
              >
                <Image src={getAssetPath(h.img)} alt={h.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#9F1239] flex items-center justify-center text-white shadow-lg">
                    {h.icon}
                  </div>
                  <span className="text-lg font-display font-black text-white">{h.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ════════════ PHOTOGRAPHY SECTION ════════════ */}
      <Photography />

      {/* ════════════ FINAL CTA QUOTE ════════════ */}
      <section className="py-12 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden shadow-2xl text-center border border-white/5"
          >
            <div className="absolute inset-0 bg-[#111827]" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#9F123908_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-[#9F1239] mb-8 block">
                Vision
              </span>
              <h4 className="text-2xl md:text-5xl font-display font-black text-white leading-tight mb-12 max-w-3xl mx-auto">
                "Chaque détail compte pour créer une expérience mémorable."
              </h4>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-4 px-12 py-6 rounded-full text-xs font-bold uppercase tracking-widest shadow-2xl shadow-[#9F1239]/30">
                Travaillons ensemble <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
