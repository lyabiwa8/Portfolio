"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PageWrapper } from "@/components/PageWrapper";
import { Download, GraduationCap, Briefcase, MapPin, Globe, Mail, Car } from "lucide-react";
import { getAssetPath } from "@/utils/imageLoader";

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

const C = {
  bg:       "var(--bg-main)",
  text:     "var(--text-primary)",
  muted:    "var(--text-secondary)",
  accent:   "var(--accent-primary)",
  accentLt: "var(--accent-secondary)",
  border:   "var(--border-subtle)",
  card:     "var(--surface)",
};

export default function About() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-40 pb-20">

        {/* ═══ HERO ═══ */}
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center lg:items-start mb-20 md:mb-32">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] mx-auto lg:mx-0 flex-shrink-0"
          >
            <div
              className="aspect-[3/4] rounded-[3rem] overflow-hidden soft-shadow border border-border-subtle/20"
            >
              <Image
                src={getAssetPath("/images/photos-presentation/bio-photo.jpg")}
                alt="Lya Biwa" fill sizes="380px"
                className="object-cover object-top brightness-[1.02]" priority
              />
            </div>
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-2xl rotate-3 bg-accent-primary text-white shadow-xl"
            >
              Événementiel
            </motion.div>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 text-[10px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-2xl -rotate-3 bg-surface backdrop-blur-md border border-border-subtle/30 text-accent-primary shadow-lg"
            >
              BTS Com
            </motion.div>
          </motion.div>

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display font-bold leading-tight tracking-tighter mb-8"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", color: C.text }}
            >
              Étudiante en{" "}
              <em className="not-italic text-accent-primary">Communication.</em>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4 text-base md:text-xl leading-relaxed mb-10 font-medium"
              style={{ color: C.muted }}
            >
              <p>
                Future étudiante en licence de communication (spécialisation événementiel luxe, mode ou sport), je recherche une alternance d’un an à partir de septembre 2026 afin d’aider à concevoir et coordonner des événements, tout en optimisant leur visibilité et leur performance.
              </p>
            </motion.div>

            {/* Pills */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10"
            >
              {[
                { icon: <MapPin size={13} />, text: "Île-de-France" },
                { icon: <Car    size={13} />, text: "Permis B" },
                { icon: <Mail   size={13} />, text: "lyabiwa8@gmail.com" },
              ].map((p) => (
                <span
                  key={p.text}
                  className="inline-flex items-center gap-2 text-xs font-bold px-5 py-2.5 rounded-full bg-surface/50 border border-border-subtle/20 text-text-secondary shadow-sm"
                >
                  {p.icon}{p.text}
                </span>
              ))}
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href={getAssetPath("/cv/cv_lya_alternance.pdf")}
              download
              className="inline-flex items-center gap-3 btn-primary text-sm font-bold px-10 py-5 rounded-full shadow-lg"
            >
              Télécharger mon CV <Download size={18} />
            </motion.a>
          </div>
        </div>

        {/* ═══ PARCOURS ═══ */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[2.5rem] p-8 md:p-12 bg-surface/40 backdrop-blur-sm border border-border-subtle/20 soft-shadow"
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-primary text-white shadow-md"
              >
                <GraduationCap size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary">Formation</h3>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-border-subtle" />
              
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="pl-16 relative group"
                >
                  <div
                    className="absolute left-0 top-1 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 bg-bg-main border border-border-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all duration-500 shadow-sm"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 text-accent-secondary">{item.year}</span>
                  <h4 className="text-lg md:text-xl font-display font-bold mb-1 text-text-primary">{item.title}</h4>
                  <p className="text-[10px] font-bold mb-3 text-accent-primary/60 uppercase tracking-widest">{item.institution}</p>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-[2.5rem] p-8 md:p-12 bg-surface/40 backdrop-blur-sm border border-border-subtle/20 soft-shadow"
          >
            <div className="flex items-center gap-4 mb-10">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-primary text-white shadow-md"
              >
                <Briefcase size={22} />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-bold text-text-primary">Expérience</h3>
            </div>

            <div className="space-y-10 relative">
              <div className="absolute left-[23px] top-4 bottom-4 w-[1px] bg-border-subtle" />

              {experience.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="pl-16 relative group"
                >
                  <div
                    className="absolute left-0 top-1 w-[46px] h-[46px] rounded-full flex items-center justify-center z-10 bg-bg-main border border-border-subtle text-accent-primary group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all duration-500 shadow-sm"
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] block mb-2 text-accent-secondary">{item.year}</span>
                  <div className="flex flex-wrap items-center gap-3 mb-1.5">
                    <h4 className="text-lg md:text-xl font-display font-bold text-text-primary">{item.title}</h4>
                    {item.sub && (
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-accent-secondary text-white shadow-sm">
                        {item.sub}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-bold mb-3 text-accent-primary/60 uppercase tracking-widest">{item.institution}</p>
                  <p className="text-sm md:text-base leading-relaxed text-text-secondary font-medium">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </PageWrapper>
  );
}
