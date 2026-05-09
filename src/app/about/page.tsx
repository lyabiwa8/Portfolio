"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase, MapPin, Globe, Mail } from "lucide-react";

const education = [
  {
    year: "2024 — 2026",
    title: "BTS Communication",
    institution: "Lycée Jacques Brel, La Courneuve",
    desc: "Stratégie de communication, création de contenu et production audiovisuelle.",
    icon: <GraduationCap size={17} />,
  },
  {
    year: "2021 — 2024",
    title: "Baccalauréat STMG (Mercatique)",
    institution: "Lycée Jean Jacques Rousseau, Sarcelles",
    desc: "Spécialisation marketing, analyse de marché et gestion commerciale.",
    icon: <GraduationCap size={17} />,
  },
];

const experience = [
  {
    year: "Mai — Juin 2025",
    title: "Assistante Communication",
    sub: "Stage",
    institution: "Women's Forum, Publicis Groupe · Paris",
    desc: "Plans de communication multicanaux, coordination d'actions, analyse de la demande.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Sept. 2024 — Présent",
    title: "Agent d'accueil & d'animation",
    sub: "",
    institution: "AASS Gym · Sarcelles",
    desc: "Encadrement d'équipes, organisation d'événements internes et externes.",
    icon: <Briefcase size={17} />,
  },
  {
    year: "Juil. — Août 2025",
    title: "Serveuse",
    sub: "",
    institution: "Mister Garden, Anjou · Paris",
    desc: "Service client, gestion des encaissements, organisation des espaces.",
    icon: <Briefcase size={17} />,
  },
];

const skills = ["Canva", "Capcut", "Figma", "Google Workspace", "Microsoft 365", "ChatGPT", "Réseaux Sociaux", "Adobe Suite"];

const languages = [
  { lang: "Français", level: "Maternelle", pct: 100 },
  { lang: "Anglais",  level: "C1",         pct: 82 },
  { lang: "Japonais", level: "A1",         pct: 18 },
  { lang: "Allemand", level: "A1",         pct: 18 },
];

