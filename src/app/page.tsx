"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, Music, Film, Dumbbell, Globe, Sparkles } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { Photography } from "@/components/Photography";
import { Portfolio } from "@/components/Portfolio";
import { Passions } from "@/components/Passions";
import { Magnetic } from "@/components/Magnetic";

/* ── Hobbies ── */
const hobbies = [
  { title: "Gymnastique",  icon: <Dumbbell size={16} />, img: "/images/photos-presentation/gymnastique-life.jpg", wide: true },
  { title: "Cinéma",       icon: <Film     size={16} />, img: "/images/photos-presentation/cinema-life-2.jpg" },
  { title: "Musique",      icon: <Music    size={16} />, img: "/images/photos-presentation/what-music-represent-to-me.jpg" },
  { title: "Voyages",      icon: <Globe    size={16} />, img: "/images/photos-presentation/photo-plage.jpg" },
  { title: "Événementiel", icon: <Camera   size={16} />, img: "/images/photos-presentation/mode-lifestyle.jpg" },
  { 
    title: "Pop Culture",  
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M21 7.2c-.3-.2-.6-.4-1-.5-1.2-.4-2.5.1-3.5.7-.1-1.2-1.2-2.3-2.5-2.4-1.3-.1-2.4 1-2.5 2.3-.1-1.3-1.2-2.4-2.5-2.3-1.3.1-2.4 1.2-2.5 2.4-1-.6-2.3-1.1-3.5-.7-.4.1-.7.3-1 .5 0 0 1.5 4.5 10 9.8 8.5.2 10-9.8 10-9.8z" />
      </svg>
    ), 
    img: "/images/photos-presentation/dragon-ball.jpg" 
  },
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
        className="text-[10px] md:text-xs uppercase tracking-[0.4em] font-bold text-accent-primary mb-4 block"
      >
        {subtitle}
      </motion.span>
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="text-3xl md:text-6xl lg:text-7xl font-display font-bold text-text-primary leading-[1.1] tracking-tighter break-words"
      >
        {title}
      </motion.h3>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Handle responsive parallax
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <PageWrapper>
      
      {/* ════════════ HERO SECTION ════════════ */}
      <section ref={heroRef} className="relative min-h-[70vh] lg:min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 lg:pt-32 pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 relative z-20 text-center lg:text-left">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden lg:inline-flex items-center gap-3 px-5 py-2 rounded-full glass-accent mb-10 shadow-sm"
            >
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inset-0 rounded-full bg-accent-primary opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-accent-primary" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                Recherche une alternance : Septembre 2026
              </span>
            </motion.div>
            
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
              }}
              className="text-5xl md:text-8xl lg:text-[10rem] font-display font-bold text-text-primary leading-[0.85] tracking-tighter mb-8"
            >
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} 
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
                className="block"
              >
                LYA
              </motion.span>
              <motion.span 
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} 
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} 
                className="text-accent-primary italic-display block"
              >
                BIWA.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-sm md:text-2xl text-text-secondary max-w-xl mx-auto lg:mx-0 mb-10 font-medium leading-relaxed"
            >
              Future stratège en communication spécialisée dans l'événementiel de luxe, de mode et de sport.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <Magnetic strength={0.2}>
                <Link href="/projects" className="btn-primary group flex items-center gap-4 px-12 py-6 rounded-full text-xs font-bold uppercase tracking-[0.2em] shadow-lg">
                  Découvrir mon univers 
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.div>
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            style={{ y: isMobile ? 0 : heroY, opacity: heroOpacity }}
            className="lg:col-span-5 relative group z-10"
          >
            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden soft-shadow border border-border-subtle/20 max-w-md mx-auto w-full transition-all duration-1000 z-10">
              <Image
                src={getAssetPath("/images/photos-presentation/photo-runway-mode.jpg")}
                alt="Hero Portrait"
                fill
                className="object-cover object-center transition-transform duration-[2s] group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-main/40 via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-2xl border-white/40 flex items-center gap-5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-accent-primary flex items-center justify-center text-white shadow-md">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-text-secondary font-bold">Expertise</p>
                    <p className="text-text-primary font-bold text-sm">Événementiel & Stratégie</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════ BIO SECTION ════════════ */}
      <section className="relative z-20 py-12 md:py-40 px-6 md:px-12 lg:px-24 bg-bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            
            <div className="lg:col-span-5 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative aspect-[4/5] rounded-[3rem] overflow-hidden soft-shadow border border-border-subtle/20 w-full max-w-lg mx-auto lg:mx-0"
              >
                <Image
                  src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
                  alt="Bio Image"
                  fill
                  className="object-cover object-center brightness-[1.02]"
                />
              </motion.div>

              {/* Availability Badge - MOBILE */}
              <div className="lg:hidden flex justify-center mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-accent shadow-sm"
                >
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inset-0 rounded-full bg-accent-primary opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-accent-primary" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-primary">
                    Recherche une alternance : Septembre 2026
                  </span>
                </motion.div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/about" className="inline-flex items-center gap-2 text-accent-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6 hover:opacity-70 transition-opacity">
                  En savoir plus sur mon parcours <ArrowRight size={14} />
                </Link>
                
                <h2 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-text-primary tracking-tighter leading-[1.1] mb-8">
                  "L'art de la narration <br />
                  <span className="text-accent-primary italic-display">au service de l'exception."</span>
                </h2>
                
                <p className="text-sm md:text-2xl text-text-secondary font-medium leading-relaxed mb-10 max-w-2xl">
                  Actuellement en BTS Communication, je me projette vers une licence spécialisée pour affiner mon expertise dans les secteurs du luxe, de la mode et du sport. Mon parcours est guidé par une curiosité insatiable et une volonté de repousser les limites de la communication traditionnelle.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border-subtle/40">
                  {[
                    { label: "Formation", value: "BTS Com" },
                    { label: "Spécialité", value: "Event" },
                    { label: "Langues", value: "FR EN JP" },
                    { label: "Besoin", value: "Alternance" },
                  ].map((stat, i) => (
                    <div key={i} className="space-y-1">
                      <p className="text-[9px] uppercase tracking-widest text-accent-primary font-bold">{stat.label}</p>
                      <p className="text-xl md:text-2xl font-display font-bold text-text-primary">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      <Passions />
      
      <Portfolio />
      <Photography />

      {/* ════════════ FINAL CTA QUOTE ════════════ */}
      <section className="py-12 md:py-40 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative p-12 md:p-32 rounded-[4rem] overflow-hidden soft-shadow text-center border border-border-subtle/20"
          >
            <div className="absolute inset-0 bg-surface" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(47,59,36,0.03)_0%,transparent_70%)]" />
            
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-accent-primary mb-10 block">
                Vision
              </span>
              <h4 className="text-3xl md:text-6xl font-display font-bold text-text-primary leading-tight mb-16 max-w-4xl mx-auto text-balance">
                "Chaque détail compte pour créer une expérience mémorable."
              </h4>
              <Link href="/contact" className="btn-primary inline-flex items-center gap-5 px-14 py-7 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl">
                Travaillons ensemble <ArrowRight size={22} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>

  );
}
