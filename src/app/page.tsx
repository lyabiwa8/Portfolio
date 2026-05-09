"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, FileText } from "lucide-react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageWrapper>
      {/* ──── HERO ──── */}
      <section
        ref={heroRef}
        className="relative pt-20 md:pt-24 px-4 md:px-6 pb-0 overflow-hidden"
      >
        {/* Full-bleed image with parallax */}
        <motion.div
          style={{ scale: heroScale }}
          className="relative w-full h-[55vh] sm:h-[65vh] md:h-[80vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/photos-presentation/mode-lifestyle.jpg"
            alt="Lya Biwa"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 via-transparent to-brown-900/60" />

          {/* Centered hero text */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 px-6 text-center text-white"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full mb-4"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
              </span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em]">
                Recherche Alternance · Événementiel · Sept. 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-3"
            >
              LYA BIWA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-sm md:text-base font-light italic opacity-80 max-w-xs"
            >
              "I believe, I can fly"
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ──── TAGLINE + BIO ──── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-24 pb-10 md:pb-20">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Text left */}
          <div className="flex-1 lg:max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-brown-900 leading-[1] tracking-tighter mb-6"
            >
              CRÉER<br />
              <em className="text-accent not-italic">L'IMPACT.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-base md:text-lg text-brown-600 leading-relaxed mb-8 font-medium"
            >
              Future étudiante en licence de{" "}
              <span className="text-brown-900 font-bold">Communication</span>. En
              recherche d'une alternance en événementiel —&nbsp;Luxe, Mode ou
              Sport.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/projects"
                className="bg-brown-900 text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-accent transition-all hover:scale-105 shadow-lg shadow-brown-900/15"
              >
                Voir mes travaux
              </Link>
              <Link
                href="/about"
                className="bg-white/60 backdrop-blur-sm border border-brown-200 text-brown-800 text-sm font-bold px-7 py-3.5 rounded-full hover:bg-beige-100 transition-all"
              >
                Mon parcours
              </Link>
            </motion.div>
          </div>

          {/* Portrait right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-[6px] md:border-[10px] border-white/70">
              <Image
                src="/images/photos-presentation/mode-lifestyle.jpg"
                alt="Lya Biwa Editorial"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>
            {/* Stickers */}
            <div className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 bg-accent text-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg rotate-6">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Communication</p>
            </div>
            <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-brown-900 text-white px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-lg -rotate-3">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Design Visuel</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── EXPERTISE CARDS ──── */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 md:mb-14 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
              Mes Domaines
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-brown-900">
              Expertise &amp; Création
            </h3>
          </div>
          <Link
            href="/projects"
            className="text-sm text-brown-600 font-bold hover:text-accent transition-colors flex items-center gap-1.5 group flex-shrink-0"
          >
            Tous les projets
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              title: "Vidéo & Motion",
              icon: <Play size={24} />,
              desc: "Contenus dynamiques, montages percutants et storytelling visuel.",
              bg: "bg-white/70",
            },
            {
              title: "Design Visuel",
              icon: <Camera size={24} />,
              desc: "Identité visuelle, photographie et direction artistique.",
              bg: "bg-beige-100/70",
            },
            {
              title: "Stratégie Com",
              icon: <FileText size={24} />,
              desc: "Plans de communication multicanaux et rédaction de contenu.",
              bg: "bg-brown-100/50",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className={`${card.bg} backdrop-blur-md border border-white/50 p-7 md:p-8 rounded-2xl md:rounded-3xl group cursor-default`}
            >
              <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {card.icon}
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold text-brown-900 mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-brown-600 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ──── QUOTE BAND ──── */}
      <section className="bg-brown-900 py-16 md:py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-7xl font-display text-white/10 leading-none block -mb-4">"</span>
            <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-beige-100 italic leading-snug">
              Les vagues de la mer étaient un plaisir à capturer car à chaque
              angle que je choisissais, il y avait toujours un nouveau motif à
              observer.
            </p>
            <div className="w-16 h-[2px] bg-accent mx-auto mt-8" />
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