/* Shared colors */
const C = {
  bg:       "#E8D5B8",
  text:     "#120A04",
  muted:    "rgba(26,15,8,0.60)",
  accent:   "#6B3E20",
  accentLt: "#8B5530",
  border:   "rgba(26,15,8,0.12)",
  card:     "rgba(255,248,236,0.55)",
};

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start mb-16 md:mb-24">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-[240px] sm:max-w-[290px] lg:max-w-[320px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div
              className="aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden img-zoom"
              style={{ boxShadow: "0 24px 64px -12px rgba(26,15,8,0.25), 0 0 0 1px rgba(107,62,32,0.14)" }}
            >
              <Image
                src="/images/photos-presentation/bio-photo.jpg"
                alt="Lya Biwa" fill sizes="320px"
                className="object-cover object-top" priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl rotate-2"
              style={{ background: C.accent, color: "#F7EDD5" }}
            >
              Événementiel
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-3 -left-3 text-[9px] font-bold uppercase tracking-widest px-3 py-2 rounded-xl -rotate-2"
              style={{ background: C.card, border: `1px solid ${C.border}`, backdropFilter: "blur(8px)", color: C.accent }}
            >
              BTS Com
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-[10px] font-semibold uppercase tracking-[0.15em]"
              style={{ background: "rgba(107,62,32,0.10)", border: "1px solid rgba(107,62,32,0.22)", color: C.accent }}
            >
              En recherche d'alternance
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display font-bold leading-tight tracking-tight mb-5"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: C.text }}
            >
              Étudiante en{" "}
              <em className="not-italic" style={{ color: C.accentLt }}>Communication.</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.6 }}
              className="space-y-3 text-base md:text-[17px] leading-relaxed mb-7"
              style={{ color: C.muted }}
            >
              <p>
                Future étudiante en{" "}
                <span style={{ color: C.text, fontWeight: 700 }}>Licence de Communication</span>,
                spécialisée en événementiel, luxe et mode.
              </p>
              <p>
                Je recherche une{" "}
                <span style={{ color: C.text, fontWeight: 700, textDecoration: "underline", textDecorationColor: C.accentLt }}>alternance d'un an</span>{" "}
                à partir de <span style={{ color: C.accent, fontWeight: 700, fontStyle: "italic" }}>septembre 2026</span>.
              </p>
            </motion.div>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {[
                { icon: <MapPin size={11} />, text: "Île-de-France" },
                { icon: <Globe  size={11} />, text: "Permis B" },
                { icon: <Mail   size={11} />, text: "lyabiwa8@gmail.com" },
              ].map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                  style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted, backdropFilter: "blur(8px)" }}
                >
                  {p.icon}{p.text}
                </span>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              href="/cv/cv-lya.pdf"
              download
              className="inline-flex items-center gap-2.5 btn-primary text-sm font-bold px-8 py-4 rounded-full"
            >
              Télécharger mon CV <Download size={15} />
            </motion.a>
          </div>
        </div>

        {/* ═══ PARCOURS ═══ */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-5">
          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: C.card, backdropFilter: "blur(12px)", border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(107,62,32,0.12)", border: "1px solid rgba(107,62,32,0.22)", color: C.accent }}
              >
                <GraduationCap size={17} />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold" style={{ color: C.text }}>Formation</h3>
            </div>

            <div className="space-y-7">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-11 relative"
                >
                  <div
                    className="absolute left-0 top-0.5 w-9 h-9 rounded-full flex items-center justify-center z-10"
                    style={{ background: "rgba(107,62,32,0.10)", border: "1px solid rgba(107,62,32,0.18)", color: C.accentLt }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-0.5" style={{ color: C.accent }}>{item.year}</span>
                  <h4 className="text-base font-display font-bold mb-0.5" style={{ color: C.text }}>{item.title}</h4>
                  <p className="text-xs font-semibold mb-1.5" style={{ color: C.muted }}>{item.institution}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26,15,8,0.55)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: C.card, backdropFilter: "blur(12px)", border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(107,62,32,0.12)", border: "1px solid rgba(107,62,32,0.22)", color: C.accent }}
              >
                <Briefcase size={17} />
              </div>
              <h3 className="text-lg md:text-xl font-display font-bold" style={{ color: C.text }}>Expérience</h3>
            </div>

            <div className="space-y-7">
              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="pl-11 relative"
                >
                  <div
                    className="absolute left-0 top-0.5 w-9 h-9 rounded-full flex items-center justify-center z-10"
                    style={{ background: "rgba(107,62,32,0.10)", border: "1px solid rgba(107,62,32,0.18)", color: C.accentLt }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest block mb-0.5" style={{ color: C.accent }}>{item.year}</span>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="text-base font-display font-bold" style={{ color: C.text }}>{item.title}</h4>
                    {item.sub && (
                      <span className="text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full" style={{ background: "rgba(107,62,32,0.12)", color: C.accent }}>
                        {item.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold mb-1.5" style={{ color: C.muted }}>{item.institution}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(26,15,8,0.55)" }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ═══ SKILLS + LANGUAGES ═══ */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: C.card, backdropFilter: "blur(12px)", border: `1px solid ${C.border}` }}
          >
            <h3 className="text-lg md:text-xl font-display font-bold mb-5" style={{ color: C.text }}>Outils & Logiciels</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
                  style={{ background: "rgba(107,62,32,0.10)", border: "1px solid rgba(107,62,32,0.18)", color: C.accent }}
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="rounded-2xl md:rounded-3xl p-6 md:p-8"
            style={{ background: C.card, backdropFilter: "blur(12px)", border: `1px solid ${C.border}` }}
          >
            <h3 className="text-lg md:text-xl font-display font-bold mb-5" style={{ color: C.text }}>Langues</h3>
            <div className="space-y-4">
              {languages.map((l) => (
                <div key={l.lang}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-semibold" style={{ color: C.text }}>{l.lang}</span>
                    <span className="text-xs font-bold" style={{ color: C.accentLt }}>{l.level}</span>
                  </div>
                  <div className="h-1 rounded-full w-full" style={{ background: "rgba(26,15,8,0.10)" }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${l.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ background: C.accent }}
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



