"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase, MapPin, Globe, Music } from "lucide-react";

const education = [
  {
    year: "2024 — 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Stratégie de communication, création de contenu, production audiovisuelle.",
    icon: <GraduationCap size={18} />,
  },
  {
    year: "2021 — 2024",
    title: "Baccalauréat STMG (Mercatique)",
    institution: "Lycée Jean Jacques Rousseau, Sarcelles",
    desc: "Spécialisation marketing, analyse de marché et gestion commerciale.",
    icon: <GraduationCap size={18} />,
  },
];

const experience = [
  {
    year: "Mai — Juin 2025",
    title: "Assistante Communication",
    sub: "Stage",
    institution: "Women's Forum, Publicis Groupe · Paris",
    desc: "Analyse de la demande annonceur, plans de com multicanaux, coordination d'actions.",
    icon: <Briefcase size={18} />,
  },
  {
    year: "Sept. 2024 — Présent",
    title: "Agent d'accueil & d'animation",
    sub: "",
    institution: "AASS Gym · Sarcelles",
    desc: "Encadrement d'équipes, organisation d'événements internes et externes.",
    icon: <Briefcase size={18} />,
  },
  {
    year: "Juil. — Août 2025",
    title: "Serveuse",
    sub: "",
    institution: "Mister Garden, Anjou · Paris",
    desc: "Service client, gestion des encaissements et organisation des espaces.",
    icon: <Briefcase size={18} />,
  },
];

const skills = [
  "Canva", "Capcut", "Figma", "Google Workspace",
  "Microsoft 365", "ChatGPT", "Réseaux Sociaux", "Adobe Suite",
];

const languages = [
  { lang: "Français", level: "Maternelle", pct: 100 },
  { lang: "Anglais", level: "C1", pct: 82 },
  { lang: "Japonais", level: "A1", pct: 18 },
  { lang: "Allemand", level: "A1", pct: 18 },
];

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20">

        {/* ═══════════════════════════════════
            HERO — Photo + Bio
        ═══════════════════════════════════ */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start mb-20 md:mb-28">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/photos-presentation/bio-photo.jpg"
                alt="Lya Biwa"
                fill
                sizes="(max-width: 768px) 320px, 360px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Badges */}
            <div className="absolute -bottom-3 -right-3 bg-accent text-white px-3 py-2 rounded-xl shadow-lg rotate-2 text-[10px] font-black uppercase tracking-widest">
              Événementiel
            </div>
            <div
              className="absolute -top-3 -left-3 text-white px-3 py-2 rounded-xl shadow-lg -rotate-2 text-[10px] font-black uppercase tracking-widest"
              style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
            >
              BTS Com
            </div>
          </motion.div>

          {/* Bio text */}
          <div className="flex-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-[10px] font-bold uppercase tracking-widest"
              style={{ background: "rgba(184,145,90,0.15)", border: "1px solid rgba(184,145,90,0.25)", color: "#B8915A" }}
            >
              En recherche d'alternance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-beige-50 mb-6 leading-tight tracking-tighter"
            >
              Étudiante en{" "}
              <em className="text-accent not-italic">Communication.</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="space-y-4 text-base md:text-lg leading-relaxed mb-8"
              style={{ color: "rgba(240,234,226,0.65)" }}
            >
              <p>
                Future étudiante en <span className="text-beige-50 font-semibold">Licence de Communication</span>, spécialisée en événementiel, luxe et mode. Passionnée par la création, la stratégie et les expériences mémorables.
              </p>
              <p>
                Je recherche une{" "}
                <span className="text-beige-50 font-bold underline decoration-accent/40 decoration-2">alternance d'un an</span>{" "}
                à partir de <span className="text-accent font-bold italic">septembre 2026</span>.
              </p>
            </motion.div>

            {/* Info pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: <MapPin size={12} />, text: "Île-de-France" },
                { icon: <Globe size={12} />, text: "Permis B" },
                { icon: <Music size={12} />, text: "lyabiwa8@gmail.com" },
              ].map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(240,234,226,0.7)" }}
                >
                  {p.icon}
                  {p.text}
                </span>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              href="/cv/cv-lya.pdf"
              download
              className="inline-flex items-center gap-2.5 bg-accent text-white text-sm font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all hover:scale-105 shadow-lg shadow-accent/20"
            >
              Télécharger mon CV <Download size={16} />
            </motion.a>
          </div>
        </div>

        {/* ═══════════════════════════════════
            PARCOURS — dark glass style
        ═══════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(184,145,90,0.15)", border: "1px solid rgba(184,145,90,0.25)" }}
              >
                <GraduationCap size={18} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-beige-50">Formation</h3>
            </div>

            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-0 before:bottom-0 before:w-px" style={{ "--tw-before-bg": "rgba(255,255,255,0.08)" } as React.CSSProperties}>
              <style>{`.parcours-line::before { background: rgba(255,255,255,0.1); }`}</style>
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-12 relative"
                >
                  <div
                    className="absolute left-0 top-0.5 w-10 h-10 rounded-full flex items-center justify-center text-accent z-10"
                    style={{ background: "rgba(184,145,90,0.12)", border: "1px solid rgba(184,145,90,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">{item.year}</span>
                  <h4 className="text-base md:text-lg font-display font-bold text-beige-50 mb-0.5">{item.title}</h4>
                  <p className="text-xs font-semibold mb-2" style={{ color: "rgba(240,234,226,0.5)" }}>{item.institution}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,234,226,0.45)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(184,145,90,0.15)", border: "1px solid rgba(184,145,90,0.25)" }}
              >
                <Briefcase size={18} className="text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-beige-50">Expérience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-12 relative"
                >
                  <div
                    className="absolute left-0 top-0.5 w-10 h-10 rounded-full flex items-center justify-center text-accent z-10"
                    style={{ background: "rgba(184,145,90,0.12)", border: "1px solid rgba(184,145,90,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent block mb-1">{item.year}</span>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-base md:text-lg font-display font-bold text-beige-50">{item.title}</h4>
                    {item.sub && (
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full" style={{ background: "rgba(184,145,90,0.15)", color: "#B8915A" }}>
                        {item.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold mb-2" style={{ color: "rgba(240,234,226,0.5)" }}>{item.institution}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(240,234,226,0.45)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ═══════════════════════════════════
            SKILLS + LANGUAGES
        ═══════════════════════════════════ */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-beige-50 mb-6">Outils & Logiciels</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-bold px-3.5 py-1.5 rounded-full"
                  style={{ background: "rgba(184,145,90,0.12)", border: "1px solid rgba(184,145,90,0.2)", color: "#B8915A" }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-xl md:text-2xl font-display font-bold text-beige-50 mb-6">Langues</h3>
            <div className="space-y-5">
              {languages.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold text-beige-50">{l.lang}</span>
                    <span className="text-xs font-bold text-accent">{l.level}</span>
                  </div>
                  <div className="h-1 rounded-full w-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full bg-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
