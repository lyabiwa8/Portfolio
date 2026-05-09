"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { ArrowRight, Play, Camera, FileText, Music, Film, Dumbbell, Globe } from "lucide-react";

/* ─── Hobby data using real photos ─── */
const hobbies = [
  {
    title: "Gymnastique",
    icon: <Dumbbell size={18} />,
    desc: "Je pratique la gymnastique en club depuis des années.",
    img: "/images/photos-presentation/gymnastique-life.jpg",
    accent: "from-amber-900/60",
  },
  {
    title: "Cinéma & Séries",
    icon: <Film size={18} />,
    desc: "Dystopie, Fantasy, Romance… j'aime les univers immersifs.",
    img: "/images/photos-presentation/cinema-life.jpg",
    accent: "from-brown-900/60",
  },
  {
    title: "Musique",
    icon: <Music size={18} />,
    desc: "La musique est une émotion que les mots ne suffisent pas à décrire.",
    img: "/images/photos-presentation/what-music-represent-to-me.jpg",
    accent: "from-stone-900/60",
  },
  {
    title: "Voyages",
    icon: <Globe size={18} />,
    desc: "Îles Canaries, Égypte... capturer la beauté du monde.",
    img: "/images/photos-presentation/photo-iles-canaris.jpg",
    accent: "from-slate-900/60",
  },
  {
    title: "Mode & Style",
    icon: <Camera size={18} />,
    desc: "Vogue, collections Luxe, runway… la mode est un art de vivre.",
    img: "/images/photos-presentation/vogue-lifestyle.jpg",
    accent: "from-rose-900/60",
  },
  {
    title: "Pop Culture",
    icon: <Play size={18} />,
    desc: "Dragon Ball, Spiderman, WWE — des univers qui m'ont construite.",
    img: "/images/photos-presentation/dragon-ball.jpg",
    accent: "from-purple-900/60",
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale  = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <PageWrapper>

      {/* ══════════════════════════════════════════
          HERO — full-bleed cinematic photo
      ══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative pt-20 md:pt-24 px-4 md:px-6 overflow-hidden">
        <motion.div
          style={{ scale: heroScale }}
          className="relative w-full h-[60vh] sm:h-[72vh] md:h-[88vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/photos-presentation/photo-runway-mode.jpg"
            alt="Lya Biwa — Portfolio"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />

          {/* Hero text block */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-end pb-10 md:pb-16 px-6 text-center text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-5"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
                Recherche Alternance · Événementiel · Sept. 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-display font-bold tracking-tighter leading-[0.9] mb-3"
            >
              LYA BIWA
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              className="text-sm md:text-base font-light italic text-white/70"
            >
              Communication · Événementiel · Création
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════
          BIO — photo + tagline
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-20 md:pt-28 pb-10 md:pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-10 md:gap-16 lg:gap-20">

          {/* ── Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[380px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/photos-presentation/bio-photo.jpg"
                alt="Lya Biwa"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 glass-warm text-amber-300 px-3.5 py-2.5 rounded-xl shadow-lg -rotate-2 border border-amber-500/20">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Design Visuel</p>
            </div>
            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 bg-accent text-white px-3.5 py-2.5 rounded-xl shadow-lg rotate-2">
              <p className="text-[9px] md:text-[10px] font-black uppercase tracking-widest">Événementiel</p>
            </div>
          </motion.div>

          {/* ── Text ── */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-beige-50 leading-[1.0] tracking-tighter mb-6"
            >
              CRÉER<br />
              <span className="text-accent italic">L'IMPACT.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 0.6 }}
              className="text-base md:text-lg text-beige-100/70 leading-relaxed mb-8 max-w-lg"
            >
              Future étudiante en licence de{" "}
              <span className="text-beige-50 font-semibold">Communication</span>,
              spécialisée en événementiel. Je crois que chaque projet mérite une
              histoire forte, une image qui marque, et une stratégie qui dure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/projects"
                className="bg-accent text-white text-sm font-bold px-7 py-3.5 rounded-full hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-accent/20"
              >
                Voir mes travaux
              </Link>
              <Link
                href="/about"
                className="glass text-beige-100 text-sm font-bold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all"
              >
                Mon parcours →
              </Link>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.6 }}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
            >
              {[
                { value: "BTS", label: "Communication" },
                { value: "Luxe", label: "Spécialisation" },
                { value: "Sept.", label: "Disponible 2026" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl md:text-3xl font-display font-bold text-accent">{stat.value}</p>
                  <p className="text-[11px] text-beige-100/50 uppercase tracking-widest mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          EXPERTISE CARDS
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
              Mes Domaines
            </span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-beige-50">
              Expertise &amp; Création
            </h3>
          </div>
          <Link
            href="/projects"
            className="text-sm text-beige-100/60 font-bold hover:text-accent transition-colors flex items-center gap-1.5 group"
          >
            Tous les projets
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              title: "Vidéo & Motion",
              icon: <Play size={22} />,
              desc: "Montages percutants, storytelling visuel et contenus dynamiques.",
            },
            {
              title: "Design Visuel",
              icon: <Camera size={22} />,
              desc: "Identité de marque, photographie et direction artistique.",
            },
            {
              title: "Stratégie Com",
              icon: <FileText size={22} />,
              desc: "Plans de communication multicanaux, ingénierie événementielle.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="glass p-7 md:p-8 rounded-2xl md:rounded-3xl group cursor-default"
            >
              <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {card.icon}
              </div>
              <h4 className="text-lg md:text-xl font-display font-bold text-beige-50 mb-2">
                {card.title}
              </h4>
              <p className="text-sm text-beige-100/60 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CE QUI ME REPRÉSENTE — Hobbies
      ══════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="mb-12 md:mb-16">
          <span className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold block mb-2">
            Ce qui me représente
          </span>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-beige-50 leading-tight">
            Passions &amp;<br className="hidden md:block" /> Centres d'intérêt
          </h3>
        </div>

        {/* Masonry-style hobby grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {hobbies.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""}`}
            >
              <div className={`${i === 0 ? "aspect-[4/5]" : "aspect-square"} relative`}>
                <Image
                  src={h.img}
                  alt={h.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${h.accent} via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity`} />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                  <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent">{h.icon}</span>
                      <h4 className="text-sm md:text-base font-display font-bold text-white">{h.title}</h4>
                    </div>
                    <p className="text-[11px] md:text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:block">
                      {h.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════
          QUOTE BAND
      ══════════════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-warm rounded-2xl md:rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            {/* Background image */}
            <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
              <Image
                src="/images/photos-presentation/photo-mer.jpg"
                alt="La mer"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <span className="text-7xl md:text-8xl font-display text-accent/30 leading-none block -mb-6">"</span>
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-beige-50 italic leading-snug max-w-3xl mx-auto">
                Les vagues de la mer étaient un plaisir à capturer car à chaque
                angle que je choisissais, il y avait toujours un nouveau motif à
                observer.
              </p>
              <div className="w-12 h-[2px] bg-accent mx-auto mt-8" />
            </div>
          </motion.div>
        </div>
      </section>

    </PageWrapper>
  );
}
