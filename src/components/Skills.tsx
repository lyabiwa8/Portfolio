"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Layers, Target, Zap, BarChart3 } from "lucide-react";

const C = {
  text:     "var(--text-primary)",
  muted:    "var(--text-secondary)",
  accent:   "var(--accent-primary)",
  accentLt: "var(--accent-secondary)",
  border:   "var(--border-subtle)",
  surface:  "var(--surface)",
  bg:       "var(--bg-main)",
};

interface SoftwareSkill {
  name: string;
  code: string;
  icons8Slug?: string;
  directUrl?: string;
  color: string;
  accent: string;
  level: number;
  desc: string;
}

const softwareSkills: SoftwareSkill[] = [
  { name: "Photoshop", code: "Ps", icons8Slug: "adobe-photoshop", color: "#31A8FF", accent: "#31A8FF", level: 85, desc: "Retouche & Création" },
  { name: "Illustrator", code: "Ai", icons8Slug: "adobe-illustrator", color: "#FF9A00", accent: "#FF9A00", level: 75, desc: "Vectoriel" },
  { name: "Premiere Pro", code: "Pr", icons8Slug: "adobe-premiere-pro", color: "#EA77FF", accent: "#EA77FF", level: 80, desc: "Montage Vidéo" },
  { name: "Figma", code: "Fg", icons8Slug: "figma", color: "#F24E1E", accent: "#F24E1E", level: 70, desc: "UI/UX Design" },
  { name: "Canva", code: "Cv", icons8Slug: "canva", color: "#00C4CC", accent: "#7d2ae8", level: 95, desc: "Design Rapide" },
  { name: "CapCut", code: "Cc", directUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.svg", color: "#000000", accent: "#fe2c55", level: 90, desc: "Contenu Social" },
  { name: "Google", code: "Gw", icons8Slug: "google-logo", color: "#4285F4", accent: "#4285F4", level: 95, desc: "Workspace" },
  { name: "Microsoft", code: "M3", icons8Slug: "microsoft-office-2019", color: "#0078D4", accent: "#0078D4", level: 85, desc: "Office 365" },
  { name: "Notion", code: "Nt", icons8Slug: "notion", color: "#000000", accent: "#333333", level: 85, desc: "Gestion Projet" },
];

const mainExpertise = [
  {
    title: "Créations de contenus",
    desc: "Conceptions de supports digitaux et print, incluant des flyers, visuels et montage vidéo pour campagnes publicitaires.",
    icon: <Layers className="w-6 h-6" />,
  },
  {
    title: "Stratégie marketing",
    desc: "Élaboration de plans de communication multicanaux, storytelling de marque et analyse de performance.",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Ingénierie événementielle",
    desc: "Conception de dispositifs immersifs, scénographie et design d’expériences.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "Pilotage de projet",
    desc: "Coordination opérationnelle des prestataires, gestion budgétaire et management d’équipes.",
    icon: <Target className="w-6 h-6" />,
  },
];

const languages = [
  { name: "Français", flag: "https://flagcdn.com/w80/fr.png", level: "Maternel", progress: 100 },
  { name: "Anglais", flag: "https://flagcdn.com/w80/gb.png", level: "B2 — Intermédiaire", progress: 75 },
  { name: "Japonais", flag: "https://flagcdn.com/w80/jp.png", level: "A1 — Débutant", progress: 25 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] font-bold mb-4 text-accent-primary"
          >
            Savoir-Faire
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-bold leading-[1.1] tracking-tighter"
            style={{ fontSize: "clamp(2rem, 8vw, 5rem)", color: C.text }}
          >
            Expertise & <br /> <span className="text-accent-primary italic">Vision Stratégique.</span>
          </motion.h3>
        </div>

        {/* 4 Detailed Blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32">
          {mainExpertise.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-surface/90 backdrop-blur-md rounded-[2.5rem] border border-border-subtle/20 hover:border-accent-primary/30 transition-all duration-500 group soft-shadow"
            >
              <div className="w-14 h-14 bg-accent-primary text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-md">
                {exp.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4 group-hover:text-accent-primary transition-colors" style={{ color: C.text }}>
                {exp.title}
              </h4>
              <p className="text-sm font-medium leading-relaxed opacity-60" style={{ color: C.text }}>
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-20 md:gap-24">
          
          {/* Software Column */}
          <div className="lg:col-span-2 space-y-12">
            <h4 className="text-xl md:text-2xl font-display font-bold flex items-center gap-4" style={{ color: C.text }}>
              <span className="w-12 h-1 bg-accent-primary rounded-full" /> Logiciels Maîtrisés
            </h4>
            {/* Software Grid (Fixed 3-column on mobile) */}
            <div className="grid grid-cols-3 gap-3 md:gap-8">
              {softwareSkills.map((s, i) => (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(43, 33, 24, 0.15)"
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="bg-surface/90 p-4 md:p-10 rounded-[1.5rem] md:rounded-[3rem] border border-border-subtle/20 group transition-all duration-500 soft-shadow flex flex-col h-full backdrop-blur-md hover:border-accent-primary/40"
                >
                  <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-8 mb-4 md:mb-8">
                    <motion.div 
                      whileHover={{ rotate: 8, scale: 1.1 }}
                      className="w-12 h-12 md:w-20 md:h-20 rounded-2xl md:rounded-[2rem] flex items-center justify-center shadow-xl border border-white/20 transition-all duration-500 flex-shrink-0 bg-white p-2 md:p-5"
                    >
                      <div className="relative w-full h-full flex items-center justify-center">
                        <img 
                          src={s.directUrl || `https://img.icons8.com/color/96/${s.icons8Slug}.png`} 
                          alt={s.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </motion.div>
                    <div className="min-w-0 w-full">
                      <p className="font-bold text-[10px] md:text-2xl group-hover:text-accent-primary transition-colors leading-tight mb-1 md:mb-3 truncate" style={{ color: C.text }}>{s.name}</p>
                      <p className="text-[7px] md:text-xs uppercase tracking-[0.2em] opacity-50 font-bold leading-tight" style={{ color: C.text }}>{s.desc}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-2 md:pt-8">
                    <div className="h-1 md:h-2 w-full bg-bg-main/50 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 + i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: s.accent }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Languages Column */}
          <div className="space-y-16">
            <div className="space-y-10">
              <h4 className="text-xl md:text-2xl font-display font-bold flex items-center gap-4" style={{ color: C.text }}>
                <span className="w-12 h-1 bg-accent-primary rounded-full" /> Langues
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
                {languages.map((l, i) => (
                  <motion.div
                    key={l.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-surface/90 p-3 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border border-border-subtle/20 flex flex-col md:flex-row items-center md:items-center gap-3 md:gap-6 shadow-sm group hover:border-accent-primary/20 transition-all duration-500 backdrop-blur-md"
                  >
                    <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden border border-border-subtle/20 flex-shrink-0 shadow-inner">
                      <Image 
                        src={l.flag} 
                        alt={l.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="flex-1 w-full space-y-2 md:space-y-3">
                      <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-1">
                        <span className="font-bold text-xs md:text-base group-hover:text-accent-primary transition-colors text-center md:text-left" style={{ color: C.text }}>{l.name}</span>
                        <span className="text-[7px] md:text-[9px] font-bold uppercase tracking-widest text-accent-secondary whitespace-nowrap">{l.level}</span>
                      </div>
                      <div className="h-1 md:h-1.5 w-full bg-bg-main rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                          className="h-full bg-accent-primary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote / Vision */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-accent-primary/5 border border-accent-primary/10 relative overflow-hidden group shadow-inner"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 text-accent-primary">
                <Target size={120} />
              </div>
              <p className="font-display italic text-xl leading-relaxed relative z-10" style={{ color: C.text }}>
                "Ma vision allie créativité pure et rigueur opérationnelle pour transformer chaque concept en une expérience mémorable."
              </p>
              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="w-10 h-1 bg-accent-primary rounded-full" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-accent-primary">Vision 2026</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
