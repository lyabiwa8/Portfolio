"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, FileText, Music, Film, Dumbbell, Globe } from "lucide-react";

/* ── Simple reveal helper ── */
function Rev({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ── Photo gallery images ── */
const galleryPhotos = [
  { src: "/images/photos-presentation/photo-runway-mode.jpg",    aspect: "tall",   alt: "Runway Mode" },
  { src: "/images/photos-presentation/vogue-lifestyle.jpg",       aspect: "square", alt: "Vogue Lifestyle" },
  { src: "/images/photos-presentation/photo-mode-work.jpg",       aspect: "square", alt: "Mode Work" },
  { src: "/images/photos-presentation/gymnast-mode.jpg",          aspect: "tall",   alt: "Gymnast Mode" },
  { src: "/images/photos-presentation/photo-mode-musee.jpg",      aspect: "square", alt: "Musée Mode" },
  { src: "/images/photos-presentation/acting-passion.jpg",        aspect: "square", alt: "Acting Passion" },
  { src: "/images/photos-presentation/photo-runway-mode-2.jpg",   aspect: "tall",   alt: "Runway 2" },
];

/* ── Hobbies data ── */
const hobbies = [
  { title: "Gymnastique",    icon: <Dumbbell size={16} />, img: "/images/photos-presentation/gymnastique-life.jpg",         span: "col-span-2 md:col-span-1 row-span-2" },
  { title: "Cinéma",         icon: <Film     size={16} />, img: "/images/photos-presentation/cinema-life-2.jpg",            span: "" },
  { title: "Musique",        icon: <Music    size={16} />, img: "/images/photos-presentation/what-music-represent-to-me.jpg", span: "" },
  { title: "Voyages",        icon: <Globe    size={16} />, img: "/images/photos-presentation/photo-plage.jpg",              span: "" },
  { title: "Mode & Luxe",    icon: <Camera   size={16} />, img: "/images/photos-presentation/mode-lifestyle.jpg",           span: "" },
  { title: "Pop Culture",    icon: <Play     size={16} />, img: "/images/photos-presentation/dragon-ball.jpg",             span: "" },
];

export default function Home() {
  const heroRef  = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const rawScale   = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const heroScale   = useSpring(rawScale,   { stiffness: 60, damping: 20 });
  const heroOpacity = useSpring(rawOpacity, { stiffness: 80, damping: 25 });

  return (
    <PageWrapper>

      {/* ════════════════════════════════════
          HERO — Cinematic full-bleed
      ════════════════════════════════════ */}
      <section ref={heroRef} className="relative pt-20 md:pt-24 px-3 md:px-5 overflow-hidden">
        <motion.div
          style={{ scale: heroScale, height: "clamp(60vh, 85vh, 92vh)" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/photos-presentation/photo-runway-mode.jpg"
            alt="Lya Biwa"
            fill priority
            className="object-cover object-center"
          />
          {/* Multi-layer gradient */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(15,9,5,0.15) 0%, transparent 30%, rgba(15,9,5,0.25) 65%, rgba(15,9,5,0.85) 100%)" }}
          />

          {/* Hero content */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col justify-end px-6 md:px-12 pb-10 md:pb-16"
          >
            {/* Alternance badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 self-start mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(201,151,92,0.15)", border: "1px solid rgba(201,151,92,0.3)", backdropFilter: "blur(8px)" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inset-0 rounded-full bg-amber-400 opacity-70" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">
                Recherche Alternance · Événementiel · Sept. 2026
              </span>
            </motion.div>

            {/* Name — big editorial */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-cream-50 tracking-tight leading-none mb-4"
              style={{ fontSize: "clamp(3rem, 10vw, 9rem)", color: "#F5EDD8" }}
            >
              LYA BIWA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="font-display italic text-base md:text-lg"
              style={{ color: "rgba(232,201,122,0.75)" }}
            >
              Communication · Événementiel · Création
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          BIO — portrait + text
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-8">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-[260px] sm:max-w-[310px] lg:max-w-[360px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden img-zoom"
              style={{ boxShadow: "0 32px 80px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,151,92,0.12)" }}
            >
              <Image
                src="/images/photos-presentation/bio-photo.jpg"
                alt="Lya Biwa"
                fill sizes="360px"
                className="object-cover object-top"
              />
            </div>
            {/* Floating tags */}
            <motion.div
              animate={{ y: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 btn-gold text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl rotate-2"
            >
              Événementiel
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 glass-gold text-[10px] font-bold uppercase tracking-widest px-3.5 py-2.5 rounded-xl -rotate-2"
              style={{ color: "#C9975C" }}
            >
              BTS Com
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
              className="font-display font-bold leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: "#F5EDD8" }}
            >
              CRÉER<br />
              <span className="text-gradient italic">L'IMPACT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: "rgba(232,217,188,0.65)" }}
            >
              Future étudiante en{" "}
              <span style={{ color: "#F5EDD8", fontWeight: 600 }}>Licence de Communication</span>,
              spécialisée en événementiel. Je crée des expériences mémorables, des visuels qui marquent et des stratégies qui durent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/projects" className="btn-gold text-sm font-semibold px-7 py-3.5 rounded-full">
                Voir mes travaux
              </Link>
              <Link href="/about"
                className="glass text-sm font-semibold px-7 py-3.5 rounded-full transition-all hover:glass-gold"
                style={{ color: "#E8D9BC" }}
              >
                Mon parcours →
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="grid grid-cols-3 gap-6 pt-8"
              style={{ borderTop: "1px solid rgba(245,237,216,0.08)" }}
            >
              {[
                { value: "BTS",   label: "Communication" },
                { value: "Luxe",  label: "Spécialité" },
                { value: "Sept.", label: "Dispo 2026" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-display font-bold text-gradient">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-widest mt-0.5" style={{ color: "rgba(232,217,188,0.40)" }}>{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PHOTO GALLERY STRIP — masonry style
      ════════════════════════════════════ */}
      <section className="px-4 md:px-6 py-16 md:py-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto mb-10"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: "#C9975C" }}>
            Photographie
          </span>
          <h3 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "#F5EDD8" }}>
            Instants captés
          </h3>
        </motion.div>

        {/* 7-photo asymmetric grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4" style={{ gridAutoRows: "200px" }}>
          {galleryPhotos.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.35 } }}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl img-zoom ${
                i === 0 ? "md:col-span-2 md:row-span-2" :
                i === 3 ? "md:row-span-2" : ""
              }`}
              style={{ boxShadow: "0 8px 32px -4px rgba(0,0,0,0.6)" }}
            >
              <Image src={p.src} alt={p.alt} fill className="object-cover" />
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(15,9,5,0.7) 0%, transparent 60%)" }}
              />
              <span
                className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-widest opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{ color: "#C9975C" }}
              >
                {p.alt}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          EXPERTISE CARDS
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <div className="flex justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: "#C9975C" }}>
              Mes Domaines
            </span>
            <h3 className="font-display font-bold text-3xl md:text-4xl" style={{ color: "#F5EDD8" }}>
              Expertise &amp; Création
            </h3>
          </div>
          <Link href="/projects"
            className="text-sm font-semibold flex items-center gap-1.5 group flex-shrink-0"
            style={{ color: "rgba(232,217,188,0.55)" }}
          >
            Tous les projets
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: <Play size={22} />,    title: "Vidéo & Motion",  desc: "Montages percutants, storytelling visuel et contenus dynamiques.", img: "/images/photos-presentation/cinema-life-3.jpg" },
            { icon: <Camera size={22} />,  title: "Design Visuel",   desc: "Identité de marque, photographie et direction artistique.",        img: "/images/photos-presentation/photo-mode-musee.jpg" },
            { icon: <FileText size={22} />, title: "Stratégie Com",  desc: "Plans de communication multicanaux, ingénierie événementielle.",   img: "/images/photos-presentation/photo-mode-work.jpg" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative overflow-hidden rounded-2xl md:rounded-3xl group cursor-default"
              style={{ background: "rgba(245,237,216,0.03)", border: "1px solid rgba(245,237,216,0.08)", boxShadow: "0 8px 40px -8px rgba(0,0,0,0.5)" }}
            >
              {/* Background photo (visible on hover) */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>

              <div className="relative z-10 p-7 md:p-8">
                <div className="mb-5 w-11 h-11 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ background: "rgba(201,151,92,0.12)", border: "1px solid rgba(201,151,92,0.2)", color: "#C9975C" }}
                >
                  {c.icon}
                </div>
                <h4 className="font-display font-bold text-lg md:text-xl mb-2" style={{ color: "#F5EDD8" }}>{c.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(232,217,188,0.55)" }}>{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          HOBBIES — Ce qui me représente
      ════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pb-16 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-12"
        >
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold block mb-2" style={{ color: "#C9975C" }}>
            Ce qui me représente
          </span>
          <h3 className="font-display font-bold text-3xl md:text-5xl leading-tight" style={{ color: "#F5EDD8" }}>
            Passions &amp;<br className="hidden md:block" /> Centres d'intérêt
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: "220px" }}>
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl img-zoom ${h.span}`}
              style={{ boxShadow: "0 8px 32px -4px rgba(0,0,0,0.6)" }}
            >
              <Image src={h.img} alt={h.title} fill className="object-cover" />
              <div className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,9,5,0.80) 0%, rgba(15,9,5,0.10) 60%, transparent 100%)" }}
              />
              <div className="absolute bottom-0 inset-x-0 p-4 md:p-5">
                <div className="flex items-center gap-2">
                  <span style={{ color: "#C9975C" }}>{h.icon}</span>
                  <span className="text-sm md:text-base font-display font-bold" style={{ color: "#F5EDD8" }}>{h.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════
          QUOTE — with photo background
      ════════════════════════════════════ */}
      <section className="px-4 md:px-6 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl"
            style={{ minHeight: "340px" }}
          >
            <Image
              src="/images/photos-presentation/photo-mer.jpg"
              alt="La mer"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.3)" }}
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(35,21,7,0.85) 0%, rgba(15,9,5,0.6) 100%)" }}
            />

            <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 md:p-20 h-full" style={{ minHeight: "340px" }}>
              <span className="font-display text-7xl md:text-8xl leading-none block -mb-8" style={{ color: "rgba(201,151,92,0.25)" }}>"</span>
              <p className="font-display font-bold italic text-xl sm:text-2xl md:text-3xl leading-snug max-w-3xl" style={{ color: "#F5EDD8" }}>
                Les vagues de la mer étaient un plaisir à capturer car à chaque angle que je choisissais, il y avait toujours un nouveau motif à observer.
              </p>
              <div className="mt-8 w-12 h-[2px]" style={{ background: "linear-gradient(90deg, transparent, #C9975C, transparent)" }} />
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
