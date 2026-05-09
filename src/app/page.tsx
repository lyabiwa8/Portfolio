"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, FileText, Music, Film, Dumbbell, Globe } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";
import { Photography } from "@/components/Photography";
import { Skills } from "@/components/Skills";

/* ── Gallery photos ── */
const gallery = [
  { src: "/images/photos-presentation/photo-runway-mode.jpg",    label: "Runway" },
  { src: "/images/photos-presentation/vogue-lifestyle.jpg",       label: "Style" },
  { src: "/images/photos-presentation/photo-mode-work.jpg",       label: "Travail" },
  { src: "/images/photos-presentation/gymnast-mode.jpg",          label: "Sportive" },
  { src: "/images/photos-presentation/photo-mode-musee.jpg",      label: "Culture" },
  { src: "/images/photos-presentation/acting-passion.jpg",        label: "Passion" },
  { src: "/images/photos-presentation/photo-runway-mode-2.jpg",   label: "Runway" },
];

/* ── Hobbies ── */
const hobbies = [
  { title: "Gymnastique",  icon: <Dumbbell size={16} />, img: "/images/photos-presentation/gymnastique-life.jpg", wide: true },
  { title: "Cinéma",       icon: <Film     size={16} />, img: "/images/photos-presentation/cinema-life-2.jpg" },
  { title: "Musique",      icon: <Music    size={16} />, img: "/images/photos-presentation/what-music-represent-to-me.jpg" },
  { title: "Voyages",      icon: <Globe    size={16} />, img: "/images/photos-presentation/photo-plage.jpg" },
  { title: "Événementiel", icon: <Camera   size={16} />, img: "/images/photos-presentation/mode-lifestyle.jpg" },
  { title: "Pop Culture",  icon: <Play     size={16} />, img: "/images/photos-presentation/dragon-ball.jpg" },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroScale   = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageWrapper>

      {/* ════════════ HERO ════════════ */}
      <section ref={heroRef} className="relative pt-20 md:pt-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
        <motion.div
          style={{ scale: heroScale, height: "clamp(220px, 38vh, 400px)" }}
          className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5"
        >
          <Image
            src={getAssetPath("/images/photos-presentation/photo-runway-mode.jpg")}
            alt="Lya Biwa" fill priority
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to bottom, rgba(15,23,42,0.1) 0%, transparent 40%, rgba(15,23,42,0.8) 100%)" }}
          />

          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col justify-end px-6 sm:px-10 md:px-14 pb-10 md:pb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-flex items-center gap-2 self-start mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(159,18,57,0.2)", backdropFilter: "blur(8px)", border: "1px solid rgba(159,18,57,0.4)" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inset-0 rounded-full bg-[#FE2C55] opacity-80" />
                <span className="relative rounded-full h-1.5 w-1.5 bg-[#FE2C55]" />
              </span>
              <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em] text-[#E2E8F0]">
                Recherche Alternance · Événementiel · Sept. 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-bold text-white leading-none tracking-tight mb-3"
              style={{ fontSize: "clamp(2.2rem, 5.5vw, 5.5rem)" }}
            >
              LYA BIWA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.66, duration: 0.7 }}
              className="font-display italic text-base md:text-lg text-[#E2E8F0]/70"
            >
              Communication · Événementiel · Création
            </motion.p>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* ════════════ BIO ════════════ */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-16">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[330px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div
              className="img-zoom aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ boxShadow: "0 24px 64px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05)" }}
            >
              <Image
                src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
                alt="Lya Biwa" fill sizes="330px"
                className="object-cover object-top"
              />
            </div>
            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 bg-[#9F1239] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl rotate-2 shadow-lg"
            >
              Événementiel
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -top-3 -left-3 glass-warm text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl -rotate-2 text-[#9F1239]"
            >
              BTS Com
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-[10px] font-semibold uppercase tracking-[0.15em] bg-[#9F1239]/10 border border-[#9F1239]/30 text-[#9F1239]"
            >
              En recherche d'alternance
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, duration: 0.7, ease: "easeOut" }}
              className="font-display font-bold leading-tight tracking-tight mb-5 text-[#F8FAFC]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              CRÉER<br />
              <em className="not-italic text-[#9F1239]">L'IMPACT.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16, duration: 0.6 }}
              className="text-base md:text-lg leading-relaxed mb-8 max-w-md text-[#E2E8F0]/80"
            >
              Future étudiante en licence de communication (spécialisation événementiel luxe, mode ou sport), je recherche une alternance d’un an à partir de septembre 2026 afin d’aider à concevoir et coordonner des événements, tout en optimisant leur visibilité et leur performance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.24, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link href="/projects" className="btn-primary text-sm font-semibold px-7 py-3.5 rounded-full">
                Voir mes travaux
              </Link>
              <Link href="/about" className="btn-outline text-sm font-semibold px-7 py-3.5 rounded-full">
                Mon parcours
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
            >
              {[
                { value: "BTS",     label: "Communication" },
                { value: "Event.",  label: "Spécialité" },
                { value: "Sept.",   label: "Dispo 2026" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-2xl md:text-3xl font-display font-bold text-[#9F1239]">{s.value}</p>
                  <p className="text-[10px] uppercase tracking-widest mt-0.5 text-[#E2E8F0]/40">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════ SKILLS SECTION ════════════ */}
      <Skills />


      {/* ════════════ HOBBIES ════════════ */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[0.22em] font-semibold block mb-1.5 text-[#9F1239]">
            Ce qui me représente
          </span>
          <h3 className="font-display font-bold text-3xl md:text-5xl leading-tight text-[#F8FAFC]">
            Passions &amp;<br className="hidden md:block" /> Centres d'intérêt
          </h3>
        </motion.div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-2.5 md:gap-3"
          style={{ gridAutoRows: "clamp(150px, 22vw, 240px)" }}
        >
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              className={`img-zoom relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-white/5 ${h.wide ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
            >
              <Image src={getAssetPath(h.img)} alt={h.title} fill className="object-cover" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.1) 60%, transparent 100%)" }}
              />
              <div className="absolute bottom-0 inset-x-0 p-3.5 md:p-4">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#9F1239]">{h.icon}</span>
                  <span className="text-sm md:text-base font-display font-bold text-white">{h.title}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* ════════════ PHOTOGRAPHY ════════════ */}
      <Photography />

      {/* ════════════ QUOTE (dark navy band) ════════════ */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-2xl"
            style={{ minHeight: "300px" }}
          >
            <Image
              src={getAssetPath("/images/photos-presentation/photo-mer.jpg")}
              alt="La mer" fill
              className="object-cover brightness-[0.4]"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(2,6,23,0.7) 100%)" }}
            />
            <div
              className="relative z-10 flex flex-col items-center justify-center text-center p-10 md:p-20"
              style={{ minHeight: "300px" }}
            >
              <span
                className="font-display text-7xl leading-none block -mb-8 text-[#9F1239]/20"
              >"</span>
              <p
                className="font-display font-bold italic text-xl sm:text-2xl md:text-3xl leading-snug max-w-2xl text-[#E2E8F0]"
              >
                Les vagues de la mer étaient un plaisir à capturer car à chaque angle que je choisissais, il y avait toujours un nouveau motif à observer.
              </p>
              <div
                className="mt-8 w-12 h-[2px] rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #9F1239, transparent)" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
